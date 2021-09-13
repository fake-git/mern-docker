import React,{useState, useEffect} from 'react';
import Names from './comps/names';
import axios from 'axios';



const App = () => {

  const [input, setInput] = useState('');
  const [names, setNames] = useState([]);


  useEffect(() => {

    axios.get('/home')
    .then(res => setNames(res.data))
    .catch(err => console.log(err))

  },[names.length]);

  



  function submit(e){

    e.preventDefault();

    const newName = { name: input };
    
    axios.post('/create', newName)
    .then(res => console.log(res))
    .catch(err => console.log(err))

    setNames(prev => [...prev,input])

    // clear the input field
    setInput('');
  }



  return (
    <div>

        <form className="form-group" onSubmit={submit}>
            <input value={input} type="string" onChange={e => setInput(e.target.value)}  />
            <button type="submit">Send</button>
        </form>

        <br/>

        <Names names={names}/>

    </div>
  );
}

export default App;
