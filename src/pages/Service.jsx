import React from 'react'
import CardService from '../components/cardService/CardService'
import "./Service.css"
import {services} from '../data'
import Footer from '../components/layout/Footer'
const Service = () => {
 
  return (
    <div className='services-container'>
      {services.map((service, index) => (
        <CardService key={service.title} service={service} index={index} />
      ))}
      <Footer/>
    </div>
  )
}

export default Service