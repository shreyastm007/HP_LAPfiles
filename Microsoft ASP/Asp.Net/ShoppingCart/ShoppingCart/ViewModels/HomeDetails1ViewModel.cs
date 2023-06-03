using ShoppingCart.modal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShoppingCart.ViewModels
{
    public class HomeDetails1ViewModel
    {

        public IEnumerable <Cart> cart { get; set; }
        
        public string Title { get; set; }
    }
}
