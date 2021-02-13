import React from 'react'

const Header = () => {

    return (
        <section className ='header-class'>
            <section className='left-header'>
                xmeme by
                <a href='http://utkryuk.github.io/' className='header-link'> Utkarsh</a>
            </section>
            <section className='right-header'>
                <a href='mailto:utkryuk@gmail.com' className='header-link'>contact me</a>
            </section>
        </section>
    )
}

export default Header;