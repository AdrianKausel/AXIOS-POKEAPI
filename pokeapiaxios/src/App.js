import './App.css';
import axios from 'axios';
import {Container, Button, Table} from 'react-bootstrap';
import { useState } from 'react';


function App() {

    const [pokes, setPokes] = useState([]);
    
    const PokeButton = () => {
      axios.get("https://pokeapi.co/api/v2/pokemon/")
      .then (response => {
        setPokes(response.data.results);
        console.log(response.data)
      })
    }
  return (
<div className="App">
      <Container>
      <Button onClick={e=>(PokeButton())} >Fetch</Button>
      <Table>
        <tbody>
            {pokes && pokes.map((pkm, index)=> <tr key={index}>
                        <td>{pkm.name}</td>
            </tr>)
            }
        </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
