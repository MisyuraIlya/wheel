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
  Drawer
} from '@/utils/tables';

interface RowData {
  id: number;
  task: React.ReactNode;
  delivery: React.ReactNode;
  pickupAt: React.ReactNode;
  completion: React.ReactNode;
  company: React.ReactNode;
  status: React.ReactNode;
  picking: React.ReactNode;
  urgency: React.ReactNode;
  roundtrip: React.ReactNode;
  cod: React.ReactNode;
  driver: React.ReactNode;
  sourceName: React.ReactNode;
  destination: React.ReactNode;
  zone: React.ReactNode;
  destinationContactName: React.ReactNode;
  notes: React.ReactNode;
  createdAt: React.ReactNode;
  orderId: React.ReactNode;
  parcelsQuantity: React.ReactNode;
  palletsQuantity: React.ReactNode;
  failureReasons: React.ReactNode;
  misparChavilot: React.ReactNode;  // “מספר חבילות”
  mechir: React.ReactNode;          // “מחיר”
  kamut: React.ReactNode;           // “כמות”
  someName: React.ReactNode;        // “SOME_NAME”
  temperature: React.ReactNode;     // “Temperature”
}

export default async function Page() {
  const rows: RowData[] = [
    {
      id: 1,
      task: <Drawer.Task/>,
      delivery: <Link href="/deliveries/101">5 deliveries</Link>,
      pickupAt: <DateComponent value="2025-06-10T14:30:00Z" />,
      completion: <Text value="2025-06-12T09:00:00Z" />,
      company: <Text value="Acme Inc." />,
      status: <Text value="Delivered" />,
      picking: <Text value="Picked" />,
      urgency: <Text value="High" />,
      roundtrip: <Text value="No" />,
      cod: <Text value="Yes" />,
      driver: <User id={3} name="Jane Roe" avatarUrl="/avatars/jane.png" />,
      sourceName: <Text value="Web" />,
      destination: <Text value="Tel Aviv" />,
      zone: <Text value="Zone A" />,
      destinationContactName: <Text value="Yossi Cohen" />,
      notes: <Text value="Left at door" />,
      createdAt: <DateComponent value="2025-06-08T11:15:00Z" />,
      orderId: <Text value="ORD-12345" />,
      parcelsQuantity: <Text value="3" />,
      palletsQuantity: <Text value="1" />,
      failureReasons: <Text value="—" />,
      misparChavilot: <Text value="3" />,
      mechir: <Text value="₪120" />,
      kamut: <Text value="5 kg" />,
      someName: <Text value="CustomField" />,
      temperature: <Text value="22°C" />,
    },
    // …more rows
  ];

  const columns: { key: keyof RowData; label: string }[] = [
    { key: 'task',                    label:' Task number'},
    { key: 'delivery',                label: 'Delivery' },
    { key: 'pickupAt',                label: 'Pickup At' },
    { key: 'completion',              label: 'Completion' },
    { key: 'company',                 label: 'Company' },
    { key: 'status',                  label: 'Status' },
    { key: 'picking',                 label: 'Picking' },
    { key: 'urgency',                 label: 'Urgency' },
    { key: 'roundtrip',               label: 'Roundtrip' },
    { key: 'cod',                     label: 'COD' },
    { key: 'driver',                  label: 'Driver' },
    { key: 'sourceName',              label: 'Source Name' },
    { key: 'destination',             label: 'Destination' },
    { key: 'zone',                    label: 'Zone' },
    { key: 'destinationContactName',  label: 'Destination Contact Name' },
    { key: 'notes',                   label: 'Notes' },
    { key: 'createdAt',               label: 'Created At' },
    { key: 'orderId',                 label: 'Order ID' },
    { key: 'parcelsQuantity',         label: 'Parcels Quantity' },
    { key: 'palletsQuantity',         label: 'Pallets Quantity' },
    { key: 'failureReasons',          label: 'Failure Reasons' },
    { key: 'misparChavilot',          label: 'מספר חבילות' },
    { key: 'mechir',                  label: 'מחיר' },
    { key: 'kamut',                   label: 'כמות' },
    { key: 'someName',                label: 'SOME_NAME' },
    { key: 'temperature',             label: 'Temperature' },
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map(({ key, label }) => (
              <TableCell key={key}>{label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              {columns.map(({ key }) => (
                <TableCell key={key}>{row[key]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
