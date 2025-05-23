package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.modelo.Denuncias;
import com.example.demo.modelo.Personal;
import com.example.demo.modelo.ServicioComercio;
import com.example.demo.modelo.ServicioProfesional;
import com.example.demo.modelo.Reclamos;

import com.example.demo.service.DenunciasService;
import com.example.demo.service.ServicioComercioService;
import com.example.demo.service.ServicioProfesionalService;
import com.example.demo.service.VecinoRegistradoService;
import com.example.demo.service.PersonalService;
import com.example.demo.service.ReclamoService;
import com.example.demo.service.VecinoService;

@RestController
@RequestMapping("/inicio")
public class Controlador {
	@Autowired
	PersonalService personalservice;

	@Autowired
	VecinoService vecinoservice;

	@Autowired
	EmailSenderService emailservice;

	@Autowired
	ReclamoService reclamoservice;

	@Autowired
	DenunciasService denunciaservice;

	@Autowired
	ServicioComercioService serviciocomercioservice;

	@Autowired
	ServicioProfesionalService servicioprofesionalservice;

	@Autowired
	VecinoRegistradoService vecinoregistradoservice;

	@PostMapping("/loginInspector")
	public ResponseEntity<String> loginInspector(@RequestParam Integer legajo, @RequestParam String password) {
		boolean resultado = personalservice.loginInspector(legajo, password);
		if (resultado == true) {
			return ResponseEntity.ok("Login exitoso");
		} else {
			return ResponseEntity.status(401).body("Datos incorrectos");
		}
	}


	@GetMapping("/inspectores")
	public List<Personal> inspectores() {
		return personalservice.inspectores();
	}


	@GetMapping("/inspectores/documento-por-legajo")
	public ResponseEntity<String> obtenerDocumentoPorLegajo(@RequestParam Integer legajo) {
		String documento = personalservice.getDocumentoByLegajo(legajo);
		return ResponseEntity.ok(documento);
	}

	
	@PutMapping("/inspectores/cambiarcontrasenia")
	public ResponseEntity<String> cambiarContrasenia(@RequestParam Integer legajo, @RequestParam String password) {
		String resultado = personalservice.cambiarContrasenia(legajo, password);
		if (resultado.equals("Contraseña cambiada")) {
			return ResponseEntity.ok(resultado);
		} else {
			return ResponseEntity.status(400).body(resultado);
		}
	}

	@GetMapping("/vecino/vecino-nombre")
	public ResponseEntity<String> vecinoNombre(@RequestParam String documento) {
		String nombre = vecinoservice.obtenerNombre(documento);
		return ResponseEntity.ok(nombre);
	}

	@GetMapping("/vecino/vecino-apellido")
	public ResponseEntity<String> vecinoApellido(@RequestParam String documento) {
		String apellido = vecinoservice.obtenerApellido(documento);
		return ResponseEntity.ok(apellido);
	}


	@PostMapping("/register")
	public ResponseEntity<String> register(@RequestParam String documento, @RequestParam String mail) {
		String resultado = vecinoservice.register2(documento, mail);
		if (resultado.equals("Registro exitoso")) {
			emailservice.sendEmail("agustinjnadal@gmail.com", "Registro exitoso", "Registro exitoso");
			return ResponseEntity.ok(resultado);
		} else {
			return ResponseEntity.status(400).body(resultado);
		}
	}


	@PostMapping("/loginVecino")
	public ResponseEntity<String> loginVecino(@RequestParam String mail, @RequestParam String contrasenia) {
		String resultado = vecinoservice.login(mail, contrasenia);
		if (resultado.equals("Ingreso exitoso")) {
			return ResponseEntity.ok(resultado);
		} else {
			return ResponseEntity.status(400).body(resultado);
		}
	}


	@PostMapping("/vecino/olvidecontrasenia")
	public ResponseEntity<String> olvideContrasenia(@RequestParam String mail) {
		String resultado = vecinoservice.olvideContrasenia(mail);
		if (resultado.equals("Correo enviado correctamente")) {
			
			return ResponseEntity.ok(resultado);
		} else {
			return ResponseEntity.status(400).body(resultado);
		}
	}


	@PutMapping("/vecino/cambiarcontrasenia")
	public ResponseEntity<String> cambiarContrasenia(@RequestParam String documento, @RequestParam String contrasenia) {
		String resultado = vecinoregistradoservice.cambiarContrasenia(documento, contrasenia);
		if (resultado.equals("Contrasenia cambiada")) {
			return ResponseEntity.ok(resultado);
		} else {
			return ResponseEntity.status(400).body(resultado);
		}
	}


	@GetMapping("/vecino/documento-por-mail")
    public ResponseEntity<String> obtenerDocumentoPorMail(@RequestParam String mail) {
        String documento = vecinoservice.getDocumentoByMail(mail);
        return ResponseEntity.ok(documento);
    }


	@PostMapping("/reclamo")
	public ResponseEntity<String> reclamo(@RequestParam String documento, @RequestParam String idsitio,
			@RequestParam String iddesperfecto, @RequestParam String descripcion) {
		String resultado = reclamoservice.registrarReclamo(documento, idsitio, iddesperfecto, descripcion);
		if (resultado.equals("Reclamo registrado")) {
			return ResponseEntity.ok(resultado);
		} else {
			return ResponseEntity.status(400).body(resultado);
		}
	}
	
