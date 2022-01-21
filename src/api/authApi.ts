/*
* @Author: pansy
* @Date:   2021-01-06 15:42:59
* @Last Modified by:   GRANDSOFT\pansy
* @Last Modified time: 2021-02-05 09:25:48
* AuthApi 用户权限接口
*/
import generateApi from '@/utils/generateApi'

const authApi = {
    login: {
        url: '/userauth/login',
        method: 'POST',
    },
    modifyPasswd: {
        url: '/userauth/users/{id}/modifyPasswd',
        method: 'POST',
    },
    userRegister: {
        url: '/userauth/registers',
        method: 'POST',
    },
}

export default generateApi(authApi)