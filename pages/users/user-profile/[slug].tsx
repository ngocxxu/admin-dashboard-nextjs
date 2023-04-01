import { TextHeader } from '@/components/Text';
import { USER_LIST_ROUTE } from '@/utils/consts';
import React from 'react';

const UserProfile = () => {
  return (
    <div>
      <TextHeader
        titleText='User Profile'
        titleButton='Edit'
        path={USER_LIST_ROUTE}
      />
    </div>
  );
};

export default UserProfile;
