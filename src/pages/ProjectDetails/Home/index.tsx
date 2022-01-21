import React from 'react'
import { Layout } from 'antd'
const { Content } = Layout

const Home = () => {

    return (
        <Layout style={{ height: '100%' }}>
            <Content className="home_container">
                <div className="part_one">生产任务总数</div>
                <div className="part_two">产线设备信息</div>
                <div className="part_three">访问控制信息</div>
                <div className="part_four">运行信息</div>
            </Content>
        </Layout>
    )
}

export default Home