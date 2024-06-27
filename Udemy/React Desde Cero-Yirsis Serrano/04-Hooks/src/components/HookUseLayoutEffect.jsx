import { useEffect, useLayoutEffect, useState } from 'react'

const HookUseLayoutEffect = () => {
  const [totalItems,setTotalItems] = useState(0);
  const [data,setData] = useState([]);
  
  const mockData = [
    {name:"John",lastName:"Doe"},
    {name:"John",lastName:"Wick"},
    {name:"Chuck",lastName:"Norris"},
    {name:"Lionel",lastName:"Messi"}
  ];

  useEffect(()=>{
    setTimeout(()=>{
        setData(mockData);
    },10000);
  },[]);

  useLayoutEffect(()=>{
        setTotalItems(data.length);
  },[data]);
 

  return (
    <>
      <p>Total of items: {totalItems}</p>
    </>
  )

};

export default HookUseLayoutEffect