import { carsConstants } from '../Config/Constants/carsConstants'
import { carsService } from '../Services/carsService'
import {alertActions} from './alertActions'

export const carsActions = {
    getAll,
    getById,
    getCheaper,
    toggleModal
};

function getAll(){
    return dispatch => {
        carsService.getAll().then(
            cars => {
                dispatch(success(cars));
            },
            error => {
                console.log(error)
                dispatch(alertActions.error(error.message));

            }
        )
    }
    function success (cars) {return { type: carsConstants.GET_ALL, cars }}
}

function getById(id) {
    return { type: carsConstants.GET_BY_ID, id };
}

function getCheaper() {
    return { type: carsConstants.GET_MOST_CHEAPER };
}

function toggleModal(typeOp, parentId, car ={}){
    return dispatch => {
        if(typeOp === "Edit" && parentId)
        {
            dispatch(showModalEdit(typeOp,car))
        }else{
            dispatch(toogleModal(typeOp))
        }
        
    }
    function showModalEdit (typeOp, car) {return{type: carsConstants.SHOWMODALEDIT, typeOp, car}}
    function toogleModal (typeOp) {return{type: carsConstants.TOGGLEMODAL, typeOp}}
}