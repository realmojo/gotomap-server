import { Model } from 'mongoose';
import { Place, PlaceDocument } from './schema/place.schema';
import { CreatePlaceDto } from './dto/create-place.dto';
import { PLACE_STATUS } from './schema/constants';
export declare class PlaceService {
    private placeModel;
    constructor(placeModel: Model<PlaceDocument>);
    getPlace(_id: string): Promise<Place | undefined>;
    getPlaces(cond: {
        userId: string;
        status: string;
    }): Promise<Place[] | undefined>;
    findOne(placeId: string, userId: string): Promise<Place | undefined>;
    addPlace(createPlaceDto: CreatePlaceDto): Promise<Place | undefined>;
    getPlaceCount(userId: string): Promise<{
        totalCount: number;
        doneCount: number;
        backlogCount: number;
    }>;
    updatePlaceStatus(filter: {
        _id: string;
        userId: string;
    }, status: PLACE_STATUS): Promise<Place | undefined>;
    updatePlaceMemo(filter: {
        _id: string;
        userId: string;
    }, memo: string): Promise<Place | undefined>;
    removePlace(_id: string): Promise<Place | undefined>;
}
