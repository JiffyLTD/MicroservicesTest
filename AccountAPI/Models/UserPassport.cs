using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AccountAPI.Models
{
    public class UserPassport
    {
        [Key]
        public int PassportId { get; set; }
        public string? NumAndSeries { get; set; }
        public DateTime? DateOfIssue { get; set; }
        public string? IssuedByWhom { get; set; }
        [ForeignKey("User")]
        public string UserId { get; set; } = null!;
        public User User { get; set; } = null!;
    }
}
