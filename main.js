const FILL_1 = '#4e3da8';
const FILL_2 = '#3d2f8a';
const STROKE = '#7c6fd4';

// Iconos //

const icons = {
  cuadrado: `<svg class="shape-svg" viewBox="0 0 48 48" fill="none"><rect x="6" y="6" width="36" height="36" rx="2" stroke="${STROKE}" stroke-width="2.2" fill="${FILL_1}"/></svg>`,
  rectangulo: `<svg class="shape-svg" viewBox="0 0 48 48" fill="none"><rect x="4" y="12" width="40" height="24" rx="2" stroke="${STROKE}" stroke-width="2.2" fill="${FILL_1}"/></svg>`,
  triangulo: `<svg class="shape-svg" viewBox="0 0 48 48" fill="none"><polygon points="24,5 44,43 4,43" stroke="${STROKE}" stroke-width="2.2" fill="${FILL_1}" stroke-linejoin="round"/></svg>`,
  circulo: `<svg class="shape-svg" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="19" stroke="${STROKE}" stroke-width="2.2" fill="${FILL_1}"/></svg>`,
  cubo: `<svg class="shape-svg" viewBox="0 0 48 48" fill="none"><polygon points="8,14 24,6 40,14 40,34 24,42 8,34" stroke="${STROKE}" stroke-width="2" fill="${FILL_1}"/><line x1="24" y1="6" x2="24" y2="26" stroke="${STROKE}" stroke-width="1.5"/><line x1="8" y1="14" x2="24" y2="26" stroke="${STROKE}" stroke-width="1.5"/><line x1="40" y1="14" x2="24" y2="26" stroke="${STROKE}" stroke-width="1.5"/></svg>`,
  prisma: `<svg class="shape-svg" viewBox="0 0 48 48" fill="none"><polygon points="4,18 20,10 44,16 44,36 28,44 4,38" stroke="${STROKE}" stroke-width="2" fill="${FILL_1}"/><line x1="4" y1="18" x2="28" y2="22" stroke="${STROKE}" stroke-width="1.5" stroke-dasharray="3,2"/><line x1="20" y1="10" x2="28" y2="22" stroke="${STROKE}" stroke-width="1.5" stroke-dasharray="3,2"/><line x1="28" y1="22" x2="44" y2="16" stroke="${STROKE}" stroke-width="1.5" stroke-dasharray="3,2"/><line x1="28" y1="22" x2="28" y2="44" stroke="${STROKE}" stroke-width="1.5" stroke-dasharray="3,2"/></svg>`,
  cilindro: `<svg class="shape-svg" viewBox="0 0 48 48" fill="none"><ellipse cx="24" cy="13" rx="17" ry="6" stroke="${STROKE}" stroke-width="2" fill="${FILL_1}"/><rect x="7" y="13" width="34" height="22" fill="${FILL_1}"/><ellipse cx="24" cy="35" rx="17" ry="6" stroke="${STROKE}" stroke-width="2" fill="${FILL_2}"/><line x1="7" y1="13" x2="7" y2="35" stroke="${STROKE}" stroke-width="2"/><line x1="41" y1="13" x2="41" y2="35" stroke="${STROKE}" stroke-width="2"/></svg>`,
  piramide: `<svg class="shape-svg" viewBox="0 0 48 48" fill="none"><polygon points="24,4 44,38 4,38" stroke="${STROKE}" stroke-width="2" fill="${FILL_1}"/><polygon points="24,4 44,38 36,44 16,44 4,38" stroke="${STROKE}" stroke-width="2" fill="${FILL_2}"/><line x1="24" y1="4" x2="30" y2="44" stroke="${STROKE}" stroke-width="1.5" stroke-dasharray="3,2"/></svg>`,
  cono: `<svg class="shape-svg" viewBox="0 0 48 48" fill="none"><polygon points="24,4 6,40 42,40" stroke="${STROKE}" stroke-width="2" fill="${FILL_1}"/><ellipse cx="24" cy="40" rx="18" ry="5" stroke="${STROKE}" stroke-width="2" fill="${FILL_2}"/></svg>`,
  esfera: `<svg class="shape-svg" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="19" stroke="${STROKE}" stroke-width="2" fill="${FILL_1}"/><ellipse cx="24" cy="24" rx="19" ry="7" stroke="${STROKE}" stroke-width="1.5" stroke-dasharray="3,2" fill="none"/><path d="M24,5 Q33,24 24,43" stroke="${STROKE}" stroke-width="1.5" stroke-dasharray="3,2" fill="none"/><path d="M24,5 Q15,24 24,43" stroke="${STROKE}" stroke-width="1.5" fill="none"/></svg>`,
};

