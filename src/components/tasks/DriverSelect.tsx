import React, { FC } from 'react';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';

interface Props {
  drivers: IDriver[];
  value: string;
  onChange: (id: string) => void;
}

const DriverSelect: FC<Props> = ({ drivers, value, onChange }) => (
  <FormControl sx={{ minWidth: 150, mr: 2, mb: { xs: 1, sm: 0 } }} size="small">
    <InputLabel id="driver-select-label">Driver</InputLabel>
    <Select
      labelId="driver-select-label"
      value={value}
      label="Driver"
      onChange={(e: SelectChangeEvent<string>) => onChange(e.target.value as string)}
    >
      {drivers.map((d) => (
        <MenuItem key={d.id} value={d.id}>
          {d.label}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default DriverSelect;