import React from 'react';
import css from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={css.nav}>
            <div className={css.item}>
                <a href="/profile">Profile</a>
            </div>
            <div className={css.item}>
                <a href="/dialogs">Message</a>
            </div>
            <div className={css.item}>
                <a>New</a>
            </div>
            <div className={css.item}>
                <a>Music</a>
            </div>
            <div className={css.item}>
                <a>Settings</a>
            </div>
        </nav>
    );
}
export default Nav;