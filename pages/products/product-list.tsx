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
    </div>
  );
};

export default ProductList;
