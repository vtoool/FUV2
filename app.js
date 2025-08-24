(function(){
  'use strict';
// ====== BIG NAME POOLS ======
const FIRST = [
  "LIAM","NOAH","OLIVER","ELIJAH","JAMES","WILLIAM","BENJAMIN","LUCAS","HENRY","ALEXANDER","MASON","MICHAEL","ETHAN","DANIEL","JACOB","LOGAN","JACKSON","LEVI","SEBASTIAN","MATEO","JACK","OWEN","THEODORE","AIDEN","SAMUEL","JOSEPH","JOHN","DAVID","WYATT","MATTHEW","LUKE","ASHER","CARTER","JULIAN","GRAYSON","LEO","JAYDEN","GABRIEL","ISAAC","LINCOLN","ANTHONY","HUDSON","DYLAN","EZRA","THOMAS","CHARLES","CHRISTOPHER","JAXON","MAVERICK","JOSIAH","ISAIAH","ANDREW","ELIAS","JOSHUA","NATHAN","CALEB","RYAN","ADRIAN","MILES","ELI","NOLAN","CHRISTIAN","AARON","CAMERON","EZEKIEL","COLTON","LUCA","LANDON","HUNTER","JONATHAN","SANTIAGO","AXEL","EASTON","COOPER","JEREMIAH","ANGEL","ROMAN","CONNOR","JAMESON","ROBERT","GREYSON","JORDAN","IAN","CARSON","JACE","ADAM","XAVIER","JOSE","EVERETT","DECLAN","EVAN","KAYDEN","PARKER","WESLEY","KAI","WESTON","MICAH","VINCENT","SILAS","BENNETT","BROOKS","HARRISON","RYDER","GAEL","ROWAN","GEORGE","LUIS","CHASE","COLE","NATHANIEL","ZACHARY","CALVIN","JONAH","MAX","MAXWELL","ANTONIO","TYLER","DIEGO","JASPER","VICTOR","AMIR","KINGSTON","MADDOX","RYKER","ASHTON","CARLOS","DAMIAN","ATLAS","BARRETT","LEON","FELIX","EMILIANO","ALEJANDRO","TUCKER","BRANDON","KEVIN","NICOLAS","ARLO","EMMANUEL","TRISTAN","MALCOLM","OMAR","ODIN","REMY","EDWIN","ELLIOTT","EDGAR","CESAR","MARIO","MARCOS","FERNANDO","MIGUEL","JOAQUIN","RICARDO","GIOVANNI","ABEL","MARCO","ANDRES","HECTOR","MATIAS","THIAGO","ENZO","LORENZO","ANGELO","RAFAEL","BRUNO","PAOLO","PEDRO","JUAN","JORGE","PABLO","SERGIO","ALBERTO","ROBERTO","LORENZO",
  "OLIVIA","EMMA","CHARLOTTE","AMELIA","AVA","SOPHIA","ISABELLA","MIA","EVELYN","HARPER","LUNA","CAMILA","GIANNA","ELIZABETH","ELEANOR","ELLA","ABIGAIL","SOFIA","AVERY","SCARLETT","EMILY","ARIA","PENELOPE","CHLOE","LAYLA","MILA","NORA","HAZEL","MADISON","ELLIE","LILY","NOVA","ISLA","GRACE","VIOLET","AURORA","RILEY","ZOEY","WILLOW","EMILIA","STELLA","ZOE","VICTORIA","HANNAH","ADDISON","LEAH","LUCY","ELIANA","IVY","EVERLY","LILLIAN","PAISLEY","ELENA","NAOMI","MAYA","NATALIE","KINSLEY","AUDREY","BROOKLYN","BELLA","CLAIRE","SKYLAR","SAVANNAH","AALIYAH","GENESIS","SOPHIE","ALICE","KENNEDY","SADIE","HAILEY","EVA","AUTUMN","QUINN","NATALIA","JOSEPHINE","SARAH","CORA","EMERY","SAMANTHA","PIPER","LEILANI","RUBY","RYLEE","ATHENA","AUBREY","ARIANA","ALLISON","MADELYN","ADELINE","PEYTON","BRIELLE","TAYLOR","LAUREN","KATHERINE","ALEXANDRA","MARGARET","JULIET","JADE","CAMILLE","ELODIE","AMELIE","JULIETTE",
  "MOHAMMED","MUHAMMAD","AHMED","ALI","OMAR","YOUSSEF","YUSUF","IBRAHIM","ISMAIL","AMIR","SAMIR","KARIM","HASSAN","HUSSEIN","ZAIN","ZAYD","FARIS","NOOR","ZARA","AISHA","FATIMA",
  "AARAV","VIVAAN","ADITYA","VIHAAN","ARJUN","REYANSH","ATHARV","ARNAV","ADVAIT","ISHAAN","ROHAN","KABIR","AYAAN","DHRUV","KRISH","ANAYA","IRA","DIYA","AANYA","ISHA","KIARA","MIRA","RIYA","SAANVI","NAVYA","TANYA","PRIYA",
  "WEI","MING","HAO","JIAN","JIA","YUN","ZHI","LEI","TIAN","XIAO","LING","MEI","BORIS","CHENG","XIN","LI",
  "HARU","REN","YUKI","SORA","RIKU","AKIRA","DAIKI","KAITO","TAKUMI","SOTA","SAKURA","YUNA","ALMER","HANA",
  "MINHO","JISOO","JIHOON","SEOJUN","HYEJIN","SOO","HYUN","JOON",
  "ALEXEI","IVAN","NIKITA","DMITRI","PAVEL","OLEG","SERGEY","ANDREI","MIKHAIL","IGOR","NATALIA","TATIANA","OLGA","IRINA","ANNA","SVETLANA",
  "LOUIS","JULES","HUGO","PIERRE","MATHIEU","ANTOINE","ETIENNE","CAMILLE","ELODIE","AMELIE","JULIEN","LUC","MARCEL","CLAIRE","JULIETTE",
  "KOFI","KWAME","KOJO","AMA","ABENA","EFUA","NANA","AMINA","ZURI","NIA","THABO","SIPHO","NALEDI","LERATO","ZOLA",
  "NOA","YAEL","SHIRA","LIOR","EDEN","GAL","TAMAR"
];

const LAST = [
  "SMITH","JOHNSON","WILLIAMS","BROWN","JONES","GARCIA","MILLER","DAVIS","RODRIGUEZ","MARTINEZ","HERNANDEZ","LOPEZ","GONZALEZ","WILSON","ANDERSON","THOMAS","TAYLOR","MOORE","JACKSON","MARTIN",
  "LEE","PEREZ","THOMPSON","WHITE","HARRIS","SANCHEZ","CLARK","RAMIREZ","LEWIS","ROBINSON","WALKER","YOUNG","ALLEN","KING","WRIGHT","SCOTT","TORRES","NGUYEN","HILL","FLORES",
  "GREEN","ADAMS","NELSON","BAKER","HALL","RIVERA","CAMPBELL","MITCHELL","CARTER","ROBERTS","GOMEZ","PHILLIPS","EVANS","TURNER","DIAZ","PARKER","CRUZ","EDWARDS","COLLINS","REYES",
  "STEWART","MORRIS","MORALES","MURPHY","COOK","ROGERS","GUTIERREZ","ORTIZ","MORGAN","COOPER","PETERSON","BAILEY","REED","KELLY","HOWARD","RAMOS","KIM","COX","WARD","RICHARDSON",
  "WATSON","BROOKS","CHAVEZ","WOOD","JAMES","BENNETT","GRAY","MENDOZA","ALVAREZ","CASTILLO","SANDERS","PATEL","MYERS","LONG","ROSS","FOSTER","JIMENEZ","POWELL","JENKINS","PERRY",
  "RUSSELL","SULLIVAN","BELL","COLEMAN","BUTLER","HENDERSON","BARNES","GONZALES","FISHER","VASQUEZ","SIMMONS","ROMERO","JORDAN","PATTERSON","ALEXANDER","HAMILTON","GRAHAM","REYNOLDS","GRIFFIN","WALLACE",
  "MORENO","WEST","COLE","HAYES","BRYANT","HERRERA","GIBSON","ELLIS","TRAN","MEDINA","AGUILAR","STEVENS","MURRAY","FORD","CASTRO","MARSHALL","OWENS","HARRISON","FERNANDEZ","MCDONALD",
  "WOODS","WASHINGTON","KENNEDY","WELLS","VARGAS","HENRY","CHEN","FREEMAN","WEBB","TUCKER","GUZMAN","BURNS","CRAWFORD","OLSON","SIMPSON","PORTER","HUNTER","GORDON","MENDEZ","SILVA",
  "SHAW","SNYDER","MASON","DIXON","MUNOZ","HUNT","HICKS","HOLMES","PALMER","WAGNER","BLACK","ROBLES","DALTON","BISHOP","CARPENTER","CARLSON","CHANG","CHOI","CHO","CLARKE",
  "DANIELS","DAVIDSON","DEAN","DELGADO","DENNIS","DOMINGUEZ","DUNCAN","DUNN","EATON","ESCOBAR","ESPINOZA","ESTRADA","FERGUSON","FIGUEROA","FLEMING","FRANKLIN","FUENTES","GALLAGHER","GARDNER","GARZA",
  "GIBBS","GILBERT","GILL","GILMORE","GLASS","GLOVER","GOODMAN","GRANT","GREENE","GREGORY","GRIFFITH","GROSS","GUERRERO","HALE","HANSEN","HANSON","HARDY","HARPER","HART","HARVEY",
  "HAWKINS","HAYNES","HEATH","HECTOR","HENDRICKS","HINES","HOFFMAN","HOGAN","HOLLAND","HOLT","HOPKINS","HORN","HOWE","HUANG","HUBBARD","HUDSON","HUFFMAN","HUGHES","HURST","IBARRA",
  "INGRAM","JACOBS","JACOBSON","JENSEN","JOHNS","JOHNSTON","KANE","KAUFMAN","KELLER","KERR","KHAN","KHANNA","KLINE","KLEIN","KNIGHT","LAMB","LAMBERT","LANE","LARSON","LAWSON",
  "LE","LEACH","LEON","LEONARD","LESTER","LI","LIN","LITTLE","LIU","LLOYD","LOVE","LOWE","LUCAS","LUNA","LYNN","MALDONADO","MARQUEZ","MASSEY","MATHEWS","MATTHEWS",
  "MAXWELL","MAY","MCCARTHY","MCCOY","MCDOWELL","MCGEE","MCKENZIE","MCKINNEY","MEJIA","MEJIAS","MEYER","MEYERS","MELENDEZ","MERCADO","MEZA","MICHAEL","MIDDLETON","MIRANDA","MONROE","MONTES",
  "MONTGOMERY","MONTOYA","MOODY","MORAN","MOSS","MUELLER","MULLINS","MURILLO","NASH","NAVARRO","NEAL","NG","NICHOLS","NICHOLSON","NIELSEN","NIEVES","NIXON","OCONNOR","ODONNELL","OLIVAS",
  "OLIVEIRA","OLIVER","OLSON","ONEAL","ORR","ORTEGA","OSBORNE","PACE","PACHECO","PADILLA","PALMER","PARK","PARKS","PARRISH","PARSONS","PENA","PEREIRA","PERKINS","PETERS","PHAM",
  "PIERCE","PINEDA","POPE","PORTILLO","POTTER","PRATT","PRICE","PRINCE","PUGH","QUINN","RAJ","RANGEL","RAY","REID","REILLY","RHODES","RICE","RICH","RICHARDS","RILEY",
  "RIOS","RIVAS","RIVERA","ROBBINS","ROBLES","RODGERS","RODRIGUEZ","ROJAS","ROMAN","ROMERO","ROSA","ROSALES","ROSARIO","ROSE","ROY","RUIZ","RUSSO","SALAS","SALAZAR","SALDANA",
  "SALGADO","SANDOVAL","SANTANA","SANTIAGO","SANTOS","SAUNDERS","SAVAGE","SCHMIDT","SCHNEIDER","SCHULTZ","SCHWARTZ","SELLERS","SERRANO","SHARMA","SHERMAN","SHORT","SIMON","SIMPSON","SINGH","SOLIS",
  "SOLOMON","SOTO","SPARKS","SPENCER","STAFFORD","STANLEY","STEELE","STEPHENS","STEPHENSON","STEVENS","STEVENSON","STOKES","STONE","STRICKLAND","SUAREZ","SUMMERS","SWANSON","TAM","TAN","TATE",
  "TERRY","THOMAS","THOMPSON","TODD","TORRES","TOWNSEND","TRUJILLO","TURNER","TYLER","VALDEZ","VALENZUELA","VASQUEZ","VEGA","VELASQUEZ","VELAZQUEZ","VELASCO","VILLANUEVA","VINCENT","WAGNER","WALSH",
  "WALTERS","WALTON","WANG","WARNER","WARREN","WATERS","WATKINS","WATSON","WEEKS","WEISS","WELCH","WERNER","WEST","WHEELER","WHITE","WHITNEY","WILLIAMS","WILLIS","WILSON","WONG",
  "WOOD","WOODARD","WOODS","WU","WYATT","XU","YANG","YE","YODER","YOUNG","ZAMORA","ZAVALA","ZHANG","ZHAO","ZHU","ZIMMERMAN"
];

  /* ========= Helpers ========= */
const $  = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));

function getNow(){
  let base;
  if (state?.settings?.timeOverride){
    base = new Date(state.settings.timeOverride);
  } else {
    base = new Date();
  }
  const tz = state?.settings?.officeTz;
  if (tz){
    try{
      const parts = new Intl.DateTimeFormat('en-US', {
        timeZone: tz,
        year:'numeric', month:'2-digit', day:'2-digit',
        hour:'2-digit', minute:'2-digit', second:'2-digit', hour12:false
      }).formatToParts(base);
      const get = type => Number(parts.find(p=>p.type===type).value);
      return new Date(Date.UTC(get('year'), get('month')-1, get('day'), get('hour'), get('minute'), get('second')));
    }catch(_){
      return base;
    }
  }
  return base;
}
  // === Drawer pin/unpin synchronizer (call after any open/close)
function setBodyPinned(){
  const calPinned   = !!document.querySelector('#calendarDrawer.open.pinned');
  const namesPinned = !!document.querySelector('#namesDrawer.open.pinned');
  document.body.classList.toggle('drawer-pinned', calPinned || namesPinned);

    document.body.classList.toggle('drawer-cal-pinned',   calPinned);
  document.body.classList.toggle('drawer-names-pinned', namesPinned);
  // Sync right-edge tab states if present
  const tabCal   = document.getElementById('tabCal');
  const tabNames = document.getElementById('tabNames');
  if (tabCal)   tabCal.setAttribute('aria-pressed', String(calPinned));
  if (tabNames) tabNames.setAttribute('aria-pressed', String(namesPinned));
 afterLayout();
}
// Measure drawer width and reserve space so it doesn't cover main content
function updateDrawerOverlap(){
  const drawer = ['calendarDrawer','namesDrawer']
    .map(id => document.getElementById(id))
    .find(d => d && d.classList.contains('open'));
  const panel = drawer?.querySelector('.drawer-panel');

  if (!panel){
    document.body.classList.remove('drawer-overlap');
    document.body.style.removeProperty('--drawerW');
    document.body.style.removeProperty('--drawerPad');
    return;
  }

  // account for the fixed tool rail width
  const railW = parseFloat(getComputedStyle(document.documentElement)
    .getPropertyValue('--rail-w')) || 0;
  const space = panel.getBoundingClientRect().width + railW;

  // if the drawer fits entirely in the right margin, keep the app centered
  const pageMax = parseFloat(getComputedStyle(document.documentElement)
    .getPropertyValue('--page-max')) || 0;
  const sideMargin = (window.innerWidth - pageMax) / 2;
  if (sideMargin >= space){
    document.body.classList.remove('drawer-overlap');
    document.body.style.removeProperty('--drawerW');
    document.body.style.removeProperty('--drawerPad');
    return;
  }

  // otherwise reserve space so the drawer doesn't cover the main content
  const avail = window.innerWidth - space;          // space left after drawer
  const content = Math.min(avail, pageMax);         // actual content width
  const pad = Math.max((avail - content) / 2, 0);   // leftover space to center

  document.body.classList.add('drawer-overlap');
  document.body.style.setProperty('--drawerW', space + 'px');
  document.body.style.setProperty('--drawerPad', pad + 'px');
}




// call this instead of plain updateDrawerOverlap() whenever drawers toggle
function afterLayout(){
  updateDrawerOverlap();                     // now
  requestAnimationFrame(updateDrawerOverlap);// next frame
  setTimeout(updateDrawerOverlap, 220);      // after transition
}

// keep the existing resize hook
window.addEventListener('resize', afterLayout);

// make transitions/animations also refresh the measurement
['calendarDrawer','namesDrawer'].forEach(id=>{
  const d = document.getElementById(id);
  d?.addEventListener('transitionend', updateDrawerOverlap);
  d?.addEventListener('animationend', updateDrawerOverlap);
});

