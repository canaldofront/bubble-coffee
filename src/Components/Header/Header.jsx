import Image from 'next/image';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1>Bubble Coffee</h1>
        <div className={styles.line} />
        <p className='dark-bg'>
          Se você busca um momento de tranquilidade em meio à agitação do dia a
          dia, venha conhecer a Bubble Coffe. Nosso espaço foi cuidadosamente
          projetado para proporcionar uma experiência única, em sintonia com a
          natureza.
        </p>
        <a href='#products' className='btn btn-primary'>
          Conheça
        </a>
      </div>
      <Image
        src='/leaf1.png'
        alt='folha'
        width={320}
        height={460}
        className={styles.leaf1}
      />
      <Image
        src='/coffee.png'
        alt='sementes de café'
        width={260}
        height={260}
        className={styles.coffee}
      />
      <Image
        src='/leaf2.png'
        alt='folha'
        width={400}
        height={520}
        className={styles.leaf2}
      />
      <Image
        src='/flower.png'
        alt='flor'
        width={260}
        height={260}
        className={styles.flower}
      />
    </header>
  );
};

export default Header;
