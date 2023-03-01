using AccountAPI.Data;
using AccountAPI.Models;
using AccountAPI.Repositories.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace AccountAPI.Repositories
{
    public class AccountRepository : IAccountRepository
    {
        private readonly UserManager<User> _userManager;

        public AccountRepository(UserManager<User> userManager)
        {
            _userManager = userManager;
        }

        public async Task<bool> CheckUserPassword(User user, string userPassword)
        {
            return await _userManager.CheckPasswordAsync(user, userPassword);
        }

        public async Task<IdentityResult> CreateUser(User user, string userPassword)
        {
            return await _userManager.CreateAsync(user, userPassword);
        }
    }
}
