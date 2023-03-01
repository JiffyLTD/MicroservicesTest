using AccountAPI.Models;
using Microsoft.AspNetCore.Identity;

namespace AccountAPI.Repositories.Interfaces
{
    public interface IAccountRepository
    {
        public Task<IdentityResult> CreateUser(User user, string userPassword);
        public Task<bool> CheckUserPassword(User user, string userPassword);
    }
}
