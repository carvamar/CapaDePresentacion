using CapaDePresentacion.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace CapaDePresentacion.Controllers
{
	public class HomeController : Controller
	{
		private readonly ILogger<HomeController> _logger;

		public HomeController(ILogger<HomeController> logger)
		{
			_logger = logger;
		}

		public IActionResult Index()
		{
			return View();
		}

        public IActionResult Cita()
        {
            return View();
        }

        public IActionResult Perfil()
        {
            return View();
        }

        public IActionResult Privacy()
		{
			return View();
		}
         public IActionResult Spa()
         {
         return View();
         public IActionResult DetalleSpa1()
         {
         return View();
         }
         public IActionResult DetalleSpa2()
         {
         return View();
         }
         public IActionResult DetalleSpa3()
         {
         return View();
         }
         public IActionResult VerGaleriaSpa()
         {
         return View();
         }
         public IActionResult Estetica()
         {
         return View();
         }
         public IActionResult VerGaleriaEstetica()
         {
         return View();
         }
         public IActionResult DetalleFacial()
         {
         return View();
         }
         public IActionResult DetalleBotox()
         {
         return View();
         }
         public IActionResult DetalleDepilacion()
         {
         return View();
         }

		[ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
		public IActionResult Error()
		{
			return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
		}
	}
}
