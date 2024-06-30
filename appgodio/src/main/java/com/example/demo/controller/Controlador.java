package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.modelo.Denuncias;
import com.example.demo.modelo.Personal;
import com.example.demo.modelo.Reclamos;
import com.example.demo.modelo.ServicioComercio;
import com.example.demo.modelo.ServicioProfesional;
import com.example.demo.service.DenunciasService;
import com.example.demo.service.PersonalService;
import com.example.demo.service.ReclamoService;
import com.example.demo.service.ServicioComercioService;
import com.example.demo.service.ServicioProfesionalService;
import com.example.demo.service.VecinoService;

@RestController
@RequestMapping("/inicio")
public class Controlador {
	@Autowired
	PersonalService personalservice;

	@Autowired
	VecinoService vecinoservice;

	@Autowired
	ServicioProfesionalService profesionalservice;

	@Autowired
	ServicioComercioService comercioservice;

	@Autowired
	EmailSenderService emailservice;

	@Autowired
	ReclamoService reclamoservice;

	@Autowired
	DenunciasService denunciaservice;

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


	@GetMapping("/servicios/profesionales")
	public List<ServicioProfesional> serviciosProfesionales() {
		return profesionalservice.serviciosProfesionalesHabilitados();
	}


	@GetMapping("/servicios/comercios")
	public List<ServicioComercio> servicioComercios() {
		return comercioservice.serviciosComerciosHabilitados();
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


	@GetMapping("/reclamo/mis-reclamos")
	public List<Reclamos> misReclamos(@RequestParam String documento) {
		return (List<Reclamos>) reclamoservice.listarReclamoPorDocumento(documento);
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
	
}