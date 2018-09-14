import * as constants from './constants'
import axios from 'axios'
import {
    fromJS
} from 'immutable';
export const searchFoucus = () => ({
    type: constants.SEACH_FOCUS
});
export const searchBlur = () => ({
    type: constants.SEACH_BLUR
})
const changList = (data) => ({
    type: constants.CHANG_LIST,
    data: fromJS(data),
    totalPage:Math.ceil(data.length/10)
})
export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json ').then((res) => {
            const data = res.data
            dispatch(changList(data.data))
        }).catch((err) => {
            console.log(err)
        })
    }
}
export const mouseEnter = () =>({
    type:constants.MOUSEENTER
})
export const mouseLeave = () => ({
    type:constants.MOUSELEAVE
})
export const changePage= (page) =>({
    type:constants.CHANGE_PAGE,
    page
})