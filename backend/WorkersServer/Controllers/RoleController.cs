using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Workers.API.Models;
using Workers.Core.DTOs;
using Workers.Core.Entities;
using Workers.Core.Services;
using Workers.Service.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Workers.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoleController : ControllerBase
    {

        private readonly IRoleService _roleService;
        private readonly IMapper _mapper;

        public RoleController(IRoleService roleService, IMapper mapper)
        {
            _roleService = roleService;
            _mapper = mapper;
        }
        // GET: api/<RoleController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Role>>> Get()
        {
            return Ok(_mapper.Map<IEnumerable<RoleDto>>(await _roleService.GetAsync()));
        }

        // GET api/<RoleController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Role>> Get(int id)
        {
            var role = _mapper.Map<RoleDto>(await _roleService.GetByIdAsync(id));
            if(role is null)
                return NotFound();
            return Ok(role);
        }

        // POST api/<RoleController>
        [HttpPost]
        public async Task<ActionResult<Role>> Post([FromBody] RolePostModel value)
        {
            var role = await _roleService.PostAsync(_mapper.Map<Role>(value));
            return Ok(_mapper.Map<RoleDto>(role));
        }

        // PUT api/<RoleController>/5
        [HttpPut("{id}")]
        public async Task<ActionResult<Role>> Put(int id, [FromBody] RolePostModel value)
        {
            var role = await _roleService.GetByIdAsync(id);
            if (role is null)
            {
                return NotFound();
            }
            _mapper.Map(role, value);
            return Ok(_mapper.Map<RoleDto>(await _roleService.PutAsync(_mapper.Map<Role>(role))));
        }

        // DELETE api/<RoleController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var role = await _roleService.GetByIdAsync(id);
            if (role is null)
            {
                return NotFound();
            }
            await _roleService.DeleteAsync(id);
            return NoContent();
        }
    }
}
