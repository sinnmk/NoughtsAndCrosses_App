import * as actionTypes from '../actions/actionTypes';

const initialState = {
    data:null, 
    showSuccessModal: false
}

const executeGetDataSuccess = (state, action) => {
    return {
        ...state,
        data: action.data
    }
}

const executedPostDataSuccess = (state, action) => {
    return{
        ...state,
        showSuccessModal: true
    }
}

const executedPutDataSuccess = (state, action) => {
    return{
        ...state,
        showSuccessModal: true
    }
}

const executedDeleteDataSucess = (state, action) => {
    return{
        ...state,
        showSuccessModal: true
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.GET_DATA_SUCCESS:
            return executeGetDataSuccess(state, action)
        case actionTypes.POST_DATA_SUCCESS: 
            return executedPostDataSuccess(state, action)
        case actionTypes.PUT_DATA_SUCCESS: 
            return executedPutDataSuccess(state, action)
        case actionTypes.DELETE_DATA_SUCCESS:
            return executedDeleteDataSucess(state, action)
    }
}

export default reducer;