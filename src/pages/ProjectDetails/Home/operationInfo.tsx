/**
 * @Descrption: 企业信息
 * @author wangcx
 * @date 2021-05-25 14:17
 */
import React from 'react'
import { Progress } from 'antd';

const EnterpriseInfo = (props: any) => {
    const { data = {}} = props
    const totalNum = data.total

    return <div className="enterprise-info">
        <div className="home-page-title">
            <div className="blue-line"></div>
            <div className="title-name">企业库<span>({totalNum})</span></div>
        </div>
        <div className="home-page-content">
            <div className="link-click-hover">
                建设单位
                <Progress
                    strokeColor={{
                        '0%': '#108ee9',
                        '100%': '#87d068',
                    }}
                    percent={data.jsdw / totalNum * 100}
                    format={(percent) => data.jsdw}
                />
            </div>
            <div className="link-click-hover">
                设计单位
                <Progress
                    strokeColor={{
                        '0%': '#108ee9',
                        '100%': '#87d068',
                    }}
                    percent={data.sjdw / totalNum * 100}
                    format={(percent) => data.sjdw}
                />
            </div>
            <div className="link-click-hover" >
                施工单位
                <Progress
                    strokeColor={{
                        '0%': '#108ee9',
                        '100%': '#87d068',
                    }}
                    percent={data.sgdw / totalNum * 100}
                    format={(percent) => data.sgdw}
                />
            </div>
            <div className="link-click-hover">
                勘察单位
                <Progress
                    strokeColor={{
                        '0%': '#108ee9',
                        '100%': '#87d068',
                    }}
                    percent={data.kcdw / totalNum * 100}
                    format={(percent) => data.kcdw}
                />
            </div>
            <div className="link-click-hover">
                监理单位
                <Progress
                    strokeColor={{
                        '0%': '#108ee9',
                        '100%': '#87d068',
                    }}
                    percent={data.jldw / totalNum * 100}
                    format={(percent) => data.jldw}
                />
            </div>
            <div className="link-click-hover">
                检测单位
                <Progress
                    strokeColor={{
                        '0%': '#108ee9',
                        '100%': '#87d068',
                    }}
                    percent={data.jcdw / totalNum * 100}
                    format={(percent) => data.jcdw}
                />
            </div>


        </div>
    </div>
}

export default EnterpriseInfo