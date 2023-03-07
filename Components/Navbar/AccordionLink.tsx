import { useState } from 'react';
import { Route } from '@/constants/baseRoutes';
import Link from 'next/link';
import { AiOutlineDown } from 'react-icons/ai';

type Props = {
  route: Route;
  parentRoute?: string;
};

const AccordionLink = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const setIsOpenState = (): void => {
    setIsOpen(!isOpen);
  };

  const { route, parentRoute } = props;

  return (
    <div>
      <button
        className="grid grid-flow-col gap-2 justify-start items-center font-medium transition duration-500 ease-in-out"
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
      <div
        className={`!visible grid grid-flow-row gap-6 text-sm overflow-hidden transition-all duration-500 ease-in-out motion-reduce:transition-none ${
          isOpen ? 'max-h-72 border-l pt-4' : 'max-h-0'
        }`}
      >
        {route?.routes?.map((childRoute) => (
          <div
            key={childRoute.title}
            className="grid justify-start items-end pl-4"
          >
            <div key={childRoute.title}>
              <Link
                href={`${parentRoute ? `${parentRoute}/` : ''}${
                  childRoute.href
                }`}
              >
                <span data-te-modal-dismiss="modalNav">{childRoute.title}</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccordionLink;
