import React, { memo } from 'react'
import _ from 'lodash'
import * as AllIcons from '@ant-design/icons'

interface IIconProps {
    type: string,
    title?: string,
    style?: any,
    className?: string,
    disabled?: boolean,
    spin?: boolean,
    onClick?: () => void,
    rotate?: number,
}

const Icon = (props: IIconProps) => {
    const { type, title, style, onClick, ..._props } = props
    const { className, disabled = false } = _props || {}
    if (type) {
        const TIcon = _.get(AllIcons, type)
        return TIcon
            ? <TIcon
                title={title}
                onClick={onClick}
                style={style}
                {..._props}
                className={`${className} ${disabled ? 'disabled' : ''}`}
            />
            : null
    }
    return null
}

export default memo(Icon)