import './style.css'
import {
  projects,
  techStack,
  MARQUEE_TECH,
  social,
  nowBuilding,
  courses,
  certifications,
  hobbies,
  activeWork,
} from './data.js'

const GITHUB_ICON =
  '<path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.91 0 1.38-.01 2.49-.01 2.83 0 .27.18.6.69.49A10.25 10.25 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"/>'

const TECH_ICONS = {
  code: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
  atom: '<path d="M12 12v.01"></path><path d="M19.07 4.93a10 10 0 0 0-14.14 0c-1.81 1.81-2.35 4.06-1.42 6.61.93 2.55 3.01 5.01 6.61 6.61 3.6 1.6 5.86 1.06 7.67-.75a10 10 0 0 0 0-14.14z"></path><path d="M12 12a3.14 3.14 0 0 1-.77 2.6 2.51 2.51 0 0 1-3.55.04 2.51 2.51 0 0 1 .04-3.55A3.14 3.14 0 0 1 12 12z"></path>',
  flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>',
  activity: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',
  trending: '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',
  bar: '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',
  braces: '<path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"></path><path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"></path>',
  dashboard: '<rect x="3" y="3" width="7" height="9"></rect><rect x="14" y="3" width="7" height="5"></rect><rect x="14" y="12" width="7" height="9"></rect><rect x="3" y="16" width="7" height="5"></rect>',
  branch: '<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>',
  terminal: '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',
  monitor: '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',
  apple: '<path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06z"></path>',
}

