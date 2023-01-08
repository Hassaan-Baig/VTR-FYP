import React from 'react';
import Link from 'next/link';
import mongoose from 'mongoose';
import Image from 'next/image';
import Product from '../models/Product';

const Hoodies = ({ products }) => {
  return (
    <div>
      <section className="body-font text-gray-600">
        <div className="container mx-auto px-5 py-24">
          <div className="-m-4 flex flex-wrap">
            {products.map((item) => {
              return (
                <div className="w-full p-4 md:w-1/2 lg:w-1/4" key={item._id}>
                  <Link href={`/products/${item.slug}`}>
                    <a className="relative block h-48 overflow-hidden rounded">
                      <Image
                        alt="ecommerce"
                        className="block h-full w-full object-scale-down object-top"
                        src={item.img}
                        layout="fill"
                      />
                    </a>
                  </Link>
                  <div className="mt-4">
                    <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500">
                      {item.category.toUpperCase()}
                    </h3>
                    <h2 className="title-font text-lg font-medium text-gray-900">
                      {item.title}
                    </h2>
                    <p className="mt-1">₨{item.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let products = await Product.find({ category: 'pant' });
  return {
    props: { products: JSON.parse(JSON.stringify(products)) }, // will be passed to the page component as props
  };
}

export default Hoodies;
