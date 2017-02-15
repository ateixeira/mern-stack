function posts(state = [], action) {
    switch(action.type) {
        case 'INSERT_POST' :
            console.log("Incrementing Likes!!");
        default:
            return state;
    }
}

export default posts;
