import {configConstants} from '../Config/Constants/configConstants'
import { extractError } from '../Helpers/Utils/formats';


const initialState = {
    modalMessage: {
        type: '',
        message: '',
        isActive: false,
        isForDelete: 0
    }
}

export function common(state = initialState, action){
    switch(action.type)
    {
        case configConstants.ERASEMESSAGE:{
            return {
                ...state,
                modalMessage :{
                    type: action.originOfMessage,
                    message: '',
                    isActive: false,
                    isForDelete: 0
                }
            }
        }
        case configConstants.SHOWMESSAGE:{
            let errorMessage = action.message ? extractError(action.message) : "Hubo un error!"
            return {
                ...state,
                modalMessage :{
                    type: action.originOfMessage,
                    message: errorMessage,
                    isActive: true,
                    isForDelete: action.isDelete ? action.isDelete : 0
                }
            }
        }
        
        default:
            return state
    }
}