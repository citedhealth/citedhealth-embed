/* citedhealth-embed v1.0.0 | MIT | https://widget.citedhealth.com */

// src/styles/clinical.ts
function getClinicalCSS() {
  return `
/* Clinical: clean header with large grade badge */
.cited-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  border-bottom: 1px solid var(--border);
}

.cited-header-text {
  flex: 1;
  min-width: 0;
}

.cited-title {
  font-size: 15px;
  font-weight: 600;
  color: var(--text);
  margin: 0 0 3px 0;
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.cited-subtitle {
  font-size: 12px;
  color: var(--muted);
  margin: 0;
}

/* Stats row: flat, tabular */
.cited-stats {
  display: flex;
  gap: 0;
  border-bottom: 1px solid var(--border);
}

.cited-stat-item {
  flex: 1;
  padding: 10px 16px;
  border-right: 1px solid var(--border);
  text-align: center;
}

.cited-stat-item:last-child {
  border-right: none;
}

.cited-stat-label {
  font-size: 10px;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 3px;
}

.cited-stat-value {
  font-size: 16px;
  font-weight: 700;
  color: var(--text);
}

/* Summary text */
.cited-summary {
  padding: 12px 20px;
  font-size: 13px;
  line-height: 1.65;
  color: var(--text);
  border-bottom: 1px solid var(--border);
}

/* Action row: minimal */
.cited-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  gap: 8px;
}

.cited-link {
  font-size: 12px;
  font-weight: 500;
  color: var(--link);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.cited-link:hover {
  text-decoration: underline;
}

.cited-link svg {
  width: 11px;
  height: 11px;
  flex-shrink: 0;
}
  `;
}

// src/styles/modern.ts
function getModernCSS() {
  return `
/* Modern: gradient accent bar at top */
.cited-accent-bar {
  height: 3px;
  background: linear-gradient(90deg, var(--accent), color-mix(in srgb, var(--accent) 60%, #fff));
  width: 100%;
}

/* Header with flex layout */
.cited-header {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 16px 20px;
}

.cited-header-text {
  flex: 1;
  min-width: 0;
}

.cited-title {
  font-size: 15px;
  font-weight: 700;
  color: var(--text);
  margin: 0 0 4px 0;
  line-height: 1.3;
}

.cited-subtitle {
  font-size: 12px;
  color: var(--muted);
  margin: 0;
}

/* Grade badge: gradient background */
.cited-grade-badge-modern {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  color: #fff;
  width: 48px;
  height: 48px;
  border-radius: 10px;
  font-size: 22px;
  flex-shrink: 0;
  letter-spacing: -0.02em;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  background: linear-gradient(135deg, var(--grade-color, var(--accent)), color-mix(in srgb, var(--grade-color, var(--accent)) 70%, #000));
}

/* Grade pill label */
.cited-grade-pill {
  display: inline-block;
  font-size: 10px;
  font-weight: 600;
  color: #fff;
  background: var(--grade-color, var(--accent));
  border-radius: 99px;
  padding: 2px 8px;
  letter-spacing: 0.03em;
  margin-top: 4px;
}

/* Stats grid: surface-background cards */
.cited-stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  padding: 0 16px 14px;
}

.cited-stat-card {
  background: var(--surface, var(--ribbon));
  border-radius: 6px;
  padding: 8px 10px;
  text-align: center;
}

.cited-stat-label {
  font-size: 10px;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 3px;
}

.cited-stat-value {
  font-size: 18px;
  font-weight: 700;
  color: var(--text);
  line-height: 1;
}

/* Summary */
.cited-summary {
  padding: 4px 20px 14px;
  font-size: 13px;
  line-height: 1.65;
  color: var(--text);
}

/* Actions */
.cited-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  border-top: 1px solid var(--border);
  gap: 8px;
}

.cited-link {
  font-size: 12px;
  font-weight: 500;
  color: var(--link);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.cited-link:hover {
  opacity: 0.8;
  text-decoration: underline;
}

.cited-link svg {
  width: 11px;
  height: 11px;
  flex-shrink: 0;
}
  `;
}

