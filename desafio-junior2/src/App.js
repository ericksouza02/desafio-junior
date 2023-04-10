import { login } from './utils';
import './index.css';
import { useEffect, useState } from 'react';

// Instruções:
// * Você tem um formulário de login INCOMPLETO
// * Não é permitido adicionar novos elementos HTML
// * Não é permitido usar refs
//
// Tarefas:
// todo - O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários.
// todo - Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos.
// todo - Desabilite o botão de Login equanto você está executando o login.
// todo - Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.
// todo - Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição.

export default function LoginForm() {
  const [email, setEmail]=useState('')
  const [password, setPassword] = useState('')
  const [showButton, setShowButton] = useState(true)
  const [erro, setErro] = useState('')
  const [showErro, setShowErro] = useState(false)



  const handleClick = () => {
    let values = {email, password}
    setShowButton(false)
    login(values).then(
      (sucess)=>
      {
        setShowErro(false)
        alert(sucess.message)
      }
    )
    .catch( 
      (error)=>
      {
        setShowErro(true)
        setErro(error.message)
      }
      ).finally(()=>{
        setEmail('')
        setPassword('')
        setShowButton(true)
      })

  }

  return (
    <div className='wrapper'>
      <div className='login-form'>
        <h1>Login Form 🐞</h1>
       
        <div className='errorMessage'>
        {showErro&&(
          <div>
            <p>{erro}</p>
          </div>
        )}
        </div>
        <div className='row'>
          <label htmlFor={'email'}>Email</label>
          <input id={'email'} type={'email'} name='email' value={email} onChange={event=>setEmail(event.target.value)} autoComplete='off' />
        </div>
        <div className='row'>
          <label htmlFor={'password'}>Password</label>
          <input id={'password'} type={'password'} name='password' value={password} onChange={event=>setPassword(event.target.value)} />
        </div>

        <div className='button'>
          <button onClick={handleClick} disabled={email.length < 1 || password.length < 6 || showButton == false}>Login</button>
        </div>
      </div>
    </div>
  );
}
