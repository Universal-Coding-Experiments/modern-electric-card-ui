
const turbFreq = document.getElementById('turb-freq');
const dispMap = document.getElementById('disp-map');
const root = document.querySelector(':root');

// Drawer Logic
const drawer = document.getElementById('settings-drawer');
const openBtn = document.getElementById('drawer-toggle');
const closeBtn = document.getElementById('close-drawer');

openBtn.addEventListener('click', () => {
  drawer.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  drawer.classList.remove('open');
});

// Sliders
const freqSlider = document.getElementById('freq-slider');
const scaleSlider = document.getElementById('scale-slider');
const colorPicker = document.getElementById('color-picker');
const glowSlider = document.getElementById('glow-slider');
const radiusSlider = document.getElementById('radius-slider');

// Values
const freqVal = document.getElementById('freq-val');
const scaleVal = document.getElementById('scale-val');
const glowVal = document.getElementById('glow-val');
const radiusVal = document.getElementById('radius-val');

freqSlider.addEventListener('input', (e) => {
  const val = e.target.value;
  turbFreq.setAttribute('baseFrequency', val);
  freqVal.textContent = val;
});

scaleSlider.addEventListener('input', (e) => {
  const val = e.target.value;
  dispMap.setAttribute('scale', val);
  scaleVal.textContent = val;
});

colorPicker.addEventListener('input', (e) => {
  root.style.setProperty('--electric-border-color', e.target.value);
});

glowSlider.addEventListener('input', (e) => {
  const val = e.target.value;
  root.style.setProperty('--glow-opacity', val / 100);
  glowVal.textContent = val + '%';
});

radiusSlider.addEventListener('input', (e) => {
  const val = e.target.value + 'px';
  root.style.setProperty('--card-radius', val);
  radiusVal.textContent = val;
});

document.getElementById('reset-btn').addEventListener('click', () => {
  freqSlider.value = 0.02;
  scaleSlider.value = 30;
  colorPicker.value = '#006aff';
  glowSlider.value = 100;
  radiusSlider.value = 24;

  // Trigger updates
  freqSlider.dispatchEvent(new Event('input'));
  scaleSlider.dispatchEvent(new Event('input'));
  colorPicker.dispatchEvent(new Event('input'));
  glowSlider.dispatchEvent(new Event('input'));
  radiusSlider.dispatchEvent(new Event('input'));
});
