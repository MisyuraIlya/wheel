export const statusOptions = [
  'UNASSIGNED',
  'ASSIGNED',
  'PICKED',
  'COMPLETED',
  'CANCELED',
  'IN_INVENTORY',
  'OUT_INVENTORY',
  'FAILED',
  'IN_TRANSFER',
] as const;

export const pickStatusOptions = [
  'NEW',
  'PENDING',
  'PICKED',
  'PARTIALLY_PICKED',
] as const;