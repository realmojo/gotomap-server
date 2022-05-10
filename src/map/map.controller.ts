import { Controller, Get, Param, Query } from '@nestjs/common';
import axios from 'axios';

export const MAP_API_URL = 'https://map.naver.com/v5/api';

const getSearchPlaceByNaver = (
  latitude = 37.51708600000052,
  longitude = 126.899465946063,
  text,
) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${MAP_API_URL}/instantSearch?lang=ko&caller=pcweb&types=place,address,bus&coords=${latitude},${longitude}&query=${encodeURI(
          text,
        )}`,
      )
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
    axios
      .get(`${MAP_API_URL}/sites/summary/${id}?lang=ko`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

@Controller('map')
export class MapController {
  @Get('search/place/:text')
  async getSearchPlace(@Param() param, @Query() query): Promise<any> {
    const { text } = param;
    const { latitude, longitude } = query;
    return await getSearchPlaceByNaver(latitude, longitude, text);
  }

  @Get('search/:id')
  async getPlaceInfo(@Param() param): Promise<any> {
    const { id } = param;
    return await getPlaceInfoByNaver(id);
  }
}
