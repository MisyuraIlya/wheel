"use client";

import React from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  TextField,
  Button,
  ButtonGroup,
  Tabs,
  Tab
} from '@mui/material';
import {
  Home as HomeIcon,
  ReceiptLong as ReceiptLongIcon,
  CalendarMonth as CalendarMonthIcon,
  Business as BusinessIcon,
  Map as MapIcon,
  Chat as ChatIcon,
  Warehouse as WarehouseIcon
} from '@mui/icons-material';
import { usePathname, useRouter } from '@/i18n/navigation';
import { format, subMonths } from 'date-fns';
import { useSearchParams } from 'next/navigation';
const drawerWidth = 120;

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  // Extract path segments
  const segments = pathname.split('/').filter(Boolean);
  const section = segments[0] || '';
  const subSection = segments[1] || '';
  const basePath = section ? `/${section}` : '/';

  // Common date/query defaults
  const today = format(new Date(), 'yyyy-MM-dd');
  const oneMonthAgo = format(subMonths(new Date(), 1), 'yyyy-MM-dd');
  const dateFrom = searchParams.get('dateFrom') || oneMonthAgo;
  const dateTo = searchParams.get('dateTo') || today;
  const searchValue = searchParams.get('search') || '';
  const typeFilter = searchParams.get('type') || 'all';
  const statusFilter = searchParams.get('status') || 'open';
  const preset = searchParams.get('preset') || '';

  const updateQuery = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === null) params.delete(key);
    else params.set(key, value);
    router.push(`${pathname.split('?')[0]}?${params.toString()}`);
  };

  const onEnterSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') updateQuery('search', (e.target as HTMLInputElement).value);
  };

  const onTabChange = (_: React.SyntheticEvent, value: string) => {
    router.push(`${basePath}/${value}?${searchParams.toString()}`);
  };

  // Build UI based on route
  let icon: React.ReactNode = null;
  let title = '';
  let filters: React.ReactNode = null;
  let actions: React.ReactNode = null;
  console.log('section',section)
  switch (section) {
    case '':
      icon = <HomeIcon />;
      title = 'Home';
      filters = (
        <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
          <TextField
            label="From"
            type="date"
            value={dateFrom}
            onChange={e => updateQuery('dateFrom', e.target.value)}
            InputLabelProps={{ shrink: true }}
            size="small"
          />
          <TextField
            label="To"
            type="date"
            value={dateTo}
            onChange={e => updateQuery('dateTo', e.target.value)}
            InputLabelProps={{ shrink: true }}
            size="small"
          />
        </Box>
      );
      actions = (
        <ButtonGroup variant="outlined" sx={{ mt: 1 }}>
          {['today', 'tomorrow', 'this_month', 'last_month'].map(p => (
            <Button
              key={p}
              variant={preset === p ? 'contained' : 'outlined'}
              onClick={() => updateQuery('preset', p)}
            >
              {p.split('_').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')}
            </Button>
          ))}
        </ButtonGroup>
      );
      break;

    case 'orders':
      icon = <ReceiptLongIcon />;
      title = 'Orders';
      actions = (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
          <TextField
            placeholder="Search..."
            defaultValue={searchValue}
            onKeyDown={onEnterSearch}
            size="small"
          />
          <Button>Settings</Button>
        </Box>
      );
      break;

    case 'store':
      icon = <CalendarMonthIcon />;
      title = 'Planning (0 / 12)';
      actions = (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1 }}>
          <ButtonGroup>
            {['all', 'pickup', 'delivery', 'return'].map(opt => (
              <Button
                key={opt}
                variant={typeFilter === opt ? 'contained' : 'outlined'}
                onClick={() => updateQuery('type', opt)}
              >
                {opt[0].toUpperCase() + opt.slice(1)}
              </Button>
            ))}
          </ButtonGroup>
          <ButtonGroup>
            {['open', 'closed', 'canceled'].map(opt => (
              <Button
                key={opt}
                variant={statusFilter === opt ? 'contained' : 'outlined'}
                onClick={() => updateQuery('status', opt)}
              >
                {opt[0].toUpperCase() + opt.slice(1)}
              </Button>
            ))}
          </ButtonGroup>
          <Button>Excel</Button>
        </Box>
      );
      break;

    case 'companies':
      icon = <BusinessIcon />;
      title = 'Companies';
      filters = (
        <TextField
          placeholder="Search..."
          defaultValue={searchValue}
          onKeyDown={onEnterSearch}
          size="small"
          sx={{ mt: 1 }}
        />
      );
      actions = (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
          <Button>Excel</Button>
          <Button>Companies Map</Button>
          <Button>Invite</Button>
          <Button>Add Company</Button>
        </Box>
      );
      break;

    case 'routes':
      icon = <MapIcon />;
      title = 'Routes';
      filters = (
        <TextField
          type="date"
          defaultValue={searchParams.get('date') || today}
          onChange={e => updateQuery('date', e.target.value)}
          size="small"
          sx={{ mt: 1 }}
        />
      );
      actions = (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
          <Button>Driver Settings</Button>
          <Button>Add Driver</Button>
        </Box>
      );
      break;

    case 'communication':
      icon = <ChatIcon />;
      title = 'Communication';
      filters = (
        <Tabs value={subSection || 'settings'} onChange={onTabChange} sx={{ mt: 1 }}>
          <Tab label="Settings" value="settings" />
          <Tab label="Templates" value="templates" />
          <Tab label="Block List" value="blockList" />
        </Tabs>
      );
      actions = (
        <Button sx={{ mt: 1 }}>Connect WhatsApp</Button>
      );
      break;

    case 'warehouses':
      icon = <WarehouseIcon />;
      title = 'Warehouses';
      filters = (
        <Tabs value={subSection || 'activeWarehouses'} onChange={onTabChange} sx={{ mt: 1 }}>
          <Tab label="Active Warehouses" value="activeWarehouses" />
          <Tab label="Inactive Warehouses" value="inactiveWarehouses" />
        </Tabs>
      );
      actions = (
        <Button sx={{ mt: 1 }}>Add Warehouse</Button>
      );
      break;

    default:
      break;
  }

  return (
    <AppBar position="static" color="secondary" elevation={1} sx={{ zIndex: theme => theme.zIndex.drawer - 1 }}>
      <Toolbar>
        <Box sx={{ width: '100%', pl: `${drawerWidth}px` }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {icon}
            <Typography sx={{ ml: 1 }}>{title}</Typography>
          </Box>
          {filters}
          {actions}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
