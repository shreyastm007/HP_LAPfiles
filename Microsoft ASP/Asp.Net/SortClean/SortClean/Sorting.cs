using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SortClean
{
    public class Sorting
    {
        public void Sort() {
            int[] integers = new int[5]; //array 
            Console.WriteLine(" Enter 5 numbers");
            for (int i = 0; i < 5; i++) {
                integers[i] = Convert.ToInt32(Console.ReadLine());  //input from user
            }
            Array.Sort(integers); //sort method:to sort elements in ascending order
            Console.WriteLine("Sorted array");
            foreach (int res in integers) {
                Console.Write(" " + res);
            }
            Console.WriteLine();
        }
    }
}
