import React, { Component } from 'react'

import { Row, Col } from 'react-bootstrap'
import footerSVG from '../Assets/undraw_adventure_map_hnin 1.svg'
import footerIcon1 from '../Assets/footer-icon1.svg'
import footerIcon2 from '../Assets/footer-icon2.svg'
import footerIcon3 from '../Assets/footer-icon3.svg'
import footerIcon4 from '../Assets/footer-icon4.svg'
import footerIcon5 from '../Assets/footer-icon5.svg'
class Footer extends Component {
  state = {}
  render() {
    return (
      <div id="footer-wrapper">
        <div className="container" id="footer-container-wrapper">
          <img src={footerSVG} id="footer-icon" />
          <div>
            <div
              className="all-footer-text-wrapper"
              id="footer-first-text-wrapper"
            >
              <div className="d-flex justify-content-around">
                <img src={footerIcon1} className="footer-right-col-icons" />
                <div className="footer-paragraph-wrapper">
                  <p className="footer-text-paragraph">
                    Compare security solutions
                  </p>
                  <p className="footer-text-sub-paragraph">
                    In cursus eget id urna bibendum tellus mattis. Mi amet
                    ultricies vestibulum eget id urna.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="all-footer-text-wrapper"
              id="footer-first-text-wrapper"
            >
              <div className="d-flex justify-content-around">
                <img src={footerIcon2} className="footer-right-col-icons" />
                <div className="footer-paragraph-wrapper">
                  <p className="footer-text-paragraph">
                    Compare security solutions
                  </p>
                  <p className="footer-text-sub-paragraph">
                    In cursus eget id urna bibendum tellus mattis. Mi amet
                    ultricies vestibulum eget id urna.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="all-footer-text-wrapper"
              id="footer-first-text-wrapper"
            >
              <div className="d-flex justify-content-around">
                <img src={footerIcon3} className="footer-right-col-icons" />
                <div className="footer-paragraph-wrapper">
                  <p className="footer-text-paragraph">
                    Compare security solutions
                  </p>
                  <p className="footer-text-sub-paragraph">
                    In cursus eget id urna bibendum tellus mattis. Mi amet
                    ultricies vestibulum eget id urna.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="all-footer-text-wrapper"
              id="footer-first-text-wrapper"
            >
              <div className="d-flex justify-content-around">
                <img src={footerIcon4} className="footer-right-col-icons" />
                <div className="footer-paragraph-wrapper">
                  <p className="footer-text-paragraph">
                    Compare security solutions
                  </p>
                  <p className="footer-text-sub-paragraph">
                    In cursus eget id urna bibendum tellus mattis. Mi amet
                    ultricies vestibulum eget id urna.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <Row>
            <Col xl={5}>
              <div id="footer-left-col-icon">
                <img src={footerSVG} id="footer-icon" />
              </div>
            </Col>
            <Col xl={7} id="footer-right-col">
              <div
                className="all-footer-text-wrapper"
                id="footer-first-text-wrapper"
              >
                <div className="d-flex justify-content-around">
                  <img src={footerIcon1} className="footer-right-col-icons" />
                  <div className="footer-paragraph-wrapper">
                    <p className="footer-text-paragraph">
                      Compare security solutions
                    </p>
                    <p className="footer-text-sub-paragraph">
                      In cursus eget id urna bibendum tellus mattis. Mi amet
                      ultricies vestibulum eget id urna.
                    </p>
                  </div>
                </div>
              </div>
              <div className="all-footer-text-wrapper">
                <div className="d-flex justify-content-around">
                  <img src={footerIcon2} className="footer-right-col-icons" />
                  <div className="footer-paragraph-wrapper">
                    <p className="footer-text-paragraph">
                      Compare security solutions
                    </p>
                    <p className="footer-text-sub-paragraph">
                      In cursus eget id urna bibendum tellus mattis. Mi amet
                      ultricies vestibulum eget id urna.
                    </p>
                  </div>
                  s
                </div>
              </div>
              <div className="all-footer-text-wrapper">
                <div className="d-flex justify-content-around">
                  <img src={footerIcon3} className="footer-right-col-icons" />
                  <div className="footer-paragraph-wrapper">
                    <p className="footer-text-paragraph">
                      Compare security solutions
                    </p>
                    <p className="footer-text-sub-paragraph">
                      In cursus eget id urna bibendum tellus mattis. Mi amet
                      ultricies vestibulum eget id urna.
                    </p>
                  </div>
                  s
                </div>
              </div>
              <div className="all-footer-text-wrapper">
                <div className="d-flex justify-content-around">
                  <img src={footerIcon4} className="footer-right-col-icons" />
                  <div className="footer-paragraph-wrapper">
                    <p className="footer-text-paragraph">
                      Compare security solutions
                    </p>
                    <p className="footer-text-sub-paragraph">
                      In cursus eget id urna bibendum tellus mattis. Mi amet
                      ultricies vestibulum eget id urna.
                    </p>
                  </div>
                  s
                </div>
              </div>
              <div
                className="all-footer-text-wrapper"
                id="footer-last-text-wrapper"
              >
                <div className="d-flex justify-content-around">
                  <img src={footerIcon5} className="footer-right-col-icons" />
                  <div className="footer-paragraph-wrapper">
                    <p className="footer-text-paragraph">
                      Compare security solutions
                    </p>
                    <p className="footer-text-sub-paragraph">
                      In cursus eget id urna bibendum tellus mattis. Mi amet
                      ultricies vestibulum eget id urna.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row> */}
        </div>
      </div>
    )
  }
}

export default Footer
