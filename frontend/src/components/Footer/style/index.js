import styled from 'styled-components';

export const FooterStyle = styled.div`


.br-footer {
    --footer-background: var(--color-primary-darken-02);
    --footer-color: var(--color-secondary-01);
    --footer-border: var(--color-secondary-04);
    --footer-logo-height: 48px;
    --footer-logo-width: 180px;
    --footer-logo-padding: var(--spacing-scale-6x) 0 var(--spacing-scale-4x);
    --footer-assigns-height: 46px;
    --footer-assigns-width: 180px;
    background: var(--footer-background);
    border-top: 1px solid var(--footer-border);
    color: var(--footer-color);
    display: block;
    --bg-color: var(--footer-background);
    --color: var(--color-dark);
    --color-rgb: var(--color-dark-rgb);
    --color-hsl: var(--color-dark-hsl);
    --text-color: var(--color);
    --interactive: var(--interactive-dark);
    --interactive-rgb: var(--interactive-dark-rgb);
    --interactive-dark-hsl: var(--interactive-dark-hsl);
    --visited: var(--gray-20);
    --hover: var(--surface-opacity-sm);
    --pressed: var(--surface-opacity-lg);
    --focus-color: var(--gold-vivid-20);
    --focus: var(--gold-vivid-20);
    --active: var(--pure-0);
  }
  .br-footer .br-item {
    --color: var(--color-dark);
    --color-rgb: var(--color-dark-rgb);
    --color-hsl: var(--color-dark-hsl);
    --text-color: var(--color);
    --interactive: var(--interactive-dark);
    --interactive-rgb: var(--interactive-dark-rgb);
    --interactive-dark-hsl: var(--interactive-dark-hsl);
    --visited: var(--gray-20);
    --hover: var(--surface-opacity-sm);
    --pressed: var(--surface-opacity-lg);
    --focus-color: var(--gold-vivid-20);
    --focus: var(--gold-vivid-20);
    --active: var(--pure-0);
  }
  .br-footer[inverted], .br-footer.inverted {
    --footer-background: var(--bg-color);
    --footer-color: var(--text-color);
    --color: var(--color-light);
    --color-rgb: var(--color-light-rgb);
    --color-hsl: var(--color-light-hsl);
    --text-color: var(--color);
    --interactive: var(--interactive-light);
    --interactive-rgb: var(--interactive-light-rgb);
    --interactive-hsl: var(--interactive-light-hsl);
    --visited: var(--blue-warm-vivid-80);
    --hover: var(--surface-opacity-xs);
    --pressed: var(--surface-opacity-md);
    --focus-color: var(--gold-vivid-40);
    --focus: var(--gold-vivid-40);
    --active: var(--blue-warm-vivid-80);
  }
  .br-footer[inverted] .br-item, .br-footer.inverted .br-item {
    --color: var(--color-light);
    --color-rgb: var(--color-light-rgb);
    --color-hsl: var(--color-light-hsl);
    --text-color: var(--color);
    --interactive: var(--interactive-light);
    --interactive-rgb: var(--interactive-light-rgb);
    --interactive-hsl: var(--interactive-light-hsl);
    --visited: var(--blue-warm-vivid-80);
    --hover: var(--surface-opacity-xs);
    --pressed: var(--surface-opacity-md);
    --focus-color: var(--gold-vivid-40);
    --focus: var(--gold-vivid-40);
    --active: var(--blue-warm-vivid-80);
  }
  .br-footer .logo {
    padding: var(--footer-logo-padding);
  }
  .br-footer .logo img {
    max-height: var(--footer-logo-height);
    max-width: var(--footer-logo-widht);
  }
  .br-footer .br-item {
    align-items: center;
    display: flex;
  }
  .br-footer .br-item:not(:disabled):hover {
    background-image: linear-gradient(rgba(var(--interactive-rgb), var(--hover)), rgba(var(--interactive-rgb), var(--hover)));
  }
  .br-footer .br-item:not(:disabled):active {
    background-image: linear-gradient(rgba(var(--interactive-rgb), var(--pressed)), rgba(var(--interactive-rgb), var(--pressed)));
  }
  .br-footer .br-item.active {
    background: transparent;
  }
  .br-footer .br-item .content {
    flex: 1;
  }
  .br-footer .br-list.horizontal {
    display: flex;
    flex-wrap: wrap;
  }
  @media (min-width: 992px) {
    .br-footer .br-list.horizontal .br-item .support:last-child {
      display: none;
      pointer-events: none;
    }
    .br-footer .br-list.horizontal .br-item .content {
      flex: 1;
    }
    .br-footer .br-list.horizontal .br-list {
      background-image: none;
      max-height: 200em !important;
    }
  }
  .br-footer .br-list.horizontal .header {
    width: 100%;
  }
  .br-footer .br-list.horizontal .br-item,
  .br-footer .br-list.horizontal .br-list .br-item {
    height: 4em;
  }
  .br-footer .br-list.horizontal .br-item .content,
  .br-footer .br-list.horizontal .br-list .br-item .content {
    box-orient: vertical;
    display: box;
    font-weight: var(--font-weight-bold);
    height: auto;
    -webkit-line-clamp: 2;
    line-height: 16px;
    max-height: 32px;
    overflow: hidden;
    padding: 0 var(--spacing-scale-2x);
    text-overflow: ellipsis;
  }
  .br-footer .br-list.horizontal .col,
  .br-footer .br-list.horizontal [class*=col-] {
    flex-grow: 0;
    padding: 0;
  }
  @media (max-width: 991px) {
    .br-footer .br-list.horizontal .col,
  .br-footer .br-list.horizontal [class*=col-] {
      flex-basis: 100% !important;
      max-width: 100%;
    }
    .br-footer .br-list.horizontal .col .br-item.header.active,
  .br-footer .br-list.horizontal [class*=col-] .br-item.header.active {
      border-bottom: 1px solid var(--footer-border);
    }
    .br-footer .br-list.horizontal .col .br-item.header.active + .br-list,
  .br-footer .br-list.horizontal [class*=col-] .br-item.header.active + .br-list {
      border-bottom: 1px solid var(--footer-border);
    }
  }
  .br-footer .social-network {
    border: 0;
  }
  .br-footer .assigns img {
    max-height: var(--footer-assigns-height);
    max-width: var(--footer-assigns-width);
  }
  @media (min-width: 992px) {
    .br-footer .info {
      text-align: center;
    }
  };`
  