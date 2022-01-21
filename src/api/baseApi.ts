import generateApi from '@/utils/generateApi'

const baseApi = {
    getDictBatch: {
        url: '/dict/batch',
        method: 'GET',
    },
}

export default generateApi(baseApi)