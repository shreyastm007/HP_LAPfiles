using System;
using System.Collections.Generic;
using System.Text;

namespace Hierarchial
{
    
        public class Parent
        {
            public void DisplayParentsAB()
            {
                Console.WriteLine("A and B are my parents");
            }
        }

        public class ChildC : Parent
        {
            public void DisplayChildC()
            {
                Console.WriteLine("I am the child C");
            }
        }

        public class ChildD : Parent
        {
            public void DisplayChildD()
            {
                Console.WriteLine("I am the child D");
            }
        }

       
                
            }
        
    


