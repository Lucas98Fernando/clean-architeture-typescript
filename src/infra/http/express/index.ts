import express, { Express, Request, Response } from 'express';
import { CreateRouteUseCase } from '../../../application/create-route.use-case';
import { RouteInMemoryRepository } from '../../db/route-in-memory.repository';

const app: Express = express();
app.use(express.json())
const PORT = process.env.PORT || 3333;

// Keep data in memory
const routeRepository = new RouteInMemoryRepository()

app.post("/routes", async (req: Request, res: Response) => {
    try {
        const createUseCase = new CreateRouteUseCase(routeRepository)
        const output = await createUseCase.execute(req.body)
        res.status(201).json(output)
    } catch (error) {
        res.status(400).json({ message: "Could not create route" })
    }
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`)
})