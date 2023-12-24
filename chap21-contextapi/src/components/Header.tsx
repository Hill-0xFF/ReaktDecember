import { useContext } from 'react';
import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';

import { HeaderProps } from '@/types/header.type';

import Data from '../context/dataContext';

export default function Header({ title }: HeaderProps) {
  const { width } = useContext(Data.DataContext);
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
