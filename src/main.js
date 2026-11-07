import './style.css'
import {
  projects,
  skills,
  skillCategories,
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
  database: '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"></path><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"></path>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"></path><circle cx="12" cy="12" r="3"></circle>',
  sparkles: '<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z"></path><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z"></path>',
}

function escapeHtml(text) {
  return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function caseStudyViewerMarkup(project) {
  const study = project.caseStudy
  const isWeb = study.kind === 'web'
  const sections = isWeb
    ? { problem: '01 · The idea', approach: '02 · How it\'s built', results: '03 · What it does', discussion: '04 · Notes' }
    : { problem: '01 · The problem', approach: '02 · Approach', results: '03 · Results', discussion: '04 · Discussion' }
  const links = [
    project.viewUrl
      ? `<a href="${project.viewUrl}" target="_blank" rel="noopener" class="px-4 py-2 bg-primary-deep text-white rounded-lg hover:bg-primary transition text-sm font-medium">${project.viewUrl.endsWith('.pdf') ? 'Read Report' : 'View Project'} →</a>`
      : '',
    project.viewLink ? `<a href="${project.viewLink}" target="_blank" rel="noopener" class="px-4 py-2 bg-ink/5 text-ink rounded-lg hover:bg-ink/10 transition text-sm font-medium">Live Demo →</a>` : '',
    project.github && project.github !== '[EDIT]'
      ? `<a href="${project.github}" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 px-4 py-2 border border-white/15 text-ink rounded-lg hover:border-accent hover:text-accent transition text-sm font-medium"><svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4" aria-hidden="true">${GITHUB_ICON}</svg><span>Code</span></a>`
      : '',
  ]
    .filter(Boolean)
    .join('')

  return `
  <div class="project-viewer-hero">
    ${project.image ? `<img class="project-viewer-image" src="${project.image}" alt="${escapeHtml(project.name)}" onerror="this.style.display='none'">` : `<div class="project-viewer-image-fallback ${project.gradient}" aria-hidden="true">${project.icon || ''}</div>`}
    <p class="project-viewer-period">${escapeHtml(project.period)}${project.group ? ' · 👥 Group project' : ''}${project.fest ? ' · 🎪 ' + escapeHtml(project.fest) : ''}</p>
    <h3 id="projectViewerTitle" class="project-viewer-title">${escapeHtml(project.name)}</h3>
    <p class="project-viewer-tagline">${escapeHtml(study.tagline || '')}</p>
    <div class="flex flex-wrap gap-2 mt-3">
      ${project.tags.map((tag) => `<span class="px-3 py-1 bg-ink/5 rounded-full text-xs font-medium text-ink-soft">${escapeHtml(tag)}</span>`).join('')}
    </div>
    ${links ? `<div class="flex flex-wrap gap-2 mt-4">${links}</div>` : ''}
  </div>
  <section class="project-viewer-section" id="pv-problem" aria-label="${isWeb ? 'The idea' : 'The problem'}">
    <p class="project-viewer-eyebrow">${sections.problem}</p>
    <p class="project-viewer-body">${escapeHtml(study.problem || '')}</p>
  </section>
  <section class="project-viewer-section" id="pv-approach" aria-label="${isWeb ? 'How it\'s built' : 'Approach'}">
    <p class="project-viewer-eyebrow">${sections.approach}</p>
    <ol class="project-viewer-steps">
      ${(study.approach || []).map((step) => `<li><span class="project-viewer-step-no" aria-hidden="true"></span><span>${escapeHtml(step)}</span></li>`).join('')}
    </ol>
  </section>
  <section class="project-viewer-section" id="pv-results" aria-label="${isWeb ? 'What it does' : 'Results'}">
    <p class="project-viewer-eyebrow">${sections.results}</p>
    <div class="project-viewer-metrics">
      ${(study.metrics || []).map((metric) => `<div class="project-viewer-metric"><p class="project-viewer-metric-value">${escapeHtml(metric.value)}</p><p class="project-viewer-metric-label">${escapeHtml(metric.label)}</p></div>`).join('')}
    </div>
    <ul class="project-viewer-findings">
      ${(study.findings || []).map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
    </ul>
  </section>
  <section class="project-viewer-section" id="pv-discussion" aria-label="${isWeb ? 'Notes' : 'Discussion'}">
    <p class="project-viewer-eyebrow">${sections.discussion}</p>
    <p class="project-viewer-body">${escapeHtml(study.discussion || '')}</p>
    <div class="project-viewer-meta">
      ${study.role ? `<p class="project-meta-row"><span class="project-meta-key">Role</span><span>${escapeHtml(study.role)}</span></p>` : ''}
      <p class="project-meta-row"><span class="project-meta-key">Stack</span><span>${project.tags.map(escapeHtml).join(' · ')}</span></p>
    </div>
  </section>`
}

let projectViewer = null
let projectViewerScroll = null
let projectViewerProgress = null
let lastViewerTrigger = null
let lastViewerCardRect = null

function ensureProjectViewer() {
  if (projectViewer) return
  projectViewer = document.createElement('div')
  projectViewer.id = 'projectViewer'
  projectViewer.className = 'project-viewer'
  projectViewer.hidden = true
  projectViewer.setAttribute('role', 'dialog')
  projectViewer.setAttribute('aria-modal', 'true')
  projectViewer.setAttribute('aria-labelledby', 'projectViewerTitle')
  projectViewer.innerHTML = `
    <div class="project-viewer-backdrop" data-close aria-hidden="true"></div>
    <div class="project-viewer-panel">
      <div class="project-viewer-progress" aria-hidden="true"><span id="projectViewerProgressBar"></span></div>
      <div class="project-viewer-topbar">
        <nav class="project-viewer-chapters" aria-label="Project sections">
          <button type="button" data-goto="pv-problem" data-label-research="Problem" data-label-web="Idea">Problem</button>
          <button type="button" data-goto="pv-approach" data-label-research="Approach" data-label-web="Built">Approach</button>
          <button type="button" data-goto="pv-results" data-label-research="Results" data-label-web="Does">Results</button>
          <button type="button" data-goto="pv-discussion" data-label-research="Discussion" data-label-web="Notes">Discussion</button>
        </nav>
        <button type="button" class="project-viewer-close" data-close aria-label="Close project view">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          <span>Close</span>
        </button>
      </div>
      <div class="project-viewer-scroll" tabindex="0" aria-label="Project scroll region"></div>
    </div>`
  document.body.appendChild(projectViewer)
  projectViewerScroll = projectViewer.querySelector('.project-viewer-scroll')
  projectViewerProgress = projectViewer.querySelector('#projectViewerProgressBar')
  projectViewer.addEventListener('click', (event) => {
    if (event.target.closest('[data-close]')) closeProjectViewer()
  })
  projectViewer.querySelectorAll('[data-goto]').forEach((button) => {
    button.addEventListener('click', () => {
      const target = projectViewerScroll.querySelector(`#${button.dataset.goto}`)
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  })
  projectViewerScroll.addEventListener('scroll', () => {
    const max = projectViewerScroll.scrollHeight - projectViewerScroll.clientHeight
    if (projectViewerProgress) projectViewerProgress.style.transform = `scaleX(${max > 0 ? projectViewerScroll.scrollTop / max : 0})`
  }, { passive: true })
  document.addEventListener('keydown', (event) => {
    if (projectViewer.hidden) return
    if (event.key === 'Escape') {
      event.preventDefault()
      closeProjectViewer()
      return
    }
    if (event.key !== 'Tab') return
    const items = [...projectViewer.querySelectorAll('button, a[href]')].filter((el) => el.getClientRects().length > 0)
    if (!items.length) return
    const first = items[0]
    const last = items[items.length - 1]
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  })
}

function openProjectViewer(project, trigger) {
  ensureProjectViewer()
  lastViewerTrigger = trigger || null
  const card = trigger ? trigger.closest('.project-card') : null
  lastViewerCardRect = card ? card.getBoundingClientRect() : null
  projectViewerScroll.innerHTML = caseStudyViewerMarkup(project)
  projectViewerScroll.scrollTop = 0
  const isWeb = project.caseStudy?.kind === 'web'
  projectViewer.querySelectorAll('[data-goto]').forEach((button) => {
    button.textContent = isWeb ? button.dataset.labelWeb : button.dataset.labelResearch
  })
  projectViewer.hidden = false
  document.body.style.overflow = 'hidden'
  projectViewerScroll.focus({ preventScroll: true })
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const panel = projectViewer.querySelector('.project-viewer-panel')
  if (!reduceMotion && lastViewerCardRect) {
    const r = lastViewerCardRect
    const cx = r.left + r.width / 2
    const cy = r.top + r.height / 2
    const vw = window.innerWidth / 2
    const vh = window.innerHeight / 2
    const scale = Math.max(0.55, Math.min(0.85, r.width / Math.min(window.innerWidth * 0.94, 860)))
    panel.style.transform = `translate(${cx - vw}px, ${cy - vh}px) scale(${scale})`
    panel.style.opacity = '0'
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        panel.style.transition = 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.35s ease'
        panel.style.transform = ''
        panel.style.opacity = ''
        setTimeout(() => { panel.style.transition = '' }, 520)
      })
    })
  }
  document.body.classList.add('viewer-open')
}

