import { Button, Group, MultiSelect, TextInput, Textarea } from '@mantine/core';
import React from 'react';
import { ButtonCustom1 } from '../Button';

const FormAddProduct = () => {
  return (
    <form>
      <div className='flex items-center gap-4'>
        <div className='flex-1'>
          <TextInput label='PRODUCT NAME' withAsterisk />
        </div>
        <div className='flex-1'>
          <MultiSelect
            label='SELECT CATEGORIES'
            placeholder='Pick at least one category'
            data={[
              { value: 'rick', label: 'Rick', group: 'Used to be a pickle' },
              { value: 'morty', label: 'Morty', group: 'Never was a pickle' },
              { value: 'beth', label: 'Beth', group: 'Never was a pickle' },
              { value: 'summer', label: 'Summer', group: 'Never was a pickle' },
            ]}
          />
        </div>
      </div>

      <TextInput label='SLUG' />

      <div className='flex items-center gap-4'>
        <div className='flex-1'>
          <TextInput label='PRICE ( In USD )' withAsterisk />
        </div>
        <div className='flex-1'>
          <TextInput label='QUANTITY' withAsterisk />
        </div>
      </div>

      <Textarea label='Description' withAsterisk />

      <TextInput label='PRODUCT TAGS ( Type and make comma to separate tags )' />

      <Button
        className='bg-purple300 hover:bg-hoverPurple400'
        radius='xl'
        size='sm'
      >
        Submit
      </Button>
    </form>
  );
};

export default FormAddProduct;
