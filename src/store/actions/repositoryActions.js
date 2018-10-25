import * as actionTypes from './actionTypes';
import axios from '../../axios/axios';

const getDataSuccess = (data) => {
    return {
        type: actionTypes.GET_DATA_SUCCESS,
        data: data
    }
}

export const getData = (url, props) => {
    return (dispatch) => {
        axios.get('http://localhost:3000/')
            .then(response => {
                dispatch(getDataSuccess(response.data))
            })
            .catch(error => {

            })
    }
}
const postDataSuccess = (repsonse) => {

    return {
        type: actionTypes.POST_DATA_SUCCESS,
        data: data
    }
}

export const postData = (url, obj, props) => {
    return dispatch=> {
        axios.post('http://localhost:3000', obj )
            .then(response => {

                dispatch(postDataSuccess(response));
            })
            .catch(error => {

            })
    }
}

const putDataSuccess = (response) => {
    return {
        type: actionTypes.PUT_DATA_SUCCESS,
        data: data
    }
}

export const putData = (url, obj, props) => {
    return dispatch => {
        axios.put('http://localhost:3000/', obj)
            .then(reponse => {
                dispatch(putDataSuccess(response));
            })
            .catch(error => {

            })
    }
}

const deleteDataSuccess = (reponse) => {
    return {
        type: actionTypes.DELETE_DATA_SUCCESS,
        data: data
    }
}

export const deleteData = (url, props) => {
    return (dispatch) => {
        axios.delete('http://localhost:3000/')
            .then(response => {
                dispatch(deleteDataSuccess(reponse))
            })
            .catch(error => {

            })
    }
}
