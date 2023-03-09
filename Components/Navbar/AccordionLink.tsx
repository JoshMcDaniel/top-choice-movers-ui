import { useState } from 'react';
import { Route } from '@/constants/baseRoutes';
import MobileNavLink from './MobileNavLink';
import ExpandCollapseWithArrow from '../Buttons/ExpandCollapseWithArrow';

type Props = {
  route: Route;
};

const AccordionLink = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const setIsOpenState = (): void => {
    setIsOpen(!isOpen);
  };

  const { route } = props;

  return (
    <li>
      <ExpandCollapseWithArrow
        onClick={setIsOpenState}
        isOpen={isOpen}
        text={route.title}
      />
      <ul
        className={`!visible grid grid-flow-row gap-6 text-sm overflow-hidden transition-all duration-500 ease-in-out motion-reduce:transition-none ${
          isOpen ? 'max-h-72 border-l pt-4' : 'max-h-0'
        }`}
      >
        {route?.routes?.map((childRoute) => {
          const newRoute: Route = {
            ...childRoute,
            href: `${route.href}${childRoute.href}`,
          };
          return (
            <span
              key={childRoute.href}
              className="grid justify-start items-end pl-4"
            >
              <MobileNavLink route={newRoute} />
            </span>
          );
        })}
      </ul>
    </li>
  );
};

export default AccordionLink;
