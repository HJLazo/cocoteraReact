import Product from './product';

const product3 = new Product(
  'Product 3',
  'https://res.cloudinary.com/wusinho1/image/upload/v1715211977/foto9_bhihoo.jpg',
  'Category 1'
);

const product4 = new Product(
  'Product 4',
  'https://res.cloudinary.com/wusinho1/image/upload/v1715211972/foto6_vutaku.jpg',
  'Category 1'
);

const product5 = new Product(
  'Product 5',
  'https://res.cloudinary.com/wusinho1/image/upload/v1715211973/foto7_gh9qzp.jpg',
  'Category 1'
);

const product6 = new Product(
  'Product 6',
  'https://res.cloudinary.com/wusinho1/image/upload/v1715211973/foto8_o2nb3w.jpg',
  'Category 2'
);

const product7 = new Product(
  'Product 7',
  'https://res.cloudinary.com/wusinho1/image/upload/v1715211972/foto5_omtjt1.jpg',
  'Category 2'
);


const product8 = new Product(
  'Product 8',
  'https://res.cloudinary.com/wusinho1/image/upload/v1715211967/foto4_fcywhz.jpg',
  'Category 3'
);

const product9 = new Product(
  'Product 9',
  'https://res.cloudinary.com/wusinho1/image/upload/v1715211967/foto3_pg3dpw.jpg',
  'Category 3'
);

const product10 = new Product(
  'Product 10',
  'https://res.cloudinary.com/wusinho1/image/upload/v1715211967/foto2_hkyhfz.jpg',
  'Category 3'
);


const ProductCollection = [product3, product4, product5, product6, product7, product8, product9, product10];

export default ProductCollection;