using System;
using System.Collections.Generic;
using System.Text;

namespace Interface
{
    public interface Drawable
    {
        void draw();
    }
    public class Rectangle : Drawable
    {
        public void draw()
        {
            Console.WriteLine("drawing rectangle...");
        }
    }
    public class Circle : Drawable
    {
        public void draw()
        {
            Console.WriteLine("drawing circle...");
        }
    }
}

