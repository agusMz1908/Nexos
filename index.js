// MENU DESPLEGABLE MOBILE

function cerrarModal() {
  const contenedor = document.getElementById('contenedorMenuMobile');
  const boton = document.getElementById('botonMenu');

  //La funcion que oculta y muestra
  function showHide(e){
    e.preventDefault();
    e.stopPropagation();
    if(contenedor.style.display === "none"){
      contenedor.style.display = "block";
    } else if(contenedor.style.display === "block"){
      contenedor.style.display = "none";
    }
  }

  //Al hacer click en el boton
  boton.addEventListener("click", showHide, false);

  //Funcion para cualquier clic en el documento
  document.addEventListener("click", function(e){
  console.log('clic');

  //Obtiendo informacion del DOM para  
  let click = e.target;
  console.log(click);
  if(contenedor.style.display == "block" && click != contenedor){
    contenedor.style.display = "none";
    }
  }, false);
}

// MODAL BOX
function modalBox() {   
  const open = document.getElementById('open');
  const modal_container = document.getElementById('modal_container');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
      modal_container.classList.add('show');
  });


  close.addEventListener('click', () => {
      modal_container.classList.remove('show');
  });
}

function modalBoxMobile() {
  const open = document.getElementById('botonModalMobile');
  const modal_container = document.getElementById('modal_container');
  const close = document.getElementById('closeMobile');

  open.addEventListener('click', () => {
      modal_container.classList.add('show');
  });


  close.addEventListener('click', () => {
      modal_container.classList.remove('show');
  });
}

//CARRUSEL MOBILE
function myEndFunction() {
  let slider_index = 0;

  function show_slide(index) {
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot-nav');

    if (index >= slides.length) slider_index = 0;
    if (index < 0) { slider_index = slides.length - 1 };

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
      dots[i].classList.remove('active-dot');
    }

    slides[slider_index].style.display = 'block';
    dots[slider_index].classList.add('active-dot');
    }

    show_slide(slider_index);

    document.querySelector('#arrow-prev').addEventListener('click', () => {
      show_slide(--slider_index);
    });

    document.querySelector('#arrow-next').addEventListener('click', () => {
      show_slide(++slider_index);
    });

    document.querySelectorAll('.dot-nav').forEach((element) => {
      element.addEventListener('click', function () {
        var dots = Array.prototype.slice.call(this.parentElement.children),
          dot_index = dots.indexOf(element);
        show_slide(slider_index = dot_index);
      })
    });

    setInterval(() => {
      show_slide(++slider_index)
    }, 2000);

}

function cargarDocumento() {
    modalBox();
    myEndFunction();
    cerrarModal();
    modalBoxMobile();
}

window.onload = cargarDocumento;
