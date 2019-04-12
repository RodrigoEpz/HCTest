import { carsConstants } from '../Config/Constants/carsConstants';

const initialState = {
    table: {
        cars:{},
        status: false
    },
    edit:{
        car:{},
        status: false
    },
    modalCrud: false,
    typeOp: ''
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

    case carsConstants.GET_BY_ID:
      return {
        ...state,
        edit: {
            car: action.car,
            status: true
        }
      };

    case carsConstants.GET_MOST_CHEAPER:
      return state;

      case carsConstants.TOGGLEMODAL:{
        const newmodalState = !state.modalCrud
        return {
            ...state,
            modalCrud: newmodalState,
            typeOp: action.typeOp || ''
        }
    }

    default:
      return state
  }
}