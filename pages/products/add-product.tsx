import FormAddProduct from '@/components/Form/FormAddProduct';
import { TextHeader } from '@/components/Text';
import UploadImage from '@/components/UploadImage';
import { PRODUCT_LIST_ROUTE } from '@/utils/consts';
import { Box, Divider } from '@mantine/core';

const AddProduct = () => {
  return (
    <div>
      <TextHeader
        titleText='Product'
        titleButton='View All'
        path={PRODUCT_LIST_ROUTE}
      />
      <Box className='m-6 border p-4 pt-0 rounded-lg shadow-md bg-white'>
        <p className='font-bold text-gray-600 m-3'>Add Product</p>
        <Divider className='mb-5' />
        <div className='grid lg:grid-cols-4 gap-4'>
          <div className='col-span-1'>
            <UploadImage />
          </div>
          <div className='lg:col-span-3 col-span-1'>
            <FormAddProduct />
          </div>
        </div>
      </Box>
    </div>
  );
};

export default AddProduct;
