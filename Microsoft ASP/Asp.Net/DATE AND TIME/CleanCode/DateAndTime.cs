using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CleanCode
{
    internal class DateAndTime
    {
        //creation of date,time object

        DateTime dt = new DateTime();
        DateTime dt1 = new DateTime(2000,02,05); // year,month,date
       DateTime dt2 = new DateTime(2000, 02, 05, 12,20,01); //hour,min,sec
       DateTime current = DateTime.Now; // present date and time
        DateTime current1 = DateTime.UtcNow; //time diference 
        DateTime dt4 = new DateTime(2001, 03, 04, 12, 20, 01);
        DateTime dt5 = new DateTime(2005, 08, 05, 14, 22, 02);

        DateTime dt3 = new DateTime(2000, 02, 05, 04, 20, 00, DateTimeKind.Utc);
        DateTime dt6 = new DateTime(2001, 03, 06, 05, 25, 01, DateTimeKind.Unspecified);
        DateTime dt7 = new DateTime(2002, 04, 07, 06, 30, 02, DateTimeKind.Local);

        public void Inspect() {
            Console.WriteLine(this.dt);
           Console.WriteLine(this.dt1);
           Console.WriteLine(this.dt2);
           //Console.WriteLine(DateTime.MinValue.Ticks);
          // Console.WriteLine(DateTime.MaxValue.Ticks);
            Console.WriteLine(this.current);
            Console.WriteLine(this.current1);
            Console.WriteLine(this.dt5-this.dt4);

            Console.WriteLine(this.dt3);
            Console.WriteLine(this.dt6);
            Console.WriteLine(this.dt7);
         
        }
    }
}
