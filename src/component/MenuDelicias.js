import React, { Component } from 'react'


import copaHelada from '../assets/img/menu/Helados/copaHelada.png'
import copaHeladaJunior from '../assets/img/menu/Helados/copaHeladaJunior.png'
import copaTriffle from '../assets/img/menu/Helados/copaTriffe.png'
import ensalada from '../assets/img/menu/Helados/ensaladaDeFrutas.png'
import frappeClassico from '../assets/img/menu/Helados/FrapeClassico.png'
import frapeeMenta from '../assets/img/menu/Helados/FrapeeMenta.png'
import frapeeDavida from '../assets/img/menu/Helados/frappeDavida.png'
import frapeeDulceDeLeche from '../assets/img/menu/Helados/frappeDulceDeLeche.png'
import frappeMoka from '../assets/img/menu/Helados/FrappeMoka.png'
import licuadoDeFrutas from '../assets/img/menu/Helados/licuadoDeFrutas.png'
import milkshake from '../assets/img/menu/Helados/milkshake.png'
import otrajunior from '../assets/img/menu/Helados/otraJunior.png'
import smoothie from '../assets/img/menu/Helados/smoothie.png'
import yogur from '../assets/img/menu/Helados/yogur.png'



export default class MenuDelicias extends Component {
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

            <section id="delicias" class="menu section-bg">
              <div class="container" data-aos="fade-up">
    
                <div class="section-title">
                  <h2>Menu</h2>
                  <p>Delicias Frías </p>
                </div>
    
                <div class="row" data-aos="fade-up" data-aos-delay="100">
                  <div class="col-lg-12 d-flex justify-content-center">
                    <ul id="menu-flters">
                
                    </ul>
                  </div>
                </div>
    
                <div class="row menu-container" data-aos="fade-up" data-aos-delay="200">
                  {this.renderMenuItem(licuadoDeFrutas, "", "Mix frutal", "$170", "Frutas de estación")}
                  {this.renderMenuItem(yogur, "specialty", "Yogurt con frutilla", "$190", "")}
                  {this.renderMenuItem(smoothie, "starters", "Smoothies", "$160", "(Naraja - Durazno), (Naranja - Frutilla), (Frutilla - Banana)")}
                  {this.renderMenuItem(milkshake, "salads", "Milkshakes", "$170", "Batido de helado con leche sin crema")}
                  
                  {this.renderMenuItem(frappeMoka, "starters", "Frappé Moka", "$190", "Expresso con helado de chocolate, cubierto con crema y chocolate rallado")}
                  {this.renderMenuItem(frappeClassico, "salads", "Frappé Clásico", "$190", "Expreso con helado de vainilla, canela y cacao")}
                  {this.renderMenuItem(frapeeDulceDeLeche, "salads", "Frappé dulce de leche", "$190", "Expresso con healdo de dulce de lece, cubierto con crema e hilos de dulce de leche")}
                  {this.renderMenuItem(frapeeMenta, "specialty", "Frappé Moka-Menta", "$190", "Expresso con helado de menta y chocolate, cubierto con crema y chocolate rallado")}
                  {this.renderMenuItem(frapeeDavida, "specialty", "Frappé Dávida", "$200", "Expresso con helado almendras, cubierto con crema y almedras caramelizadas")}

                  {this.renderMenuItem(copaHelada, "specialty", "Copa Helada Dávida", "$250", "")}
                  {this.renderMenuItem(copaHeladaJunior, "specialty", "Copa Helada Junior", "$170", "")}
                  {this.renderMenuItem(copaTriffle, "specialty", "Copa trifle ", "$280", " Mix de frutasde estación yogur, granola e hilos de miel ")}
                  {this.renderMenuItem(ensalada, "specialty", "Ensalada de frutas", "$190", "Mix de frutas de estación, ricas y frescas con exprimido de naranja")}
                </div>
              </div>
            </section>
          </div>
        )
      }
    }
    
