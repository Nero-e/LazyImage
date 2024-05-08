
export async function getCharacter(id: number) {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

    if (!response.ok) {
        throw new Error("failed to fetch");
    }
    const data = await response.json();
    return data;
}