// src/styles/research.ts
function getResearchCSS() {
  return `
/* Research: compact surface header */
.cited-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  background: var(--surface, var(--ribbon));
  border-bottom: 1px solid var(--border);
}

.cited-header-text {
  flex: 1;
  min-width: 0;
}

.cited-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.cited-subtitle {
  font-size: 11px;
  color: var(--muted);
  margin: 1px 0 0 0;
}

/* Inline grade badge: smaller */
.cited-grade-badge-inline {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  font-size: 14px;
  flex-shrink: 0;
  letter-spacing: -0.01em;
}

/* Progress bars for evidence metrics */
.cited-progress-rows {
  padding: 10px 14px;
  border-bottom: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.cited-progress-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.cited-progress-label {
  font-size: 10px;
  color: var(--muted);
  width: 80px;
  flex-shrink: 0;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.cited-progress-bar-wrap {
  flex: 1;
  height: 5px;
  background: var(--border);
  border-radius: 99px;
  overflow: hidden;
}

.cited-progress-bar {
  height: 100%;
  border-radius: 99px;
  background: var(--accent);
  transition: width 0.4s ease;
}

.cited-progress-value {
  font-size: 11px;
  font-weight: 600;
  color: var(--text);
  width: 28px;
  text-align: right;
  flex-shrink: 0;
}

/* Tabular stats */
.cited-stats-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
}

.cited-stats-table td {
  padding: 5px 14px;
  border-bottom: 1px solid var(--border);
}

.cited-stats-table td:first-child {
  color: var(--muted);
  font-weight: 500;
  width: 50%;
}

.cited-stats-table td:last-child {
  color: var(--text);
  font-weight: 600;
  text-align: right;
}

.cited-stats-table tr:last-child td {
  border-bottom: none;
}

/* Summary: compact */
.cited-summary {
  padding: 8px 14px;
  font-size: 12px;
  line-height: 1.6;
  color: var(--text);
  border-bottom: 1px solid var(--border);
}

/* Actions: compact */
.cited-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7px 14px;
  gap: 8px;
}

.cited-link {
  font-size: 11px;
  font-weight: 500;
  color: var(--link);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 3px;
}

.cited-link:hover {
  text-decoration: underline;
}

.cited-link svg {
  width: 10px;
  height: 10px;
  flex-shrink: 0;
}
  `;
}

// src/themes.ts
function getStyleCSS(style) {
  switch (style) {
    case "clinical":
      return getClinicalCSS();
    case "research":
      return getResearchCSS();
    case "modern":
    default:
      return getModernCSS();
  }
}
function getThemeCSS(accent, style = "modern") {
  return `
:host {
  display: block;
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  --site-accent: ${accent};
}

.cited-widget {
  box-sizing: border-box;
  min-width: 280px;
  max-width: 420px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text);
  font-size: 15px;
  line-height: 1.6;
  transition: border-color 0.2s;
}

/* Light theme (default) */
.cited-widget[data-theme="light"] {
  --bg: #ffffff;
  --text: #1a1a1a;
  --border: #e5e7eb;
  --accent: var(--site-accent);
  --muted: #6b7280;
  --surface: #f9fafb;
  --ribbon: #f9fafb;
  --badge-bg: #f3f4f6;
  --badge-text: #374151;
  --link: var(--site-accent);
  --copy-bg: #f3f4f6;
  --copy-hover: #e5e7eb;
  --input-bg: #ffffff;
  --input-border: #d1d5db;
  --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(0,0,0,0.08);
}

/* Dark theme */
.cited-widget[data-theme="dark"] {
  --bg: #1a1a1a;
  --text: #f3f4f6;
  --border: #374151;
  --accent: var(--site-accent);
  --muted: #9ca3af;
  --surface: #111111;
  --ribbon: #111111;
  --badge-bg: #374151;
  --badge-text: #d1d5db;
  --link: #93c5fd;
  --copy-bg: #374151;
  --copy-hover: #4b5563;
  --input-bg: #111111;
  --input-border: #4b5563;
  --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(0,0,0,0.4);
}

/* Sepia theme */
.cited-widget[data-theme="sepia"] {
  --bg: #f5f0e8;
  --text: #3d3529;
  --border: #d4c5a9;
  --accent: var(--site-accent);
  --muted: #8b7d6b;
  --surface: #ede8df;
  --ribbon: #ede8df;
  --badge-bg: #e8e0d0;
  --badge-text: #5c4f3d;
  --link: #7c5c3b;
  --copy-bg: #e8e0d0;
  --copy-hover: #ddd4c0;
  --input-bg: #f5f0e8;
  --input-border: #c4b49a;
  --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(61,53,41,0.12);
}

.cited-widget *, .cited-widget *::before, .cited-widget *::after {
  box-sizing: border-box;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Loading state
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.cited-loading {
  padding: 20px 16px;
  text-align: center;
  color: var(--muted);
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.cited-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid var(--border);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: cited-spin 0.7s linear infinite;
  display: inline-block;
  flex-shrink: 0;
}

@keyframes cited-spin {
  to { transform: rotate(360deg); }
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Error state
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.cited-error {
  padding: 16px;
  color: var(--muted);
  font-size: 13px;
  text-align: center;
}

.cited-error p {
  margin: 0 0 8px 0;
}

.cited-error a {
  color: var(--link);
  text-decoration: none;
}

.cited-error a:hover {
  text-decoration: underline;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Badge (generic)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.cited-badge {
  display: inline-block;
  font-size: 10px;
  font-weight: 600;
  padding: 2px 7px;
  border-radius: 4px;
  background: var(--badge-bg);
  color: var(--badge-text);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Search inputs
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.cited-search-wrap {
  padding: 14px 16px;
}

.cited-search-form {
  display: flex;
  gap: 8px;
}

.cited-search-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid var(--input-border);
  border-radius: 6px;
  background: var(--input-bg);
  color: var(--text);
  font-size: 14px;
  font-family: inherit;
  outline: none;
  transition: border-color 0.15s;
}

.cited-search-input:focus {
  border-color: var(--input-focus);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--input-focus) 20%, transparent);
}

.cited-search-input::placeholder {
  color: var(--muted);
}

.cited-search-btn {
  background: var(--accent);
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 14px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  font-family: inherit;
  transition: opacity 0.15s;
  white-space: nowrap;
}

.cited-search-btn:hover {
  opacity: 0.9;
}

/* Search results list */
.cited-search-results {
  padding: 0 16px 14px;
}

.cited-result-item {
  padding: 10px 0;
  border-bottom: 1px solid var(--border);
}

.cited-result-item:last-child {
  border-bottom: none;
}

.cited-result-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  margin: 0 0 3px 0;
}

.cited-result-meta {
  font-size: 11px;
  color: var(--muted);
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Powered by footer \u2014 non-negotiable
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.cited-powered {
  display: block;
  text-align: center;
  padding: 8px 16px;
  font-size: 11px;
  color: var(--muted);
  border-top: 1px solid var(--border);
}

.cited-powered a {
  color: var(--link);
  text-decoration: none;
  font-weight: 500;
}

.cited-powered a:hover {
  text-decoration: underline;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Medical disclaimer \u2014 non-negotiable
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.cited-disclaimer {
  display: block;
  text-align: center;
  padding: 6px 16px;
  font-size: 9px;
  color: var(--muted);
  line-height: 1.4;
  background: var(--surface, var(--ribbon));
  border-top: 1px solid var(--border);
  opacity: 0.8;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Copy button
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.cited-copy-btn {
  background: var(--copy-bg);
  color: var(--text);
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 12px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: background 0.15s;
  font-family: inherit;
}

.cited-copy-btn:hover {
  background: var(--copy-hover);
}

.cited-copy-btn svg {
  width: 12px;
  height: 12px;
}

${getStyleCSS(style)}
  `;
}

