using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HCApiTest.Models.Context
{
    public class CarsContext : DbContext
    {
        public CarsContext(DbContextOptions<CarsContext> opt): base(opt)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
        }

        // Descomentar para hacer el seed data desde aqui, tomando en cuenta que hay que comentar la parte de startup que hace lo mismo
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //modelBuilder.Entity<Cars>().HasData(
                //new Cars() { Model = "Focus", Description = "sedan", Year = 2010, Brand = "Ford", Kilometers = 80000, Price = 135200 },
                //new Cars() { Model = "Gol", Description = "Hatchbak", Year = 2012, Brand = "VW", Kilometers = 85000, Price = 115350 },
                //new Cars() { Model = "Jetta", Description = "sedan", Year = 2015, Brand = "VW", Kilometers = 70000, Price = 175000 },
                //new Cars() { Model = "Mazda 3", Description = "Hatchbak", Year = 2012, Brand = "Mazda", Kilometers = 78000, Price = 145000 },
                //new Cars() { Model = "Camaro", Description = "sedan", Year = 2011, Brand = "Chevrolet", Kilometers = 60000, Price = 195500 }
            //  );
        }

        public DbSet<Cars> Cars { get; set; }
    }
}
