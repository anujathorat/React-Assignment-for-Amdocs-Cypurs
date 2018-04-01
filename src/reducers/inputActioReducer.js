//get data from action to store in state object of reducer
export default function (state = null, action) {
    switch (action.type) {
        case 'GET_INPUT':
            return action.payload;
            break;
        }
        return state;
    }

