import Image from "next/image";

type PropsRandomFox = {
    image: string
}

const RandomFox = ({image}: PropsRandomFox):JSX.Element => {   
    
    return (
        <>
            <h1>Random Fox</h1>
            <Image alt="Imagen de zorro" src={image} width={320} height={320}/>
        </>
    )

}

export default RandomFox;