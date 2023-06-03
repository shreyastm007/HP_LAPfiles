using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplicationSession.controller
{
    public class SessionController : Controller
    {
        [Route("home/index")]
        public IActionResult Index() {
            HttpContext.Session.SetString("product", "laptop");
            return View();
        }
       [Route("home/GetSessionData")]
        public IActionResult GetSessionData() {
            ViewBag.data = HttpContext.Session.GetString("product"); ;
            return View();
        } 
    }
}
