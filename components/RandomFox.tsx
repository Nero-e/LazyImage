const Random = () => Math.floor(Math.random() * 123) + 1;

const RandomFox = ():JSX.Element => {   
    
    return (
        <>
            <h1>Random Fox</h1>
            <p>Random number: {Random()}</p>
        </>
    )

}

export default RandomFox;