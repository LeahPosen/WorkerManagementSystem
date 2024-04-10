using Workers.Core.Entities;

namespace Workers.API.Models
{
    public class WorkerPostModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime StartWorking { get; set; }
        public DateTime BirthDate { get; set; }
        public Gender Gender { get; set; }
        public IEnumerable<RolePostModel> RolesList { get; set; }
    }
}
