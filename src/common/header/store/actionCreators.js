import { constants } from './index'
import axios from 'axios'

const getData = (data) => ({
    type: constants.LIST_DATA,
    data
})

export const searchFocus = () => ({
    type: constants.INPUT_FOCUSED
})
export const searchBlur = () => ({
    type: constants.INPUT_FOCUSED
})
export const hotSearchClick = () => ({
    type: constants.HOT_SEARCH_CLICK
})


export const getListData = () => {
    return (dispatch) => {
        axios.get('/api/hotList.json').then(res => {
            const data = res.data
            dispatch(getData(data))
        }).catch(err => {
            console.log(err);
        })
    }
}
export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
})
export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE
})

export const hotChange = () => ({
    type: constants.HOT_CHANGE
})