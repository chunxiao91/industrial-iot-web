import React from 'react'
import { Input, Button, Table, Modal, message } from 'antd'

const { confirm } = Modal
const listData = [
    { id: 1, OrgName: '沈阳计算', post: '普通用户', name: '陈旺', account: 'chenwang@gld.com', tel: '13381120612', email: 'chenwang@gld.com' },
    { id: 2, OrgName: '东北大学', post: '职能域用户', name: '陈莉', account: 'chengl@gld.com', tel: '13381120612', email: 'chengl@gld.com' },
    { id: 3, OrgName: '沈阳计算', post: '普通用户', name: '李程程', account: 'lichengcheng@gld.com', tel: '13381120612', email: null },
    { id: 4, OrgName: '河海大学', post: '管理员', name: '陈香玉', account: 'chenxy-g@gld.com', tel: '13381120612', email: 'chenxy-g@gld.com' },
    { id: 5, OrgName: '沈阳计算', post: '普通用户', name: '魏文兴', account: 'weiwx@gld.com', tel: '13328256610', email: null },
    { id: 6, OrgName: '沈阳计算', post: '普通用户', name: '范远刚', account: 'fanyg@gld.com', tel: '13328256610', email: null },
    { id: 7, OrgName: '东北计算', post: '职能域用户', name: '邵铭炜', account: 'shaomw@gld.com', tel: '13328256609', email: 'shaomw@gld.com' },
    { id: 8, OrgName: '沈阳计算', post: '管理员', name: '游嵘', account: 'yourong@gld.com', tel: '13328256607', email: null },
    { id: 9, OrgName: '沈阳计算', post: '普通用户', name: '黄杰', account: 'huangjie@gld.com', tel: '13328256606', email: null },
    { id: 10, OrgName: '河海大学', post: '普通用户', name: '申圳', account: 'ceshi@gld.com', tel: '13566854478', email: 'ceshi@gld.com' },
    { id: 11, OrgName: '沈阳计算', post: '普通用户', name: '黄子明', account: 'ffzdtjtyxgs@bhxc.com', tel: '18855300145' },
    { id: 12, OrgName: '沈阳计算', post: '普通用户', name: '李长青', account: 'ffzsclqzfzyyxgs@bhxc.com', tel: '18205949729' },
]

const PersonAccess = () => {
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
            width: 80,
        },
        {
            title: '账号',
            dataIndex: 'account',
            key: 'account',
            width: 280,
        },
        {
            title: '岗位',
            dataIndex: 'post',
            key: 'post',
            width: 230,
        },
        {
            title: '人员姓名',
            dataIndex: 'name',
            key: 'name',
            width: 230,
        },
        {
            title: '组织',
            dataIndex: 'OrgName',
            key: 'OrgName',
            width: 230,
        },
        {
            title: '联系电话',
            dataIndex: 'tel',
            key: 'tel',
            width: 230,
        },
        {
            title: '电子邮箱',
            dataIndex: 'email',
            key: 'email',
            width: 230,
        },
        {
            title: '操作',
            key: 'operation',
            width: 100,
            render: () => <a onClick={deletePerson}>删除</a>,
        },
    ];

    return (
        <div className="person_manage">
            <div className="input_search">
                <Input placeholder="人员姓名"/>
                <Button type="primary"> 查询 </Button>
            </div>
            <Button className="add_person" type="primary">+ 新增人员</Button>
            <Table pagination={false} dataSource={listData} columns={columns} />
        </div>
    )
}

export default PersonAccess
