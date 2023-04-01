import { TextHeader } from '@/components/Text';
import { USER_LIST_ROUTE } from '@/utils/consts';
import React from 'react';

const UserList = () => {
  return (
    <div>
      <TextHeader
        titleText='User List'
        titleButton='Add User'
        path={USER_LIST_ROUTE}
      />
    </div>
  );
};

export default UserList;
