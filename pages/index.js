import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sistema de controle de Locação de Veículos - LOCAUTO</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Benvindo ao LOCAUTO</h1>

        <p className={styles.description}>
          Sistema de controle de Locação de Veículos - LOCAUTO{' '}
        </p>

        <div className={styles.grid}>
          <Link href="/cad-cliente" className={styles.card}>
            <h3>Cadastro de Clientes &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </Link>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
