/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document } from 'mongoose';
export declare type AuthDocument = Auth & Document;
export declare class Auth {
    id: string;
    access_token: string;
    refresh_token: string;
    espires_in: number;
    refresh_refresh_token_expires_intoken: number;
}
export declare const AuthSchema: import("mongoose").Schema<Document<Auth, any, any>, import("mongoose").Model<Document<Auth, any, any>, any, any, any>, {}, {}>;
