using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Workers.Core.Entities
{
    public class TagRole
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public IEnumerable<Worker> Workers { get; set; }
    }
}
