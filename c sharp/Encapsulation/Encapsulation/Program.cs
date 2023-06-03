using System;

namespace Encapsulation
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Employee employee = new Employee();
            employee.Id = "10";
            employee.Name = "Vishal Gupta";
            employee.City = "Delhi";

            Console.WriteLine("Employee Id: " + employee.Id);
            Console.WriteLine("Employee Name: " + employee.Name);
            Console.WriteLine("Employee City: " + employee.City);
        }
    }
}
