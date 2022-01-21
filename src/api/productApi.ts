// 产品相关api
import generateApi from '@/utils/generateApi'

const productApi = {
    // 项目关联所有产品列表
    getProductList: {
        url: '/bcp/projects/{projectCode}/products/page',
        method: 'POST',
    },
    // 移除或者删除产品
    removeProduct: {
        url: '/bcp/projects/{projectCode}/products/{productCode}',
        method: 'DELETE',
    },
    // 保存复用产品
    saveProduct: {
        url: '/bcp/projects/{projectCode}/products/{productCode}/multiplex',
        method: 'POST',
    },

    // 获取产品详情
    getProductDetails: {
        url: '/bcp/products/{productCode}',
        method: 'GET',
    },
    // 获取目前项目下的产品详情，需要给后端传当前项目的code而不是所属项目的code！
    getProductDetailsInProject: {
        url: '/bcp/projects/{projectCode}/products/{productCode}',
        method: 'GET',
    },
    // 根据条件获取产品列表
    getProductInfoList: {
        url: '/bcp/products/page',
        method: 'POST',
    },
    // 保存产品信息
    save: {
        url: '/bcp/products',
        method: 'POST',
    },
    // 编辑产品信息
    edit: {
        url: '/bcp/products',
        method: 'PUT',
    },
    // 运行产品
    operation: {
        url: '/bcp/products/{productCode}/run',
        method: 'PATCH',
    },
    // 发布产品
    release: {
        url: '/bcp/products/{productCode}/release',
        method: 'PATCH',
    },
    // 下架产品
    offline: {
        url: '/bcp/products/{productCode}/offline',
        method: 'PATCH',
    },
    // 根据产品获取已经被共享的项目
    getShatedProjects: {
        url: '/bcp/products/{productCode}/projects/multiplexed/page',
        method: 'POST',
    },
    // 根据两级字典获取产品列表
    getProductFromCategory: {
        url: '/bcp/products/categorys/{category}',
        method: 'GET',
    },
}

export default generateApi(productApi)