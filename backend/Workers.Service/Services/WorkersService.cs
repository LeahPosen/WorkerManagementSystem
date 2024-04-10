using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Workers.Core.Entities;
using Workers.Core.Repositories;
using Workers.Core.Services;

namespace Workers.Service.Services
{
    public class WorkersService : IWorkersService
    {
        private readonly IWorkersRepository _workersRepository;

        public WorkersService(IWorkersRepository workersRepository)
        {
            _workersRepository = workersRepository;
        }
        public async Task<IEnumerable<Worker>> GetAsync()
        {
            return await _workersRepository.GetAsync();
        }

        public async Task<Worker> GetByIdAsync(int id)
        {
            return await _workersRepository.GetByIdAsync(id);
        }

        public async Task<Worker> PostAsync(Worker w)
        {
            return await _workersRepository.PostAsync(w);
        }

        public async Task<Worker> PutAsync(Worker w)
        {
            return await _workersRepository.PutAsync(w);
        }
        public async Task DeleteAsync(int id)
        {
            await _workersRepository.DeleteAsync(id);
        }

    }
}
