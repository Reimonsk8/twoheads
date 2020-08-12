import React from 'react'
import './ContactUs.css'
import { Container, Image } from 'semantic-ui-react';
import banner from '../imgs/two_heads_background.jpg'

const ContactUs = React.forwardRef((props, ref) =>{
    return(
        <div ref={ref} className="BackgroundContact">
            
            <h1>Contáctanos</h1>
            <div className="flex-center">
            <a href="https://www.facebook.com/twoheadsclothing/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-facebook fa-2x icon-3d"/>
            </a>
            <a href="https://www.instagram.com/twoheadsclothing/?hl=es-la" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-instagram fa-2x icon-3d"/>
            </a>
            <a href="twoheadsclothing@outlook.com" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-whatsapp fa-2x icon-3d"/>
            </a>
            </div>
            <span className="stretch"></span>
            <p>Two Heads Co.</p>
            <div className="hvr-bounce-to-bottom">
                <p>💵💳 Envíos a todo México 📦</p>
                


                <div id="ImageImpostor">
                    <div id="politics">
                        <p>Esta página web se utiliza solo como catálogo, para mostrar material diferente a lo que tenemos en nuestro Instagram. </p>
                        <p>Políticas de compra y envió:</p>
                        <p>⦿ Para hacer un pedido debes ponerte en contacto con nosotros por medio de Instagram.</p>
                        <p>⦿ Tienes 2 opciones de envió:
                            <p style={{indentText: 10+"vw"}}> •   ‣ $250 pesos Fedex/Estafeta (2 a 7 días hábiles)</p>
                            <p style={{indentText: 10+"vw"}}> •   ‣ $110 pesos Correos de México (14 a 25 días hábiles)</p>
                        </p>
                        <p>⦿Estos plazos son medios, y por tanto una estimación. Por ello, es posible que varíen por razones logísticas o de fuerza mayor. En casos de retrasos en las entregas, Two Heads Co. informará a sus clientes en cuanto tenga conocimiento de ellos.</p>
                        <p>⦿ Los envíos se realizan uno o dos días después que se realice el pedido.</p>
                        <p>⦿ Toma en cuenta que las compras hechas durante días festivos (oficiales) o en fines de semana, se procesarán en el primer día laboral siguiente. Si no podemos entregar el pedido en dicho intervalo de tiempo, te notificaremos lo antes posible.</p>
                        <p>⦿ Una vez entregado el paquete a la compañía que se encargará de la entrega, el cliente será responsable del rastreo de su envío y cualquier problema o retraso, deberá contactar directamente con la paquetería. Al ser un servicio externo, Two Heads Co. no tiene control sobre el manejo y la entrega de los paquetes.</p>
                    </div>
                </div>
            </div>
        </div>
    )    
});

export default ContactUs;