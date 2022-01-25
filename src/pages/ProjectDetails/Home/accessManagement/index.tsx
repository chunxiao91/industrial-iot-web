import React from 'react'
import AccessManageChart from './accessTimeChart'
import AccessNumChart from './accessNumChart'

const AccessManage = () => {

    return (
        <div className="part_three">
            <div className="home_content">
                <div>
                    <div className="home_title">访问控制管理</div>
                    <div className="user_charts">
                        <AccessManageChart />
                        <AccessNumChart />
                    </div>
                </div>
                <div className="user_info">
                    <div className="home_title">用户信息</div>
                    <div className="content">
                        <div className="detail"> 注册用户数量: <span>52</span></div>
                        <div className="detail"> 在线用户数量: <span>12</span></div>
                        <div className="detail"> 管理员用户数量: <span>2</span></div>
                        <div className="detail"> 职能域用户数量: <span>5</span></div>
                        <div className="detail"> 普通用户数量: <span>45</span></div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default AccessManage