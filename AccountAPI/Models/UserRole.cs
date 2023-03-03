using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AccountAPI.Models
{
    public class UserRole
    {
        [Key]
        public int RoleId { get; set; }
        public string RoleName { get; set; } = null!;
        public List<User> User { get; set; } = null!;
    }
}
