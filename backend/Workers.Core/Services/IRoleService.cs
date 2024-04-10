using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Workers.Core.Entities;

namespace Workers.Core.Services
{
    public interface IRoleService
    {
        Task<IEnumerable<Role>> GetAsync();
        Task<Role> GetByIdAsync(int id);
        Task<Role> PostAsync(Role r);
        Task<Role> PutAsync(Role r);
        Task DeleteAsync(int id);
    }
}
