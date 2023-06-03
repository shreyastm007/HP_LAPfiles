using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplicationSession
{
    public class Startup
    {
       
        public IConfiguration Configuration { get; } 
        public Startup(IConfiguration configuration) {
            Configuration = configuration;
        }
        public void Configure(IApplicationBuilder app) {
            app.UseSession();
          
            app.UseMvc();
            app.Run(context => {
                return context.Response.WriteAsync("Hello World!");
            });

            //app.UseMvc(routes =>
            //{
            //    routes.MapRoute(
            //        name: "default",
            //        template: "{controller=Home}/{action=Index}/{id?}");
            //});

        }
        public void ConfigureServices(IServiceCollection services) {
            //MvcOptions.EnableEndpointRouting = false;
            services.AddMvc();
            services.AddSession(options => {
                options.IdleTimeout = TimeSpan.FromMinutes(60);
            });

        }
    }
}