// src/shadow.ts
function createShadow(el, config) {
  const widgetStyle = el.dataset.style || "modern";
  const shadow = el.attachShadow({ mode: "open" });
  const style = document.createElement("style");
  style.textContent = getThemeCSS(config.accent, widgetStyle);
  shadow.appendChild(style);
  return shadow;
}
function createWidgetRoot(shadow, el, extraClass) {
  const theme = el.dataset.theme || "light";
  const size = el.dataset.size || "default";
  const div = document.createElement("div");
  div.className = ["cited-widget", extraClass].filter(Boolean).join(" ");
  div.setAttribute("data-theme", theme);
  div.setAttribute("data-size", size);
  shadow.appendChild(div);
  return div;
}
function renderLoading(container) {
  container.innerHTML = `
    <div class="cited-loading">
      <span class="cited-spinner"></span>
      Loading\u2026
    </div>
  `;
}
function renderError(container, message, config) {
  container.innerHTML = `
    <div class="cited-error">
      <p>${message}</p>
      <a href="https://${config.domain}" target="_blank" rel="noopener">
        Visit ${config.name}
      </a>
    </div>
  `;
}
var externalLinkIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
function poweredByHTML(config) {
  return `<span class="cited-powered">Powered by <a href="https://${config.domain}" target="_blank" rel="noopener">${config.name}</a></span>`;
}
function disclaimerHTML() {
  return `<span class="cited-disclaimer">For informational purposes only. Not medical advice. Consult a healthcare professional.</span>`;
}

// src/api.ts
var CACHE_TTL_MS = 5 * 60 * 1e3;
function cacheKey(url) {
  return `cited_embed_${url}`;
}
function getFromCache(url) {
  try {
    const raw = sessionStorage.getItem(cacheKey(url));
    if (!raw) return null;
    const entry = JSON.parse(raw);
    if (Date.now() - entry.ts > CACHE_TTL_MS) {
      sessionStorage.removeItem(cacheKey(url));
      return null;
    }
    return entry.data;
  } catch (e) {
    return null;
  }
}
function setInCache(url, data) {
  try {
    const entry = { data, ts: Date.now() };
    sessionStorage.setItem(cacheKey(url), JSON.stringify(entry));
  } catch (e) {
  }
}
async function fetchAPI(baseUrl, path, params) {
  const base = baseUrl.endsWith("/") ? baseUrl : baseUrl + "/";
  const url = new URL(path, base);
  if (params) {
    Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  }
  const urlStr = url.toString();
  const cached = getFromCache(urlStr);
  if (cached !== null) return cached;
  const response = await fetch(urlStr, {
    headers: { Accept: "application/json" }
  });
  if (!response.ok) {
    throw new Error(`API error ${response.status}: ${urlStr}`);
  }
  const data = await response.json();
  setInCache(urlStr, data);
  return data;
}
async function resolveDoiToPmid(apiBase, doi) {
  var _a, _b;
  try {
    const data = await fetchAPI(apiBase, "papers/", { doi });
    const first = data.results[0];
    if (!first) return null;
    return (_b = (_a = first.pmid) != null ? _a : first.pubmed_id) != null ? _b : null;
  } catch (e) {
    return null;
  }
}

