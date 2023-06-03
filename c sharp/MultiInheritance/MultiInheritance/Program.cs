using System;

namespace MultiInheritance
{
    internal class Program
    {
        static void Main(string[] args)
        {
            BabyDog d1 = new BabyDog();
            d1.eat();
            d1.bark();
            d1.weep();
        }
    }
}
