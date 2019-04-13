using HCApiTest.Models;
using HCApiTest.Models.Context;
using HCApiTest.Services.Interfaces;
using HCApiTest.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HCApiTest.Models.Utils;

namespace HCApiTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarsController : ControllerBase
    {
        CarServices carService;

        public CarsController(CarServices _carService)
        {
            this.carService = _carService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Cars>> GetAll()
        {
            return Ok(carService.GetAll());
        }

        [HttpGet("{id}")]
        public ActionResult<Cars> Get(int id)
        {
            var car = carService.GetById(id);
            if(car != null)
            {
                return Ok(car);
            }
            return NotFound();
        }


        [HttpPost]
        public async Task<ActionResult<ResponseCRUDMessage>> Post([FromBody]Cars car)
        {
            if (ModelState.IsValid)
            {
                return Ok(await carService.Add(car));
            }
            return BadRequest();
        }

        [HttpPut]
        public async Task<ActionResult<ResponseCRUDMessage>> Put([FromBody]Cars car)
        {
            if (ModelState.IsValid)
            {
                var carUpdated = await carService.Update(car);
                if (carUpdated.status)
                {
                    return Ok(carService.Update(car));
                }
                else
                {
                    return NotFound(carUpdated);
                }
            }
            return BadRequest();
        }

        [HttpDelete("{id}")]
        public ActionResult<ResponseCRUDMessage> Delete(int id)
        {
            var carDeleted = carService.Delete(id);
            if (carDeleted.status)
            {
                return Ok(carDeleted);
            }
            return NotFound(carDeleted);
        }
    }
}
