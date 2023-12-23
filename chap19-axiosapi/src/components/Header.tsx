import { HeaderProps } from '@/types/header.type';

export default function Header({ title }: HeaderProps) {
  return <header className="header">{title}</header>;
}

Header.defaultProps = {
  title: 'Default Title',
};
