using Workers.Core.Entities;

namespace Workers.API.Models
{
    public class RolePostModel
    {

        // public TagRole Name { get; set; }
        public int TagRoleId { get; set; }
        public bool IsAdministrative { get; set; }
        public DateTime StartRole { get; set; }

    }
}
