// types.ts — Story types for Wisconsin Climate Stories

import type { Feature, Point, GeoJsonProperties } from 'geojson';

// --- Story Types ---
export interface StoryKnownProperties {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl?: string;
    date?: string;
    bodyText: string;
    videoUrl?: string;
    galleryImages?: string[];
}

export type StoryProperties = StoryKnownProperties & GeoJsonProperties;

export type StoryFeature = Feature<Point, StoryProperties>;
