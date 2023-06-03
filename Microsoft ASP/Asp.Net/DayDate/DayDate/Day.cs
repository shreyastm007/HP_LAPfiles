using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DayDate
{
    public class Day
    {
        public void Date() {
            DateTime dt = new DateTime(2022, 11, 09);
            Console.WriteLine("The day for the mentioned date {0:d} is {1}.", dt, dt.DayOfWeek);
        }
    }
}