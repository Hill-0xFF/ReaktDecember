import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';

import { HeaderProps } from '@/types/header.type';

export default function Header({ title, width }: HeaderProps) {
  return (
    <header className="header">
      {title}
      {width < 768 ? (
        <FaMobileAlt />
      ) : width < 992 ? (
        <FaTabletAlt />
      ) : (
        <FaLaptop />
      )}
    </header>
  );
}

Header.defaultProps = {
  title: 'Meine Blog',
};
