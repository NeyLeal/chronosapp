import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react'
import styles from './styles.module.css'

export function Menu() {
  return (
    <nav className={styles.menu}>
      <a className={styles.menuLink} href="#" aria-label='Home' title='Home'>
        <HouseIcon />
      </a>
      <a className={styles.menuLink} href="#" aria-label='Histórico' title='Histórico'>
        <HistoryIcon />
      </a>
      <a className={styles.menuLink} href="#" aria-label='Configurações' title='Configurações'>
        <SettingsIcon />
      </a>
      <a className={styles.menuLink} href="#" aria-label='Tema' title='Tema'>
        <SunIcon />
      </a>
    </nav>
  );
}