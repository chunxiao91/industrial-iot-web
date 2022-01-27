import React from 'react'
import { Input, Button, Table, Modal, message } from 'antd'

const { confirm } = Modal
const listData = [
    { id: 1, name: '管理员', nameList: '陈香玉；游嵘', originAccess: '状态信息；视频监控信息；通讯状态信息；异常信息', actionAccess: '增加；删除；查看；修改；重置；拷贝', },
    { id: 2, name: '职能域', nameList: '陈莉；邵铭炜', originAccess: '状态信息；视频监控信息；通讯状态信息', actionAccess: '查看；修改；拷贝', },
    { id: 3, name: '普通用户', nameList: '陈旺；李程程；魏文兴；范远刚；黄杰；申圳', originAccess: '状态信息；视频监控信息', actionAccess: '查看', },
]

const AccessManage = () => {
    const deletePerson = () => {
        confirm({
            title: '是否确定删除',
            onOk: () => {
                message.success('删除成功')
            }
        })
    }
    const columns = [
        {
            title: '序号',
            dataIndex: 'id',
            key: 'id',
            width: 30,
        },
        {
            title: '角色',
            dataIndex: 'name',
            key: 'name',
            width: 80,
        },
        {
            title: '包含人员',
            dataIndex: 'nameList',
            key: 'nameList',
            width: 280,
        },
        {
            title: '资源类权限',
            dataIndex: 'originAccess',
            key: 'originAccess',
            width: 230,
        },
        {
            title: '操作类权限',
            dataIndex: 'actionAccess',
            key: 'actionAccess',
            width: 230,
        },
        {
            title: '操作',
            key: 'operation',
            width: 100,
            render: () => <a onClick={deletePerson}>【编辑】    【删除】</a>,
        },
    ];

    return (
        <div className="access_manage">
            <div className="input_search">
                <Input placeholder="权限角色"/>
                <Button type="primary"> 查询 </Button>
            </div>
            <Button className="add_person" type="primary">+ 新增权限角色</Button>
            <Table pagination={false} dataSource={listData} columns={columns} />
        </div>
    )
}

export default AccessManage
