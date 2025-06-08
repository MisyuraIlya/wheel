// Filter.tsx
import React from 'react';
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  SelectChangeEvent,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

type FilterProps = {
  columns: Array<{ key: keyof IDelivery; label: string }>;
  visibleColumns: Array<keyof IDelivery>;
  onVisibleColumnsChange: (cols: Array<keyof IDelivery>) => void;
  searchText: string;
  onSearchTextChange: (text: string) => void;
  dateFrom: Date | null;
  dateTo: Date | null;
  onDateFromChange: (date: Date | null) => void;
  onDateToChange: (date: Date | null) => void;
};

const Filter: React.FC<FilterProps> = ({
  columns,
  visibleColumns,
  onVisibleColumnsChange,
  searchText,
  onSearchTextChange,
  dateFrom,
  dateTo,
  onDateFromChange,
  onDateToChange,
}) => {
  const handleColsChange = (e: SelectChangeEvent<string | string[]>) => {
    // normalize into string[]
    const raw = e.target.value;
    const arr = Array.isArray(raw) ? raw : [raw];
    // cast via unknown to Array<keyof IDelivery>
    onVisibleColumnsChange((arr as unknown) as Array<keyof IDelivery>);
  };

  return (
    <Box display="flex" alignItems="center" gap={2} mb={2}>
      <TextField
        label="Search"
        size="small"
        value={searchText}
        onChange={(e) => onSearchTextChange(e.target.value)}
      />

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="From Date"
          value={dateFrom}
          onChange={onDateFromChange}
          slotProps={{ textField: { size: 'small' } }}
        />
        <DatePicker
          label="To Date"
          value={dateTo}
          onChange={onDateToChange}
          slotProps={{ textField: { size: 'small' } }}
        />
      </LocalizationProvider>

      <FormControl size="small">
        <InputLabel id="col-select-label">Columns</InputLabel>
        <Select
          labelId="col-select-label"
          multiple
          value={visibleColumns as unknown as string[]}
          onChange={handleColsChange}
          label="Columns"
          renderValue={(selected) =>
            (selected as string[])
              .map((s) => {
                const col = columns.find((c) => c.key === (s as keyof IDelivery));
                return col ? col.label : s;
              })
              .join(', ')
          }
        >
          {columns.map((col) => (
            <MenuItem key={col.key} value={col.key as string}>
              <Checkbox checked={visibleColumns.includes(col.key)} />
              <ListItemText primary={col.label} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filter;
