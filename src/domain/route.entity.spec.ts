import { LatLng, Route, RouteProps } from "./route.entity"

describe("Route Tests", () => {
    test("Constructor Props", () => {
        let routeProps: RouteProps = {
            title: "My first test route",
            startPosition: { lat: 0, lng: 1 },
            endPosition: { lat: 2, lng: 3 },
        }
        let route = new Route(routeProps)
        expect(route.props).toStrictEqual({
            ...routeProps,
            points: []
        })

        routeProps = {
            title: "My second test route",
            startPosition: { lat: 0, lng: 0 },
            endPosition: { lat: 10, lng: 20 },
            points: [{ lat: 10, lng: 12 }]
        }
        route = new Route(routeProps)
        expect(route.id).toBeDefined()
        expect(route.props).toStrictEqual({
            ...routeProps,
            points: [{ lat: 10, lng: 12 }]
        })
    })

    test("Check updateTitle() method", () => {
        const routeProps: RouteProps = {
            title: "My test route",
            startPosition: { lat: 0, lng: 1 },
            endPosition: { lat: 2, lng: 3 },
        }
        const route = new Route(routeProps)
        route.updateTitle("Test route updated")
        expect(route.title).toBe("Test route updated")
    })

    test("Check updatePosition() method", () => {
        const routeProps: RouteProps = {
            title: "My test route",
            startPosition: { lat: 0, lng: 1 },
            endPosition: { lat: 2, lng: 3 },
        }
        const route = new Route(routeProps)
        const startPosition: LatLng = { lat: 1, lng: 2 }
        const endPosition: LatLng = { lat: 3, lng: 4 }
        route.updatePosition(startPosition, endPosition)
        expect(route.startPosition).toBe(startPosition)
        expect(route.endPosition).toBe(endPosition)
    })

    test("Check updatePoints() method", () => {
        const routeProps: RouteProps = {
            title: "My test route",
            startPosition: { lat: 0, lng: 1 },
            endPosition: { lat: 2, lng: 3 },
        }
        const route = new Route(routeProps)
        const points: LatLng[] = [{ lat: 1, lng: 2 }, { lat: 3, lng: 4 }]
        route.updatePoints(points)
        expect(route.points).toHaveLength(points.length)
        expect(route.points).toStrictEqual(points)
    })
})