function loadProjects() {
  const grid = document.getElementById('projectsGrid')
  if (!grid) return

  grid.innerHTML = projects
    .map(
      (project, index) => `
      <article class="reveal card card-hover tilt p-6 flex flex-col" data-delay="${(index % 3) * 90}">
        <div class="relative h-36 bg-gradient-to-br ${project.gradient} rounded-xl mb-5 overflow-hidden border border-white/10">
          ${project.image ? `<img src="${project.image}" alt="${project.name}" class="w-full h-full object-cover" loading="lazy" decoding="async" onerror="this.style.display='none'">` : ''}
        </div>
        <h3 class="font-display text-2xl font-semibold mb-1.5">${project.name}</h3>
        <p class="text-primary-deep text-xs mb-3">${project.period}</p>
        ${project.fest ? `<p class="text-[11px] font-medium text-accent mb-3 flex items-center gap-1.5"><span aria-hidden="true">🎪</span>${project.fest}</p>` : ''}
        <p class="text-sm text-ink-soft mb-4 leading-relaxed flex-1">${project.description}</p>
        <div class="flex flex-wrap gap-2 mb-4">
          ${project.tags.map((tag) => `<span class="px-3 py-1 bg-ink/5 rounded-full text-xs font-medium text-ink-soft">${tag}</span>`).join('')}
        </div>
        <div class="flex flex-wrap gap-2">
          ${project.viewUrl ? `<a href="${project.viewUrl}" target="_blank" rel="noopener" class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-deep transition text-sm font-medium">View Project →</a>` : ''}
          ${project.viewLink ? `<a href="${project.viewLink}" target="_blank" rel="noopener" class="px-4 py-2 bg-ink/5 text-ink rounded-lg hover:bg-ink/10 transition text-sm font-medium">Live Demo →</a>` : ''}
          ${project.github && project.github !== '[EDIT]' ? `<a href="${project.github}" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 px-4 py-2 border border-white/15 text-ink rounded-lg hover:border-accent hover:text-accent transition text-sm font-medium"><svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4" aria-hidden="true">${GITHUB_ICON}</svg><span>Code</span></a>` : ''}
        </div>
      </article>`,
    )
    .join('')

  observeReveals(grid.querySelectorAll('.reveal'))
}

/* ---------- Active work (current projects in progress) ---------- */
const ACTIVE_STATUS_STYLES = {
  learning: 'bg-sky-500/10 text-sky-300 border-sky-500/30',
  building: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
  exploring: 'bg-primary-soft text-primary border-primary/30',
}

function loadActiveWork() {
  if (!activeWork.length) return

  const projectsSection = document.getElementById('projects')
  if (!projectsSection) return

  const section = document.createElement('section')
  section.id = 'active-work'
  section.className = 'py-20 lg:py-28 bg-base-2 border-y border-white/5'

  const grid = activeWork
    .map(
      (item, i) => `
      <div class="reveal rounded-2xl p-6 bg-white/[0.03] border border-white/10 hover:border-white/20 transition flex flex-col" data-delay="${(i % 2) * 100}">
        <div class="flex items-center justify-between gap-3 mb-3">
          <h3 class="font-display text-xl font-semibold">${item.project}</h3>
          <span class="px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide border whitespace-nowrap ${ACTIVE_STATUS_STYLES[item.status] || ACTIVE_STATUS_STYLES.exploring}">${item.status}</span>
        </div>
        <p class="text-sm text-ink-soft leading-relaxed flex-1">${item.update}</p>
        <div class="flex items-center justify-between gap-3 mt-4 pt-4 border-t border-white/10">
          <span class="font-mono text-sm text-ink-faint">${item.date}</span>
          ${item.link ? `<a href="${item.link}" target="_blank" rel="noopener" class="px-4 py-2 bg-ink/5 text-ink rounded-lg hover:bg-ink/10 transition text-sm font-medium">View Repo →</a>` : ''}
        </div>
      </div>`,
    )
    .join('')

  section.innerHTML = `
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16 reveal">
        <p class="font-mono text-sm tracking-widest text-accent uppercase mb-4">in progress · work in motion</p>
        <h2 class="font-display text-4xl lg:text-5xl font-semibold tracking-tight mb-4">What I'm Building Now</h2>
        <p class="text-xl text-ink-soft">Live progress on my current projects</p>
      </div>
      <div class="grid sm:grid-cols-2 gap-5">${grid}</div>
    </div>`

  projectsSection.after(section)
  observeReveals(section.querySelectorAll('.reveal'))
}

function loadTechGrid() {
  const grid = document.getElementById('techGrid')
  if (!grid) return

  grid.innerHTML = techStack
    .map(
      (tech, i) => `
      <li class="card card-hover tilt rounded-xl p-4 text-center" data-delay="${(i % 4) * 70}">
        <div class="w-12 h-12 mx-auto mb-2 rounded-xl bg-white/5 flex items-center justify-center text-ink-soft" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">${TECH_ICONS[tech.icon] || ''}</svg>
        </div>
        <div class="text-sm font-medium text-ink-soft">${tech.name}</div>
      </li>`,
    )
    .join('')
}

let statsAnimated = false
function animateStats() {
  if (statsAnimated) return
  statsAnimated = true

  document.querySelectorAll('.stat-number').forEach((stat) => {
    const target = parseInt(stat.dataset.target, 10)
    if (Number.isNaN(target)) return

    const duration = 1200
    const start = performance.now()

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      stat.textContent = Math.round(target * eased)
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  })
}

function fillSkillBars() {
  document.querySelectorAll('.skill-fill[data-level]').forEach((bar) => {
    if (bar.dataset.filled) return
    bar.style.width = `${bar.dataset.level}%`
    bar.dataset.filled = 'true'
  })
}

let revealObserver = null
function observeReveals(nodes) {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target
            el.classList.add('is-visible')
            if (el.dataset.delay) {
              setTimeout(() => {
                el.style.transitionDelay = ''
              }, 900)
            }
            revealObserver.unobserve(el)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
  }
  nodes.forEach((node) => {
    if (node.dataset.delay) node.style.transitionDelay = `${node.dataset.delay}ms`
    revealObserver.observe(node)
  })
}

function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]')
  const navLinks = document.querySelectorAll('.nav-link')

  const spyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        navLinks.forEach((link) => {
          const active = link.getAttribute('href') === `#${entry.target.id}`
          link.classList.toggle('text-ink', active)
          link.classList.toggle('text-ink-soft', !active)
          if (active) link.setAttribute('aria-current', 'true')
          else link.removeAttribute('aria-current')
        })
      })
    },
    { rootMargin: '-35% 0px -60% 0px' },
  )

  sections.forEach((section) => spyObserver.observe(section))
}

