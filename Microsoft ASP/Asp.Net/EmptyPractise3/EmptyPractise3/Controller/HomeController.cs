using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmptyPractise3.Controller
{
    public class HomeController : ControllerContext
    {
        public string Index1() {
            return "action view";
        }
        public string Index2() {
            return "view";
        }

    }
}
