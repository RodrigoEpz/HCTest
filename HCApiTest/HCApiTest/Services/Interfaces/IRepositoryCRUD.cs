using HCApiTest.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HCApiTest.Services.Interfaces
{
    public interface IRepositoryCRUD<T> where T : Entity
    {
        bool Add(T entity);
        bool Delete(T entity);
        bool Update(T entity);
        IEnumerable<T> GetAll();
        T FindById(int Id);
    }
}
