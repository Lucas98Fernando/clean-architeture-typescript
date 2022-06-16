import { LatLng, Route } from "../domain/route.entity";
import { RouteRepositoryInterface } from "../domain/route.repository";

type ListAllRoutesOutput = {
    id: string;
    title: string;
    startPosition: LatLng;
    endPosition: LatLng;
    points?: LatLng[]
}[]

// Single Responsability Principle
export class ListAllRoutesUseCase {
    constructor(private routeRepository: RouteRepositoryInterface) { }

    // Operations on top of entities
    async execute(): Promise<ListAllRoutesOutput> {
        const routes = await this.routeRepository.findAll()
        return routes.map((route) => route.toJSON())
    }
}