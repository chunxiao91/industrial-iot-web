import React from 'react'

interface IProps {
    text?: string | JSX.Element;
}

const CustomCollapse = (props: IProps) => {
    const { text } = props;
    return (
        <div className="empty">
            <span className="empty-img" />
            <span className="empty-text">{text}</span>
        </div>
    )
}

export default CustomCollapse