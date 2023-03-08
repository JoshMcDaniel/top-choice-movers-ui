import { Route } from '@/constants/baseRoutes';
import Link from 'next/link';
import AccordionLink from './AccordionLink';

type Props = {
  route: Route;
};

const MobileNavLink = (props: Props) => {
  const { route } = props;

  return route?.routes?.length ? (
    <AccordionLink key={route.href} route={route} />
  ) : (
    <li key={route.href}>
      <Link href={route.href}>
        <span data-te-modal-dismiss="modalNav">{route.title}</span>
      </Link>
    </li>
  );
};

export default MobileNavLink;
