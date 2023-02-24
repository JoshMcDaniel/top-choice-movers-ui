import { ReactNode } from 'react';
import { phoneNumberFormat } from '../../lib/phoneNumberFormat';

type Props = {
  phoneNumber: number;
  children?: ReactNode;
};

const PhoneNumber = (props: Props) => {
  const phoneNumberHref = `tel:${props.phoneNumber}`;
  return (
    <a href={phoneNumberHref}>
      {props.children || phoneNumberFormat(props.phoneNumber)}
    </a>
  );
};

export default PhoneNumber;
