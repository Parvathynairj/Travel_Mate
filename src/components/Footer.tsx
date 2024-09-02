import "../styles/footer.css";
import React from "react";

import { SVGGithub, SVGLinkedin } from "./SVGIcons";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="developers">
          <h4>Developer</h4>
          <div className="developer">
            <div className="dev-detail">
              <div className="dev-name">Parvathy J Nair</div>
              <div className="dev-role">Backend • Frontend</div>
            </div>
            <div className="dev-social">
              <a
                href="https://github.com/parvathyjnair"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SVGGithub width="25" height="25"/>
              </a>
              <a
                href="https://www.linkedin.com/in/parvathy-nair-6ba368224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SVGLinkedin  width="25" height="25"/>
              </a> 
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
