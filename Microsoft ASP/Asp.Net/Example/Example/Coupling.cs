using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Example
{
    public class Owner
    {
     public void start() {
            Console.WriteLine("car started");
        }
        public void drive() {
            Console.WriteLine("drive");
        }
        public void end() {
            Console.WriteLine("driving ended");
        }

    }

    public class Bmw
    {
        Owner owner = new Owner();
        public void StartBmw() {
            owner.start();
        }

    }
    public class Audi
    {
        Owner owner = new Owner();
        public void DriveAudi() {
            owner.drive();
        }
    }
        public class Skoda {
            Owner owner = new Owner();
            public void StopSkoda() {
                owner.end();
            }
        }
    }

