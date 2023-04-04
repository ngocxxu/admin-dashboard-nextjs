import { ActionIcon } from '@mantine/core';
import { IconPencil } from '@tabler/icons-react';
import Image from 'next/image';

const UploadImage = () => {
  return (
    <div>
      <div className='relative'>
        <Image
          src='/assets/img/upload-img.jpg'
          alt='upload-img'
          width={765}
          height={850}
        />
        <ActionIcon
          className='absolute top-1 right-1 bg-purple300 hover:bg-hoverPurple400'
          variant='filled'
        >
          <IconPencil />
        </ActionIcon>
      </div>
      <div className='flex justify-center items-center gap-4'>
        {Array(6)
          .fill(0)
          .map((item, idx) => (
            <div className='relative'>
              <Image
                src='/assets/img/upload-img.jpg'
                alt='upload-img'
                width={80}
                height={80}
              />
              <ActionIcon
                className='absolute top-1 right-1 bg-purple300 hover:bg-hoverPurple400'
                variant='filled'
                size='xs'
              >
                <IconPencil />
              </ActionIcon>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UploadImage;
