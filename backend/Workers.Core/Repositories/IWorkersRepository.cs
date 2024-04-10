using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Workers.Core.Entities;

namespace Workers.Core.Repositories
{
    public interface IWorkersRepository
    {

        Task<IEnumerable<Worker>> GetAsync();
        Task<Worker> GetByIdAsync(int id);
        Task<Worker> PostAsync(Worker w);
        Task<Worker> PutAsync(Worker w);
        Task DeleteAsync(int id);

    }
}
