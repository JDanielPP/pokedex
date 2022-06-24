
import './component.css'

import {useEffect,useState} from 'react'

function App() {

  const [listpokemon, setlistpokemon] = useState({
    results: [],
  });


  const fetchPokeApi = async (item, url = "https://pokeapi.co/api/v2/pokemon?limit=175") => {
    const respuesta = await fetch(url);
    const respJson = await respuesta.json();

    if (item === "results") {
      setlistpokemon({
        ...listpokemon,
        results: respJson.results,
      });
    } else {
      setlistpokemon({
        ...listpokemon,
        [item]: respJson,
      });
    }
  };
    

    useEffect(()=>{
      fetchPokeApi("results");
    }, []);
    

  return (
    <div className='cuerpo'>
      <div className='part1'>
        <h1>Pokedex</h1>
      </div>
      <div className='grid'>
        {
          listpokemon.results.map((result,index)=>(
            <div className='card' >
              <img  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${(index+1)}.svg`} />
              <p key={result.name}>{result.name}</p>
              
            </div>
          ))
        }
      </div>
      <div>
        {

        }
      </div>
    </div>
      
     
  );
}

export default App;
