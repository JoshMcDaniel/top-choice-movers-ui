import { useRouter } from 'next/router';
import { ReactNode, useEffect } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import org from '../../config/organization.json';

export const dashboard_drawer_element_id = 'dashboard-drawer';

export type OrganizationAddress = {
  fullAddress: string;
  street: string;
  city: string;
  state: string;
  zipCode: number;
  googleMapsLink: string;
};

export type Service = {
  name: string;
  summary: string;
  description: string;
  route: string;
  image: {
    imgSrc: string;
    imgAlt: string;
  };
};

export type Organization = {
  name: string;
  motto: string;
  mottoShort: string;
  operatingSchedule: {
    daysOfWeek: string;
    hours: string;
  };
  contact: {
    phoneNumber: {
      primary: number;
    };
    email: {
      primary: string;
    };
    address: OrganizationAddress;
  };
  social: {
    links: {
      facebook?: string;
    };
  };
  services: Service[];
};

const Dashboard = (props: { children: ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    const element = document.getElementById(
      dashboard_drawer_element_id
    ) as HTMLInputElement;
    if (element?.checked) {
      element.checked = false;
    }
  }, [router.asPath]);

  return (
    <>
      <Navbar org={org} />
      {props.children}
      <Footer org={org} />
    </>
  );
};

export default Dashboard;
