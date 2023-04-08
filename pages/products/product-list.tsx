import TableFeature from '@/components/Table';
import { TextHeader } from '@/components/Text';
import { ADD_PRODUCT_ROUTE } from '@/utils/consts';

const ProductList = () => {
  return (
    <div>
      <TextHeader
        titleText='Product List'
        titleButton='Add Product'
        path={ADD_PRODUCT_ROUTE}
      />
      <div className='bg-white m-6 border p-6'>
        <TableFeature />
      </div>
    </div>
  );
};

export default ProductList;
