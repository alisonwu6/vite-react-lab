import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
export const mainNavbarItems = [
  {
    icon: <LoginTwoToneIcon />,
    label: 'Authentication',
    route: 'authentication',
  },
  {
    icon: <BorderColorRoundedIcon />,
    label: 'Form',
    route: 'form',
  },
  {
    icon: <EventNoteRoundedIcon />,
    label: 'DateTime',
    route: 'date-time',
  },
];
