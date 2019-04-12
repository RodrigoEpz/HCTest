using HCApiTest.Models;
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

        public ResponseCRUDMessage Add (Cars car)
        {
            var response = new ResponseCRUDMessage(false, "");
            try
            {
                response.status = carsRepository.Add(car);
                response.message = "The car was created!";
            }
            catch (Exception ex)
            {
                response.message = ex.Message;
            }
            return response;
        }

        public ResponseCRUDMessage Update(Cars car)
        {
            var carExist = carsRepository.FindById(car.Id);
            if(carExist == null)
            {
                return null;
            }
            var response = new ResponseCRUDMessage(false, "");
            try
            {

                response.status = carsRepository.Update(car);
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
            var car = carsRepository.FindById(id);
            if(car == null)
            {
                return null;
            }
            var response = new ResponseCRUDMessage(false, "");
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
    }
}
