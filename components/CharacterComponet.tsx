import { getCharacter } from "@/app/api/getCharacter";
import RandomNumber from "@/utils/RandomNumber";
import { useState, useEffect } from "react";
import ChatIcon from "@/svg/chat-3-line.svg";
import HeartIcon from "@/svg/heart-line.svg";
import BookmarkIcon from "@/svg/bookmark-line.svg";
import SendIcon from "@/svg/send-plane-line.svg";

type CharacterProps = {
  id: number;
  name?: string;
  status?: string;
  species?: string;
  image: string;
};

const CharacterComponent = () => {
  const [direction, setDirection] = useState("up");

  const handleClick = () => {
    setDirection(direction === "up" ? "down" : "up");
  };
  const [character, setCharacter] = useState<CharacterProps | null>(null);
  const randomNumber = RandomNumber();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCharacter(randomNumber);
        setCharacter(response);
      } catch (error) {
        console.error("Error al obtener el personaje:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <main className="flex flex-col flex-grow w-full min-h-screen justify-center items-center mt-4 bg-black">
        {character && (
          <div className="flex flex-col max-w-[630px] w-full h-screen justify-center items-center bg-rich-black-1000">
            <div className="flex flex-col max-w-[470px] w-full h-auto bg-rich-black-900">
              <div className="flex flex-row justify-start items-center w-auto h-auto px-[14px] py-4 lg:pl-1 lg:pb-3 lg:pt-0">
                <div className="flex flex-col mr-3">
                  <img
                    className="max-w-8 rounded-full overflow-hidden"
                    src={character.image}
                    alt={character.name}
                  />
                </div>
                <div>{character.name}</div>
              </div>
              <div className="flex">
                <div className="w-full">
                  <img
                    className="w-full h-auto overflow-hidden"
                    src={character.image}
                    alt={character.name}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex flex-row items-center">
                  <div className="p-2 m-0">
                    <button>
                      <HeartIcon className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="p-2 m-0">
                    <button>
                      <ChatIcon className="w-6 h-6 -rotate-90" />
                    </button>
                  </div>
                  <div className="p-2 m-0">
                    <button>
                      <SendIcon className="w-6 h-6" />
                    </button>
                  </div>
                </div>
                <div className="flex flex-row justify-end">
                <div className="p-2 m-0">
                    <button onClick={() => console.log("hey")}>
                      <BookmarkIcon className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};
{
  /* Mostrar otras propiedades del personaje aquí */
}

export default CharacterComponent;
