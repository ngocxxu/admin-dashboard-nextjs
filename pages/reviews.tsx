import { TextHeader } from '@/components/Text';
import { REVIEWS_ROUTE } from '@/utils/consts';
import React from 'react';

const Reviews = () => {
  return (
    <div>
      <TextHeader
        titleText='Reviews'
        path={REVIEWS_ROUTE}
      />
    </div>
  );
};

export default Reviews;
