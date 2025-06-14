// src/components/Tasks/TabsSection.tsx
import React, { FC, useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';

import DetailsTab from './tabs/DetailsTab';
import ProofOfDeliveryTab from './tabs/ProofOfDeliveryTab';
import DocumentsTab from './tabs/DocumentsTab';
import CustomerMessagesTab from './tabs/CustomerMessagesTab';
import CommentsTab from './tabs/CommentsTab';
import ChangesLogTab from './tabs/ChangesLogTab';

const tabLabels = [
  'Details',
  'Proof of Delivery',
  'Documents',
  'Customer Messages',
  'Comments',
  'Changes Log',
] as const;

const tabComponents = [
  DetailsTab,
  ProofOfDeliveryTab,
  DocumentsTab,
  CustomerMessagesTab,
  CommentsTab,
  ChangesLogTab,
];

const TabsSection: FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const ActivePanel = tabComponents[activeTab];

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={activeTab}
        onChange={(_, v) => setActiveTab(v)}
        sx={{ mt: 2 }}
        variant="scrollable"
        scrollButtons="auto"
      >
        {tabLabels.map((label) => (
          <Tab key={label} label={label} />
        ))}
      </Tabs>

      <Box sx={{ mt: 3 }}>
        <ActivePanel />
      </Box>
    </Box>
  );
};

export default TabsSection;
