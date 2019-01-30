import { constants } from './index'

const defaulrState = {
    inputFocused: false,
    list: [],
    mouseIn: false,
    page: 1,
    totalPage: 1
}

const objClone = (state) => (
    JSON.parse(JSON.stringify(state))
)

const booleanToggle = (boolean) => (!boolean)

export default (state = defaulrState, action) => {
    let newState = objClone(state)
    switch (action.type) {
        case constants.INPUT_FOCUSED:
            newState.inputFocused = booleanToggle(newState.inputFocused)
            return newState
        case constants.INPUT_BLUR:
            newState.inputFocused = booleanToggle(newState.inputFocused)
            return newState
        case constants.LIST_DATA:
            newState.list = action.data
            newState.totalPage = Math.ceil(action.data.length / 10)
            return newState
        case constants.MOUSE_ENTER:
            newState.mouseIn = booleanToggle(newState.mouseIn)
            return newState
        case constants.MOUSE_LEAVE:
            newState.mouseIn = booleanToggle(newState.mouseIn)
            return newState
        case constants.HOT_CHANGE:
            newState.page = newState.page < newState.totalPage ? ++newState.page : 1
            return newState
        default:
            return state
    }
}