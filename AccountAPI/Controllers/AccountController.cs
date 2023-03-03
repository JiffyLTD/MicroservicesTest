using AccountAPI.Auth;
using AccountAPI.Models;
using AccountAPI.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace AccountAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IUserRepository _userRepository;
        private readonly IAccountRepository _accountRepository;
        public AccountController(IUserRepository userRepository, IAccountRepository accountRepository)
        {
            _userRepository = userRepository;
            _accountRepository = accountRepository;
        }

        [HttpPost]
        [Route("/signin")]
        public async Task<IResult> SignIn(LoginModel model)
        {
            User? user = await _userRepository.GetUserByName(model.Username);

            if (user == null) { return Results.BadRequest("Данный пользователь не найден"); }

            var passCheck = await _accountRepository.CheckUserPassword(user, model.Password);

            if (!passCheck) { return Results.BadRequest("Неверный пароль"); }

            var encodedJwt = CreateJWT.GetToken(user.UserName); 

            var response = new
            {
                AccessToken = encodedJwt,
                user.Id,
                role = user.UserRole.RoleName
            };

            return Results.Ok(response);
        }   

        [HttpPost]
        [Route("/signup")]
        public async Task<IResult> SignUp(RegisterModel model)
        {
            User? user = await _userRepository.GetUserByName(model.Email);

            if (user != null) { return  Results.BadRequest("Пользователь уже зарегестрирован"); }

            User newUser = new()
            {
                UserName = model.Login,
                Email = model.Email,
                RoleId = 1
            };

            var result = await _accountRepository.CreateUser(newUser, model.Password);

            if(result.Succeeded)
            { 
                return Results.Ok();
            }
            else
            {
                return Results.BadRequest(result.Errors);
            }
        }
    }
}
