import Logo from '@/UI/Logo';
import styles from './Navbar.module.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

const links = [
  { url: '#products', text: 'Produtos' },
  { url: '#about', text: 'Sobre' },
  { url: '#social', text: 'Social' },
  { url: '#reviews', text: 'Depoimentos' },
];

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const renderLinks = links.map((link, i) => (
    <li key={i}>
      <a href={link.url}>{link.text}</a>
    </li>
  ));

  const toggleIsMobile = () => setIsMobile((prevState) => !prevState);
  return (
    <section className={styles.navbar}>
      <div className={styles.desktop}>
        <nav className={styles.navigation}>
          <ul>{renderLinks.slice(0, 2)}</ul>
        </nav>
        <div className={styles.logo}>
          <Logo />
        </div>
        <nav className={styles.navigation}>
          <ul>{renderLinks.slice(2, 4)}</ul>
        </nav>
      </div>

      <div className={`${styles.mobile} ${isMobile ? styles.active : ''}`}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <GiHamburgerMenu onClick={toggleIsMobile} className={styles.burguer} />
        <nav className={styles['mobile-navigation']}>
          <AiOutlineClose onClick={toggleIsMobile} className={styles.close} />
          <ul>{renderLinks}</ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
