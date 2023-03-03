using AccountAPI.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace AccountAPI.Data
{
    public class AppDbContext : IdentityDbContext<IdentityUser>
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {
            Database.EnsureCreated();

            if(UserRoles.ToList().Count == 0)
            {
                UserRole roleUser = new() 
                { 
                    RoleName = "User"
                };

                UserRole roleAdmin = new()
                {
                    RoleName = "Admin"
                };

                UserRoles.AddRange(roleUser, roleAdmin);
                SaveChanges();
            }
        }

        public new DbSet<User> Users { get; set; } = null!;
        public new DbSet<UserRole> UserRoles { get; set; } = null!;
        public DbSet<UserPassport> UserPassports { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
}
