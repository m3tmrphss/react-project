 
import './header.css'
import avatar from './assets/user-avatar.svg'
import dropdownIcon from './assets/arrow-down.svg'


import React, { useState } from 'react';

export function HeaderNode () { 
    let [toggleIcon, SetToggleIcon] = useState(false)
    let clickOnIcon = () => {
        toggleIcon === false ? SetToggleIcon(true) : SetToggleIcon(false);
        document.querySelector('.dropdown-item').classList.toggle('reverse')
    } 
   
    return (
        <header>
            <div>
                <h1 className={'page-title'}>Awesome Kanban Board</h1>
                <div className={'user-interface'}>
                    <div className={'userIcon-container'} onClick={clickOnIcon}>
                        <img className={'user-avatar'}  src={avatar} alt="Аватар пользователя" />
                        <img className={'dropdown-item'} src={dropdownIcon} alt="" />
                    </div>
                    {
                        toggleIcon === true ?
                        (<div className={'dropdown-container'} >
                            <div className={'vector'}></div>
                            <nav className={'links-container'}>
                                <a href="# " className={'nav-link'}>Profile</a>
                                <a href="# " className={'nav-link'}>Log out</a>
                            </nav>
                        </div>) : (
                            <></>
                        )
                    }
                </div>
            </div> 
        </header>
    )
}