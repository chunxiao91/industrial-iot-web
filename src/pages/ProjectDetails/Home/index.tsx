import React from 'react'
import { Layout } from 'antd'
import ProductTask from './productTask'
import EquipmentInfo from './equipmentInfo'
import AccessManage from './accessManagement/index'
const { Content } = Layout

const Home = () => {

    return (
        <Layout style={{ height: '100%' }}>
            <Content className="home_container">
                <ProductTask/>
                <EquipmentInfo/>
                <AccessManage/>
                <div className="part_four">运行信息</div>
            </Content>
        </Layout>
    )
}

export default Home