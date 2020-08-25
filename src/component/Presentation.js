import React, { Component } from 'react'
import MenuSandwiches from './MenuSandwiches';

export default class Presentation extends Component {
    render() {
        return (
            <div>
                 <section id="hero" class="d-flex align-items-center">
    <div class="container position-relative text-center text-lg-left" data-aos="zoom-in" data-aos-delay="100">
      <div class="row">
        <div class="col-lg-8">
          <h1>Bienvenidos a nuestra <span>Cafeteria</span></h1>
          <h2>7 Años compartiendo nuestras mesas</h2>

          <div class="btns">
            <a href="#menu" class="btn-menu animated fadeInUp scrollto">Cafetería</a>
            <a href="#delicias" class="btn-menu animated fadeInUp scrollto">Delicias Frías</a>
            <a href="#pasteleria" class="btn-menu animated fadeInUp scrollto">Pastelería</a>
            <a href="#sandwiches" class="btn-menu animated fadeInUp scrollto">Sandwiches</a>
            <a href="#ensaladas" class="btn-menu animated fadeInUp scrollto">Ensaladas</a>
            <a href="#bebidas" class="btn-menu animated fadeInUp scrollto">Bebidas</a>
          </div>
        </div>
     
      </div>
    </div>
  </section>
            </div>
        )
    }
}
