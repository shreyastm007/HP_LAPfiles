using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CarModal.modal;

namespace CarModal
{
    public class Startup
    {
        public IConfiguration Configuration { get; } 
        public Startup(IConfiguration configuration) {
            Configuration = configuration;
        }
        public void ConfigureServices(IServiceCollection services) {
            services.AddControllersWithViews();

            services.AddMvc();

            //connectivity
            services.AddSingleton<ICar, MockData>();


        }

       
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env) {
            if (env.IsDevelopment()) {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseEndpoints(endpoints => { 
                endpoints.MapControllerRoute(
                    name: "default",
                     pattern: "{controller=Car}/{action=Razor}/{id?}");

        });
        }
    }
}
