import { TextHeader } from '@/components/Text';
import { ORDER_HISTORY_ROUTE } from '@/utils/consts';
import React from 'react';

const OrderHistory = () => {
  return (
    <div>
      <TextHeader titleText='Order History' path={ORDER_HISTORY_ROUTE} />
    </div>
  );
};

export default OrderHistory;
