using HCApiTest.Models;
using HCApiTest.Models.Context;
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
        private readonly CarsContext carsDB;

        public CarsController(CarsContext _carsDB)
        {
            this.carsDB = _carsDB;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Cars>> Get()
        {
            return carsDB.Cars.ToList();
        }

        [HttpGet("first")]
        public ActionResult<Cars> GetFirst()
        {
            return carsDB.Cars.FirstOrDefault();
        }
    }
}
