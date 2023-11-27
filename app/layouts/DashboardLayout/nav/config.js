// component
import SvgColor from '../../../components/svg-color';
import BugReportIcon from '@mui/icons-material/BugReport';
import BiotechIcon from '@mui/icons-material/Biotech';
import PeopleIcon from '@mui/icons-material/People';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

const navConfig = [
  {
    title: 'Usuarios',
    path: '/dashboard/users',
    icon: <PeopleIcon />,
  },
  {
    title: 'Tareas',
    path: '/dashboard/task',
    icon: <PeopleIcon/>,

  }
];

export default navConfig;
