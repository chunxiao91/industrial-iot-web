import generateApi from '@/utils/generateApi'

// 参数模块 http://10.5.4.18/api/admin-console/swagger-ui.html
const paramApi = {
    // 获取API参数分页信息接口
    search: {
        url: 'bcp/apis/{apiCode}/params/page',
        method: 'POST',
    },
}

export default generateApi(paramApi)