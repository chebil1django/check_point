import React from 'react'
import Name from "./Name";
import Price from "./Price";
import Image from "./Image";
import Description from "./Description";

const sampleJSON = [{
  name: "C1",
  price: "100£",
  description: "This is a description of product1",
  image: "https://picsum.photos/id/50/200/300",
},
{
  name: "C2",
  price: "200£",
  description: "This is a description of product2",
  image: "https://picsum.photos/id/20/200/300",
},
{
  name: "C3",
  price: "300£",
  description: "This is a description of product3",
  image: "https://picsum.photos/id/10/200/300",
}
,
{
  name: "C4",
  price: "400£",
  description: "This is a description of product4",
  image: "https://picsum.photos/id/18/200/300",
}
];

export const Product = () => {
  return (
    <div className="App">
      {sampleJSON.map((prod) => (
        <div className="card">
        <Image  imgSrc={prod.image}></Image>
        <Name title={prod.name}className="card-Name"></Name>
        <Description description={prod.description}className="card-description"></Description>
        <Price price_value = {prod.price} className="card-Price"></Price>
    </div>
      ))}
    </div>
  );
}
export default Product;