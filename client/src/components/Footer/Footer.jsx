import React from "react";
import sambhavLogo from "../../assets/Logo.png";
import grabbitslogo from "../../assets/grabbits.png";
import classes from "./Footer.module.css";

const sambhavinsta = "https://www.instagram.com/ieee.kits.studentbranch/";
const sambhavlinkedin = "https://www.linkedin.com/company/";
// const sambhavitwitter=''

const grabbitinsta = "https://www.instagram.com/tekno.kits/";
const grabbitlinkedin = "https://www.linkedin.com/company/";
const grabbittwitter = "https://twitter.com/teknodeon2k23";
const grabbitwebsite = "https://teknodeon.netlify.app/";

const spiderurl = "https://yashdevkate.me/";
const saurabh = "";
const sanyog = "";

const grabbiturl = "https://teknodeon.netlify.app/";
const Footer = () => {
  return (
    <div className={classes.footer_outer}>
      <div className={classes.footer}>
        <div className={classes.footer_first}>
          <div className={classes.footer_sambhav_image_div}>
            <div>
              <img
                className={classes.footer_sambhav_image}
                src={sambhavLogo}
                alt="sambhavLogo"
              ></img>
            </div>
            <div>
              {/* <h1 className={classes.footer_sambhav}>SAMBHAV'23</h1> */}
            </div>
          </div>
          <p className={classes.footer_sambhav_description}>
            The Institute of Electrical and Electronics Engineers (IEEE) is a professional association for the students.
          </p>
          <div className={classes.footer_social_item}>
            <div>
              <a
                href={sambhavinsta}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer_a_link}
              >
                <img
                  className={classes.footer_social_link}
                  src="https://img.icons8.com/fluency/48/ffffff/instagram-new.png"
                  alt=""
                />
              </a>
            </div>
            <div>
              <a
                href={sambhavlinkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer_a_link}
              >
                <img
                  className={classes.footer_social_link}
                  src="https://img.icons8.com/color/48/ffffff/linkedin-circled--v1.png"
                  alt=""
                />
              </a>{" "}
            </div>
            {/* <div>
              <a
                href={sambhavtwitter}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer_a_link}>
                <img className={classes.footer_social_link} src="https://img.icons8.com/fluency/48/ffffff/twitter-circled.png" alt="" />
              </a>  </div> */}
          </div>
        </div>
        <div className={classes.footer_first}>
          <div className={classes.footer_sambhav_image_div}>
            <div>
              <a
                href={grabbiturl}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer_a_link}
              >
                <img
                  className={classes.footer_grabbit_image}
                  src={grabbitslogo}
                  alt="sambhavLogo"
                ></img>
              </a>
            </div>
            <div>
              {/* <h1 className={classes.footer_sambhav}>GrabBit</h1> */}
            </div>
          </div>
          <p className={classes.footer_sambhav_description}>
            Teknodeon is the biggest event of KITS Ramtek, A national level technical festival conducted by the students for the students.
          </p>
          <div className={classes.footer_social_item}>
            <div>
              <a
                href={grabbitinsta}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer_a_link}
              >
                <img
                  className={classes.footer_social_link}
                  src="https://img.icons8.com/fluency/48/ffffff/instagram-new.png"
                  alt=""
                />
              </a>{" "}
            </div>
            <div>
              <a
                href={grabbitlinkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer_a_link}
              >
                <img
                  className={classes.footer_social_link}
                  src="https://img.icons8.com/color/48/ffffff/linkedin-circled--v1.png"
                  alt=""
                />
              </a>
            </div>
            <div>
              <a
                href={grabbittwitter}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer_a_link}
              >
                <img
                  className={classes.footer_social_link}
                  src="https://img.icons8.com/fluency/48/ffffff/twitter-circled.png"
                  alt=""
                />
              </a>{" "}
            </div>
            <div>
              <a
                href={grabbitwebsite}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer_a_link}
              >
                <img
                  className={classes.footer_social_link}
                  src="https://img.icons8.com/color/48/ffffff/domain--v1.png"
                  alt="zsdsff"
                />
              </a>
            </div>
          </div>
        </div>
        {/* <div className={classes.footer}second'>
          <h2 className={classes.footer}menu-heading'>Menu</h2>
          <h6 className={classes.footer}page-link'>About US</h6>
          <h6 className={classes.footer}page-link'>Term of Use</h6>
          <h6 className={classes.footer}page-link'>Privary Policy</h6>
          <h6 className={classes.footer}page-link'>Order History</h6>
          <h6 className={classes.footer}page-link'>Return policy</h6>
        </div> */}
        <div className={classes.footer_third}>
          <h2 className={classes.footer_menu_heading}>Contact Us</h2>
          <div className={classes.footer_contact}>
            <div className={classes.footer_contact_item_image}>
              <img
                className={classes.footer_contact_image}
                src="https://img.icons8.com/ios-filled/50/ffffff/marker.png"
                alt=""
              />
            </div>
            <div>
              <p>KaviKulguru Institute of Technology and Science, Ramtek</p>
            </div>
          </div>
          <div className={classes.footer_contact}>
            <div>
              <img
                className={classes.footer_contact_image}
                src="https://img.icons8.com/ios-filled/50/ffffff/outgoing-call.png"
                alt=""
              />
            </div>
            <div>
              <p> +91 - 7114 - 255309</p>
            </div>
          </div>
          <div className={classes.footer_contact}>
            <div>
              <img
                className={classes.footer_contact_image}
                src="https://img.icons8.com/glyph-neue/64/ffffff/gmail.png"
                alt=""
              />
            </div>
            <div>
              <p className={classes.mail}>info@kits.edu</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.footer_creator_div}>
        <h4 className={classes.footer_creator}>
          Website created by{" "}
          <a
            href={spiderurl}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.footer_a_link}
          >
            @Yash Devkate
          </a>{" "}
          ,{" "}
          {/* <a
            href={saurabh}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.footer_a_link}
          >
            {" "}
            @Saurabh Barde
          </a>{" "}
          and{" "}
          <a
            href={sanyog}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.footer_a_link}
          >
            {" "}
            @Sanyog Mahajan
          </a>{" "} */}
        </h4>
      </div>
    </div>
  );
};

export default Footer;
