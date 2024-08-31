import { defineStore } from "pinia";
import { reqGetCode } from '@/api/hospital/index'

const useUserStore = defineStore('User', {
    state: () => {
        return {
            loginVisible: false, // Login组件 登录框显示隐藏
            userCode: '' // 用户验证码
        }
    },
    actions: {
        async getCode(phone:string) {
            console.log('phone',phone);
            let res:any = await reqGetCode(phone)
            console.log('code',res);
            if(res.code === 200) {
                this.userCode = res.data;
                return 'ok';
            } else {
                return Promise.reject(new Error(res.message))
            }

        }
    },
    getters: {

    }
})

export default useUserStore;