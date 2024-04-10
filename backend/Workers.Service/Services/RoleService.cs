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
    public class RoleService : IRoleService
    {

        private readonly IRoleRepository _roleRepository;

        public RoleService(IRoleRepository roleRepository)
        {
            _roleRepository = roleRepository;
        }
        public async Task<IEnumerable<Role>> GetAsync()
        {
            return await _roleRepository.GetAsync();
        }

        public async Task<Role> GetByIdAsync(int id)
        {
            return await _roleRepository.GetByIdAsync(id);
        }

        public async Task<Role> PostAsync(Role r)
        {
            return await _roleRepository.PostAsync(r);
        }

        public async Task<Role> PutAsync(Role r)
        {
            return await _roleRepository.PutAsync(r);
        }
        public async Task DeleteAsync(int id)
        {
            await _roleRepository.DeleteAsync(id);
        }
    }
}
