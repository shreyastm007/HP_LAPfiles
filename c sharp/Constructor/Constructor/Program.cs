using System;

namespace Constructor
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Constructor2 ref5 = new Constructor2("shreyas", 7, "avi");
            Console.WriteLine(ref5.y);
            Console.WriteLine(ref5.x);
            Console.WriteLine(ref5.name);
        }
    }
}
