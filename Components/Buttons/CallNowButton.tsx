import PhoneNumber from '../Labels/phoneNumber';
import { IoMdCall } from 'react-icons/io';

type Props = {
  phoneNumber: number;
};

const CallNowButton = (props: Props) => {
  return (
    <PhoneNumber phoneNumber={props.phoneNumber}>
      <button
        type="button"
        className="inline-block rounded-full border-2 border-secondary px-4 py-2 text-xs font-medium uppercase leading-normal text-secondary transition duration-150 ease-in-out hover:bg-opacity-10 focus:outline-none focus:ring-0"
        data-te-ripple-init
      >
        <span className="grid grid-flow-col gap-2 items-center">
          <IoMdCall className="text-lg" /> Call
        </span>
      </button>
    </PhoneNumber>
  );
};

export default CallNowButton;
