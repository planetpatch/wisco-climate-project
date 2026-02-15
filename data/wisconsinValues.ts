import type { Feature, MultiPolygon } from "geojson";

// Accurate Wisconsin boundary from wisco.geojson (MultiPolygon with 6 polygons including islands)
import wiscoGeoJson from "./wisco.json";

export const WISCONSIN_BOUNDARY: Feature<MultiPolygon> = wiscoGeoJson as Feature<MultiPolygon>;

export const WISCONSIN_CENTER: [number, number] = [44.5, -89.5]; // Lat, Lng
