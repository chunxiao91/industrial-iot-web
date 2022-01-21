import React, { useState } from 'react'
import ReactQuill from 'react-quill'

interface IProps {
    defaultValue?: string;
    onChange?: Function;
}

const Editor = (props: IProps) => {
    const { defaultValue = '', onChange } = props
    const [value, setValue] = useState(defaultValue)

    const onQuillChange = (html: string) => {
        setValue(html)
        onChange && onChange(html)
    }

    return (
        <ReactQuill theme="snow" value={value} onChange={onQuillChange} />
    )
}

export default Editor