import React, { Component } from 'react'
import caprese from '../assets/img/ensaladas/caprese.png'
import atun from '../assets/img/ensaladas/atun.png'
import pollo from '../assets/img/ensaladas/Pollo.png'
import thai from '../assets/img/ensaladas/thai.png'
import fresa from '../assets/img/ensaladas/fresca.png'

export default class MenuEnsaladas extends Component {
    renderMenuItem(imagen, tipoDeFiltro, nombreComida, precio, descripcion) {
        return (
          <div className={"col-lg-6 menu-item filter-" + tipoDeFiltro}>
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
            
            <section id="ensaladas" class="menu section-bg">
            <img src={pollo} class="menu-img2" alt="" />
              <div class="container" data-aos="fade-up">
    
                <div class="section-title">
                  <h2>Menu</h2>
                  <p>Ensaladas </p>
                </div>
    
                <div class="row" data-aos="fade-up" data-aos-delay="100">
                  <div class="col-lg-12 d-flex justify-content-center">
                    <ul id="menu-flters">
                      <li data-filter="*" class="filter-active"></li>
                    </ul>
                  </div>
                </div>
    
                <div class="row menu-container" data-aos="fade-up" data-aos-delay="200">
                  {this.renderMenuItem(pollo, "", "Pollo", "$320", "Mix de hojas verdes, tomate, zanahoria, quesito y pollo grillado")}
                  {this.renderMenuItem(atun, "specialty", "Atún", "$350", "Mix de hojas verdes, tomate, huevo, zanahoria, aceitunas y lonjitas de atún")}
                  {this.renderMenuItem(caprese, "starters", "Caprese", "$390", "Muzzarella, rodajas de tomate, albahaca. oliva y pimienta negra")}
                  {this.renderMenuItem(thai, "salads", "Thai", "$390", "Mix de hojas verdes, repollo colorado, tomate cherry, palta, quesitos y ganos de choclo. Aceite de oliva a elección")}
                  {this.renderMenuItem(fresa, "starters", "Ensalada fresca", "$450", "Rúcula, jamón crudo y parmesano")}
                  {this.renderMenuItem(fresa, "starters", "Ensalada fresca", "$490", "mix de hojas verdes,peras ,frutos secos,queso roquefort,cherri y vinagreta de frutos rojos ")}
                  {this.renderMenuItem(fresa, "starters", "Ensalada caeser", "$350", "mix de hojas verdes, croutones, queso en ebras ,pollo y salsa venders")}
                </div>
              </div>
            </section>
          </div>
        )
      }
    }
    
