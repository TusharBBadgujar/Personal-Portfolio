export function Feedback() {
  return `
    <section id="feedback" class="section feedback-section" aria-labelledby="feedback-title">
      <div class="section-heading">
        <p class="section-kicker">Feedback</p>
        <h2 id="feedback-title">Teacher and mentor reflections.</h2>
        <p class="about-copy">This section is open for teachers, mentors, or guides to share their honest opinion about my progress, strengths, and areas of improvement.</p>
      </div>

      <div class="feedback-board">
        <form id="feedback-form" class="feedback-form">
          <div class="feedback-form-header">
            <h3>Share your feedback</h3>
            <p>Tell me what you appreciate and what I should improve.</p>
          </div>

          <div class="feedback-fields">
            <label>
              <span>Name</span>
              <input type="text" name="name" placeholder="Enter teacher or mentor name" required />
            </label>

            <label>
              <span>Role</span>
              <input type="text" name="role" placeholder="Class Teacher / Mentor / Guide" required />
            </label>

            <label>
              <span>Profile image</span>
              <input type="file" name="image" accept="image/*" />
            </label>

            <label>
              <span>Rating</span>
              <select name="rating" aria-label="Select rating">
                <option value="5">5 - Excellent</option>
                <option value="4">4 - Very Good</option>
                <option value="3">3 - Good</option>
                <option value="2">2 - Fair</option>
                <option value="1">1 - Needs Improvement</option>
              </select>
            </label>

            <label class="full-width">
              <span>What I do well</span>
              <textarea name="good" rows="4" placeholder="Mention strengths, skills, attitude, or positive behavior..." required></textarea>
            </label>

            <label class="full-width">
              <span>What I can improve</span>
              <textarea name="bad" rows="4" placeholder="Share honest feedback about areas to improve..." required></textarea>
            </label>
          </div>

          <button type="submit" class="btn">Submit feedback</button>
        </form>

        <div class="feedback-list" id="feedback-list" aria-live="polite"></div>
      </div>
    </section>
  `;
}
