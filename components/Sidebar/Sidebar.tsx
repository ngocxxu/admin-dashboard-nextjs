import { NavLink } from '@mantine/core';
import {
  IconBuildingStore,
  IconChevronRight,
  IconLayoutDashboard,
  IconShoppingCart,
  IconStar,
  IconUsers,
} from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { ScriptProps } from 'next/script';
import React, { useState } from 'react';
import Header from '../Header/Header';

const data = [
  {
    icon: IconLayoutDashboard,
    label: 'Dashboard',
    path: '/',
  },
  {
    icon: IconUsers,
    label: 'Customers',
    rightSection: <IconChevronRight size='1rem' stroke={1.5} />,
    children: [
      { label: 'Customer List', path: '/customers' },
      { label: 'Customer Profile', path: '/customers/' },
    ],
    path: '/customers',
  },
  {
    icon: IconBuildingStore,
    label: 'Products',
    rightSection: <IconChevronRight size='1rem' stroke={1.5} />,
    children: [
      { label: 'Add Product', path: '/products' },
      { label: 'Product List', path: '/products' },
    ],
    path: '/products',
  },
  {
    icon: IconShoppingCart,
    label: 'Orders',
    rightSection: <IconChevronRight size='1rem' stroke={1.5} />,
    children: [
      { label: 'New Order', path: '/orders' },
      { label: 'Order History', path: '/orders' },
      { label: 'Order Detail', path: '/orders' },
    ],
    path: '/orders',
  },
  {
    icon: IconStar,
    label: 'Reviews',
    path: '/reviews',
  },
];

const Sidebar: React.FC<ScriptProps> = ({ children }) => {
  const [active, setActive] = useState(0);
  const items = data.map((item, index) => (
    <Link href={item.path} passHref>
      <NavLink
        key={item.label}
        active={index === active}
        label={item.label}
        icon={<item.icon size='1rem' stroke={1.5} />}
        onClick={() => setActive(index)}
        childrenOffset={28}
      >
        {item.children &&
          item.children.map((item, idx) => (
            <Link href={item.path} passHref>
              <NavLink key={idx} label={item.label} />
            </Link>
          ))}
      </NavLink>
    </Link>
  ));

  return (
    <div className='flex'>
      <div className='w-[300px] h-screen bg-white border-r-[1px] flex flex-col justify-between'>
        <div>
          <Link href='/'>
            <div className='my-4'>
              <Image
                src='/assets/img/logoo.png'
                alt='me'
                width='30'
                height='30'
              />
            </div>
          </Link>
          <span className='border-b-[1px] border-gray-200 w-full'></span>

          {items}
        </div>
      </div>

      <main className='w-full'>
        <Header />
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
