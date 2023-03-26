import React from 'react'
import modules from './Styles/style.module.scss'

const Header = () => {
    return(
        <div className={modules.Header}>
            <div className={modules.logo}>
                Here is logo
            </div>
            <div className={modules.settings}>
                Settings
            </div>
            <div className={modules.profile}>
                Profile
            </div>
        </div>
    )
}

export default Header;