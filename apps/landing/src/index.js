import { createApp } from 'vue';
import App from './App.vue';


console.log('Landing running!!!')

const renderLanding = (el) => {
  const app = createApp(App);
  // el.innerHTML = '<h1> Landing Page working </h1>'
  app.mount(el)
}

if (process.env.NODE_ENV === 'development') {
  const rootElement = document.getElementById('landingApp');
  if(rootElement) {
    console.log(rootElement)
    renderLanding(rootElement);
  }
}

export { renderLanding };
