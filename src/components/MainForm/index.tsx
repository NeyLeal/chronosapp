import { PlayCircleIcon } from 'lucide-react'
import { Button } from '../Button'
import { Cycles } from '../Cycles'
import { Input } from '../Input'
import styles from './styles.module.css'

export function MainForm() {
  return (
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
  ) 
}