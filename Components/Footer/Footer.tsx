import { Organization } from '../Dashboard/Dashboard';
import BlurryHorizontalDivider from '../Dividers/BlurryHorizontalDivider';
import Address from '../Labels/Address';
import Email from '../Labels/Email';
import PhoneNumber from '../Labels/phoneNumber';
import { MdLocationOn } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import { IoMdCall } from 'react-icons/io';
import { ImFacebook } from 'react-icons/im';
import { baseRoutes } from '@/constants/baseRoutes';

type Props = {
  org: Organization;
};

const Footer = (props: Props) => {
  const { org } = props;
  return (
    <footer className="bg-primary text-center text-base-100 lg:text-left">
      <div className="flex items-center justify-center p-6 lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div className="flex justify-center">
          <a
            href={org.social.links.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-6 text-base-100"
          >
            <ImFacebook />
          </a>
        </div>
      </div>
      <BlurryHorizontalDivider color="secondary" />
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              {org.name}
            </h6>
            <p>{org.motto}</p>
          </div>
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Services
            </h6>
            {org.services.map((service) => (
              <p className="mb-4" key={service.name}>
                <a href={`/services${service.route}`}>{service.name}</a>
              </p>
            ))}
          </div>
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Useful links
            </h6>
            {baseRoutes.map((route) => (
              <p className="mb-4" key={route.href}>
                <a href={route.href}>{route.title}</a>
              </p>
            ))}
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            <p className="mb-4 flex items-center justify-center gap-2 md:justify-start">
              <MdLocationOn className="text-2xl" />
              <Address address={org.contact.address} />
            </p>
            <p className="mb-4 flex items-center justify-center gap-2 md:justify-start">
              <HiOutlineMail className="text-2xl" />
              <Email email={org.contact.email.primary} />
            </p>
            <p className="mb-4 flex items-center justify-center gap-2 md:justify-start">
              <IoMdCall className="text-2xl" />
              <PhoneNumber phoneNumber={org.contact.phoneNumber.primary} />
            </p>
          </div>
        </div>
      </div>
      <BlurryHorizontalDivider color="secondary" />
      <div className="bg-primary p-6 text-center grid gap-1 grid-flow-col w-fit m-auto">
        <span>© 2023 Copyright:</span>
        <span className="font-semibold text-base-100">{org.name}</span>
      </div>
    </footer>
  );
};

export default Footer;
