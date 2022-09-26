
import { ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './styles.module.scss';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function Button({ children, ...rest }: IProps) {
  return (
    <>
      <button className={styles.container}{...rest}>{children}</button>
    </>
  );
}

export { Button };
