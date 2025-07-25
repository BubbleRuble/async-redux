import { Link, NavLink} from 'react-router-dom';


export const HomePage = () => {
  return (
    <div className="homebar">
      <nav>
        <NavLink to="/pokemons">Pokemons</NavLink>
        {' | '}
        <NavLink to="/contacts">Contacts</NavLink>
        {' | '}
      </nav>

    </div>
  );
};
