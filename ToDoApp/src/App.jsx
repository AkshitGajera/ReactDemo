import './App.css'
import Heading from './Heading'
import ToDoinput from './ToDoinput';
import Item1 from './item1';
import Item2 from './Item2';
import Map from './Map';

function App() {

  return (
    <>
      <div className='myDiv'>
        <Heading></Heading>
        <ToDoinput></ToDoinput>
        <Item1></Item1>
        <Item2></Item2>
      </div>
      <div className='second'>
      <Map></Map>
      </div>
    </>
  );
}

export default App
