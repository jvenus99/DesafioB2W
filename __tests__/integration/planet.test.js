
import request from 'supertest';
import * as server from "../../server"

describe('Planet Routes', () => {
    it('should route for create planet', async () => {
       const response = await request(server).post("/planet").send({
            nome: "Plutao",
            clima: "semi-arido",
            terreno: "elevado"
        });
        expect(response.status).toBe(200);
    });
    it('should route for get planets', async () => {
        const response = await request(server).get("/planet")
         expect(response.status).toBe(200);
     });
});
