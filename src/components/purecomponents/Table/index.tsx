import React, { useState, useMemo, memo, useEffect } from 'react'
import { ConfigProvider, Table as AntTable, Button, Tooltip } from 'antd'
import { useRecoilValue } from 'recoil'
import zhCN from 'antd/lib/locale/zh_CN';
import Icon from '@/components/purecomponents/Icon'
import Actions from './Actions'
import _ from 'lodash'
import { getDict } from '@/store/selector'
// action click
export interface ActionClick {
    (id: string, data: any, index: number): void;
}
// action disabled
export interface ActionDisabled {
    (data: any): void;
}

// action
export interface Action {
    id: string; // id
    name: string | any; // 名称
    icon?: string; // 图标
    buttonType?: string; // 按钮样式
    hideIcon?: boolean; // 图标隐藏
    hideButton?: boolean; // 按钮隐藏
    disabled?: boolean | ActionDisabled; // 是否显示
    click?: ActionClick; // 点击事件
}

// tableActions
export interface TableActions {
    id: string; // id
    name: string | any; // 名称
    icon?: string; // 图标
    visible?: boolean; // 是否显示
    disabled?: boolean | ActionDisabled; // 是否可点击
    click?: ActionClick; // 点击事件
    [propName: string]: any;
}

interface ITableProps {
    actions?: Action[];
    extra?: React.ReactElement;
    tableActions?: TableActions[];
    onPaginationChange?: (page: number, pageSize: number) => void;
    showOrderNumberColumn?: boolean;
    showRowSelectionColumn?: boolean;
    showPagination?: boolean;
    onSortChange?: (sorter: any) => void;
    tableProps: any;
}

