import React, { Component } from 'react'

export default class ContacUs extends Component {
    render() {
        return (
            <div>
                  <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Contacto</h2>
          <p>Contactanos</p>
        </div>
      </div>

      <div data-aos="fade-up">
        <iframe style={{border :'0', width: "100%", height: "350px"}} src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=D%C3%A1vida%20Caf%C3%A9,%20Espa%C3%B1a,%20Florencio%20Varela,%20Provincia%20de%20Buenos%20Aires+(Davida%20Caf%C3%A9)&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" frameborder="0" allowfullscreen></iframe>
      </div>


      <div class="container" data-aos="fade-up">

        <div class="row mt-5">

          <div class="col-lg-4">
            <div class="info">
              <div class="address">
                <i class="icofont-google-map"></i>
                <h4>Localización:</h4>
                <p>Dávida Café, España, Florencio Varela, Provincia de Buenos Aires</p>
              </div>

              

              <div class="phone">
                <i class="icofont-phone"></i>
                <h4>Telefono:</h4>
                <p>+1 5589 55488 55s</p>
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
