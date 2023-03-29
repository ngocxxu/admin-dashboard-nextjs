import { Button } from '@mantine/core';
import { IconDatabase } from '@tabler/icons-react';
import React from 'react';

const Header = () => {
  return (
    <div className='flex justify-between px-4 pt-4'>
      <h2>Dashboard</h2>
      <h2>Welcome Back, Bono</h2>
      <Button className='bg-white' leftIcon={<IconDatabase />} variant='white'>
        Connect to database
      </Button>
    </div>
  );
};

export default Header;
