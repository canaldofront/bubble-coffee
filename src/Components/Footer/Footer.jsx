import Logo from '@/UI/Logo';
import SocialLinks from '@/UI/SocialLinks';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.column1}>
          <h2>
            <Logo />
          </h2>
          <h3 className='p'>
            Desfrute de um café de qualidade enquanto se reconecta com o que é
            essencial
          </h3>
          <SocialLinks />
        </div>
        <div className={styles.column2}>
          <h2 className='p'>Faça-nos uma Visita</h2>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8058.910289930575!2d2.9406611710844976!3d11.13240978938546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11cd10083c934e37%3A0x41c6621a2923fb6e!2sLAS%20VEGAS%20ALIMENTATION!5e0!3m2!1spt-BR!2sbr!4v1678902761040!5m2!1spt-BR!2sbr'
            allowFullScreen={true}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
        </div>
        <div className={styles.column3}>
          <h2 className='p'>Funcionamento</h2>
          <ul>
            <li>Segunda - Sexta: 09:00 às 18:00</li>
            <li>Sábados: 09:00 às 14:00</li>
            <li>(00) 000000-0000</li>
            <li>contato@bubblecoffee.com.br</li>
          </ul>
        </div>
      </div>
      <span>Bubble Coffee - Todos os direitos reservados</span>
    </footer>
  );
};

export default Footer;
