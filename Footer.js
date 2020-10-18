import React from 'react'
import {FcCloseUpMode} from 'react-icons/fc'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'

import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="container">

                <div className="icons">
                    <span>
                    <FcCloseUpMode/>
                    </span>
                    <h1 className="header">7ELEMENTS</h1>
               
                </div>
            
           <div className='wrapper'> 
           <div>
                <h1>Home</h1>
                    <h1>Projects</h1>
                    <h1>Company</h1>

                    <h2>Team</h2>
                    <h2>Career</h2>

                    <h1>How we Work</h1>

                    <h2>Technology</h2>
                    </div>

                    <div className="separate">
                    <h1>Blog</h1>
                    <h1>Contact</h1>
                   <h1>9elements Cyber Security</h1> 
                    <h1>PhotoEditor SDK by img.ly</h1>
                    </div>
           </div>
            </div>

            <div className="info">
                <h1>Kortumstraße 19-21</h1>
                <h1>44787 Bochum, Germany</h1>
                <h1>+49 234 689 4188</h1>
               <h1>contact@9elements.com</h1>


            </div>
            <div>
                <span>
               < AiOutlineTwitter/>
                </span>
                <span>
               < AiFillFacebook/>
                </span>
                <span>
               < AiOutlineGithub/>
                </span>
            </div>
            <h2>Impressum — Datenschutz — © 2020 9elements GmbH</h2>
            
            
        </footer>
    )
}

export default Footer

