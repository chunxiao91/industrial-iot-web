import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import { Icon } from '@/components/purecomponents'
import { setUrl } from '@/utils/util'
import { siderConfig } from './config'
const { SubMenu } = Menu;
const { Sider } = Layout

interface IProps {
    query: any;
    projectName?: string;
    onMenuChange?: Function;
}

const CustomSider = (props: IProps) => {
    const { query, onMenuChange } = props
    const [selectedKey, setSelectedKey] = useState(query?.menukey || '0')

    const onMenuItemClick = (e: any, m: any) => {
        setSelectedKey(e.key)
        onMenuChange && onMenuChange(m)
        // 修改浏览器中url参数
        setUrl(e.key)
    }

    const project = siderConfig.project

    return (
        <Sider className="projectDetails-sider" theme="light">
            <Menu
                mode="inline"
                selectedKeys={[selectedKey]}
                defaultSelectedKeys={[selectedKey]}
            >
                <Menu.Item key={project.key} icon={<Icon type={'LaptopOutlined'} />} onClick={(e) => onMenuItemClick({ key: project.key }, project)}>首页</Menu.Item>

                <SubMenu key="sub1" icon={<Icon type={'LaptopOutlined'} />} title="生产任务管理">
                    {siderConfig.menu.map((m) => (
                        <Menu.Item
                            key={m.key}
                            icon={<Icon type={m.icon} />}
                            onClick={(e) => onMenuItemClick(e, m)}
                        >{m.title}</Menu.Item>
                    ))}
                </SubMenu>
                <SubMenu key="sub2" icon={<Icon type={'LaptopOutlined'} />} title="生产状态管理">
                    {siderConfig.menu2.map((m) => (
                        <Menu.Item
                            key={m.key}
                            icon={<Icon type={m.icon} />}
                            onClick={(e) => onMenuItemClick(e, m)}
                        >{m.title}</Menu.Item>
                    ))}
                </SubMenu>
                <SubMenu key="sub3" icon={<Icon type={'LaptopOutlined'} />} title="访问管理">
                    {siderConfig.menu3.map((m) => (
                        <Menu.Item
                            key={m.key}
                            icon={<Icon type={m.icon} />}
                            onClick={(e) => onMenuItemClick(e, m)}
                        >{m.title}</Menu.Item>
                    ))}
                </SubMenu>
                <SubMenu key="sub4" icon={<Icon type={'LaptopOutlined'} />} title="角色与权限管理">
                    {siderConfig.menu4.map((m) => (
                        <Menu.Item
                            key={m.key}
                            icon={<Icon type={m.icon} />}
                            onClick={(e) => onMenuItemClick(e, m)}
                        >{m.title}</Menu.Item>
                    ))}
                </SubMenu>
            </Menu>
        </Sider>
    )
}

export default CustomSider