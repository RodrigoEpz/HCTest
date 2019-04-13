import {configConstants} from '../Config/Constants/configConstants'

export const commonActions = {
    eraseMessage,
    showMessage
}

function eraseMessage (originOfMessage){
    return {
        type: configConstants.ERASEMESSAGE,
        originOfMessage
    }
}

function showMessage (originOfMessage, message, isDelete = false){
    return {
        type: configConstants.SHOWMESSAGE,
        originOfMessage,
        message,
        isDelete
    }
}