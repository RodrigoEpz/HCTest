using HCApiTest.Models;
using HCApiTest.Models.Context;
using HCApiTest.Models.Utils;
using HCApiTest.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HCApiTest.Services
{
    public class CarServices
    {
        IRepositoryCRUD<Cars> carsRepository;

        public CarServices(IRepositoryCRUD<Cars> _carsRepository)
        {
            carsRepository = _carsRepository;
        }

        public async Task<ResponseCRUDMessage> Add (Cars car)
        {
            var response = new ResponseCRUDMessage(false, "");
            try
            {
                response.status = await carsRepository.Add(car);
                response.message = "The car was created!";
            }
            catch (Exception ex)
            {
                response.message = ex.Message;
            }
            return response;
        }

        public async Task<ResponseCRUDMessage> Update(Cars car)
        {
            var response = new ResponseCRUDMessage(false, "");
            var carExist = carsRepository.FindById(car.Id);
            
            if(carExist == null)
            {
                response.message = "The car not exist!";
                return response;
            }
            carExist = car;
            try
            {

                response.status = await carsRepository.Update(carExist);
                if (response.status) { response.message = "The car was updated!"; }
                else { return null; }
            }
            catch (Exception ex)
            {
                response.message = ex.Message;
            }
            return response;
        }

        public ResponseCRUDMessage Delete(int id)
        {
            var response = new ResponseCRUDMessage(false, "");
            var car = carsRepository.FindById(id);
            if(car == null)
            {
                response.message = "The car not exist!";
                return response;
            }
            try
            {
                response.status = carsRepository.Delete(car);
                if (response.status){ response.message = "The car was deleted!"; }
                else{ return null; }
            }
            catch (Exception ex)
            {
                response.message = ex.Message;
            }
            return response;
        }

        public IEnumerable<Cars> GetAll()
        {
            try
            {
                return carsRepository.GetAll();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Cars GetById(int id)
        {
            try
            {
                return carsRepository.FindById(id);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Cars GetCheaper()
        {
            return carsRepository.GetAll().OrderBy(p => p.Price).FirstOrDefault();
        }
    }
}
