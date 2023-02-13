console.log('Landing running!!!')

const renderLanding = (el) => {
  el.innerHTML = '<h1> Landing Page working </h1>'
}

if (process.env.NODE_ENV === 'development') {
  const rootElement = document.getElementById('landingApp');
  if(rootElement) {
    renderLanding(rootElement);
  }
}

export { renderLanding };
