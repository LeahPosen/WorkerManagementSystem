
namespace Workers.Core.Entities
{
    public class Worker
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Id { get; set; }
        public bool IsActive { get; set; } = true;
        public DateTime StartWorking { get; set; }
        public DateTime BirthDate { get; set; }
        public Gender Gender { get; set; }
        public IEnumerable<Role> RolesList { get; set; }
    }
}
