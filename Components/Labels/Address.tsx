import { OrganizationAddress } from '../Dashboard/Dashboard';

type Props = {
  address: OrganizationAddress;
};

const Address = (props: Props) => {
  return (
    <a
      href={props.address.googleMapsLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.address.fullAddress}
    </a>
  );
};

export default Address;
