using System.ComponentModel.DataAnnotations;

namespace AccountAPI.Models
{
    public class RegisterModel
    {
        [EmailAddress]
        [Required(ErrorMessage = "Необходим Email")]
        public string? Email { get; set; }

        [Required(ErrorMessage = "Необходим пароль")]
        public string? Password { get; set; }

        [Required(ErrorMessage = "Обязательно для заполнения")]
        public string? Name { get; set; }
        [Required(ErrorMessage = "Обязательно для заполнения")]
        public string? Surname { get; set; }
        public string? Patronymic { get; set; }
        [Required(ErrorMessage = "Необходим номер телефона")]
        public string? PhoneNumber { get; set; }
    }
}