// also refresh on load / after fonts settle
window.addEventListener('load', updateDrawerOverlap);
document.fonts?.ready?.then?.(updateDrawerOverlap);

function updateHeaderHeight(){
  const h = document.querySelector('header');
  if (h){
    document.documentElement.style.setProperty('--header-h', h.getBoundingClientRect().height + "px");
  }
}
window.addEventListener('load', updateHeaderHeight);
window.addEventListener('resize', updateHeaderHeight);
document.fonts?.ready?.then?.(updateHeaderHeight);




  const storeKey  = 'followup_crm_v21';
  const THEME_KEY = 'followup_crm_theme';
const SORT_KEY  = 'followup_crm_sort';
const SHOW_KEY  = 'followup_crm_show';

function firstNameOf(full){
  const n = String(full||'').trim();
  if(!n) return '';
  return n.split(/\s+/)[0];
}
function agentVars(){
  const a = state.settings.agent || {};
  const name  = (a.name||'').trim();
  const phone = (a.phone||'').trim();
  const emailLocal = name ? name.toLowerCase().replace(/\s+/g,'') : '';
  return { name, phone, emailLocal };
}
function fillSmsTemplate(tpl, client){
  const { name:agentName, phone:agentPhone, emailLocal } = agentVars();
  const fn = firstNameOf(client?.name||'') || (client?.name||'');
  return String(tpl||'')
    .replace(/\bFIRSTNAME\b/g, fn)
    .replace(/\(agent phone number\)/g, agentPhone || '')
    .replace(/\(agent name\)/g, emailLocal || '')
    .replace(/\(agent\)/g, agentName || '');
}

  // Safe tab opener (no access back to this page)
function safeOpen(url, target = '_blank'){
  const w = window.open(url, target, 'noopener');
  try{ if (w) w.opener = null; }catch(_){}
  return w;
}
// Returns "-LAST/FIRST"
function formatName(last, first){
  return `-${String(last||'').toUpperCase()}/${String(first||'')}`;
}

// Pick n unique combos; falls back to best effort if arrays are tiny
function pickUniqueCombos(firsts, lasts, n=9){
  const out = new Set();
  const maxTries = n * 50;
  let tries = 0;
  while (out.size < n && tries < maxTries){
    const f = firsts[Math.floor(Math.random()*firsts.length)]?.trim();
    const l = lasts[Math.floor(Math.random()*lasts.length)]?.trim();
    if (f && l) out.add(formatName(l, f));
    tries++;
  }
  // If arrays are very small, top up (allowing collisions) so we always return n
  while (out.size < n){
    const f = firsts[Math.floor(Math.random()*firsts.length)] || 'Alex';
    const l = lasts[Math.floor(Math.random()*lasts.length)] || 'SMITH';
    out.add(formatName(l, f));
  }
  return Array.from(out).slice(0, n);
}

  // --- Email template helpers (simple version) ---
const EMAIL_IMAGES = {
  logo: 'https://ci3.googleusercontent.com/meips/ADKq_NYmYfaRw3D78btVBQZAAF7_4qAnOg5xl0rM3mCNmoMYDyfAp3NjVS08hF1bnwWovNvKqVGpdEHyt4G7u0AKHVCZDlAoVHTNnP1q7xOdL4el8DNJK3PGK5_LVwIolv0oRBtcSyRdzovSwWxGdzoYsOfLZJWghi1Kn_cctsWUoETcFwWm8XE1Pg=s0-d-e1-ft#http://cdn.mcauto-images-production.sendgrid.net/5006d258c43a9894/219ba0f4-cad2-4073-b7d7-c4e5de05e227/260x64.png' // host this somewhere stable
};

  // Minimal inert shim for older browsers
function applyInert(el){
  if (!el) return;
  el.setAttribute('inert','');
  el.setAttribute('aria-hidden','true');

  // Disable tab focus inside target
  const focusables = el.querySelectorAll(
    'a, button, input, select, textarea, details, [tabindex]:not([tabindex="-1"])'
  );
  focusables.forEach(n => {
    if (!n.hasAttribute('data-inert-prev-tabindex')) {
      const prev = n.getAttribute('tabindex');
      if (prev !== null) n.setAttribute('data-inert-prev-tabindex', prev);
      n.setAttribute('tabindex','-1');
      n.setAttribute('data-inert-tmp','');
    }
  });
}

function removeInert(el){
  if (!el) return;
  el.removeAttribute('inert');
  el.removeAttribute('aria-hidden');

  const tmp = el.querySelectorAll('[data-inert-tmp]');
  tmp.forEach(n => {
    const prev = n.getAttribute('data-inert-prev-tabindex');
    if (prev === null || prev === '') n.removeAttribute('tabindex');
    else n.setAttribute('tabindex', prev);
    n.removeAttribute('data-inert-prev-tabindex');
    n.removeAttribute('data-inert-tmp');
  });
}

// Pull last IATA in route (e.g., JFK-NAP -> NAP) → naive city map
const IATA_CITY = {
  NAP: 'Naples',
  LHR: 'London',
  CDG: 'Paris',
  FCO: 'Rome',
  DFW: 'Dallas',
  BRU: 'Brussels',
  /* …extend… */
};
function inferDestination(route){
  const legs = String(route||'').toUpperCase().split(/[-–—>\s]+/).filter(Boolean);
  if (!legs.length) return 'your destination';
  let code;
  if (legs.length >= 3 && legs[0] === legs[legs.length - 1]) code = legs[legs.length - 2];
  else code = legs[legs.length - 1];
  return IATA_CITY[code] || code || 'your destination';
}

// IATA → IANA timezone map is loaded separately (see iata-tz.js)
function tzFromRoute(route){
  const first = String(route||'').toUpperCase().split(/[-–—>\s]+/).filter(Boolean)[0];
  return window.IATA_TZ?.[first] || '';
}

function clientTz(c){
  if(c?.home){
    return window.IATA_TZ?.[c.home] || tzFromRoute(c.home);
  }
  if(c?.route){
    return tzFromRoute(c.route);
  }
  return '';
}

function buildHomeList(){
  const list = document.getElementById('homeList');
  if(!list) return;
  if(list.options.length) return; // populate once
  const codes = Object.keys(window.IATA_TZ || {}).sort();
  const frag = codes.map(code=>`<option value="${code}"></option>`).join('');
  list.innerHTML = frag;
}

function formatTimeInTz(tz){
  return new Intl.DateTimeFormat([], { hour: '2-digit', minute: '2-digit', hour12:false, timeZone: tz }).format(getNow());
}

function tzAbbr(tz){
  try{
    return new Intl.DateTimeFormat('en-US', { timeZone: tz, timeZoneName:'short' })
      .formatToParts(getNow())
      .find(p=>p.type==='timeZoneName').value;
  }catch(_){
    return tz;
  }
}

function updateLocalTimes(){
  const now = getNow();
  const blink = Math.floor(now.getTime() / 1000) % 2 === 0;
  $$('.local-time').forEach(el=>{
    const tz = el.getAttribute('data-tz');
    if(!tz) return;
    const formatter = new Intl.DateTimeFormat([], { hour: '2-digit', minute: '2-digit', hour12:false, timeZone: tz });
    let time = formatter.format(now);
    if(!blink) time = time.replace(':', ' ');
    el.textContent = time;
    const hour = Number(new Intl.DateTimeFormat([], { hour: 'numeric', hour12:false, timeZone: tz }).format(now));
    el.classList.toggle('lt-red', hour < 9 || hour >= 21);
    el.classList.toggle('lt-green', hour >= 9 && hour < 21);
  });
}
setInterval(updateLocalTimes, 1000);


// Very lightweight template (match your screenshot; tweak copy as you like)
function computeEmailContent(t, c){
  const { name:agentName, phone:agentPhone, emailLocal } = agentVars();
  const first = firstNameOf(c?.name || '') || (c?.name || 'there');
  const dest  = inferDestination(c?.route);
  const subject = `Trip to ${dest}: request for feedback`;

  const html = `
  <div style="background:#f5f7fb;padding:24px 0">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
      <tr><td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background:#fff;border-radius:8px;overflow:hidden">
<tr>
  <td align="center"
      style="background:#f3f6fb;padding:24px 0;border-bottom:1px solid #e8ecf4">
    <img src="${EMAIL_IMAGES.logo}" alt="business tickets"
         width="180"
         style="display:block;margin:0 auto;border:0;outline:none;text-decoration:none;width:180px;height:auto">
  </td>
</tr>

          <tr><td style="padding:20px 28px 8px;font:16px/1.6 -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Arial">
            <p style="margin:0 0 14px">Dear ${first},</p>
            <p style="margin:0 0 14px">
              You should see three discounted flight options for your trip to <strong>${dest}</strong> in your inbox.
              Please let me know whether you received them and share any feedback—I’ll adjust options to your preferences.
            </p>
            <p style="margin:0 0 14px">
              If you’re ready to proceed, I can handle everything and keep you updated throughout the process.
              I’m available almost 24/7 if you prefer to call or text.
            </p>
            <p style="margin:0 0 14px">
              If you booked elsewhere or plans changed, a quick note helps me close the loop.
            </p>
            <p style="margin:0 0 0">Thank you and have a wonderful day.</p>
          </td></tr>
          <tr><td style="padding:0 28px 24px">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-top:1px solid #e8ecf4">
              <tr><td style="padding-top:16px;font:14px/1.5 -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Arial;color:#111">
                <strong>${agentName}</strong><br>
                Travel advisor<br>
                <a href="tel:${agentPhone.replace(/[^\d+]/g,'')}">${agentPhone}</a><br>
                <a href="mailto:${emailLocal}@business-tickets.com">${emailLocal}@business-tickets.com</a>
              </td></tr>
            </table>
          </td></tr>
        </table>
      </td></tr>
    </table>
  </div>`;

  const text = [
    `Dear ${first},`,
    ``,
    `You should see three discounted flight options for your trip to ${dest}.`,
    `Please reply with feedback and I’ll adjust accordingly.`,
    ``,
    `Thank you,`,
    `${agentName}`,
    `Phone: ${agentPhone}`,
    `${emailLocal}@business-tickets.com`
  ].join('\n');

  return { subject, html, text };
}

// Clipboard: copy text/html + text/plain, then open Gmail compose
async function copyRichEmailAndOpenGmail(to, subject, html, text){
  try{
    if (navigator.clipboard && window.ClipboardItem){
      const item = new ClipboardItem({
        'text/html': new Blob([html], { type: 'text/html' }),
        'text/plain': new Blob([text], { type: 'text/plain' })
      });
      await navigator.clipboard.write([item]);
      toast('Template copied — paste in Gmail (Ctrl/Cmd+V)', 'ok', 1800);
    } else {
      await navigator.clipboard.writeText(text);
      toast('Plain text copied — paste in Gmail', 'ok', 1800);
    }
  }catch(_){
    // Last-resort: open a tab with editable HTML to copy
    const w = safeOpen('about:blank');
    if (w){
      w.document.write(`<div contenteditable="true" style="font:16px/1.5 -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Arial;padding:20px">${html}</div>`);
      w.document.close();
    }
    alert('Could not access clipboard. Press ⌘/Ctrl+A then ⌘/Ctrl+C to copy, then paste in Gmail.');
  }

  // Open Gmail compose after we’ve handled copying
  safeOpen(emailHref(to, subject, ''));
}


// Pick template for an agenda task (Unreached Day N)
function computeSmsText(t, client){
  let tpl = '';
  if (t?.type === 'sms'){
    let m = /Unreached\s+Day\s+(\d)/i.exec(t?.label||'');
    if (m){
      const day = Number(m[1]);
      tpl = (state.settings.smsTemplates?.unreached||{})[day] || '';
    } else {
      m = /Phase\s+1\s+\(Day\s+(\d)\/3\)/i.exec(t?.label||'');
      if (m){
        const day = Number(m[1]);
        tpl = (state.settings.smsTemplates?.reached||{})[day] || '';
      } else if (/Phase\s+[2-6]/i.test(t?.label||'')){
        tpl = (state.settings.smsTemplates?.reached||{})[2] || '';
      }
    }
  }
  return fillSmsTemplate(tpl, client);
}



  function flashAgendaDate(){
    const el = document.getElementById('agendaDate');
    if(!el) return;
    el.classList.remove('glow');
    void el.offsetWidth;
    el.classList.add('glow');
    clearTimeout(flashAgendaDate._t);
    flashAgendaDate._t = setTimeout(()=> el.classList.remove('glow'), 950);
  }

  function uid(){ return 'id'+Math.random().toString(36).slice(2)+Date.now().toString(36); }
  function today(){ const d=getNow(); d.setHours(0,0,0,0); return d; }
  function addDays(date, n){ const d=new Date(date); d.setDate(d.getDate()+n); return d; }
  function fmt(d){ if(!(d instanceof Date)) d=new Date(d); const z=n=>String(n).padStart(2,'0'); return `${d.getFullYear()}-${z(d.getMonth()+1)}-${z(d.getDate())}`; }
  function parseLocalYMD(ymd){ if(!ymd) return today(); const [y,m,d]=ymd.split('-').map(Number); const dt=new Date(y,(m||1)-1,d||1); dt.setHours(0,0,0,0); return dt; }
  function escapeHtml(s){ return (s||'').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
  function truncate(s, n=90){ if(!s) return ''; return s.length>n ? s.slice(0,n-1)+'…' : s; }

  // Copy helper + tiny copy buttons
  function copyTextToClipboard(text, what='value', silent=false){
    if(!text) return;
    const done = () => { if(!silent) toast(`Copied ${what}`, 'ok', 900); };
    try{
      if (navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(text).then(done).catch(()=>{
          const ta=document.createElement('textarea');
          ta.value=text; ta.setAttribute('readonly',''); ta.style.position='fixed'; ta.style.opacity='0';
          document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta); done();
        });
      }else{
        const ta=document.createElement('textarea');
        ta.value=text; ta.setAttribute('readonly',''); ta.style.position='fixed'; ta.style.opacity='0';
        document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta); done();
      }
    }catch(_){}
  }
  document.addEventListener('click', e=>{
    const btn = e.target.closest('[data-copy]');
    if(!btn) return;
    const text = btn.getAttribute('data-copy') || '';
    const what = btn.getAttribute('data-what') || 'value';
    copyTextToClipboard(text, what);
  });
function onlyDigits(s){ return String(s||'').replace(/\D/g,''); }

  // Default SMS templates (Unreached Day 1–5)
const DEFAULT_SMS_TEMPLATES = {
  unreached: {
    1: `Hello, FIRSTNAME. I'd love to help you with booking the flight you are looking for. Please let me know when you have a few minutes to discuss some additional details. My email address is (agent name)@business-tickets.com. My direct line is (agent phone number). - (agent) @ Business Tickets`,
    2: `Hello, FIRSTNAME. I would like to kindly ask you for your feedback on the flight options I emailed you. I can try to provide you with more suitable ones in case you are not satisfied. Thank you and have a wonderful day. - (agent) @ Business Tickets`,
    3: `Hello, FIRSTNAME. I am trying to get in touch with you about your flight booking request. Please contact me at your convenience by phone, text or email, I am available pretty much 24/7. Thank you and have a wonderful day. - (agent) @ Business Tickets`,
    4: `Hello, FIRSTNAME. Is there any update on the plans for your trip? Please let me know whenever it is convenient for you. Thank you and have a wonderful day. - (agent) @ Business Tickets`,
    5: `Hello, FIRSTNAME. I would like to kindly ask you to let me know your current plans for the flight you were going to book. Thank you and have a wonderful day.  - (agent) @ Business Tickets`,
  },
  reached: {
    1: `Hello, FIRSTNAME. I will be your personal travel agent. My email address is (agent name)@business-tickets.com. My direct line is (agent phone number). I look forward to assisting you. - (agent) @ Business Tickets`,
    2: `Hello, FIRSTNAME. I am trying to get in touch with you about your flight booking request. Please contact me at your convenience by phone, text or email, I am available pretty much 24/7. Thank you and have a wonderful day. - (agent) @ Business Tickets`,
    3: `Hello, FIRSTNAME. Is there any update on the plans for your trip? Please let me know whenever it is convenient for you. Thank you and have a wonderful day. - (agent) @ Business Tickets`,
  }
};

  // Close + reset the New Task UI (legacy safeguard)
  function closeNewTaskUI(){
    const panel =
      document.getElementById('newTaskPanel') ||
      document.getElementById('addTaskPopover') ||
      document.getElementById('taskPopover') ||
      document.getElementById('newTask') ||
      document.querySelector('.new-task-panel, .add-task-popover, .task-popover');
    if (panel){
      panel.classList.remove('open','show');
      panel.removeAttribute('data-open');
      panel.style.display = 'none';
    }
    const form =
      document.getElementById('newTaskForm') ||
      document.getElementById('addTaskForm') ||
      document.getElementById('taskForm');
    form?.reset();
  }

  /* ========= Toast ========= */
  function toast(msg, kind='ok', ms=1800){
    const host = document.getElementById('toaster') || (()=>{ const d=document.createElement('div'); d.id='toaster'; document.body.appendChild(d); return d; })();
    const el = document.createElement('div');
    el.className = 'toast ' + (kind==='err'?'err':'ok');
    el.innerHTML = (kind==='err' ? '⚠️' : '✅') + ' ' + (msg||'');
    host.appendChild(el);
    requestAnimationFrame(()=> el.classList.add('show'));
    setTimeout(()=>{ el.classList.remove('show'); setTimeout(()=> el.remove(), 220); }, ms);
  }

  /* ========= Theme ========= */
