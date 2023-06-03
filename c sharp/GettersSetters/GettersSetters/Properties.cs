using System;
using System.Collections.Generic;
using System.Text;

namespace GettersSetters
{
    internal class Properties
    {
        private int id;
        private string name;
        private int fees;

        public void getId()
        {
            id = 1;
        }

        public int setFees( int fees)
        {
            if( fees < 0  || fees >100000 )
            {
                throw new ArgumentException("enter proper value");
            }
            else
            {
                this.fees = fees;   
                return fees;    
            }
        }

        public int getFees()
        {
            int a = (fees > 0) ? "fees accepted" : "not accepted";
            return a;   
        }

    }



}
