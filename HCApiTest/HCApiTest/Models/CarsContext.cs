using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HCApiTest.Models
{
    public class CarsContext : DbContext
    {
        public CarsContext()
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Cars>().HasData(
                new Cars() { Model = "Focus", Description = "sedan", Year = 1990, Brand = "Ford", Kilometers = 1500, Price = 120000 },
                new Cars() { Model = "Focus", Description = "sedan", Year = 1990, Brand = "Ford", Kilometers = 1500, Price = 120000 },
                new Cars() { Model = "Focus", Description = "sedan", Year = 1990, Brand = "Ford", Kilometers = 1500, Price = 120000 },
                new Cars() { Model = "Focus", Description = "sedan", Year = 1990, Brand = "Ford", Kilometers = 1500, Price = 120000 },
                new Cars() { Model = "Focus", Description = "sedan", Year = 1990, Brand = "Ford", Kilometers = 1500, Price = 120000 }                );
        }
        DbSet<Cars> Cars { get; set; }
    }
}