function applyTheme(t){
  document.body.classList.toggle('light', t==='light');
  const btn = $('#themeToggle');
  if (btn) btn.textContent = (t==='light' ? '🌙 Dark' : '☀️ Light');
}  applyTheme(localStorage.getItem(THEME_KEY) || 'dark');
  $('#themeToggle')?.addEventListener('click', ()=>{
    const next = document.body.classList.contains('light') ? 'dark' : 'light';
    localStorage.setItem(THEME_KEY, next); applyTheme(next);
  });

  /* ========= Add/Edit modal ========= */
  function closeAddModal(){
    const m = document.getElementById('addModal');
    const card = document.getElementById('addCard');
    if (m){ m.classList.remove('open'); m.style.display='none'; }
    if (card){ card.style.display='none'; }
    document.body.classList.remove('modal-open');
  }
  function openAddModal(asNew=false){
    const m = document.getElementById('addModal');
    const card = document.getElementById('addCard');
    if(!m || !card) return;
    if(asNew){
      document.getElementById('clientForm')?.reset();
      const idEl = document.getElementById('clientId'); if(idEl) idEl.value='';
      const lbEl = document.getElementById('leadBlob'); if(lbEl) lbEl.value='';
    }
    card.style.display='block';
    m.style.display='flex'; m.classList.add('open');
    document.body.classList.add('modal-open');
    // Focus the paste blob by default (requested)
    setTimeout(()=>{ try{ const el=document.getElementById('leadBlob'); el.focus(); el.select?.(); }catch(_){} }, 50);
  }
  function initAddModal(){
    const card = document.getElementById('addCard');
    if(!card) return;
    let modal = document.createElement('div');
    modal.id = 'addModal';
    modal.className = 'modal';
    modal.style.display = 'none';
    document.body.appendChild(modal);
    modal.appendChild(card);
    modal.addEventListener('click', (e)=>{ if(e.target===modal) closeAddModal(); });
    document.getElementById('openAdd')?.addEventListener('click', ()=> openAddModal(true));
    document.getElementById('closeAdd')?.addEventListener('click', closeAddModal);
    document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeAddModal(); });
  }
// --- Drawer: docked by default ---
function initCalendarDrawer(){
  // Ensure container exists
  let drawer = document.getElementById('calendarDrawer');
  if(!drawer){
    drawer = document.createElement('div');
    drawer.id = 'calendarDrawer';
    drawer.innerHTML = `
      <div class="drawer-scrim"></div>
      <aside class="drawer-panel"></aside>`;
    document.body.appendChild(drawer);
  }
  const panel = drawer.querySelector('.drawer-panel');

  // Move the existing Calendar card into the drawer
  const cal = document.getElementById('calendarCard');
  if (cal && cal.parentElement !== panel) panel.appendChild(cal);

  // Keep settings panel with the calendar (defensive)
  const calSettings = document.getElementById('calSettings');
  if (cal && calSettings && !cal.contains(calSettings)) {
    (cal.querySelector('.bd') || cal).appendChild(calSettings);
  }

  // Header close button
  document.getElementById('calDrawerClose')?.addEventListener('click', ()=>{
    drawer.classList.remove('open','pinned');
    document.getElementById('openCal')?.setAttribute('aria-expanded','false');
    setBodyPinned(); afterLayout();
  });

  // Scrim closes only when NOT pinned
  drawer.querySelector('.drawer-scrim')?.addEventListener('click', ()=>{
    if (!drawer.classList.contains('pinned')){
      drawer.classList.remove('open');
      document.getElementById('openCal')?.setAttribute('aria-expanded','false');
setBodyPinned(); afterLayout();
    }
  });

  // Optional toolbar toggle (if you still have #openCal)
  const openBtn = document.getElementById('openCal');
  if (openBtn){
    openBtn.addEventListener('click', ()=>{
      const opening = !drawer.classList.contains('open');
      const names = document.getElementById('namesDrawer');
      if (opening){
        drawer.classList.add('open','pinned');     // docked, no scrim blocking
        names?.classList.remove('open','pinned');  // one drawer at a time
      } else {
        drawer.classList.remove('open','pinned');
      }
      openBtn.setAttribute('aria-expanded', String(opening));
setBodyPinned(); afterLayout(); 
    });
  }
}


// --- Drawer: Random Names tool (docked by default, like calendar) ---
function initNamesDrawer(){
  // Create container if missing
  let drawer = document.getElementById('namesDrawer');
  if(!drawer){
    drawer = document.createElement('div');
    drawer.id = 'namesDrawer';
    drawer.innerHTML = `
      <div class="drawer-scrim"></div>
      <aside class="drawer-panel">
        <section class="card" id="namesCard">
          <div class="hd">
            <strong>Random Names</strong>
            <span class="space"></span>
            <button type="button" id="namesRefresh" class="btn-icon" title="Refresh">↻</button>
            <button type="button" id="namesClose" class="btn-icon" title="Close">✖</button>
          </div>
          <div class="bd" id="namesList" style="display:grid; gap:8px;"></div>
        </section>
      </aside>`;
    document.body.appendChild(drawer);
  }

  const listEl = drawer.querySelector('#namesList');
listEl.style.gap = '14px';
// Tool rail -> open corresponding drawer to the left of the rail
const railButtons = document.querySelectorAll('#toolRail .tool');
const drawers = ['calendarDrawer','namesDrawer']
  .map(id => document.getElementById(id))
  .filter(Boolean);

function closeAllDrawers(){
  drawers.forEach(d => d.classList.remove('open','pinned'));
  document.querySelectorAll('#toolRail .tool')
    .forEach(b => b.setAttribute('aria-pressed','false'));
  setBodyPinned(); afterLayout();
}


railButtons.forEach(btn => {
btn.addEventListener('click', () => {
  const targetId = btn.dataset.target;
  const drawer = document.getElementById(targetId);
  const willOpen = !drawer.classList.contains('open');

  closeAllDrawers();
  if (willOpen){
    drawer.classList.add('open','pinned');
    btn.setAttribute('aria-pressed','true');
  }
  setBodyPinned(); afterLayout();
});});


  // Pools + generator

  const UC = s => String(s||'').toUpperCase();



 function renderNamesList(names){
  if (!listEl) return;
  listEl.innerHTML = ''; // reset also clears any previous "used" state

  names.forEach(n => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'pill name-pill';
    btn.textContent = n;
    btn.title = 'Click to copy';
    btn.addEventListener('click', () => {
      copyTextToClipboard(n, 'name', true);
      const original = n;
      btn.classList.remove('used');
      btn.textContent = '✔ Copied name';
      setTimeout(() => {
        btn.textContent = original;
        btn.classList.add('used');
      }, 500);
    });
    listEl.appendChild(btn);
  });
}
function renderNames(){
 const uniqFirst = [...new Set(FIRST.map(s => s.trim()))];
 const uniqLast  = [...new Set(LAST.map(s => s.trim().toUpperCase()))];
  const names9 = pickUniqueCombos(uniqFirst, uniqLast, 9);
  renderNamesList(names9);
}


// Wire the button



  // Expose to side-tab so it can refresh on open
  drawer.renderNames = renderNames;

  // Top buttons
  drawer.querySelector('#namesRefresh')?.addEventListener('click', renderNames);
  drawer.querySelector('#namesClose')?.addEventListener('click', ()=>{
    drawer.classList.remove('open','pinned');
    document.getElementById('openNames')?.setAttribute('aria-expanded','false');
    setBodyPinned(); afterLayout();
  });

  // Scrim closes only when NOT pinned
  drawer.querySelector('.drawer-scrim')?.addEventListener('click', ()=>{
    if (!drawer.classList.contains('pinned')){
      drawer.classList.remove('open');
      document.getElementById('openNames')?.setAttribute('aria-expanded','false');
      setBodyPinned(); afterLayout();
    }
  });

  // Optional toolbar button support (if you add/keep one)
  const openBtn = document.getElementById('openNames');
  if (openBtn){
    openBtn.addEventListener('click', ()=>{
      const opening = !drawer.classList.contains('open');
      const cal = document.getElementById('calendarDrawer');
      if (opening){
        drawer.classList.add('open','pinned');
        cal?.classList.remove('open','pinned');
        renderNames();
      } else {
        drawer.classList.remove('open','pinned');
      }
      openBtn.setAttribute('aria-expanded', String(opening));
      setBodyPinned(); afterLayout();
    });
  }

  // Prepare initial list (so it isn't empty if opened via toolbar)
  renderNames();
}
function initSideTabs(){
  const calTab      = document.getElementById('tabCal');
  const namesTab    = document.getElementById('tabNames');
  const calDrawer   = document.getElementById('calendarDrawer');
  const namesDrawer = document.getElementById('namesDrawer');

  calTab?.addEventListener('click', ()=>{
    const opening = !calDrawer.classList.contains('open');
    if (opening){
      calDrawer.classList.add('open','pinned');
      namesDrawer?.classList.remove('open','pinned');
    } else {
      calDrawer.classList.remove('open','pinned');
    }
    setBodyPinned(); afterLayout();
  });

  namesTab?.addEventListener('click', ()=>{
    const opening = !namesDrawer.classList.contains('open');
    if (opening){
      namesDrawer.classList.add('open','pinned');
      calDrawer?.classList.remove('open','pinned');
      namesDrawer.renderNames?.();     // refresh list on open
    } else {
      namesDrawer.classList.remove('open','pinned');
    }
    setBodyPinned(); afterLayout();
  });

  // Keep tab states in sync if drawers are opened via toolbar buttons
  const obs = new MutationObserver(()=>{ setBodyPinned(); afterLayout(); });
  calDrawer   && obs.observe(calDrawer,   { attributes:true, attributeFilter:['class'] });
  namesDrawer && obs.observe(namesDrawer, { attributes:true, attributeFilter:['class'] });
}




  /* ========= State ========= */
function defaults(){
  return {
    clients: [],
    tasks: [],
    settings: {
      workingDays: { mon:true, tue:true, wed:true, thu:true, fri:false, sat:false, sun:true },
      moveOffDays: true,
      overrides: {},
      agent: { name:'', phone:'' },
      smsTemplates: JSON.parse(JSON.stringify(DEFAULT_SMS_TEMPLATES)),
      officeCity: '',
      officeTz: '',
      timeOverride: ''
    }
  };
}

  function load(){
    try{
      const s = JSON.parse(localStorage.getItem(storeKey) || 'null') || defaults();
      if(!s.settings) s.settings = defaults().settings;
      // ensure new fields exist without nuking old settings
if (!s.settings.agent) s.settings.agent = { name:'', phone:'' };
if (!s.settings.smsTemplates) s.settings.smsTemplates = JSON.parse(JSON.stringify(DEFAULT_SMS_TEMPLATES));
s.settings.smsTemplates.unreached = {
  ...DEFAULT_SMS_TEMPLATES.unreached,
  ...(s.settings.smsTemplates.unreached || {})
};
s.settings.smsTemplates.reached = {
  ...DEFAULT_SMS_TEMPLATES.reached,
  ...(s.settings.smsTemplates.reached || {})
};
if (!s.settings.officeCity) s.settings.officeCity = '';
if (!s.settings.officeTz) s.settings.officeTz = '';
if (!s.settings.timeOverride) s.settings.timeOverride = '';

      return s;
    }catch(e){ return defaults(); }
  }
  const state = load();
  function save(){ localStorage.setItem(storeKey, JSON.stringify(state)); refresh(); buildCalendar(); }

  /* ========= Working days logic ========= */
  function weekdayIndex(dt){ const js=dt.getDay(); return (js+6)%7; } // Mon=0
  function isWorkingDay(dt){
    const ymd = fmt(dt);
    const ov = state.settings.overrides[ymd];
    if(ov==='work') return true; if(ov==='off') return false;
    const map=['mon','tue','wed','thu','fri','sat','sun'];
    return !!state.settings.workingDays[ map[weekdayIndex(dt)] ];
  }
  function nextWorkingDay(date){ let d=new Date(date); while(!isWorkingDay(d)) d=addDays(d,1); return d; }
  function stepByWorkingDays(fromDate, steps){ let d=new Date(fromDate); for(let i=0;i<steps;i++) d=nextWorkingDay(addDays(d,1)); return d; }
  function adjustAutoDateIfNeeded(dt){ if(!state.settings.moveOffDays) return dt; let d=new Date(dt); while(!isWorkingDay(d)) d=addDays(d,1); return d; }

/* ========= Helpers from your file are assumed above ========= */

/* ========= Instant parse on paste / Enter ========= */
const leadBlobEl = document.getElementById('leadBlob');
if (leadBlobEl){
  leadBlobEl.addEventListener('paste', () => {
    requestAnimationFrame(() => {
      const has = (leadBlobEl.value || '').trim();
      if (!has) return;
      const res = parseBlob({ onlyFillEmpty:false });
      if (res?.mode === 'multi') {
        toast(`Detected ${res.count} leads. Review & Save All.`);
      } else {
        toast('Parsed from paste. Review & save.');
      }
    });
  });

  leadBlobEl.addEventListener('keydown', (e)=>{
      if (document.getElementById('bulkModal')) return;
      if (e.key === 'Enter' && !e.shiftKey) e.stopPropagation();

    if(e.key === 'Enter' && !e.shiftKey){
      const has = (leadBlobEl.value || '').trim();
      if(!has) return;
      e.preventDefault();
      const res = parseBlob({ onlyFillEmpty:true });
      // Only auto-save for a single lead. Bulk opens its own modal.
      if(res?.mode === 'single'){
        document.getElementById('saveCustomer').click();
      }
    }
  });
}

/* ========= Lead Parser (single + bulk) ========= */

// Existing single-lead parser (unchanged, minor defensiveness)
function parseLeadBlob(text){
  const raw = (text||'').replace(/\r/g,'\n');
  const whole = raw.replace(/\t/g,'  ').replace(/[ \u00A0]+/g,' ').replace(/\n{2,}/g,'\n').trim();

  const email = (whole.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)||[''])[0] || '';

  let noDates = whole
    .replace(/\b\d{4}-\d{2}-\d{2}[ T]\d{2}:\d{2}(?::\d{2})?\b/g,' ')
    .replace(/\b\d{4}-\d{2}-\d{2}\b/g,' ');

  const phoneCandidates = (noDates.match(/\+?\d[\d\s().-]{6,}\d/g)||[])
    .map(s=>s.trim())
    .filter(s=>!/:/.test(s))
    .filter(s=>{
      const digits = s.replace(/\D/g,'');
      return digits.length>=10 && digits.length<=15;
    });
  const phone = phoneCandidates[0] || '';

  let name = '';
  const nm = whole.match(/\bnew\b[\s:]+([^\n\t]+?)(?=\s+(?:RT|OW|OJ|[A-Z]{2,3}\b)|\t|\n|$)/i);
  if(nm) name = nm[1].trim();
  if(!name && email){
    const local = email.split('@')[0];
    const parts = local.split(/[._-]+/);
    name = parts.length>1
      ? parts.map(p=>p.charAt(0).toUpperCase()+p.slice(1)).join(' ')
      : local.charAt(0).toUpperCase()+local.slice(1);
  }

  const routeMatch = whole.match(/\b[A-Z]{3}(?:\s*[-–—→]\s*[A-Z]{3})+(?:\s*\|\|[A-Z]{3}(?:\s*[-–—→]\s*[A-Z]{3})+)?\b/);
  const route = routeMatch ? routeMatch[0].replace(/\s*[-–—→]\s*/g,'-').toUpperCase() : '';

  const monthName = "(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:t|tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)";
const mDates = whole.match(
  new RegExp(`\\b${monthName}\\s+\\d{1,2}(?:,\\s*\\d{4})?\\s*(?:-|–|—|to|→)\\s*(?:${monthName}\\s+)?\\d{1,2}(?:,\\s*\\d{4})?\\b`, 'i')
);
  let dates = mDates ? mDates[0].replace(/\s{2,}/g,' ').trim() : '';
  if(!dates){
    const mYMD = whole.match(/\b\d{4}-\d{2}-\d{2}\s*(?:→|to|–|—|-)\s*\d{4}-\d{2}-\d{2}\b/);
    if(mYMD) dates = mYMD[0].replace(/\s+/g,' ');
  }

  let pax = '';
  const mpax = whole.match(/\b(?:pax|passengers?)\s*[:=]?\s*(\d{1,2})\b/i) || whole.match(/\bx\s*(\d{1,2})\b/i);
  if(mpax) pax = mpax[1];

  let leadId = '';
  try{
    const phoneDigits = (phone || '').replace(/\D/g,'');
    const paxDigits   = (pax   || '').replace(/\D/g,'');
    const idCandidates = Array.from(whole.matchAll(/(?:^|[\s\t:>])(\d{4,9})(?=$|[\s\t<])/g)).map(m => m[1]);
    for(const cand of idCandidates){
      if (cand === paxDigits) continue;
      if (phoneDigits && phoneDigits.includes(cand)) continue;
      if (/^\d{8}$/.test(cand)) continue; // likely yyyymmdd
      leadId = cand; break;
    }
  }catch(_){}

  let startDate = '';
  try{
    const ymds = Array.from(whole.matchAll(/\b\d{4}-\d{2}-\d{2}\b/g)).map(m=>m[0]);
    startDate = ymds[1] || ymds[0] || '';
  }catch(_){}

  return { name, email, phone, route, dates, pax, leadId, notes:'', startDateFromBlob:startDate };
}

