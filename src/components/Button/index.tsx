import styles from './styles.module.css'

type ButtonProps = {
  id: string;
  labelText?: string; 
} & React.ComponentProps<'button'>;

export function Button({id, type, labelText, ...rest}: ButtonProps) {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      {/* <input className={styles.button} id={id} type={type} {...rest}/> */}
    </>
  );
}