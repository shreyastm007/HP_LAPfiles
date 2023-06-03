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

namespace EmptyPractise3
{
    public class Startup
    {

        public IConfiguration Configuration { get; } 
        public Startup(IConfiguration configuration) {
            Configuration = configuration;
        }// not present in empty file, it is taken from mvc file



        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services) {
            services.AddControllersWithViews(); // view display
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env) {
            if (env.IsDevelopment()) {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            FileServerOptions fileServerOptions = new FileServerOptions();
            fileServerOptions.EnableDefaultFiles = true; // to print html file or default file
           
            //fileServerOptions.StaticFileOptions.RedirectToAppendTrailingSlash = true;
            app.UseFileServer(fileServerOptions);



            //app.UseEndpoints(endpoints => {
            //    endpoints.MapGet("/", async context => {
            //        await context.Response.WriteAsync("Hello World!");
            //        await context.Response.WriteAsync("\n");

            //        await context.Response.WriteAsync(Configuration["privatekey"]); 
            //        await context.Response.WriteAsync("\n");

            //        await context.Response.WriteAsync(env.EnvironmentName);
            //    });



            app.UseEndpoints(endpoints => {   //fetch reference from endpoints.
                endpoints.MapControllerRoute(
                    name: "default",
                     pattern: "{controller=Home}/{action=Index1}/{id?}");

            });
        }
    }
}
