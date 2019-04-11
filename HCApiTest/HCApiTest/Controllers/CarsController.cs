using HCApiTest.Models;
using HCApiTest.Models.Context;
using HCApiTest.Services.Interfaces;
using HCApiTest.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HCApiTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarsController : ControllerBase
    {
        IRepositoryCRUD<Cars> carsRepository;

        public CarsController(IRepositoryCRUD<Cars> _carsRepository)
        {
            this.carsRepository = _carsRepository;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Cars>> Get()
        {
            return Ok(carsRepository.GetAll());
        }

        [HttpGet("{id}")]
        public ActionResult<Cars> Get(int id)
        {
            return Ok(carsRepository.FindById(id));
        }
    }
}
