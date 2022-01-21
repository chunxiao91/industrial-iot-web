import React from 'react'
import { Layout } from 'antd'

const { Header, Content } = Layout

const MainLayout = (props: any) => {
    const { children } = props

    return <Layout className="layout">
        <Header className="header">
            <span className="header-item">
                <span className="header-title">工业物联网智能化生产线访问控制系统</span>
            </span>
            <span className="header-item">
                <span className="header-avatar" />
            </span>
        </Header>
        <Content>
            {children}
        </Content>
    </Layout>
}

export default MainLayout