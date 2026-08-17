/* (주)에스디하우스 홈페이지 공통 스크립트
   ─────────────────────────────────────────────
   카카오톡 채널 주소를 여기에 넣으세요.
   카카오톡 채널 관리자센터 → 채널 홈 URL 복사 (예: https://pf.kakao.com/_abcdEF)
   비워두면 카카오톡 버튼이 전화 연결로 대체됩니다. */
var KAKAO_URL = "";

var PHONE = "01071910290";

function openKakao() {
  if (KAKAO_URL && KAKAO_URL.indexOf("http") === 0) {
    window.open(KAKAO_URL, "_blank", "noopener");
  } else {
    window.location.href = "tel:" + PHONE;
  }
  return false;
}

/* 국문 / 영문 전환 — 선택은 브라우저에 저장됩니다 */
function applyLang(lang) {
  var root = document.querySelector("[data-lang]");
  if (root) root.setAttribute("data-lang", lang);
  document.documentElement.setAttribute("lang", lang === "en" ? "en" : "ko");
  try { window.localStorage.setItem("sdhaus-lang", lang); } catch (e) {}
}

function toggleLang() {
  var root = document.querySelector("[data-lang]");
  var current = root ? root.getAttribute("data-lang") : "ko";
  applyLang(current === "ko" ? "en" : "ko");
}

/* 모바일 메뉴 */
function toggleMenu() {
  var el = document.getElementById("mobileMenu");
  if (el) el.style.display = el.style.display === "none" ? "grid" : "none";
}

function closeMenu() {
  var el = document.getElementById("mobileMenu");
  if (el) el.style.display = "none";
}

/* 상담 메뉴 */
function toggleChat() {
  var el = document.getElementById("chatPanel");
  if (el) el.style.display = el.style.display === "none" ? "block" : "none";
}

/* 문의 폼 — 기본 메일 앱으로 내용을 담아 엽니다 */
function sendEnquiry(event) {
  event.preventDefault();
  var form = event.target;
  var get = function (name) {
    var el = form.elements[name];
    return el ? el.value : "";
  };
  var topics = {
    sample: "샘플 신청",
    quote: "견적 문의",
    spec: "사양서 요청",
    volume: "대량 납품",
    etc: "문의"
  };
  var topic = topics[get("topic")] || "문의";
  var body = [
    "회사/성함: " + get("name"),
    "연락처: " + get("phone"),
    "문의 유형: " + topic,
    "",
    get("message")
  ].join("\n");
  window.location.href =
    "mailto:sdhaus0609@naver.com?subject=" +
    encodeURIComponent("[홈페이지 문의] " + topic + " - " + get("name")) +
    "&body=" + encodeURIComponent(body);
  return false;
}

/* 초기화 */
(function () {
  try {
    var saved = window.localStorage.getItem("sdhaus-lang");
    if (saved === "en" || saved === "ko") applyLang(saved);
  } catch (e) {}

  document.addEventListener("click", function (e) {
    var link = e.target.closest ? e.target.closest("#mobileMenu a") : null;
    if (link) closeMenu();
  });
})();

/* ── 시공사진 갤러리 ── */