// NEW: detect & parse multiple leads from one blob
function parseMultiLeadBlob(text){
  const src = (text||'').replace(/\r/g,'\n').trim();
  if (!src) return [];

  // Split whenever we hit a new header line that starts a lead row
  const headerRE = /\n(?=\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2}\s+\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2}\s+\d{4,}\b)/g;
  let parts = src.split(headerRE);

  // Does the first chunk look like a header-started lead?
  const looksLikeHeader = /^\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2}\s+\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2}\s+\d{4,}\b/.test(parts[0]);

  // If it’s just one block and not a header list, treat it as a single lead
  if(!looksLikeHeader && parts.length===1){
    const one = parseLeadBlob(src);
    const hd = src.match(/^\s*(\d{4}-\d{2}-\d{2})\s+\d{2}:\d{2}:\d{2}/m);
    if (hd) one.startDateFromBlob = one.startDateFromBlob || hd[1];
    return [one].filter(x => (x.name||x.email||x.phone));
  }

  // Map each chunk to a parsed lead and capture created/updated dates from the header
  const leads = parts.map(chunk => {
    const p = parseLeadBlob(chunk);
    const hdr = chunk.match(/^\s*(\d{4}-\d{2}-\d{2})\s+\d{2}:\d{2}:\d{2}\s+(\d{4}-\d{2}-\d{2})\s+\d{2}:\d{2}:\d{2}/m);
    if (hdr) {
      p.startDateFromBlob = p.startDateFromBlob || hdr[1]; // created
      p._updatedYmd = hdr[2];                               // updated
    }
    return p;
  }).filter(x => (x.name||x.email||x.phone));

  return leads;
}





// NEW: bulk review modal (built entirely in JS—no HTML edits required)
function openBulkReview(leads){
  closeBulkReview(); // safety
  const modal = document.createElement('div');
  modal.id = 'bulkModal';
  modal.className = 'modal open';
  modal.style.display = 'flex';

  const card = document.createElement('section');
  card.className = 'card';
  card.style.width = 'min(1000px, 98vw)';
  card.style.maxHeight = '88vh';
  card.style.overflow = 'auto';

  const hd = document.createElement('div');
  hd.className = 'hd';
  hd.innerHTML = `<strong>Review ${leads.length} parsed lead${leads.length>1?'s':''}</strong><span class="badge">Bulk add</span>`;
  const closeBtn = document.createElement('button');
  closeBtn.className = 'btn-icon';
  closeBtn.textContent = '✖';
  closeBtn.addEventListener('click', closeBulkReview);
  hd.appendChild(document.createElement('span')).className = 'space';
  hd.appendChild(closeBtn);

  const bd = document.createElement('div');
  bd.className = 'bd';

  const list = document.createElement('div');
  list.className = 'bulk-list';

  leads.forEach((p, i) => {
    const box = document.createElement('div');
    box.className = 'slab bulk-item';
    box.innerHTML = `
      <div class="top"><strong>${escapeHtml(p.name||'—')}</strong></div>
      <div class="tiny mono">${escapeHtml(p.email||'—')} ${p.phone?(' • '+escapeHtml(p.phone)) : ''}</div>
      <div class="tiny" style="margin-top:6px">
        ${p.route?`<span class="pill">Route:&nbsp;${escapeHtml(p.route)}</span>`:''}
        ${p.dates?` <span class="pill">Dates:&nbsp;${escapeHtml(p.dates)}</span>`:''}
        ${p.pax?` <span class="pill">Pax:&nbsp;${escapeHtml(String(p.pax))}</span>`:''}
${p.leadId ? ` ${leadChipHtml(p.leadId)}` : ''}
      </div>
      <div class="row" style="margin-top:8px">
        <div>
          <label>Start date</label>
          <input type="date" id="b_start_${i}" value="${escapeHtml(p.startDateFromBlob||fmt(today()))}">
        </div>
        <div>
          <label>Status</label>
          <select id="b_status_${i}">
            <option value="unreached" selected>Unreached</option>
            <option value="reached">Reached</option>
          </select>
        </div>
      </div>
      <div class="row single">
        <div>
          <label>Notes</label>
          <textarea id="b_notes_${i}" rows="2" placeholder="Optional notes…"></textarea>
        </div>
      </div>
    `;
    list.appendChild(box);
  });

  const actions = document.createElement('div');
  actions.className = 'right';
  actions.style.marginTop = '10px';

  const cancel = document.createElement('button');
  cancel.className = 'ghost';
  cancel.textContent = 'Cancel';
  cancel.addEventListener('click', closeBulkReview);

  const saveAll = document.createElement('button');
  saveAll.className = 'primary';
  saveAll.textContent = `Save ${leads.length} ${leads.length>1?'customers':'customer'}`;
  saveAll.addEventListener('click', () => {
    // Build & insert clients, then schedule
    leads.forEach((p, i) => {
      const status = document.getElementById(`b_status_${i}`).value || 'unreached';
      const notes  = document.getElementById(`b_notes_${i}`).value || '';
      const start  = document.getElementById(`b_start_${i}`).value || fmt(today());

      const client = {
        id: uid(),
        name: (p.name||'').trim() || '—',
        email: (p.email||'').trim(),
        phone: (p.phone||'').trim(),
        status,
        startDate: start,
        reachedStart: (status==='reached') ? start : null,
        route: (p.route||'').trim(),
        home: '',
        dates: (p.dates||'').trim(),
        pax:   (p.pax||'').trim(),
        leadId:(p.leadId||'').trim(),
        notes: notes
      };

      state.clients.push(client);
      if (status === 'unreached') scheduleUnreached(client);
      else scheduleReached(client);
    });

    // Clean form blob, refresh/save, close
    const lb = document.getElementById('leadBlob');
    if(lb) lb.value = '';
    document.getElementById('clientForm')?.reset();
const idField = document.getElementById('clientId');
if (idField) idField.value = '';
    save();
    closeAddModal(); 
    closeBulkReview();
    toast(`Added ${leads.length} customer${leads.length>1?'s':''}`);
  });

  actions.appendChild(cancel);
  actions.appendChild(saveAll);

  bd.appendChild(list);
  bd.appendChild(actions);
  card.appendChild(hd);
  card.appendChild(bd);
  modal.appendChild(card);
  document.body.appendChild(modal);
  // --- Block background UI while bulk modal is open ---
const under = document.getElementById('addModal') || document.getElementById('addCard')?.parentElement;
if (under) { 
applyInert(under);
  modal._underRef = under;                   // remember to restore on close
}

// --- Make Enter = Save All; Shift+Enter = newline in textareas ---
modal._keyHandler = (e) => {
  if (e.isComposing) return; // IME safety

  if (e.key === 'Enter') {
    const isTextarea = e.target && e.target.tagName === 'TEXTAREA';
    if (e.shiftKey && isTextarea) {
      // Allow newline in notes
      return; // don't preventDefault
    }
    // Everywhere else: Save All
    e.preventDefault();
    e.stopPropagation();
    saveAll.click();
  } else if (e.key === 'Escape') {
    e.preventDefault();
    e.stopPropagation();
    closeBulkReview();
  }
};

// Capture so background never sees the key
document.addEventListener('keydown', modal._keyHandler, true);
// Also stop keys from bubbling past the modal
modal.addEventListener('keydown', (e)=> e.stopPropagation(), true);

// Optional: focus the first Start date input for convenience
try { modal.querySelector('input[type="date"]')?.focus(); } catch(_){}


  // Esc to close
  modal._esc = (e)=>{ if(e.key==='Escape') closeBulkReview(); };
  document.addEventListener('keydown', modal._esc);
  // click backdrop
  modal.addEventListener('click', (e)=>{ if(e.target===modal) closeBulkReview(); });
}

function closeBulkReview(){
  const m = document.getElementById('bulkModal');
  if (!m) return;

  // Remove global key listener
  if (m._keyHandler) {
    document.removeEventListener('keydown', m._keyHandler, true);
    m._keyHandler = null;
  }

  // Restore background UI
 if (m._underRef) {
   removeInert(m._underRef);
   m._underRef = null;
 }
  // Remove modal
  if (m._esc) document.removeEventListener('keydown', m._esc);
  m.remove();
}


// UPDATED: parseBlob now handles bulk and returns a mode flag
function parseBlob({ onlyFillEmpty } = { onlyFillEmpty:false }){
  const lb = $('#leadBlob');
  const blob = (lb?.value || '').trim();
  if(!blob) return null;

  const many = parseMultiLeadBlob(blob);
  if (many.length > 1){
    openBulkReview(many);
    return { mode:'multi', count: many.length };
  }

  const parsed = many[0] || parseLeadBlob(blob);
  applyParsedToForm(parsed, { onlyFillEmpty });
  return { mode:'single', parsed };
}

  /* ========= Contact link helpers ========= */
  const CALL_LINK_MODE = 'tel';
  const EMAIL_MODE     = 'gmail';
  function phoneHref(num){
    const clean=(num||'').replace(/[^\d+]/g,'');
    return CALL_LINK_MODE==='callto' ? `callto:${clean}` : `tel:${clean}`;
  }
  function emailHref(addr, subject='', body=''){
    const enc = s => encodeURIComponent(s || '');
    return EMAIL_MODE === 'gmail'
      ? `https://mail.google.com/mail/?view=cm&fs=1&to=${enc(addr)}&su=${enc(subject)}&body=${enc(body)}&tf=1`
      : `mailto:${addr}?subject=${enc(subject)}&body=${enc(body)}`;
  }

// CRM lead links
const CRM_BASE = 'https://old.business-tickets.com/crmcms/assigned-flights/show/';
function crmLeadUrl(id){
  const num = String(id || '').replace(/\D/g, '');   // keep only digits
  return num ? `${CRM_BASE}${num}` : '';
}
function leadChipHtml(id){
  const url = crmLeadUrl(id);
  return url
    ? `<span class="pill">Lead:&nbsp;<a class="mono lead-id" href="${url}" target="_blank" rel="noopener">${escapeHtml(String(id))}</a></span>`
    : '';
}

  
  // ✨ RingCentral deep links for SMS
  function isMobile(){ return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent); }
  function toE164(raw){
    if(!raw) return '';
    let d = String(raw).replace(/[^\d+]/g,'');
    if(d.startsWith('+')) return d;
    if(d.length===10) return '+1'+d; // heuristic for US
    if(d[0] !== '+') return '+'+d;
    return d;
  }
// ✨ RingCentral deep links for SMS
const SMS_DEFAULT_TEXT = 'Hello from click to text'; // change this default anytime

function openRingCentralSMS(rawPhone, text = SMS_DEFAULT_TEXT){
  const e164 = toE164(rawPhone);
  if(!e164) return;

  const desktopPrimary = `rcapp://r/sms?type=new&number=${encodeURIComponent(e164)}&content=${encodeURIComponent(text)}`;
  const desktopNoNum   = `rcapp://r/sms?type=new&content=${encodeURIComponent(text)}`;
  const mobilePrimary  = `rcmobile://sms?number=${encodeURIComponent(e164)}`; // content may be ignored on mobile
  const web1           = `https://app.ringcentral.com/r/sms?type=new&number=${encodeURIComponent(e164)}`;
  const web2           = `https://app.ringcentral.com/message/new?type=sms&to=${encodeURIComponent(e164)}`;

  const primary   = isMobile() ? mobilePrimary : desktopPrimary;
  const fallbacks = isMobile() ? [web1, web2] : [desktopNoNum, web1, web2];

  let jumped = false;
  const tryOpen = (url, sameTab = true) => {
    try{
      if (sameTab) window.location.href = url;   // deep links should be same-tab
      else safeOpen(url);                        // web fallbacks in a new tab
      jumped = true;
    }catch(_){}
  };

  tryOpen(primary, true);
  setTimeout(()=>{ if(!jumped && fallbacks.length) tryOpen(fallbacks.shift(), true); }, 200);
  setTimeout(()=>{ if(!jumped && fallbacks.length) tryOpen(fallbacks.shift(), false); }, 600);
}



  /* ========= Scheduling ========= */
  const ACTIONS_UNREACHED = d => ({ calls:2, voicemail:1, sms:1, emails: d===1?2:1 });
  const ACTIONS_REACHED   = { calls:2, voicemail:1, sms:1, emails:1 };

  function addTask(t){
    t.id = t.id || uid();
    t.status = t.status || 'open';
    const exists = state.tasks.some(x =>
      x.clientId===t.clientId && x.date===t.date && x.type===t.type &&
      (x.title||'')===(t.title||'') && (x.source||'')===(t.source||''));
    if(!exists) state.tasks.push(t);
  }

  function genDayTasks(client, date, a, label){
    const todayY = fmt(today());
    if(date < todayY) return;
    const base = {clientId:client.id, clientName:client.name, date, source:'auto', label};
    if (a.calls >= 1) addTask({...base, type:'call',   title:'Call'});
    if (a.voicemail >= 1) addTask({...base, type:'callvm', title:'Call + Voicemail'});
    else if (a.calls >= 2) addTask({...base, type:'call',   title:'Call 2'});
    for (let i=1;i<=a.sms;i++) addTask({...base, type:'sms', title:'SMS'});
    if (label && label.startsWith('Unreached Day 1')){
      addTask({...base, type:'email', title:'Introduction & Info Emails'});
      addTask({...base, type:'email', title:'3PQ + Feedback Request Email'});
    } else {
      for (let i=1;i<=a.emails;i++) addTask({...base, type:'email', title:'Email'});
    }
  }

  function scheduleUnreached(client){
    const start0 = client.startDate ? parseLocalYMD(client.startDate) : today();
    let day1 = nextWorkingDay(start0);
    for(let dayNum=1; dayNum<=5; dayNum++){
      const date = fmt(adjustAutoDateIfNeeded(day1));
      genDayTasks(client, date, ACTIONS_UNREACHED(dayNum), `Unreached Day ${dayNum}`);
      if(dayNum<5) day1 = stepByWorkingDays(day1, 1);
    }
  }

  function scheduleReached(client){
    const start0 = client.reachedStart ? parseLocalYMD(client.reachedStart) : today();
    const p1d1 = adjustAutoDateIfNeeded(nextWorkingDay(start0));
    const p1d2 = adjustAutoDateIfNeeded(stepByWorkingDays(p1d1, 1));
    const p1d3 = adjustAutoDateIfNeeded(stepByWorkingDays(p1d2, 1));
    genDayTasks(client, fmt(p1d1), ACTIONS_REACHED, `Phase 1 (Day 1/3)`);
    genDayTasks(client, fmt(p1d2), ACTIONS_REACHED, `Phase 1 (Day 2/3)`);
    genDayTasks(client, fmt(p1d3), ACTIONS_REACHED, `Phase 1 (Day 3/3)`);
    const gaps = [3,5,7,7,7];
    let last = p1d3;
    for (let i=0;i<gaps.length;i++){
      let target = addDays(last, gaps[i]);
      target = adjustAutoDateIfNeeded(target);
      genDayTasks(client, fmt(target), ACTIONS_REACHED, `Phase ${i+2}`);
      last = target;
    }
  }

  function clearFutureTasksForClientFrom(id, fromDate){ const f = fmt(fromDate); state.tasks = state.tasks.filter(t=> !(t.clientId===id && t.source==='auto' && t.status!=='done' && t.date >= f)); }
  function clearManualTasksForClient(id){ state.tasks = state.tasks.filter(t=> !(t.clientId===id && t.source==='manual' && t.status!=='done')); }
  function markDone(id, done){
    const t = state.tasks.find(x=>x.id===id); if(!t) return;
    t.status = done? 'done':'open';
    save();
    if(done && t.label==='Phase 1 (Day 3/3)'){
      const sameDay = state.tasks.filter(x=> x.clientId===t.clientId && x.label===t.label && x.date===t.date);
      if(sameDay.every(x=>x.status==='done')){
        if(confirm('Add one more day to Phase 1 for this client?')){
          const client = clientById(t.clientId);
          const p1d3 = parseLocalYMD(t.date);
          const p1d4 = adjustAutoDateIfNeeded(stepByWorkingDays(p1d3,1));
          clearFutureTasksForClientFrom(client.id, p1d4);
          genDayTasks(client, fmt(p1d4), ACTIONS_REACHED, 'Phase 1 (Day 4/4)');
          const gaps=[3,5,7,7,7];
          let last=p1d4;
          for(let i=0;i<gaps.length;i++){
            let target=addDays(last,gaps[i]);
            target=adjustAutoDateIfNeeded(target);
            genDayTasks(client, fmt(target), ACTIONS_REACHED, `Phase ${i+2}`);
            last=target;
          }
          save();
          refresh();
        }
      }
    }
  }
  function deleteTask(id){ state.tasks = state.tasks.filter(t=>t.id!==id); save(); }

  // Full regeneration per settings/override change
  function regenerateAutoOpenTasksFromAnchors(){
    const from = fmt(today());
    state.tasks = state.tasks.filter(t => !(t.source==='auto' && t.status!=='done' && t.date >= from));
    for(const c of state.clients){ if(c.status==='unreached') scheduleUnreached(c); else scheduleReached(c); }
    save();
  }

  /* ========= Customers table ========= */
  function clientById(id){ return state.clients.find(c=>c.id===id); }
  function nextActionDateForClient(id){ const open = state.tasks.filter(t=>t.clientId===id && t.status==='open').sort((a,b)=> a.date.localeCompare(b.date)); return open[0]?.date || '—'; }

