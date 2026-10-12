import { Navbar } from '../components/navbar.js';
import { Hero } from '../components/hero.js';
import { About } from '../components/about.js';
import { Projects } from '../components/project.js';
import { Feedback } from '../components/feedback.js';
import { Contact } from '../components/contact.js';
import { Footer } from '../components/footer.js';

function setupFeedbackForm() {
  const form = document.getElementById('feedback-form');
  const list = document.getElementById('feedback-list');

  if (!form || !list) return;

  const defaultAvatar = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80';

  const createFeedbackCard = (entry) => {
    const article = document.createElement('article');
    article.className = 'feedback-card';

    const stars = '★'.repeat(Number(entry.rating)) + '☆'.repeat(5 - Number(entry.rating));
    const goodPoints = entry.good
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean)
      .slice(0, 3)
      .map((item) => `<span>${item}</span>`)
      .join('');

    article.innerHTML = `
      <div class="feedback-header">
        <img class="feedback-avatar" src="${entry.image || defaultAvatar}" alt="${entry.role} profile" />
        <div class="feedback-meta">
          <p class="feedback-role">${entry.role}</p>
          <h3>${entry.name}</h3>
        </div>
      </div>
      <div class="feedback-stars" aria-label="${entry.rating} out of 5 stars">${stars}</div>
      <div class="feedback-section-copy">
        <strong>What I do well:</strong>
        <p>${entry.good}</p>
      </div>
      <div class="feedback-section-copy">
        <strong>What I can improve:</strong>
        <p>${entry.bad}</p>
      </div>
      <div class="feedback-badges">${goodPoints || '<span>Honest feedback</span>'}</div>
    `;

    return article;
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const selectedFile = formData.get('image');
    const entry = {
      name: formData.get('name')?.toString().trim() || 'Anonymous',
      role: formData.get('role')?.toString().trim() || 'Mentor',
      rating: formData.get('rating')?.toString() || '5',
      good: formData.get('good')?.toString().trim() || 'Strong effort and willingness to improve.',
      bad: formData.get('bad')?.toString().trim() || 'Keep building confidence and consistency.',
      image: selectedFile && selectedFile instanceof File && selectedFile.size > 0 ? URL.createObjectURL(selectedFile) : defaultAvatar,
    };

    list.prepend(createFeedbackCard(entry));
    form.reset();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const hero = document.getElementById('hero');
  const about = document.getElementById('about');
  const projects = document.getElementById('projects');
  const feedback = document.getElementById('feedback');
  const contact = document.getElementById('contact');
  const footer = document.getElementById('footer');

  if (navbar) navbar.innerHTML = Navbar();
  if (hero) hero.innerHTML = Hero();
  if (about) about.innerHTML = About();
  if (projects) projects.innerHTML = Projects();
  if (feedback) feedback.innerHTML = Feedback();
  if (contact) contact.innerHTML = Contact();
  if (footer) footer.innerHTML = Footer();

  setupFeedbackForm();
});
