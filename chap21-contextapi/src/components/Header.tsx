import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';

import { HeaderProps } from '@/types/header.type';

import usePosts from '@/hooks/usePosts';

export default function Header({ title }: HeaderProps) {
  const { width } = usePosts();
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
