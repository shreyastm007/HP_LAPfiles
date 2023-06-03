using System;

namespace Inheritance2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // object of derived class
            Dog dog = new Dog();   

            // access field and method of base class
            dog.name = "Rambo";
            dog.Display();

            // access method from own class
            dog.Name();

            
        }
    }
}
