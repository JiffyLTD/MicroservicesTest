using AccountAPI.Models;
using Microsoft.AspNetCore.Identity;

namespace AccountAPI.Repositories.Interfaces
{
    public interface IUserRepository
    {
        public Task<User> GetUserByName(string username);
        public Task<User> GetUserById(string id);
        public Task<List<User>> GetUsers();
        public Task<IdentityResult> UpdateUser(User user);
        public Task<IdentityResult> DeleteUser(User user);
        public void SaveChanges();
    }
}
