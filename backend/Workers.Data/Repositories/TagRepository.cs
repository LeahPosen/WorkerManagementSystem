using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Workers.Core.Repositories;
using Workers.Core.Entities;
using Workers.Core.Repositories;
using Workers.Data;

namespace Workers.Data.Repositories
{
    public class TagRepository : ITagRepository
    {
        private readonly DataContext _dataContext;
        public TagRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }


        public async Task<IEnumerable<TagRole>> GetAsync()
        {
            return await _dataContext.Tags.ToListAsync();
        }

        public async Task<TagRole> GetByIdAsync(int id)
        {
            return await _dataContext.Tags.FirstOrDefaultAsync(t => t.Id == id);

        }

        public async Task<TagRole> PostAsync(TagRole t)
        {
            _dataContext.Tags.Add(t);
            await _dataContext.SaveChangesAsync();
            return t;
        }

        public async Task<TagRole> PutAsync(TagRole t)
        {
            var existTag = await GetByIdAsync(t.Id);
            _dataContext.Entry(existTag).CurrentValues.SetValues(t);
            await _dataContext.SaveChangesAsync();
            return existTag;
        }

        public async Task DeleteAsync(int id)
        {
            var tag = await GetByIdAsync(id);
            _dataContext.Tags.Remove(tag);
            await _dataContext.SaveChangesAsync();
        }
    }
}

