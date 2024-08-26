import request from '@/utils/request';
import type { HospitalResponseData, HospitalLevelAndRegionResponseData, HospitalKeyData } from './type';

enum API {
    // 医院列表
    HOSPITAL_URL='/hosp/hospital/',
    // 医院等级或地区接口
    HOSPITALLEVELANDREGION_URL='/admin/cmn/dict/findByDictCode/',
    // 医院名称筛选接口
    HOSPITALKEY_URL= '/hosp/hospital/findByHosname/'
}

export const reqHospital = (page: number, limit:number, hostype='', districtCode='') => request.get<any, HospitalResponseData>(API.HOSPITAL_URL+`${page}/${limit}?hostype=${hostype}&districtCode=${districtCode}`)

export const reqHospitalLevelAndRegion = (dictCode: string) => request.get<any, HospitalLevelAndRegionResponseData>(API.HOSPITALLEVELANDREGION_URL+`${dictCode}`);

export const reqHospitalKey = (hosname: string) => request.get<any, HospitalKeyData>(API.HOSPITALKEY_URL+`${hosname}`)