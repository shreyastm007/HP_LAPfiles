using Microsoft.VisualStudio.TestTools.UnitTesting;
using ConsoleApp2;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp2.Tests
{
    [TestClass()]
    public class TestingTests
    {
        Testing testing = new Testing();
        [TestMethod()]
        public void RectangleTest() {
            Assert.AreEqual(6, testing.Rectangle(1, 2));
        }

        [TestMethod()]
        public void CircleTest() {
            Assert.AreEqual(6.28, testing.Circle(1));
        }

        [TestMethod()]
        public void TriangleTest() {
            Assert.AreEqual(0.5, testing.Triangle(1, 1));
        }
    }
}