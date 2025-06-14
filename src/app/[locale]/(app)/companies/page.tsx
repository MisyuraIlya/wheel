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
  User,
  Link,
  Text,
  DateComponent,
} from '@/utils/tables';

interface RowData {
  id: number;
  user: React.ReactNode;
  deliveries: React.ReactNode;
  date: React.ReactNode;
  Email: React.ReactNode;
  Phone: React.ReactNode;
  Gov: React.ReactNode; 
  ID: React.ReactNode;  
  ExternalID: React.ReactNode;
  Integrations: React.ReactNode;  
  Auto: React.ReactNode; 
  update: React.ReactNode; 
  location: React.ReactNode;
}

export default async function Page() {
  const rows: RowData[] = [
    {
      id: 1,
      user: <User id={2} name="John Doe" avatarUrl="/avatars/john.png" />,
      deliveries: <Link href="/deliveries/101">5 deliveries</Link>,
      date: <DateComponent value="2026-01-15" />,
      Email: <Text value="johndoe@example.com" />,
      Phone: <Text value="1.2.3" />,
      Gov: <Text value="2025-06-10 14:30" />,
      ID: <Text value="ABC123" />,
      ExternalID: <Text value="EXT456" />,
      Integrations: <Text value="Stripe, PayPal" />,
      Auto: <Text value="Enabled" />,
      update: <Text value="2025-06-12" />,
      location: <Text value="Tel Aviv" />,
    },
  ];

  const columns: (keyof Omit<RowData, 'id'>)[] = [
    'user',
    'deliveries',
    'date',
    'Email',
    'Phone',
    'Gov',
    'ID',
    'ExternalID',
    'Integrations',
    'Auto',
    'update',
    'location',
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell key={col}>
                {col.charAt(0).toUpperCase() + col.slice(1)}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              {columns.map((col) => (
                <TableCell key={col}>
                  {row[col]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