	@PostMapping("/reclamo/personal")
	public ResponseEntity<String> reclamoPersonal(@RequestParam Integer legajo, @RequestParam String idsitio,
			@RequestParam String iddesperfecto, @RequestParam String descripcion) {
		String resultado = reclamoservice.registrarReclamoPersonal(legajo, idsitio, iddesperfecto, descripcion);
		if (resultado.equals("Reclamo registrado")) {
			return ResponseEntity.ok(resultado);
		} else {
			return ResponseEntity.status(400).body(resultado);
		}
	}
 

	@GetMapping("/reclamo/mis-reclamos")
	public List<Reclamos> misReclamos(@RequestParam String documento) {
		return (List<Reclamos>) reclamoservice.listarReclamoPorDocumento(documento);
	}
	

	@GetMapping("/reclamo/mis-reclamos-personal")
	public List<Reclamos> misReclamosPersonal(@RequestParam Integer legajo) {
		return (List<Reclamos>) reclamoservice.listarReclamoPorLegajo(legajo);
	}


	@GetMapping("/reclamo/todos-reclamos")
	public List<Reclamos> todosReclamos() {
		return (List<Reclamos>) reclamoservice.listarTodosReclamos();
	}


	@PostMapping("/denuncia")
	public ResponseEntity<String> denuncia(@RequestParam String documento, @RequestParam String idsitio,
			@RequestParam String descripcion, @RequestParam String documentodenunciado) {
		String resultado = denunciaservice.registrarDenuncia(documento, idsitio, descripcion, documentodenunciado);
		if (resultado.equals("Denuncia registrada")) {
			return ResponseEntity.ok(resultado);
		} else {
			return ResponseEntity.status(400).body(resultado);
		}
	}


	@GetMapping("/denuncia/mis-denuncias")
	public List<Denuncias> misDenuncias(@RequestParam String documento) {
		return (List<Denuncias>) denunciaservice.listarDenunciasPorDocumento(documento);
	}
	

	@GetMapping("/denuncia/buscar-documento-denunciado")
	public List<Denuncias> buscarDocumentoDenunciado(@RequestParam String documentodenunciado) {
		return (List<Denuncias>) denunciaservice.buscarPorDocumentoDenunciado(documentodenunciado);
	}
	

	@PutMapping("/denuncia/aceptar-responsabilidad")
	public ResponseEntity<String> aceptarResponsabilidad(@RequestParam Long iddenuncia) {
		String resultado = denunciaservice.aceptarResponsabilidad(iddenuncia);
		if (resultado.equals("Denuncia aceptada")) {
			return ResponseEntity.ok(resultado);
		} else {
			return ResponseEntity.status(400).body(resultado);
		}
	}

	@PutMapping("/denuncia/rechazar-responsabilidad")
	public ResponseEntity<String> rechazarResponsabilidad(@RequestParam Long iddenuncia) {
		String resultado = denunciaservice.rechazarResponsabilidad(iddenuncia);
		if (resultado.equals("Denuncia rechazada")) {
			return ResponseEntity.ok(resultado);
		} else {
			return ResponseEntity.status(400).body(resultado);
		}
	}

	@GetMapping("/denuncia/obtener-id-denuncia")
	public ResponseEntity<String> obtenerIdDenuncia(@RequestParam String documento, @RequestParam String idsitio,
			@RequestParam String descripcion, @RequestParam String documentodenunciado) {
		String iddenuncia = denunciaservice.obtnerIdDenuncia(documento, idsitio, descripcion, documentodenunciado);
		return ResponseEntity.ok(iddenuncia);
	}


	@PostMapping("/servicio/comercio")
	public ResponseEntity<String> servicioComercio(@RequestParam String direccion, @RequestParam String contacto,
			@RequestParam String descripcion, @RequestParam String documento, @RequestParam String nombrecomercio) {
		String resultado = serviciocomercioservice.registrarServicioComercio(direccion, contacto, descripcion, documento, nombrecomercio);
		if (resultado.equals("Servicio de comercio registrado")) {
			return ResponseEntity.ok(resultado);
		} else {
			return ResponseEntity.status(400).body(resultado);
		}
	}

	@GetMapping("/servicio/comercio/todos-servicios")
	public List<ServicioComercio> todosServiciosComercio() {
		return (List<ServicioComercio>) serviciocomercioservice.listarTodosServicioComercio();
	}

	@PostMapping("/servicio/profesional")
	public ResponseEntity<String> servicioProfesional(@RequestParam String nombre, @RequestParam String apellido,
			@RequestParam String contacto, @RequestParam String horario, @RequestParam String rubro,
			@RequestParam String descripcion, @RequestParam String documento) {
		String resultado = servicioprofesionalservice.registrarServicioProfesional(nombre, apellido, contacto, horario,
				rubro, descripcion, documento);
		if (resultado.equals("Servicio profesional registrado")) {
			return ResponseEntity.ok(resultado);
		} else {
			return ResponseEntity.status(400).body(resultado);
		} 
	}


	@GetMapping("/servicio/profesional/todos-servicios")
	public List<ServicioProfesional> todosServiciosOrofesional() {
		return (List<ServicioProfesional>) servicioprofesionalservice.listarTodosServicioProfesional();
	}






}