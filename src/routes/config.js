import { RegisterONGPage } from '../pages/RegisterONGPage/RegisterONGPage'
import { ComponentsPage } from '../pages/ComponentsPage/ComponentsPage'

export const ROUTES_CONFIG = [
  { path: '/', exact: true, component: RegisterONGPage },
  { path: '/components-page', exact: true, component: ComponentsPage }
];
