import Home from './Home'
import AccessManage from './AccessManage'
import PersonAccess from './PersonAccess'

// 侧边栏配置
export const siderConfig = {
    home: {
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
        title: '人员管理',
        pageTitle: '人员管理',
        icon: 'ProfileOutlined',
        component: PersonAccess,
    }, {
        key: 'menu3_2',
        title: '权限管理',
        pageTitle: '场景列表',
        icon: 'CodepenOutlined',
        component: AccessManage,
    }, {
        key: 'menu3_3',
        title: '阈值设定',
        pageTitle: '场景列表',
        icon: 'CodepenOutlined',
        // component: SceneManage,
    }],
}

