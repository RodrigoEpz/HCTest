import { commonHeader } from '../Helpers/Utils/httpHeaders'
import {config} from '../Config/config'


export const carsService = {
   getAll,
   getCheaper,
   create,
   update,
   deleteCar
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

function getCheaper() {
    const requestOptions = {
        method: 'GET',
        headers: commonHeader()
    };

    return fetch(config.urls.HCApi  + "cars/cheaper" , requestOptions).then(handleResponse)
    .then(function(response){
        return response
    });
}

function create(car){
  
    const carFomated = {
        brand: car.brand,
        model: car.model,
        description: car.description,
        year: parseInt(car.year),
        kilometers: parseInt(car.kilometers),
        price: parseFloat(car.price)
    }
    const requestOptions = {
        method: 'POST',
        headers: commonHeader(),
        body: JSON.stringify( carFomated )
    }
    return fetch(config.urls.HCApi  + "cars" , requestOptions)
    .then(handleResponseCheckingCode)
    .then((response) => {
        return response
    })
}

function update (car){
    const carFomated = {
        id: car.id,
        brand: car.brand,
        model: car.model,
        description: car.description,
        year: parseInt(car.year),
        kilometers: parseInt(car.kilometers),
        price: parseFloat(car.price)
    }
    const requestOptions = {
        method: 'PUT',
        headers: commonHeader(),
        body: JSON.stringify( carFomated )
    }
    return fetch(config.urls.HCApi  + "cars" , requestOptions)
    .then(handleResponseCheckingCode)
    .then((response) => {
        return response.result
    })
}

function deleteCar (id){
    
    const requestOptions = {
        method: 'DELETE',
        headers: commonHeader(),
    }

    return fetch(config.urls.HCApi  + "cars/" + id , requestOptions)
    .then(handleResponseCheckingCode)
    .then((response) => {
        return response
    })
}

function handleResponse(response) {
    return response.json()
}

function handleResponseCheckingCode(response) {
    
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            //const error = (data && data.message) || response.statusText;
            const error = data ? data : response.statusText
            return Promise.reject(error);
        }

        return data;
    });
}