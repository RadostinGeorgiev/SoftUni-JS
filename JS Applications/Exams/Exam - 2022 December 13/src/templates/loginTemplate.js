import { html } from '../lib.js';

export const loginTemplate = (loginHandler) => html`
        <!-- Login Page (Only for Guest users) -->
        <section id="login">
          <div class="form">
            <h2>Login</h2>
            <form @submit=${loginHandler} class="login-form">
              <input type="text" name="email" id="email" placeholder="email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <button type="submit">login</button>
              <p class="message">
                Not registered? <a href="/register">Create an account</a>
              </p>
            </form>
          </div>
        </section>
`;