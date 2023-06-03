using System;

namespace Inheritance
{
    internal class Program
    {
        static void Main(string[] args)
        {
  //InheritanceClass1 inheritanceClass1 = new InheritanceClass1();
            //inheritanceClass1.Add();
            //inheritanceClass1.Divide();
            //inheritanceClass1.Sub();
            //inheritanceClass1.Multiply();
            SuperAdmin admin = new SuperAdmin();
            admin.Add();
            admin.Divide();
            admin.Admin();



        }
    }
}
