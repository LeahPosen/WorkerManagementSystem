using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Workers.API.Models;
using Workers.Core.DTOs;
using Workers.Core.Entities;
using Workers.Core.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WorkersServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorkersController : ControllerBase
    {


        private readonly IWorkersService _workersService;
        private readonly IMapper _mapper;
        public WorkersController(IWorkersService workersService, IMapper mapper)
        {
            _workersService = workersService;
            _mapper = mapper;
        }
        // GET: api/<WorkersController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Worker>>> Get()
        {
            return  Ok(_mapper.Map<IEnumerable<WorkerDto>>(await _workersService.GetAsync()));
        }

        // GET api/<WorkersController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Worker>> Get(int id)
        {
            var worker = _mapper.Map<WorkerDto>(await _workersService.GetByIdAsync(id));
            if (worker is null)
            {
                return NotFound();
            }
            return Ok(worker);
        }

        // POST api/<WorkersController>
        [HttpPost]
        public async Task<ActionResult<Worker>> Post([FromBody] WorkerPostModel value)
        {
           var newWorker = await _workersService.PostAsync(_mapper.Map<Worker>(value));
           return Ok( _mapper.Map<WorkerDto>(newWorker));
        }

        // PUT api/<WorkersController>/5
        [HttpPut("{id}")]
        public async Task<ActionResult<Worker>> Put(int id, [FromBody] WorkerPostModel value)
        {
            var worker = await _workersService.GetByIdAsync(id);
           // var roles = await 
            if (worker is null)
            {
                return NotFound();
            }
            _mapper.Map(value, worker);
            return Ok(_mapper.Map<WorkerDto>(await _workersService.PutAsync(_mapper.Map<Worker>(worker))));
        }

        // DELETE api/<WorkersController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var worker = await _workersService.GetByIdAsync(id);
            if (worker is null)
            {
                return NotFound();
            }
            await _workersService.DeleteAsync(id);
            return NoContent();
        }
    }
}
