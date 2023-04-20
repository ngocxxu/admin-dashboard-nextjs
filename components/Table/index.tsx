import { Image, Table } from '@mantine/core';
import ButtonActionProductList from '../ProductsPage/ButtonActionProductList';

const elements = [
  {
    img: 'https://picsum.photos/50',
    name: 'Carbon',
    price: 1200,
    offer: '25% OFF',
    purchased: 100,
    stock: 2000,
    status: 'ACTIVE',
    date: '2021-10-30',
    action: () => <ButtonActionProductList />,
  },
  {
    img: 'https://picsum.photos/50',
    name: 'Nitrogen',
    price: 1200,
    offer: '25% OFF',
    purchased: 100,
    stock: 2000,
    status: 'ACTIVE',
    date: '2021-10-30',
    action: () => <ButtonActionProductList />,
  },
  {
    img: 'https://picsum.photos/50',
    name: 'Yttrium',
    price: 1200,
    offer: '25% OFF',
    purchased: 100,
    stock: 2000,
    status: 'ACTIVE',
    date: '2021-10-30',
    action: () => <ButtonActionProductList />,
  },
];

const TableFeature = () => {
  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>
        <Image src={element.img} alt='product' width={50} height={50} />
      </td>
      <td>{element.name}</td>
      <td>{element.price}</td>
      <td>{element.offer}</td>
      <td>{element.purchased}</td>
      <td>{element.stock}</td>
      <td>{element.status}</td>
      <td>{element.date}</td>
      <td>{element.action()}</td>
    </tr>
  ));

  return (
    <Table verticalSpacing='xs'>
      <thead>
        <tr>
          <th>Product</th>
          <th>Name</th>
          <th>Price</th>
          <th>Offer</th>
          <th>Purchased</th>
          <th>Stock</th>
          <th>Status</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default TableFeature;
