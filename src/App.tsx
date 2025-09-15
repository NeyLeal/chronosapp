import './styles/global.css'
import './styles/theme.css'

import { PlayCircleIcon } from 'lucide-react'
import { StopCircleIcon } from 'lucide-react'

import { Container } from './components/Container'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import { CountDown } from './components/CountDown'
import { Input } from './components/Input'
import { Cycles } from './components/Cycles'
import { Button } from './components/Button'
import { Footer } from './components/Footer'

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
            <Cycles/>
          </div>

          <div className="formRow">
           <Button icon={<PlayCircleIcon/>} color='green'/>
          </div>
        </form>
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  )
}