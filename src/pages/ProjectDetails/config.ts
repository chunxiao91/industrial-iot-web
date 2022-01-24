import Home from './Home'
// 侧边栏配置
export const siderConfig = {
    project: {
        key: 'home',
        title: '首页',
        icon: 'WalletFilled',
        component: Home,
    },
    menu: [{
        key: 'menu1_1',
        title: '订单生成',
        pageTitle: '订单生成',
        icon: 'ProfileOutlined',
        // component: ProductsList,
    }, {
        key: 'menu1_2',
        title: '订单查询',
        pageTitle: '场景列表',
        icon: 'CodepenOutlined',
        // component: SceneManage,
    }, {
        key: 'menu1_3',
        title: '订单管理',
        pageTitle: '业务流程列表',
        icon: 'BranchesOutlined',
        // component: Workflow,
    }],
    menu2: [{
        key: 'menu2_1',
        title: '运行状态信息',
        pageTitle: '组件列表',
        icon: 'ClusterOutlined',
        // component: ComponentManage,
    }, {
        key: 'menu2_2',
        title: '视频图像信息',
        pageTitle: '服务列表',
        icon: 'HddOutlined',
        // component: FieldServiceManage,
    }, {
        key: 'menu2_3',
        title: '通讯状态信息',
        pageTitle: '组件列表',
        icon: 'ClusterOutlined',
        // component: ComponentManage,
    }, {
        key: 'menu2_4',
        title: '故障报警信息',
        pageTitle: '服务列表',
        icon: 'HddOutlined',
        // component: FieldServiceManage,
    }],
    menu3: [{
        key: 'menu3_1',
        title: '权限时长阈值',
        pageTitle: '项目关联的所有产品',
        icon: 'ProfileOutlined',
        // component: ProductsList,
    }, {
        key: 'menu3_2',
        title: '敏感信息阈值',
        pageTitle: '场景列表',
        icon: 'CodepenOutlined',
        // component: SceneManage,
    }],
    menu4: [{
        key: 'menu4_1',
        title: '用户信息',
        pageTitle: '项目关联的所有产品',
        icon: 'ProfileOutlined',
        // component: ProductsList,
    }, {
        key: 'menu4_2',
        title: '角色属性',
        pageTitle: '场景列表',
        icon: 'CodepenOutlined',
        // component: SceneManage,
    }, {
        key: 'menu4_3',
        title: '权限属性',
        pageTitle: '业务流程列表',
        icon: 'BranchesOutlined',
        // component: Workflow,
    }, {
        key: 'menu4_4',
        title: '任务属性',
        pageTitle: '业务流程列表',
        icon: 'BranchesOutlined',
        // component: Workflow,
    }],
}

