// 定义首页模块ts数据类型
export interface ResponseData {
    code: number,
    message: string,
    ok: boolean
}

// 医院数据
export interface Hospital {
    address: string,
    bookingRule: {
        "cycle": number,
        "releaseTime": string,
        "stopTime": string,
        "quitDay": number,
        "quitTime": string,
        "rule": string[]
    }
    createTime: string,
    isDeleted: number,
    "provinceCode": string,
    "cityCode": string,
    districtCode: string,
    hoscode:string,
    hosname: string,
    hostype:string,
    id: string,
    intro: string,
    logoData: string,
    param: {
        fullAddress: string,
        hostypeString: string
    },
    status: number,
    updateTime: string,
    route: string,
}

// 医院列表 数组类型
export type Content = Hospital[];

// 医院列表 返回值
export interface HospitalResponseData extends ResponseData {
    data: {
        content: Content,
        "pageable": {
            "sort": {
              "sorted": boolean,
              "unsorted": boolean,
              "empty": boolean
            },
            "pageNumber": number,
            "pageSize": number,
            "offset": number,
            "paged": boolean,
            "unpaged": boolean
        },
        "totalPages": number,
        "totalElements": number,
        "last": boolean,
        "first": boolean,
        "sort": {
        "sorted": boolean,
        "unsorted": boolean,
        "empty": boolean
        },
        "numberOfElements": number,
        "size": number,
        "number": number,
        "empty": boolean
    }
}

// 医院等级或地区信息
export interface HospitalLevelAndRegion {
    
    "createTime": string,
    "dictCode": string | null,
    "hasChildren": boolean,
    "id": number,
    "isDeleted": number,
    "name": string,
    "param": {},
    "parentId": number,
    "updateTime": string,
    "value": string
}

// 医院等级或地区信息 列表
export type HospitalLevelAndRegionArr = HospitalLevelAndRegion[];
// 医院等级或地区信息 返回值
export interface HospitalLevelAndRegionResponseData extends ResponseData {
    data: HospitalLevelAndRegionArr
}

// 根据医院名称筛选医院
export interface HospitalKeyData extends ResponseData {
    data: Content
}