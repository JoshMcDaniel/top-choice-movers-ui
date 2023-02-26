import CallNowButton from '../Buttons/CallNowButton';
import { Organization, Route } from '../Dashboard/Dashboard';
import { BiMenuAltLeft } from 'react-icons/bi';
import ModalNav from './ModalNav';
import SquareAvatar from '../Avatars/SquareAvatar';

type Props = {
  routes: Route[];
  org: Organization;
};

const Navbar = (props: Props) => {
  return (
    <nav
      className="flex-no-wrap relative flex w-full items-center justify-between bg-primary p-2 md:py-4 shadow-md shadow-black/5 lg:flex-wrap lg:justify-start text-base-100"
      data-te-navbar-ref
    >
      <div className="flex w-full flex-wrap items-center justify-between md:px-4 md:px-6">
        <button
          className="block border-0 bg-transparent py-2 px-2.5 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
          type="button"
          data-te-toggle="modal"
          data-te-target="#modalNav"
          data-te-ripple-init
        >
          <BiMenuAltLeft className="text-[1.75rem]" />
        </button>
        <ModalNav
          phoneNumber={props.org.contact.phoneNumber.primary}
          routes={props.routes}
        />
        <div
          className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
          id="navbarSupportedContent1"
          data-te-collapse-item
        >
          <SquareAvatar
            src="/images/logo.png"
            alt={props.org.name + ' logo'}
            width={120}
            height={120}
            className="mr-4"
          />
          <ul
            className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
            data-te-navbar-nav-ref
          >
            <li className="lg:pr-2">
              {props.routes.map((route) => (
                <a
                  className="hover:text-secondary focus:text-secondary disabled:text-black/30 lg:px-2 [&.active]:text-black/90"
                  href={route.href}
                  key={route.title.replace(' ', '')}
                >
                  {route.title}
                </a>
              ))}
            </li>
          </ul>
        </div>
        <CallNowButton phoneNumber={props.org.contact.phoneNumber.primary} />
      </div>
    </nav>
  );
};

export default Navbar;
