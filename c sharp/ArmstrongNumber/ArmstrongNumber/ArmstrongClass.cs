using System;
using System.Collections.Generic;
using System.Text;

namespace ArmstrongNumber
{
    public class ArmstrongClass
    {
        public int m, r;
        public int sum = 0;
        
        public int n;

     
        public void Arm()
        {
            Console.Write("Enter the Number= ");
            n = int.Parse(Console.ReadLine());
            m = n;

            while (n > 0)
            {
                r = n % 10;
                sum=sum + (r * r* r);
                n = n / 10;
            }

            if (m == sum)
            {
                Console.WriteLine("Armstrong number");
            }
            else
            {
                Console.WriteLine(" Not an Armstrong number");
            }
        }
    }
}
