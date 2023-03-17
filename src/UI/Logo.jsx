import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/'>
      <Image src='/logo.svg' alt='bubble coffe' width={77} height={38} />
    </Link>
  );
};

export default Logo;
