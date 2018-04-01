//get data from action to store in state object of reducer
export default function (state = [], action) {
    switch (action.type) {
        case 'INITIAL_INPUT':
            return action.payload;
            break;
        default :
            return state;
        }

}

