export function Projects() {
  return `
    <section id="projects" class="section" aria-labelledby="projects-title">
      <div class="section-heading">
        <p class="section-kicker">Selected work</p>
        <h2 id="projects-title">Things I’ve been building.</h2>
      </div>
      <div class="projects">
        <div class="card">
          <span class="card-index">01 / WEB DEVELOPMENT</span>
          <h3>Institute Website</h3>
          <p>A MEAN stack application featuring user authentication and an admin panel.</p>
          <a class="card-link" href="https://github.com/TusharBBadgujar/MajorProjectMean" target="_blank" rel="noopener noreferrer">View project <span aria-hidden="true">↗</span></a>
        </div>
        <div class="card">
          <span class="card-index">02 / OPEN SOURCE</span>
          <h3>More on GitHub</h3>
          <p>Explore additional projects, experiments, and contributions on my GitHub profile.</p>
          <a class="card-link" href="https://github.com/TusharBBadgujar" target="_blank" rel="noopener noreferrer">Visit my profile <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  `;
}
