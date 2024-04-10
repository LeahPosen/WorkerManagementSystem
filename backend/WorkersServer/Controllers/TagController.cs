using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Workers.API.Models;
using Workers.Core.DTOs;
using Workers.Core.Entities;
using Workers.Core.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Workers.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TagController : ControllerBase
    {
        private readonly ITagService _tagService;
        private readonly IMapper _mapper;

        public TagController(ITagService tagService, IMapper mapper)
        {
            _tagService = tagService;
            _mapper = mapper;
        }
        // GET: api/<TagController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TagRole>>> Get()
        {
           return Ok(_mapper.Map<IEnumerable<TagDto>>(await _tagService.GetAsync()));
        }

        // GET api/<TagController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TagRole>> Get(int id)
        {
            var tag = _mapper.Map<TagDto>(await _tagService.GetByIdAsync(id));
            if(tag is null)
                return NotFound();
            return Ok(tag);
        }

        // POST api/<TagController>
        [HttpPost]
        [Authorize]

        public async Task<ActionResult<TagRole>> Post([FromBody] TagPostModel value)
        {
            var newTag = await _tagService.PostAsync(_mapper.Map<TagRole>(value));
            return Ok(_mapper.Map<TagDto>(newTag));
        }

        // PUT api/<TagController>/5
        [HttpPut("{id}")]
        public async Task<ActionResult<TagRole>> Put(int id, [FromBody] TagPostModel value)
        {
            var tag = await _tagService.GetByIdAsync(id);
            if(tag is null)
            {
                return NotFound();
            }
            _mapper.Map(value, tag);
            return Ok(_mapper.Map<TagDto>(await _tagService.PutAsync(_mapper.Map<TagRole>(tag))));
        }

        // DELETE api/<TagController>/5
        [HttpDelete("{id}")]
        [Authorize]

        public async Task<ActionResult> Delete(int id)
        {
            var tag = await _tagService.GetByIdAsync(id);
            if (tag is null)
            {
                return NotFound();
            }
            await _tagService.DeleteAsync(id);
            return NoContent();
        }
    }
}
