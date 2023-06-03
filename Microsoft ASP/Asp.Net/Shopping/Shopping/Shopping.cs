using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shopping
{
    public class Shopping
    {
        public float price = 10;
        public int quantity = 3;

    }
    public class ShoppingCart
    {
        public Shopping[] items;
    }

    public class Order
    {
        private ShoppingCart cart;
        private float salesTax;

        public Order(ShoppingCart cart, float salesTax) {
            this.cart = cart;
            this.salesTax = salesTax;
        }

        public float OrderTotal() {
            float cartTotal = 0;

            for(int i=0;i < cart.items.Length; i++) {
                cartTotal += cart.items[i].price * cart.items[i].quantity;
            }
            cartTotal = +cartTotal * salesTax;
            return cartTotal;
        }


    }
}
