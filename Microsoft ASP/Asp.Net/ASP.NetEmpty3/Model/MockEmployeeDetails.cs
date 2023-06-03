using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ASP.NetEmpty3.Model
{
    public class MockEmployeeDetails:IEmployeeRepository
    {
        private List<Employee> _employees=new List<Employee>();

        public MockEmployeeDetails() {
            _employees.Add(new Employee() { id = 1, name = "shreyas", age = 22 });
            _employees.Add(new Employee() { id = 2, name = "himagirish", age = 21 });
            _employees.Add(new Employee() { id = 3, name = "avi", age = 20 });
            _employees.Add(new Employee() { id = 4, name = "prajwal", age = 23 });
            _employees.Add(new Employee() { id = 5, name = "namana", age = 24 });
            _employees.Add(new Employee() { id = 6, name = "akshata", age = 22 });
        }

        public IEnumerable<Employee> GetAllEmployee() {
            return _employees;
        }



        Employee IEmployeeRepository.GetEmployee(int id) {
            return _employees.FirstOrDefault(e => e.id == id);

        }
    }
}
