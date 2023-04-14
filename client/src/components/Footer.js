import React from 'react'

function Footer() {
    return (
        <div className='container-fluid bg-dark text-light footer'>
                <div className='footer-logo'>
                    <a href='https://github.com/Timofeev-A-A/PhotoGallery' target="_blank" rel="noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
                <div className='footer-link'>
                    <span>About</span>
                    <span>Privacy</span>
                    <span>Docs</span>
                    <span>Contact</span>
                    <span>Support</span>
                    <span>Community</span>
                </div>
        </div>
    )
}

export default Footer
