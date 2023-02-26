using Microsoft.AspNetCore.Identity;

namespace AccountAPI.Models
{
    public class User : IdentityUser
    {
        public string? Name { get; set; }
        public string? Surname { get; set; }
        public string? Patronymic { get; set; }
        public string? Role { get; set; }
    }
}
