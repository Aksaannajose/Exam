using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace StudentEnrollmentSystem
{
    public class Models
    {

        public class Stud
        {
            [JsonIgnore]
            [Key]
            public int userid { get; set; }
            public string name { get; set; }

            public string email { get; set; }


        }

        public class Courses
        {
            [JsonIgnore]
            [Key]
            public int Courseid { get; set; } // Primary key, auto-increment
            public int title { get; set; }
            public string description { get; set; }



        }

        public class EnrollmentCourse
        {
            [JsonIgnore]
            [Key]
            public int Enrollmentid { get; set; } // Primary key, auto-increment
            public int userid { get; set; }
            public string Courseid { get; set; }
            public string enrollmentdate { get; set; }



        }







    }
}
