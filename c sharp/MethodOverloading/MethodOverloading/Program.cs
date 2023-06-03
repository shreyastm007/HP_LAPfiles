using System;

namespace MethodOverloading
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Operation operation = new Operation();
            Console.WriteLine(operation.multiply(5, 3));
            Console.WriteLine(operation.multiply(5, 3,2));
        }
    }
}
