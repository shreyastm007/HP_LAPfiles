using System;

namespace ConsoleAppCoupling
{
    class Program
    {
        static void Main(string[] args) {
            {
                String input = null;
                Console.WriteLine("Enter the Car Brand");
                input = Console.ReadLine();
                ICar Type = CarFactory.getCar(input);
                
            }

        }
    }
    }

