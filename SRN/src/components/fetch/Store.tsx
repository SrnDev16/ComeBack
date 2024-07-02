import { useEffect, useState } from "react";

type myData = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

const Store = () => {
  const [data, setData] = useState<myData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await fetch("https://jsonplaceholder.typicode.com/photos")
          .then((response) => response.json())
          .then((response) => setData(response));
      } catch (err) {
        console.log("Error fetching data", err);
      } finally {
        console.log("Done fetching data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div>
      {loading ? (
        <h1>Loading.....</h1>
      ) : (
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {data.map((data: myData) => (
            <div key={data.id} className="border">
              <h1 className="">{data.title}</h1>
              <img src={data.url} alt={data.thumbnailUrl} className=""/>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Store;
