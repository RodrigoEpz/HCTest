import { commonHeader } from '../Helpers/Utils/httpHeaders'
import {config} from '../Config/config'


export const carsService = {
   getAll,
//    create,
//    getById
};

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: commonHeader()
    };

    return fetch(config.urls.HCApi  + "cars" , requestOptions).then(handleResponse)
    .then(function(response){
        return response
    });
}

// function create(car){
  
//     const horarioApiFormat = {
//         NombreHorario: car.NombreHorario,
//         Descripcion: car.Descripcion,
//         DiasSemana: car.DiasSemana.toString(),
//         RangoHoras: car.hours.toString(),
//     }
//     const requestOptions = {
//         method: 'POST',
//         headers: commonHeader(),
//         body: JSON.stringify( horarioApiFormat )
//     }
//     return fetch(urlConstants.URLSCHEDULES, requestOptions)
//     .then(handleResponseText)
//     .then((response) => {
//         return response
//     })
// }

// function getById (Id){
//     const requestOptions = {
//         method: 'GET',
//         headers: commonHeader()
//     }
//     return fetch(urlConstants.URLSCHEDULES + "/" + Id, requestOptions).then(handleResponse)
//     .then(function(scheduleResponse){
//         return scheduleResponse
//     });
// }

function handleResponse(response) {
    return response.json()
}