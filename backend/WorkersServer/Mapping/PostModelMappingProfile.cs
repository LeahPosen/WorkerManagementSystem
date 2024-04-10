using AutoMapper;
using Workers.API.Models;
using Workers.Core.Entities;

namespace Workers.API.Mapping
{
    public class PostModelMappingProfile : Profile
    {
        public PostModelMappingProfile()
        {
            CreateMap<WorkerPostModel, Worker>();   
            CreateMap<RolePostModel, Role>();   
            CreateMap<TagPostModel, TagRole>();   
        }
    }
}
