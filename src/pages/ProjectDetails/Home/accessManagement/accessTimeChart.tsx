// 访问时间 的柱状图
import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
const AccessManagement = 'AccessManagement'

const AccessTimeChart = () => {
    const AccessManagementChart = useRef<any>(null)
    const getChartOption = () => {
        const chartContent: any = document.getElementById(AccessManagement)
        if (!AccessManagementChart?.current) {
            AccessManagementChart.current = echarts.init(chartContent)
        }
        const categories = (function () {
            let now = new Date();
            let res = [];
            let len = 10;
            while (len--) {
                res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
                now = new Date(now.getTime() - 1800000); // 30分钟一更新
            }
            return res;
        })();
        const categories2 = (function () {
            let res = [];
            let len = 10;
            while (len--) {
                res.push(10 - len - 1);
            }
            return res;
        })();
        const data = (function () {
            let res = [];
            let len = 10;
            while (len--) {
                res.push(Math.round(Math.random() * 1000));
            }
            return res;
        })();
        const data2 = (function () {
            let res = [];
            let len = 0;
            while (len < 10) {
                res.push((Math.random() * 10 + 5).toFixed(1));
                len++;
            }
            return res;
        })();
        let options = {
            title: {
                // text: '访问时长与次数'
                // subtext: '访问时长与次数'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#283b56'
                    }
                }
            },
            legend: {},
            toolbox: {
                show: true,
                feature: {
                    dataView: { readOnly: false },
                    restore: {},
                    saveAsImage: {}
                }
            },
            dataZoom: {
                show: false,
                start: 0,
                end: 100
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: true,
                    data: categories
                },
                {
                    type: 'category',
                    boundaryGap: true,
                    data: categories2
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    scale: true,
                    name: '次数',
                    max: 30,
                    min: 0,
                    boundaryGap: [0.2, 0.2]
                },
                {
                    type: 'value',
                    scale: true,
                    name: '分钟',
                    max: 1200,
                    min: 0,
                    boundaryGap: [0.2, 0.2]
                }
            ],
            series: [
                {
                    name: '访问时长',
                    type: 'bar',
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    data: data
                },
                {
                    name: '访问次数',
                    type: 'line',
                    data: data2
                }
            ]
        };
        let count = 11;
        setInterval(function () {
            let axisData = new Date().toLocaleTimeString().replace(/^\D*/, '');
            data.shift();
            data.push(Math.round(Math.random() * 1000));
            data2.shift();
            data2.push((Math.random() * 10 + 5).toFixed(1));
            categories.shift();
            categories.push(axisData);
            categories2.shift();
            categories2.push(count++);
            AccessManagementChart.current.setOption({
                xAxis: [
                    {
                        data: categories
                    },
                    {
                        data: categories2
                    }
                ],
                series: [
                    {
                        data: data
                    },
                    {
                        data: data2
                    }
                ]
            });
        }, 1800000);

        AccessManagementChart.current.setOption(options)

    }

    useEffect(
        () => {
            getChartOption()
        }, []
    )
    return <div>
        <div className="chart-content" id={AccessManagement} style={{ width: 900, height: 280 }}></div>
    </div>

}

export default AccessTimeChart