function initMobileMenu() {
  const menu = document.getElementById('mobileMenu')
  const openBtn = document.getElementById('mobileMenuBtn')
  const closeBtn = document.getElementById('closeMobileMenu')

  function setOpen(open) {
    menu.classList.toggle('translate-x-full', !open)
    openBtn.setAttribute('aria-expanded', String(open))
    openBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
    document.body.style.overflow = open ? 'hidden' : ''
  }

  openBtn.addEventListener('click', () => setOpen(true))
  closeBtn.addEventListener('click', () => setOpen(false))
  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setOpen(false)))
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false)
  })
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href')
      if (id.length < 2) return
      const target = document.querySelector(id)
      if (!target) return
      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  })
}

const HERO_LINE = 'λ x. model(x) → insight'
function typeLambdaLine() {
  const el = document.getElementById('heroLine')
  if (!el) return

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion) {
    el.textContent = HERO_LINE
    return
  }

  let i = 0
  function tick() {
    if (i <= HERO_LINE.length) {
      el.textContent = HERO_LINE.slice(0, i)
      i++
      setTimeout(tick, 50)
    }
  }
  tick()
}

const HERO_ROLES = ['Statistical Models', 'Machine Learning', 'Data Analysis', 'Deep Learning']
function typeHeroLine() {
  const el = document.getElementById('heroType')
  if (!el) return

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion) {
    el.textContent = 'I work on ' + HERO_ROLES[0]
    return
  }

  const PREFIX = 'I work on '
  let roleIdx = 0
  let pos = 0
  let phase = 'prefix'

  const t = (ms) => setTimeout(step, ms)

  function step() {
    const word = HERO_ROLES[roleIdx]
    if (phase === 'prefix') {
      if (pos < PREFIX.length - 1) {
        pos++
        el.textContent = PREFIX.slice(0, pos)
        t(60)
      } else {
        el.textContent = PREFIX
        pos = 0
        phase = 'typing'
        t(450)
      }
    } else if (phase === 'typing') {
      if (pos < word.length) {
        pos++
        el.textContent = PREFIX + word.slice(0, pos)
        t(70)
      } else {
        phase = 'hold'
        t(1900)
      }
    } else if (phase === 'hold') {
      phase = 'deleting'
      t(350)
    } else if (phase === 'deleting') {
      if (pos > 0) {
        pos--
        el.textContent = PREFIX + word.slice(0, pos)
        t(34)
      } else {
        roleIdx = (roleIdx + 1) % HERO_ROLES.length
        phase = 'typing'
        t(550)
      }
    }
  }

  step()
}

const MATH_SYMBOLS = ['π', 'Σ', '∫', '∇', '∂', 'λ', '√', '∞', 'θ', 'Δ', 'Φ', 'ε', 'α', 'β', '{', '}', '(', ')', ';', '<', '>', '/', '=', '&']
function createMathSymbols() {
  const container = document.getElementById('mathSymbols')
  if (!container) return

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  MATH_SYMBOLS.forEach((symbol, i) => {
    const span = document.createElement('span')
    span.className = 'math-symbol'
    span.textContent = symbol
    span.style.left = `${8 + (i * 137) % 84}%`
    span.style.top = `${12 + (i * 53) % 70}%`
    span.style.fontSize = `${22 + (i % 4) * 12}px`
    span.style.animationDelay = `${(i % 7) * 0.9}s`
    if (reduceMotion) span.style.animation = 'none'
    container.appendChild(span)
  })
}

