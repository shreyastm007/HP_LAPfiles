using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp4
{
    public class Time
    {
        public string greeting;
        public string Conditions() {

            DateTime dateTime = DateTime.Now;
           
            Console.WriteLine(dateTime.ToString());

            if (DateTime.Now.Hour < 12) {
                // Console.WriteLine("Good Morning");
                greeting = "Good Morning";
            }
            else if (DateTime.Now.Hour >12 && DateTime.Now.Hour < 4) {
                //Console.WriteLine("Good AfterNoon");
                greeting = "Good Afternoon";
            }
            else {
                //Console.WriteLine("Good Night");
                greeting = "Good evening";
            }
            Console.WriteLine(greeting);
            return greeting;
        }
    }
}