function refresh(){
  // Header counts
  $('#kTotal').textContent = state.clients.length;
  $('#kUn').textContent    = state.clients.filter(c=>c.status==='unreached').length;
  $('#kRe').textContent    = state.clients.filter(c=>c.status==='reached').length;
    const todayStr = fmt(today());
    const leftToday = state.tasks.filter(t=>t.status!=='done' && t.date===todayStr).length;
    $('#kTasks').textContent = leftToday + ' left';

  const body = $('#clientsTbl tbody'); 
  body.innerHTML = '';

  // Query + filters
  const qRaw = ($('#search').value || '').trim();
  const q    = qRaw.toLowerCase();           // text match
  const qd   = qRaw.replace(/\D/g, '');      // digits-only match
  const sflt = ($('#statusFilter').value || '').toLowerCase();

  const matchesQuery = (c) => {
    if (!q && !qd) return true;

    // plain text (case-insensitive)
    const textBlob = [
      c.name, c.email, c.phone, (c.notes||''), (c.route||''), (c.dates||''), (c.pax||''), (c.leadId||'')
    ].join(' ').toLowerCase();
    if (q && textBlob.includes(q)) return true;

    // digits-only (ignore formatting)
    if (qd){
      const digitsBlob = [
        String(c.phone||'').replace(/\D/g,''),
        String(c.leadId||'').replace(/\D/g,''),
        String(c.pax||'').replace(/\D/g,''),
        String(c.dates||'').replace(/\D/g,'') // also lets 2025-08-19 be found by 20250819
      ].join(' ');
      if (digitsBlob.includes(qd)) return true;
    }
    return false;
  };

  [...state.clients]
.sort((a,b)=> (b.startDate || '').localeCompare(a.startDate || ''))
    .filter(c => (!sflt || c.status===sflt))   // status filter
    .filter(matchesQuery)                      // search filter (text or digits)
    .forEach(c => {
      const tr = document.createElement('tr');
      tr.setAttribute('data-rowid', c.id);

const contactHtml = `
  <div class="contact-line">
    ${c.email
      ? `<a class="truncate" href="${emailHref(c.email,'Follow-up','Hi …')}" target="_blank" rel="noopener" title="${escapeHtml(c.email)}">${escapeHtml(c.email)}</a>
         <button class="copy-btn" data-copy="${escapeHtml(c.email)}" data-what="email" title="Copy email" aria-label="Copy email">⧉</button>`
      : '<span>-</span>'}
  </div>
  <div class="contact-line">
    ${c.phone
      ? `<a class="truncate" href="${phoneHref(c.phone)}" title="${escapeHtml(c.phone)}">${escapeHtml(c.phone)}</a>
         <button class="copy-btn" data-copy="${escapeHtml(c.phone)}" data-what="phone" title="Copy phone" aria-label="Copy phone">⧉</button>`
      : '<span>-</span>'}
  </div>`;


  tr.innerHTML = `
  <td data-label="Name">
    <span class="pill client-pill cust-link" data-name="${escapeHtml(c.name)}">${escapeHtml(c.name)}</span>
    <div class="tiny mono note-preview" data-act="note" data-id="${c.id}" title="Click to expand notes">
      ${c.notes ? escapeHtml(truncate(c.notes)) : ''}
    </div>
    ${c.leadId ? `<div class="tiny">${leadChipHtml(c.leadId)}</div>` : ''}

  </td>
  <td data-label="Contact" class="tiny">${contactHtml}</td>
  <td data-label="Status"><span class="badge">${c.status}</span></td>
  <td data-label="Date Taken"><span class="mono">${c.startDate || '—'}</span></td>
  <td data-label="Next Action">${nextActionDateForClient(c.id)}</td>
  <td data-label="Actions" class="actions">
    <button type="button" class="btn-icon" data-act="note"  data-id="${c.id}" title="Show notes" aria-label="Show notes">🗒️</button>
    <button type="button" class="btn-icon" data-act="manual" data-id="${c.id}" title="Set next FU (manual)" aria-label="Manual next FU">📅</button>
    <button type="button" class="btn-icon" data-act="edit"  data-id="${c.id}" title="Edit" aria-label="Edit">🖊️</button>
    <button type="button" class="btn-icon" data-act="reach" data-id="${c.id}" title="${c.status==='unreached'?'Mark Reached':'Mark Unreached'}" aria-label="${c.status==='unreached'?'Mark Reached':'Mark Unreached'}">${c.status==='unreached'?'✅':'↩️'}</button>
    <button type="button" class="btn-icon" data-act="del"   data-id="${c.id}" title="Delete" aria-label="Delete">🗑️</button>
  </td>`;

      body.appendChild(tr);
    });

  renderAgenda();
  updateProgress();
  updateLocalTimes();
  try{ buildClientOptionsForPopover(); }catch(_){}
}


  function toggleNotesRow(id){
    const existing = document.querySelector(`.note-row[data-for="${id}"]`);
    if(existing){ existing.remove(); return; }
    const tr = document.querySelector(`tr[data-rowid="${id}"]`);
    if(!tr) return;
    const c = clientById(id) || {};
    // Resolve a display name using whatever fields you have, then fall back to the table cell.
const nameText =
  c.name || c.displayName || c.client || c.fullName || c.n ||
  (tr.querySelector('td[data-label="Name"]')?.textContent || '').trim();

    const row = document.createElement('tr'); row.className='note-row'; row.setAttribute('data-for', id);
    const td = document.createElement('td'); td.colSpan = 6;
    const tz = clientTz(c);
    const chips = [
      c.route ? `<span class="pill">Route: ${escapeHtml(c.route)}</span>` : '',
      c.dates ? `<span class="pill">Dates: ${escapeHtml(c.dates)}</span>` : '',
      c.pax   ? `<span class="pill">Pax: ${escapeHtml(String(c.pax))}</span>` : '',
      tz ? `<span class="pill">Local (${tzAbbr(tz)}): <span class="mono local-time" data-tz="${tz}">${formatTimeInTz(tz)}</span></span>` : '',
      c.leadId ? leadChipHtml(c.leadId) : ''
    ].filter(Boolean).join(' ');
    td.innerHTML = `<div class="tiny slab">${chips || ''}<div>${escapeHtml(c.notes || 'No notes yet.')}</div></div>`;
    row.appendChild(td); tr.after(row);
    updateLocalTimes();
  }

$('#clientsTbl')?.addEventListener('click', e=>{
  const link = e.target.closest('.cust-link');
  if (link){
    const name = link.getAttribute('data-name') || link.textContent.trim();
    const af = document.getElementById('agendaFilter');
    if (af){
      af.value = name;
      af.dispatchEvent(new Event('input'));
      af.scrollIntoView({ behavior:'smooth', block:'center' });
      setTimeout(() => af.focus(), 300);
    }
    return;
  }
  // Toggle notes when clicking the inline preview
  const preview = e.target.closest('.note-preview');
  if (preview){
    const tr = preview.closest('tr');
    const id = tr && tr.getAttribute('data-rowid');
    if (id) toggleNotesRow(id);
    return;
  }

  const btn = e.target.closest('button[data-act]');
  if (!btn) return;

  const id  = btn.getAttribute('data-id');
  const act = btn.getAttribute('data-act');
  const c   = id ? clientById(id) : null;

  if (act==='note'){ if(id) toggleNotesRow(id); return; }

  if (act==='manual'){
    const open = document.querySelector(`.manual-row[data-for="${id}"]`);
    if (open){ $$('.manual-row').forEach(n=>n.remove()); return; }
    openManualRow(id); return;
  }

  if (act==='manual-apply'){
    const date        = document.getElementById(`manualDate_${id}`)?.value || '';
    const shouldClear = document.getElementById(`manualClear_${id}`)?.checked ?? true;
    const notes       = document.getElementById(`manualNotes_${id}`)?.value || '';
    const rmPrev      = document.getElementById(`manualClearPrev_${id}`)?.checked ?? false;
    if (c) scheduleManualFU(c, date, shouldClear, notes, rmPrev);
    $$('.manual-row').forEach(n=>n.remove());
    return;
  }

  if (act==='manual-cancel'){ $$('.manual-row').forEach(n=>n.remove()); return; }

  if (act==='edit' && c){
    $('#clientId').value   = c.id;
    $('#name').value       = c.name  || '';
    $('#email').value      = c.email || '';
    $('#phone').value      = c.phone || '';
    $('#status').value     = c.status;
    $('#startDate').value  = c.startDate || '';
    $('#route').value      = c.route || '';
    $('#home').value       = c.home  || '';
    $('#dates').value      = c.dates || '';
    $('#pax').value        = c.pax   || '';
    $('#leadId').value     = c.leadId|| '';
    $('#notes').value      = c.notes || '';
    openAddModal(false);
    return;
  }

  if (act==='reach' && c){
    c.status = c.status === 'unreached' ? 'reached' : 'unreached';
    if (c.status === 'reached'){
      c.reachedStart = fmt(today());
      clearFutureTasksForClientFrom(c.id, today());
      scheduleReached(c);
    } else {
      c.startDate = fmt(today());
      clearFutureTasksForClientFrom(c.id, today());
      scheduleUnreached(c);
    }
    save();
    return;
  }

  if (act==='del' && id){
    if (confirm('Delete this customer and all their tasks?')){
      state.clients = state.clients.filter(x=>x.id!==id);
      state.tasks   = state.tasks.filter(t=>t.clientId!==id);
      save();
    }
    return;
  }
});

  /* ========= Manual FU ========= */
  function openManualRow(id){
    $$('.manual-row').forEach(n=>n.remove());
    const tr = document.querySelector(`tr[data-rowid="${id}"]`);
    if(!tr) return;
    const row = document.createElement('tr');
    row.className = 'manual-row'; row.setAttribute('data-for', id);
    const td = document.createElement('td'); td.colSpan = 6;
    td.innerHTML = `
      <div class="tiny slab flex-row">
        <span>Manual next follow-up for <b>${escapeHtml(clientById(id)?.name||'Client')}</b>:</span>
        <input type="date" id="manualDate_${id}" min="${fmt(today())}" />
        <label style="display:inline-flex;align-items:center;gap:6px"><input type="checkbox" id="manualClear_${id}" checked /> Clear ALL future auto tasks</label>
        <label style="display:inline-flex;align-items:center;gap:6px"><input type="checkbox" id="manualClearPrev_${id}" checked /> Remove previous manual tasks</label>
        <input type="text" id="manualNotes_${id}" placeholder="Optional notes" style="min-width:220px" />
        <span>Creates: 2 Calls, 1 SMS, 1 Email.</span>
        <span class="space"></span>
        <button class="primary" data-act="manual-apply" data-id="${id}">Add</button>
        <button data-act="manual-cancel" data-id="${id}">Cancel</button>
      </div>`;
    row.appendChild(td); tr.after(row);
  }
  function scheduleManualFU(client, ymd, shouldClear=true, notes='', removePrevManual=false){
    const date = fmt(parseLocalYMD(ymd || fmt(today())));
    if(shouldClear) clearFutureTasksForClientFrom(client.id, today());
    if(removePrevManual) clearManualTasksForClient(client.id);
    const base = {clientId:client.id, clientName:client.name, date, source:'manual', label:'Manual FU', notes};
    addTask({...base, type:'call',  title:'Call'});
    addTask({...base, type:'call',  title:'Call 2'});
    addTask({...base, type:'sms',   title:'SMS'});
    addTask({...base, type:'email', title:'Email'});
    save();
  }

  
  /* ========= Agenda ========= */
  let currentAgendaDate = today();
  // ✨ Default sort is "client"
let sortMode = localStorage.getItem(SORT_KEY) || 'client';  // 'type' | 'client'
let showMode = localStorage.getItem(SHOW_KEY) || 'all';     // 'all' | 'open' | 'done'
let agendaFilter = '';
 

  function setAgendaFilter(val){
    agendaFilter = (val || '').trim().toLowerCase();
    renderAgenda();
    buildCalendar();
  }

  function typeOrder(t){ return ({call:1, callvm:2, voicemail:3, sms:4, email:5, custom:6}[t]||9); }
  function clientDisplayName(t){ return t.clientName || (t.clientId ? (clientById(t.clientId)||{}).name : '') || ''; }
  function clientNameLower(t){ return clientDisplayName(t).toLowerCase(); }
  function sortTasksForMode(a,b){
    const byType = typeOrder(a.type) - typeOrder(b.type);
    const byName = clientNameLower(a).localeCompare(clientNameLower(b));
    const byTitle = (a.title||'').localeCompare(b.title||'');
    return sortMode==='client' ? (byName || byType || byTitle) : (byType || byName || byTitle);
  }
  function matchesFilter(t){ return !agendaFilter || clientNameLower(t).includes(agendaFilter); }
function matchesShow(t){
  if (showMode === 'open') return t.status !== 'done';
  if (showMode === 'done') return t.status === 'done';
  return true; // 'all'
}

  function detailsChipsFor(t){
    const c = t.clientId ? clientById(t.clientId) : null;
    if(!c) return '';
    const chips = [
      c.route ? `<span class="pill">Route:&nbsp;${escapeHtml(c.route)}</span>` : '',
      c.dates ? `<span class="pill">Dates:&nbsp;${escapeHtml(c.dates)}</span>` : '',
      c.pax   ? `<span class="pill">Pax:&nbsp;${escapeHtml(String(c.pax))}</span>` : '',
      c.leadId ? leadChipHtml(c.leadId) : ''
    ].filter(Boolean);
    return chips.join(' ');
  }

