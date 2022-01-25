// 产线设备信息 数据
export const equipmentInfo = [
    {
        title: '四轴机械臂',
        percent: 3.7,
        number: 1,
    },
    {
        title: '六轴机械臂',
        percent: 3.7,
        number: 1,
    },
    {
        title: '可视化监视器',
        percent: 8,
        number: 3,
    },
    {
        title: '启动压缩机',
        percent: 3.7,
        number: 1,
    },
    {
        title: '传送带（电机）',
        percent: 3.7,
        number: 1,
    },
    {
        title: '无线传感器节点',
        percent: 27,
        number: 10,
    },
    {
        title: 'RFID阅读器',
        percent: 27,
        number: 10,
    },
]

export const dataSource = [
    {
        key: '1',
        name: '运行状态信息',
        age: 2350,
        address: 33730,
    },
    {
        key: '2',
        name: '视频图像信息',
        age: 65,
        address: 770,
    },
    {
        key: '3',
        name: '通讯状态信息',
        age: 180,
        address: 2850,
    },
    {
        key: '4',
        name: '故障报警信息',
        age: 5,
        address: 75,
    },
];

export const columns = [
    {
        title: '运行信息',
        dataIndex: 'name',
        key: 'name',
        width: 200
    },
    {
        title: '当日',
        dataIndex: 'age',
        key: 'age',
        width: 200

    },
    {
        title: '总计',
        dataIndex: 'address',
        key: 'address',
        width: 200

    },
];