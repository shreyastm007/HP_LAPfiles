using System;
using System.Collections.Generic;
using System.Text;

namespace Sum
{
    public class SumClass
    {
        public int i;
        public int n = 10;
        public int add = 0;
        
       
        public void Addition()
        {
           
            

            for(int i = 1; i <= n; i++)
            {
                add= add + i;
            }
            Console.WriteLine(add); 
        }
    }
}
