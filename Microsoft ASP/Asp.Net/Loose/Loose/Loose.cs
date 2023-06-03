using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace loosecoupling
{
    public class Shopping
    {

        public float price = 5;
        public int quantity = 4;
        public float Discount;

        public float GetTotal() {
            return price * quantity - Discount;
        }
    }
    public class ShoppingCart
    {
        public Shopping[] items;
        public float GetCartTotal() {
            float CartTotal = 0;
            foreach (Shopping item in items) {
                CartTotal += item.GetTotal();
            }
            return CartTotal;
        }
    }

    public class Order
    {
        private ShoppingCart cart;
        private float salesTax;
        public Order(ShoppingCart cart, float salesTax) {
            this.cart = cart;
            this.salesTax = salesTax;
        }
        public float OrderTotal1() {
            return cart.GetCartTotal() *(2.0f + salesTax);
        }
    }
}