/**
 * @Descrption: 危险源
 * @author wangcx
 * @date 2021-05-25 14:17
 */
import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
const DangerSourceInfoPie = 'DangerSourceInfoPie'
const color = ['#FAD337', '#3AA0FF', '#4DCB73', '#37CBCB', '#F2637B', '#00F8FF', '#975FE4'];

const ProductInfo = (props: any) => {
    const dangerChart = useRef<any>(null)
    const chartData = [
        { value: 55, name: '仓储空余数量' },
        { value: 95, name: '成品数量' }
    ]

    const getChartOption = (chartData: any, total: number) => {
        const chartContent: any = document.getElementById(DangerSourceInfoPie)
        if (!dangerChart?.current) {
            dangerChart.current = echarts.init(chartContent)
        }
        let option = {
            color: color,
            title: {
                text: total,
                textStyle: {
                    color: '#484848',
                    fontSize: 24
                },
                itemGap: 20,
                left: 'center',
                top: '40%'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: { // 图示
                show: false,
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    radius: ['55%', '70%'],
                    center: ['50%', '50%'],
                    avoidLabelOverlap: true,
                    itemStyle: {
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: true,
                        formatter: '{b}\n{c}'
                    },
                    labelLine: {
                        show: true,
                    },
                    data: chartData
                }
            ]
        };
        dangerChart.current.setOption(option)
    }
    useEffect(
        () => {
            getChartOption(chartData, 150)
        }, []
    )
    return <div className="chart">
        <div className="chart-content" id={DangerSourceInfoPie} style={{ width: 400, height: 190 }}/>
    </div>
}

export default ProductInfo