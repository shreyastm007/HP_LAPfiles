using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CarModal.modal
{
    public class MockData:ICar
    {
        
        private List<Car> _car = new List<Car>();
        private Car carlist;

        public MockData() {
            _car.Add(new Car() { id = 1, name = "BMW", color = "black" });
            _car.Add(new Car() { id = 2, name = "AUDI", color = "blue" });
        }
         Car ICar.GetCar(int id) {
            return _car.FirstOrDefault(e => e.id == id);
           // foreach (var carlist in _car);
            //return carlist;
              
        }
    }
}
