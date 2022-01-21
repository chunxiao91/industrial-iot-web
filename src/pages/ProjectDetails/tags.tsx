import React from 'react'
import { Tag, Tooltip } from 'antd'

interface IStyle {
    color: string;
}

interface ITag {
    code: string;
    name: string;
    title: string;
    desc: string;
    type: number;
    style: IStyle;
    isShow: boolean;
}

interface IProps {
    tag: ITag[];
}

const Tags = (props: IProps) => {
    const { tag } = props

    return (
        <React.Fragment>
            {Array.isArray(tag) && tag.map((t: ITag, i: number) => (
                t?.isShow
                    ? (
                        <Tooltip key={i} title={t?.desc}>
                            <Tag color={t?.style?.color}>{t?.title}</Tag>
                        </Tooltip>
                    )
                    : null
            ))}
        </React.Fragment>
    )
}

export default Tags