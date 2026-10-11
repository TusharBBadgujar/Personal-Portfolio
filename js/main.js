import { Navbar } from '../components/navbar.js';
import { Hero } from '../components/hero.js';
import { About } from '../components/about.js';
import { Projects } from '../components/project.js';
import { Contact } from '../components/contact.js';
import { Footer } from '../components/footer.js';

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const hero = document.getElementById('hero');
  const about = document.getElementById('about');
  const projects = document.getElementById('projects');
  const contact = document.getElementById('contact');
  const footer = document.getElementById('footer');

  if (navbar) navbar.innerHTML = Navbar();
  if (hero) hero.innerHTML = Hero();
  if (about) about.innerHTML = About();
  if (projects) projects.innerHTML = Projects();
  if (contact) contact.innerHTML = Contact();
  if (footer) footer.innerHTML = Footer();
});
