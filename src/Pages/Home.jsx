import React, { useEffect, useState } from "react";
import ProductsList from "../Components/ProductsList";
const Home = () => {
  let [myData, setMyData] = useState([])
  useEffect(() => {
    getData();
  }, []);
  // let getData = () => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => {
  //       return res.json().then((data) => {
  //         // res = response
  //         console.log(data); setMyData(data)
  //       });
  //     })
  //     .catch((err) => console.log(err));
  // };

  let getData = async()=>{
    try{
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json()
      setMyData(data)
    }
    catch(err){
      console.log(err);
    }
  }
  return (
    <div>
      <h1>Home</h1>
      {myData.map((item)=> <h5 key={item.id}>{item.name}</h5> )}  {/* for only name */}
      {/* {myData.map((item)=> <h5 key={item.id}>{JSON.stringify(item)}</h5> )} for all data */}
      {/* <ProductsList /> */}
    </div>
  );
};

export default Home;
