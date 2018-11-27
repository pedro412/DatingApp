using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos {
    public class UserForRegisterDto {

        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength (8, MinimumLength = 4, ErrorMessage = "You moust specify password between 4 and 5 characters long")]
        public string Password { get; set; }
    }
}