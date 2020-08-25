import React, { Component } from 'react'

export default class MenuBebidas extends Component {
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

            <section id="bebidas" class="menu section-bg">
              <div class="container" data-aos="fade-up">
    
                <div class="section-title">
                  <h2>Menu</h2>
                  <p>Bebidas Frías </p>
                </div>
    
                <div class="row" data-aos="fade-up" data-aos-delay="100">
                  <div class="col-lg-12 d-flex justify-content-center">
                    <ul id="menu-flters">
                      <li data-filter="*" class="filter-active">Todo</li>
                      <li data-filter=".filter-starters">Sin alcohol</li>
                      <li data-filter=".filter-salads">Con alcohol</li>
                    </ul>
                  </div>
                </div>
    
                <div class="row menu-container" data-aos="fade-up" data-aos-delay="200">
                  {this.renderMenuItem("", "", "Coca-Cola", "$95", "")}
                  {this.renderMenuItem("", "specialty", "Agua Saborizada", "$95", "Naranja, Manzana, Uva, Pera")}
                  {this.renderMenuItem("", "starters", "Agua con o sin gas", "$95", "")}
                  {this.renderMenuItem("", "salads", "Exprimido Pomelo o Limonada", "$150", "")}
                  {this.renderMenuItem("", "starters", "Exprimido Naranja", "$140", "")}

                  {this.renderMenuItem("", "salads", "Quilmes Porrón", "$130", "")}
                  {this.renderMenuItem("", "salads", "Quilmes 1LT", "$240", "")}
                  {this.renderMenuItem("", "specialty", "Stella Artois Porrón", "$160", "")}
                  {this.renderMenuItem("", "specialty", "Stella Artois 1LT", "$270", "")}
                  {this.renderMenuItem("", "specialty", "Brahama Porrón", "$130", "")}
                  {this.renderMenuItem("", "specialty", "Brahama 1LT", "$240", "")}
                  {this.renderMenuItem("", "specialty", "Corona Porrón", "$160", "")}
                  {this.renderMenuItem("", "specialty", "Corona 1LT", "$270", "")}
                  {this.renderMenuItem("", "specialty", "Cosecha tardia", "$290", "")}
                </div>
              </div>
            </section>
          </div>
        )
      }
    }
    
