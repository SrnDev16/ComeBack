import { useEffect, useState } from "react";
import AppBar from "./AppBar";
import { IoTrash } from "react-icons/io5";

type pokeType = {
  id: string;
  favId: string;
  name: string;
  abilities: {
    ability: { name: string; url: string };
  }[];
  sprites: {
    other:{
      home: {
        front_default: string;
      }
    }
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
  }, [number,fav]);

  const nextPoke = () => {
    setNumber(number + 1);
    console.log(number);
  };
  const prevPoke = () => {
    setNumber(number - 1);
    console.log(number);

    if (number < 2) {
      setNumber(1);
    }
  };

  const addFav = (name:string) => {
    setFav((fav: any) => [...fav, poke]);
  };

  const deleteFav = (name: string) => {
    setFav(fav.filter((fav: any) => fav.name !== name));
  };

  console.log(poke);

  if (loading) {
    return <div>Loading....</div>;
  } else {
    return (
      <div className="flex-col">
        <AppBar />
        <div className="container flex-cols divide-y-2 md:flex md:divide-x-2 bg-gray-100 m-auto rounded-sm drop-shadow">
          <div className="md:w-1/2 text-center flex flex-col justify-start items-center p-2">
            <h1 className="text-xl underline">name : {poke?.name}</h1>
            <img className="w-1/2" src={poke?.sprites.other.home.front_default} />
            {/* poke.sprites?.other.home.front_default */}
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
              onClick={(poke:any) => addFav(poke.name)}
            >
              Add to favorite
            </button>
            <div className="flex">
              <button
                className="bg-blue-500 rounded-sm px-2 hover:bg-blue-800 hover:text-white w-[70px] mr-3"
                onClick={prevPoke}
              >
                Pev
              </button>
              <button
                className="bg-blue-500 rounded-sm px-2 hover:bg-blue-800 hover:text-white w-[70px]"
                onClick={nextPoke}
              >
                Next
              </button>
            </div>
          </div>
          <div className="md:w-1/2 text-center p-2">
            {fav.length === 0 ? (
              <div>Your favorite is empty</div>
            ) : (
              <div className="flex flex-wrap justify-start text-center">
                {fav?.map((fav: pokeType) => (
                  <div
                    key={fav.id}
                    className="w-1/3 flex flex-col items-center justify-center"
                  >
                    <p>{fav.name}</p>
                    <img
                      className="w-[150px]"
                      src={fav.sprites.other.home.front_default}
                      alt=""
                    />
                    {fav.id}
                    <button
                      className="my-2 bg-indigo-500 px-3 py-2 rounded text-white text-l"
                      onClick={() => deleteFav(fav.name)}
                    >
                      <IoTrash />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default TestApp;
