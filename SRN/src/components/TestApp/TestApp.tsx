import { useEffect,   useState } from "react";
import AppBar from "./AppBar";
import FavPoke from "./FavPoke";


export type pokeType = {
  id: string;
  favId: string;
  name: string;
  abilities: {
    ability: { name: string; url: string };
  }[];
  sprites: {
    other: {
      home: {
        front_default: string;
      };
    };
  };
};

const TestApp = () => {
  const [poke, setPoke] = useState<pokeType>();
  const [loading, setLoading] = useState<boolean>(false);
  const [number, setNumber] = useState<number>(1);
  const [fav, setFav] = useState<pokeType[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        await setLoading(true);
        await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
          .then((response) => response.json())
          .then((response) => setPoke(response));
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [number]);

  const nextPoke = () => {
    setNumber(number + 1);
  };
  const prevPoke = () => {
    setNumber(number - 1);
    if (number < 2) {
      setNumber(1);
    }
  };

  const addFav = () => {
    const newPoke = {...poke, favId: Date.now().toString(36)}
    setFav((fav: any) => [...fav, newPoke]);
  };

  const deleteFav = (favId: string) => {
    setFav(fav.filter((fav: any) => fav.favId !== favId));
  };

  console.log(fav);

  if (loading) {
    return <div>Loading....</div>;
  } else {
    return (
      <div className="flex-col">
        <AppBar />
        <div className="container flex-cols divide-y-2 md:flex md:divide-x-2 bg-gray-100 m-auto rounded-sm drop-shadow">
          <div className="md:w-1/2 text-center flex flex-col justify-start items-center p-2">
            <h1 className="text-xl underline">name : {poke?.name}</h1>
            <img
              className="w-1/2"
              src={poke?.sprites.other.home.front_default}
            />
            <h2 className="underline text-lg">Skill</h2>
            <ul>
              {poke?.abilities.map((skill, index) => (
                <li key={index}>
                  {index + 1} : {skill.ability.name}
                </li>
              ))}
            </ul>
            <button
              className="bg-green-300 px-3 rounded hover:-translate-y-1 my-3"
              onClick={addFav}
            >
              Add to favorite
            </button>
            <div className="flex">
              <button
                className="bg-blue-500 shadow-lg shadow-blue-400 rounded-sm px-2 hover:bg-blue-800 hover:text-white w-[70px] mr-3"
                onClick={prevPoke}
              >
                Pev
              </button>
              <button
                className="bg-blue-500 shadow-lg shadow-blue-400 rounded-sm px-2 hover:bg-blue-800 hover:text-white w-[70px]"
                onClick={nextPoke}
              >
                Next
              </button>
            </div>
          </div>
          <div className="md:w-1/2 text-center p-2">
          
            <FavPoke fav={fav} deleteFav={deleteFav}/>
          </div>
        </div>
      </div>
    );
  }
};

export default TestApp;
