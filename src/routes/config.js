
import { ComponentsPage } from '../pages/ComponentsPage/ComponentsPage'
import Home from '../pages/Home/Home'

export const ROUTES_CONFIG = [
  { path: '/component-page', exact: true, component: ComponentsPage },
  { path: '/', exact: true, component: Home },
];
