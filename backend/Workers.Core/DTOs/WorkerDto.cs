using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Workers.Core.Entities;

namespace Workers.Core.DTOs
{
    public class WorkerDto
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime StartWorking { get; set; }
        public DateTime BirthDate { get; set; }
        public Gender Gender { get; set; }
        public IEnumerable<RoleDto> RolesList { get; set; }
    }
}
