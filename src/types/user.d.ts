interface IUser {
    /** Timestamp of the driver’s last activity */
    lastActivity: Date;
    /** Driver’s first name (לירון) */
    firstName: string;
    /** Driver’s last name (עזריאלנט) */
    lastName: string;
    /** URL or base64 string for driver preview image */
    image: string;
    /** Driver’s phone number (e.g. "0503324240") */
    phone: string;
    /** Optional nickname */
    nickName?: string;
    /** Date of birth */
    dateOfBirth: Date;
    /** Start date with the company */
    startDate: Date;
    /** License expiration date */
    licenseExpirationDate: Date;
  
    /** UI flags / settings */
    showPastUnhandled: boolean;
    sendPushNotificationOnAssignment: boolean;
    allowSmsOnRouteProgress: boolean;
    requireLocationShare: boolean;
  
    /** External integration fields */
    externalId: string;
    driverType: string;
  }
  