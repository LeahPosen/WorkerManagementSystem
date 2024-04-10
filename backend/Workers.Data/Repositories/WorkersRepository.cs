using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.WebSockets;
using System.Text;
using System.Threading.Tasks;
using Workers.Core.Entities;
using Workers.Core.Repositories;

namespace Workers.Data.Repositories
{
    public class WorkersRepository : IWorkersRepository
    {
        private readonly DataContext _dataContext;
        public WorkersRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }


        public async Task<IEnumerable<Worker>> GetAsync()
        {
            return await _dataContext.Workers.Where(w=>w.IsActive).Include(w=>w.RolesList).ToListAsync();
        }

        public async Task<Worker> GetByIdAsync(int id)
        {
            return await _dataContext.Workers.Include(w => w.RolesList).FirstOrDefaultAsync(c => c.Id == id);

        }

        public async Task<Worker> PostAsync(Worker w)
        {
            _dataContext.Workers.Add(w);
            await _dataContext.SaveChangesAsync();
            return w;
        }

        public async Task<Worker> PutAsync(Worker w)
        {
            var existWorker = await GetByIdAsync(w.Id);
            _dataContext.Entry(existWorker).CurrentValues.SetValues(w);
            await _dataContext.SaveChangesAsync();
            return existWorker;
        }

        public async Task DeleteAsync(int id)
        {
            var worker = await GetByIdAsync(id);
            worker.IsActive = false;
            await PutAsync(worker);
            await _dataContext.SaveChangesAsync();
        }
    }
}
