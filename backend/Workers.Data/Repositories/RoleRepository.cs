using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Workers.Core.Entities;
using Workers.Core.Repositories;

namespace Workers.Data.Repositories
{
    public class RoleRepository : IRoleRepository
    {
        private readonly DataContext _dataContext;
        public RoleRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public async Task<IEnumerable<Role>> GetAsync()
        {
            return await _dataContext.Roles.ToListAsync();
        }

        public async Task<Role> GetByIdAsync(int id)
        {
            return await _dataContext.Roles.FirstOrDefaultAsync(r => r.Id == id);
        }

        public async Task<Role> PostAsync(Role r)
        {
            _dataContext.Roles.Add(r);
            await _dataContext.SaveChangesAsync();
            return r;
        }

        public async Task<Role> PutAsync(Role r)
        {
            var existRole = await GetByIdAsync(r.Id);
            _dataContext.Entry(existRole).CurrentValues.SetValues(r);
            await _dataContext.SaveChangesAsync();
            return existRole;
        }
        public async Task DeleteAsync(int id)
        {
            var existRole = await GetByIdAsync(id);
            _dataContext.Roles.Remove(existRole);
            await _dataContext.SaveChangesAsync();
        }

    }
}
