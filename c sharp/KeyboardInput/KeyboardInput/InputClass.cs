using System;
using System.Collections.Generic;
using System.Text;

namespace KeyboardInput
{
    public class InputClass
    {
            public int i, n, sum = 0;
            public double avg;

        public void Keyboard() {

            Console.Write("Enter the 10 numbers:");
            for (i = 1; i <= 10; i++)
            {
                Console.Write("Number:{0} =", i);

                n = Convert.ToInt32(Console.ReadLine());
                sum += n;
            }

            avg = sum / 10.0;
        
            Console.Write("The sum of 10 no is : {0}\nThe Average is : {1}\n", sum, avg);
        }
    }
}
