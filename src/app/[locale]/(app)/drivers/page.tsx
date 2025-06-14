import React from 'react';

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper
} from '@mui/material';

import {
  Location,
  User,
  QrCode,
  Link,
  Drawer,
  Text,
  DateComponent,
  Menu
} from '@/utils/tables';

interface RowData {
  id: number;
  location: React.ReactNode;
  driver: React.ReactNode;
  connectQr: React.ReactNode;
  deliveries: React.ReactNode;
  open: React.ReactNode;
  username: React.ReactNode;
  appVersion: React.ReactNode;
  lastActive: React.ReactNode;
  licenseExpiration: React.ReactNode;
  actions: React.ReactNode;
}

export default async function Page() {
  const rows: RowData[] = [
    {
      id: 1,
      location: <Location value="New York, USA" />,       
      driver: <User id={2} name="John Doe" avatarUrl="/avatars/john.png" />,
      connectQr: <QrCode value="driver-1" />,
      deliveries: <Link href="/deliveries/101">5 deliveries</Link>,
      open: <Drawer itemId={1} />,
      username: <Text value="johndoe" />,
      appVersion: <Text value="1.2.3" />,
      lastActive: <Text value="2025-06-10 14:30" />,
      licenseExpiration: <DateComponent value="2025-12-31" />,
      actions: <Menu options={["View", "Edit", "Disable"]} />
    },
    {
      id: 2,
      location: <Location value="Berlin, Germany" />,
      driver: <User id={2} name="Maria Schmidt" avatarUrl="/avatars/maria.png" />,
      connectQr: <QrCode value="driver-2" />,
      deliveries: <Link href="/deliveries/102">8 deliveries</Link>,
      open: <Drawer itemId={2} />,
      username: <Text value="mariasm" />,
      appVersion: <Text value="2.0.0" />,
      lastActive: <Text value="2025-06-11 09:15" />,
      licenseExpiration: <DateComponent value="2026-01-15" />,
      actions: <Menu options={["View", "Edit", "Disable"]} />
    }
    // Add more mock rows as needed
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Location</TableCell>
            <TableCell>Driver</TableCell>
            <TableCell>Connect with QR Code</TableCell>
            <TableCell>Deliveries</TableCell>
            <TableCell>Open</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>App Version</TableCell>
            <TableCell>Last Active</TableCell>
            <TableCell>License Expiration Date</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.location}</TableCell>
              <TableCell>{row.driver}</TableCell>
              <TableCell>{row.connectQr}</TableCell>
              <TableCell>{row.deliveries}</TableCell>
              <TableCell>{row.open}</TableCell>
              <TableCell>{row.username}</TableCell>
              <TableCell>{row.appVersion}</TableCell>
              <TableCell>{row.lastActive}</TableCell>
              <TableCell>{row.licenseExpiration}</TableCell>
              <TableCell>{row.actions}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
