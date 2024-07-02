import { useEffect, useState } from "react";


 type myData = {
    albumId:number;
    id:number;
    title:string;
    url:string;
    thumbnailUrl:string; 
};

const Store = () => {
    const [data, setData] = useState<myData[]>([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then(response => response.json())
        .then(response => console.log(response));
        
    },[]);

  return (
    <div>Store</div>
  )
}

export default Store