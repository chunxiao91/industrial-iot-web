import Cookies from 'js-cookie'
import { unescape, findIndex } from 'lodash'
import moment from 'moment'
import { DATE_FORMAT } from '@/config'

// 字符串 trim
export const trimTransform = (value: string | null | undefined) => {
    return value ? value.trim() : ''
}

interface ICookieOptionProps {
    expires?: number | Date;
    path?: string;
    domain?: string;
}

// 设置cookie
export const setCookie = (name: string, value: string, option: ICookieOptionProps = { path: '/' }) => {
    Cookies.set(name, value, option)
}

// 获取cookie
export const getCookie = (name: string) => {
    return Cookies.get(name)
}

// 删除cookie
export const deleteCookie = (name: string, option: ICookieOptionProps = { path: '/' }) => {
    Cookies.remove(name, option)
}

// 设置localStorage
export const setLocalStorage = (name: string, value: string) => {
    window.localStorage.setItem(name, value)
}

// 获取localStorage
export const getLocalStorage = (name: string) => {
    return window.localStorage.getItem(name)
}

/**
 * @desc 下载xml/svg
 * @param  type  类型  svg / xml
 * @param  data  数据
 * @param  name  文件名称
 */
export const download = (type: string, data: any, name?: string) => {
    let dataTrack = ''
    const a = document.createElement('a')
    switch (type) {
        case 'xml':
            dataTrack = 'bpmn'
            break
        case 'svg':
            dataTrack = 'svg'
            break
        default:
            break
    }

    let cname = name || `diagram.${dataTrack}`
    a.setAttribute(
        'href',
        `data:application/bpmn20-xml;charset=UTF-8,${encodeURIComponent(data)}`
    )
    a.setAttribute('target', '_blank')
    a.setAttribute('dataTrack', `diagram:download-${dataTrack}`)
    a.setAttribute('download', cname)
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}

/**
 * @desc 路由history中查询字符串参数转对象类型
 * @param history 路由history
 * @return 查询对象类型
 */
export const queryStringToObj:any = (history: any) => {
    // 保存数据的对象
    const args = {}
    if (!history) { return args }

    const search = history.location.search
    // 取得查询字符串并去掉开头的问号
    let qs = search.length > 0 ? search.substring(1) : ''

    // 取得每一项  “参数=参数值”
    let items = qs.length ? qs.split('&') : []
    let item = null
    let name = null
    let value = null

    // 逐个将每一项添加到args 对象中 ,item保存参数，name保存参数值使
    // 用decodeURIComponent()分别解码name 和value（因为查询字符串应该是被编码过的）
    for (let i = 0, len = items.length; i < len; i++) {
        item = items[i].split('=')
        name = decodeURIComponent(item[0])
        value = decodeURIComponent(item[1])
        if (name.length) {
            args[name] = value
        }
    }
    return args
}

/**
 * @desc 获取url上参数值
 * @param name 参数
 * @returns 参数值
 */
export const getQueryValByName = (name: string) => {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    const search = window.location.search.substring(1).match(reg)
    if (search) {
        return unescape(search[2])
    }
    return null
}

/**
 * @desc 不刷新页面修改浏览器中url
 * @param search 参数值
 */
export const setUrl = (url: string) => {
    window.history.pushState({ url }, document.title, url)
}

/**
 * @desc 获取当前日期时间
 */
export const getCurrentTime = () => {
    return moment().format(DATE_FORMAT.YMD_HMS)
}

/**
 * @desc 生成唯一id
 */
export const uuid = () => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2)
    // return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    //     const r = (Math.random() * 16) | 0;
    //     const v = c === 'x' ? r : (r & 0x3) | 0x8;
    //     return v.toString(16);
    // })
}

/**
 * @desc 通过字典code获取字典中对应名称
 */
export const getDictValueByKey = (dicts: any[], key: string) => {
    if (!dicts || dicts.length === 0) { return '' }
    const i = findIndex(dicts, (d: any) => d.dictValueCode === key)
    if (i !== -1) {
        return dicts[i].dictValue
    } else {
        return ''
    }
}

const util = {
    trimTransform,
    setCookie,
    getCookie,
    deleteCookie,
    setLocalStorage,
    getLocalStorage,
    download,
    queryStringToObj,
    getQueryValByName,
    setUrl,
    getCurrentTime,
    uuid,
    getDictValueByKey,
}

export default util