// src/grade-colors.ts
var GRADE_COLORS = {
  A: {
    grade: "A",
    color: "emerald",
    hex: "#10b981",
    label: "Strong Evidence",
    description: "Multiple high-quality RCTs with consistent results"
  },
  B: {
    grade: "B",
    color: "blue",
    hex: "#3b82f6",
    label: "Good Evidence",
    description: "Some RCTs or high-quality observational studies"
  },
  C: {
    grade: "C",
    color: "amber",
    hex: "#f59e0b",
    label: "Mixed Evidence",
    description: "Conflicting results or limited study quality"
  },
  D: {
    grade: "D",
    color: "gray",
    hex: "#6b7280",
    label: "Limited Evidence",
    description: "Mostly in vitro or animal studies, few human trials"
  },
  F: {
    grade: "F",
    color: "red",
    hex: "#ef4444",
    label: "No Evidence",
    description: "Insufficient evidence to support claims"
  }
};
function gradeLabel(grade) {
  var _a, _b;
  return (_b = (_a = GRADE_COLORS[grade.toUpperCase()]) == null ? void 0 : _a.label) != null ? _b : "Unknown";
}
function gradeBadgeHTML(grade, large = false) {
  var _a, _b;
  const info = GRADE_COLORS[grade.toUpperCase()];
  const hex = (_a = info == null ? void 0 : info.hex) != null ? _a : "#9ca3af";
  const label = (_b = info == null ? void 0 : info.label) != null ? _b : "Unknown";
  const size = large ? "font-size:22px; width:48px; height:48px; border-radius:8px;" : "font-size:13px; width:28px; height:28px; border-radius:5px;";
  return `<div class="cited-grade-badge" style="
    display:inline-flex;
    align-items:center;
    justify-content:center;
    font-weight:700;
    color:#fff;
    background:${hex};
    ${size}
    flex-shrink:0;
    letter-spacing:-0.01em;
    line-height:1;
    title="${label}"
  ">${grade.toUpperCase()}</div>`;
}

