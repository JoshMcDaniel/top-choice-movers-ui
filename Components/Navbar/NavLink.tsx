import { Route } from '@/constants/baseRoutes';
import Link from 'next/link';
import DropDownLink from './DropDownLink';

type Props = {
  route: Route;
};

const NavLink = (props: Props) => {
  const { route } = props;

  return route?.routes?.length ? (
    <DropDownLink key={route.href} route={route} />
  ) : (
    <li key={route.href}>
      <Link href={route.href}>{route.title}</Link>
    </li>
  );
};

export default NavLink;
