using System;
using System.Collections.Generic;
using System.Text;

namespace Constructor
{
    public class Constructor
    {
        public int id;
        public string name;

        //user defined constructor
        //constructor overloading
        public Constructor(string a)
        {
            name = a;
            Console.WriteLine(" base class ");
        }

        public Constructor(string b, int a)
        {
            this.name = b;
        }

        public Constructor()
        {

        }


    }

    //creating constructor
    public class Constructor2 : Constructor
    {

        public int x;
        public string y;

        public Constructor2(int c)
        {
            x = c;
        }
        public Constructor2(string a)
        {
            y = a;
        }

        public Constructor2(string a, int b) : this(b)
        {
            y = a;
        }

        public Constructor2(string a, int b, string x) : base(x)
        {
            this.y = a;
            this.x = b;
            Console.WriteLine("derived class");
        }
    }
}

