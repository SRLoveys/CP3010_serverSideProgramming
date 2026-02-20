import Link from "next/link";

export default async function CharacterList() {
    const url = "https://rickandmortyapi.com/api/character"

    const response = await fetch(url);
    const responseJSON= await response.json();

    return (
        <div>
            {responseJSON.results.map((character => 
                <Link key={character.id} href={`/characters/${character.id}`}>
                    <p>{character.name}</p>
                </Link>
            ))}
        </div>
    );
}
