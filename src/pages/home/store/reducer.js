import { constants } from './index';
import bannerOne from '../../../static/images/banner1.jpg'
import bannerTwo from '../../../static/images/banner2.png'
import bannerThree from '../../../static/images/banner3.jpg'
import bannerFour from '../../../static/images/banner4.jpg'
import bannerFive from '../../../static/images/banner5.jpg'

const defaultState = {
    bannerImg: [bannerOne, bannerTwo, bannerThree, bannerFour, bannerFive],
    curBanner: 0,
    articleList: [],
    curPage: 1,
    totalPage: 5,
    authors: []
}
const objClone = (state) => (
    JSON.parse(JSON.stringify(state))
)
export default (state = defaultState, action) => {
    let newState = objClone(state)
    switch (action.type) {
        case constants.INIT_HOME_DATA:
            newState.articleList = action.data.articleList
            newState.authors = action.data.authors
            return newState
        case constants.GET_MORE_AERICLES:
            newState.curPage = action.page
            newState.articleList = newState.articleList.concat(action.data)
            return newState
        case constants.GET_CURRENT_BANNER:
            newState.curBanner = action.index
            return newState
        default:
            return state
    }
}