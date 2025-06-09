import React, { useEffect, useState } from 'react';

export const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProduct();
  }, []);

  console.log(products);

  return (
    <div className='py-10'>
      {/* async function for food API */}
      <div className='flex flex-col xl:flex-cols-4 gap-4 px-10 '>
        {products.map((product) => (
          <div key={product.id} className='border p-2'>
            <img src={product.image} alt={product.title} className=' h-[20vh] object-cover' />
            <h2 className='text-[15px] font-primarylato_light'>{product.title}</h2>
            {/* <p className='text-gray-600'>{product.description}</p> */}
            <p className='text-xl font-bold'>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
