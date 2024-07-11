import { pokeType } from "./TestApp";
import { IoTrash } from "react-icons/io5";

interface favProps {
  fav: pokeType[];
  deleteFav: (name: string) => void;
}

const FavPoke = ({ fav, deleteFav }: favProps) => {
  if (fav.length === 0) {
    return <h1>Your favorite is empty</h1>;
  } else {
    return (
      <div className="flex flex-wrap justify-start text-center">
        {fav.map((fav: any) => (
          <div className="w-1/3 flex flex-col items-center justify-center p-2" key={fav.favId}>
            <h3>{fav.name}</h3>
            <img
              className="w-[150px]"
              src={fav.sprites.other.home.front_default}
              alt=""
            />
            <button
              className="my-2 bg-indigo-500 px-3 py-2 rounded text-white text-l"
              onClick={() => deleteFav(fav.favId)}
            >
              <IoTrash />
            </button>
          </div>
        ))}
      </div>
    );
  }
};

export default FavPoke;
