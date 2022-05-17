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
exports.PlaceController = void 0;
const common_1 = require("@nestjs/common");
const place_service_1 = require("./place.service");
let PlaceController = class PlaceController {
    constructor(placeService) {
        this.placeService = placeService;
    }
    async getPlacesByStatus(req, param) {
        const { userId } = req.query;
        const { status } = param;
        const cond = {
            userId,
            status,
        };
        console.log(cond);
        return await this.placeService.getPlacesByStatus(cond);
    }
    async getPlaces(req) {
        const { userId } = req.query;
        console.log(`userId: ${userId}`);
        return await this.placeService.getPlaces(userId);
    }
    async getPlaceCount(req) {
        const { userId } = req.query;
        const { totalCount, doneCount, backlogCount } = await this.placeService.getPlaceCount(userId);
        return {
            totalCount,
            doneCount,
            backlogCount,
        };
    }
    async getPlace(req) {
        const { _id } = req.params;
        return await this.placeService.getPlace(_id);
    }
    async addPlace(req) {
        return await this.placeService.addPlace(req);
    }
    async removePlace(req) {
        const { _id } = req.params;
        return await this.placeService.removePlace(_id);
    }
    async updatePlaceStatus(req) {
        const { _id } = req.params;
        const { status, userId } = req.query;
        const filter = {
            _id,
            userId,
        };
        return await this.placeService.updatePlaceStatus(filter, status);
    }
    async updatePlaceMemo(req, body, query) {
        const { _id } = req.params;
        const { memo } = body;
        const { userId } = query;
        const filter = {
            _id,
            userId,
        };
        return await this.placeService.updatePlaceMemo(filter, memo);
    }
};
__decorate([
    (0, common_1.Get)('all/:status'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PlaceController.prototype, "getPlacesByStatus", null);
__decorate([
    (0, common_1.Get)('all'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlaceController.prototype, "getPlaces", null);
__decorate([
    (0, common_1.Get)('allCount'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlaceController.prototype, "getPlaceCount", null);
__decorate([
    (0, common_1.Get)(':_id'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlaceController.prototype, "getPlace", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlaceController.prototype, "addPlace", null);
__decorate([
    (0, common_1.Delete)(':_id'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlaceController.prototype, "removePlace", null);
__decorate([
    (0, common_1.Patch)(':_id/status'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlaceController.prototype, "updatePlaceStatus", null);
__decorate([
    (0, common_1.Patch)(':_id/memo'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], PlaceController.prototype, "updatePlaceMemo", null);
PlaceController = __decorate([
    (0, common_1.Controller)('place'),
    __metadata("design:paramtypes", [place_service_1.PlaceService])
], PlaceController);
exports.PlaceController = PlaceController;
//# sourceMappingURL=place.controller.js.map