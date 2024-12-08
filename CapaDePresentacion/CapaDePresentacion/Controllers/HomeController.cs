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
        }
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
        //////// Modulo GestionEmpleados////////
        public IActionResult GestionEmpleados()
        {
            return View();
        }
        public IActionResult PerfilPacientes()
        {
            return View();
        }

        public IActionResult Horarios()
        {
            return View();
        }

        public IActionResult RolesPermisos()
        {
            return View();
        }
        public IActionResult RegistrarTratamientos()
        {
            return View();
        }
        public IActionResult ReportesSatisfaccion()
        {
            return View();
        }

        ////////*Vistas Modulo GE1-GE2-GE3*////////

        public IActionResult GE1()
        {
            return View();
        }
        public IActionResult GE2()
        {
            return View();
        }
        public IActionResult GE3()
        {
            return View();
        }

        ////////*Vistas Modulo Horario1-Horario2-Horario3////////

        public IActionResult Horario1()
        {
            return View();
        }
        public IActionResult Horario2()
        {
            return View();
        }
        public IActionResult Horario3()
        {
            return View();
        }

        ////////*Vistas Modulo RolesPermisos1////////

        public IActionResult RolesPermisos1()
        {
            return View();
        }

        ////////*Vistas Modulo RegistroTratamiento1////////

        public IActionResult RegistroTratamiento1()
        {
            return View();
        }

        ////////*Vistas Modulo ReportesSatisfaccion1////////

        public IActionResult ReportesSatisfaccion1()
        {
            return View();
        }

        //////// Modulo GestionUsuarios////////

        public IActionResult GestionUsuarios()
        {
            return View();
        }

        public IActionResult Registro()
        {
            return View();
        }
        public IActionResult IniciarSesion()
        {
            return View();
        }
        public IActionResult PerfilUsuario()
        {
            return View();
        }
        public IActionResult AccesoUsuarios()
        {
            return View();
        }

        public IActionResult CrearCuenta()
        {
            return View();
        }
        public IActionResult EditarDesactivarEliminar()
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
