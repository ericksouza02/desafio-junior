/*
* CHALLENGE progresso do formulário

* INSTRUÇÕES
Neste desafio sua missão é criar um formulário e seus 4 campos (com controlled inputs),
juntamente com uma barra de progresso que altera-se conforme o usuário preenche os campos.
- Crie também validações para cada campo conforme instruções abaixo.

* BARRA DE PROGRESSO
Para aproveitar estilização já definida, crie:
- a barra com um elemento pai chamado .bar-container e seu filho .bar

* CAMPOS DO FORMULÁRIO:
input - nome completo - válido se digitar no mínimo dois nomes,
input - email - válido se digitar um e-mail,
select - estado civil,
radio - gênero

Para validação de e-mail use a seguinte RegEx: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

* FUNCIONAMENTO
Espera-se que o formulário tenha 4 campos ao todo. Portanto, quando o usuário preencher
o primeiro campo, a barra de progresso deve assumir 25% do tamanho total;
o segundo campo, 50% e assim por diante...

Caso o usuário não tenha definido valores para os elementos de select e radio,
os mesmos não devem ser considerados como preenchidos até então.

Se o usuário preencher um campo e apagar seu valor, este campo deve ser considerado como vazio,
fazendo com que a barra de progresso regrida novamente.

Desabilitar o botão de enviar caso todos os campos não estejam preenchidos/válidos.

Ao enviar, deve-se apresentar um alert javascript com sucesso, limpar todos os campos
do formulário e zerar a barra de progresso novamente.
*/

import { useState } from "react";

function App() {

  const [datas, setDatas] = useState({
    fullName: '',
    email:'',
    maritalStatus:'',
    genre:''
  })

  console.log(datas.value)
  const [isChecked ,setIsChecked] = useState(false)

  const onHandleChange = event=> {
    const {name, value} = event.target
    setDatas((prev)=>{
      const newData = {...prev, [name]:value}
      return newData;
    })
  }

  const calculateProgress = () => {
    let value = 0
    let addProgress = 25
    const newName = datas.fullName.split(' ')
    if(newName[1]){
      value += addProgress
    }
    if(datas.email){
      let pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      if(pattern.test(datas.email)){
        value += addProgress
      }
    }
    if(datas.maritalStatus){
      value += addProgress

    }
    if(datas.genre){
      value+=addProgress
    }
    
    return value

  }

  calculateProgress()

  const onHandleClick = () =>{
    alert('Sucessfull')
    setDatas( {fullName: '',
    email:'',
    maritalStatus:'',
    genre:''})
  }
  return (
    <div className='App'>
      <h3>desafio fernandev</h3>
      <h1>progresso do formulário</h1>

      <main>
        <div className="bar-container">
          <div className="bar" style={{width: `${calculateProgress()}%`}}></div>
        </div>
        <div className='form-group'>
          <label htmlFor=''>Nome Completo</label>
          <input 
          type='text'
          name="fullName"
          value={datas.fullName}
          onChange={onHandleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor=''>E-mail</label>
          <input 
          type='email'
          name="email"
          value={datas.email}
          onChange={onHandleChange}
          />

        </div>
        <div className='form-group'>
          <label htmlFor=''>Estado Civil</label>
          <select value={datas.maritalStatus} 
          onChange={onHandleChange} name='maritalStatus'>
            <option value=''>- selecione...</option>
            <option value='solteiro'>Solteiro</option>
            <option value='casado'>Casado</option>
            <option value='divorciado'>Divorciado</option>
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor=''>Gênero</label>
          <div className='radios-container' >
            <span>
              <input type='radio' name="genre" value='masculino' onChange={onHandleChange} checked={datas.genre} /> Masculino
            </span>
            <span>
              <input type='radio' name="genre" value='feminino' onChange={onHandleChange} checked={datas.genre}/> Feminino
            </span>
          </div>
        </div>
        
        <button onClick={onHandleClick} disabled={calculateProgress() != 100}>Enviar Formulário</button>
      </main>
    </div>
  );
}

export default App;