const Table = (props: ITableProps) => {
    const {
        actions = [], extra, tableProps = {}, tableActions = [],
        showOrderNumberColumn = true, showRowSelectionColumn = true,
        showPagination = true, onPaginationChange, onSortChange
    } = props
    const {
        rowKey, columns = [], rowSelection, pagination = {},
        defaultSelectedRowKeys, dataSource, scroll
    } = tableProps
    const {
        current: defaultCurrent = 1,
        pageSize: defaultPageSize = 10,
        total = 0,
        // showSizeChanger
    } = pagination
    const [current, setCurrent] = useState<number>(defaultCurrent)
    const [pageSize, setPageSize] = useState<number>(defaultPageSize)
    const [selectedRow, setSelectedRow] = useState<any>({
        selectedRowKeys: defaultSelectedRowKeys || [],
        selectedRows: []
    })
    const onTablePaginationChange = (page: number, pageSize: number) => {
        setCurrent(page)
        setPageSize(pageSize)
        onPaginationChange && onPaginationChange(page, pageSize)
    }

    useEffect(() => {
        setCurrent(defaultCurrent)
        setPageSize(defaultPageSize)
    }, [defaultCurrent, defaultPageSize, dataSource])

    useEffect(() => {
        setSelectedRow({
            selectedRowKeys: defaultSelectedRowKeys || [],
            selectedRows: []
        })
    }, [dataSource])
    /**
     * 操作列点击处理
     * @param operation 操作项
     * @param data 行数据
     */
    const handleOperation = (operation: TableActions, data: { text: any; record: any; index: number; }) => {
        const { id, click } = operation
        const disabled = getBtnDisabled(data?.record, operation.disabled)
        if (!disabled && click) {
            click(id, data.record, data.index)
        }
    }

    const getBtnDisabled = (record: any, disabled: any) => {
        if (typeof disabled === 'boolean') {
            return disabled
        } else if (typeof disabled === 'function') {
            return disabled(record)
        }
        return false
    }
    const getBtnName = (record: any, name: any) => {
        if (typeof name === 'string') {
            return name
        } else if (typeof name === 'function') {
            return name(record)
        }
        return ''
    }
    const getCommonRender = (item: any, { text, record, index }: any) => {
        if (typeof item.render === 'function') {
            const r = item.render(text, record, index)
            if (typeof r === 'string' || typeof r === 'number') {
                return <Tooltip title={r}>
                    {r}
                </Tooltip>
            }
            return r
        }
        return <Tooltip title={text}>
            {text}
        </Tooltip>
    }

    const onChange = (
        pagination: any,
        filters: any,
        sorter: any,
        extra: { currentDataSource: any[], action: 'paginate' | 'sort' | 'filter' }
    ) => {
        switch (extra?.action) {
            case 'paginate':            // 分页变化
                setCurrent(pagination?.current)
                setPageSize(pagination?.pageSize)
                onPaginationChange && onPaginationChange(pagination?.current, pagination?.pageSize)
                break
            case 'sort':                // 排序变化
                onSortChange && onSortChange(sorter)
                break
            case 'filter':              // 筛选变化
                break
        }
    }
    let _columns = Object.assign([], columns)
    // 序号列
    if (showOrderNumberColumn) {
        _columns = [
            {
                title: '序号',
                dataIndex: '_index',
                align: 'center',
                width: 60,
                fixed: scroll?.x ? 'left' : undefined,
                render: (_text: any, _record: any, index: number) => {
                    return (pageSize * (current - 1)) + index + 1
                }
            },
            ...columns
        ]
    }
    // 操作列
    const _tableActions = _.filter(tableActions, (item: any) => (
        item.visible === true || item.visible === null || item.visible === undefined
    ))

    const optWidth = useMemo(() => {
        return _tableActions?.reduce((total: number, item: any) => {
            const t = item.icon ? 22 : 50
            // eslint-disable-next-line no-param-reassign
            total += t
            return total > 100 ? total : 100
        }, 0)
    }, [_tableActions?.length])

    _columns = _columns.map((item: any) => {
        if (item.dictId) {
            return {
                ...item,
                render(value: string, record: any, index: number) {
                    let _dict = useRecoilValue(getDict(item.dictId))
                    let label: string = ''
                    _.forEach(_dict, (dict:any, key:number) => {
                        if (dict.dictValueCode === value) {
                            label = dict.dictValue
                        }
                    })
                    return label
                },
            }
        }
        return {
            ...item,
            ellipsis: item.ellipsis || {
                showTitle: false
            },
            // eslint-disable-next-line react/display-name
            render: (text: any, record: any, index: number) => {
                return getCommonRender(item, { text, record, index })
            }
        }
    })
    if (_tableActions?.length) {
        _columns.push({
            title: '操作',
            dataIndex: '_operation',
            align: 'center',
            width: optWidth < 50 ? 50 : optWidth,
            className: 'operation',
            fixed: scroll?.x ? 'right' : undefined,
            render: (text: any, record: any, index: number) => {
                return _.map(_tableActions, (item: any, subIndex: number) => {
                    const disabled = getBtnDisabled(record, item.disabled)
                    const name = getBtnName(record, item.name)
                    if (item.icon) {
                        return <span
                            className={`operation-icon ${disabled ? 'disabled' : ''} ${item.type || ''}`}
                            key={item.id}
                            onClick={() => handleOperation(item, { text, record, index })}
                        >
                            <Icon type={item.icon} title={name} style={item.iconStyle || {}} />
                        </span>
                    }
                    return (
                        <Button
                            type="link"
                            disabled={disabled}
                            className="app-table-column-opr"
                            key={item.id || index}
                            data-id={item.id}
                            onClick={() => handleOperation(item, { text, record, index })}
                        >
                            {name}
                        </Button>
                    )
                })
            }
        })

    }
    // 勾选列
    let _rowSelection
    if (showRowSelectionColumn) {
        _rowSelection = rowSelection || {
            selectedRowKeys: selectedRow.selectedRowKeys,
            onChange: (selectedRowKeys: string[] | number[], selectedRows: any[]) => {
                setSelectedRow({
                    selectedRowKeys,
                    selectedRows
                })
            }
        }
    }

    // 是否分页
    let _pagination: any = {
        current: current,
        pageSize: pageSize,
        total: total,
        showTotal: (total: number) => `第${current}页/共${total}条`,
        // showSizeChanger: showSizeChanger === undefined ? true : showSizeChanger,
        onChange: onTablePaginationChange,
        showSizeChanger: false,
        showQuickJumper: true,
        size: 'small'
    }
    if (!showPagination) {
        _pagination = false
    }
    const defaultTableProps = {
        bordered: true,
        size: 'small'
    }
    const tps = {
        ...defaultTableProps,
        ...tableProps,
        columns: _columns,
        rowSelection: _rowSelection,
        pagination: _pagination
    }
    return <div className="app-table">
        <ConfigProvider locale={zhCN}>
            <Actions
                data={actions}
                selectedRows={selectedRow.selectedRows}
                extra={extra}
            />
            <AntTable
                {...tps}
                rowKey={rowKey || 'id'}
                onChange={onChange}
            />
        </ConfigProvider>
    </div>
}

function equal(prevProps: any, nextProps: any) {
    if (_.isEqual(prevProps.tableProps.dataSource, nextProps.tableProps.dataSource)
        && _.isEqual(prevProps.tableProps.rowSelection, nextProps.tableProps.rowSelection)
        && _.isEqual(prevProps.tableProps.loading, nextProps.tableProps.loading)
        && _.isEqual(prevProps.tableProps.pagination, nextProps.tableProps.pagination)) {
        return true
    } else {
        return false
    }
}

export default memo(Table, equal)