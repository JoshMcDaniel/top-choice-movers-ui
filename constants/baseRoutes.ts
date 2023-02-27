export type Route = {
  title: string;
  href: string;
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
  },
  {
    title: 'Contact Us',
    href: '/contact',
  },
];