var GAL = [{"g":"air","src":"img-g-air-01.jpg","ko":"인천공항 T1 플레이팅하나 · 푸드코트 전경","en":"Incheon T1 Plating Hana · food court"},{"g":"air","src":"img-g-air-02.jpg","ko":"인천공항 T1 · 매장 파사드 마감","en":"Incheon T1 · storefront finish"},{"g":"air","src":"img-g-air-03.jpg","ko":"인천공항 T1 · 좌석부 벽면 마감","en":"Incheon T1 · seating area walls"},{"g":"air","src":"img-g-air-04.jpg","ko":"인천공항 T1 · 시공 중 현장","en":"Incheon T1 · during installation"},{"g":"fnb","src":"img-g-fnb-01.jpg","ko":"엔젤리너스 · 카운터 및 바닥재 적용","en":"Angelinus · counter and flooring"},{"g":"fnb","src":"img-g-fnb-02.jpg","ko":"엔젤리너스 · 매장 전경","en":"Angelinus · store view"},{"g":"fnb","src":"img-g-fnb-03.jpg","ko":"배스킨라빈스 · 매장 파사드","en":"Baskin Robbins · storefront"},{"g":"fnb","src":"img-g-fnb-04.jpg","ko":"배스킨라빈스 · 카운터 및 진열부","en":"Baskin Robbins · counter"},{"g":"fnb","src":"img-g-fnb-05.jpg","ko":"베이커리 매장 · 벽면 마감","en":"Bakery · wall finishes"},{"g":"fnb","src":"img-g-fnb-06.jpg","ko":"프랜차이즈 매장 · 컬러 벽면 마감","en":"Franchise store · coloured walls"},{"g":"fnb","src":"img-g-fnb-07.jpg","ko":"주방·백야드 · 방수 보드 적용","en":"Kitchen · waterproof board"},{"g":"fnb","src":"img-g-fnb-08.jpg","ko":"주방 조리부 · 바닥재 및 벽면","en":"Kitchen line · floor and walls"},{"g":"fnb","src":"img-g-fnb-09.jpg","ko":"전문 매장 · 진입부 마감 계획","en":"Specialty retail · entrance"},{"g":"apt","src":"img-g-apt-01.png","ko":"두산 순천트리마제 · 천장 라인보드","en":"Doosan Suncheon Trimage · ceiling"},{"g":"apt","src":"img-g-apt-02.png","ko":"두산 순천트리마제 · 천장 디테일","en":"Doosan Suncheon Trimage · detail"},{"g":"apt","src":"img-g-apt-03.png","ko":"제일풍경채 신분평 · 복도 천장","en":"Jeil Punggyeongchae · corridor"},{"g":"apt","src":"img-g-apt-04.png","ko":"제일풍경채 신분평 · 천장 디테일","en":"Jeil Punggyeongchae · detail"},{"g":"apt","src":"img-g-apt-05.jpg","ko":"공동주택 거실 · 바닥재 시공 완료","en":"Living room · flooring complete"},{"g":"apt","src":"img-g-apt-06.jpg","ko":"공동주택 침실 · 바닥재 시공","en":"Bedroom · flooring"},{"g":"apt","src":"img-g-apt-07.jpg","ko":"거주 중 리모델링 현장","en":"Occupied remodel"},{"g":"apt","src":"img-g-apt-08.jpg","ko":"공동주택 · 시공 중 현장","en":"During installation"},{"g":"apt","src":"img-g-apt-09.jpg","ko":"침실 · 석재 패턴 바닥재","en":"Bedroom · stone pattern floor"},{"g":"apt","src":"img-g-apt-10.jpg","ko":"침실 · 시공 완료","en":"Bedroom · complete"},{"g":"apt","src":"img-g-apt-11.jpg","ko":"거실 · 창측 마감","en":"Living room · window side"},{"g":"apt","src":"img-g-apt-12.jpg","ko":"주방 · 바닥재 연결부","en":"Kitchen · floor junction"},{"g":"apt","src":"img-g-apt-13.jpg","ko":"거실 · 채광 조건에서의 표면 질감","en":"Living room · surface in daylight"},{"g":"apt","src":"img-g-apt-14.jpg","ko":"방 · 시공 완료 상태","en":"Room · complete"},{"g":"apt","src":"img-g-apt-15.jpg","ko":"욕실 · 벽·바닥 마감","en":"Bathroom · wall and floor"},{"g":"apt","src":"img-g-apt-16.jpg","ko":"욕실 · 줄눈 마감 디테일","en":"Bathroom · grout detail"},{"g":"apt","src":"img-g-apt-17.jpg","ko":"석재 패턴 표면 디테일","en":"Stone pattern detail"},{"g":"apt","src":"img-g-apt-18.jpg","ko":"계단·단차부 마감","en":"Step and level change"},{"g":"apt","src":"img-g-apt-19.jpg","ko":"바닥재 패턴 전개","en":"Floor pattern layout"},{"g":"off","src":"img-g-off-01.jpg","ko":"오스템임플란트 사옥 · 로비","en":"Osstem Implant HQ · lobby"},{"g":"off","src":"img-g-off-02.jpg","ko":"오피스 · 회의실 마감","en":"Office · meeting room"},{"g":"off","src":"img-g-off-03.jpg","ko":"오피스 · 엘리베이터 홀","en":"Office · lift lobby"},{"g":"off","src":"img-g-off-04.jpg","ko":"공용부 천장 · 라인보드 적용","en":"Common area ceiling · line board"},{"g":"off","src":"img-g-off-05.jpg","ko":"공용부 천장 · 조명 결합부","en":"Ceiling · lighting integration"},{"g":"off","src":"img-g-off-06.jpg","ko":"천장 · 프로파일 디테일","en":"Ceiling · profile detail"},{"g":"off","src":"img-g-off-07.jpg","ko":"복도 · 시공 전 상태","en":"Corridor · before"},{"g":"off","src":"img-g-off-08.jpg","ko":"공용부 · 시공 전 상태","en":"Common area · before"},{"g":"off","src":"img-g-off-09.jpg","ko":"엘리베이터 홀 · 시공 전 상태","en":"Lift lobby · before"},{"g":"off","src":"img-g-off-10.jpg","ko":"엘리베이터 홀 · 마감 후","en":"Lift lobby · after"},{"g":"off","src":"img-g-off-11.jpg","ko":"벽면 · 대형 패널 적용","en":"Wall · large-format panel"},{"g":"off","src":"img-g-off-12.jpg","ko":"템버보드 · 곡면 벽체 적용","en":"Tembour board · curved wall"},{"g":"off","src":"img-g-off-13.jpg","ko":"아트 패널 · 포인트 월","en":"Art panel · feature wall"},{"g":"off","src":"img-g-off-14.jpg","ko":"천장 · 시공 중 현장","en":"Ceiling · during works"},{"g":"off","src":"img-g-off-15.jpg","ko":"자재 반입 · 현장 준비","en":"Materials on site"}];
var GAL_GROUPS = {"air":{"ko":"공항 · 공공","en":"Airport / public"},"fnb":{"ko":"매장 · F&B","en":"Retail / F&B"},"apt":{"ko":"공동주택 · 주거","en":"Housing"},"off":{"ko":"오피스 · 공용부","en":"Office / common"}};
var galFilter = 'all';
var galList = [];
var galIndex = -1;

