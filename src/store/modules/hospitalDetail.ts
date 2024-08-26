import { defineStore } from "pinia";
import { reqHospitalDetail, reqHospitalDepart } from '@/api/hospital/index';
import type { HospitalDetail, HospitalDetailResponse, DepartArr, HospitalDepartResponse } from '@/api/hospital/type';
import type { DetailState } from './interface/index'

const useDetailStore = defineStore('Detail', {
    state: ():DetailState => {
        return {
            hospitalInfo: ({} as HospitalDetail),
            departArr: ([] as DepartArr)
        }
    },
    actions: {
        // 获取医院详情
        async getHospital(hoscode:string) {
            let result:HospitalDetailResponse = await reqHospitalDetail(hoscode)
            if(result.code === 200) {
                this.hospitalInfo = result.data;
            }
            
        },
        // 获取医院科室
        async getDepart(hoscode:string) {
            let result: HospitalDepartResponse = await reqHospitalDepart(hoscode);
            if(result.code === 200) {
                this.departArr = result.data;
            }
        }
    },
    getters: {

    }
})

export default useDetailStore;