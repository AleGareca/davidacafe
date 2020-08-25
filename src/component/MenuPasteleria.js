import React, { Component } from 'react'
import chip from '../assets/img/menu/Pasteleria/Chips.png'
import chocotorta from '../assets/img/menu/Pasteleria/Chocotorta.png'
import churros from '../assets/img/menu/Pasteleria/Churros.png'
import cuadraditosdecoco from '../assets/img/menu/Pasteleria/CuadraditosCoco.png'
import cupcackes from '../assets/img/menu/Pasteleria/Cupcackes.png'
import donas from '../assets/img/menu/Pasteleria/donas.png'
import libritos from '../assets/img/menu/Pasteleria/Libritos.png'
import medialunas from '../assets/img/menu/Pasteleria/Medialunas.png'
import MJQ from '../assets/img/menu/Pasteleria/MedialunasJQ.png'
import mofin from '../assets/img/menu/Pasteleria/Mufin.png'
import lemonpie from '../assets/img/menu/Pasteleria/LemonPie.png'
import balcarse from '../assets/img/menu/Pasteleria/balcarse.png'
import blancoNegro from '../assets/img/menu/Pasteleria/blancoNegro.png'
import crumble from '../assets/img/menu/Pasteleria/crumble.png'
import marquise from '../assets/img/menu/Pasteleria/Marquise.png'
import oreo  from '../assets/img/menu/Pasteleria/oreo.png'
import salvanegra from '../assets/img/menu/Pasteleria/SalvaNegra.png'
import waffle from '../assets/img/menu/Pasteleria/waffle.png'
import Wsakado from '../assets/img/menu/Pasteleria/wafflesalado.png'
import cheescake from '../assets/img/menu/Pasteleria/cheescake.png'
import tiramisu from '../assets/img/menu/Pasteleria/tiramisu.png'
import panqueque from '../assets/img/menu/Pasteleria/panqueque.png'

export default class MenuPasteleria extends Component {
  


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
            
            <section id="pasteleria" class="menu section-bg">
              <div class="container" data-aos="fade-up">
    
                <div class="section-title">
                  <h2>Menu</h2>
                  <p>Pastelería </p>
                </div>
    
                <div class="row" data-aos="fade-up" data-aos-delay="100">
                  <div class="col-lg-12 d-flex justify-content-center">
                    <ul id="menu-flters">
                      <li data-filter="*" class="filter-active">Todo</li>
                      <li data-filter=".filter-starters">Panadería</li>
                      <li data-filter=".filter-salads">Pastelería</li>
                    </ul>
                  </div>
                </div>
    
                <div class="row menu-container" data-aos="fade-up" data-aos-delay="200">
                  {this.renderMenuItem(medialunas, "", "Medialuna", "$30", "")}
                  {this.renderMenuItem(MJQ, "specialty", "Medialuna c/jamon y queso", "$48", "")}
                  {this.renderMenuItem(donas, "starters", "Donas c/dulce  de leche", "$65", "")}
                  {this.renderMenuItem(churros, "salads", "Churros c/dulce de leche", "$28", "")}
                  {this.renderMenuItem(libritos, "starters", "Libritos", "$30", "")}
                  {this.renderMenuItem(chip, "salads", "Chipitas", "$220", "")}
                  {this.renderMenuItem(mofin, "salads", "Muffins", "$75", "")}

                  {this.renderMenuItem(crumble, "specialty", "Crumble de manzana", "$180", "")}
                  {this.renderMenuItem(cuadraditosdecoco, "specialty", "Cuadraditos de coco y dulce de leche", "$180", "")}
                  {this.renderMenuItem(cheescake, "specialty", "Cheesecake", "$180", "")}
                  {this.renderMenuItem(lemonpie, "specialty", "Lemon Pie", "$180", "")}
                  {this.renderMenuItem(salvanegra, "specialty", "Selva negra", "$180", "")}
                  {this.renderMenuItem(chocotorta, "specialty", "Chocotorta", "$180", "")}
                  {this.renderMenuItem(tiramisu, "specialty", "Tiramisú", "$180", "")}
                  {this.renderMenuItem(cupcackes, "specialty", "Cupcakes", "$180", "")}
                  {this.renderMenuItem(marquise, "specialty", "Marquise", "$180", "")}
                  {this.renderMenuItem(balcarse, "specialty", "Postre BALCARCE", "$180", "Vainilla, frutilla, tiramisú")}
                  {this.renderMenuItem(oreo, "specialty", "Torta Oreo", "$180", "")}
                  {this.renderMenuItem(blancoNegro, "specialty", "Pan Blanco / Salvado", "$30", "Pedilo para llevar")}
                  {this.renderMenuItem(Wsakado, "specialty", "Waffle Salados", "$220", "Muzzarella, jamón, tomate, albahaca y aceite de oliva")}
                  {this.renderMenuItem(waffle, "specialty", "Waffle Dulce", "$250", "Dulce de leche, crema, bocha de helado y frutas de estacion")}
                  {this.renderMenuItem(panqueque, "specialty", "Panqueques", "$140", "Dulces o salados")}
                  
    
                </div>
              </div>
            </section>
          </div>
        )
      }
    }
    
