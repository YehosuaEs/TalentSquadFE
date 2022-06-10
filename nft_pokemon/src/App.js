import { Fragment } from 'react';
import PokemonCard from './components/card/card';
import PokemonCard2 from './components/card/card2';
import Loading from './components/loading/loading';

function App() {


  return (
   <>
      {/* <Loading/>  */}
  <p>Card1</p>
    <PokemonCard/>
    <p>Card2</p>
    <PokemonCard2/>  
    
   </>
  )
}

export default App;
