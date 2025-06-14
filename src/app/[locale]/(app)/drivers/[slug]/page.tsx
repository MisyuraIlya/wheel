import UserForm from '@/components/User/UserForm'
import { Box, Typography } from '@mui/material'
import { revalidatePath } from 'next/cache'

export const metadata = {
  title: 'Driver Profile',
}

export async function saveActive(formData: FormData) {
  'use server'

  const active: IUser = {
    lastActivity: new Date(formData.get('lastActivity') as string),
    firstName: String(formData.get('firstName')),
    lastName: String(formData.get('lastName')),
    image: String(formData.get('image')),
    phone: String(formData.get('phone')),
    nickName: String(formData.get('nickName') || ''),
    dateOfBirth: new Date(formData.get('dateOfBirth') as string),
    startDate: new Date(formData.get('startDate') as string),
    licenseExpirationDate: new Date(
      formData.get('licenseExpirationDate') as string
    ),
    showPastUnhandled: formData.get('showPastUnhandled') === 'on',
    sendPushNotificationOnAssignment:
      formData.get('sendPushNotificationOnAssignment') === 'on',
    allowSmsOnRouteProgress:
      formData.get('allowSmsOnRouteProgress') === 'on',
    requireLocationShare: formData.get('requireLocationShare') === 'on',
    externalId: String(formData.get('externalId')),
    driverType: String(formData.get('driverType')),
  }

  await fetch('/api/active', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...active,
      lastActivity: active.lastActivity.toISOString(),
      dateOfBirth: active.dateOfBirth.toISOString().split('T')[0],
      startDate: active.startDate.toISOString().split('T')[0],
      licenseExpirationDate:
        active.licenseExpirationDate.toISOString().split('T')[0],
    }),
  })

  revalidatePath('/driver')
}

export default function DriverPage() {
  const mockActive: IUser = {
    lastActivity: new Date(),
    firstName: 'לירון',
    lastName: 'עזריאלנט',
    image: 'https://via.placeholder.com/150',
    phone: '0503324240',
    nickName: 'לירון',
    dateOfBirth: new Date('1990-01-01'),
    startDate: new Date('2020-05-20'),
    licenseExpirationDate: new Date('2025-12-31'),
    showPastUnhandled: true,
    sendPushNotificationOnAssignment: false,
    allowSmsOnRouteProgress: true,
    requireLocationShare: false,
    externalId: 'DRV-12345',
    driverType: 'Regular',
  }

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Driver Profile
      </Typography>
      <UserForm defaultData={mockActive} />
    </Box>
  )
}
