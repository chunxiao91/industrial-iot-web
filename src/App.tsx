import React from 'react'
// import { useRecoilState } from 'recoil'
import Roots from '@/routers'
// import { baseApi } from '@/api'
// import { dict } from '@/store/atom'
import '@/locales/'
// import groupBy from 'lodash/groupBy'
// import forEach from 'lodash/forEach'

function App() {
    // const [dictVal, setDictVal] = useRecoilState(dict)

    // useEffect(() => {
    //     getDictBatch()
    // }, [])

    // const getDictBatch = () => {
    //     baseApi.getDictBatch().then((res: any) => {
    //         if (res.code === '0') {
    //             const batchDict = {
    //                 ...dictVal,
    //             }
    //             const groupData = groupBy(res.data, 'dictId')
    //             forEach(groupData, (value, key) => {
    //                 if (value[0]?.dictSort) {
    //                     value.sort((a, b) => {
    //                         let value1 = a['dictSort'];
    //                         let value2 = b['dictSort'];
    //                         return value1 - value2;
    //                     })
    //                 }
    //                 batchDict[key] = value || []
    //             })
    //             console.log('dict: ', batchDict)
    //             setDictVal(batchDict)
    //         }
    //     })
    // }

    return <Roots />
}

export default App
