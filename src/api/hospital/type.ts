export interface ResponseData {
    code: number,
    message: string,
    ok: boolean
}
export interface HospitalInfo {
  
    "id": string,
    "createTime": string,
    "updateTime": string,
    "isDeleted": number,
    "param": {
      "hostypeString": string,
      "fullAddress": string
    },
    "hoscode": string,
    "hosname": string,
    "hostype": string,
    "provinceCode": string,
    "cityCode": string,
    "districtCode":string,
    "address": string,
    "logoData": string,
    "intro": null,
    "route": string,
    "status": number,
    "bookingRule": null
  
}
export interface BookingRule {
  "cycle": number,
  "releaseTime": string,
  "stopTime": string,
  "quitDay": number,
  "quitTime": string,
  "rule": string[]
}
// 医院详情
export interface HospitalDetail {
    bookingRule: BookingRule,
      "hospital": HospitalInfo
}

// 医院详情接口返回的类型
export interface  HospitalDetailResponse extends ResponseData{
    data: HospitalDetail
}

// 医院科室数据
export interface Depart {
  "depcode": string,
  "depname": string,
  children?: Depart[]
}

// 科室数组类型
export type DepartArr = Depart[];

// 科室接口数据类型
export interface HospitalDepartResponse extends ResponseData {
  data: DepartArr
}