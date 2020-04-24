import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <div className="container">
        <div className="name">
          <div className="head1" style={{textAlign: 'center'}}>Tony Antelman</div>
          <img className="picFamily" src={'images/66280151_10106467198589150_3256109741838958592_n.jpg'} alt={''}/>
          <p className="text1" style={{paddingTop: '0px', marginBottom: 'rgb(119, 189, 198)'}}>I desire to be an Agent of Change. I want to be in a role that drives the culture to truly adopt continuous improvement, and lean thinking in all aspects of business.
              I also thrive whenever given the opportunity to implement new technologies, or find ways of using current tech in new ways.
          </p>
        </div>
        <div className="contact">
            <div className="head1" style={{paddingLeft: '5px'}}>Contact Me</div>
            <div className="media">
                <img className="icon" src={'images/codepen-brands.svg'} href="https://codepen.io/AnthonyAntelman/" alt={''}/>
                    <span className="tooltiptext">Codepen</span>
                <img className="icon" src={'images/hackerrank-brands.svg'} href="https://www.hackerrank.com/antelmananthonyj" alt={''}/>
                    <span className="tooltiptext">Hackerrank</span>
                <img className="icon" src={'images/linkedin-brands.svg'} href="https://www.linkedin.com/in/anthonyantelman" alt={''}/>
                    <span className="tooltiptext">Linkedin</span>
              <img className="icon" src={"images/envelope-square-solid.svg"} href="mailto: anthonyantelman@gmail.com" alt={''}/>
                    <span className="tooltiptext">Email</span>
                <img className="icon" src={"images/github-square-brands.svg"} href="https://github.com/Antelman82" alt={''}/>
                    <span className="tooltiptext">GitHub</span>
                <img className="icon" src={"images/codewars.svg"} href="https://www.codewars.com/users/TAntelman" alt={''}/>
                    <span className="tooltiptext">CodeWars</span>               
            </div>
        </div>
        <div className="skills">
            <div className="head2">Skills</div>
            <div className="text2">
                <p>AutoCAD, Pro/E, SolidWorks, Autodesk Inventor, Windows XP, MS Office, 3-D studio viz, 3-D max,  Pinnacle Digital Video Editing, MS Project, DataLoad®, RVSI UID software, RVSI MXi User Interface, Product Center, PLC, CNC, NC, MS Visio, Lean Manufacturing, TQM, SPC, ISO 9000, Six-Sigma, Value Stream Mapping (VSM), Facility Planning, Kanban, Just-in-time manufacturing (JIT), Poke-yoke (Mistake Proofing), 5S+Safety, QFD, MUDA/Waste elimination, DFM, DFA, ProModel®, Completed Dale Carnegie Training, and received Breakthrough and Outstanding Performance Awards.</p>
            </div>
        </div>

        <div className="progLangs">
            <div className="head2">Program Languages</div>
            <ul className="lists">
                <li>Bash</li>
                <li>Python</li>
                <li>VBA</li>
                <li>HTML</li>
                <li>SQL</li>
                <li>PowerShell</li>
                <li>GT.m</li>
                <li>PLC</li>
                <li>G-code</li>
                <li>Windows Batch</li>

            </ul>
        </div>
        <div className="experience">
            <div className="head1">Experience</div>
            <ul className="text3">
                <li>09/01/2015 – Current</li>
                <li>09/16/2013 - 08/31/2015</li>
                <li>12/12/2011 - 09/15/2013</li>
                <li>03/2011 – 12/2011</li>
                <li>12/2010 – 03/2011</li>
                <li>03/2010 – 10/2010</li>
                <div style={{paddingBottom: '15px'}}></div>
                <li style={{listStyle: 'none'}}>**Manufacturing Engineering**</li>
                <li>Tooling</li>
                <li>Support</li>
                <li>Project Management</li>
                <li>Knowledge</li>
                <li>Assembly</li>
                <li>Advanced Manufacturing</li>
                <div style={{paddingBottom: '15px'}}></div>
                <li style={{listStyle: 'none'}}>**Industrial Engineering**</li>
                <li>EPDP</li>
                <div style={{paddingBottom: '15px'}}></div>
                <li style={{listStyle: 'none'}}>**Accounting/Finance**</li>
                <li>Business Analysis</li>
                <div style={{paddingBottom: '15px'}}></div>
                <li style={{listStyle: 'none'}}>**Product Engineering**</li>
                <li>Electro-Hydraulics/Mechanical & Optics</li>
                <li></li>
                <li>**Supply Management/Logistics**</li>
                <li>Logistics</li>
                <li>Material Flow</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>  
        <div className="hobbies">
            <div className="head2">Hobbies & Passions</div>
        </div>
      </div>
    </div>

  );
}

export default with Router(App);
