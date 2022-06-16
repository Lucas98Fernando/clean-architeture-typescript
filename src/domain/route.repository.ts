import { Route } from "./route.entity";

export interface RouteRepositoryInterface {
    insert(route: Route): Promise<void>
}