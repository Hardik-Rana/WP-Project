import { SET_USERNAME,CLEAR_USERNAME,SET_LOADING} from "../types";

const logReducer=(state,action)=>{

    switch(action.type)
    {
        case SET_USERNAME:
            return{
                ...state,
                username: action.payload
            }
        
        case CLEAR_USERNAME:
            return{
                ...state,
                username: null
            }

        case SET_LOADING:
            return{
                ...state,
                loading: action.payload
            }

        default:
            return state;
    }
}

export default logReducer;