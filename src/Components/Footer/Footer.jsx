import FooterEnd from "./FooterEnd.jsx";
import FooterAddress from "./FooterAddress.jsx";
import FooterHotMenu from "./FooterHotMenu.jsx";
import FooterInstaMenu from "./FooterInstaMenu.jsx";

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div id="footer-align">
                    <FooterAddress/>
                    <FooterHotMenu/>
                    <FooterInstaMenu/>
                </div>
            </div>
            <FooterEnd/>
        </footer>
    )
}

export default Footer;