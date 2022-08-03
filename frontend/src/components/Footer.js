import React from 'react'
import mastercard from '../icons/mastercard.svg';
import visa from '../icons/visa.svg';
import paypal from '../icons/paypal.svg';
import phone from '../icons/phone.svg';
import mail from '../icons/mail.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-flex">
                <section className="footer-icons">
                    <img src={mastercard} alt="icon-mastercard" className="icon-pay" />
                    <img src={visa} alt="icon-visa" className="icon-pay" />
                    <img src={paypal} alt="icon-paypal" className="icon-pay" />
                </section>


                <div className="footer-contact">
                    <p className="title-footer">Contacto</p>
                    <section className="container-contact">
                        <img src={phone} alt="icon-phone" className="icon-contact" />
                        <p className="data-contact">(800) 555-000</p>
                    </section>
                    <section className="container-contact">
                        <img src={mail} alt="icon-mail" className="icon-contact" />
                        <p className="data-contact">soporte.tec@mail.com</p>
                    </section>
                </div>
            </div>

            <p className="text-copy">
                &copy; Copyright - Todos los derechos reservados - Ignacio Rodríguez Varela
            </p>
        </footer>
    )
};