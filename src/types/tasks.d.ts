
interface DeliveryHeaderProps {
  deliveryNumber: string;
  taskId: string;
  drivers: Driver[];
  currentStatus: Status;
  currentPickStatus: PickStatus;
}

interface IDeliveryProps {
  data: DeliveryHeaderProps;
}

type Status = "PICKED" | "UNASSIGNED" | "ASSIGNED" | "COMPLETED" | "CANCELED" | "IN_INVENTORY" | "OUT_INVENTORY" | "FAILED" | "IN_TRANSFER"


type PickStatus =   'NEW' | 'PENDING' | 'PICKED' | 'PARTIALLY_PICKED'