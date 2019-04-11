using HCApiTest.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HCApiTest.Services.Interfaces
{
    public interface IRepositoryCRUD<T> where T : EntityBase
    {
        void Add(T entity);
        void Delete(T entity);
        void Update(T entity);
        IEnumerable<T> GetAll();
        T FindById(int Id);
    }
}
