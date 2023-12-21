import { FooterProps } from '@/types/footer.type';

export default function Footer({ length }: FooterProps) {
  const today = new Date();
  return (
    <footer>
      <p>
        You have {length} {length > 1 ? 'users' : 'user'}
      </p>
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
}
