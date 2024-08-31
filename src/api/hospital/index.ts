import request from "@/utils/request";
import type { HospitalDetailResponse, HospitalDepartResponse } from './type'

enum API {
    HOSPITALDETAIL_URL = '/hosp/hospital/',
    HOSPITALDEPART_URL = '/hosp/hospital/department/',
    // 获取验证码
    GETUSERCODE_URL = '/sms/send/'
}

// 获取医院详情
export const reqHospitalDetail = (hoscode: string) => request.get<any, HospitalDetailResponse>(API.HOSPITALDETAIL_URL+hoscode)

// 获取医院科室
export const reqHospitalDepart = (hoscode: string) => request.get<any, HospitalDepartResponse>(API.HOSPITALDEPART_URL+hoscode)

// 获取验证码
export const reqGetCode = (phone: string) => request.get(API.GETUSERCODE_URL + phone)