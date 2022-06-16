import { Route, RouteProps } from '../../domain/route.entity';
import { RouteInMemoryRepository } from '../db/route-in-memory.repository';
describe("RouteInMemoryRepository Test", () => {
    it("Should insert a new route", async () => {
        const repository = new RouteInMemoryRepository();
        const routeProps: RouteProps = {
            title: "My first test route",
            startPosition: { lat: 0, lng: 1 },
            endPosition: { lat: 2, lng: 3 },
        }
        const route = new Route(routeProps)
        await repository.insert(route)
        expect(repository.items).toHaveLength(1)
        expect(repository.items).toStrictEqual([route])
    })
})