function renderTask(t, opts = {}){
  const { showClientPill = true, showDetailChips = true } = opts;

  const div = document.createElement('div');
  div.className = 'agenda-item' + (t.status==='done' ? ' done' : '');

  const icon = { call:'📞', callvm:'📞🗣️', voicemail:'🗣️', sms:'💬', email:'✉️', custom:'📝' }[t.type] || '•';
  const client = clientDisplayName(t);
  const c = t.clientId ? clientById(t.clientId) || {} : {};

  // Contact pill per task type (phone for call/sms, email for email)
  let contactHtml = '';
  if (t.clientId){
    if ((t.type==='call' || t.type==='callvm') && c.phone){
      const href = phoneHref(c.phone);
      contactHtml = `<span class="pill"><a class="mono" href="${href}">${escapeHtml(c.phone)}</a><button class="copy-btn" data-copy="${escapeHtml(c.phone)}" data-what="phone" title="Copy phone" aria-label="Copy phone">⧉</button></span>`;
    } else if (t.type==='sms' && c.phone){
  const smsText = computeSmsText(t, c) || SMS_DEFAULT_TEXT; // uses your Day 1–5 templates
  contactHtml = `<span class="pill">
    <a class="mono"
       href="#"
       data-rcsms="${escapeHtml(c.phone)}"
       data-smstext="${escapeHtml(smsText)}">${escapeHtml(c.phone)}</a>
    <button class="copy-btn" data-copy="${escapeHtml(c.phone)}" data-what="phone" title="Copy phone" aria-label="Copy phone">⧉</button>
  </span>`;
} else if (t.type==='email' && c.email){
  // Use data-gmailpaste → we’ll build & copy HTML on click
  contactHtml = `<span class="pill">
    <a class="mono" href="#"
       data-gmailpaste="${escapeHtml(c.id || '')}"
       data-to="${escapeHtml(c.email)}">${escapeHtml(c.email)}</a>
    <button class="copy-btn" data-copy="${escapeHtml(c.email)}" data-what="email" title="Copy email" aria-label="Copy email">⧉</button>
  </span>`;
}

  }

  let localTimeHtml = '';
  const tz = clientTz(c);
  if (tz && showClientPill){
    localTimeHtml = `<span class="pill"><span class="mono local-time" data-tz="${tz}">${formatTimeInTz(tz)}</span></span>`;
  }

  const src = t.source==='custom' ? ' (custom)' : (t.source==='manual' ? ' (manual)' : '');
  const notesHtml = t.notes ? `<div class="tiny">📝 ${escapeHtml(t.notes)}</div>` : '';
  const chipsHtml = showDetailChips ? detailsChipsFor(t) : '';
  const timeBadged = t.notifyTime ? ` &nbsp; ⏰ <span class="mono">${t.notifyTime}</span>` : '';

  div.innerHTML = `
    <input type="checkbox" ${t.status==='done'?'checked':''} data-taskid="${t.id}"/>
      <div>
        <div><strong>${icon} ${escapeHtml(t.title)}</strong> ${contactHtml}
          ${showClientPill && client ? `<span class="pill client-pill">${escapeHtml(client)}</span>` : ''} ${localTimeHtml}
          ${chipsHtml}
        </div>
        <div class="tiny">${escapeHtml(t.label||'')}${src}</div>
        ${notesHtml}
      </div>
    <div class="tiny mono">
      ${t.date}${timeBadged}
      <button class="btn-icon" data-bell="${t.id}" title="Notify at time">🔔</button>
      <button class="btn-icon" data-del="${t.id}" title="Delete task">🗑️</button>
    </div>`;

  div.querySelector('input').addEventListener('change', ev=>{ markDone(t.id, ev.target.checked); });
  return div;
}


  // Inline notify editor (bell) ✨
  function openNotifyEditor(taskId, host){
    const t = state.tasks.find(x=>x.id===taskId); if(!t) return;
    const already = host.querySelector('.notify-row'); if(already){ already.remove(); return; }
    const row = document.createElement('div');
    row.className = 'notify-row';
    row.innerHTML = `
      <span>Notify @</span>
      <input type="time" value="${t.notifyTime||''}" data-notify-time>
      <button data-save-notify="${t.id}" class="primary">Save</button>
      <button data-clear-notify="${t.id}">Clear</button>
    `;
    host.appendChild(row);
    const input = row.querySelector('input[type="time"]');
    input.focus();
    input.addEventListener('keydown', (e)=>{
      if(e.key==='Enter'){ e.preventDefault(); saveNotifyTime(t.id, input.value); row.remove(); }
      if(e.key==='Escape'){ e.preventDefault(); row.remove(); }
    });
  }
  function saveNotifyTime(id, hhmm){
    const t = state.tasks.find(x=>x.id===id); if(!t) return;
    if(!hhmm){ delete t.notifyTime; delete t.notifyAt; t.important=false; save(); return; }
    t.notifyTime = hhmm; t.important = true;
    t.notifyAt = combineYmdTimeLocal(t.date, hhmm).toISOString();
    t.requireInteraction = true; 
    save();
  }
  function clearNotifyTime(id){
    const t = state.tasks.find(x=>x.id===id); if(!t) return;
    delete t.notifyTime; delete t.notifyAt; t.important=false; save();
  }

function renderGroupedByClient(container, items){
  let current = '\u0000';
  for (const t of items){
    const name = clientDisplayName(t) || 'Unknown';
    if (name !== current){
      current = name;

      // Group header with client name, local time, and one set of details chips
      const gh = document.createElement('div');
      gh.className = 'group-hd';
      const c = t.clientId ? clientById(t.clientId) || {} : {};
      let localTimeHtml = '';
      const tz = clientTz(c);
      if (tz){
        localTimeHtml = `<span class="pill"><span class="mono local-time" data-tz="${tz}">${formatTimeInTz(tz)}</span></span>`;
      }
      const chipsOnce = detailsChipsFor(t); // uses the task's client
      gh.innerHTML = `<span class="pill client-pill">${escapeHtml(name)}</span> ${localTimeHtml}${chipsOnce ? `<div class="tiny">${chipsOnce}</div>` : ''}`;
      container.appendChild(gh);
    }

    // Tasks under the group: hide name & detail chips; keep only the relevant contact pill
    container.appendChild(renderTask(t, { showClientPill:false, showDetailChips:false }));
  }
}


  function buildAgenda(date){
    const f = fmt(date);
    const cont = $('#agenda');
const items = state.tasks
  .filter(t => t.date===f && matchesFilter(t) && matchesShow(t))
  .sort(sortTasksForMode);
    cont.innerHTML = '';
    if(items.length===0){ cont.innerHTML = `<div class="tiny">No tasks for ${f}.</div>`; updateProgress(); updateLocalTimes(); return; }
    if (sortMode === 'client') renderGroupedByClient(cont, items);
    else items.forEach(t=>cont.appendChild(renderTask(t)));
    updateProgress();
    updateLocalTimes();
  }

  function buildAgendaRange(from, to){
    const cont = $('#agenda'); cont.innerHTML = '';
    const days = Math.ceil((to-from)/86400000)+1;
    for(let i=0;i<days;i++){
      const d = addDays(from,i), f = fmt(d);
const items = state.tasks
  .filter(t => t.date===f && matchesFilter(t) && matchesShow(t))
  .sort(sortTasksForMode);
      const head = document.createElement('div'); head.className = 'tiny'; head.innerHTML = `<div class="badge mono">${f}</div>`;
      cont.appendChild(head);
      if(items.length===0){ const none = document.createElement('div'); none.className='tiny'; none.textContent='No tasks'; cont.appendChild(none); }
      else if (sortMode === 'client') renderGroupedByClient(cont, items);
      else items.forEach(t=>cont.appendChild(renderTask(t)));
    }
    updateProgress();
    updateLocalTimes();
  }

function updateProgress(){
  const f = fmt(today());
  const todays = state.tasks.filter(t=>t.date===f);
  const done = todays.filter(t=>t.status==='done').length;
  const total = todays.length || 1;
  const pct = Math.round((done/total)*100);
  const pctEl = $('#progressPct'), bar = $('#progressBar');
  if (pctEl) pctEl.textContent = pct+'%';
  if (bar) bar.style.width = pct+'%';
}




// Agenda controls
let renderAgenda = ()=> buildAgenda(currentAgendaDate);

function setSortButtons(){
  const byClient = $('#sortClient');
  const byType   = $('#sortType');
  if (!byClient || !byType) return;

  byClient.classList.toggle('primary',  sortMode === 'client');
  byType.classList.toggle('primary',    sortMode === 'type');
  byClient.setAttribute('aria-pressed', String(sortMode==='client'));
  byType.setAttribute('aria-pressed',   String(sortMode==='type'));

  // Keep the label just "Sort:" so it matches the Show: group
  const lbl = document.getElementById('sortLabel');
  if (lbl) lbl.textContent = 'Sort:';
}

function mountSortGroupLabel(){
  if (document.getElementById('sortWrap') && document.getElementById('sortGroup')) {
  // Keep existing accessible markup; just ensure label text
  const lbl = document.getElementById('sortLabel'); if (lbl) lbl.textContent = 'Sort:';
  return;
}

  const byClient = document.getElementById('sortClient');
  const byType   = document.getElementById('sortType');
  if (!byClient || !byType || !byClient.parentElement) return;

  // If buttons are inside an old segmented/group container, pull them out
  const oldWrap = byClient.closest('.seg, .btn-group');
  if (oldWrap){
    oldWrap.parentElement.insertBefore(byClient, oldWrap);
    oldWrap.parentElement.insertBefore(byType, oldWrap);
    if (!oldWrap.querySelector('button')) oldWrap.remove();
  }


  
  // Row wrapper (sibling to the segmented control)
  let wrap = document.getElementById('sortWrap');
  if (!wrap){
    wrap = document.createElement('div');
    wrap.id = 'sortWrap';
    wrap.className = 'toolbar'; // same row style you use elsewhere
    byClient.parentElement.insertBefore(wrap, byClient);
  }

  // Label chip (just like Show:)
  let label = document.getElementById('sortLabel');
  if (!label){
    label = document.createElement('span');
    label.id = 'sortLabel';
    label.className = 'pill tiny mono';
    label.textContent = 'Sort:';
  } else {
    label.textContent = 'Sort:';
  }

  // Segmented container (same look as Show)
  let group = document.getElementById('sortGroup');
  if (!group){
    group = document.createElement('div');
    group.id = 'sortGroup';
    group.className = 'seg';    // ← NOT "btn-group"
  }

  wrap.appendChild(label);
  wrap.appendChild(group);
  group.appendChild(byClient);
  group.appendChild(byType);
}

function initMorePanel(){
  // create button if missing
  if (!document.getElementById('moreBtn')){
    const btn = document.createElement('button');
    btn.id='moreBtn'; btn.className='toggle'; btn.textContent='☰ More';
    btn.setAttribute('aria-label','More settings');
    document.getElementById('themeToggle')?.after(btn);
  }

  // modal shell
  let modal = document.createElement('div');
  modal.id = 'moreModal';
  modal.className = 'modal';
  modal.style.display = 'none';
  modal.innerHTML = `
    <section class="card" style="max-width:min(900px,98vw)">
      <div class="hd">
        <strong>Agent & SMS Templates</strong>
        <span class="space"></span>
        <button type="button" class="btn-icon" id="moreClose" title="Close">✖</button>
      </div>
      <div class="bd">
        <div class="seg tabs" id="moreTabs">
          <button data-tab="agent" class="primary">Agent</button>
          <button data-tab="unr">Unreached SMS</button>
          <button data-tab="rch">Reached SMS</button>
        </div>
        <div id="tab_agent" class="tab-pane active">
          <div class="row">
            <div>
              <label>Agent name</label>
              <input id="agentName" placeholder="Jane Agent" />
            </div>
            <div>
              <label>Agent phone</label>
              <input id="agentPhone" placeholder="+1 555 123 4567" />
            </div>
          </div>
          <div class="row">
            <div>
              <label>Office city</label>
              <input id="officeCity" list="homeList" placeholder="LAX" />
            </div>
            <div></div>
          </div>
          <div class="slab" style="margin-top:10px; display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
            <span class="tiny mono">Notifications:</span>
            <button type="button" id="enableNotifs" class="tiny" title="Enable desktop notifications">🔔 Enable</button>
            <button type="button" id="testNotif" class="tiny" title="Send a test notification">Test</button>
            <span id="notifStatus" class="pill">Status: Not enabled</span>
          </div>
          <div class="slab" style="margin-top:10px">
            <h4>Working days</h4>
            <div class="wdays">
              <div class="cell"><input type="checkbox" id="wd2_mon"><span>Mon</span></div>
              <div class="cell"><input type="checkbox" id="wd2_tue"><span>Tue</span></div>
              <div class="cell"><input type="checkbox" id="wd2_wed"><span>Wed</span></div>
              <div class="cell"><input type="checkbox" id="wd2_thu"><span>Thu</span></div>
              <div class="cell"><input type="checkbox" id="wd2_fri"><span>Fri</span></div>
              <div class="cell"><input type="checkbox" id="wd2_sat"><span>Sat</span></div>
              <div class="cell"><input type="checkbox" id="wd2_sun"><span>Sun</span></div>
            </div>
            <div style="margin-top:10px">
              <label style="display:inline-flex;align-items:center;gap:8px">
                <input type="checkbox" id="moveOffDays2"> Move tasks off non-working days
              </label>
            </div>
          </div>
          <div class="slab" style="margin-top:10px">
            <button type="button" class="btn-danger" id="wipeAll" title="Delete all data">Wipe All Data</button>
          </div>
        </div>
        <div id="tab_unr" class="tab-pane">
          <div class="slab">
            <h4>Unreached SMS templates (editable)</h4>
            <div class="tiny">Placeholders: <code>FIRSTNAME</code>, <code>(agent name)</code> (used in email local-part like <em>(agent name)@business-tickets.com</em>), <code>(agent phone number)</code>, <code>(agent)</code>.</div>
            <div class="row single" style="margin-top:8px">
              <div>
                <label>Day 1</label>
                <textarea id="tpl_unr_1" rows="3"></textarea>
              </div>
            </div>
            <div class="row single">
              <div>
                <label>Day 2</label>
                <textarea id="tpl_unr_2" rows="3"></textarea>
              </div>
            </div>
            <div class="row single">
              <div>
                <label>Day 3</label>
                <textarea id="tpl_unr_3" rows="3"></textarea>
              </div>
            </div>
            <div class="row single">
              <div>
                <label>Day 4</label>
                <textarea id="tpl_unr_4" rows="3"></textarea>
              </div>
            </div>
            <div class="row single">
              <div>
                <label>Day 5</label>
                <textarea id="tpl_unr_5" rows="3"></textarea>
              </div>
            </div>
          </div>
        </div>
        <div id="tab_rch" class="tab-pane">
          <div class="slab">
            <h4>Reached SMS templates (editable)</h4>
            <div class="tiny">Placeholders: <code>FIRSTNAME</code>, <code>(agent name)</code> (used in email local-part like <em>(agent name)@business-tickets.com</em>), <code>(agent phone number)</code>, <code>(agent)</code>.</div>
            <div class="row single" style="margin-top:8px">
              <div>
                <label>Day 1</label>
                <textarea id="tpl_rch_1" rows="3"></textarea>
              </div>
            </div>
            <div class="row single">
              <div>
                <label>Day 2</label>
                <textarea id="tpl_rch_2" rows="3"></textarea>
              </div>
            </div>
            <div class="row single">
              <div>
                <label>Day 3</label>
                <textarea id="tpl_rch_3" rows="3"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="right more-actions">
        <button type="button" class="ghost" id="moreReset">Reset to defaults</button>
        <button type="button" id="moreCancel" class="ghost">Cancel</button>
        <button type="button" id="moreSave" class="primary">Save</button>
      </div>
    </section>
  `;
  document.body.appendChild(modal);
  initNotificationsUI();
  const tabBtns = modal.querySelectorAll('#moreTabs button');
  const panes = modal.querySelectorAll('.tab-pane');
  const scrollArea = modal.querySelector('.bd');
  tabBtns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      tabBtns.forEach(b=>b.classList.remove('primary'));
      panes.forEach(p=>p.classList.remove('active'));
      btn.classList.add('primary');
      modal.querySelector('#tab_'+btn.dataset.tab).classList.add('active');
      scrollArea.scrollTop = 0;
    });
  });
// --- Make SMS template textareas bigger + auto-grow ---
{
  // 1) CSS: full width, larger minimum height, vertical resize only
  if (!document.getElementById('moreModalTextareaStyles')) {
    const st = document.createElement('style');
    st.id = 'moreModalTextareaStyles';
    st.textContent = `
      #moreModal .row.single > div { width: 100%; }
      #moreModal textarea {
        display: block;
        width: 100%;
        min-height: 100px;   /* was rows=3; now roomy */
        max-height: 30vh;    /* don’t take over the screen */
        resize: vertical;    /* no horizontal scrollbar */
        overflow: hidden;    /* we'll auto-grow */
        font: inherit; line-height: 1.4;
      }
    `;
    document.head.appendChild(st);
  }

  // 2) JS auto-grow so everything is visible at a glance
  const autoGrow = (el) => {
    el.style.height = 'auto';
    el.style.height = (el.scrollHeight + 2) + 'px';
  };
  const wireAutoGrow = () => {
    modal.querySelectorAll('textarea[id^="tpl_unr_"], textarea[id^="tpl_rch_"]').forEach(t => {
      // autoGrow(t);                       // fit on open
      t.addEventListener('input', () => autoGrow(t)); // fit while typing
    });
  };

  // Run auto-grow after values are populated

}

