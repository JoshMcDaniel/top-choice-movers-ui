import { phoneNumberFormat } from '../../lib/phoneNumberFormat';
import PhoneNumber from '../Labels/phoneNumber';
import { IoMdCall } from 'react-icons/io';

type Props = {
  phoneNumber: number;
  wide?: boolean;
};

const CallNowButton = (props: Props) => {
  return (
    <PhoneNumber phoneNumber={props.phoneNumber}>
      <div className="grid grid-flow-col items-center gap-2 text-secondary">
        <IoMdCall />
        {phoneNumberFormat(props.phoneNumber)}
      </div>
    </PhoneNumber>
  );
};

export default CallNowButton;
