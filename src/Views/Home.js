import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../Comoponents/Loader';
import ProductCard from '../Comoponents/ProductCard';
import { useAxiosGet } from '../Hooks/HttpReq';
// import HelloWorld from '../Comoponents/HelloWorld';

function Home() {
  const url = `https://5f0864ce9464ba0016dd3b24.mockapi.io/api/v1/products?page=1&limit=10`;

  let products = useAxiosGet(url);

  let content = null;

  if (products.error) {
    content = <p>There was an error, please refresh or try again later</p>;
  }

  if (products.loading) {
    content = <Loader />;
  }

  if (products.data) {
    content = products.data.map((product) => (
      <div key={product.id}>
        <ProductCard product={product} />
      </div>
    ));
  }
  return (
    <div>
      <h1 className="font-bold text-2xl">Best Sellers</h1>
      {content}
    </div>
  );
}
export default Home;
