

using System;
namespace MethodOveriding
{
    internal class Program
    {
        static void Main(string[] args)
        {
            
            Animal animal = new Animal();
            animal.eat();  
            
            //overriding
            Animal animal1 = new Dog();
            animal1.eat();  


        }
    }
}
