using System;
using System.Collections.Generic;
using System.Text;

namespace Pattern
{
    public class PatternClass
    {
        public int rows;
        public int i;
        public int j;
        public void RightAngle()
        {
            Console.WriteLine("Enter number of rows :");
            
            rows = Convert.ToInt32(Console.ReadLine());
            for ( i = 0; i <= rows; i++)
            {
                for ( j = 0; j <= i; j++)
                {
                    Console.Write("*");
                }
                Console.WriteLine("\n");
            }
            Console.ReadKey();
        }
    }
}
