/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document } from 'mongoose';
import { PLACE_STATUS } from './constants';
export declare type PlaceDocument = Place & Document;
export declare class Place {
    placeId: string;
    userId: string;
    latitude: number;
    longitude: number;
    title: string;
    description: string;
    imageURL: string;
    category: string;
    phone: string;
    fullAddress: string;
    fullRoadAddress: string;
    options: string;
    keywords: string;
    bizhourInfo: string;
    memo: string;
    status: PLACE_STATUS;
    sido: string;
    sigungu: string;
    regdate: string;
}
export declare const PlaceSchema: import("mongoose").Schema<Document<Place, any, any>, import("mongoose").Model<Document<Place, any, any>, any, any, any>, {}, {}>;
