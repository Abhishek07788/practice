import React, { useEffect } from "react";
import { useState } from "react";

const Practice = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let res = await fetch(
        "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products"
        );
      let data = await res.json();
      console.log(data.data);
      const filtered = data.data.filter((el)=> el.price >= 2000).sort((a,b)=>{
        if(a.title < b.title) return -1;
        if(a.title > b.title) return  1;
        return 0;
      })
      setData(filtered);
    }
    fetchData();
  }, []);

  console.log(data);



  return <div>Practice</div>;
};

export default Practice;