/* ---------- Scroll progress bar ---------- */
function initScrollProgress() {
  const bar = document.getElementById('scrollProgress')
  if (!bar) return

  let ticking = false
  const update = () => {
    const doc = document.documentElement
    const max = doc.scrollHeight - window.innerHeight
    bar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`
    ticking = false
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      ticking = true
      requestAnimationFrame(update)
    }
  }, { passive: true })
  update()
}

/* ---------- Animated terminal ---------- */
const TERMINAL_LINES = [
  [{ t: '# Ananyo Sen · M.Sc Data Science & AI', c: 'tok-com' }],
  [],
  [
    { t: 'import ', c: 'tok-kw' },
    { t: 'math', c: '' },
    { t: ', ', c: '' },
    { t: 'torch', c: '' },
    { t: ' as ', c: 'tok-kw' },
    { t: 'nn', c: '' },
  ],
  [],
  [
    { t: 'def ', c: 'tok-kw' },
    { t: 'build', c: 'tok-fn' },
    { t: '(model, data):', c: '' },
  ],
  [
    { t: '    ', c: '' },
    { t: 'theory', c: '' },
    { t: ' = ', c: '' },
    { t: 'math', c: '' },
    { t: '.', c: '' },
    { t: 'justify', c: 'tok-fn' },
    { t: '(model)', c: '' },
  ],
  [
    { t: '    ', c: '' },
    { t: 'insight', c: '' },
    { t: ' = ', c: '' },
    { t: 'data', c: '' },
    { t: '.', c: '' },
    { t: 'learn', c: 'tok-fn' },
    { t: '(theory)', c: '' },
  ],
  [
    { t: '    ', c: '' },
    { t: 'return', c: 'tok-kw' },
    { t: ' insight', c: '' },
  ],
  [],
  [
    { t: '>>> ', c: 'tok-prom' },
    { t: 'build', c: 'tok-fn' },
    { t: '(ml, curiosity)', c: '' },
  ],
  [
    { t: '→ ', c: 'tok-prom' },
    { t: '7 projects · 12 technologies · building what I learn', c: 'tok-dim' },
  ],
]

function initTerminal() {
  const code = document.getElementById('terminalCode')
  if (!code) return

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const portrait = document.getElementById('portraitReveal')
  const scanline = document.getElementById('portraitScanline')

  function playPortraitScan() {
    if (!portrait) return
    portrait.style.clipPath = 'inset(0 0 100% 0)'
    portrait.style.transition = 'none'
    void portrait.offsetWidth
    portrait.style.transition = 'clip-path 1.1s cubic-bezier(0.22, 1, 0.36, 1)'
    portrait.style.clipPath = ''
    if (scanline) {
      scanline.style.transition = 'none'
      scanline.style.top = '0%'
      scanline.classList.add('portrait-scanning')
      void scanline.offsetWidth
      scanline.style.transition = 'top 1.1s cubic-bezier(0.22, 1, 0.36, 1)'
      scanline.style.top = '100%'
    }
    setTimeout(() => {
      if (portrait) portrait.style.transition = ''
      if (scanline) {
        scanline.classList.remove('portrait-scanning')
        scanline.style.top = '0'
      }
    }, 1250)
  }

  const lines = TERMINAL_LINES.map((chunks, i) => {
    const row = document.createElement('div')
    row.className = 'terminal-line'
    const no = document.createElement('span')
    no.className = 'terminal-lineno'
    no.textContent = String(i + 1).padStart(2, '0')
    const content = document.createElement('span')
    content.className = 'terminal-content'
    row.appendChild(no)
    row.appendChild(content)
    code.appendChild(row)
    return { chunks, content }
  })

  if (reduceMotion) {
    lines.forEach(({ chunks, content }) => {
      chunks.forEach(({ t, c }) => {
        const span = document.createElement('span')
        if (c) span.className = c
        span.textContent = t
        content.appendChild(span)
      })
    })
    return
  }

  playPortraitScan()

  const queue = []
  lines.forEach(({ chunks, content }) => {
    chunks.forEach((chunk) => queue.push({ ...chunk, content }))
    queue.push({ newline: true, content })
  })

  const caret = document.createElement('span')
  caret.className = 'terminal-caret'
  caret.setAttribute('aria-hidden', 'true')

  let qi = 0
  let current = null

  function moveCaret(el) {
    caret.remove()
    el.appendChild(caret)
  }

  function type() {
    if (qi >= queue.length) return
    const item = queue[qi]

    if (item.newline) {
      qi++
      moveCaret(item.content)
      setTimeout(type, 300)
      return
    }

    if (!current || current._t !== item.t || current._c !== item.c || current.textContent.length >= item.t.length) {
      current = document.createElement('span')
      if (item.c) current.className = item.c
      current._t = item.t
      current._c = item.c
      item.content.appendChild(current)
      moveCaret(item.content)
    }

    current.textContent += item.t[current.textContent.length]
    if (current.textContent.length >= item.t.length) {
      qi++
      current = null
    }

    const wait = 26 + Math.random() * 44
    setTimeout(type, wait)
  }

  let started = false
  const start = () => {
    if (started) return
    started = true
    setTimeout(type, 400)
  }

  const io = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) start()
    },
    { threshold: 0.2 },
  )
  io.observe(code)
  setTimeout(start, 1500)
}

/* ---------- Tech marquee ---------- */
function buildMarquee() {
  const track = document.getElementById('marqueeTrack')
  if (!track) return

  const items = [...MARQUEE_TECH, ...MARQUEE_TECH].map(
    (name) => `
    <li class="marquee-item">
      <span>${name}</span>
      <span class="sep" aria-hidden="true">//</span>
    </li>`,
  )
  track.innerHTML = items.join('')
}

/* ---------- 3D tilt ---------- */
function initTilt() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion) return
  if (!window.matchMedia('(pointer: fine)').matches) return

  document.querySelectorAll('.tilt').forEach((card) => {
    let raf = null

    card.addEventListener('pointermove', (e) => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect()
        const px = (e.clientX - rect.left) / rect.width - 0.5
        const py = (e.clientY - rect.top) / rect.height - 0.5
        card.style.transition = 'transform 0.08s linear'
        card.style.transform = `translateY(-4px) perspective(900px) rotateX(${(-py * 7).toFixed(2)}deg) rotateY(${(px * 7).toFixed(2)}deg)`
        raf = null
      })
    })

    card.addEventListener('pointerleave', () => {
      card.style.transition = 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
      card.style.transform = ''
    })
  })
}

/* ---------- Social links ---------- */
function renderSocial() {
  const targets = document.querySelectorAll('[data-social]')
  const svg = {
    github: GITHUB_ICON,
    linkedin: '<path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.27 8.16h4.5V23H.27V8.16Zm7.36 0h4.31v2.03h.06c.6-1.14 2.07-2.34 4.27-2.34 4.56 0 5.4 3 5.4 6.91V23h-4.5v-7.3c0-1.74-.03-3.98-2.42-3.98-2.43 0-2.8 1.9-2.8 3.86V23H7.63V8.16Z"/>',
    mail: '<path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"/>',
    phone: '<path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z"/>',
  }

  targets.forEach((container) => {
    const compact = container.hasAttribute('data-social-compact')
    const items = (container.dataset.social || 'github,linkedin,mail')
      .split(',')
      .map((key) => {
        const url = key === 'mail' ? social.email : key === 'phone' ? social.phone : social[key]
        if (!url) return ''
        const label = key === 'mail' ? 'Email' : key === 'phone' ? 'Call' : key.charAt(0).toUpperCase() + key.slice(1)
        return `<a href="${key === 'mail' ? `mailto:${url}` : url}" target="${key === 'mail' ? '_self' : '_blank'}" rel="noopener" aria-label="${label}" class="${compact ? 'social-icon social-icon-sm' : 'social-icon'}">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${svg[key]}</svg>
          ${compact ? '' : `<span>${label}</span>`}
        </a>`
      })
      .join('')
    container.innerHTML = items
  })
}

/* ---------- Now building ---------- */
const STATUS_STYLES = {
  learning: 'bg-sky-500/10 text-sky-300 border-sky-500/30',
  building: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
  exploring: 'bg-primary-soft text-primary border-primary/30',
}

function loadNowBuilding() {
  const grid = document.getElementById('nowBuildingGrid')
  if (!grid) return

  grid.innerHTML = nowBuilding
    .map(
      (item, i) => `
      <div class="reveal card card-hover p-6 flex flex-col gap-3" data-delay="${(i % 2) * 100}">
        <div class="flex items-center justify-between gap-3">
          <h3 class="font-display text-xl font-semibold">${item.topic}</h3>
          <span class="px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide border ${STATUS_STYLES[item.label] || STATUS_STYLES.exploring}">${item.label}</span>
        </div>
        <p class="text-sm text-ink-soft leading-relaxed">${item.note}</p>
      </div>`,
    )
    .join('')

  observeReveals(grid.querySelectorAll('.reveal'))
}

/* ---------- Certifications ---------- */
function loadCertifications() {
  const grid = document.getElementById('certificationsGrid')
  if (!grid) return

  grid.innerHTML = certifications
    .map(
      (cert, i) => `
      <div class="reveal rounded-2xl p-6 bg-white/[0.03] border border-white/10 hover:border-white/20 transition" data-delay="${(i % 3) * 90}">
        <div class="flex items-start gap-4">
          <div class="w-11 h-11 shrink-0 rounded-xl bg-accent-soft flex items-center justify-center text-xl" aria-hidden="true">📜</div>
          <div>
            <h3 class="font-display text-lg font-semibold title-gradient mb-1">${cert.name}</h3>
            <p class="text-sm text-ink-soft">${cert.issuer} · ${cert.year}</p>
          </div>
        </div>
        ${cert.image ? `
        <a href="${cert.image}" target="_blank" rel="noopener" class="group mt-4 block rounded-xl overflow-hidden border border-white/10" aria-label="View ${cert.name} certificate">
          <img src="${cert.image}" alt="${cert.name} certificate" loading="lazy" decoding="async" class="w-full h-auto object-cover bg-white/5 transition-transform duration-300 group-hover:scale-[1.03]">
        </a>` : ''}
      </div>`,
    )
    .join('')

  observeReveals(grid.querySelectorAll('.reveal'))
}

/* ---------- Completed courses ---------- */
function loadCourses() {
  const grid = document.getElementById('coursesGrid')
  if (!grid) return

  grid.innerHTML = courses
    .map(
      (cat, i) => `
      <div class="reveal rounded-2xl p-6 bg-white/[0.03] border border-white/10 hover:border-white/20 transition" data-delay="${(i % 3) * 90}">
        <h3 class="font-display text-lg font-semibold title-gradient mb-4">${cat.category}</h3>
        <ul class="flex flex-wrap gap-2">
          ${cat.courses.map((c) => `<li class="px-3 py-1 bg-white/5 rounded-full text-xs text-ink-soft">${c}</li>`).join('')}
        </ul>
      </div>`,
    )
    .join('')

  observeReveals(grid.querySelectorAll('.reveal'))
}

/* ---------- Hobbies ---------- */
function loadHobbies() {
  const grid = document.getElementById('hobbiesGrid')
  if (!grid) return

  grid.innerHTML = hobbies
    .map(
      (h, i) => `
      <div class="reveal rounded-2xl p-6 bg-white/[0.03] border border-white/10 hover:border-white/20 transition" data-delay="${(i % 3) * 90}">
        <h3 class="font-display text-lg font-semibold title-gradient mb-1.5">${h.name}</h3>
        <p class="text-sm text-ink-soft leading-relaxed">${h.note}</p>
      </div>`,
    )
    .join('')

  observeReveals(grid.querySelectorAll('.reveal'))
}

/* ---------- Back to top ---------- */
function initBackToTop() {
  const btn = document.getElementById('backToTop')
  if (!btn) return

  const toggle = () => {
    btn.classList.toggle('back-to-top-visible', window.scrollY > 600)
  }
  window.addEventListener('scroll', toggle, { passive: true })
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))
  toggle()
}

/* ---------- Reveal observer ---------- */
function initRevealObserver() {
  observeReveals(document.querySelectorAll('.reveal'))

  const skillSection = document.getElementById('skills')
  const skillsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fillSkillBars()
          skillsObserver.disconnect()
        }
      })
    },
    { threshold: 0.25 },
  )
  if (skillSection) skillsObserver.observe(skillSection)
}

function heroInView() {
  const hero = document.querySelector('#home')
  if (!hero) return false
  const rect = hero.getBoundingClientRect()
  return rect.top < window.innerHeight && rect.bottom > 0
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear()
  loadProjects()
  loadActiveWork()
  loadTechGrid()
  loadCourses()
  loadCertifications()
  loadHobbies()
  loadNowBuilding()
  renderSocial()
  typeLambdaLine()
  typeHeroLine()
  createMathSymbols()
  initMobileMenu()
  initSmoothScroll()
  initRevealObserver()
  initScrollSpy()
  initScrollProgress()
  initTerminal()
  buildMarquee()
  initTilt()
  initBackToTop()

  const heroObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) animateStats()
      })
    },
    { threshold: 0.3 },
  )
  const hero = document.querySelector('#home')
  if (hero) heroObserver.observe(hero)

  const onScrollFallback = () => {
    if (heroInView()) animateStats()
    const skills = document.getElementById('skills')
    if (skills && skills.getBoundingClientRect().top < window.innerHeight) fillSkillBars()
  }
  window.addEventListener('scroll', onScrollFallback, { passive: true })
  onScrollFallback()
})
