import React, { Component } from 'react'
import MenuSandwiches from './MenuSandwiches';
import '../assets/css/letra.css'

export default class Presentation extends Component {
    render() {
        return (
            <div>
                 <section id="hero" class="d-flex align-items-center">
    <div class="container position-relative text-center text-lg-left" data-aos="zoom-in" data-aos-delay="100">
      <div class="row">
        <div class="col-lg-8 ">
          <h1> <span>{" "+"Davida Café"}</span></h1>
          <h2>7 Años compartiendo nuestras mesas</h2>
          
          <div class="container">
           <div class="row">
          <div class="btns col ">
            <a href="#menu" class="btn-menu animated fadeInUp scrollto col-6 col-sm-4 ">Cafetería</a>
            <a href="#delicias" class="btn-menu animated fadeInUp scrollto col-6 col-sm-4 ">Delicias Frías</a>
            <a href="#pasteleria" class="btn-menu animated fadeInUp scrollto col-6 col-sm-4 ">Pastelería</a>
            <a href="#sandwiches" class="btn-menu animated fadeInUp scrollto col-6 col-sm-4 ">Sandwiches</a>
            <a href="#ensaladas" class="btn-menu animated fadeInUp scrollto col-6 col-sm-4 ">Ensaladas</a>
            <a href="#bebidas" class="btn-menu animated fadeInUp scrollto col-6 col-sm-4 ">Bebidas</a>
          </div>
        </div>

      </div>
    </div>
      </div>
    </div>
  </section>
            </div>
        )
    }
}
