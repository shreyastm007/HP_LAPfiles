﻿using System;
using System.Collections.Generic;
using System.Text;

namespace MultiInheritance
{
 
        public class Animal
        {
            public void eat() { 
            Console.WriteLine("Eating..."); 
        }
        }
        public class Dog : Animal
        {
            public void bark() {
            Console.WriteLine("Barking..."); 
        }
        }
        public class BabyDog : Dog
        {
            public void weep() {
            Console.WriteLine("Weeping..."); 
        }
        }
    }

