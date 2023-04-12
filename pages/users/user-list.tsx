import { TextHeader } from '@/components/Text';
import { selectAuthState, setAuthState } from '@/store/reducer/authSlice';
import { wrapper } from '@/store/store';
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

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      // we can set the initial state from here
      // we are setting to false but you can run your custom logic here
    await store.dispatch(setAuthState(false));
      console.log('State on server', store.getState());
      return {
        props: {
          authState: false,
        },
      };
    }
);

export default UserList;
