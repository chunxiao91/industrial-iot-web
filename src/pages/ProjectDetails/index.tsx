import React, { useState, useEffect } from 'react'
import { Layout, Spin } from 'antd'
import { useRecoilState, useRecoilValue } from 'recoil'
import { queryStringToObj } from '@/utils/util'
import Sider from './sider'
import { siderConfig } from './config'
import findIndex from 'lodash/findIndex'

import { projectDetails, projectEditModalVisible } from '@/store/atom/projectDetails'
import { projectApi } from '@/api'

const { Content } = Layout

const ProjectDetails = (props: any) => {
    const { history } = props
    const query = queryStringToObj(history)
    const [projectInfo, setProjectInfo] = useRecoilState<any>(projectDetails)
    const [loading, setLoading] = useState(false)
    const projectEditVisible = useRecoilValue(projectEditModalVisible)

    useEffect(() => {
        if ((query?.projectCode || query?.projectCode === 0) && !projectEditVisible.visible && (projectEditVisible.closetype === 'ok' || projectEditVisible.closetype === '')) {
            setLoading(true)
            projectApi.getpeojectInfo({}, { projectCode: query?.projectCode }).then((res: any) => {
                if (res.code === '0') {
                    setProjectInfo(res.data)
                }
                setLoading(false)
            }).catch(() => {
                setLoading(false)
            })
        }
    }, [query?.projectCode, projectEditVisible])

    let defaultPage
    if (query.menukey === '0') {
        defaultPage = siderConfig.project
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
                    projectName={projectInfo?.projectName}
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