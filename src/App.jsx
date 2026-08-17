import './App.css'
import { useState } from 'react'
import resumePdf from './Artifacts/Joel_Dewbre_2026_08 - Concept.pdf'

function App() {
  const [open, setOpen] = useState(false)
  const [page, setPage] = useState('home')

  function navigate(to) {
    setPage(to)
    setOpen(false)
  }

  return (
    <div className={`hello-container ${open ? 'menu-open' : ''}`}>
      <button
        className={`hamburger-btn ${open ? 'open' : ''}`}
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((s) => !s)}
      >
        <span className="line line1" />
        <span className="line line2" />
        <span className="line line3" />
      </button>

      <nav className={`side-menu ${open ? 'open' : ''}`} aria-hidden={!open}>
        <ul>
          <li><button onClick={() => navigate('home')}>Home</button></li>
          <li><button onClick={() => navigate('resume')}>Resume</button></li>
          <li><button onClick={() => navigate('option2')}>Option 2</button></li>
          <li><button onClick={() => navigate('about')}>About</button></li>
          <li><button onClick={() => navigate('projects')}>Projects</button></li>
          <li><button onClick={() => navigate('contact')}>Contact</button></li>
        </ul>
      </nav>

      {page === 'home' && (
        <>
          <h1>Hello, World!</h1>
          <p>Welcome to Joel Dewbre's React site.</p>
        </>
      )}

      {page === 'about' && (
        <div className="about-page">
          <div className="about-content">
            <p>Justin Joel Dewbre</p>
            <p>3290 Bastrop Court</p>
            <p>Rockwall, TX 75032</p>
            <p>cell: 214.354.2747</p>
            <p>email: joeld27@gmail.com</p>
          </div>
        </div>
      )}

      {page === 'resume' && (
        <div className="resume-page">
          <h1>Resume</h1>
          <div className="resume-embed">
            <iframe src={resumePdf} title="Resume PDF" />
          </div>
        </div>
      )}

      {page === 'option2' && (
        <div className="option2-page">
          <div className="resume-html">
            <header className="resume-header">
              <h1>Joel Dewbre</h1>
              <p className="contact-line">
                Joeld27@gmail.com &nbsp;|&nbsp; (214) 354-2747 &nbsp;|&nbsp; 3290 Bastrop Court, Rockwall, Texas, 75032
              </p>
            </header>

            <section className="resume-summary">
              <p>
                Seasoned full stack software engineer in data driven web application development.
                Industry domain knowledge includes Financial, Consulting, Automotive, Health and
                Green services industries.
              </p>
              <ul>
                <li>Expert knowledge in developing multiple .NET web applications from the ground up.</li>
                <li>Expert knowledge in enhancing .NET web applications to be Extensible, Scalable, and Maintainable while supporting ongoing development.</li>
                <li>Architecting, Designing, and Coding full stack systems using Microsoft Technologies.</li>
                <li>Proactive team player and problem solver.</li>
              </ul>
            </section>

            <section className="resume-section">
              <h2>Technical Skills</h2>
              <ul className="skills-list">
                <li><strong>Programming:</strong> C#.NET, VB.NET, TypeScript, JavaScript, HTML, CSS, Power Shell (20+ years)</li>
                <li><strong>Backend:</strong> SQL Server, Stored Procedures, T-SQL, SSIS, Entity Framework, LINQ, Dapper, JQuery</li>
                <li><strong>Middle Layer:</strong> .NET, ASP.NET, MVC, .NET Web API, NServiceBus, oAuth2, JWT</li>
                <li><strong>Front End:</strong> JavaScript, Typescript, Vue.js, Knockout.js, Ajax, JSON, XML, Bootstrap, HTML/CSS</li>
                <li><strong>Cloud:</strong> Azure</li>
                <li><strong>OS:</strong> Windows Server 2000/2012, Unix, Linux Ubuntu</li>
                <li><strong>Development Environments:</strong> Visual Studio, Visual Studio Code</li>
                <li><strong>Integrations:</strong> QuickBooks Online, Salesforce</li>
                <li><strong>CI/CD:</strong> TFS, TeamCity, Octopus Deploy, NodeJS, npm, Git, Bitbucket, SVN</li>
                <li><strong>Architecture:</strong> DDD, SOA, Distributed Messaging, Microservices, Web APIs, REST, MVC, Webform, MEF, client/server</li>
              </ul>
            </section>

            <section className="resume-section">
              <h2>Professional Experience</h2>

              <div className="job">
                <div className="job-header">
                  <h3>Service Autopilot <span className="job-dates">September 2015 – July 2024</span></h3>
                  <p className="job-location">Richardson, TX</p>
                  <p className="job-title">Application Architect, Team Lead</p>
                </div>
                <ul>
                  <li>Started as a Team Lead Software Engineer using C# ASP.NET and led a team of five, coordinating with the Product team and Stakeholders, designing and building software solutions in a timely and efficient manner for a SaaS CRM product.</li>
                  <li>Responsible for providing technical direction to my team, assignments, supervising tasks, and mentoring team members while also developing.</li>
                  <li>Redesigned white labeled client portal using Vue.js. This web app is used by our clients to service their customers for service requests, payments, etc.</li>
                  <li>Architected and implemented a two-way QuickBooks (both Desktop and Online) integration for the SaaS CRM platform, automating and synchronizing between CRM and accounting workflows.</li>
                  <li>Designed and developed integration from the SaaS product to Salesforce.</li>
                  <li>Built out CI/CD solution using TeamCity and Octopus Deploy.</li>
                  <li>Worked with the CIO/Business co-owner to redesign the monolithic system to be more Scalable, Extensible, and Maintainable without interrupting ongoing development.</li>
                  <li>Implemented Domain Driven Design (DDD) using RabbitMQ messaging, Web APIs and microservices to enhance the system. This change removed production bottlenecks and improved performance.</li>
                  <li>Created the first few microservices using distributed messages to prototype the solution, demonstrating a significant speed improvement for the overall SaaS product. Went from daily production issues at 3k businesses to doubling the client base without any performance issues.</li>
                  <li>Implemented code unit tests and promoted ideas to the team to create more confidence in modifications to existing code.</li>
                </ul>
              </div>

              <div className="job">
                <div className="job-header">
                  <h3>ISN <span className="job-dates">May 2015 – August 2015</span></h3>
                  <p className="job-location">Dallas, TX</p>
                  <p className="job-title">Dev Support Team</p>
                </div>
                <ul>
                  <li>SaaS safety management software for high risk, high skill demanding projects.</li>
                  <li>Worked on the Dev Support team to handle incoming support tickets and resolve production issues using SQL and VB.NET.</li>
                </ul>
              </div>

              <div className="job">
                <div className="job-header">
                  <h3>Driven Solutions <span className="job-dates">June 2012 – April 2015</span></h3>
                  <p className="job-location">Addison, TX</p>
                  <p className="job-title">Team Lead Dev</p>
                </div>
                <ul>
                  <li>Managed the relationship between the business and the development team, analyzing business problems then architecting, developing, and implementing solutions.</li>
                  <li>Responsible for providing technical direction to my team, handing out assignments using Agile, supervising tasks, and mentoring team members.</li>
                  <li>Developed while leading a team of six developers.</li>
                  <li>Led the team to perform maintenance and enhancements on a new CRM web application. My team built external interfaces and peripheral applications for the new CRM.</li>
                  <li>The external interfaces include batch processing jobs and a web service for adding, changing and cancelling memberships. Batch job leverages MEF and Inheritance to quickly accommodate customer data variances.</li>
                  <li>Built an MVC3 website using SOLID, IoC, ASP.NET, C# and Telerik's KendoUI for tow truck companies to complete their own invoices.</li>
                </ul>
              </div>

              <div className="job">
                <div className="job-header">
                  <h3>Acubits <span className="job-dates">March 2009 – June 2012</span></h3>
                  <p className="job-location">McKinney, TX</p>
                  <p className="job-title">IT Services – Managing Consultant</p>
                </div>
                <ul>
                  <li>Fostered client relationships, requirements gathering, and problem solving through architecting, developing, and implementing cross-browser custom web applications.</li>
                  <li>Developed custom solutions for clients using ASP.NET, JavaScript, jQuery and C# to build web solutions.</li>
                  <li>Data access solutions varied from SQL Server stored procedures to RESTful data services.</li>
                </ul>
              </div>

              <div className="job job-compact">
                <div className="job-header">
                  <h3>Zimbra (formerly Telligent) <span className="job-dates">April 2004 – February 2009</span></h3>
                  <p className="job-location">Richardson, TX</p>
                  <p className="job-title">IT Services – Senior Software Engineer</p>
                </div>
              </div>

              <div className="job job-compact">
                <div className="job-header">
                  <h3>Born Information Services <span className="job-dates">March 1998 – April 2004</span></h3>
                  <p className="job-title">IT Services – Consultant</p>
                </div>
              </div>

              <div className="job job-compact">
                <div className="job-header">
                  <h3>Pagenet <span className="job-dates">February 1993 – March 1998</span></h3>
                  <p className="job-location">Plano, TX</p>
                  <p className="job-title">Software Engineer</p>
                </div>
              </div>
            </section>

            <section className="resume-section">
              <h2>Training</h2>
              <div className="training-block">
                <h3>Certifications</h3>
                <p>Microsoft Certified Application Developer (expired)</p>
              </div>
              <div className="training-block">
                <h3>Education</h3>
                <p>Graduate, Texas Tech University – 1992<br />Management Information Systems</p>
              </div>
            </section>
          </div>
        </div>
      )}

      {page === 'projects' && (
        <div className="projects-page">
          <h1>Projects</h1>
          <p>Projects will go here.</p>
        </div>
      )}

      {page === 'contact' && (
        <div className="contact-page">
          <div className="about-content">
            <p>Justin Joel Dewbre</p>
            <p>3290 Bastrop Court</p>
            <p>Rockwall, TX 75032</p>
            <p>cell: 214.354.2747</p>
            <p>email: joeld27@gmail.com</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
