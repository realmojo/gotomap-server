import { PLACE_STATUS } from '../schema/constants';
export declare class CreatePlaceDto {
    readonly placeId: string;
    readonly userId: string;
    readonly latitude: number;
    readonly longitude: number;
    readonly title: string;
    readonly description: string;
    readonly imageURL: string;
    readonly category: string;
    readonly phone: string;
    readonly fullAddress: string;
    readonly fullRoadAddress: string;
    readonly status: PLACE_STATUS;
    readonly sido: string;
    readonly sigungu: string;
    readonly regdate: string;
}
