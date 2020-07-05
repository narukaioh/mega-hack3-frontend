import { Home } from '../pages/Home/Home'
import { RegisterONGPage } from '../pages/RegisterONGPage/RegisterONGPage'
import { ComponentsPage } from '../pages/ComponentsPage/ComponentsPage'
import { OngPage } from '../pages/OngPage/OngPage'
import { DonatePage } from '../pages/DonatePage/DonatePage'

export const ROUTES_CONFIG = [
  { path: '/', exact: true, component: Home },
  { path: '/donate', component: DonatePage },
  { path: '/components-page', exact: true, component: ComponentsPage },
  { path: '/ongs', exact: true, component: RegisterONGPage },
  { path: '/ong/:id', component: OngPage },
  { path: '*', component: Home }
];
