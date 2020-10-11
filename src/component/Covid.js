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
            <h3>Cuidarte es cuidarnos!!</h3>
            <p class="font-italic">
            Cuidemosnos entre todos
            </p>
            <ul>
              <li><i class="icofont-check-circled"></i> Uso de tapabocas oligatorio</li>
              <li><i class="icofont-check-circled"></i> Alcohol en gel por mesa</li>
              <li><i class="icofont-check-circled"></i> Distanciamiento de mesas de hasta 2 metros</li>
            </ul>
            <p>
            Contamos con espacios al aire libre aptos para reuniones y grupos de trabajo, amigos y eventos familiares con el protocolo correspondiente a la fecha 
            </p>
          </div>
        </div>

      </div>
    </section>
            </div>
        )
    }
}
