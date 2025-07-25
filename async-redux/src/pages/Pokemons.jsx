import { useState } from 'react';
import { useGetPokemonByNameQuery } from '../redux/users/pokemon';
import { ClipLoader } from 'react-spinners';
import { HomePage } from './Home';

export const PokemonPage = () => {
  const [pokemonName, setPokemonName] = useState('');
  const { data, error, isFetching, isError } = useGetPokemonByNameQuery(
    pokemonName,
    { skip: pokemonName === '' },
  ); // скіп якщо покемонНейм порожній рядок

  const handleSubmit = e => {
    e.preventDefault();
    setPokemonName(e.currentTarget.elements.pokemonName.value);
    e.currentTarget.reset();
  };

  const showPokemonData = data && !isFetching && !isError;

  return (
    <div>
      <HomePage />
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="text" name="pokemonName" />
        <button type="submit">Пошук </button>
      </form>

      {isFetching && <ClipLoader />}

      {isError && <p>Немає такого покемона: {pokemonName}</p>}

      {showPokemonData && <h1>{data.name}</h1>}
    </div>
  );
};
