import { Clock, File, Media, Mention, Status } from '@/constants';

export interface IKeyFeatures {
  id: string;
  image?: string | null;
  title: string;
  description: string;
  icon?: React.ReactNode | null;
}

export const KEY_FEATURES: IKeyFeatures[] = [
  {
    id: 'instant-messaging',
    icon: <Clock className="size-6" />,
    image: null,
    title: 'Instant messaging',
    description: 'Send and receive messages in real time'
  },
  {
    id: 'presence-status',
    icon: <Status className="size-6" />,
    image: null,
    title: 'Presence status',
    description: "Know who's available, away, or busy"
  },
  {
    id: 'mentions',
    icon: <Mention className="size-6" />,
    image: null,
    title: 'User @ mentions',
    description: "Get someone's attention in a message"
  },
  {
    id: 'media-sharing',
    icon: <Media className="size-6" />,
    image: null,
    title: 'Media sharing',
    description: 'Share images, videos, or audio files'
  },
  {
    id: 'file-sharing',
    icon: <File className="size-6" />,
    image: null,
    title: 'File sharing',
    description: 'Send and receive documents instantly'
  },
  {
    id: 'mentions-detail',
    image: '/images/home/key-features/mentions.png',
    icon: null,
    title: '@mentions',
    description: "Get someone's attention in a message"
  },
  {
    id: 'video-call',
    image: '/images/home/key-features/vCall.png',
    icon: null,
    title: 'Video call',
    description: 'Start a video call with your team'
  },
  {
    id: 'file-sharing-detail',
    image: '/images/home/key-features/file-sharing.png',
    icon: null,
    title: 'File sharing',
    description: 'Share files and documents in a chat'
  },
  {
    id: 'reaction',
    image: '/images/home/key-features/reactions.png',
    icon: null,
    title: 'Reaction',
    description: 'React to a message with an emoji'
  },
  {
    id: 'mentioned-message',
    image: '/images/home/key-features/instant-messaging.png',
    icon: null,
    title: 'Mentioned message',
    description: 'View a message where you were mentioned'
  }
];
