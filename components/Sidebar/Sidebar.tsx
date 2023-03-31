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
import { useRouter } from 'next/router';
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
      { label: 'Customer List', path: '/customers/customer-list' },
      { label: 'Customer Profile', path: '/customers/customer-profile/[slug]' },
    ],
    path: '/customers',
  },
  {
    icon: IconBuildingStore,
    label: 'Products',
    rightSection: <IconChevronRight size='1rem' stroke={1.5} />,
    children: [
      { label: 'Add Product', path: '/products/add-product' },
      { label: 'Product List', path: '/products/product-list' },
    ],
    path: '/products',
  },
  {
    icon: IconShoppingCart,
    label: 'Orders',
    rightSection: <IconChevronRight size='1rem' stroke={1.5} />,
    children: [
      { label: 'New Order', path: '/orders/new-order' },
      { label: 'Order History', path: '/orders/order-history' },
      { label: 'Order Detail', path: '/orders/order-detail' },
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
  const router = useRouter();

  const items = data.map((item, index) => (
    <Link href={item.path} passHref legacyBehavior>
      <NavLink
        classNames={{
          root: 'py-4',
          label: `uppercase text-md ${
            router.pathname === `${item.path}` ? 'text-black' : 'text-gray-400'
          }`,
        }}
        key={item.label}
        active={router.pathname === `${item.path}`}
        label={item.label}
        icon={<item.icon size='1rem' stroke={1.5} />}
        childrenOffset={28}
      >
        {item.children &&
          item.children.map((item, idx) => (
            <div className='block'>
              <Link href={item.path} passHref legacyBehavior>
                <NavLink
                  classNames={{
                    label: `uppercase text-md ${
                      router.pathname === `${item.path}`
                        ? 'text-black'
                        : 'text-gray-400'
                    }`,
                  }}
                  active={router.pathname === `${item.path}`}
                  key={idx}
                  label={item.label}
                />
              </Link>
            </div>
          ))}
      </NavLink>
    </Link>
  ));

  return (
    <div className='flex'>
      <div className='w-[300px] h-screen bg-white border-r-[1px] flex flex-col justify-between'>
        <div>
          <div className='ml-3'>
            <div className='my-4'>
              <Link href='/' passHref>
                <Image
                  src='/assets/img/logoo.png'
                  alt='me'
                  width='30'
                  height='30'
                />
              </Link>
            </div>
          </div>

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
