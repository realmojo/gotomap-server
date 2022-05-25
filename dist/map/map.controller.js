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
exports.MapController = exports.MAP_API_URL = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
exports.MAP_API_URL = 'https://map.naver.com/v5/api';
const getSearchPlaceByNaver = (latitude = 37.51708600000052, longitude = 126.899465946063, text) => {
    return new Promise((resolve, reject) => {
        axios_1.default
            .get(`${exports.MAP_API_URL}/instantSearch?lang=ko&caller=pcweb&types=place,address,bus&coords=${latitude},${longitude}&query=${encodeURI(text)}`)
            .then((res) => {
            resolve(res.data);
        })
            .catch((e) => {
            reject(e);
        });
    });
};
const getPlaceInfoByNaver = (id) => {
    return new Promise((resolve, reject) => {
        axios_1.default
            .get(`${exports.MAP_API_URL}/sites/summary/${id}?lang=ko`)
            .then((res) => {
            resolve(res.data);
        })
            .catch((e) => {
            reject(e);
        });
    });
};
let MapController = class MapController {
    async getSearchPlace(param, query) {
        const { text } = param;
        const { latitude, longitude } = query;
        console.log(`map: ${text}`);
        return await getSearchPlaceByNaver(latitude, longitude, text);
    }
    async getPlaceInfo(param) {
        const { id } = param;
        console.log(`map Search: ${id}`);
        return await getPlaceInfoByNaver(id);
    }
};
__decorate([
    (0, common_1.Get)('search/place/:text'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MapController.prototype, "getSearchPlace", null);
__decorate([
    (0, common_1.Get)('search/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MapController.prototype, "getPlaceInfo", null);
MapController = __decorate([
    (0, common_1.Controller)('map')
], MapController);
exports.MapController = MapController;
//# sourceMappingURL=map.controller.js.map