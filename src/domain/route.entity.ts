import crypto from "crypto";

export type LatLng = {
    lat: number; lng: number
}

export type RouteProps = {
    title: string,
    startPosition: LatLng,
    endPosition: LatLng,
    points?: LatLng[]
}

export class Route {
    public readonly id: string;
    // Make all properties required
    public props: Required<RouteProps>
    constructor(props: RouteProps, id?: string) {
        this.id = id || crypto.randomUUID()
        this.props = {
            ...props,
            points: props.points || []
        }
    }

    updateTitle(title: string) {
        this.title = title
    }

    updatePosition(startPosition: LatLng, endPosition: LatLng) {
        this.startPosition = startPosition
        this.endPosition = endPosition
    }

    updatePoints(points: LatLng[]) {
        this.points = points
    }

    get title(): string {
        return this.props.title
    }

    // All setters must be private to avoid anomalies
    private set title(value: string) {
        this.props.title = value;
    }

    get startPosition(): LatLng {
        return this.props.startPosition
    }

    private set startPosition(value: LatLng) {
        this.props.startPosition = value;
    }

    get endPosition(): LatLng {
        return this.props.endPosition
    }

    private set endPosition(value: LatLng) {
        this.props.endPosition = value;
    }

    get points(): LatLng[] {
        return this.props.points
    }

    private set points(value: LatLng[]) {
        this.props.points = value;
    }

    toJSON() {
        return {
            id: this.id,
            ...this.props
        }
    }
}