function loadIntoUI(){
  const a = state.settings.agent || {};
  document.getElementById('agentName').value  = a.name  || '';
  document.getElementById('agentPhone').value = a.phone || '';
  const s = state.settings;
  document.getElementById('officeCity').value = s.officeCity || '';
  document.getElementById('wd2_mon').checked = !!s.workingDays.mon;
  document.getElementById('wd2_tue').checked = !!s.workingDays.tue;
  document.getElementById('wd2_wed').checked = !!s.workingDays.wed;
  document.getElementById('wd2_thu').checked = !!s.workingDays.thu;
  document.getElementById('wd2_fri').checked = !!s.workingDays.fri;
  document.getElementById('wd2_sat').checked = !!s.workingDays.sat;
  document.getElementById('wd2_sun').checked = !!s.workingDays.sun;
  document.getElementById('moveOffDays2').checked = !!s.moveOffDays;
  const mapU = state.settings.smsTemplates?.unreached || {};
  for (let d=1; d<=5; d++){
    const el = document.getElementById(`tpl_unr_${d}`);
    if (el) el.value = mapU[d] || DEFAULT_SMS_TEMPLATES.unreached[d];
  }
  const mapR = state.settings.smsTemplates?.reached || {};
  for (let d=1; d<=3; d++){
    const el = document.getElementById(`tpl_rch_${d}`);
    if (el) el.value = mapR[d] || DEFAULT_SMS_TEMPLATES.reached[d];
  }

  // ensure textareas fit after values are set
  requestAnimationFrame(()=> {
    modal.querySelectorAll('textarea[id^="tpl_unr_"], textarea[id^="tpl_rch_"]').forEach(t=>{
      t.style.height = 'auto';
      t.style.height = (t.scrollHeight + 2) + 'px';
    });
  });
}

  function saveFromUI(){
    state.settings.agent = {
      name:  (document.getElementById('agentName').value || '').trim(),
      phone: (document.getElementById('agentPhone').value || '').trim()
    };
    state.settings.officeCity = (document.getElementById('officeCity').value || '').trim().toUpperCase();
    state.settings.officeTz = window.IATA_TZ?.[state.settings.officeCity] || '';
    state.settings.workingDays = {
      mon: !!document.getElementById('wd2_mon').checked,
      tue: !!document.getElementById('wd2_tue').checked,
      wed: !!document.getElementById('wd2_wed').checked,
      thu: !!document.getElementById('wd2_thu').checked,
      fri: !!document.getElementById('wd2_fri').checked,
      sat: !!document.getElementById('wd2_sat').checked,
      sun: !!document.getElementById('wd2_sun').checked
    };
    state.settings.moveOffDays = !!document.getElementById('moveOffDays2').checked;
    const mapU = {};
    for (let d=1; d<=5; d++){
      mapU[d] = document.getElementById(`tpl_unr_${d}`).value || '';
    }
    const mapR = {};
    for (let d=1; d<=3; d++){
      mapR[d] = document.getElementById(`tpl_rch_${d}`).value || '';
    }
    state.settings.smsTemplates.unreached = mapU;
    state.settings.smsTemplates.reached = mapR;
    regenerateAutoOpenTasksFromAnchors();
    save();
    toast('Settings saved');
    close();
  }
  function resetDefaults(){
    for (let d=1; d<=5; d++){
      const el = document.getElementById(`tpl_unr_${d}`);
      if (el) el.value = DEFAULT_SMS_TEMPLATES.unreached[d];
    }
    for (let d=1; d<=3; d++){
      const el = document.getElementById(`tpl_rch_${d}`);
      if (el) el.value = DEFAULT_SMS_TEMPLATES.reached[d];
    }
  }
 function open(){ tabBtns[0].click(); modal.style.display='flex'; modal.classList.add('open'); loadIntoUI(); wireAutoGrow(); document.body.classList.add('modal-open'); }
  function close(){ modal.classList.remove('open'); modal.style.display='none'; document.body.classList.remove('modal-open'); }

  document.getElementById('moreBtn')?.addEventListener('click', open);
  modal.addEventListener('click', (e)=>{ if(e.target===modal) close(); });
  modal.querySelector('#moreClose')?.addEventListener('click', close);
  modal.querySelector('#moreCancel')?.addEventListener('click', close);
  modal.querySelector('#moreSave')?.addEventListener('click', saveFromUI);
  modal.querySelector('#moreReset')?.addEventListener('click', resetDefaults);
  modal.querySelector('#wipeAll')?.addEventListener('click', () => {
    if (!confirm('Delete ALL customers, tasks, and calendar overrides? This cannot be undone.')) return;
    const tPref = localStorage.getItem(THEME_KEY);
    localStorage.removeItem(storeKey);
    state.clients=[]; state.tasks=[]; state.settings=defaults().settings;
    if(tPref) localStorage.setItem(THEME_KEY, tPref);
    save(); alert('All data cleared.');
  });
}




// ✅ Guarded version—paste here (replace your old setShowButtons)
function setShowButtons(){
  const all = $('#showAll'), openBtn = $('#showOpen'), done = $('#showDone');
  if (!all || !openBtn || !done) return;
  all.classList.toggle('primary',  showMode === 'all');
  openBtn.classList.toggle('primary', showMode === 'open');
  done.classList.toggle('primary',  showMode === 'done');
  all.setAttribute('aria-pressed',   String(showMode==='all'));
  openBtn.setAttribute('aria-pressed', String(showMode==='open'));
  done.setAttribute('aria-pressed',  String(showMode==='done'));
}


// Listeners
const showAllEl  = $('#showAll');
const showOpenEl = $('#showOpen');
const showDoneEl = $('#showDone');

if (showAllEl && showOpenEl && showDoneEl){
  showAllEl.addEventListener('click',  ()=>{ showMode='all';  localStorage.setItem(SHOW_KEY, showMode); setShowButtons(); renderAgenda(); buildCalendar(); });
  showOpenEl.addEventListener('click', ()=>{ showMode='open'; localStorage.setItem(SHOW_KEY, showMode); setShowButtons(); renderAgenda(); buildCalendar(); });
  showDoneEl.addEventListener('click', ()=>{ showMode='done'; localStorage.setItem(SHOW_KEY, showMode); setShowButtons(); renderAgenda(); buildCalendar(); });
}





 function setAgendaMode(mode){
  const vt = $('#viewToday'), vw = $('#viewWeek');
  if (vt) vt.classList.toggle('primary', mode === 'today');
  if (vw) vw.classList.toggle('primary', mode === 'week');
}

const sortClientEl = document.getElementById('sortClient');
const sortTypeEl   = document.getElementById('sortType');

if (sortClientEl && sortTypeEl) {
  sortClientEl.addEventListener('click', () => {
    sortMode = 'client';
    localStorage.setItem(SORT_KEY, sortMode);
    setSortButtons();
    renderAgenda();
  });
  sortTypeEl.addEventListener('click', () => {
    sortMode = 'type';
    localStorage.setItem(SORT_KEY, sortMode);
    setSortButtons();
    renderAgenda();
  });
}


const viewTodayEl = document.getElementById('viewToday');
const viewWeekEl  = document.getElementById('viewWeek');
const agendaDateEl = document.getElementById('agendaDate');

if (viewTodayEl) {
  viewTodayEl.addEventListener('click', ()=>{
    currentAgendaDate = today();
    renderAgenda = ()=> buildAgenda(currentAgendaDate);
    setAgendaMode('today');
    if (agendaDateEl) agendaDateEl.value = '';
    renderAgenda();
    buildCalendar();
  });
}

if (viewWeekEl) {
  viewWeekEl.addEventListener('click', ()=>{
    const from = today();
    const to   = addDays(today(), 7);
    renderAgenda = ()=> buildAgendaRange(from, to);
    setAgendaMode('week');
    if (agendaDateEl) agendaDateEl.value = '';
    renderAgenda();
  });
}

if (agendaDateEl) {
  agendaDateEl.addEventListener('change', ()=>{
    const d = agendaDateEl.value ? parseLocalYMD(agendaDateEl.value) : today();
    currentAgendaDate = d;
    renderAgenda = ()=> buildAgenda(currentAgendaDate);
    setAgendaMode(null);
    renderAgenda();
    buildCalendar();
    flashAgendaDate();
  });
}

const agendaFilterEl = document.getElementById('agendaFilter');
const agendaFilterClearEl = document.getElementById('agendaFilterClear');

if (agendaFilterEl) {
  agendaFilterEl.addEventListener('input', ()=> setAgendaFilter(agendaFilterEl.value));
}
if (agendaFilterClearEl && agendaFilterEl) {
  agendaFilterClearEl.addEventListener('click', ()=>{
    agendaFilterEl.value = '';
    setAgendaFilter('');
  });
}



  /* ========= Batch Emails for Unreached today ========= */
  function emailTemplateFor(t, client){
    if((t.label||'').startsWith('Unreached Day 1')) return {subject:'Welcome — next steps', body:`Hi ${client?.name||''},\n\nGreat to connect. Here’s the info we discussed…\n\nBest,\n`};
    return { subject:'Quick follow-up', body:`Hi ${client?.name||''},\n\nJust checking in on …\n\nBest,\n` };
  }
  function collectDueUnreachedEmails(){
    const f = fmt(today());
    return state.tasks.filter(t=>{
      if (t.date!==f || t.status==='done' || t.type!=='email') return false;
      const c = clientById(t.clientId);
      return c && c.status==='unreached' && c.email;
    });
  }
  function launchBatchMailtos(tasks){
    let i=0; (function openNext(){
      if (i>=tasks.length) return;
      const t = tasks[i++]; const c = clientById(t.clientId);
      const {subject, body} = emailTemplateFor(t, c||{});
      const href = emailHref(c.email, subject, body);
      safeOpen(href); setTimeout(openNext, 600);
    })();
  }
  $('#sendDueEmails')?.addEventListener('click', ()=>{
    const due = collectDueUnreachedEmails();
    if (!due.length){ alert('No unreached emails due today.'); return; }
    if (!confirm(`Open ${due.length} email compose window(s) now?`)) return;
    launchBatchMailtos(due);
  });

  /* ========= Notifications ========= */
  const NOTIFY_KEY = 'followup_crm_notified_today';
function notifSupported(){ return typeof window.Notification === 'function'; }
  function isSecure(){ return window.isSecureContext || location.protocol==='https:' || ['localhost','127.0.0.1','[::1]'].includes(location.hostname); }
  function setNotifStatus(txt){ const el=$('#notifStatus'); if(el) el.textContent = txt; }
  function fmtToday(){ return fmt(today()); }
function notifyTask(t){
  if (!notifSupported() || Notification.permission !== 'granted') return;
  try{
    const tag = t.id || ('rand-'+Date.now()+'-'+Math.random().toString(36).slice(2));

    // default to persistent notifications unless explicitly disabled
    const persistent = (t.requireInteraction === undefined) ? true : !!t.requireInteraction;

    const n = new Notification(
      `${t.title}${t.clientName ? ' — '+t.clientName : ''}`,
      {
        body: `${t.label||''} • ${t.date}${t.notifyTime?(' @ '+t.notifyTime):''}`,
        tag,
        renotify: true,
        silent: false,
        requireInteraction: persistent
      }
    );
    n.onclick = () => { try{ window.focus(); }catch(_){} };
  }catch(e){}
}

  function getNotifiedSet(){
    const f = fmtToday();
    try { const o = JSON.parse(localStorage.getItem(NOTIFY_KEY) || '{}'); return o[f] ? new Set(o[f]) : new Set(); } catch(e){ return new Set(); }
  }
  function saveNotifiedSet(set){
    const f = fmtToday();
    let o = {};
    try { o = JSON.parse(localStorage.getItem(NOTIFY_KEY) || '{}'); } catch(e){}
    o[f] = Array.from(set);
    localStorage.setItem(NOTIFY_KEY, JSON.stringify(o));
  }
  function combineYmdTimeLocal(ymd, hhmm){
    const [y,m,d] = (ymd||'').split('-').map(Number);
    let H=9, M=0;
    if (hhmm && /^\d{2}:\d{2}$/.test(hhmm)) { [H,M] = hhmm.split(':').map(Number); }
    return new Date(y, (m||1)-1, d||1, H, M, 0, 0);
  }
  function notifyEligibleTodayImportant(now=getNow()){
    const f = fmtToday();
    const list = state.tasks.filter(t => t.important === true && t.status !== 'done' && t.date === f);
    return list.filter(t => {
      const at = t.notifyAt ? new Date(t.notifyAt) : combineYmdTimeLocal(t.date, t.notifyTime || '09:00');
      return now >= at;
    });
  }
  function initNotificationsUI(){
    const btn = $('#enableNotifs'), test = $('#testNotif'); if(!btn || !test) return;
    function refreshUI(){
      if(!notifSupported()){ btn.disabled = true; test.disabled = true; setNotifStatus('Not supported'); return; }
      if(!isSecure()){ btn.disabled = true; test.disabled = false; setNotifStatus('HTTPS/localhost required'); return; }
      btn.disabled = false; test.disabled = false;
      const perm = Notification.permission;
      if(perm==='granted'){ btn.textContent = '🔔 Enabled'; setNotifStatus('Enabled'); }
      else if(perm==='denied'){ btn.textContent = '🔔 Enable'; setNotifStatus('Blocked'); }
      else { btn.textContent = '🔔 Enable'; setNotifStatus('Not enabled'); }
    }
    refreshUI();
    if (navigator.permissions && navigator.permissions.query){
      try{ navigator.permissions.query({name:'notifications'}).then(p=>{ p.onchange = refreshUI; }).catch(()=>{}); }catch(_){}
    }
    btn.addEventListener('click', async ()=>{
      if(!isSecure()){ alert('Use HTTPS or http://localhost for notifications.'); return; }
      try{
        const res = await Notification.requestPermission();
        setTimeout(refreshUI, 50);
        if(res==='granted'){
          notifyTask({ id:'enabled-'+Date.now(), title:'✅ Notifications enabled', clientName:'', date:fmtToday(), requireInteraction:true });
        } else if(res==='denied'){
          alert('Notifications are blocked. Allow them in your browser’s site settings.');
        }
      }catch(_){}
    });
    test.addEventListener('click', async ()=>{
      if(!isSecure()){ alert('Run from HTTPS or http://localhost.'); return; }
      if(Notification.permission==='default'){ try{ await Notification.requestPermission(); }catch(_){} }
      if(Notification.permission==='granted'){
        notifyTask({ id:'test-'+Date.now(), title:'🔔 Test notification', clientName:'', date:fmtToday(), requireInteraction:true });
      }else if(Notification.permission==='denied'){
        alert('Notifications are blocked. Click the lock icon → Site settings → Allow.');
      }
    });
    document.addEventListener('visibilitychange', ()=>{ if(!document.hidden) refreshUI(); });
  }
  function startNotificationTicker(){
    let notified = getNotifiedSet();
    function tick(){
      if (!notifSupported() || Notification.permission!=='granted') return;
      const due = notifyEligibleTodayImportant();
      due.forEach(t => {
        if (!notified.has(t.id)){ notifyTask(t); notified.add(t.id); }
      });
      saveNotifiedSet(notified);
    }
    tick(); setInterval(tick, 60*1000); window.addEventListener('focus', tick);
  }

  /* ========= Calendar ========= */
  let calCursor = getNow(); calCursor.setDate(1);
  function buildCalendar(){
    const grid = $('#calendarGrid'); if(!grid) return;
    const year=calCursor.getFullYear(), month=calCursor.getMonth();
    const MONTH_ABBR = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    $('#calTitle').textContent = `${MONTH_ABBR[month]} ${year}`;
    grid.innerHTML = '';
    ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].forEach(h=>{ const hd=document.createElement('div'); hd.className='cal-head'; hd.textContent=h; grid.appendChild(hd); });
    const first = new Date(year, month, 1);
    const startIdx = (first.getDay()+6)%7; const daysInMonth = new Date(year, month+1, 0).getDate();
    for(let i=0;i<startIdx;i++){ grid.appendChild(document.createElement('div')); }
    for(let d=1; d<=daysInMonth; d++){
      const dt  = new Date(year, month, d);
      const ymd = fmt(dt);
      const items = state.tasks.filter(
        t => t.date === ymd && matchesFilter(t) && t.status !== 'done'
      );
      const cell = document.createElement('div');
      cell.className='cal-cell';
      if(!isWorkingDay(dt)) cell.classList.add('offday');
      if(fmt(currentAgendaDate || today()) === ymd) cell.classList.add('selected');
      cell.innerHTML = `<div class="d">${d}</div>` + (items.length ? `<div class="cal-badge">${items.length}</div>` : '');
      cell.addEventListener('click', ()=>{
        const ad = $('#agendaDate');
        if (ad){
          ad.value = ymd;
          ad.dispatchEvent(new Event('change'));
        }
        const target = document.getElementById('actionsCard');
        if (target){
          const headerH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 0;
          const y = target.getBoundingClientRect().top + window.scrollY - headerH;
          window.scrollTo({ top: y, behavior:'smooth' });
        }
      });

      grid.appendChild(cell);
    }
  }
  $('#calPrev')?.addEventListener('click', ()=>{ calCursor.setMonth(calCursor.getMonth()-1); buildCalendar(); });
  $('#calNext')?.addEventListener('click', ()=>{ calCursor.setMonth(calCursor.getMonth()+1); buildCalendar(); });
  function renderOverrideList(){
    const ul = $('#overrideList'); ul.innerHTML='';
    const entries = Object.entries(state.settings.overrides).sort((a,b)=> a[0].localeCompare(b[0]));
    if (!entries.length){ const li=document.createElement('li'); li.textContent='No overrides yet.'; ul.appendChild(li); return; }
    entries.forEach(([date,type])=>{
      const li = document.createElement('li');
      const left = document.createElement('span');
      left.textContent = `${date} — ${type==='work'?'Working':'Off'}`;
      const del = document.createElement('button');
      del.textContent='Delete';
      del.addEventListener('click', ()=>{
        delete state.settings.overrides[date];
        regenerateAutoOpenTasksFromAnchors();
        renderOverrideList();
      });
      li.appendChild(left); li.appendChild(del); ul.appendChild(li);
    });
  }
  function loadSettingsIntoUI(){
    const s = state.settings;
    $('#wd_mon').checked = !!s.workingDays.mon;
    $('#wd_tue').checked = !!s.workingDays.tue;
    $('#wd_wed').checked = !!s.workingDays.wed;
    $('#wd_thu').checked = !!s.workingDays.thu;
    $('#wd_fri').checked = !!s.workingDays.fri;
    $('#wd_sat').checked = !!s.workingDays.sat;
    $('#wd_sun').checked = !!s.workingDays.sun;
    $('#moveOffDays').checked = !!s.moveOffDays;
    renderOverrideList();
  }
