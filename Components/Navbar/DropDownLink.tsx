import { Route } from '@/constants/baseRoutes';
import { AiOutlineDown } from 'react-icons/ai';

type Props = {
  route: Route;
};

const DropDownLink = (props: Props) => {
  const { route } = props;

  return (
    <li className="flex justify-center">
      <div>
        <div className="relative" data-te-dropdown-ref>
          <button
            className="grid grid-flow-col gap-2 items-center whitespace-nowrap rounded transition duration-150 ease-in-out motion-reduce:transition-none"
            id="dropdownMenuButton"
            data-te-dropdown-toggle-ref
            aria-expanded="false"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            {route.title}
            <AiOutlineDown />
          </button>
          <ul
            className="absolute z-[1000] float-left m-0 mt-2 hidden min-w-max list-none overflow-hidden rounded-lg bg-white border-primary border bg-clip-padding text-left text-base shadow-lg [&[data-te-dropdown-show]]:block"
            aria-labelledby="dropdownMenuButton"
            data-te-dropdown-menu-ref
          >
            {route.routes?.map((childRoute) => {
              const newRoute: Route = {
                ...childRoute,
                href: `${route.href}${childRoute.href}`,
              };

              return (
                <li key={newRoute.href}>
                  <a
                    className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-4000"
                    href={newRoute.href}
                    data-te-dropdown-item-ref
                  >
                    {newRoute.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default DropDownLink;
