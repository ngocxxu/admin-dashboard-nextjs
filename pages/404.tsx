import { ButtonCustom1 } from '@/components/Button';
import { DASHBOARD_ROUTE } from '@/utils/consts';
import { Text } from '@mantine/core';
import Image from 'next/image';
import { useRouter } from 'next/router';

const NotFound404 = () => {
  const router = useRouter();

  return (
    <div className='flex flex-col justify-center items-center'>
      <Text
        variant='gradient'
        gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
        sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
        ta='center'
        fz='100px'
        fw={700}
      >
        404
      </Text>
      <p className='text-gray500'>Looks like something went wrong</p>
      <div className='my-8'>
        <ButtonCustom1 title='Back to Home' path={DASHBOARD_ROUTE} />
      </div>
      <div className='mw-[500px]'>
        <Image
          height='500'
          width='500'
          src='/assets/img/lightenning.png'
          alt='404'
        />
      </div>
    </div>
  );
};

export default NotFound404;
