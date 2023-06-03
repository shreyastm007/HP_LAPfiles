using System.Collections.Generic;

namespace ShoppingCart.modal
{
    public interface ICartRepository
    {
       public Cart GetCart(int id);
       public IEnumerable<Cart> GetAllCart();
    }
}