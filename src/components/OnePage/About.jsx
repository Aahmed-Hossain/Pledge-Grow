import React from 'react';

function About() {
  return (
    <section className="about section-padding">
      <div className="container">
        <div className="row md-marg">
          <div className="col-lg-6 valign">
            <div className="cont md-mb50">
              <h6 className="sub-title opacity-8 wow fadeInUp">Application Mobile.</h6>
              <h2 className="d-slideup wow">
                <span className="sideup-text">
                  <span className="up-text">Pledge and Grow<span className="sub-font">full–service</span></span>
                </span>
                <span className="sideup-text">
                  <span className="up-text">creative studio</span>
                </span>
                <span className="sideup-text">
                  <span className="up-text">revolutionize Application Mobile.</span>
                </span>
              </h2>
              <div className="text mt-20 wow fadeIn" data-wow-delay=".5s">
                <p>Chez Pledge and Grow, nous sommes spécialisés dans le développement d'applications mobiles innovantes et performantes. Que vous ayez besoin d'une application native, hybride ou cross-platform, nous avons l'expertise nécessaire pour transformer vos idées en applications mobiles de haute qualité.</p>
              </div>
              {/* <div className="stutas pt-40 mt-40 bord-thin-top">
                <div className="row">
                  <div className="col-md-6">
                    <div className="d-flex align-items-center sm-mb30">
                      <div className="mr-30">
                        <h2 className="stroke fw-800">12k</h2>
                      </div>
                      <div>
                        <h6 className="sub-title ls1 opacity-8">Happy Users <br /> Around World</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <div className="mr-30">
                        <h2 className="stroke fw-800">30k</h2>
                      </div>
                      <div>
                        <h6 className="sub-title ls1 opacity-8">Projects <br /> Already Done</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img">
              <img src="/dark/assets/imgs/about/2.jpg" alt="" />
              <div className="exp main-bg">
                <h2>8+</h2>
                <h6 className="sub-title">Years Of Experience</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About