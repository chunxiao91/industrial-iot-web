// 项目相关api
import generateApi from '@/utils/generateApi'

const projectApi = {

    // 获取项目详情
    getpeojectInfo: {
        url: '/bcp/projects/{projectCode}',
        method: 'GET',
    },
    // 获取项目列表（带查询）
    getpeojectList: {
        url: '/bcp/projects/page',
        method: 'POST',
    },
    // 保存项目信息
    save: {
        url: '/bcp/projects',
        method: 'POST',
    },
    // 编辑项目信息
    edit: {
        url: '/bcp/projects',
        method: 'PUT',
    },
    // 运行项目
    operation: {
        url: '/bcp/projects/{projectCode}/run',
        method: 'PATCH',
    },
    // 发布项目
    release: {
        url: '/bcp/projects/{projectCode}/release',
        method: 'PATCH',
    },
    // 下架项目
    offline: {
        url: '/bcp/projects/{projectCode}/offline',
        method: 'PATCH',
    },
    // 删除项目
    delete: {
        url: '/bcp/projects/{projectCode}',
        method: 'DELETE',
    },
}

export default generateApi(projectApi)