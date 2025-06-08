import { Card } from '@mui/material';
import React, { ReactNode } from 'react';

const LayoutCard = ({ children }: { children: ReactNode }) => {
    return (
        <Card sx={{m:'20px 30px 20px 150px', height:'100%', padding:' 20px'}}>
            {children}
        </Card>
    );
};

export default LayoutCard;