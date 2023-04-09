import { TextHeader } from '@/components/Text';
import { selectAuthState, setAuthState } from '@/store/reducer/authSlice';
import { USER_LIST_ROUTE } from '@/utils/consts';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const UserList = () => {
  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();

  return (
    <div>
      <TextHeader
        titleText='User List'
        titleButton='Add User'
        path={USER_LIST_ROUTE}
      />
      <div>
        <div>{authState ? 'Logged in' : 'Not Logged In'}</div>
        <button
          onClick={() =>
            authState
              ? dispatch(setAuthState(false))
              : dispatch(setAuthState(true))
          }
        >
          {authState ? 'Logout' : 'LogIn'}
        </button>
      </div>
    </div>
  );
};

export default UserList;
