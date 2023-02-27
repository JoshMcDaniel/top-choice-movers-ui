import { Organization } from '../Dashboard/Dashboard';
import { BiMenuAltRight } from 'react-icons/bi';
import SquareAvatar from '../Avatars/SquareAvatar';
import { baseRoutes } from '@/constants/baseRoutes';
import ModalNav from './ModalNav';
import CallNowButton from '../Buttons/CallNowButton';

type Props = {
  org: Organization;
};

const Navbar = (props: Props) => {
  return (
    <nav
      className="whitespace-nowrap relative grid grid-flow-col gap-2 w-full items-center justify-between bg-primary p-2 md:px-5 md:py-3 shadow-md shadow-black/5 text-base-100"
      data-te-navbar-ref
    >
      <div className="grid grid-flow-col gap-2 items-center w-fit">
        <SquareAvatar
          src="/images/logo.png"
          alt={props.org.name + ' logo'}
          width={120}
          height={120}
          className="mr-4"
        />
        <CallNowButton phoneNumber={props.org.contact.phoneNumber.primary} />
      </div>

      <div
        className="hidden lg:block grid grid-flow-col gap-2 items-center items-center"
        id="navbarSupportedContent1"
        data-te-collapse-item
      >
        <ul
          className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
          data-te-navbar-nav-ref
        >
          <li className="lg:pr-2">
            {baseRoutes.map((route) => (
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
      <ModalNav org={props.org} />
      <button
        className="block border-0 bg-transparent py-2 px-2.5 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
        type="button"
        data-te-toggle="modal"
        data-te-target="#modalNav"
        data-te-ripple-init
      >
        <BiMenuAltRight className="text-[1.75rem]" />
      </button>
    </nav>
  );
};

export default Navbar;
