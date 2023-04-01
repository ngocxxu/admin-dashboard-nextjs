import { TextHeader } from '@/components/Text';
import { ORDER_DETAIL_ROUTE } from '@/utils/consts';
import React from 'react';

const OrderDetail = () => {
  return (
    <div>
      <TextHeader titleText='Order Detail' path={ORDER_DETAIL_ROUTE} />
    </div>
  );
};

export default OrderDetail;
