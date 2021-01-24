// @flow 
import * as React from 'react';
import * as Util from '../../util';
import "./_styles.css";

export const Footer = () => {
    return (
        <footer className="bg-light text-center text-lg-start footer">
        <div className="text-center p-3">
            {`© ${Util.currentYear()} Copyright: `}
            <a className="text-primary" href="https://upstox.com/terms-of-use-and-privacy-policy/">Upstox.com</a>
        </div>
        </footer>
    );
};
export default Footer;