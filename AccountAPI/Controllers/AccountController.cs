using AccountAPI.Auth;
using AccountAPI.Data;
using AccountAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace AccountAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<User> _userManager;

        public AccountController(UserManager<User> userManager)
        {
            _userManager = userManager;
        }

        [HttpPost]
        [Route("/signin")]
        public async Task<IResult> SignIn(LoginModel model)
        {
            User? user = await _userManager.FindByNameAsync(model.Username);

            if (user == null) { return Results.Unauthorized(); }

            var passCheck = await _userManager.CheckPasswordAsync(user, model.Password);

            if (!passCheck) { return Results.Unauthorized(); }

            // создаем JWT-токен
            var encodedJwt = CreateJWT.GetToken(user.UserName);
            // формируем ответ
            var response = new
            {
                AccessToken = encodedJwt,
                user.Role,
                user.Id
            };

            return Results.Json(response,null , "application/json" , StatusCodes.Status200OK);
        }

        [HttpPost]
        [Route("/signup")]
        public async Task<IResult> SignUp(RegisterModel model)
        {
            User? user = await _userManager.FindByNameAsync(model.Email);

            if (user != null) { return Results.Text("Пользователь уже зарегестрирован"); }

            User newUser = new()
            {
                UserName = model.Email,
                Email = model.Email,
                Role = "User",
                PhoneNumber = model.PhoneNumber,
                Name = model.Name,
                Surname = model.Surname,
                Patronymic = model.Patronymic
            };

            var result = await _userManager.CreateAsync(newUser, model.Password);

            if(result.Succeeded)
            { 
                return Results.Ok();
            }
            else
            {
                return Results.Problem(result.Errors.ToString());
            }
        }
    }
}
