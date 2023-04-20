import { TButtonCustom1 } from '@/typescript/General';
import { Button, Menu, Modal, Popover, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconCaretDown, IconPencil, IconTrash } from '@tabler/icons-react';
import { useRouter } from 'next/router';
import React from 'react';

const ButtonActionProductList = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal size="80%" opened={opened} onClose={close} title='Product Detail' centered>
        {/* Modal content */}
      </Modal>

      <Button.Group>
        <Button onClick={open} className='bg-blue-600' variant='filled'>
          Info
        </Button>
        <Menu shadow='md' width={200}>
          <Menu.Target>
            <Button
              className='bg-blue-500'
              classNames={{ root: 'pr-0' }}
              leftIcon={<IconCaretDown />}
              variant='filled'
            />
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item icon={<IconPencil color='blue' size={14} />}>
              Edit
            </Menu.Item>
            <Menu.Item icon={<IconTrash color='red' size={14} />}>
              Delete
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Button.Group>
    </>
  );
};

export default ButtonActionProductList;