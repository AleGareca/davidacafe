import React, { Component } from 'react'
import imagen from '../assets/img/about.jpg'

export default class Covid extends Component {
    render() {
        return (
            <div>
                 <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="row">
          <div class="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="100">
            <div class="about-img">
              <img src={imagen} alt=""/>
            </div>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3>Cuidemonos entre todos</h3>
            <p class="font-italic">
              Tenemos los protocolos necesarios para cuidarnos entre todos
            </p>
            <ul>
              <li><i class="icofont-check-circled"></i> Platos, cubiertos y vasos descartables</li>
              <li><i class="icofont-check-circled"></i> Alcohol en gel por mesa</li>
              <li><i class="icofont-check-circled"></i> Distanciamiento de mesas de hasta 2 metros</li>
            </ul>
            <p>
            Mas descripciones en esta seccion 
            </p>
          </div>
        </div>

      </div>
    </section>
            </div>
        )
    }
}
