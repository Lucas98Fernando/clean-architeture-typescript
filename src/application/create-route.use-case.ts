import { LatLng, Route } from "../domain/route.entity";
import { RouteRepositoryInterface } from "../domain/route.repository";

type CreateRouteInput = {
    title: string;
    startPosition: LatLng;
    endPosition: LatLng;
    points?: LatLng[]
}

type CreateRouteOutput = {
    id: string;
    title: string;
    startPosition: LatLng;
    endPosition: LatLng;
    points?: LatLng[]
}

// Single Responsability Principle
export class CreateRouteUseCase {
    constructor(private routeRepository: RouteRepositoryInterface) { }

    // Operations on top of entities
    async execute(input: CreateRouteInput): Promise<CreateRouteOutput> {
        const route = new Route(input)
        await this.routeRepository.insert(route)
        return route.toJSON()
    }
}