// src/widgets/evidence.ts
function initEvidenceWidget(el, config) {
  var _a, _b;
  const dataset = el.dataset;
  const ingredient = (_a = dataset.ingredient) != null ? _a : "";
  const condition = (_b = dataset.condition) != null ? _b : "";
  if (!ingredient || !condition) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el);
    renderError(container2, "Missing data-ingredient or data-condition attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el);
  renderLoading(container);
  fetchAPI(config.apiBase, "evidence/", { ingredient, condition }).then((data) => {
    const item = data.results[0];
    if (!item) {
      renderError(container, `No evidence data found for ${ingredient} and ${condition}.`, config);
      return;
    }
    renderEvidence(container, item, config);
  }).catch(() => {
    renderError(container, "Unable to load evidence data. Please try again later.", config);
  });
}
function renderEvidence(container, item, config) {
  var _a;
  const gradeInfo = GRADE_COLORS[item.grade.toUpperCase()];
  const gradeColor = (_a = gradeInfo == null ? void 0 : gradeInfo.hex) != null ? _a : "#9ca3af";
  const title = `${item.ingredient.name} for ${item.condition.name}`;
  const evidenceUrl = `https://${config.domain}/evidence/${item.ingredient.slug}/for/${item.condition.slug}/`;
  container.style.setProperty("--grade-color", gradeColor);
  container.innerHTML = `
    <div class="cited-accent-bar"></div>

    <div class="cited-header">
      ${gradeBadgeHTML(item.grade, true)}
      <div class="cited-header-text">
        <p class="cited-title">${escapeHTML(title)}</p>
        <p class="cited-grade-label">${escapeHTML(gradeLabel(item.grade))}</p>
      </div>
    </div>

    <p class="cited-summary">${escapeHTML(item.summary)}</p>

    <div class="cited-stats-grid">
      <div class="cited-stat-card">
        <div class="cited-stat-label">Studies</div>
        <div class="cited-stat-value">${item.total_studies}</div>
      </div>
      <div class="cited-stat-card">
        <div class="cited-stat-label">RCTs</div>
        <div class="cited-stat-value">${item.rct_count}</div>
      </div>
      <div class="cited-stat-card">
        <div class="cited-stat-label">Meta-analyses</div>
        <div class="cited-stat-value">${item.meta_count}</div>
      </div>
    </div>

    <div class="cited-actions">
      <a class="cited-link" href="${evidenceUrl}" target="_blank" rel="noopener">
        View full evidence ${externalLinkIcon}
      </a>
    </div>

    ${disclaimerHTML()}
    ${poweredByHTML(config)}
  `;
}
function escapeHTML(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

// src/widgets/ingredient.ts
function escapeHTML2(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function initIngredientWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const slug = (_a = dataset.slug) != null ? _a : "";
  if (!slug) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el);
    renderError(container2, "Missing data-slug attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el);
  renderLoading(container);
  fetchAPI(config.apiBase, `ingredients/${slug}/`).then((data) => {
    renderIngredient(container, data, config);
  }).catch(() => {
    renderError(container, "Unable to load ingredient data. Please try again later.", config);
  });
}
function renderIngredient(container, item, config) {
  const ingredientUrl = `https://${config.domain}/ingredients/${item.slug}/`;
  const conditionsHTML = item.evidence_links.length > 0 ? `
      <div class="cited-section">
        <p class="cited-section-label">Related Conditions</p>
        <div class="cited-conditions-list">
          ${item.evidence_links.map((link) => `
              <div class="cited-condition-row">
                ${gradeBadgeHTML(link.grade, false)}
                <span class="cited-condition-name">${escapeHTML2(link.condition.name)}</span>
              </div>
            `).join("")}
        </div>
      </div>
    ` : "";
  const dosageHTML = item.dosage_general ? `
      <div class="cited-section">
        <p class="cited-section-label">Typical Dosage</p>
        <p class="cited-dosage">${escapeHTML2(item.dosage_general)}</p>
      </div>
    ` : "";
  container.innerHTML = `
    <div class="cited-accent-bar"></div>

    <div class="cited-header">
      <div class="cited-header-text">
        <p class="cited-title">${escapeHTML2(item.name)}</p>
        <span class="cited-category-badge">${escapeHTML2(item.category)}</span>
      </div>
    </div>

    <p class="cited-summary cited-clamp">${escapeHTML2(item.description)}</p>

    ${conditionsHTML}
    ${dosageHTML}

    <div class="cited-actions">
      <a class="cited-link" href="${ingredientUrl}" target="_blank" rel="noopener">
        Learn more on ${escapeHTML2(config.name)} ${externalLinkIcon}
      </a>
    </div>

    ${disclaimerHTML()}
    ${poweredByHTML(config)}
  `;
}

// src/widgets/condition.ts
function escapeHTML3(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function initConditionWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const slug = (_a = dataset.slug) != null ? _a : "";
  if (!slug) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el);
    renderError(container2, "Missing data-slug attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el);
  renderLoading(container);
  fetchAPI(config.apiBase, `conditions/${slug}/`).then((data) => {
    renderCondition(container, data, config);
  }).catch(() => {
    renderError(container, "Unable to load condition data. Please try again later.", config);
  });
}
function renderCondition(container, item, config) {
  const conditionUrl = `https://${config.domain}/conditions/${item.slug}/`;
  const count = item.evidence_links.length;
  const ingredientsHTML = count > 0 ? `
      <div class="cited-section">
        <p class="cited-section-label">Related Supplements (${count})</p>
        <div class="cited-conditions-list">
          ${item.evidence_links.map((link) => `
              <div class="cited-condition-row">
                ${gradeBadgeHTML(link.grade, false)}
                <span class="cited-condition-name">${escapeHTML3(link.ingredient.name)}</span>
              </div>
            `).join("")}
        </div>
      </div>
    ` : "";
  container.innerHTML = `
    <div class="cited-accent-bar"></div>

    <div class="cited-header">
      <div class="cited-header-text">
        <p class="cited-title">${escapeHTML3(item.name)}</p>
        <span class="cited-category-badge">${escapeHTML3(item.body_system)}</span>
      </div>
    </div>

    <p class="cited-summary cited-clamp">${escapeHTML3(item.description)}</p>

    ${ingredientsHTML}

    <div class="cited-actions">
      <a class="cited-link" href="${conditionUrl}" target="_blank" rel="noopener">
        Explore supplements for ${escapeHTML3(item.name)} ${externalLinkIcon}
      </a>
    </div>

    ${disclaimerHTML()}
    ${poweredByHTML(config)}
  `;
}

// src/widgets/paper.ts
var STUDY_TYPE_COLORS = {
  "Meta-Analysis": "#7c3aed",
  "Systematic Review": "#6d28d9",
  RCT: "#059669",
  "Cohort Study": "#0284c7",
  "Case-Control": "#0369a1",
  "Cross-Sectional": "#0e7490",
  "Case Report": "#92400e",
  "In Vitro": "#b45309",
  "Animal Study": "#b45309",
  Review: "#6b7280"
};
function studyTypeBadgeHTML(studyType) {
  var _a;
  const color = (_a = STUDY_TYPE_COLORS[studyType]) != null ? _a : "#6b7280";
  return `<span class="cited-study-type-badge" style="
    display:inline-block;
    padding:2px 8px;
    border-radius:12px;
    font-size:11px;
    font-weight:600;
    color:#fff;
    background:${color};
    letter-spacing:0.01em;
    line-height:1.6;
  ">${escapeHTML4(studyType)}</span>`;
}
function formatAuthors(authors) {
  if (authors.length === 0) return "";
  if (authors.length <= 3) return authors.map(escapeHTML4).join(", ");
  return `${authors.slice(0, 3).map(escapeHTML4).join(", ")} et al.`;
}
function initPaperWidget(el, config) {
  var _a, _b;
  const dataset = el.dataset;
  const pmid = (_a = dataset.pmid) != null ? _a : "";
  const doi = (_b = dataset.doi) != null ? _b : "";
  if (!pmid && !doi) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el);
    renderError(container2, "Missing data-pmid or data-doi attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el);
  renderLoading(container);
  const fetchPaper = pmid ? fetchAPI(config.apiBase, `papers/${pmid}/`).then((data) => data) : fetchAPI(config.apiBase, "papers/", { doi }).then(
    (data) => {
      var _a2;
      return (_a2 = data.results[0]) != null ? _a2 : null;
    }
  );
  fetchPaper.then((paper) => {
    if (!paper) {
      renderError(container, "Paper not found. Check the DOI or PMID.", config);
      return;
    }
    renderPaper(container, paper, config);
  }).catch(() => {
    renderError(container, "Unable to load paper data. Please try again later.", config);
  });
}
function renderPaper(container, paper, config) {
  const paperUrl = `https://${config.domain}/papers/${paper.pmid}/`;
  const authorsText = formatAuthors(paper.authors);
  const doiLink = paper.doi ? `<a class="cited-link cited-link--small" href="https://doi.org/${escapeHTML4(paper.doi)}" target="_blank" rel="noopener">doi:${escapeHTML4(paper.doi)} ${externalLinkIcon}</a>` : "";
  container.innerHTML = `
    <div class="cited-accent-bar"></div>

    <div class="cited-paper-header">
      <p class="cited-title">${escapeHTML4(paper.title)}</p>
      ${studyTypeBadgeHTML(paper.study_type)}
    </div>

    <div class="cited-paper-meta">
      ${authorsText ? `<span class="cited-authors">${authorsText}</span>` : ""}
      <span class="cited-journal">${escapeHTML4(paper.journal)}, ${paper.year}</span>
    </div>

    ${paper.abstract ? `<p class="cited-abstract">${escapeHTML4(paper.abstract)}</p>` : ""}

    <div class="cited-paper-footer">
      ${doiLink}
      ${paper.total_figures > 0 ? `<span class="cited-figures-count">${paper.total_figures} figure${paper.total_figures !== 1 ? "s" : ""}</span>` : ""}
    </div>

    <div class="cited-actions">
      <a class="cited-link" href="${escapeHTML4(paperUrl)}" target="_blank" rel="noopener">
        Read analysis on ${escapeHTML4(config.name)} ${externalLinkIcon}
      </a>
    </div>

    ${disclaimerHTML()}
    ${poweredByHTML(config)}
  `;
}
function escapeHTML4(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

// src/widgets/figure.ts
function formatAuthors2(authors) {
  if (authors.length === 0) return "";
  if (authors.length <= 3) return authors.map(escapeHTML5).join(", ");
  return `${authors.slice(0, 3).map(escapeHTML5).join(", ")} et al.`;
}
function initFigureWidget(el, config) {
  var _a, _b, _c;
  const dataset = el.dataset;
  const pmidAttr = (_a = dataset.pmid) != null ? _a : "";
  const doi = (_b = dataset.doi) != null ? _b : "";
  const figureAttr = (_c = dataset.figure) != null ? _c : "";
  if (!pmidAttr && !doi) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el);
    renderError(container2, "Missing data-pmid or data-doi attribute.", config);
    return;
  }
  if (!figureAttr) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el);
    renderError(container2, "Missing data-figure attribute (figure number required).", config);
    return;
  }
  const figureNumber = parseInt(figureAttr, 10);
  if (isNaN(figureNumber) || figureNumber < 1) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el);
    renderError(container2, "Invalid data-figure value. Must be a positive integer.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el);
  renderLoading(container);
  const resolvePmid = pmidAttr ? Promise.resolve(pmidAttr) : resolveDoiToPmid(config.apiBase, doi);
  resolvePmid.then((pmid) => {
    if (!pmid) {
      renderError(container, "Paper not found for the provided DOI.", config);
      return;
    }
    return fetchAPI(config.apiBase, "figures/", { pmid }).then((data) => {
      const figure = data.results.find((f) => f.figure_number === figureNumber);
      if (!figure) {
        renderError(
          container,
          `Figure ${figureNumber} not found in this paper. Available figures: ${data.results.map((f) => f.figure_number).join(", ") || "none"}.`,
          config
        );
        return;
      }
      renderFigure(container, figure, config);
    });
  }).catch(() => {
    renderError(container, "Unable to load figure data. Please try again later.", config);
  });
}
function renderFigure(container, figure, config) {
  const paper = figure.paper;
  const paperUrl = `https://${config.domain}/papers/${paper.pmid}/`;
  const authorsText = formatAuthors2(paper.authors);
  container.innerHTML = `
    <div class="cited-accent-bar"></div>

    <div class="cited-figure-image-wrap">
      <img
        class="cited-figure-img"
        src="${escapeHTML5(figure.image_url)}"
        alt="${escapeHTML5(`Figure ${figure.figure_number}: ${figure.caption || figure.description}`)}"
        loading="lazy"
      >
      <span class="cited-figure-badge">Fig.&nbsp;${figure.figure_number}</span>
    </div>

    ${figure.caption ? `<p class="cited-figure-caption">${escapeHTML5(figure.caption)}</p>` : ""}

    ${figure.description && figure.description !== figure.caption ? `<p class="cited-figure-description">${escapeHTML5(figure.description)}</p>` : ""}

    <div class="cited-paper-meta">
      ${authorsText ? `<span class="cited-authors">${authorsText}</span>` : ""}
      <span class="cited-journal">${escapeHTML5(paper.journal)}, ${paper.year}</span>
    </div>

    <div class="cited-actions">
      <a class="cited-link" href="${escapeHTML5(paperUrl)}" target="_blank" rel="noopener">
        View paper on ${escapeHTML5(config.name)} ${externalLinkIcon}
      </a>
    </div>

    ${disclaimerHTML()}
    ${poweredByHTML(config)}
  `;
}
function escapeHTML5(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

// src/widgets/search.ts
function escapeHTML6(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
var TYPE_LABELS = {
  ingredient: "Supplements",
  condition: "Conditions",
  paper: "Research",
  guide: "Guides",
  glossary: "Glossary"
};
function groupByType(results) {
  var _a;
  const map = /* @__PURE__ */ new Map();
  for (const result of results) {
    const group = (_a = map.get(result.type)) != null ? _a : [];
    group.push(result);
    map.set(result.type, group);
  }
  return map;
}
function initSearchWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const placeholder = (_a = dataset.placeholder) != null ? _a : "Search supplements...";
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "cited-search-widget");
  let isOpen = false;
  let query = "";
  let results = [];
  let selectedIndex = -1;
  let debounceTimer = null;
  container.innerHTML = `
    <div class="cited-search-wrapper">
      <div class="cited-search-input-row">
        <svg class="cited-search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input
          class="cited-search-input"
          type="search"
          autocomplete="off"
          spellcheck="false"
          placeholder="${escapeHTML6(placeholder)}"
          aria-label="Search ${escapeHTML6(config.name)}"
          aria-autocomplete="list"
          aria-expanded="false"
          role="combobox"
        >
      </div>
      <div class="cited-search-dropdown" role="listbox" hidden></div>
    </div>
  `;
  const input = container.querySelector(".cited-search-input");
  const dropdown = container.querySelector(".cited-search-dropdown");
  function getAllItems() {
    return Array.from(dropdown.querySelectorAll(".cited-search-result"));
  }
  function setSelectedIndex(idx) {
    const items = getAllItems();
    items.forEach((item, i) => {
      item.classList.toggle("cited-search-result--active", i === idx);
    });
    selectedIndex = idx;
  }
  function openDropdown() {
    isOpen = true;
    dropdown.hidden = false;
    input.setAttribute("aria-expanded", "true");
  }
  function closeDropdown() {
    isOpen = false;
    dropdown.hidden = true;
    input.setAttribute("aria-expanded", "false");
    selectedIndex = -1;
  }
  function renderDropdown() {
    var _a2;
    if (results.length === 0) {
      dropdown.innerHTML = `
        <div class="cited-search-empty">
          No results for <strong>${escapeHTML6(query)}</strong>
        </div>
        ${poweredByHTML(config)}
      `;
      return;
    }
    const grouped = groupByType(results);
    let html = "";
    for (const [type, items] of grouped) {
      const label = (_a2 = TYPE_LABELS[type]) != null ? _a2 : type;
      html += `<div class="cited-search-group">`;
      html += `<div class="cited-search-group-label">${escapeHTML6(label)}</div>`;
      for (const item of items) {
        const href = `https://${config.domain}${item.url}`;
        html += `
          <a
            class="cited-search-result"
            href="${href}"
            target="_blank"
            rel="noopener"
            role="option"
            tabindex="-1"
          >
            <span class="cited-search-result-name">${escapeHTML6(item.name)}</span>
            ${item.description ? `<span class="cited-search-result-desc">${escapeHTML6(item.description)}</span>` : ""}
          </a>
        `;
      }
      html += `</div>`;
    }
    html += poweredByHTML(config);
    dropdown.innerHTML = html;
  }
  async function doSearch(q) {
    var _a2;
    if (!q.trim()) {
      closeDropdown();
      return;
    }
    const searchUrl = `https://${config.domain}/api/search/?q=${encodeURIComponent(q)}`;
    try {
      const response = await fetch(searchUrl, {
        headers: { Accept: "application/json" }
      });
      if (!response.ok) throw new Error(`Search failed: ${response.status}`);
      const data = await response.json();
      results = (_a2 = data.results) != null ? _a2 : [];
    } catch (e) {
      results = [];
    }
    renderDropdown();
    openDropdown();
    setSelectedIndex(-1);
  }
  input.addEventListener("input", () => {
    query = input.value;
    if (debounceTimer !== null) {
      clearTimeout(debounceTimer);
    }
    if (!query.trim()) {
      closeDropdown();
      return;
    }
    debounceTimer = setTimeout(() => {
      void doSearch(query);
    }, 300);
  });
  input.addEventListener("keydown", (e) => {
    if (!isOpen) return;
    const items = getAllItems();
    const total = items.length;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex(selectedIndex < total - 1 ? selectedIndex + 1 : 0);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : total - 1);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (selectedIndex >= 0 && items[selectedIndex]) {
        items[selectedIndex].click();
      }
    } else if (e.key === "Escape") {
      closeDropdown();
      input.blur();
    }
  });
  document.addEventListener("click", (e) => {
    if (!isOpen) return;
    if (!el.contains(e.target)) {
      closeDropdown();
    }
  });
}

