
import *as constants from './constants'
import {fromJS} from 'immutable'
const defaultState =fromJS( {
    focused:false,
    mouseIn:false,
    list:[],
    page:1,
    totalPage:1
});

export default (state = defaultState,action) => {
    switch(action.type){
        case constants.SEACH_FOCUS:
        return state.set('focused',true);
        case constants.SEACH_BLUR:
        return state.set('focused',false);
        case constants.CHANG_LIST:
        return state.merge({
            list:action.data,
            totalPage:action.totalPage
        })
        // return state.set('list',action.data).set('totalPage',action.totalPage);
        case constants.MOUSEENTER:
        return state.set('mouseIn',true)
        case constants.MOUSELEAVE:
        return state.set('mouseIn',false)
        case constants.CHANGE_PAGE:
        console.log(action.page)
        return state.set('page',action.page)
        default:
        return state
    }

}