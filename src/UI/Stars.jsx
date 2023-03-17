import Image from 'next/image';
import styles from './Stars.module.scss';

const Stars = ({ stars, reviews }) => {
  const renderStars = Array.from({ length: stars }, (_, i) => (
    <Image key={i} src='/star.svg' alt='estrela' width={14} height={14} />
  ));

  return (
    <div className={styles.stars}>
      {renderStars}
      {reviews && <span>({reviews})</span>}
    </div>
  );
};

export default Stars;
