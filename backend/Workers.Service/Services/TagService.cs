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
    public class TagService : ITagService
    {
        private readonly ITagRepository _tagRepository;

        public TagService(ITagRepository tagRepository)
        {
            _tagRepository = tagRepository;
        }
        public async Task<IEnumerable<TagRole>> GetAsync()
        {
            return await _tagRepository.GetAsync();
        }

        public async Task<TagRole> GetByIdAsync(int id)
        {
            return await _tagRepository.GetByIdAsync(id);
        }

        public async Task<TagRole> PostAsync(TagRole t)
        {
            return await _tagRepository.PostAsync(t);
        }

        public async Task<TagRole> PutAsync(TagRole t)
        {
            return await _tagRepository.PutAsync(t);
        }
        public async Task DeleteAsync(int id)
        {
            await _tagRepository.DeleteAsync(id);
        }
    }
}
