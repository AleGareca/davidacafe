import React, { Component } from 'react'

import agua from '../assets/img/menu/bebidas/agua.png'
import aguaS from '../assets/img/menu/bebidas/aguaSaborizada.png'
import coca from '../assets/img/menu/bebidas/cocaloca.png'
import bramaPorron from '../assets/img/menu/bebidas/bramaPorron.png'
import corona1lt from '../assets/img/menu/bebidas/corona1lt.png'
import corronaPorron from '../assets/img/menu/bebidas/coronaPorron.png'
import cosecha from '../assets/img/menu/bebidas/cosecha.png'
import exprimido from '../assets/img/menu/bebidas/exprimido.png'
import exprimidoPomelo from '../assets/img/menu/bebidas/ExprimidoDePomelo.png'
import quilmesPorron from '../assets/img/menu/bebidas/quilmesPorron.png'
import stella1lt from '../assets/img/menu/bebidas/stella1lt.png'
import stellaPorron from '../assets/img/menu/bebidas/StellaPorron.png'
import quilmes1lt from '../assets/img/menu/bebidas/quilmes1lt.png'

export default class MenuBebidas extends Component {
  constructor(props) {
    super(props);
    this.state={
      filter:"Todo"
    }
    
  

 }


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
            <section id="bebidas" class="menu section-bg">
            <img src={corronaPorron} class="menu-img2" alt="" />
              <div class="container" data-aos="fade-up">
    
                <div class="section-title">
                  <h2>Menu</h2>
                  <p>Bebidas Frías </p>
                </div>
  
    
                <div class="row menu-container" data-aos="fade-up" data-aos-delay="200">
                  {this.renderMenuItem(coca, "", "Coca-Cola", "$95", "")}
                  {this.renderMenuItem(aguaS, "specialty", "Agua Saborizada", "$95", "Naranja, Manzana, Uva, Pera")}
                  {this.renderMenuItem(agua, "starters", "Agua con o sin gas", "$95", "")}
                  {this.renderMenuItem(exprimidoPomelo, "salads", "Exprimido Pomelo o Limonada", "$150", "")}
                  {this.renderMenuItem(exprimido, "starters", "Exprimido Naranja", "$140", "")}

                  {this.renderMenuItem(quilmesPorron, "salads", "Quilmes Porrón", "$130", "")}
                  {this.renderMenuItem(quilmes1lt, "salads", "Quilmes 1LT", "$240", "")}
                  {this.renderMenuItem(stellaPorron, "specialty", "Stella Artois Porrón", "$160", "")}
                  {this.renderMenuItem(stella1lt, "specialty", "Stella Artois 1LT", "$270", "")}
                  {this.renderMenuItem(bramaPorron, "specialty", "Brahama Porrón", "$130", "")}
                  {this.renderMenuItem(bramaPorron, "specialty", "Brahama 1LT", "$240", "")}
                  {this.renderMenuItem(corronaPorron, "specialty", "Corona Porrón", "$160", "")}
                  {this.renderMenuItem(corona1lt, "specialty", "Corona 1LT", "$270", "")}
                  {this.renderMenuItem(cosecha, "specialty", "Cosecha tardia", "$290", "")}
                  {this.renderSinAlcohol}
                </div>
              </div>
            </section>
          </div>
        )
      }
    }
    
