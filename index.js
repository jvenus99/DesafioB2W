import './config/db';

import { server } from './server';
import { PlanetModel } from './models/Planets'
import { routerPlanet } from './controller/planets';

routerPlanet.applyRoutes(server);

server.start(() => console.log('Started server'));