function closeProjectViewer() {
  if (!projectViewer || projectViewer.hidden) return
  const panel = projectViewer.querySelector('.project-viewer-panel')
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const finish = () => {
    projectViewer.hidden = true
    document.body.style.overflow = ''
    document.body.classList.remove('viewer-open')
    panel.style.transition = ''
    panel.style.transform = ''
    panel.style.opacity = ''
    if (lastViewerTrigger instanceof HTMLElement) lastViewerTrigger.focus()
    lastViewerTrigger = null
    lastViewerCardRect = null
  }
  if (reduceMotion || !lastViewerCardRect) {
    finish()
    return
  }
  const r = lastViewerCardRect
  const cx = r.left + r.width / 2
  const cy = r.top + r.height / 2
  const vw = window.innerWidth / 2
  const vh = window.innerHeight / 2
  const scale = Math.max(0.55, Math.min(0.85, r.width / Math.min(window.innerWidth * 0.94, 860)))
  panel.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease'
  panel.style.transform = `translate(${cx - vw}px, ${cy - vh}px) scale(${scale})`
  panel.style.opacity = '0'
  setTimeout(finish, 420)
}

function initProjectToggles(grid) {
  grid.addEventListener('click', (event) => {
    if (event.target.closest('a')) return
    const toggle = event.target.closest('.project-toggle')
    if (toggle) {
      const card = toggle.closest('.project-card')
      const project = projects.find((p) => p.id === card?.dataset.project)
      if (project) openProjectViewer(project, toggle)
      return
    }
    // Clicking anywhere else on the card zooms in too.
    const card = event.target.closest('.project-card')
    if (!card) return
    const project = projects.find((p) => p.id === card.dataset.project)
    if (project) openProjectViewer(project, card.querySelector('.project-toggle') || card)
  })
}

