using System.ComponentModel.DataAnnotations;

namespace AccountAPI.Models
{
    public class LoginModel
    {
        [Required(ErrorMessage = "Необходимо имя пользователя")]
        public string Username { get; set; } = null!;

        [Required(ErrorMessage = "Необходим пароль")]
        public string Password { get; set; } = null!;
    }
}
