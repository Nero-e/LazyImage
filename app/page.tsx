"use client"
import { useState, useEffect } from "react";
import RandomFox from "@/components/RandomFox";
import RandomNumber from "@/utils/RandomNumber";
import CharacterComponet from "@/components/CharacterComponet";

// const Random = () => Math.floor(Math.random() * 123) + 1;
const GenerateId = () => Math.random().toString(36).substr(2,9);

type ImageItems = Array<{ id: string; url: string }>;

type CharacterProps = {
  id: number;
  name?: string;
  status?: string;
  species?: string;
  image: string;
};

export default function Home() {
  // const randomNumber = RandomNumber();
  // const [image, setImage] = useState<ImageItems>([
  //   { id: GenerateId() , url: `https://randomfox.ca/images/${randomNumber}.jpg` },
  // ]);
  // const [image1, setImage1] = useState<Array<{ id: string; url: string }>>([
  //   { id: "1", url: "url" },
  // ]);
  return (
    <>
      {/* <RandomFox image={`https://randomfox.ca/images/${randomNumber}.jpg`}/> */}
      {/* {image.map((image, i) => (
        <div key={i}>
          <RandomFox image={image.url} />
        </div>
      ))} */}
    <CharacterComponet/>
    </>
  );
}
