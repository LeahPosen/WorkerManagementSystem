namespace Workers.Core.Entities
{
    public class Role
    {
        public int Id { get; set; }

       // public TagRole Name { get; set; }
        public int TagRoleId { get; set; }
        public bool IsAdministrative { get; set; }
        public DateTime StartRole { get; set; }
      //  public int WorkerId { get; set; }

    }
}
