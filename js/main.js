import { Navbar } from '../components/navbar.js';
import { Hero } from '../components/hero.js';
import { About } from '../components/about.js';
import { Projects } from '../components/projects.js';
import { Contact } from '../components/contact.js';
import { Footer } from '../components/footer.js';

document.getElementById('navbar').innerHTML = Navbar();
document.getElementById('hero').innerHTML = Hero();
document.getElementById('about').innerHTML = About();
document.getElementById('projects').innerHTML = Projects();
document.getElementById('contact').innerHTML = Contact();
document.getElementById('footer').innerHTML = Footer();
