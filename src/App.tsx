import './styles/global.css'
import './styles/theme.css'

import { Container } from './components/Container'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import { CountDown } from './components/CountDown'
import { Input } from './components/Input'

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <form className='form' action="">
          <div className="formRow">
            <Input 
            id='input' 
            type='text' 
            labelText='Task' 
            placeholder='Digite a tarefa'
            />
          </div>

          <div className="formRow">
            <p>Texto abaixo</p>
          </div>

          <div className="formRow">
            <p>Ciclos:</p>
            <p>BOLIHAS</p>
          </div>

          <div className="formRow">
           <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  )
}