export const boardActions = {
    get,
    create,
    update,
    delete
};

get(board){
    return dispatch => {
        dispatch(request({boardId}));
    }

}