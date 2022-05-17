import { PlaceService } from './place.service';
import { Place } from './schema/place.schema';
export declare class PlaceController {
    private readonly placeService;
    constructor(placeService: PlaceService);
    getPlacesByStatus(req: any, param: any): Promise<Place[] | undefined>;
    getPlaces(req: any): Promise<Place[] | undefined>;
    getPlaceCount(req: any): Promise<{
        totalCount: number;
        doneCount: number;
        backlogCount: number;
    }>;
    getPlace(req: any): Promise<Place | undefined>;
    addPlace(req: any): Promise<Place | undefined>;
    removePlace(req: any): Promise<Place | undefined>;
    updatePlaceStatus(req: any): Promise<Place | undefined>;
    updatePlaceMemo(req: any, body: any, query: any): Promise<Place | undefined>;
}
