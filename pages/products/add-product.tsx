import { TextHeader } from '@/components/Text';
import { PRODUCT_LIST_ROUTE } from '@/utils/consts';

const AddProduct = () => {
  return (
    <div>
      <TextHeader
        titleText='Add Product'
        titleButton='View All'
        path={PRODUCT_LIST_ROUTE}
      />
    </div>
  );
};

export default AddProduct;
