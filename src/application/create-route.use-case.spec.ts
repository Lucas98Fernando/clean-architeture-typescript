import { RouteInMemoryRepository } from "../infra/db/route-in-memory.repository"
import { CreateRouteUseCase } from "./create-route.use-case"

describe("RouteUseCase Test", () => {
    it("Should create a new route", async () => {
        const repository = new RouteInMemoryRepository()
        const createUseCase = new CreateRouteUseCase(repository)
        const output = await createUseCase.execute({
            title: 'My title',
            startPosition: { lat: 22, lng: 16 },
            endPosition: { lat: 14, lng: 8 }
        })
        expect(repository.items).toHaveLength(1)
        expect(output).toStrictEqual({
            id: repository.items[0].id,
            title: 'My title',
            startPosition: { lat: 22, lng: 16 },
            endPosition: { lat: 14, lng: 8 },
            points: []
        })
    })
})