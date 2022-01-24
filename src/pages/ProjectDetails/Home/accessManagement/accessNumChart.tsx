// 访问次数的柱状图

import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
const AccessNumManagement = 'AccessNumManagement'

const AccessNumChart = () => {
    const AccessNumManagementChart = useRef<any>(null)
    const getChartOption = () => {
        const chartContent: any = document.getElementById(AccessNumManagement)
        if (!AccessNumManagementChart?.current) {
            AccessNumManagementChart.current = echarts.init(chartContent)
        }
        let options = {
            title: {
                subtext: '模块访问次数',
            },
            xAxis: {
                type: 'category',
                data: ['生产任务', '运行状态', '视频图像', '通讯状态', '故障报警']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [
                        {
                            value: 190,
                            itemStyle: {
                                color: '#1890ff'
                            }
                        },
                        {
                            value: 100,
                            itemStyle: {
                                color: '#7688f8'
                            }
                        },
                        {
                            value: 130,
                            itemStyle: {
                                color: '#26c3f6'
                            }
                        },
                        {
                            value: 80,
                            itemStyle: {
                                color: '#38e1b8'
                            }
                        },
                        {
                            value: 70,
                            itemStyle: {
                                color: '#13d8e0'
                            }
                        },
                    ],
                    type: 'bar'
                }
            ]
        };

        AccessNumManagementChart.current.setOption(options)

    }

    useEffect(
        () => {
            getChartOption()
        }, []
    )
    return <div>
        <div className="chart-content2" id={AccessNumManagement} style={{ width: 420, height: 280 }}></div>
    </div>

}

export default AccessNumChart