function loadProjects() {
  const grid = document.getElementById('projectsGrid')
  if (!grid) return

  grid.innerHTML = projects
    .map(
      (project, index) => `
      <article class="reveal card card-hover tilt card-accent project-card p-6 flex flex-col" data-project="${project.id}" data-kind="${project.caseStudy?.kind || 'research'}" data-delay="${(index % 3) * 90}">
        ${project.group ? `<span class="badge-on-border inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide border bg-accent-soft text-[#f9a8d4] border-accent/30"><span aria-hidden="true">👥</span>Group</span>` : ''}
        <div class="relative h-36 bg-gradient-to-br ${project.gradient} rounded-xl mb-5 overflow-hidden border border-white/10">
          ${project.image ? `<img src="${project.image}" alt="${project.name}" width="800" height="450" class="w-full h-full object-cover" loading="lazy" decoding="async" onerror="this.style.display='none'">` : ''}
        </div>
        <h3 class="font-display text-2xl font-semibold mb-1.5">${project.name}</h3>
        <p class="text-primary-deep text-xs mb-3">${project.period}</p>
        ${project.fest ? `<p class="text-[11px] font-medium text-accent mb-3 flex items-center gap-1.5"><span aria-hidden="true">🎪</span>${project.fest}</p>` : ''}
        <p class="text-sm text-ink-soft mb-4 leading-relaxed flex-1">${project.description}</p>
        <div class="flex flex-wrap gap-2 mb-4">
          ${project.tags.map((tag) => `<span class="px-3 py-1 bg-ink/5 rounded-full text-xs font-medium text-ink-soft">${tag}</span>`).join('')}
        </div>
        <div class="flex flex-wrap items-center gap-2">
          ${project.viewUrl ? `<a href="${project.viewUrl}" target="_blank" rel="noopener" class="px-4 py-2 bg-primary-deep text-white rounded-lg hover:bg-primary transition text-sm font-medium">${project.viewUrl.endsWith('.pdf') ? 'Read Report' : 'View Project'} →</a>` : ''}
          ${project.viewLink ? `<a href="${project.viewLink}" target="_blank" rel="noopener" class="px-4 py-2 bg-ink/5 text-ink rounded-lg hover:bg-ink/10 transition text-sm font-medium">Live Demo →</a>` : ''}
          ${project.github && project.github !== '[EDIT]' ? `<a href="${project.github}" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 px-4 py-2 border border-white/15 text-ink rounded-lg hover:border-accent hover:text-accent transition text-sm font-medium"><svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4" aria-hidden="true">${GITHUB_ICON}</svg><span>Code</span></a>` : ''}
          ${project.caseStudy ? `<button type="button" class="project-toggle" aria-haspopup="dialog" aria-label="${project.caseStudy.kind === 'web' ? 'Read the idea behind' : 'Read the deep dive on'}: ${project.name}"><span class="project-toggle-label">${project.caseStudy.kind === 'web' ? 'The idea' : 'Deep dive'}</span>${project.caseStudy.kind === 'web' ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4" aria-hidden="true"><path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.4 1 2.3h6c0-.9.4-1.8 1-2.3A7 7 0 0 0 12 2z"></path></svg>` : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>`}</button>` : ''}
        </div>
      </article>`,
    )
    .join('')

  initProjectToggles(grid)
  observeReveals(grid.querySelectorAll('.reveal'))
  renderProjectFilters()
}

