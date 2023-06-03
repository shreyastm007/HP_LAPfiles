using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppCoupling
{
    public interface ICar
    {

        public void Start() {
        }

        public void Drive() {
        }
        public void Stop() {

        }
    }
    public class BMW : ICar
    {
        public void Start() {
            Console.WriteLine("started the BMW car");

        }
        public void Drive() {
            Console.WriteLine("driving the BMW car");
        }
        public void Stop() {

            Console.WriteLine("stop the BMW car");
        }

    }
    public class RR : ICar
    {
        public void Start() {
            Console.WriteLine("started the RR car");

        }
        public void Drive() {
            Console.WriteLine("driving the RR car");
        }
        public void Stop() {

            Console.WriteLine("stop the RR car");
        }
    }

    public class Ambassdor : ICar
    {
        public void Start() {
            Console.WriteLine("started the Ambassdor car");

        }
        public void Drive() {
            Console.WriteLine("driving the Ambassdor car");
        }
        public void Stop() {

            Console.WriteLine("stopped the Ambassdor car");
        }

    }

    public class CarFactory
    {
        public static ICar getCar(String Type) {
            ICar ObjectType = null;
            if (Type.ToLower().Equals("bmw")) {
                ObjectType = new BMW();
                ObjectType.Drive();
                ObjectType.Start();
                ObjectType.Stop();
            }
            else if (Type.ToLower().Equals("rr")) {
                ObjectType = new RR();
                ObjectType.Drive();
                ObjectType.Start();
                ObjectType.Stop();
            }
            else if (Type.ToLower().Equals("Ambassdor")) {
                ObjectType = new Ambassdor();
                ObjectType.Drive();
                ObjectType.Start();
                ObjectType.Stop();
            }
            return ObjectType;

        }
    }
}
