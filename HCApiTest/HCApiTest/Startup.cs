using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HCApiTest.Models.Context;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using HCApiTest.Models;
using HCApiTest.Services;
using HCApiTest.Services.Interfaces;

namespace HCApiTest
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            services.AddDbContext<CarsContext>(opt => opt.UseInMemoryDatabase("CarsDB"));

            services.AddScoped(typeof(IRepositoryCRUD<>), typeof(RepositoryCRUD<>));
            services.AddScoped<CarServices>();

            services.AddCors();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, CarsContext context)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(builder => builder
                          .AllowAnyOrigin()
                          .AllowAnyMethod()
                          .AllowAnyHeader()
                          .AllowCredentials());

            app.UseMvc();
           

            if (!context.Cars.Any())
            {
                context.Cars.AddRange(new List<Cars>()
                {
                new Cars() { Model = "Focus", Description = "sedan", Year = 2010, Brand = "Ford", Kilometers = 80000, Price = 135200 },
                new Cars() { Model = "Gol", Description = "Hatchbak", Year = 2012, Brand = "VW", Kilometers = 85000, Price = 115350 },
                new Cars() { Model = "Jetta", Description = "sedan", Year = 2015, Brand = "VW", Kilometers = 70000, Price = 175000 },
                new Cars() { Model = "Mazda 3", Description = "Hatchbak", Year = 2012, Brand = "Mazda", Kilometers = 78000, Price = 145000 },
                new Cars() { Model = "Camaro", Description = "sedan", Year = 2011, Brand = "Chevrolet", Kilometers = 60000, Price = 195500 }
                });

                context.SaveChanges();
            }
        }
    }
}
