using System;
using System.Collections.Generic;
using System.Text;

namespace Inheritance2
{
        public class Animal
        {

            public string name;

            public void Display()
            {
                Console.WriteLine("I am an animal");
            }

        }

        // derived class of Animal 
        public class Dog : Animal
        {

            public void Name()
            {
                Console.WriteLine("My name is " + name);
            }
        }
    }

