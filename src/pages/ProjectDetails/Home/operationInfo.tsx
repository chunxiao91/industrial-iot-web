/**
 * @Descrption: 企业信息
 * @author wangcx
 * @date 2021-05-25 14:17
 */
import React from 'react'
import { Table } from 'antd'
import ProductInfo from './productInfo'
import { dataSource, columns } from './config'

const OperationInfo = (props: any) => {


    return <div className="part_four">
        <div className="operation_info">
            <Table pagination={false} dataSource={dataSource} columns={columns} />
        </div>
        <div className="storage_info">
            {/* <div className="home_title">
                    仓储信息               生产原料信息
            </div> */}
            <div className="details_info">
                <div className="product_info">
                    <div className="home_title">
                        生产原料信息
                    </div>
                    <div className="product_info_image"></div>
                </div>
                <div className="product_chart">
                    <div className="home_title">
                        成品信息
                    </div>
                    <ProductInfo/>
                </div>
            </div>
        </div>
    </div>
}

export default OperationInfo