using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Workers.Core.Entities;

namespace Workers.Core.DTOs
{
    public class RoleDto
    {
        public int Id { get; set; }

        // public TagRole Name { get; set; }
        public int TagRoleId { get; set; }
        public bool IsAdministrative { get; set; }
        public DateTime StartRole { get; set; }
      //  public int WorkerId { get; set; }

    }
}
