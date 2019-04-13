import { carsConstants } from '../Config/Constants/carsConstants'
import { carsService } from '../Services/carsService'
import {alertActions} from './alertActions'
import { commonActions } from './commonActions';


export const carsActions = {
    getAll,
    createCar,
    updateCar,
    deleteCar,
    getCheaper,
    toggleModal,
    modifyCarToEdit,

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

function createCar(car){
    return dispatch => {
        carsService.create(car).then(
            response => {
                dispatch(commonActions.showMessage("cars", response.message))
                dispatch(success())
                dispatch(carsActions.getAll())

            },
            error => {
                console.log(error)
                dispatch(commonActions.showMessage("cars",error));

                //dispatch(failure(error));
            }
        )
    }
    function success () {return{type: carsConstants.TOGGLEMODAL }}
    //function failure (error) {return{type: configConstants.CREATEFAIL, error}}
}

function updateCar(car){
    return dispatch => {
        carsService.update(car).then(
            response => {
                dispatch(commonActions.showMessage("cars", response.message))
                dispatch(success())
                dispatch(carsActions.getAll())
            },
            error => {
                console.log(error)
                dispatch(commonActions.showMessage("cars",error));
            }
        )
    }
    function success () {return{type: carsConstants.TOGGLEMODAL }}
}

function deleteCar(id){
    return dispatch => {
        carsService.deleteCar(id).then(
            response => {
                dispatch(commonActions.eraseMessage("cars"))
                dispatch(commonActions.showMessage("cars", response.message))

                dispatch(carsActions.getAll())
            },
            error => {
                console.log(error)

                dispatch(commonActions.eraseMessage("cars"))
                dispatch(commonActions.showMessage("cars",error));
            }
        )
    }
}
function getCheaper() {
    return dispatch => {
        carsService.getAll().then(
            car => {
                dispatch(success(car));
            },
            error => {
                console.log(error)
                dispatch(alertActions.error(error.message));
            }
        )
    }
    function success (car) {return { type: carsConstants.GET_MOST_CHEAPER, car }}
}

function toggleModal(typeOp, carToUpdate){
    return dispatch => {
        if(typeOp === "Edit" && carToUpdate)
        {
            dispatch(showModalEdit(typeOp,carToUpdate))
        }else{
            dispatch(toogleModal(typeOp))
        }
        
    }
    function showModalEdit (typeOp, carToUpdate) {return{type: carsConstants.SHOWMODALEDIT, typeOp, carToUpdate}}
    function toogleModal (typeOp) {return{type: carsConstants.TOGGLEMODAL, typeOp}}
}

function modifyCarToEdit(key, value){
    return {
        type: carsConstants.MODIFY_CAR_TO_EDIT,
        key,
        value
    }
}