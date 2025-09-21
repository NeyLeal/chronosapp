import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react'
import { useState, useEffect } from 'react';
import styles from './styles.module.css'

type AvailableThemes = 'dark' | 'light';

export function Menu() {

  const[theme, setTheme] = useState<AvailableThemes>(() => {
    const savedTheme = localStorage.getItem('theme') as AvailableThemes || 'dark';
    return savedTheme;
  });

  const nextIconTheme = {
    dark: <SunIcon />,
    light: <MoonIcon />
  }

  function handleThemeChange(event:React.MouseEvent<HTMLAnchorElement, MouseEvent>){
    event.preventDefault();
    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme)
    return(()=> {
    })
  }, [theme]);

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
      <a className={styles.menuLink} href="#" aria-label='Tema' title='Tema' onClick={handleThemeChange}>
          {nextIconTheme[theme]}
      </a>
    </nav>
  );
}