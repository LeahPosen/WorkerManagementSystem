using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Workers.Core.Entities;

namespace Workers.Data
{
    public class DataContext :DbContext
    {
        public DbSet<Worker> Workers { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<TagRole> Tags { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=(localdb)\MSSQLLocalDB;Database=workers123_db");
        }
         
        
        //?????????????????
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Role>().HasKey(r => new { r.Id });
        }
    }
}