/* ---------- Project filters ---------- */
const PROJECT_FILTERS = [
  { id: 'all', name: 'All' },
  { id: 'research', name: 'Academic' },
  { id: 'web', name: 'Personal builds' },
]

let activeProjectFilter = 'all'

function renderProjectFilters() {
  const bar = document.getElementById('projectFilters')
  if (!bar) return

  bar.innerHTML = PROJECT_FILTERS.map((filter) => {
    const count =
      filter.id === 'all'
        ? projects.length
        : projects.filter((p) => (p.caseStudy?.kind || 'research') === filter.id).length
    return `<button type="button" class="project-filter" data-filter="${filter.id}" aria-pressed="${filter.id === 'all'}" aria-controls="projectsGrid">${filter.name}<span class="count" aria-hidden="true">${count}</span></button>`
  }).join('')

  bar.addEventListener('click', (event) => {
    const button = event.target.closest('.project-filter')
    if (!button) return

    activeProjectFilter = button.dataset.filter
    bar.querySelectorAll('.project-filter').forEach((item) => {
      item.setAttribute('aria-pressed', String(item === button))
    })
    applyProjectFilter()
  })

  applyProjectFilter()
}

function applyProjectFilter() {
  const cards = document.querySelectorAll('#projectsGrid .project-card')
  let visible = 0

  cards.forEach((card) => {
    const show = activeProjectFilter === 'all' || card.dataset.kind === activeProjectFilter
    card.hidden = !show
    if (show) visible += 1
  })

  const status = document.getElementById('projectFilterStatus')
  if (status) status.textContent = `Showing ${visible} of ${projects.length} projects`
}

