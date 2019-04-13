import { carsConstants } from '../Config/Constants/carsConstants';

const initialState = {
    table: {
        cars:{},
        status: false
    },
    edit:{
        car:{
            brand:'',
            description:'',
            model:'',
            year: 0,
            price: 0,
            kilometers: 0
        },
        status: false
    },
    modalCrud: false,
    typeOp: '',
    quicksearch:{
        car:{},
    }
}

export function cars(state = initialState, action) {
  switch (action.type) {
    case carsConstants.GET_ALL:
      return {
        ...state,
        table: {
            cars: action.cars,
            status: true
        }
      };

    case carsConstants.GET_MOST_CHEAPER:{
        return {
            ...state,
            quicksearch:{
                car: action.car
            }
        }
    }

    case carsConstants.TOGGLEMODAL:{
        const newmodalState = !state.modalCrud
        return {
            ...state,
            edit: initialState.edit,
            modalCrud: newmodalState,
            typeOp: action.typeOp || ''
        }
    }

    case carsConstants.SHOWMODALEDIT:{
        const carToUpdate = action.carToUpdate ? action.carToUpdate : initialState.edit.car
        return{
            ...state,
            modalCrud: true,
            typeOp: action.typeOp || '',
            edit:{
                car: carToUpdate,
                status: true
            }            
        }
    }

    case carsConstants.MODIFY_CAR_TO_EDIT : {
        console.log(state)
        return{
            ...state,
            edit: Object.assign({}, state.edit, {
                car: Object.assign({}, state.edit.car, {
                    [action.key]: action.value
                })
            })
        }
    }

    default:
      return state
  }
}