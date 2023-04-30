import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.grid}>
      <Link href="/" className={styles.grid}>
        <h1>Cadastro de Clientes</h1>
      </Link>
    </div>
  );
}
