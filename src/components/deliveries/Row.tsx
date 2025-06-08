// Row.tsx
'use client'
import React, { useState } from 'react';
import {
  TableRow,
  TableCell,
  Select,
  MenuItem,
  SelectChangeEvent,
  Avatar,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

// Option lists defined locally in Row
const pickingOptions = [
  'New',
  'Pending',
  'Picked',
  'Partially Picked',
] as const;

const statusOptions = [
  'Unassigned',
  'Assigned',
  'Picked Up',
  'Completed',
  'Canceled',
  'Warehouse',
  'Out of Warehouse',
  'In Transfer',
  'Failed',
] as const;

type DriverOption = {
  id: string;
  firstName: string;
  lastName: string;
  imageUrl: string;
  phone: string;
  nickName: string;
  externalId: string;
  licenseExpirationDate: string;
  driverType: string;
  email: string;
  username: string;
  password: string;
  homeAddress: string;
  name: string;
  city: string;
  street: string;
  houseNumber: string;
};

// Static driver options for select
const driverOptions: DriverOption[] = [
  {
    id: 'driver1',
    firstName: 'John',
    lastName: 'Doe',
    imageUrl: 'https://example.com/avatar1.jpg',
    phone: '123-456-7890',
    nickName: 'JD',
    externalId: 'DRV001',
    licenseExpirationDate: '2025-12-31',
    driverType: 'Full-time',
    email: 'john.doe@example.com',
    username: 'johndoe',
    password: '••••••••',
    homeAddress: '123 Main St',
    name: 'John Doe',
    city: 'Jerusalem',
    street: 'Main St',
    houseNumber: '123',
  },
  {
    id: 'driver2',
    firstName: 'Alice',
    lastName: 'Smith',
    imageUrl: 'https://example.com/avatar2.jpg',
    phone: '987-654-3210',
    nickName: 'Ally',
    externalId: 'DRV002',
    licenseExpirationDate: '2026-03-15',
    driverType: 'Part-time',
    email: 'alice.smith@example.com',
    username: 'alices',
    password: '••••••••',
    homeAddress: '456 Elm St',
    name: 'Alice Smith',
    city: 'Tel Aviv',
    street: 'Elm St',
    houseNumber: '456',
  },
  // ...add more drivers as needed
];

type RowProps = {
  delivery: IDelivery;
  visibleColumns: Array<keyof IDelivery>;
};

const Row: React.FC<RowProps> = ({ delivery, visibleColumns }) => {
  // local state for editable selects
  const [picking, setPicking] = useState<string>(delivery.picking);
  const [status, setStatus] = useState<string>(delivery.status);
  const [driver, setDriver] = useState<string>(delivery.driver);

  const renderCell = (key: keyof IDelivery) => {
    const val = delivery[key];

    // Photo / Signature unchanged
    if (key === 'photo' || key === 'signature') {
      return val ? (
        <img src={val as string} alt={key} style={{ maxWidth: 50 }} />
      ) : (
        '—'
      );
    }
    // Boolean unchanged
    if (typeof val === 'boolean') {
      return val ? 'Yes' : 'No';
    }

    // Picking select
    if (key === 'picking') {
      return (
        <Select
          value={picking}
          size="small"
          onChange={(e: SelectChangeEvent<string>) => setPicking(e.target.value)}
        >
          {pickingOptions.map((opt) => (
            <MenuItem key={opt} value={opt}>
              {opt}
            </MenuItem>
          ))}
        </Select>
      );
    }

    // Status select
    if (key === 'status') {
      return (
        <Select
          value={status}
          size="small"
          onChange={(e: SelectChangeEvent<string>) => setStatus(e.target.value)}
        >
          {statusOptions.map((opt) => (
            <MenuItem key={opt} value={opt}>
              {opt}
            </MenuItem>
          ))}
        </Select>
      );
    }

    // Driver select with rich options
    if (key === 'driver') {
      return (
        <Select
          value={driver}
          size="small"
          onChange={(e: SelectChangeEvent<string>) => setDriver(e.target.value)}
          renderValue={(selectedId) => {
            const d = driverOptions.find((dr) => dr.id === selectedId);
            return d ? `${d.firstName} ${d.lastName}` : '—';
          }}
        >
          {driverOptions.map((d) => (
            <MenuItem key={d.id} value={d.id}>
              <ListItemIcon>
                <Avatar src={d.imageUrl} alt={`${d.firstName} ${d.lastName}`} />
              </ListItemIcon>
              <ListItemText
                primary={`${d.firstName} ${d.lastName}`}
                secondary={`Phone: ${d.phone}, Type: ${d.driverType}`}
              />
            </MenuItem>
          ))}
        </Select>
      );
    }

    // Default fallback
    return String(val ?? '—');
  };

  return (
    <TableRow>
      {visibleColumns.map((col) => (
        <TableCell key={col}>{renderCell(col)}</TableCell>
      ))}
    </TableRow>
  );
};

export default Row;
