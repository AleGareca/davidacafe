import React, { Component } from 'react'

export default class MenuEnsaladas extends Component {
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
            
            <section id="ensaladas" class="menu section-bg">
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
                  {this.renderMenuItem("", "", "Pollo", "$240", "Mix de hojas verdes, tomate, zanahoria, quesito y pollo grillado")}
                  {this.renderMenuItem("", "specialty", "Atún", "$270", "Mix de hojas verdes, tomate, huevo, zanahoria, aceitunas y lonjitas de atún")}
                  {this.renderMenuItem("", "starters", "Caprese", "$270", "Muzzarella, rodajas de tomate, albahaca. oliva y pimienta negra")}
                  {this.renderMenuItem("", "salads", "Thai", "$290", "Mix de hojas verdes, repollo colorado, tomate cherry, palta, quesitos y ganos de choclo. Aceite de oliva a elección")}
                  {this.renderMenuItem("", "starters", "Ensalada fresca", "$290", "Rúcula, jamón crudo y parmesano")}
                </div>
              </div>
            </section>
          </div>
        )
      }
    }
    
