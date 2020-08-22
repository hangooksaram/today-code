import {combineReducers} from 'redux'
import {ADD_CONTENTBAG, CONTENTBAG_AVAILABLE} from '../contentStore/contentBag'

contentdataState = {contentBags : []};

const contentReducer = (state = contentdataState, action) => { //리듀서
    switch (action.type){
        case ADD_CONTENTBAG :
            let {contentBag} = action.data;
            let clone = JSON.parse(JSON.stringify(state.contentBags));
            clone.unshift(contentBag);

            return {...state, conentBags : clone}
        
            default :
                return state;

        case CONTENTBAG_AVAILABLE :
            let {contentBags} = action.data;
            
            return {...state, contentBags};
        }
}

const rootReducer = combineReducers(contentReducer);

export default rootReducer