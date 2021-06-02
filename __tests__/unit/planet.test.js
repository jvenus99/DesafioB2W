import { PlanetModel } from '../../models';

describe('Planet Model', () => {
    it('should create planet', async() => {
        const planet = await PlanetModel.create({
            nome: "Marte",
            clima: "Semi-árido",
            terreno: "elevado"
        })
        console.log(planet);
        expect(planet.nome).toBe('marte');
    });
});
