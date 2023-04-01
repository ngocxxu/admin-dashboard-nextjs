import React from 'react';
import { Breadcrumbs, Anchor } from '@mantine/core';

const items = [
  { title: 'Home', href: '/' },
  { title: 'Mantine hooks', href: '#' },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

const BreadcrumbsFeature = () => {
  return (
    <Breadcrumbs separator='>' mt='xs'>
      {items}
    </Breadcrumbs>
  );
};

export default BreadcrumbsFeature;
