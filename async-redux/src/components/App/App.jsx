import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ContactsPage } from '../../pages/Contacts';
import { PokemonPage } from '../../pages/Pokemons';
import { HomePage } from '../../pages/Home';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/pokemons" element={<PokemonPage />}></Route>
        <Route path="/contacts" element={<ContactsPage />}></Route>
      </Routes>
      <Toaster position="top-right" />
    </div>
  );
};

export default App;


// Dennis Schneider   Lucas Mayer   Gwen Jacobs  Christopher Stiedemann  Johnnie Wehner