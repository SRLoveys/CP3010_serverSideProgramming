import Character from "@/components/Character"

export default async function CharacterDetail( props) {
    const {id} = await props.params;

    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

    const responseJSON = await response.json();

    return (
        <div>
           <Character
            name={responseJSON.name}
            species={responseJSON.species}
            image={responseJSON.image}
           />
        </div>
    );
}

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }]
}