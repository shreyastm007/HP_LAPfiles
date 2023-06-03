using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmptyPractise1.Modal
{
    public class MockStudentData:IStudent
    {
            public List<Student> _student = new List<Student>();
            public MockStudentData() {
                _student.Add(new Student() { id = 1, Name = "shreyas", Branch="CSE", CollegeName="SSIT" ,Age = 22, Address="Hassan", CGPA=9.1 });
            _student.Add(new Student() { id = 2, Name = "avi", Branch="ISE", CollegeName="SIT", Age = 21, Address="Tumkur", CGPA=9.5 });
            }


            Student IStudent.GetStudent(int id) {
                return _student.FirstOrDefault(e => e.id == id); 
             
            }



        }
    }