/* ---------- Active work (current projects in progress) ---------- */
const ACTIVE_STATUS_STYLES = {
  learning: 'bg-sky-500/10 text-sky-300 border-sky-500/30',
  building: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
  exploring: 'bg-primary-soft text-[#c084fc] border-primary/30',
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
      <div class="reveal rounded-2xl p-6 bg-white/[0.03] border border-white/10 hover:border-white/20 transition flex flex-col card-accent" data-delay="${(i % 2) * 100}">
        ${item.group ? `<span class="badge-on-border inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide border bg-accent-soft text-[#f9a8d4] border-accent/30"><span aria-hidden="true">👥</span>Group</span>` : ''}
        <div class="flex items-start justify-between gap-3 mb-3">
          <h3 class="font-display text-xl font-semibold">${item.name || item.project}</h3>
          <span class="px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide border whitespace-nowrap shrink-0 ${ACTIVE_STATUS_STYLES[item.status] || ACTIVE_STATUS_STYLES.exploring}">${item.status}</span>
        </div>
        ${item.name && item.project && item.name !== item.project ? `<p class="text-primary-deep text-xs mb-2">${item.project}</p>` : ''}
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

/* ---------- Interactive skills ---------- */
let activeSkillCategory = 'all'

function skillCategoryName(id) {
  return skillCategories.find((category) => category.id === id)?.name || id
}

function renderSkillFilters() {
  const bar = document.getElementById('skillFilters')
  if (!bar) return

  bar.innerHTML = skillCategories
    .map((category) => {
      const count = category.id === 'all' ? skills.length : skills.filter((s) => s.category === category.id).length
      return `<button type="button" class="skill-filter" data-category="${category.id}" aria-pressed="${category.id === 'all'}" aria-controls="skillGrid skillDetail" aria-label="${category.name}, ${count} skills">
        ${category.name}<span class="count" aria-hidden="true">${count}</span>
      </button>`
    })
    .join('')

  bar.addEventListener('click', (event) => {
    const button = event.target.closest('.skill-filter')
    if (!button) return

    activeSkillCategory = button.dataset.category
    bar.querySelectorAll('.skill-filter').forEach((item) => {
      item.setAttribute('aria-pressed', String(item === button))
    })
    applySkillFilter()
  })
}

function applySkillFilter() {
  const items = document.querySelectorAll('#skillGrid .skill-grid-item')
  let visible = 0

  items.forEach((item) => {
    const show = activeSkillCategory === 'all' || item.dataset.category === activeSkillCategory
    item.hidden = !show
    if (!show) return

    visible += 1
    // Restart the entrance animation when the filter changes.
    item.style.animation = 'none'
    void item.offsetWidth
    item.style.animation = ''
  })

  const empty = document.getElementById('skillEmpty')
  if (empty) empty.hidden = visible !== 0
}

function renderSkillGrid() {
  const grid = document.getElementById('skillGrid')
  if (!grid) return

  grid.innerHTML = skills
    .map(
      (skill, index) => `
      <li class="skill-grid-item" data-category="${skill.category}" style="animation-delay:${(index % 6) * 35}ms">
        <button type="button" class="skill-card" data-skill="${skill.id}" data-category="${skill.category}" aria-pressed="false">
          <span class="skill-card-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">${TECH_ICONS[skill.icon] || TECH_ICONS.code}</svg>
          </span>
          <span class="skill-card-name">${skill.name}</span>
          <span class="skill-card-level">${skill.label}</span>
        </button>
      </li>`,
    )
    .join('')

  grid.addEventListener('click', (event) => {
    const button = event.target.closest('.skill-card')
    if (!button) return
    selectSkill(button.dataset.skill)
  })
}

function renderSkillDetail(skill) {
  const panel = document.getElementById('skillDetail')
  if (!panel) return

  if (!skill) {
    panel.innerHTML = `
      <div class="skill-detail-empty">
        <span class="skill-detail-empty-icon" aria-hidden="true">⌘</span>
        <p class="font-display text-xl font-semibold mb-2">Explore my toolkit</p>
        <p class="text-sm text-ink-soft leading-relaxed">Pick a skill to see where I use it, what I pair it with, and how deep I have gone.</p>
      </div>`
    return
  }

  panel.innerHTML = `
    <div class="flex items-start gap-4 mb-5">
      <span class="skill-detail-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">${TECH_ICONS[skill.icon] || TECH_ICONS.code}</svg>
      </span>
      <div>
        <p class="skill-detail-cat">${skillCategoryName(skill.category)}</p>
        <h3 class="font-display text-2xl font-semibold leading-tight">${skill.name}</h3>
      </div>
    </div>
    <div class="flex items-center justify-between mb-2">
      <span class="skill-detail-level">${skill.label}</span>
    </div>
    <div class="skill-track h-2 rounded-full overflow-hidden mb-5">
      <div class="skill-fill h-full rounded-full" data-level="${skill.level}" role="progressbar" aria-valuenow="${skill.level}" aria-valuemin="0" aria-valuemax="100" aria-label="${skill.name} proficiency"></div>
    </div>
    <p class="text-sm text-ink-soft leading-relaxed mb-5">${skill.blurb}</p>
    <div class="mt-auto">
      <p class="skill-detail-subhead">Often paired with</p>
      <div class="flex flex-wrap gap-2">
        ${skill.tags.map((tag) => `<span class="skill-detail-tag">${tag}</span>`).join('')}
      </div>
    </div>`

  panel.classList.remove('skill-detail-enter')
  void panel.offsetWidth
  panel.classList.add('skill-detail-enter')

  requestAnimationFrame(() => {
    const fill = panel.querySelector('.skill-fill[data-level]')
    if (fill) fill.style.width = `${fill.dataset.level}%`
  })
}

function selectSkill(id, shouldScroll = true) {
  const skill = skills.find((item) => item.id === id)
  if (!skill) return

  document.querySelectorAll('#skillGrid .skill-card').forEach((card) => {
    const isActive = card.dataset.skill === id
    card.classList.toggle('is-active', isActive)
    card.setAttribute('aria-pressed', String(isActive))
  })
  renderSkillDetail(skill)

  if (shouldScroll && window.innerWidth < 1024) {
    const panel = document.getElementById('skillDetail')
    if (panel) {
      const top = panel.getBoundingClientRect().top + window.scrollY - 88
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }
}

function loadSkills() {
  if (!document.getElementById('skillGrid')) return

  renderSkillFilters()
  renderSkillGrid()
  renderSkillDetail(null)

  if (skills[0]) selectSkill(skills[0].id, false)
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
  const sectionToNav = { 'active-work': '#projects' }

  const spyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const target = sectionToNav[entry.target.id] || `#${entry.target.id}`
        navLinks.forEach((link) => {
          const active = link.getAttribute('href') === target
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
  if (!menu || !openBtn || !closeBtn) return

  let lastFocused = null
  const isOpen = () => !menu.classList.contains('translate-x-full')
  const focusable = () =>
    [...menu.querySelectorAll('a[href], button:not([disabled])')].filter((el) => el.getClientRects().length > 0)

  function setOpen(open) {
    if (open === isOpen()) return

    menu.classList.toggle('translate-x-full', !open)
    menu.setAttribute('aria-hidden', String(!open))
    menu.inert = !open
    openBtn.setAttribute('aria-expanded', String(open))
    openBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
    document.body.style.overflow = open ? 'hidden' : ''

    if (open) {
      lastFocused = openBtn
      closeBtn.focus()
    } else {
      document.body.style.overflow = ''
      if (lastFocused instanceof HTMLElement) lastFocused.focus()
      lastFocused = null
    }
  }

  // Start closed and out of the tab order.
  menu.setAttribute('aria-hidden', 'true')
  menu.inert = true

  openBtn.addEventListener('click', () => setOpen(!isOpen()))
  closeBtn.addEventListener('click', () => setOpen(false))
  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setOpen(false)))

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen()) {
      e.preventDefault()
      setOpen(false)
      return
    }

    if (e.key !== 'Tab' || !isOpen()) return

    const items = focusable()
    if (!items.length) return

    const first = items[0]
    const last = items[items.length - 1]

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first.focus()
    }
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
    { t: '8 projects · 23 skills · building what I learn', c: 'tok-dim' },
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
      if (document.body.classList.contains('viewer-open')) return
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
  exploring: 'bg-primary-soft text-[#c084fc] border-primary/30',
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

/* ---------- Contact form ---------- */
function initContactForm() {
  const form = document.getElementById('contactForm')
  const status = document.getElementById('formStatus')
  if (!form || !status) return

  const button = form.querySelector('button[type="submit"]')
  if (!button) return
  const originalLabel = button.textContent

  form.addEventListener('submit', async (event) => {
    event.preventDefault()

    status.textContent = ''
    status.className = 'form-status'
    button.disabled = true
    button.textContent = 'Sending…'

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) {
        const data = await response.json().catch(() => null)
        const message = data?.errors?.map((item) => item.message).join(', ')
        throw new Error(message || 'Something went wrong. Please email me directly.')
      }

      form.reset()
      status.textContent = 'Thanks — your message has been sent. I will get back to you soon.'
      status.classList.add('form-status-success')
    } catch (error) {
      status.textContent = error.message || 'Something went wrong. Please email me directly.'
      status.classList.add('form-status-error')
    } finally {
      button.disabled = false
      button.textContent = originalLabel
    }
  })
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
  loadSkills()
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
  initContactForm()

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
