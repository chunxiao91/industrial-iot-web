import React from 'react'
import { Layout } from 'antd'
import ProductTask from './productTask'
import EquipmentInfo from './equipmentInfo'
import AccessManage from './accessManagement/index'
import OperationInfo from './operationInfo'
const { Content } = Layout

const Home = () => {

    return (
        <Layout style={{ height: '100%' }}>
            <Content className="home_container">
                <ProductTask/>
                <EquipmentInfo/>
                <AccessManage/>
                <OperationInfo/>
            </Content>
        </Layout>
    )
}

export default Home