using System;

namespace MethodHiding
{
    internal class Program
    {
        static void Main(string[] args)
        {
            My_Member obj = new My_Member();

            // Access the method of derived class
            obj.member();
        }
    }
}
