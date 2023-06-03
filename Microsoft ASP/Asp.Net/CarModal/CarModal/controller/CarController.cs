using CarModal.modal;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CarModal.controller
{
    public class CarController : Controller
    {
        public ICar _cars;
        public CarController(ICar cars) {
            _cars = cars;
        }
        public string Razor() {

           return _cars.GetCar(2).name;
            

            
        }
        public IActionResult car() { //view 
            return View();

        }
    }
}
