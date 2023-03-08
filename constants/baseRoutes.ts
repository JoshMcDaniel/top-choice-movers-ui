import org from '../config/organization.json';

export type Route = {
  title: string;
  href: string;
  routes?: Route[];
};

export const baseRoutes: Route[] = [
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
    routes: [
      {
        title: 'Overview',
        href: '/',
      },
      ...org.services.map((service) => ({
        title: service.name,
        href: service.route,
      })),
    ],
  },
  {
    title: 'Contact Us',
    href: '/contact',
  },
];
