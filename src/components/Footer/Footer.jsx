import React from 'react'
import '../Footer/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquareFacebook} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faTwitch} from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
    return (
        <div>
            <div>
                <div className="container">
                    <hr />
                    <div className="row">
                        <div className="footer col-md-12">
                            <p>copyright P.M.C 2022</p>
                            <FontAwesomeIcon className='px-3' icon={faSquareFacebook}  />
                            <FontAwesomeIcon className='px-3' icon={faInstagram}  />
                            <FontAwesomeIcon className='px-3' icon={faTwitter}  />
                            <FontAwesomeIcon className='px-3' icon={faTwitch}  />
                        </div>
                    </div>
                </div>
            </div>
        </div> 
   
    )
}

export default Footer;