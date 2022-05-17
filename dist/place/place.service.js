"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaceService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const place_schema_1 = require("./schema/place.schema");
const moment_1 = require("moment");
let PlaceService = class PlaceService {
    constructor(placeModel) {
        this.placeModel = placeModel;
    }
    async getPlace(_id) {
        return await this.placeModel.findById({ _id });
    }
    async getPlaces(userId) {
        return await this.placeModel.find({ userId }).sort({ updated: -1 });
    }
    async getPlacesByStatus(cond) {
        let sort = cond.status === "done" ? { updated: -1 } : { created: -1 };
        return await this.placeModel.find(cond).sort(sort);
    }
    async findOne(placeId, userId) {
        return await this.placeModel.findOne({ placeId, userId });
    }
    async addPlace(createPlaceDto) {
        const Place = await this.findOne(createPlaceDto.placeId, createPlaceDto.userId);
        if (Place) {
            return Place;
        }
        const createPlace = new this.placeModel(createPlaceDto);
        return createPlace.save();
    }
    async getPlaceCount(userId) {
        const places = await this.placeModel.find({ userId });
        const doneCount = places.filter((place) => place.status === "done").length;
        return {
            totalCount: places.length,
            doneCount,
            backlogCount: places.length - doneCount,
        };
    }
    async updatePlaceStatus(filter, status) {
        const set = {
            $set: { status, update: (0, moment_1.default)().format('YYYY-MM-DD HH:mm:ss') },
        };
        return await this.placeModel.findOneAndUpdate(filter, set, { new: true });
    }
    async updatePlaceMemo(filter, memo) {
        const set = { $set: { memo } };
        return await this.placeModel.findOneAndUpdate(filter, set, { new: true });
    }
    async removePlace(_id) {
        return await this.placeModel.findByIdAndDelete({ _id });
    }
};
PlaceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(place_schema_1.Place.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], PlaceService);
exports.PlaceService = PlaceService;
//# sourceMappingURL=place.service.js.map