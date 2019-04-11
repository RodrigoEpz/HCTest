using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace HCApiTest.Models
{
    public class Cars
    {
        [Key]
        public int Id { get; set; }

        [MaxLength(50, ErrorMessage = "Model length only can be of 50 characters")]
        public string Model { get; set; }

        [MaxLength(100, ErrorMessage = "Description length only can be of 100 characters")]
        public string Description { get; set; }

        [Range(0, 9000, ErrorMessage = "Year only can be from 0 to 9,000")]
        public int Year { get; set; }

        [MaxLength(50, ErrorMessage = "Brand length only can be of 50 characters")]
        public string Brand { get; set; }

        [Range(0, 1000000, ErrorMessage = "Kilometers only can be from 0 to 1,000,000")]
        public int Kilometers { get; set; }

        [Range(1, 10000000, ErrorMessage = "Price only can be from 1 to 10,000,000")]
        public decimal Price { get; set; }
    }
}
