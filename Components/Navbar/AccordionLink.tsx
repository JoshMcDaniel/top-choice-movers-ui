import { useState } from 'react';
import { Route } from '@/constants/baseRoutes';
import { AiOutlineDown } from 'react-icons/ai';
import MobileNavLink from './MobileNavLink';

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
      <button
        className="grid grid-flow-col gap-2 justify-start items-center transition duration-500 ease-in-out"
        type="button"
        onClick={() => setIsOpenState()}
      >
        {route.title}
        <span
          className={`ml-auto border-0 h-5 w-5 shrink-0 transition-transform duration-500 ease-in-out motion-reduce:transition-none ${
            isOpen
              ? 'mr-1 rotate-[-180deg] fill-secondary'
              : 'mr-0 rotate-0 fill-primary'
          }`}
        >
          <AiOutlineDown />
        </span>
      </button>
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
