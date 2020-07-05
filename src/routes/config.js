import { Home } from '../pages/Home/Home'
import { RegisterONGPage } from '../pages/RegisterONGPage/RegisterONGPage'
import { ComponentsPage } from '../pages/ComponentsPage/ComponentsPage'

export const ROUTES_CONFIG = [
  { path: '/', exact: true, component: Home },
  { path: '/components-page', exact: true, component: ComponentsPage },
  { path: '/ongs', exact: true, component: RegisterONGPage }
];