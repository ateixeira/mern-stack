function postComments(state = [], action) {
    switch(action.type){
        case 'ADD_COMMENT':
            // return the new state with the new comment
            console.log("Add comment");
        case 'REMOVE_COMMENT':
            // we need to return the new state without the deleted comment
            console.log("Remove comment");
        default:
            return state;
    }
    return state;
}

function comments(state = [], action) {
    if(typeof action.postId !== 'undefined') {
        console.log("COMMENT REDUCER WAS CALLED!")
    }
    return state;
}

export default comments;
