import React from 'react'

const Header = () => {

    return (
        // <section className ='header-class'>
        //     <section className='left-header'>
        //         xmeme by
        //         <a href='http://utkryuk.github.io/' className='header-link'> Utkarsh</a>
        //     </section>
        //     <section className='right-header'>
        //         <a href='mailto:utkryuk@gmail.com' className='header-link'>contact me</a>
        //     </section>
        // </section>
        <div className = 'header-container'>
            <div className = 'left-header'>
                <span className = 'left-header-content'>xmeme by</span>
                <a href='http://utkryuk.github.io/' className='header-link'> Utkarsh</a>
            </div>
            <div className = 'right-header'>
                <a href='mailto:utkryuk@gmail.com' className='header-link'>contact me</a>
            </div>
        </div>
    )
}

export default Header;