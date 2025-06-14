import { saveActive } from '@/app/[locale]/(app)/drivers/[slug]/page'
import {
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Button,
} from '@mui/material'

interface UserFormProps {
  defaultData: IUser
}

export default function UserForm({ defaultData }: UserFormProps) {
  return (
    <Box
      component="form"
      action={saveActive}
      method="post"
      noValidate
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 600, mx: 'auto' }}
    >
      <TextField
        label="Last Activity"
        name="lastActivity"
        type="datetime-local"
        defaultValue={defaultData.lastActivity.toISOString().slice(0, 16)}
        required
        fullWidth
      />

      <TextField
        label="First Name"
        name="firstName"
        type="text"
        defaultValue={defaultData.firstName}
        required
        fullWidth
      />

      <TextField
        label="Last Name"
        name="lastName"
        type="text"
        defaultValue={defaultData.lastName}
        required
        fullWidth
      />

      <TextField
        label="Image URL"
        name="image"
        type="text"
        defaultValue={defaultData.image}
        fullWidth
      />

      <TextField
        label="Phone"
        name="phone"
        type="tel"
        defaultValue={defaultData.phone}
        fullWidth
      />

      <TextField
        label="Nick Name"
        name="nickName"
        type="text"
        defaultValue={defaultData.nickName || ''}
        fullWidth
      />

      <TextField
        label="Date of Birth"
        name="dateOfBirth"
        type="date"
        defaultValue={defaultData.dateOfBirth.toISOString().slice(0, 10)}
        fullWidth
      />

      <TextField
        label="Start Date"
        name="startDate"
        type="date"
        defaultValue={defaultData.startDate.toISOString().slice(0, 10)}
        fullWidth
      />

      <TextField
        label="License Expiration Date"
        name="licenseExpirationDate"
        type="date"
        defaultValue={defaultData.licenseExpirationDate.toISOString().slice(0, 10)}
        fullWidth
      />

      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              name="showPastUnhandled"
              defaultChecked={defaultData.showPastUnhandled}
            />
          }
          label="Show past unhandled"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="sendPushNotificationOnAssignment"
              defaultChecked={defaultData.sendPushNotificationOnAssignment}
            />
          }
          label="Send push notification on assignment"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="allowSmsOnRouteProgress"
              defaultChecked={defaultData.allowSmsOnRouteProgress}
            />
          }
          label="Allow SMS on route progress"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="requireLocationShare"
              defaultChecked={defaultData.requireLocationShare}
            />
          }
          label="Require location share"
        />
      </FormGroup>

      <TextField
        label="External ID"
        name="externalId"
        type="text"
        defaultValue={defaultData.externalId}
        fullWidth
      />

      <TextField
        label="Driver Type"
        name="driverType"
        type="text"
        defaultValue={defaultData.driverType}
        fullWidth
      />

      <Box sx={{ textAlign: 'center', mt: 3 }}>
        <Button type="submit" variant="contained">
          Save
        </Button>
      </Box>
    </Box>
  )
}
