(function () {
  'use strict';

  var NAV = [
    { heading: 'Getting Started', links: [
      { href: 'index.html', label: 'Overview' },
      { href: 'installation.html', label: 'Installation' },
      { href: 'core-concepts.html', label: 'Core Concepts' },
    ]},
    { heading: 'Using Traceline', links: [
      { href: 'test-cases.html', label: 'Test Cases' },
      { href: 'test-execution.html', label: 'Test Execution' },
      { href: 'requirements-issues.html', label: 'Requirements & Issues' },
      { href: 'ai-features.html', label: 'AI Features' },
    ]},
    { heading: 'Extending Traceline', links: [
      { href: 'integrations-api.html', label: 'Integrations & API' },
    ]},
    { heading: 'Administration', links: [
      { href: 'administration.html', label: 'Users, Settings & Licensing' },
    ]},
  ];

  function currentPage() {
    var path = window.location.pathname.split('/');
    return path[path.length - 1] || 'index.html';
  }

  function render() {
    var current = currentPage();
    var html = '';
    NAV.forEach(function (group) {
      html += '<h5>' + group.heading + '</h5><ul>';
      group.links.forEach(function (link) {
        var active = link.href === current ? ' active' : '';
        html += '<li><a href="' + link.href + '" class="' + active.trim() + '">' + link.label + '</a></li>';
      });
      html += '</ul>';
    });
    var mount = document.getElementById('docs-sidebar-nav');
    if (mount) mount.innerHTML = html;
  }

  render();
})();
