import CallNowButton from '../Buttons/CallNowButton';
import { Organization, Route } from '../Dashboard/Dashboard';

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
      <div className="flex w-full flex-wrap items-center justify-between px-4 md:px-6">
        <button
          className="block border-0 bg-transparent py-2 px-2.5 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
          type="button"
          data-te-collapse-init
          data-te-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="[&>svg]:w-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
        <div
          className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
          id="navbarSupportedContent1"
          data-te-collapse-item
        >
          {/* <a
            className="mt-2 mr-2 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mt-0"
            href="#"
          >
            <img
              src="/images/logo.png"
              className="w-8 h-8 rounded-full"
              alt=""
              loading="lazy"
            />
          </a> */}
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
        <CallNowButton
          phoneNumber={props.org.contact.phoneNumber.primary}
          wide={true}
        />
      </div>
    </nav>
  );
};

export default Navbar;
