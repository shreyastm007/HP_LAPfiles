using System;
using System.Collections.Generic;
using System.Security.Cryptography.X509Certificates;
using System.Text;

namespace Inheritance
{
    public class InheritanceClass
    {
        public int c;
        public int d;
        public void Add()
        {
            c = 30;
            Console.WriteLine("ok");
            Console.WriteLine("c is {0}", c);
        }
        public void Sub()
        {
            d = 40;
            Console.WriteLine("done");
            Console.WriteLine("d is {0}", d);
        }
    }

    public class InheritanceClass1: InheritanceClass
    {
        public void Multiply()
        {
            Console.WriteLine("Bye");
        }
        public void Divide()
        {
            Console.WriteLine("Send");
        }
    }

    public class SuperAdmin: InheritanceClass1
    {
        public void Admin()
        {
            Console.WriteLine("Its over");    
        }
    }
}
