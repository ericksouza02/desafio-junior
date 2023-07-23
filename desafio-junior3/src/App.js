import { useState } from 'react';
import './App.css';

function App() {
  const [posicoes, setPosicoes] = useState([])
  const [ultimoItem, setUltimoItem] = useState([])

  const handleClick = event => {
    const positions = 
    {
      clientX: event.clientX, clientY: event.clientY
    }
    setPosicoes((prev)=>[...prev, positions])
    
  }

  const handleClickUndo = () => {
    const lastItem = posicoes[posicoes.length-1]
    setUltimoItem((prev)=>[...prev, lastItem])
    
    const undo = posicoes.slice(0,posicoes.length-1)
    setPosicoes(undo)
  }

  const handleClickRedo = () => {
    if(ultimoItem.length === 0){
      return;
    }
    
    const lastItem = ultimoItem[ultimoItem.length-1]
    
    setUltimoItem((prev)=>{
      const newArr = [...prev].slice(0,-1)
      return newArr
    })

    setPosicoes((prev)=>[...prev, lastItem])
  }

  return (
    <>
      <div className='app--button'>
        <button onClick={handleClickUndo}>undo</button>
        <button onClick={handleClickRedo}>redo</button>
      </div>

      <div className="app--window" onClick={handleClick}>
        {posicoes.map(item=>(<span className='circulo' style={{left: item.clientX, top: item.clientY}}/>))}
      </div>
    </>
  );
}

export default App;
