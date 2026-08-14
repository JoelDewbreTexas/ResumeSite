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
          <h1>About</h1>
          <p>This is the About page</p>
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

      {page === 'projects' && (
        <div className="projects-page">
          <h1>Projects</h1>
          <p>Projects will go here.</p>
        </div>
      )}

      {page === 'contact' && (
        <div className="contact-page">
          <h1>Contact</h1>
          <p>Contact info will go here.</p>
        </div>
      )}
    </div>
  )
}

export default App
