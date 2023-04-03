import FormAddProduct from '@/components/Form/FormAddProduct';
import { TextHeader } from '@/components/Text';
import UploadImage from '@/components/UploadImage';
import { PRODUCT_LIST_ROUTE } from '@/utils/consts';
import { Box, Group } from '@mantine/core';

const AddProduct = () => {
  return (
    <div>
      <TextHeader
        titleText='Product'
        titleButton='View All'
        path={PRODUCT_LIST_ROUTE}
      />
      <Box className='m-6'>
        <p>Add Product</p>
        <div className='grid lg:grid-cols-3 gap-4'>
          <div className='col-span-1'>
            <UploadImage />
          </div>
          <div className='lg:col-span-2 col-span-1'>
            <FormAddProduct />
          </div>
        </div>
      </Box>
    </div>
  );
};

export default AddProduct;
