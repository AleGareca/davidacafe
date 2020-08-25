import React, { Component } from 'react'
import imagen from '../assets/img/menu/Expresso.png'
import imagen1 from '../assets/img/menu/ExpressoDoble.png'
import imagen2 from '../assets/img/menu/ExpressoPanna.png'
import americano from '../assets/img/menu/americano.png'
import chico from '../assets/img/menu/chico.png'
import grande from '../assets/img/menu/grande.png'
import chocolatada from '../assets/img/menu/chocolatada.png'
import desinfectado from '../assets/img/menu/desinfectado.png'
import itizenfina from '../assets/img/menu/itizenfina.png'
import lagrima from '../assets/img/menu/lagrima.png'
import limon from '../assets/img/menu/limon.png'
import macchiato from '../assets/img/menu/macchiato.png'
import matecocido from '../assets/img/menu/matecocido.png'
import matecocidoleche from '../assets/img/menu/matecocidoleche.png'
import teleche from '../assets/img/menu/teleche.png'
import ristretto from '../assets/img/menu/ristretto.png'
import submarino from '../assets/img/menu/submarino.png'
import techai from '../assets/img/menu/techai.png'
import latte from '../assets/img/menu/latte.png'
import itizen from '../assets/img/menu/itizen.png'



export default class MenuCafeteria extends Component {



 componentDidMount(){

    const script = document.createElement("script");

    script.src = "../assets/vendor/jquery/jquery.min.js";
    script.async = true;

    document.body.appendChild(script);
 }


  renderMenuItem(imagen, tipoDeFiltro, nombreComida, precio, descripcion) {
    return (
      <div className={"col-lg-6 menu-item filter-" + tipoDeFiltro}>
        <img src={imagen} class="menu-img" alt="" />
        <div class="menu-content">
          <a>{nombreComida}</a><span>{precio}</span>
        </div>
        <div class="menu-ingredients">
          {descripcion}
        </div>
      </div>

    )
  }
  render() {
    return (
      <div>
        
        <section id="menu" class="menu section-bg">
          <div class="container" data-aos="fade-up">

            <div class="section-title">
              <h2>Menu</h2>
              <p>Cafetería </p>
            </div>

            <div class="row" data-aos="fade-up" data-aos-delay="100">
              <div class="col-lg-12 d-flex justify-content-center">
                <ul id="menu-flters">
                  <li data-filter="*" class="filter-active">Todo</li>
                  <li data-filter=".filter-starters">Café Expresso</li>
                  <li data-filter=".filter-salads">Especialidades</li>
                  <li data-filter=".filter-specialty">Infuciones</li>
                </ul>
              </div>
            </div>

            <div class="row menu-container" data-aos="fade-up" data-aos-delay="200">
              {this.renderMenuItem(imagen, "", "Expresso", "$70", "")}
              {this.renderMenuItem(imagen1, "specialty", "Expresso doble", "$100", "")}
              {this.renderMenuItem(imagen2, "starters", "Expresso panna", "$80", "")}
              {this.renderMenuItem(ristretto, "salads", "Ristretto", "$70", "")}
              {this.renderMenuItem(macchiato, "starters", "Macchiato", "$70", "")}
              {this.renderMenuItem(latte, "salads", "Latte", "$100", "")}
              {this.renderMenuItem(lagrima, "salads", "Lágrima", "$100", "")}
              {this.renderMenuItem(americano, "specialty", "Expreso Americano", "$85", "")}
              {this.renderMenuItem(chico, "specialty", "Expreso chico", "$100", "")}
              {this.renderMenuItem(grande, "specialty", "Expreso grande", "$170", "")}
              {this.renderMenuItem(desinfectado, "specialty", "Expreso descafeinado", "$95", "")}
              
              {this.renderMenuItem(itizen, "specialty", "Té clasico Intizen", "$80", "")}
              {this.renderMenuItem(itizenfina, "specialty", "Té Intizen fina", "$90", "Variedad de sabores")}
              {this.renderMenuItem(limon, "specialty", "Té limon", "$90", "")}
              {this.renderMenuItem(teleche, "specialty", "Té leche", "$90", "")}
              {this.renderMenuItem(techai, "specialty", "Té Chai Latte", "$150", "Frio o caliente")}
              {this.renderMenuItem(submarino, "specialty", "Submarino", "$150", "Negro/blanco")}
              {this.renderMenuItem(chocolatada, "specialty", "Chocolatada", "$100", "")}
              {this.renderMenuItem(matecocido, "specialty", "Matecocido", "$80", "")}
              {this.renderMenuItem(matecocidoleche, "specialty", "Matecocido con leche", "$90", "")}

            </div>
          </div>
        </section>
      </div>
    )
  }
}