// src/widgets/safety.ts
function escapeHTML7(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function getSafetyRating(sideEffects, interactions) {
  const hasSideEffects = sideEffects.length > 0;
  const hasInteractions = interactions.length > 0;
  if (hasSideEffects && sideEffects.length >= 3 && hasInteractions) {
    return { level: "consult", label: "Consult Doctor", color: "#ef4444" };
  }
  if (hasInteractions) {
    return { level: "caution", label: "Use Caution", color: "#f59e0b" };
  }
  return { level: "safe", label: "Generally Safe", color: "#10b981" };
}
function initSafetyWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const slug = (_a = dataset.ingredient) != null ? _a : "";
  if (!slug) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el);
    renderError(container2, "Missing data-ingredient attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el);
  renderLoading(container);
  fetchAPI(config.apiBase, `ingredients/${slug}/`).then((data) => {
    renderSafety(container, data, config);
  }).catch(() => {
    renderError(container, "Unable to load safety data. Please try again later.", config);
  });
}
function renderSafety(container, item, config) {
  const safetyUrl = `https://${config.domain}/ingredients/${item.slug}/`;
  const rating = getSafetyRating(item.side_effects, item.interactions);
  const visibleSideEffects = item.side_effects.slice(0, 5);
  const visibleInteractions = item.interactions.slice(0, 3);
  const sideEffectsHTML = visibleSideEffects.length > 0 ? `
      <div class="cited-section">
        <p class="cited-section-label">Potential Side Effects</p>
        <ul class="cited-list">
          ${visibleSideEffects.map((se) => `<li>${escapeHTML7(se)}</li>`).join("")}
          ${item.side_effects.length > 5 ? `<li class="cited-list-more">+${item.side_effects.length - 5} more</li>` : ""}
        </ul>
      </div>
    ` : "";
  const interactionsHTML = visibleInteractions.length > 0 ? `
      <div class="cited-section">
        <p class="cited-section-label">Drug Interaction Warnings</p>
        <ul class="cited-list cited-list-warning">
          ${visibleInteractions.map((ia) => `<li>${escapeHTML7(ia)}</li>`).join("")}
          ${item.interactions.length > 3 ? `<li class="cited-list-more">+${item.interactions.length - 3} more</li>` : ""}
        </ul>
      </div>
    ` : "";
  container.innerHTML = `
    <div class="cited-accent-bar"></div>

    <div class="cited-header">
      <div class="cited-safety-badge" style="
        display:inline-flex;
        align-items:center;
        justify-content:center;
        padding:6px 14px;
        border-radius:20px;
        font-weight:700;
        font-size:13px;
        color:#fff;
        background:${rating.color};
        flex-shrink:0;
        letter-spacing:0.01em;
        line-height:1.4;
      ">${escapeHTML7(rating.label)}</div>
      <div class="cited-header-text">
        <p class="cited-title">${escapeHTML7(item.name)}</p>
        <p class="cited-grade-label">Safety Profile</p>
      </div>
    </div>

    ${sideEffectsHTML}
    ${interactionsHTML}

    <div class="cited-actions">
      <a class="cited-link" href="${safetyUrl}" target="_blank" rel="noopener">
        Full safety profile on ${escapeHTML7(config.name)} ${externalLinkIcon}
      </a>
    </div>

    ${disclaimerHTML()}
    ${poweredByHTML(config)}
  `;
}

