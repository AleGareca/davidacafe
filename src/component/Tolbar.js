import React, { Component } from 'react'
import '../assets/vendor/icofont/icofont.min.css'

export default class Tolbar extends Component {
    render() {
        return (
            <div id="topbar" className="d-flex align-items-center fixed-top">
            <div className="container d-flex">
              <div className="contact-info mr-auto">
                <i className="icofont-phone"></i> +1 5589 55488 55
                <span className="d-none d-lg-inline-block"><i className="icofont-clock-time icofont-rotate-180"></i> Lun-Vie: 11:00 AM - 23:00 PM</span>
              </div>
            </div>
          </div>
        )
    }
}
