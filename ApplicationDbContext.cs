using Microsoft.EntityFrameworkCore;
using static StudentEnrollmentSystem.Models;
using System.Security.Cryptography;

namespace StudentEnrollmentSystem
{
    public class ApplicationDbContext : DbContext
    {



        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
          : base(options)
        {
        }

       


        public DbSet<Stud> Stud { get; set; }
        public DbSet<Courses> Courses { get; set; }
        public DbSet<EnrollmentCourse> EnrollmentCourses { get; set; }





    }
















}

