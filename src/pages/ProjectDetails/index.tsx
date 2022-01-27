import React, { useState } from 'react'
import { Layout, Spin } from 'antd'
import { queryStringToObj } from '@/utils/util'
import Sider from './sider'
import { siderConfig } from './config'
import findIndex from 'lodash/findIndex'

const { Content } = Layout

const ProjectDetails = (props: any) => {
    const { history } = props
    const query = queryStringToObj(history)
    const loading = false

    let defaultPage
    if (query.menukey === '0') {
        defaultPage = siderConfig.home
    } else {
        const i = findIndex(siderConfig.menu, (m: any) => (m.key === query.menukey))
        if (i > -1) {
            defaultPage = siderConfig.menu[i]
        } else {
            defaultPage = siderConfig.menu.length > 0 ? siderConfig.menu[0] : null
        }
    }

    const [page, setPage] = useState<any>(defaultPage)

    const onMenuChange = (m: any) => {
        setPage(m)
    }

    return (
        <Layout>
            <Spin spinning={loading} wrapperClassName="projectDetails-layout-loading">
                <Sider
                    query={query}
                    onMenuChange={onMenuChange}
                />
                <Layout>
                    <Content className="projectDetails">
                        {page?.component && React.createElement(page?.component, { query, title: page?.pageTitle })}
                    </Content>
                </Layout>
            </Spin>
        </Layout>
    )
}

export default ProjectDetails