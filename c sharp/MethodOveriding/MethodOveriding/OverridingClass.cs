//C# Method Overriding

//If derived class defines same method as defined in its base class, it is known as method overriding in C#. 
// It is used to achieve runtime polymorphism. It enables you to provide specific implementation of the method which is 
// already provided by its base class.

//To perform method overriding in C#, you need to use virtual keyword with base class method and override 
//keyword with derived class method.





using System;
using System.Collections.Generic;
using System.Text;

namespace MethodOveriding
{
   
       public class Animal
        {
            public virtual void eat()
            {

                Console.WriteLine("food");
            }
        }

        // derived class of Animal 
        public class Dog : Animal
        {

            // overriding method from Animal
            public override void eat()
            {

                Console.WriteLine(" Bone ");
            }
        }
    }

