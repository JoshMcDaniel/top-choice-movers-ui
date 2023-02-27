import { HiOutlineMail } from 'react-icons/hi';
import Email from '../Labels/Email';

type Props = {
  email: string;
};

const EmailNowButton = (props: Props) => {
  return (
    <button
      type="button"
      className="inline-block rounded-full border-2 border-secondary px-4 py-2 text-xs font-medium uppercase leading-normal text-secondary transition duration-150 ease-in-out hover:bg-opacity-10 focus:outline-none focus:ring-0"
      data-te-ripple-init
    >
      <span className="grid grid-flow-col gap-2 items-center">
        <HiOutlineMail className="text-lg" />
        <Email email={props.email}>Email</Email>
      </span>
    </button>
  );
};

export default EmailNowButton;
