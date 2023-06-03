using System;
using System.Collections.Generic;
using System.Text;

namespace Cube
{
    public class CubeClass
    {
        public decimal Side;
        public decimal Volume;

        public void Cubing()
        {
            Console.Write("Enter Side: ");
            Side = Convert.ToDecimal(Console.ReadLine());
            Volume = Side * Side * Side;
            Console.WriteLine("Volume of cube is:" + Volume);
            Console.ReadKey();
        }
    }
}
