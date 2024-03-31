// assets
import { DashboardOutlined } from '@ant-design/icons';
import { ListAltOutlined, Settings, SettingsApplicationsOutlined } from '../../node_modules/@mui/icons-material/index';

// icons
const icons = {
  DashboardOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Pages',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/admin',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'tests',
      title: 'Tests',
      type: 'item',
      url: '/admin/tests',
      icon: ListAltOutlined,
      breadcrumbs: false
    },
    {
      id: 'projects',
      title: 'Projects',
      type: 'item',
      url: '/admin/projects',
      icon: Settings,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
