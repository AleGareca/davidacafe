import React, { Component } from 'react'
import atun from '../assets/img/menu/sanwinch/atun.png'
import capresse from '../assets/img/menu/sanwinch/capresse.png'
import jamoncocido from '../assets/img/menu/sanwinch/jamoncocido.png'
import jamoncrudo from '../assets/img/menu/sanwinch/jamoncrudo.png'
import lomito from '../assets/img/menu/sanwinch/lomito.png'
import LomitoDePraga from '../assets/img/menu/sanwinch/LomitoDePraga.png'
import panceta from '../assets/img/menu/sanwinch/panceta.png'
import pollo from '../assets/img/menu/sanwinch/pollo.png'
import primavera from '../assets/img/menu/sanwinch/primavera.png'
import quesoGru from '../assets/img/menu/sanwinch/quesoGru.png'
import salame from '../assets/img/menu/sanwinch/salame.png'
import tumaca from '../assets/img/menu/sanwinch/tumaca.png'
import vegetales from '../assets/img/menu/sanwinch/vegetales.png'
import veggi from '../assets/img/menu/sanwinch/veggi.png'
import bondiola from '../assets/img/menu/sanwinch/bondiola.png'



export default class MenuSandwiches extends Component {

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
          
            <section id="sandwiches" class="menu section-bg">
              <div class="container" data-aos="fade-up">
    
                <div class="section-title">
                  <h2>Menu</h2>
                  <p>Sandwiches </p>
                </div>
    
                <div class="row" data-aos="fade-up" data-aos-delay="100">
                  <div class="col-lg-12 d-flex justify-content-center">
                    <ul id="menu-flters">
                      <li data-filter="*" class="filter-active">Todo</li>
                      <li data-filter=".filter-starters">Tostados</li>
                      <li data-filter=".filter-salads">Sandwiches clasicos</li>
                      <li data-filter=".filter-salads">Sandwiches especiales</li>
                    </ul>
                  </div>
                </div>
    
                <div class="row menu-container" data-aos="fade-up" data-aos-delay="200">
                  {this.renderMenuItem(jamoncrudo, "", "Jamón crudo y queso", "$160", "Pan miga - Árabe - Francés - Salvado. Armalo a tu gusto con lechuga y /o huevo")}
                  {this.renderMenuItem(jamoncocido, "specialty", "Jamón cocido y queso", "$140", "Pan miga - Árabe - Francés - Salvado. Armalo a tu gusto con lechuga y /o huevo")}
                  
                  {this.renderMenuItem(salame, "starters", "Salame y queso", "$140", "")}
                  {this.renderMenuItem(quesoGru, "salads", "Crudo y queso gruyére", "$180", "")}
                  {this.renderMenuItem(bondiola, "starters", "Bondiola y queso", "$160", "")}
                  {this.renderMenuItem(LomitoDePraga, "salads", "Lomito de praga y queso", "$160", "")}
                  {this.renderMenuItem(panceta, "salads", "Panceta. huevo y tomate", "$180", "")}
                  {this.renderMenuItem(veggi, "specialty", "Combo Veggie", "$330", " Limonada + sadwich de vegetales")}
                  
                  {this.renderMenuItem(capresse, "specialty", "Caprese", "$190", "Muzzarella, rodajas de tomate, albahaca. oliva y pimienta")}
                  {this.renderMenuItem(atun, "specialty", "Atún", "$190", "Lonjitas de atún, tomate, lechuga y huevo")}
                  {this.renderMenuItem(pollo, "specialty", "Pollo", "$170", "Pollo grillado con finas hierbas, lechuga, tomate, queso, mayonesa y barbacoa")}
                  {this.renderMenuItem(primavera, "specialty", "Super Primavera ", "$270", " Jamón, lechuga, queso y tomate en pan de miga. OPCIONAL: huevo, aceituas,choclo ó palmitos")}
                  {this.renderMenuItem(tumaca, "specialty", "Pan tumaca", "$240", "Tostaditas untadas con oliva, ajo y tomate secos con finas fetas de jamón crudo")}
                  {this.renderMenuItem(vegetales, "specialty", "Vegetales", "$220", "Pan negro, palta con base de queso crema, oliva, rúcula, tomates o portobelo")}
                  {this.renderMenuItem(lomito, "specialty", "Lomito", "$290", "Pan de lomito, lechuga, tomate, jamón, queso y huevo frito")}
                </div>
              </div>
            </section>
          </div>
        )
      }
    }
    
