using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Workers.Core.DTOs;
using Workers.Core.Entities;

namespace Workers.Core.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Worker, WorkerDto>();
            CreateMap<Role, RoleDto>();
            CreateMap<TagRole, TagDto>();
        }
    }
}
