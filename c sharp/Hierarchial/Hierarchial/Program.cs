using System;

namespace Hierarchial
{
    internal class Program
    {
        static void Main(string[] args)
        {
            ChildC cc = new ChildC();
            ChildD cd = new ChildD();

            cc.DisplayChildC();
            cc.DisplayParentsAB();  // accessing parent class

            cd.DisplayChildD();
            cd.DisplayParentsAB();   // accessing parent class
        }
    }
}
