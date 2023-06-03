using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmptyPractise2.Controller
{
    public class HomeController : Controller
    {
        public IActionResult Index() {
            return View();
        }
    }
}
