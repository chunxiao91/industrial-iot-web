import React from 'react'
import { Progress } from 'antd';
import { equipmentInfo } from './config';
import _ from 'lodash'


const EquipmentInfo = () => {

    return (
        <div className="part_two">
            <div className="equipment_info">
                <div className="home_title">
                    产线设备信息
                </div>
                <div className="inner_div">
                    {
                        _.map(equipmentInfo, (item) => {
                            return <div className="inner_Info">
                                <Progress type="circle" percent={item.percent} width={80} />
                                <div className="info">
                                    <div>{item.title}</div>
                                    <span>数量：</span>
                                    <span className="num">{item.number}</span>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default EquipmentInfo