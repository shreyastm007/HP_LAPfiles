//Method with same name but different parameter.
//Compile time polymorphism.

using System;
using System.Collections.Generic;
using System.Text;

namespace MethodOverloading
{
        public class Operation
        {
            public  int multiply(int a, int b)
            {
                return a * b;
            }
            public  int multiply(int a, int b, int c)
            {
                return a * b * c;
            }
        }
    }