// Configuración de figuras //

const flatConfig = {
  cuadrado: {
    inputs: [{ id: 'a', label: 'Lado (a)' }],
    formula: 'A = a²  |  P = 4a',
  },
  rectangulo: {
    inputs: [{ id: 'b', label: 'Base (b)' }, { id: 'h', label: 'Altura (h)' }],
    formula: 'A = b × h  |  P = 2(b + h)',
  },
  triangulo: {
    inputs: [{ id: 'b', label: 'Base (b)' }, { id: 'h', label: 'Altura (h)' }, { id: 'l1', label: 'Lado 1' }, { id: 'l2', label: 'Lado 2' }, { id: 'l3', label: 'Lado 3' }],
    formula: 'A = (b × h) / 2  |  P = l₁ + l₂ + l₃',
  },
  circulo: {
    inputs: [{ id: 'r', label: 'Radio (r)' }],
    formula: 'A = π r²  |  P = 2πr',
  },
};

const solidConfig = {
  cubo: {
    inputs: [
      { id: 'a', label: 'Arista (a)' }
    ], formula: 'V = a³'
  },
  prisma: {
    inputs: [
      { id: 'l', label: 'Largo (l)' },
      { id: 'an', label: 'Ancho (a)' },
      { id: 'h', label: 'Alto (h)' }
    ], formula: 'V = l × a × h'
  },
  cilindro: {
    inputs: [
      { id: 'r', label: 'Radio (r)' },
      { id: 'h', label: 'Altura (h)' }
    ], formula: 'V = π r² h'
  },
  piramide: {
    inputs: [
      { id: 'b', label: 'Base (b)' },
      { id: 'an', label: 'Ancho (a)' },
      { id: 'h', label: 'Altura (h)' }
    ], formula: 'V = (b × a × h) / 3'
  },
  cono: {
    inputs: [
      { id: 'r', label: 'Radio (r)' },
      { id: 'h', label: 'Altura (h)' }
    ], formula: 'V = (π r² h) / 3'
  },
  esfera: {
    inputs: [
      { id: 'r', label: 'Radio (r)' }
    ], formula: 'V = (4/3) π r³'
  },
};


const calculators = {
  // Área y perímetro de figuras planas
  cuadrado(a) {
    if (!a) return null;
    return [
      { label: 'Área', value: formatNum(a ** 2) },
      { label: 'Perímetro', value: formatNum(4 * a) },
    ];
  },
  rectangulo(b, h) {
    if (!b || !h) return null;
    return [
      { label: 'Área', value: formatNum(b * h) },
      { label: 'Perímetro', value: formatNum(2 * (b + h)) },
    ];
  },
  triangulo(b, h, l1, l2, l3) {
    if (!b || !h || !l1 || !l2 || !l3) return null;
    return [
      { label: 'Área', value: formatNum((b * h) / 2) },
      { label: 'Perímetro', value: formatNum(l1 + l2 + l3) },
    ];
  },
  circulo(r) {
    if (!r) return null;
    return [
      { label: 'Área', value: formatNum(Math.PI * r ** 2) },
      { label: 'Perímetro', value: formatNum(2 * Math.PI * r) },
    ];
  },

  // Volumen sólidos
  cubo(a) {
    if (!a) return null;
    return [{ label: 'Volumen', value: formatNum(a ** 3) }];
  },
  prisma(l, an, h) {
    if (!l || !an || !h) return null;
    return [{ label: 'Volumen', value: formatNum(l * an * h) }];
  },
  cilindro(r, h) {
    if (!r || !h) return null;
    return [{ label: 'Volumen', value: formatNum(Math.PI * r ** 2 * h) }];
  },
  piramide(b, an, h) {
    if (!b || !an || !h) return null;
    return [{ label: 'Volumen', value: formatNum((b * an * h) / 3) }];
  },
  cono(r, h) {
    if (!r || !h) return null;
    return [{ label: 'Volumen', value: formatNum((Math.PI * r ** 2 * h) / 3) }];
  },
  esfera(r) {
    if (!r) return null;
    return [{ label: 'Volumen', value: formatNum((4 / 3) * Math.PI * r ** 3) }];
  },
};


