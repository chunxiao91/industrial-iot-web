import generateApi from '@/utils/generateApi'

// 扩展点模块 http://10.5.4.18/api/admin-console/swagger-ui.html#/
const extApi = {
    // 扩展点信息分页查询接口
    search: {
        url: '/bcp/extend-point/query/page',
        method: 'POST',
    },
    // 获取扩展点详情信息接口
    getDetailsByCode: {
        url: '/bcp/extend-point/{code}/info',
        method: 'GET',
    },
    // 扫描服务中的扩展点
    scan: {
        url: '/bcp/extend-point/scan?srn={srn}',
        method: 'GET',
    },
}

export default generateApi(extApi)