using EmptyPractise1.Modal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using EmptyPractise1.MyViews;

namespace EmptyPractise1
{
    public class HomeController:Controller
    {

        public IStudent _istudent;
        public HomeController(IStudent istudent) {
            _istudent = istudent;
        }

        //public int Index() {

        //    return _istudent.GetStudent(2).Age; 
        //}


        //using viewdata
        public ViewResult Details() {
            Student modal = _istudent.GetStudent(1);
            ViewData["Student"] = modal;
            ViewData["Title"] = "Details of student";
            return View();
        }


        //using viewbag
        public ViewResult Details1() {
          Student modal = _istudent.GetStudent(2);
            ViewBag.Student = modal;
            ViewBag.Title = "Student Details";
             return View(); 
        }


        // fetch details from strongly typed view
        public ViewResult Details2() {
            HomeDetailsViewModel homeDetailsViewModel = new HomeDetailsViewModel() {
                student = _istudent.GetStudent(2),
                Title = "EMPLOYEE"
            };
            return View(homeDetailsViewModel);
        }





        public IActionResult Index() {

            return View();
        }

    }

}

