import { combineReducers } from 'redux';
import HomeReducer from '../pages/Home/store/reducer'

const defaultState = {
    indexState: {}
};

let indexReducer = (state = defaultState, action) => {
    // switch(action.type) {
    //     // case constants.SEARCH_FOCUS:
    //     //     return state.set('focused', true);
    //     // case constants.SEARCH_BLUR:
    //     //     return state.set('focused', false);
    //     // case constants.CHANGE_LIST:
    //     //     return state.merge({
    //     //         list: action.data,
    //     //         totalPage: action.totalPage
    //     //     });
    //     // case constants.MOUSE_ENTER:
    //     //     return state.set('mouseIn', true);
    //     // case constants.MOUSE_LEAVE:
    //     //     return state.set('mouseIn', false);
    //     // case constants.CHANGE_PAGE:
    //     //     return state.set('page', action.page);
    //     // default:
    //     //     return state;
    //     return state;
    // }
    return state;
}

export default combineReducers({
    indexReducer,
    HomeReducer
})