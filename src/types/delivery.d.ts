interface IDelivery {
  orderId: string;             // Order ID
  createdAt: string;           // Created At (ISO timestamp or formatted string)
  locationName: string;        // Location name
  timeConstraints: string;     // Time constraints
  eta: string;                 // ETA
  city: string;                // City
  address: string;             // Address
  name: string;                // Name
  destinationPhone: string;    // Destination Phone
  status: string;              // Status
  picking: string;             // Picking
  date: string;                // Date (ISO date or formatted string)
  driver: string;              // Driver
  urgency: string;             // Urgency
  zone: string;                // Zone
  notes: string;               // Notes
  failureReasons: string;      // Failure Reasons
  company: string;             // Company
  task: string;                // Task
  loading: string;             // Loading
  price: string;               // Price
  paymentMethod: string;       // Payment Method
  totalPayment: string;        // Total Payment
  cod: string;                 // COD
  codType: string;             // COD Type
  orderItemsCount: number;     // Order Items Count
  palletsQuantity: number;     // Pallets Quantity
  parcelsQuantity: number;     // Parcels Quantity
  daysLate: number;            // Days late
  inboundId: string;           // Inbound ID
  outboundId: string;          // Outbound ID
  outboundStatus: string;      // Outbound status
  photo?: string;              // Photo URL/base64
  signature?: string;          // Signature URL/base64
  sms: string;                 // SMS
  deliveryType: string;        // Delivery type
  origin: string;              // Origin
  printed: boolean;            // Printed
  roundtrip: boolean;          // Roundtrip
  numberOfPackages: number;    // מספר חבילות → numberOfPackages
  unitPrice: string;           // מחיר → unitPrice
  quantity: number;            // כמות → quantity
  someName: string;            // SOME_NAME
  temperature: string;         // Temperature
}