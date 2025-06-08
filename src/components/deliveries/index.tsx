'use client'
import React, { useState, useMemo } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from '@mui/material';
import Filter from './Filter';
import Row from './Row';

// 1) define your full list of columns (in display order)
const allColumns: Array<keyof IDelivery> = [
  'orderId',
  'createdAt',
  'locationName',
  'timeConstraints',
  'eta',
  'city',
  'address',
  'name',
  'destinationPhone',
  'status',
  'picking',
  'date',
  'driver',
  'urgency',
  'zone',
  'notes',
  'failureReasons',
  'company',
  'task',
  'loading',
  'price',
  'paymentMethod',
  'totalPayment',
  'cod',
  'codType',
  'orderItemsCount',
  'palletsQuantity',
  'parcelsQuantity',
  'daysLate',
  'inboundId',
  'outboundId',
  'outboundStatus',
  'photo',
  'signature',
  'sms',
  'deliveryType',
  'origin',
  'printed',
  'roundtrip',
  'numberOfPackages',
  'unitPrice',
  'quantity',
  'someName',
  'temperature',
];

// 2) human‐readable labels
const columnLabels: Record<keyof IDelivery, string> = {
  orderId: 'Order ID',
  createdAt: 'Created At',
  locationName: 'Location Name',
  timeConstraints: 'Time Constraints',
  eta: 'ETA',
  city: 'City',
  address: 'Address',
  name: 'Name',
  destinationPhone: 'Destination Phone',
  status: 'Status',
  picking: 'Picking',
  date: 'Date',
  driver: 'Driver',
  urgency: 'Urgency',
  zone: 'Zone',
  notes: 'Notes',
  failureReasons: 'Failure Reasons',
  company: 'Company',
  task: 'Task',
  loading: 'Loading',
  price: 'Price',
  paymentMethod: 'Payment Method',
  totalPayment: 'Total Payment',
  cod: 'COD',
  codType: 'COD Type',
  orderItemsCount: 'Order Items Count',
  palletsQuantity: 'Pallets Quantity',
  parcelsQuantity: 'Parcels Quantity',
  daysLate: 'Days Late',
  inboundId: 'Inbound ID',
  outboundId: 'Outbound ID',
  outboundStatus: 'Outbound Status',
  photo: 'Photo',
  signature: 'Signature',
  sms: 'SMS',
  deliveryType: 'Delivery Type',
  origin: 'Origin',
  printed: 'Printed',
  roundtrip: 'Roundtrip',
  numberOfPackages: 'Number of Packages',
  unitPrice: 'Unit Price',
  quantity: 'Quantity',
  someName: 'SOME_NAME',
  temperature: 'Temperature',
};

// 3) your data array (replace with your real data source)
const deliveries: IDelivery[] = [
  {
    orderId: 'ORD001',
    createdAt: '2025-06-01T08:30:00Z',
    locationName: 'Warehouse A',
    timeConstraints: '09:00 - 12:00',
    eta: '2025-06-02T10:00:00Z',
    city: 'Jerusalem',
    address: '123 Market St',
    name: 'Acme Corp',
    destinationPhone: '+972-2-1234567',
    status: 'Unassigned',
    picking: 'New',
    date: '2025-06-02',
    driver: 'driver1',
    urgency: 'High',
    zone: 'Zone 1',
    notes: '',
    failureReasons: '',
    company: 'DigiTrade',
    task: 'Delivery',
    loading: 'Yes',
    price: '100.00',
    paymentMethod: 'Credit Card',
    totalPayment: '100.00',
    cod: '0',
    codType: 'None',
    orderItemsCount: 5,
    palletsQuantity: 2,
    parcelsQuantity: 10,
    daysLate: 0,
    inboundId: 'INB001',
    outboundId: 'OUT001',
    outboundStatus: 'In Transfer',
    photo: '',
    signature: '',
    sms: 'Sent',
    deliveryType: 'Standard',
    origin: 'Factory X',
    printed: false,
    roundtrip: false,
    numberOfPackages: 10,
    unitPrice: '20.00',
    quantity: 5,
    someName: 'Sample Item',
    temperature: 'Ambient',
  },
  {
    orderId: 'ORD002',
    createdAt: '2025-06-01T09:00:00Z',
    locationName: 'Warehouse B',
    timeConstraints: '14:00 - 18:00',
    eta: '2025-06-02T16:00:00Z',
    city: 'Tel Aviv',
    address: '456 Industrial Rd',
    name: 'Beta LLC',
    destinationPhone: '+972-3-7654321',
    status: 'Assigned',
    picking: 'Pending',
    date: '2025-06-02',
    driver: 'driver2',
    urgency: 'Normal',
    zone: 'Zone 2',
    notes: 'Handle with care',
    failureReasons: '',
    company: 'DigiTrade',
    task: 'Pickup',
    loading: 'No',
    price: '200.00',
    paymentMethod: 'Cash',
    totalPayment: '200.00',
    cod: '200.00',
    codType: 'Full',
    orderItemsCount: 8,
    palletsQuantity: 3,
    parcelsQuantity: 15,
    daysLate: 1,
    inboundId: 'INB002',
    outboundId: 'OUT002',
    outboundStatus: 'Warehouse',
    photo: '',
    signature: '',
    sms: 'Not Sent',
    deliveryType: 'Express',
    origin: 'Factory Y',
    printed: true,
    roundtrip: true,
    numberOfPackages: 15,
    unitPrice: '25.00',
    quantity: 8,
    someName: 'Another Item',
    temperature: 'Cold',
  },
];

const Deliveries: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [dateFrom, setDateFrom] = useState<Date | null>(null);
  const [dateTo, setDateTo] = useState<Date | null>(null);
  const [visibleColumns, setVisibleColumns] = useState(allColumns);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // filter logic
  const filtered = useMemo(() => {
    return deliveries.filter((d) => {
      const joined = Object.values(d)
        .filter((v) => typeof v === 'string')
        .join(' ')
        .toLowerCase();
      if (searchText && !joined.includes(searchText.toLowerCase())) {
        return false;
      }
      const dt = new Date(d.date);
      if (dateFrom && dt < dateFrom) return false;
      if (dateTo && dt > dateTo) return false;
      return true;
    });
  }, [searchText, dateFrom, dateTo]);

  const handleChangePage = (_: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => setPage(newPage);
  const handleChangeRowsPerPage = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  const paginated = useMemo(() => {
    const start = page * rowsPerPage;
    return filtered.slice(start, start + rowsPerPage);
  }, [filtered, page, rowsPerPage]);

  return (
    <Box p={2}>
      <Filter
        columns={allColumns.map((key) => ({ key, label: columnLabels[key] }))}
        visibleColumns={visibleColumns}
        onVisibleColumnsChange={setVisibleColumns}
        searchText={searchText}
        onSearchTextChange={setSearchText}
        dateFrom={dateFrom}
        dateTo={dateTo}
        onDateFromChange={setDateFrom}
        onDateToChange={setDateTo}
      />

      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              {visibleColumns.map((col) => (
                <TableCell key={col}>{columnLabels[col]}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginated.map((d) => (
              <Row key={d.orderId} delivery={d} visibleColumns={visibleColumns} />
            ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={filtered.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25, 50]}
        />
      </TableContainer>
    </Box>
  );
};

export default Deliveries;