package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.controller.EmailSenderService;
import com.example.demo.modelo.Vecino;
import com.example.demo.modelo.Vecinoregistrado;
import com.example.demo.repository.VecinoRepository;
import com.example.demo.repository.VecinoregistradoRepository;

@Service
public class VecinoService {

	@Autowired
	VecinoRepository repoVecino;

	@Autowired
	VecinoregistradoRepository repoVecinoRegistrado;

	@Autowired
	EmailSenderService emailservice;

	public String register2(String documento, String mail) {
		Optional<Vecinoregistrado> vecinoYaRegistrado = repoVecinoRegistrado.findById(documento);
		if (vecinoYaRegistrado.isPresent()) {
			System.out.println("Entro aca en ya esta registrado");
			return "YA ESTAS REGISTRADO";
		} else {
			Optional<Vecino> vecinoOptional = repoVecino.findById(documento);
			if (vecinoOptional.isPresent()) {
				List<Vecinoregistrado> mails = repoVecinoRegistrado.findByMail(mail);
				for (Vecinoregistrado v : mails) {
					if (v.getMail().equals(mail)) {
						System.out.println("Entro aca en el mail ya existe");
						return "El mail ya existe";
					}
				}
				String contrasenia = documento;
				Vecinoregistrado nuevoVecino = new Vecinoregistrado(documento, mail, contrasenia, "B", "S");
				repoVecinoRegistrado.save(nuevoVecino);
				return "Registro exitoso";

			} else {
				System.out.println("Entro aca: No es vecino");
				return "No puede registrarse porque no es vecino";
			}
		}
	}
 
	public String olvideContrasenia(String mail) {
		List<Vecinoregistrado> vecinosConEseMail = repoVecinoRegistrado.findByMail(mail);
		Vecinoregistrado vecino = null;
		for (Vecinoregistrado v : vecinosConEseMail) {
			vecino = v;
		}
		if (vecino == null) {
			return "No estas registrado";
		} else {
			emailservice.sendEmail("agustinjnadal@gmail.com", "Olvide mi contrasenia", "Hola vecino, aqui esta su contrasenia, acuerdese de cambiarla cuando pueda por una que recuerde o anotela en un lugar fisico. Contrasenia Olvidada: " + vecino.getContrasenia());
			return "Correo enviado correctamente";
		}
	}

	public String login(String mail, String contrasenia) {
		List<Vecinoregistrado> mails = repoVecinoRegistrado.findByMail(mail);
		Vecinoregistrado vecino = null;
		for (Vecinoregistrado v : mails) {
			vecino = v;
		}
		if (vecino == null) {
			return "No estas registrado";
		} else {
			if (vecino.getMail().equals(mail) && vecino.getContrasenia().equals(contrasenia)) {
				if (vecino.getEstado().equals("B")) {
					return "Tu cuenta no está habilitada";
				} else {
					return "Ingreso exitoso";
				}

			} else {
				return "Datos incorrectos";
			}
		}
	}

	public String getDocumentoByMail(String mail) {
        List<Vecinoregistrado> vecinosConEseMail = repoVecinoRegistrado.findByMail(mail);
        if (vecinosConEseMail.isEmpty()) {
            return "No hay vecinos registrados con ese mail";
        } else {
            // Asumiendo que cada mail es único y hay solo un vecino con ese mail
            Vecinoregistrado vecino = vecinosConEseMail.get(0);
            return vecino.getDocumento();
        }
    }

}