function saveSettingsFromUI(){
  const s = state.settings;

  s.workingDays = {
    mon: !!$('#wd_mon').checked,
    tue: !!$('#wd_tue').checked,
    wed: !!$('#wd_wed').checked,
    thu: !!$('#wd_thu').checked,
    fri: !!$('#wd_fri').checked,
    sat: !!$('#wd_sat').checked,
    sun: !!$('#wd_sun').checked
  };
  s.moveOffDays = !!$('#moveOffDays').checked;

  // Rebuild tasks + save (also refreshes UI and calendar)
  regenerateAutoOpenTasksFromAnchors();
  save();

  // 👇 Close the settings panel after saving
  const panel = document.getElementById('calSettings');
  if (panel) panel.classList.remove('open');

  // Keep the toggle button state in sync & return focus
  const btn = document.getElementById('calSettingsBtn');
  if (btn){
    btn.setAttribute('aria-expanded', 'false');
    try { btn.focus({ preventScroll: true }); } catch(_) {}
  }

  // Nice-to-have feedback
  try { toast('Calendar settings saved'); } catch(_) {}
}


// Settings toggle (pushes calendar down)
document.addEventListener('click', (e)=>{
  const btn = e.target.closest('#calSettingsBtn, #calendarCard .settings-btn');
  if (!btn) return;

  const panel = document.getElementById('calSettings');
  if (!panel) return;

  const opening = !panel.classList.contains('open');
  panel.classList.toggle('open', opening);
  if (opening) loadSettingsIntoUI();
});

// Save + add-override buttons (not nested in a click handler)
$('#saveCalSettings')?.addEventListener('click', saveSettingsFromUI);
$('#addOverride')?.addEventListener('click', ()=>{
  const d = $('#ovrDate').value;
  const t = $('#ovrType').value;
  if (!d) { alert('Pick a date'); return; }
  state.settings.overrides[d] = (t === 'work' ? 'work' : 'off');
  regenerateAutoOpenTasksFromAnchors();
  renderOverrideList();
});

  /* ========= Parse + Form wiring ========= */
  function applyParsedToForm(parsed, { onlyFillEmpty = false } = {}){
    if(!parsed) return;
    const set = (id, val) => {
      if(!val) return;
      const el = document.querySelector(id);
      if(!el) return;
      if(onlyFillEmpty && (el.value || '').trim()) return;
      el.value = val;
    };
    set('#name',  parsed.name);
    set('#email', parsed.email);
    set('#phone', parsed.phone);
    set('#route', parsed.route);
    set('#dates', parsed.dates);
    set('#pax',   parsed.pax);
    set('#leadId', parsed.leadId);
    // ✨ start date from blob (second ISO date)
    set('#startDate', parsed.startDateFromBlob);
    if(parsed.notes){
      const cur = ($('#notes').value || '').trim();
      $('#notes').value = cur ? (cur + '\n' + parsed.notes) : parsed.notes;
    }
  }

  function collectClientFromForm(){
    const id = $('#clientId').value || uid();
    const exists = state.clients.find(c=>c.id===id);
    const status = $('#status').value;
    const startDate = $('#startDate').value || fmt(today());
    const client = {
      id,
      name: ($('#name').value||'').trim(),
      email: ($('#email').value||'').trim(),
      phone: ($('#phone').value||'').trim(),
      status,
      startDate,
      reachedStart: exists ? exists.reachedStart : (status === 'reached' ? startDate : null),
      route: ($('#route').value||'').trim(),
      home:  ($('#home').value||'').trim().toUpperCase(),
      dates: ($('#dates').value||'').trim(),
      pax:   ($('#pax').value||'').trim(),
      leadId: ($('#leadId').value||'').trim(),
      notes: ($('#notes').value||'').trim()
    };
    return { client, exists };
  }
  $('#resetForm')?.addEventListener('click', ()=>{ $('#clientForm').reset(); $('#clientId').value=''; });
document.getElementById('saveCustomer')?.addEventListener('click', (e) => {
  e.preventDefault();
  try{
    let res = null;
    const lbEl = document.getElementById('leadBlob');
    if ((lbEl?.value || '').trim()){
      res = parseBlob({ onlyFillEmpty:true });
      // Bulk paste opens its own modal; bail so we don't also submit the single form
      if (res && res.mode === 'multi') return;
    }
    const {client, exists} = collectClientFromForm();
    // ... (keep the rest of your handler exactly as-is)

      if(!client.name){ alert('Name is required'); $('#name').focus(); return; }
      if(!exists){
        state.clients.push(client);
        if(client.status==='unreached') scheduleUnreached(client);
        else { client.reachedStart = client.startDate; scheduleReached(client); }
        toast('Customer added');
      } else {
        const i = state.clients.findIndex(x=>x.id===client.id);
        const prev = state.clients[i];
        state.clients[i] = client;
        state.tasks.forEach(t=>{ if(t.clientId===client.id) t.clientName = client.name; });
        const statusChanged = prev.status!==client.status;
        const anchorChanged = prev.startDate!==client.startDate || prev.reachedStart!==client.reachedStart;
        if(statusChanged){
          clearFutureTasksForClientFrom(client.id, today());
          if(client.status==='reached'){ client.reachedStart = fmt(today()); scheduleReached(client); }
          else { client.startDate = fmt(today()); scheduleUnreached(client); }
        } else if(anchorChanged){
          clearFutureTasksForClientFrom(client.id, today());
          if(client.status==='unreached') scheduleUnreached(client); else scheduleReached(client);
        }
        toast('Customer updated');
      }
      $('#leadBlob').value = '';
      $('#clientForm').reset();
      $('#clientId').value = '';
      save();
      closeAddModal();
    }catch(e){
      console.error(e);
      alert('Could not save customer. If this persists, click “Wipe All Data” to clear local data and try again.');
      toast('Save failed', 'err', 2200);
    }
  });
// Let Enter trigger the Add/Edit Customer save handler
const clientForm = document.getElementById('clientForm');
if (clientForm) {
  // Key handling so Enter saves; Shift+Enter adds newline in textareas
  clientForm.addEventListener('keydown', (e) => {
    if (e.isComposing) return; // IME safety
    if (document.getElementById('bulkModal')) return; // bulk review owns Enter

    if (e.key === 'Enter') {
      const tag = (e.target.tagName || '').toUpperCase();
      const isTextarea = tag === 'TEXTAREA';
      // Allow Shift+Enter newline in notes/textarea
      if (isTextarea && e.shiftKey) return;

      // If we're in a textarea without Shift, you can choose:
      //  A) save on Enter (uncomment next 3 lines), OR
      //  B) ignore so Enter is a newline (default behavior below)
      // if (isTextarea) { e.preventDefault(); document.getElementById('saveCustomer')?.click(); return; }

      // In inputs/selects/buttons — Enter should save
      if (!isTextarea) {
        e.preventDefault();
        document.getElementById('saveCustomer')?.click();
      }
    }
  }, true); // capture so background never sees the key
}

  
  /* ===== Add Custom Task modal ===== */
  function titleDefaultFor(type){ return ({call:'Call', callvm:'Call + Voicemail', sms:'SMS', email:'Email'}[type] || ''); }
  function buildClientOptionsForPopover(){
    const list = $('#ctClientList');
    if(!list) return;
    const input = $('#ctClient');
    const keep = input?.value || '';
    list.innerHTML = '';
    const opts = [...state.clients].sort((a,b)=>(b.startDate || '').localeCompare(a.startDate || ''));
    opts.forEach(c=>{
      const label = c.email ? `${c.name} — ${c.email}` : (c.phone ? `${c.name} — ${c.phone}` : c.name);
      list.insertAdjacentHTML('beforeend', `<option value="${escapeHtml(label)}" data-id="${c.id}"></option>`);
    });
    if(input) input.value = keep;
  }
  function openCustomTaskPopover(){
    buildClientOptionsForPopover();
    const pop = document.getElementById('customTaskPop'); if(!pop) return;

    if (getComputedStyle(pop).display === 'none'){
      $('#ctType').value = $('#ctType').value || 'call';
      const agendaYmd = fmt(currentAgendaDate || today());
      if (!$('#ctDate').value) $('#ctDate').value = agendaYmd;
      if (!$('#ctTitle').value) $('#ctTitle').value = titleDefaultFor($('#ctType').value);
      $('#ctNotify').disabled = !$('#ctTime').value;

      pop.style.display = 'flex';   // overlay
      document.body.classList.add('modal-open');
      // ✨ Keyboard: Esc closes, Enter saves (except in Notes)
      pop._keydown = (e)=>{
        if(e.key==='Escape'){ e.preventDefault(); closeCustomTaskPopover(); }
        if(e.key==='Enter' && !e.shiftKey && e.target.id!=='ctNotes'){
          e.preventDefault(); saveCustomTaskFromPopover();
        }
      };
      document.addEventListener('keydown', pop._keydown);
      // Click backdrop to close
      pop._backdrop = (e)=>{ if(e.target===pop) closeCustomTaskPopover(); };
      pop.addEventListener('click', pop._backdrop);
    } else {
      closeCustomTaskPopover();
    }
  }
  function clearCustomTaskForm(){
    ['ctClient','ctType','ctTitle','ctDate','ctTime','ctNotes'].forEach(id=>{
      const el = $('#'+id); if(!el) return;
      if (id==='ctType') el.value='call'; else el.value='';
    });
    $('#ctImportant').checked = false;
    $('#ctNotify').checked = false; $('#ctNotify').disabled = true;
  }
  function closeCustomTaskPopover(){
    clearCustomTaskForm();
    const pop = document.getElementById('customTaskPop');
    if(!pop) return;
    if(pop._keydown){ document.removeEventListener('keydown', pop._keydown); pop._keydown=null; }
    if(pop._backdrop){ pop.removeEventListener('click', pop._backdrop); pop._backdrop=null; }
    pop.style.display = 'none';
    document.body.classList.remove('modal-open');
  }
  function saveCustomTaskFromPopover(){
    const label = ($('#ctClient').value || '').trim();
    const opt = Array.from($('#ctClientList')?.options || []).find(o=>o.value===label);
    const clientId = opt?.dataset.id || '';
    const c = clientId ? clientById(clientId) : null;

    const type  = $('#ctType').value || 'custom';
    let title   = ($('#ctTitle').value||'').trim();
    if (!title) title = titleDefaultFor(type) || 'Custom';
    const date  = $('#ctDate').value || fmt(currentAgendaDate || today());
    const time  = $('#ctTime').value || '';
    const notes = ($('#ctNotes').value||'').trim();
    const notify = !!$('#ctNotify').checked && !!time;
    const important = notify ? true : !!$('#ctImportant').checked;

    const t = {
      clientId: c?.id || null,
      clientName: c?.name || '',
      date, type, title,
      label: 'Custom', source: 'custom', status: 'open', notes, important
    };
    if (time){
      t.notifyTime = time;
      if (notify) t.notifyAt = combineYmdTimeLocal(date, time).toISOString();
      t.requireInteraction = true;  
    }

    addTask(t);
    save();
    toast('Custom task added');
    closeCustomTaskPopover();
  }
  $('#addTaskBtn')?.addEventListener('click', openCustomTaskPopover);
  $('#ctClose')?.addEventListener('click', closeCustomTaskPopover);
  $('#ctCancel')?.addEventListener('click', closeCustomTaskPopover);
  $('#ctSave')?.addEventListener('click', saveCustomTaskFromPopover);
  $('#ctType')?.addEventListener('change', ()=>{
    const cur = ($('#ctTitle').value||'').trim();
    const titleDefaults = ['Call','Call + Voicemail','SMS','Email'];
    if (!cur || titleDefaults.includes(cur)) $('#ctTitle').value = titleDefaultFor($('#ctType').value);
  });
  $('#ctTime')?.addEventListener('input', ()=>{
    const has = !!$('#ctTime').value;
    $('#ctNotify').disabled = !has;
    if (!has){ $('#ctNotify').checked = false; }
  });
  $('#ctNotify')?.addEventListener('change', ()=>{ if ($('#ctNotify').checked) $('#ctImportant').checked = true; });


  $('#agenda')?.addEventListener('click', (e)=>{
  const cp = e.target.closest('.client-pill');
  if (cp){
    const name = cp.textContent.trim();
    const search = document.getElementById('search');
    if (search){
      search.value = name;
      search.dispatchEvent(new Event('input'));
      search.scrollIntoView({ behavior:'smooth', block:'center' });
      setTimeout(() => search.focus(), 300);
    }
    return;
  }
  const del = e.target.closest('[data-del]');
  if (del){
    const id = del.getAttribute('data-del');
    if (confirm('Delete this task?')) deleteTask(id);
    return;
  }
  const bell = e.target.closest('[data-bell]');
  if (bell){
    const id = bell.getAttribute('data-bell');
    const host = bell.closest('.agenda-item');
    openNotifyEditor(id, host);
    return;
  }
  const rc = e.target.closest('[data-rcsms]');
  if (rc){
    e.preventDefault();
    const num = rc.getAttribute('data-rcsms') || '';
    let txt = rc.getAttribute('data-smstext') || '';

    // Fallback: compute live from the task + client if attribute missing
    if (!txt){
      const hostItem = rc.closest('.agenda-item');
      const taskId = hostItem?.querySelector('input[data-taskid]')?.getAttribute('data-taskid');
      const t = taskId ? state.tasks.find(x => x.id === taskId) : null;
      const c = t?.clientId ? clientById(t.clientId) : null;
      txt = computeSmsText(t, c) || SMS_DEFAULT_TEXT;
    }

    openRingCentralSMS(num, txt);
    return;
  }
  const gp = e.target.closest('[data-gmailpaste]');
  if (gp){
    e.preventDefault();
    const to = gp.getAttribute('data-to') || '';
    const hostItem = gp.closest('.agenda-item');
    const taskId = hostItem?.querySelector('input[data-taskid]')?.getAttribute('data-taskid');
    const t = taskId ? state.tasks.find(x => x.id === taskId) : null;
    const c = t?.clientId ? clientById(t.clientId) : null;

    const { subject, html, text } = computeEmailContent(t, c);
    copyRichEmailAndOpenGmail(to, subject, html, text);
    return;
  }
  const saveBtn = e.target.closest('[data-save-notify]');
  if (saveBtn){
    const id = saveBtn.getAttribute('data-save-notify');
    const host = saveBtn.closest('.notify-row');
    const time = host.querySelector('input[type="time"]').value;
    saveNotifyTime(id, time);
    host.remove();
    return;
  }
  const clrBtn = e.target.closest('[data-clear-notify]');
  if (clrBtn){
    const id = clrBtn.getAttribute('data-clear-notify');
    clearNotifyTime(id);
    clrBtn.closest('.notify-row')?.remove();
    return;
  }
});
// Put Customers + Agenda on the same centered width
function centerMainCards(){
  // Adjust these fallbacks to your actual containers
  const customers = document.getElementById('customersCard')
                 || document.getElementById('clientsTbl')?.closest('section')
                 || document.getElementById('clientsTbl')?.closest('.card');
  const agenda = document.getElementById('actionsCard')
               || document.getElementById('agenda')?.closest('section')
               || document.getElementById('agenda')?.closest('.card');

  customers?.classList.add('centered');
  agenda?.classList.add('centered');
}

function initTimeControl(){
  const input = document.getElementById('timeOverride');
  const reset = document.getElementById('timeOverrideReset');
  if(!input || !reset) return;
  if(state.settings.timeOverride){
    input.value = state.settings.timeOverride;
  }
  input.addEventListener('change', ()=>{
    state.settings.timeOverride = input.value;
    save();
    updateLocalTimes();
  });
  reset.addEventListener('click', ()=>{
    input.value='';
    state.settings.timeOverride='';
    save();
    updateLocalTimes();
  });
}




  /* ========= Notifications boot ========= */
  initNotificationsUI();
  startNotificationTicker();


  /* ========= Bootstrap ========= */
function bootstrap(){
  initAddModal();
  buildHomeList();
  refresh();
  buildCalendar();
  mountSortGroupLabel();
  setSortButtons();
  setShowButtons();
  initCalendarDrawer();
  initNamesDrawer();
  initSideTabs();
initMorePanel();
  initTimeControl();
  afterLayout();
  centerMainCards();
  updateLocalTimes();
// 🔎 Customers search + status filter
const searchEl = document.getElementById('search');
const clearSearchBtn = document.getElementById('clearSearch');
if (searchEl){
  let raf = 0;
  const apply = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(refresh); };
  const toggleClear = () => {
    if (!clearSearchBtn) return;
    clearSearchBtn.style.display = searchEl.value ? 'inline-flex' : 'none';
  };

  searchEl.addEventListener('input', () => { toggleClear(); apply(); });               // live as you type
  // ❌ remove the 'change' listener that was here
  searchEl.addEventListener('keydown', (e)=>{
    if (e.key === 'Escape'){ searchEl.value=''; toggleClear(); apply(); } // Esc to clear
  });

  if (clearSearchBtn){
    clearSearchBtn.addEventListener('click', () => {
      searchEl.value='';
      toggleClear();
      apply();
      searchEl.focus();
    });
    toggleClear();
  }
}

  document.getElementById('statusFilter')
  ?.addEventListener('change', () => refresh());           // keep this one

    centerMainCards();
}

bootstrap();


})();
