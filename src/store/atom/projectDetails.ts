import { atom } from 'recoil'

// 项目详情
export const projectDetails = atom({
    key: 'projectDetails',
    default: null,
})

// 项目类型
export const projectsType = atom({
    key: 'projectsType',
    default: null,
})

// 创建、编辑 项目 弹窗显隐
export const projectEditModalVisible = atom({
    key: 'projectEditModalVisible',
    default: {
        title: '',
        visible: false,
        type: '', // add、edit
        data: {}, // 如果是edit, 需要传入详情数据
        closetype: '', // 成功是ok、 取消是cancel、打开新的是''
    },
})

// 将已有的产品绑定在某个项目底下
export const bindProjectModalVisible = atom({
    key: 'bindProjectModalVisible',
    default: {
        title: '',
        visible: false,
        data: {}, // 需要传入产品id
        closetype: '', // 成功是ok、 取消是cancel、打开新的是''
    },
})


// 添加产品（绑定产品） 弹窗显隐
export const bindProductModalVisible = atom({
    key: 'bindProductModalVisible',
    default: {
        title: '',
        type: '', // bindProduct已经选好产品了  addProduct还没有选择产品
        visible: false,
        data: {}, //  productInfo: 当前产品的信息, projectInfo: 当前项目的信息
        closetype: '', // 成功是ok、 取消是cancel、打开新的是''
    },
})

// 创建、编辑 产品 弹窗显隐
export const productEditModalVisible = atom({
    key: 'productEditModalVisible',
    default: {
        visible: false,
        type: '', // add添加产品、edit 编辑产品
        data: {}, // 如果是edit, 需要传入详情数据
        closetype: '', // ok、cancel
    },
})

// 添加、编辑 场景 弹窗显隐
export const sceneEditModalVisible = atom({
    key: 'sceneEditModalVisible',
    default: {
        visible: false,
        type: '', // add、edit
        data: {}, // 如果是edit, 需要传入详情数据
        closetype: '', // ok、cancel
    },
})

// 添加、编辑 业务流程 弹窗显隐
export const workflowEditModalVisible = atom({
    key: 'workflowEditModalVisible',
    default: {
        visible: false,
        type: '', // add、edit
        data: {}, // 如果是edit, 需要传入详情数据
        closetype: '', // ok、cancel
    },
})

// 添加、编辑 组件 弹窗显隐
export const componentEditModalVisible = atom({
    key: 'componentEditModalVisible',
    default: {
        visible: false,
        type: '', // add、edit
        data: {}, // 如果是edit, 需要传入详情数据
        closetype: '', // ok、cancel
    },
})

// 添加、编辑 服务 弹窗显隐
export const serviceEditModalVisible = atom({
    key: 'serviceEditModalVisible',
    default: {
        visible: false,
        type: '', // add、edit
        data: {}, // 如果是edit, 需要传入详情数据
        closetype: '', // ok、cancel
    },
})

// 添加、编辑 api 弹窗显隐
export const apiEditModalVisible = atom({
    key: 'apiEditModalVisible',
    default: {
        visible: false,
        type: '', // add、edit
        data: {}, // 如果是edit, 需要传入详情数据
        serviceData: {}, // 当前serviceData
        closetype: '', // ok、cancel
    },
})

// 为产品绑定场景 弹窗显隐
export const bindSceneToProductModalVisible = atom({
    key: 'bindSceneToProductModalVisible',
    default: {
        visible: false,
        data: {}, // 需要传入title、projectCode、productCode
        closetype: '', // ok、cancel
    },
})

export const bindWorkflowToSceneModalVisible = atom({
    key: 'bindWorkflowToSceneModalVisible',
    default: {
        visible: false,
        data: {}, // 需要传入projectCode、productCode
        closetype: '', // ok、cancel
    },
})

export const extensionPointModalVisible = atom({
    key: 'extensionPointModalVisible',
    default: {
        visible: false,
        data: {}, // 需要传入数据
        closetype: '', // ok、cancel
    },
})

export const extensionPointTableVisible = atom({
    key: 'extensionPointTableVisible',
    default: {
        visible: false,
    },
})

export const getServiceData = atom({
    key: 'getServiceId',
    default: {},
})


// 为项目绑定服务
export const bindServiceModalVisible = atom({
    key: 'bindServiceModalVisible',
    default: {
        visible: false,
        data: {}, // 需要传入projectCode、productCode
        queryData: {},
        closetype: '', // ok、cancel
    },
})