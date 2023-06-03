using Microsoft.VisualStudio.TestTools.UnitTesting;
using ConsoleApp4;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp4.Tests
{
    [TestClass()]
    public class TimeTests
    {
        Time time = new Time();
        [TestMethod()]
        public void ConditionsTest() {
         
            Assert.AreEqual("Good morning", time.Conditions());
           
        }
    }
}