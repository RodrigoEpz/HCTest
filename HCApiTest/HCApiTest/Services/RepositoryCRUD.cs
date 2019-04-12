using HCApiTest.Models;
using HCApiTest.Models.Context;
using HCApiTest.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HCApiTest.Services
{
    public class RepositoryCRUD<TEntity> : IRepositoryCRUD<TEntity> where TEntity: Entity
    {
        DbSet<TEntity> entities;
        CarsContext context;
        public RepositoryCRUD(CarsContext _carContext)
        {
            context = _carContext;
            entities = _carContext.Set<TEntity>();
        }

        public bool Add(TEntity entity)
        {
            entities.Add(entity);
            return context.SaveChanges() > 0 ;
        }

        public bool Delete(TEntity entity)
        {
            entities.Remove(entity);
            return context.SaveChanges() > 0 ;
        }

        public bool Update(TEntity entity)
        {
            entities.Update(entity);
            return context.SaveChanges() > 0 ;

        }

        public IEnumerable<TEntity> GetAll()
        {
            return entities.ToList();
        }

        public TEntity FindById(int Id)
        {
            return entities.FirstOrDefault(entity => entity.Id == Id);
          
        }

    }
}
