import React from 'react'
import RegisterImg1 from "/src/assets/P1.jpg";
import RegisterImg2 from "/src/assets/P2.jpeg";
import RegisterImg3 from "/src/assets/P3.jpeg";
import RegisterImg4 from "/src/assets/P4.jpeg";
import RegisterImg5 from "/src/assets/P5.jpeg";

const ListRendering = () => {
    const names = ['Meet', 'Dhairya', 'Rutvik', 'Sarthak', 'Harshit']
    const result = names.map((name, i) => <h1 key={i}>{name} </h1>);
    const products = [
      { id: 11, name: "Glass", image: RegisterImg1, price: 500, stock: 12 },
      { id: 12, name: "Trimmer", image: RegisterImg2, price: 1500, stock: 17 },
      { id: 13, name: "Laptop", image: RegisterImg3, price: 75500, stock: 7 },
      { id: 14, name: "Keyboard", image: RegisterImg4, price: 5500, stock: 35 },
      { id: 15, name: "Mouse", image: RegisterImg5, price: 3500, stock: 33 },
    ];
  return (
    <>
      {/* {names.map((name,i)=> <h1 key={i}>{name} </h1> )} */}
      {/* {result} */}

      {/* if we don't have to specify map function here then we can specify it up there and use it with this {result} */}
      {/* {names.map((name, i) =>{ 
       return <h1 key={i}>{name} </h1> if we put Curly brackets into the map fuction then we have compulsory have to write return keyword.
      })} */}
      {/* {products} */}

      <div className="table-responsive">
        <table className="table table-default table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Image</th>
              <th scope="col">Price</th>
              <th scope="col">Stock</th>
            </tr>
          </thead>
          <tbody>
            {products.lenght == 0 && (
              <tr>
                <td colSpan={4}>No Product Found</td>
              </tr>
            )}
            {products.map((product) => (
              <tr key={product.id}>
                <td scope="row">{product.id}</td>
                <td>{product.name}</td>
                <td>
                  <img src={product.image} height={100} width={100}/>
                </td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
              </tr>
            ))}
{/* this is the second method to show the output if we destructor array then we don't have to do product.id we can write only id */}
            {/* {products.map((product) => {
              const {id, name, image, price, stock} =product
              return <tr key={id}>
                <td scope="row">{id}</td>
                <td>{name}</td>
                <td>
                  <img src={image} height={100} width={100} />{" "}
                </td>
                <td>{price}</td>
                <td>{stock}</td>
              </tr>}
          )} */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ListRendering
