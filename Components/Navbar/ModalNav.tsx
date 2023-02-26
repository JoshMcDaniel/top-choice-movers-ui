import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai';
import CallNowButton from '../Buttons/CallNowButton';
import { Route } from '../Dashboard/Dashboard';
import BlurryHorizontalDivider from '../Dividers/BlurryHorizontalDivider';

type Props = {
  routes: Route[];
  phoneNumber: number;
};

const ModalNav = (props: Props) => {
  return (
    <div
      data-te-modal-init
      className="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none text-base-100"
      id="modalNav"
      tabIndex={-1}
      aria-labelledby="modalNavLabel"
      aria-hidden="true"
    >
      <div
        data-te-modal-dialog-ref
        className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-100 ease-in-out min-[0px]:m-0 min-[0px]:h-full min-[0px]:max-w-none"
      >
        <div className="pointer-events-auto relative flex w-full flex-col rounded-md bg-primary bg-clip-padding text-current shadow-lg outline-none0 min-[0px]:h-full min-[0px]:rounded-none min-[0px]:border-0">
          <div className="flex flex-shrink-0 items-center justify-between rounded-t-md px-[18px] py-4 min-[0px]:rounded-none">
            <button
              type="button"
              className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
              data-te-modal-dismiss
              aria-label="Close"
            >
              <AiOutlineClose className="text-2xl" />
            </button>
            <h5 className="text-xl leading-normal" id="modalNavLabel">
              Menu
            </h5>
          </div>
          <BlurryHorizontalDivider />
          <div className="relative p-8 min-[0px]:overflow-y-auto">
            <ul className="grid grid-flow-row gap-8 justify-center text-center text-xl">
              {props.routes.map((route) => (
                <li key={route.title}>
                  <Link href={route.href}>{route.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-auto">
            <BlurryHorizontalDivider />
            <div className="flex flex-shrink-0 flex-wrap items-center justify-center rounded-b-md p-4 min-[0px]:rounded-none">
              <CallNowButton phoneNumber={props.phoneNumber} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalNav;
