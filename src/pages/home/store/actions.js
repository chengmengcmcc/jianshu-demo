import axios from 'axios';
import { constants } from './index';

const getHomeData = (data) => ({
    type: constants.INIT_HOME_DATA,
    data
})
const getListMoreAction = (data, page) => ({
    type: constants.GET_MORE_AERICLES,
    data,
    page
})

export const changeBanner = (index) => ({
    type: constants.GET_CURRENT_BANNER,
    index
})

export const getListData = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then(res => {
            dispatch(getHomeData(res.data))
        }).catch(err => console.log(`data 错误：${err}`))
    }
}
export const getMoreList = (page) => {
    return (dispatch) => {
        // 模拟加载更多数据 数据id会冲突 无视
        console.log(333)
        axios.get('/api/moreArticles.json?page=' + page).then(res => {
            console.log(12333)
            dispatch(getListMoreAction(res.data.articleList, page))
        }).catch(err => console.log(`data 错误：${err}`))
    }
}