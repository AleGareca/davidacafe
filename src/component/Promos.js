import React, { Component } from 'react'
import imagen1 from '../assets/img/PromoCafe1.png'
import imagen2 from '../assets/img/PromoCafe2.png'
import imagen3 from '../assets/img/light.jpg'
import imagen4 from '../assets/img/americano.jpg'
import imagen5 from '../assets/img/campo.jpg'
import imagen6 from '../assets/img/capu.png'
import imagen7 from '../assets/img/mate.jpg'


export default class Promos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      promosNombre: ["Light", "Americano", "Campo","Capuccino","Mate"],
    };
  }

  renderPromo(nombre, precio, contenido, descripcion,imagen) {
    return (<div class="tab-pane" id={"tab-" + nombre}>
      <div class="row">
        <div class="col-lg-8 details order-2 order-lg-1">
          <h3>{precio}</h3>
          <p class="font-italic">{contenido}</p>
          <p>{descripcion}</p>
        </div>
        <div class="col-lg-4 text-center order-1 order-lg-2">
          <img src={imagen} alt="" class="img-fluid" />
        </div>
      </div>
    </div>)
  }


  renderNavItem(nombre, link) {
    return (
      <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href={"#tab-" + link}>{nombre}</a>
      </li>

    )

  }

  renderAllPromos() {
    return (
      this.state.promosNombre.map(e => this.renderNavItem(e, e))
    )
  }


  render() {
    return (
      <div>
        <section id="specials" class="specials">
          <div class="container" data-aos="fade-up">

            <div class="section-title">
              <h2>Promos</h2>
              <p>Desayunos y meriendas</p>
            </div>

            <div class="row" data-aos="fade-up" data-aos-delay="100">
              <div class="col-lg-3">
                <ul class="nav nav-tabs flex-column">
                  <li class="nav-item">
                    <a class="nav-link active show" data-toggle="tab" href="#tab-1">Promo 1</a>
                  </li>
                  {this.renderNavItem("Promo 2", "Promo")}
                  {this.renderAllPromos()}
                </ul>
              </div>
              <div class="col-lg-9 mt-4 mt-lg-0">
                <div class="tab-content">
                  <div class="tab-pane active show" id="tab-1">
                    <div class="row">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>$160</h3>
                        <p class="font-italic">Café o café con leche + 2 medialunas + jugo de naranja</p>
                        <p>Medialinas de manteca o grasa, jugo exprimido</p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img src={imagen1} alt="" class="img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-Promo">
                    <div class="row">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>$190</h3>
                        <p class="font-italic">Café o Café con leche o Té + Tostadas +Queso crema, mermelada o manteca y dulce de leche + jugo de naranja</p>
                        <p>tostadas con pan frances, dulce de leche repostero, jugo exprimido</p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img src={imagen2} alt="" class="img-fluid" />
                      </div>
                    </div>
                  </div>
                  {this.renderPromo("Light", "$330", "Café doble + Exprimido de naranja + yogurt + mix de frutas de estacion con cereales e hilos de miel  y tostados de queso en pan integral", "Caracteristicas del yogurt y escribir mas de la promo en esta parte",imagen3)}
                  {this.renderPromo("Americano", "$330", "Café doble + Exprimido + Tostadas +Huevo Revuelto y Crocantes de panceta", "Caracteristicas de la promo",imagen4)}
                  {this.renderPromo("Campo", "$250", "Café con leche, Te o mantecocido + Pan de campo + Jugo de Naranja + manteca y dulce de leche o mermelada", "Caracteristicas de la promo",imagen5)}
                  {this.renderPromo("Capuccino", "$260", "Capuccino chico + porcion de torta a eleccion", "Caracteristicas de la promo",imagen6)}
                  {this.renderPromo("Mate", "$390", "Libritos, chipas e hierbas aromaticas de la casa (burrito menta, cedron, poleo, cascarita de naranja, limón o café)", "Incluye equipo de Mate",imagen7)}
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    )
  }
}
