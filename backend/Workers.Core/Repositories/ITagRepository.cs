using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Workers.Core.Entities;

namespace Workers.Core.Repositories
{
    public interface ITagRepository
    {
        Task<IEnumerable<TagRole>> GetAsync();
        Task<TagRole> GetByIdAsync(int id);
        Task<TagRole> PostAsync(TagRole t);
        Task<TagRole> PutAsync(TagRole t);
        Task DeleteAsync(int id);
    }
}
