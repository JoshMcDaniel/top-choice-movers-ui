import { Organization } from '../Dashboard/Dashboard';
import { BiMenuAltRight } from 'react-icons/bi';
import SquareAvatar from '../Avatars/SquareAvatar';
import { baseRoutes } from '@/constants/baseRoutes';
import ModalNav from './ModalNav';
import CallNowButton from '../Buttons/CallNowButton';
import NavLink from './NavLink';

type Props = {
  org: Organization;
};

const Navbar = (props: Props) => {
  return (
    <nav
      className={`whitespace-nowrap relative grid grid-flow-col gap-2 w-full bg-primary items-center justify-between p-2 md:px-5 md:py-3 shadow-md shadow-black/5 text-base-100 transition-all duration-300`}
      data-te-navbar-ref
    >
      <div className="grid grid-flow-col gap-2 items-center w-fit">
        <SquareAvatar
          src="/images/logo.png"
          alt={props.org.name + ' logo'}
          width={50}
          height={50}
          className="mr-4"
        />
        <CallNowButton phoneNumber={props.org.contact.phoneNumber.primary} />
      </div>

      <div
        className="hidden lg:grid grid-flow-col gap-2 items-center"
        id="navbarSupportedContent1"
        data-te-collapse-item
      >
        <ul
          className="list-style-none mr-auto grid grid-flow-col gap-8 items-center justify-evenly text-md pl-0"
          data-te-navbar-nav-ref
        >
          {baseRoutes.map((route) => (
            <NavLink key={route.href} route={route} />
          ))}
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
