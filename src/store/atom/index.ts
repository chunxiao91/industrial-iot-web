import { atom } from 'recoil'
import { getLocalStorage } from '@/utils/util'

export const userInfo = atom({
    key: 'useInfo',
    default: getLocalStorage('userInfo')
        ? JSON.parse(getLocalStorage('userInfo') || '{}')
        : {
            id: '0',
            name: 'zero',
        },
})

// 字典库
export const dict = atom({
    key: 'dict',
    default:
    {  // { key: [{ dictValue: '', dictValueCode: '' }, ...] }
        // TODO 等接口通了，记得删除
        // publishStatus: [{
        //     'id': 737,
        //     'pid': null,
        //     'dictId': 'publishStatus',
        //     'dictName': '发布状态',
        //     'dictValueCode': '1',
        //     'dictValue': '新建',
        //     'dictSort': 1,
        //     'updateTime': '2021-12-14 09:58:32'
        // }, {
        //     'id': 738,
        //     'pid': null,
        //     'dictId': 'publishStatus',
        //     'dictName': '发布状态',
        //     'dictValueCode': '2',
        //     'dictValue': '开发',
        //     'dictSort': 2,
        //     'updateTime': '2021-12-14 09:58:33'
        // }, {
        //     'id': 739,
        //     'pid': null,
        //     'dictId': 'publishStatus',
        //     'dictName': '发布状态',
        //     'dictValueCode': '3',
        //     'dictValue': '运行',
        //     'dictSort': 3,
        //     'updateTime': '2021-12-14 09:58:34'
        // }, {
        //     'id': 740,
        //     'pid': null,
        //     'dictId': 'publishStatus',
        //     'dictName': '发布状态',
        //     'dictValueCode': '4',
        //     'dictValue': '下架',
        //     'dictSort': 4,
        //     'updateTime': '2021-12-14 09:58:34'
        // }, {
        //     'id': 741,
        //     'pid': null,
        //     'dictId': 'publishStatus',
        //     'dictName': '发布状态',
        //     'dictValueCode': '5',
        //     'dictValue': '发布',
        //     'dictSort': 5,
        //     'updateTime': '2021-12-14 09:58:35'
        // }],
        // productCategory:
        //     [{
        //         'id': 780,
        //         'pid': 6,
        //         'dictId': 'productType',
        //         'dictName': '产品类型',
        //         'dictValueCode': 1,
        //         'dictValue': '用户中心',
        //         'dictSort': 1,
        //         'updateTime': '2021-12-17 10:50:00'
        //     },
        //     {
        //         'id': 781,
        //         'pid': 6,
        //         'dictId': 'productType',
        //         'dictName': '产品类型',
        //         'dictValueCode': 2,
        //         'dictValue': '规划中心',
        //         'dictSort': 2,
        //         'updateTime': '2021-12-17 10:50:00'
        //     },
        //     {
        //         'id': 782,
        //         'pid': 6,
        //         'dictId': 'productType',
        //         'dictName': '产品类型',
        //         'dictValueCode': 3,
        //         'dictValue': '建设中心',
        //         'dictSort': 3,
        //         'updateTime': '2021-12-17 10:50:00'
        //     },
        //     {
        //         'id': 783,
        //         'pid': 7,
        //         'dictId': 'productType',
        //         'dictName': '产品类型',
        //         'dictValueCode': 1,
        //         'dictValue': '建设中心',
        //         'dictSort': 2,
        //         'updateTime': '2021-12-17 10:42:10'
        //     },
        //     {
        //         'id': 784,
        //         'pid': 7,
        //         'dictId': 'productType',
        //         'dictName': '产品类型',
        //         'dictValueCode': 2,
        //         'dictValue': '管理中心',
        //         'dictSort': 3,
        //         'updateTime': '2021-12-17 10:42:10'
        //     }],
    }
})
