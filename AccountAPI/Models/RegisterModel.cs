using System.ComponentModel.DataAnnotations;

namespace AccountAPI.Models
{
    public class RegisterModel
    {
        [EmailAddress]
        [Required(ErrorMessage = "Необходим Email")]
        public string Email { get; set; } = null!;
        [Required(ErrorMessage = "Необходим логин")]
        public string Login { get; set; } = null!;

        [Required(ErrorMessage = "Необходим пароль")]
        public string Password { get; set; } = null!;
    }
}
