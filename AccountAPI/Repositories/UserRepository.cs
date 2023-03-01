using AccountAPI.Data;
using AccountAPI.Models;
using AccountAPI.Repositories.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace AccountAPI.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly AppDbContext _db;
        private readonly UserManager<User> _userManager;

        public UserRepository(AppDbContext db, UserManager<User> userManager)
        {
            _db = db;
            _userManager = userManager;
        }

        public async Task<IdentityResult> DeleteUser(User user)
        {
            if(user != null) { return await _userManager.DeleteAsync(user); }

            return IdentityResult.Failed();
        }

        public async Task<User> GetUserById(string id)
        {
            return await _userManager.FindByIdAsync(id);
        }

        public async Task<User> GetUserByName(string username)
        {
            return await _userManager.FindByNameAsync(username);
        }

        public async Task<List<User>> GetUsers()
        {
            return await _db.Users.ToListAsync();
        }

        public async void SaveChanges()
        {
            await _db.SaveChangesAsync();
        }

        public async Task<IdentityResult> UpdateUser(User user)
        {
            if (user != null) { return await _userManager.UpdateAsync(user); }

            return IdentityResult.Failed();
        }
    }
}
