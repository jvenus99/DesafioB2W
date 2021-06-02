import { Router } from 'restify-router';
import { PlanetModel } from '../models/Planets';

export const routerPlanet = new Router();

routerPlanet.post('/planet', async (req, res) => {
    try{
        const {nome} = req.body;
        const planetaExiste = await PlanetModel.findOne({ nome });
        if(planetaExiste){
            return res.send({error : 'Planeta já cadastrado'}).status(401);
        }   
        const planet = await PlanetModel.create(req.body);
        return res.json(planet);

    }catch(error){
        return res.status(500).send({ error: 'Create failed'});
    }
});

routerPlanet.get('/planet', async(req, res) => {
    try {
        const planets = await PlanetModel.find();
        return res.json(planets);
    } catch(error) {
        return res.status(500).send(error);
    }
});

routerPlanet.get('/planet/:id', async(req, res) => {
    try{
        const {id} = req.params;
        const planet = await PlanetModel.findById(id);
        if(!planet)
            return res.status(401);
        return res.json(planet);

    }catch(error){
        return res.status(500).send(error);
    }
});

routerPlanet.get('/planet/findByNome/:nome', async(req, res) => {
    try {
        const {nome} = req.params;
        const planets = await PlanetModel.findOne({nome});
        return res.json(planets);
    } catch(error) {
        return res.send(error);
    }
});

routerPlanet.del('/planet/delete/:id', async(req, res) => {
    const {id} = req.params;
    PlanetModel.findOneAndDelete({_id: id}).then( response => {
        res.json(response);
    }).catch(error => res.status(500).json(error));
});



