// ==========================
// MENU RESPONSIVE
// ==========================

const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-mobile");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("activo");
    });
}

// ==========================
// CERRAR MENU AL HACER CLICK
// ==========================

document.querySelectorAll(".menu a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("activo");

    });

});

// ==========================
// BOTON SUBIR
// ==========================

const btnArriba = document.createElement("button");

btnArriba.id = "btn-arriba";

btnArriba.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(btnArriba);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        btnArriba.classList.add("activo");

    } else {

        btnArriba.classList.remove("activo");

    }

});

btnArriba.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ==========================
// NAVBAR SCROLL
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.2)";

    } else {

        header.style.boxShadow = "none";

    }

});

// ==========================
// ANIMACIONES
// ==========================

const elementos = document.querySelectorAll(".card,.seccion,.proyecto,.card-contenido");

const mostrarElemento = () => {

    const alturaPantalla = window.innerHeight;

    elementos.forEach(el => {

        const posicion = el.getBoundingClientRect().top;

        if (posicion < alturaPantalla - 100) {

            el.classList.add("mostrar");

        }

    });

};

window.addEventListener("scroll", mostrarElemento);

mostrarElemento();

// ==========================
// CONTADOR
// ==========================

const numeros = document.querySelectorAll(".estadisticas h2");

numeros.forEach(numero => {

    const objetivo = parseInt(numero.textContent);

    if (isNaN(objetivo)) return;

    let contador = 0;

    const intervalo = setInterval(() => {

        contador++;

        numero.textContent = contador;

        if (contador >= objetivo) {

            numero.textContent = objetivo + "+";

            clearInterval(intervalo);

        }

    }, 50);

});

// ==========================
// SCROLL SUAVE
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {

            destino.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ==========================
// EFECTO HOVER PROYECTOS
// ==========================

const proyectos = document.querySelectorAll(".proyecto");

proyectos.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});

// ==========================
// AÑO AUTOMATICO FOOTER
// ==========================

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML = `© ${new Date().getFullYear()} Yilder Stiven Rodríguez Lozada | CodeFusion YD`;

}

// ==========================
// EFECTO MAQUINA ESCRIBIR
// ==========================

const titulo = document.querySelector(".info h3");

if (titulo) {

    const texto = titulo.textContent;

    titulo.textContent = "";

    let i = 0;

    function escribir() {

        if (i < texto.length) {

            titulo.textContent += texto.charAt(i);

            i++;

            setTimeout(escribir, 45);

        }

    }

    escribir();

}

// ==========================
// MODO OSCURO
// ==========================

const darkBtn = document.createElement("button");

darkBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

darkBtn.style.position = "fixed";
darkBtn.style.bottom = "95px";
darkBtn.style.right = "25px";
darkBtn.style.width = "55px";
darkBtn.style.height = "55px";
darkBtn.style.borderRadius = "50%";
darkBtn.style.border = "none";
darkBtn.style.cursor = "pointer";
darkBtn.style.background = "#222";
darkBtn.style.color = "#fff";
darkBtn.style.fontSize = "20px";
darkBtn.style.boxShadow = "0 8px 20px rgba(0,0,0,.2)";
darkBtn.style.zIndex = "999";

document.body.appendChild(darkBtn);

let oscuro = false;

darkBtn.addEventListener("click", () => {

    oscuro = !oscuro;

    if (oscuro) {

        document.body.style.background = "#121212";
        document.body.style.color = "#fff";

        document.querySelectorAll(".card,.seccion,.perfil,.proyecto").forEach(el => {

            el.style.background = "#1d1d1d";
            el.style.color = "#fff";

        });

    } else {

        location.reload();

    }

});