function galLang() {
  var root = document.querySelector('[data-lang]');
  return root && root.getAttribute('data-lang') === 'en' ? 'en' : 'ko';
}

function setFilter(key) {
  galFilter = key;
  var tabs = document.querySelectorAll('[data-tab]');
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].className = 'gtab' + (tabs[i].getAttribute('data-tab') === key ? ' gtab-on' : '');
  }
  var figs = document.querySelectorAll('#galleryGrid figure');
  galList = [];
  for (var j = 0; j < figs.length; j++) {
    var show = key === 'all' || figs[j].getAttribute('data-g') === key;
    figs[j].style.display = show ? '' : 'none';
    if (show) galList.push(parseInt(figs[j].getAttribute('data-i'), 10));
  }
  if (history.replaceState) history.replaceState(null, '', key === 'all' ? location.pathname : '#' + key);
}

function openViewer(i) {
  var pos = galList.indexOf(i);
  if (pos < 0) return;
  galIndex = pos;
  renderViewer();
  document.getElementById('viewer').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function renderViewer() {
  var shot = GAL[galList[galIndex]];
  if (!shot) return;
  var lang = galLang();
  document.getElementById('viewerImg').setAttribute('src', shot.src);
  document.getElementById('viewerImg').alt = shot[lang];
  document.getElementById('viewerCap').textContent = shot[lang];
  document.getElementById('viewerTag').textContent = GAL_GROUPS[shot.g][lang];
  document.getElementById('viewerPos').textContent = (galIndex + 1) + ' / ' + galList.length;
}

function stepViewer(d) {
  if (!galList.length) return;
  galIndex = (galIndex + d + galList.length) % galList.length;
  renderViewer();
}

function closeViewer() {
  document.getElementById('viewer').style.display = 'none';
  document.body.style.overflow = '';
}

(function () {
  if (!document.getElementById('galleryGrid')) return;
  var hash = (location.hash || '').replace('#', '');
  setFilter(GAL_GROUPS[hash] ? hash : 'all');
  document.addEventListener('keydown', function (e) {
    if (document.getElementById('viewer').style.display !== 'flex') return;
    if (e.key === 'Escape') closeViewer();
    if (e.key === 'ArrowRight') stepViewer(1);
    if (e.key === 'ArrowLeft') stepViewer(-1);
  });
  document.getElementById('viewer').addEventListener('click', function (e) {
    if (e.target === this) closeViewer();
  });
})();
