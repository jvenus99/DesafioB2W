import './config/db';

import { server } from './server';
import { PlanetModel } from './models/Planets'

server.get('/planets', async (req, res) => {
    try {
        const planets = await PlanetModel.find();
        res.send(planets);
    }catch(error) {
        res.send(500, error);
    }
})

server.start(() => console.log('Started'));