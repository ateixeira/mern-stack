function posts(state = [], action) {
    switch(action.type) {
        case 'ADD_POST' :
            console.log("ADDING NEW POST!!");
        default:
            return state;
    }
}

export default posts;
