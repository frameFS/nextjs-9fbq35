import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
      <div className={styles.grid}>
          <Link href="index" className={styles.grid}>
            <h1>Cadastro de Clientes</h1>
        </Link>
    </div>
  );
}
