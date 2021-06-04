const { PlanetModel } = require("../../models/Planets");

describe('Planet Model', () => {
    it('should for create planet', async () => {
       const planet = await PlanetModel.create({
        nome: "Plutao",
        clima: "semi-arido",
        terreno: "elevado"
    });
        expect(planet.nome).toBe("plutao");
    });
});
