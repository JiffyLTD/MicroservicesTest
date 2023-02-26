using System.ComponentModel.DataAnnotations;

namespace AccountAPI.Models
{
    public class LoginModel
    {
        [Required(ErrorMessage = "Необходимо имя пользователя")]
        public string? Username { get; set; }

        [Required(ErrorMessage = "Необходим пароль")]
        public string? Password { get; set; }
    }
}
