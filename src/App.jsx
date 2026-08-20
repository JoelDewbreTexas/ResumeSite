import './App.css'
import { useEffect, useState } from 'react'
import headshot from './Artifacts/headshot.jpg'
import resumePdf from './Artifacts/JoelDewbreResume.pdf'

function IconUser({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
    </svg>
  )
}

function IconLocation({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s-7-6.5-7-11a7 7 0 0 1 14 0c0 4.5-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

function IconPhone({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function IconEmail({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  )
}

function IconDownload({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v12" />
      <path d="m7 11 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  )
}

function ContactDetails() {
  return (
    <div className="contact-details">
      <div className="contact-row">
        <IconUser className="contact-icon" />
        <span>Justin Joel Dewbre</span>
      </div>
      <div className="contact-row">
        <IconLocation className="contact-icon" />
        <span>Rockwall, TX</span>
      </div>
      <div className="contact-row">
        <IconPhone className="contact-icon" />
        <span>214.354.2747</span>
      </div>
      <div className="contact-row">
        <IconEmail className="contact-icon" />
        <span>joeld27@gmail.com</span>
      </div>
      <a className="download-btn" href={resumePdf} download="Joel_Dewbre_Resume.pdf">
        <IconDownload className="btn-icon" />
        Download PDF
      </a>
    </div>
  )
}

function ResumeIntro() {
  return (
    <>
      <p className="resume-tagline">Over three decades of web and cloud software solutions.<br />Well established in .NET, Azure, Vue.js and SQL.</p>
      <ContactDetails />
    </>
  )
}

function App() {
  const [open, setOpen] = useState(false)
  const [page, setPage] = useState('home')
  const [activeSection, setActiveSection] = useState('prof-summary')

  function navigate(to) {
    setPage(to)
    setOpen(false)
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    if (page !== 'home') return

    const sections = ['prof-summary', 'skills', 'work-summary', 'education']
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) {
          setActiveSection(visible[0].target.id)
        }
      },
      { rootMargin: '-120px 0px -60% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [page])

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

      <div className="site-banner">
        <h1>Justin Joel Dewbre</h1>
        <p className="resume-subtitle">Team Lead Software Engineer - Full Stack</p>
        <div className="banner-contact-line">
          <span className="banner-contact-item">
            <IconPhone className="contact-icon" />
            214.354.2747
          </span>
          <span className="banner-contact-item">
            <IconEmail className="contact-icon" />
            joeld27@gmail.com
          </span>
        </div>
      </div>

      <nav className={`side-menu ${open ? 'open' : ''}`} aria-hidden={!open}>
        <ul>
          <li><button onClick={() => navigate('home')}>Home</button></li>
          <li><button onClick={() => navigate('about')}>About</button></li>
          <li><button onClick={() => navigate('resume')}>Resume</button></li>
          <li><button onClick={() => navigate('projects')}>Projects</button></li>
          <li><button onClick={() => navigate('contact')}>Contact</button></li>
        </ul>
      </nav>

      {page === 'resume' && (
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
                <li><strong>CI/CD:</strong> TFS, TeamCity, Octopus Deploy, NodeJS, npm, Git, GitHub, Bitbucket, SVN</li>
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

      {page === 'about' && (
        <div className="about-page">
          <div className="about-content">
            <img className="about-photo" src={headshot} alt="Justin Joel Dewbre" width="269" height="274" />
            <div className="about-letter">
              <p>I have several years of experience creating and implementing technical solutions with business clients including Service-Oriented Architecture (SOA) and Domain Driven Design. I have 5+ years' experience creating Microservices and APIs. I have 15+ years building OOP solutions.</p>
              <p>I have worked in web design and development. Including HTML, CSS, Javascript, ASP.NET, VUE.js, Knockout.js, Web API, and C# web development, and enterprise architecture design. I also have similar years of experience with SQL Server. Writing queries, stored procedures, views and performing query optimization.</p>
              <p>Several years of consulting with clients and getting along with coworkers has strengthened my interpersonal skills.</p>
              <p><strong>Note:</strong> I am open to relocating within Texas or a surrounding state.</p>
              <p>I am looking forward to discussing my qualifications with you. Thank you very much for your time and consideration.</p>
              <p>Sincerely,</p>
              <p>Joel Dewbre</p>
            </div>
          </div>
        </div>
      )}

      {page === 'home' && (
        <div className="resume-page">
          <div className="resume-doc-layout">
            <nav className="resume-doc-nav">
              <a href="#prof-summary" className={activeSection === 'prof-summary' ? 'active' : ''}>Professional Summary</a>
              <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
              <a href="#work-summary" className={activeSection === 'work-summary' ? 'active' : ''}>Work Summary</a>
              <a href="#education" className={activeSection === 'education' ? 'active' : ''}>Education</a>
              <a className="nav-download-btn" href={resumePdf} download="Joel_Dewbre_Resume.pdf">
                <IconDownload className="btn-icon" />
                Download PDF
              </a>
            </nav>

            <div className="resume-doc-content">
              <section id="prof-summary" className="doc-section">
                <h2>Professional Summary</h2>
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

              <section id="skills" className="doc-section">
                <h2>Skills</h2>
                {[
                  { label: 'Programming', items: ['C#.NET', 'VB.NET', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Power Shell'] },
                  { label: 'Backend', items: ['SQL Server', 'Stored Procedures', 'T-SQL', 'SSIS', 'Entity Framework', 'LINQ', 'Dapper', 'JQuery'] },
                  { label: 'Middle Layer', items: ['.NET', 'ASP.NET', 'MVC', '.NET Web API', 'NServiceBus', 'oAuth2', 'JWT'] },
                  { label: 'Front End', items: ['JavaScript', 'Typescript', 'Vue.js', 'Knockout.js', 'Ajax', 'JSON', 'XML', 'Bootstrap', 'HTML/CSS'] },
                  { label: 'Cloud', items: ['Azure'] },
                  { label: 'OS', items: ['Windows Server 2000/2012', 'Unix', 'Linux Ubuntu'] },
                  { label: 'Development Environments', items: ['Visual Studio', 'Visual Studio Code'] },
                  { label: 'Integrations', items: ['QuickBooks Online', 'Salesforce'] },
                  { label: 'CI/CD', items: ['TFS', 'TeamCity', 'Octopus Deploy', 'NodeJS', 'npm', 'Git', 'GitHub', 'Bitbucket', 'SVN'] },
                  { label: 'Architecture', items: ['DDD', 'SOA', 'Distributed Messaging', 'Microservices', 'Web APIs', 'REST', 'MVC', 'Webform', 'MEF', 'client/server'] },
                ].map((group) => (
                  <div className="skill-category" key={group.label}>
                    <span className="skill-category-label">{group.label}</span>
                    <div className="skill-pills">
                      {group.items.map((item) => (
                        <span className="skill-pill" key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </section>

              <section id="work-summary" className="doc-section">
                <h2>Work Summary</h2>

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

              <section id="education" className="doc-section">
                <h2>Education</h2>
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

          <div className="resume-actions">
            <a className="resume-action-btn primary" href={resumePdf} download="Joel_Dewbre_Resume.pdf">
              <IconDownload className="btn-icon" />
              Download PDF
            </a>
            <a className="resume-action-btn secondary" href={resumePdf} target="_blank" rel="noopener noreferrer">
              View in Browser
            </a>
          </div>
        </div>
      )}

      {page === 'projects' && (
        <div className="projects-page">
          <div className="about-content">
            <h1>Projects</h1>
            <p><em>Coming Soon!</em></p>
          </div>
        </div>
      )}

      {page === 'contact' && (
        <div className="contact-page">
          <div className="about-content">
            <ResumeIntro />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
