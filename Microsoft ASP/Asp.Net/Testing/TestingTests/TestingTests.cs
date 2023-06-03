using Microsoft.VisualStudio.TestTools.UnitTesting;
using Testing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Testing.Tests
{
    [TestClass()]
    public class TestingTests
    {
        Testing testing = new Testing();
        [TestMethod()]
        public void AreaSquareTest()
        {
            Assert.AreEqual(9,testing.AreaSquare(3));
        }

        [TestMethod()]
        public void AreaRectangleTest()
        {
            Assert.AreEqual(20,testing.AreaRectangle(4,5));
        }
    }
}