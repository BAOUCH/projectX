import React, {useState} from 'react'
import "./Projects.css";
import Villa from './Villa';

const Projects = () => {
  const [toggleState, setToggleState] = useState(0);
  
  const toggleTab = (index)=>{
    setToggleState(index);
  }

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">What i worked on</span>
      <div className="projects__container container grid">
        <div className="projects__content">
          <div>
            <i className="uil uil-arrow projects__icon"></i>
            <h3 className="projects__title"><br/>MicMac</h3>
          </div>

          <span className="projects__button" onClick={()=>toggleTab(1)}>View More 
            <i className="uil uil-arrow-right projects__button-icon"></i>
          </span>
          <div className={toggleState === 1 ? "projects__modal active-modal":"projects__modal"}>
            <div className="projects__modal-content">
              <i onClick={()=> toggleTab(0)} className="uil uil-times projects__modal-close"></i>

              <h3 className="projects__modal-title">MicMac</h3>
              <p className="projects__modal-description">hhhhhhhhhhhhhhhhhhhhhhhhh</p>

              <ul className="projects__modal-projects grid">

                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">gggggggggggg</p>

                </li>

                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">gggggggggggg</p>

                </li>

                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">gggggggggggg</p>

                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="projects__content">
          <div>
            <i className="uil uil-cube projects__icon"></i>
            <h3 className="projects__title"><br/>BIM</h3>
          </div>

          <span className="projects__button" onClick={()=>toggleTab(2)} >View More 
            <i className="uil uil-arrow-right projects__button-icon"></i>
          </span>
          <div className={toggleState === 2 ? "projects__modal active-modal":"projects__modal"}>
            <div className="projects__modal-content">
              <i onClick={()=> toggleTab(0)} className="uil uil-times projects__modal-close"></i>

              <h3 className="projects__modal-title">BIM</h3>
              <p className="projects__modal-description">hhhhhhhhhhhhhhhhhhhhhhhhh</p>
              <Villa/>

              <ul className="projects__modal-projects grid">

                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">Modeling of a structure (villa) in 3D using BIM methodology (Autodesk Revit).
                  </p>

                </li>

                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">Modeling with detailed exterior and interior architecture of the structure (LOD4 levels).</p>

                </li>

                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">gggggggggggg</p>

                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="projects__content">
          <div>
            <i className="uil uil-web-grid projects__icon"></i>
            <h3 className="projects__title"><br/>Solar Panel Anomalies</h3>
          </div>

          <span className="projects__button" onClick={()=>toggleTab(3)}>View More 
            <i className="uil uil-arrow-right projects__button-icon"></i>
          </span>
          <div className={toggleState === 3 ? "projects__modal active-modal":"projects__modal"}>
            <div className="projects__modal-content">
              <i onClick={()=> toggleTab(0)} className="uil uil-times projects__modal-close"></i>

              <h3 className="projects__modal-title">Solar Panel Anomalies</h3>
              <p className="projects__modal-description">hhhhhhhhhhhhhhhhhhhhhhhhh</p>

              <ul className="projects__modal-projects grid">

                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">gggggggggggg</p>

                </li>

                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">gggggggggggg</p>

                </li>

                <li className="projects__modal-project">
                  <i className="uil uil-check-circle projects__modal-icon"></i>
                  <p className="projects__modal-info">gggggggggggg</p>

                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      

    </section>
  )
}

export default Projects