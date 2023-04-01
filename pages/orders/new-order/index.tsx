import { TextHeader } from '@/components/Text';
import { NEW_ORDER_ROUTE } from '@/utils/consts';
import React from 'react';

const NewOrder = () => {
  return (
    <div>
      <TextHeader
        titleText='New Orders'
        path={NEW_ORDER_ROUTE}
      />
    </div>
  );
};

export default NewOrder;
