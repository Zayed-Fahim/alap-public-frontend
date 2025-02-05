import { Facebook, Instagram, LinkedIn, Twitter } from '@/constants';

export const NAV_ITEMS = [
  { label: 'Features', href: '#features', id: 'features' },
  { label: 'Pricing', href: '#pricing', id: 'pricing' },
  { label: 'Resources', href: '#resources', id: 'resources' }
];

export const FOOTER_NAV_ITEMS = [
  { label: 'About Alap', href: '#about', id: 'about' },
  { label: 'Careers', href: '#careers', id: 'careers' },
  { label: 'Blog', href: '#blog', id: 'blog' },
  { label: 'Press', href: '#press', id: 'press' },
  { label: 'Investors', href: '#investors', id: 'investors' },
  {
    label: 'Alap for Good',
    href: '#alap-for-good',
    id: 'alap-for-good'
  },
  { label: 'Security', href: '#security', id: 'security' },
  { label: 'Developers', href: '#developers', id: 'developers' },
  { label: 'Partners', href: '#partners', id: 'partners' },
  { label: 'Alap Academy', href: '#alap-academy', id: 'alap-academy' },
  { label: 'Status', href: '#status', id: 'status' }
];

export const SOCIAL_MEDIA_LINKS = [
  {
    name: 'Twitter',
    href: '#',
    icon: <Twitter className="w-6 h-6 text-footer" />
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: <LinkedIn className="w-6 h-6 text-footer" />
  },
  {
    name: 'Facebook',
    href: '#',
    icon: <Facebook className="w-6 h-6 text-footer" />
  },
  {
    name: 'Instagram',
    href: '#',
    icon: <Instagram className="w-6 h-6 text-footer" />
  }
];