function getInputValues(id) {
  const number = parseFloat(document.getElementById(`inp-${id}`)?.value);
  return isNaN(number) || number <= 0 ? null : number;
}

function formatNum(n) {
  return parseFloat(n.toFixed(2)).toLocaleString('es');
}

// Render y cálculo //

function makeInputs(containerId, config, iconId, tipo) {
  console.log('containerId :', containerId);
  document.getElementById(iconId).innerHTML = icons[tipo];
  document.getElementById(containerId).innerHTML = config.inputs
    .map(i => `<div class="field" style="margin-bottom:0">
                 <label>${i.label}</label>
                 <input type="number" id="inp-${i.id}" min="0" step="any" placeholder="0"/>
               </div>`)
    .join('');
}

function showResults(containerId, hintId, items, hint) {
  document.getElementById(hintId).textContent = hint;
  const el = document.getElementById(containerId);

  if (!items) {
    el.innerHTML = `<p class="err">Por favor ingresa valores válidos y positivos.</p>`;
    return;
  }

  el.innerHTML = `<div class="results">
    ${items.map(i => `
      <div class="result-card">
        <div class="result-label">${i.label}</div>
        <div class="result-value">${i.value}</div>
      </div>`).join('')}
  </div>`;
}

function calcFlat() {
  const shape = document.getElementById('sel-flat').value;
  const config = flatConfig[shape];
  console.log('config :', config);
  const calc = calculators[shape];
  console.log('calc :', calc);
  const ids = config.inputs.map(i => getInputValues(i.id));
  console.log('ids :', ids);
  showResults('res-flat', 'hint-flat', calc(...ids), config.formula);
}

function calcSolid() {
  const shape = document.getElementById('sel-solid').value;
  const config = solidConfig[shape];
  const calc = calculators[shape];
  const ids = config.inputs.map(i => getInputValues(i.id));
  showResults('res-solid', 'hint-solid', calc(...ids), config.formula);
}

function renderFlat() {
  const shape = document.getElementById('sel-flat').value;
  document.getElementById('res-flat').innerHTML = '';
  document.getElementById('hint-flat').textContent = '';
  makeInputs('inputs-flat', flatConfig[shape], 'icon-flat', shape);
}

function renderSolid() {
  const shape = document.getElementById('sel-solid').value;
  document.getElementById('res-solid').innerHTML = '';
  document.getElementById('hint-solid').textContent = '';
  makeInputs('inputs-solid', solidConfig[shape], 'icon-solid', shape);
}

function switchTab(tab, btn) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('section-flat').style.display = tab === 'flat' ? 'block' : 'none';
  document.getElementById('section-solids').style.display = tab === 'solids' ? 'block' : 'none';
}

const formFlat = document.getElementById('section-flat');
const formSolid = document.getElementById('section-solids');

formFlat.addEventListener('submit', e => {
  e.preventDefault();
  calcFlat();
});

formSolid.addEventListener('submit', e => {
  e.preventDefault();
  calcSolid();
});

renderFlat();
renderSolid();