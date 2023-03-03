using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations.Schema;

namespace AccountAPI.Models
{
    public class User : IdentityUser
    {
        public string? Name { get; set; }
        public string? Surname { get; set; }
        public string? Patronymic { get; set; }
        [ForeignKey("UserRole")]
        public int RoleId { get; set; }
        public UserRole UserRole { get; set; } = null!;
    }
}