// src/core.ts
function initWidget(el, type, config) {
  switch (type) {
    case "evidence":
      initEvidenceWidget(el, config);
      break;
    case "ingredient":
      initIngredientWidget(el, config);
      break;
    case "condition":
      initConditionWidget(el, config);
      break;
    case "paper":
      initPaperWidget(el, config);
      break;
    case "figure":
      initFigureWidget(el, config);
      break;
    case "search":
      initSearchWidget(el, config);
      break;
    case "safety":
      initSafetyWidget(el, config);
      break;
    default:
      break;
  }
}
function initAll(config) {
  const elements = document.querySelectorAll(`[${config.attribute}]`);
  elements.forEach((el) => {
    if (el.shadowRoot) return;
    const dataKey = config.attribute.replace("data-", "");
    const widgetType = el.dataset[dataKey];
    if (!widgetType) return;
    initWidget(el, widgetType, config);
  });
}
(function bootstrap() {
  const config = '{"site":"citedhealth","name":"Cited Health","domain":"citedhealth.com","accent":"#2563EB","attribute":"data-citedhealth","apiBase":"https://citedhealth.com/api/","searchPath":"/search/","organName":"All Health Topics","organSlug":"hub"}';
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initAll(config));
  } else {
    initAll(config);
  }
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        var _a;
        if (node.nodeType !== Node.ELEMENT_NODE) return;
        const el = node;
        if (el.hasAttribute(config.attribute) && !el.shadowRoot) {
          const dataKey = config.attribute.replace("data-", "");
          const widgetType = el.dataset[dataKey];
          if (widgetType) initWidget(el, widgetType, config);
        }
        (_a = el.querySelectorAll) == null ? void 0 : _a.call(el, `[${config.attribute}]`).forEach((child) => {
          if (!child.shadowRoot) {
            const dataKey = config.attribute.replace("data-", "");
            const widgetType = child.dataset[dataKey];
            if (widgetType) initWidget(child, widgetType, config);
          }
        });
      });
    });
  });
  observer.observe(document.body || document.documentElement, {
    childList: true,
    subtree: true
  });
})();
