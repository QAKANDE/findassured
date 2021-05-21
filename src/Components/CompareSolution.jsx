import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import '../css/CompareSolution.css'
import footerSVG from '../Assets/undraw_adventure_map_hnin 1.svg'
import footerIcon1 from '../Assets/footer-icon1.svg'
import footerIcon2 from '../Assets/footer-icon2.svg'
import footerIcon3 from '../Assets/footer-icon3.svg'
import footerIcon4 from '../Assets/footer-icon4.svg'
import footerIcon5 from '../Assets/footer-icon5.svg'
class CompareSolution extends Component {
  state = {}
  render() {
    return (
      <div id="journey">
        <div className="compare-left">
          <img src={footerSVG} alt="" />
        </div>
        <div className="compare-right">
          <div className="compare-item">
            <div className="compare-icon">
              <img src={footerIcon1} alt="" />
            </div>
            <div className="compare-text">
              <h4>Compare security solutions</h4>
              <p>
                In cursus eget id urna bibendum tellus mattis. Mi amet ultricies
                vestibulum eget id urna.
              </p>
            </div>
          </div>
          <div className="compare-item">
            <div className="compare-icon">
              <img src={footerIcon2} alt="" />
            </div>
            <div className="compare-text">
              <h4>Compare security solutions</h4>
              <p>
                In cursus eget id urna bibendum tellus mattis. Mi amet ultricies
                vestibulum eget id urna.
              </p>
            </div>
          </div>
          <div className="compare-item">
            <div className="compare-icon">
              <img src={footerIcon3} alt="" />
            </div>
            <div className="compare-text">
              <h4>Compare security solutions</h4>
              <p>
                In cursus eget id urna bibendum tellus mattis. Mi amet ultricies
                vestibulum eget id urna.
              </p>
            </div>
          </div>
          <div className="compare-item">
            <div className="compare-icon">
              <img src={footerIcon4} alt="" />
            </div>
            <div className="compare-text">
              <h4>Compare security solutions</h4>
              <p>
                In cursus eget id urna bibendum tellus mattis. Mi amet ultricies
                vestibulum eget id urna.
              </p>
            </div>
          </div>
          <div className="compare-item">
            <div className="compare-icon">
              <img src={footerIcon5} alt="" />
            </div>
            <div className="compare-text">
              <h4>Compare security solutions</h4>
              <p>
                In cursus eget id urna bibendum tellus mattis. Mi amet ultricies
                vestibulum eget id urna.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CompareSolution
