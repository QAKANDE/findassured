import React, { Component } from 'react'

import illustration from '../Assets/Illustration.svg'

class Comingsoon extends Component {
  state = {}
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-left">
              <div className="illustration">
                <img src={illustration} alt="Illustration" />
              </div>
            </div>
            <div className="col-right">
              <main>
                <div className="intro">
                  <h1>
                    <span className="title">FindAssured</span>
                    <span className="description">Coming soon</span>
                  </h1>
                </div>

                <div className="form">
                  <form action="#">
                    <input
                      type="email"
                      placeholder="mail@yourdomain.com"
                      required
                    />
                    <button type="submit">Sign me up</button>
                    <span>
                      We collect emails to enable us set you up quicky when we
                      launch. We promise never to spam you at all!
                    </span>
                  </form>
                </div>

                <div className="offers">
                  <div className="row">
                    <div className="tools">
                      <h2>Tools</h2>
                      <p>
                        Optimized tools will help you keep your infrastructure
                        up & running without worrying about threats.
                      </p>
                    </div>

                    <div className="training">
                      <h2>Trainings</h2>
                      <p>
                        Interactive trainings and workshops for your staff, to
                        provide insight on threats and how to avoid being a
                        victim.
                      </p>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Comingsoon
