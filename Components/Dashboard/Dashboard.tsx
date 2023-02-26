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
  type: string;
  description: string;
  route: string;
};

export type Organization = {
  name: string;
  motto: string;
  mottoShort: string;
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

export type Route = {
  title: string;
  href: string;
};

const routes: Route[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Services',
    href: '/services',
  },
  {
    title: 'Contact Us',
    href: '/contact',
  },
];

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
      <Navbar org={org} routes={routes} />
      {props.children}
      <Footer org={org} routes={routes} />
    </>
  );
};

export default Dashboard;
