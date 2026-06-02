/*
 * common.js - 田中謙治研究室HP 共通パーツ
 * ヘッダー・ナビゲーション・フッターを一元管理(日本語/英語対応)
 *
 * 使い方:
 *   - 日本語ページ: <script>initPage("about.html");</script>
 *   - 英語ページ:   <script>initPage("about-e.html", "en");</script>
 */

var SITE_DATA = {
  ja: {
    title: "田中謙治研究室",
    subtitle: "Kenji TANAKA Lab.",
    menuLabel: "メニュー",
    homeHref: "index.html",
    homeLabel: "Home",
    altLangHref: "index-e.html",
    altLangLabel: "English",
    counterLabel: "来訪者数:",
    notice: "無断転載を禁ず",
    copyright: "Copyright &copy; Kenji TANAKA Lab., All rights reserved.",
    affiliations: [
      {
        lines: ["九州大学大学院総合理工学府総合理工学専攻", "Ⅱ類プラズマ・量子理工学メジャー(連携講座)"],
        logoSrc: "image/logosoriko.png",
        logoAlt: "九州大学総合理工学府",
        logoTitle: "九州大学大学院総合理工学府",
        logoHref: "https://www.aees.kyushu-u.ac.jp/"
      },
      {
        lines: ["自然科学研究機構 核融合科学研究所", "可知化センシングユニット"],
        logoSrc: "image/nifslogo.png",
        logoAlt: "核融合科学研究所(NIFS)",
        logoTitle: "自然科学研究機構 核融合科学研究所",
        logoHref: "https://www.nifs.ac.jp/"
      }
    ],
    nav: [
      { href: "about.html",           text: "研究室の概要",                img: "image/nav1.gif" },
      { href: "member.html",          text: "メンバー",                    img: "image/nav2.gif" },
      { href: "nuclear_fusion.html",  text: "核融合とは",                  img: "image/nav3.gif" },
      { href: "lhd.html",            text: "大型ヘリカル装置",            img: "image/nav5.gif" },
      { href: "plasma.html",         text: "プラズマ実験",                img: "image/nav4.gif" },
      { href: "collective.html",     text: "干渉計測と\nトムソン散乱計測",  img: "image/nav6.gif" },
      { href: "research.html",       text: "研究紹介",                    img: "image/nav7.gif" },
      { href: "education.html",      text: "大学院教育",                  img: "image/nav8.gif" },
      { href: "doctor.html",         text: "博士研究員",                  img: "image/nav9.gif" },
      { href: "lecture.html",        text: "講義・講演資料",              img: "image/nav91.gif" },
      { href: "photo.html",          text: "活動状況",                    img: "image/nav92.gif" },
      { href: "activities.html",     text: "フォトギャラリー",            img: "image/nav93.gif" },
      { href: "faq.html",            text: "田中先生に\n聞いてみよう",    img: "image/nav95.gif" },
      { href: "access.html",         text: "交通アクセス",                img: "image/nav94.gif" }
    ]
  },

  en: {
    title: "Kenji TANAKA Lab.",
    subtitle: "Kyushu University & NIFS",
    menuLabel: "Menu",
    homeHref: "index-e.html",
    homeLabel: "Home",
    altLangHref: "index.html",
    altLangLabel: "日本語",
    counterLabel: "Visitors:",
    notice: "All rights reserved.",
    copyright: "Copyright &copy; Kenji TANAKA Lab., All rights reserved.",
    affiliations: [
      {
        lines: ["Interdisciplinary Graduate School of Engineering Sciences (IGSES), Kyushu University",
                "Plasma and Quantum Science and Engineering Major (Cooperative Course)"],
        logoSrc: "image/logosoriko.png",
        logoAlt: "Kyushu University IGSES",
        logoTitle: "Interdisciplinary Graduate School of Engineering Sciences, Kyushu University",
        logoHref: "https://www.aees.kyushu-u.ac.jp/"
      },
      {
        lines: ["National Institute for Fusion Science (NIFS)",
                "Sensing and Intellectualizing Technology Unit"],
        logoSrc: "image/nifslogo.png",
        logoAlt: "NIFS",
        logoTitle: "National Institute for Fusion Science",
        logoHref: "https://www.nifs.ac.jp/eng/"
      }
    ],
    nav: [
      { href: "about-e.html",          text: "About",                              img: "image/nav1.gif" },
      { href: "member-e.html",         text: "Members",                            img: "image/nav2.gif" },
      { href: "nuclear_fusion-e.html", text: "What is Fusion",                     img: "image/nav3.gif" },
      { href: "lhd-e.html",           text: "Large Helical Device",               img: "image/nav5.gif" },
      { href: "plasma-e.html",        text: "Plasma Experiments",                 img: "image/nav4.gif" },
      { href: "collective-e.html",    text: "Interferometry &\nThomson Scattering", img: "image/nav6.gif" },
      { href: "research-e.html",      text: "Research",                           img: "image/nav7.gif" },
      { href: "education-e.html",     text: "Graduate Education",                 img: "image/nav8.gif" },
      { href: "doctor-e.html",        text: "Postdoc Positions",                  img: "image/nav9.gif" },
      { href: "lecture-e.html",       text: "Lectures &\nMaterials",              img: "image/nav91.gif" },
      { href: "photo-e.html",         text: "Activities & News",                  img: "image/nav92.gif" },
      { href: "activities-e.html",    text: "Photo Gallery",                      img: "image/nav93.gif" },
      { href: "faq-e.html",           text: "FAQ",                                img: "image/nav95.gif" },
      { href: "access-e.html",        text: "Access",                             img: "image/nav94.gif" }
    ]
  }
};

// カウンターURL(両言語共通)
var SITE_COUNTER = [
  "http://www.cis-trans.jp/nifs_tanaka/counter/ecount.cgi?6",
  "http://www.cis-trans.jp/nifs_tanaka/counter/ecount.cgi?5",
  "http://www.cis-trans.jp/nifs_tanaka/counter/ecount.cgi?4",
  "http://www.cis-trans.jp/nifs_tanaka/counter/ecount.cgi?3",
  "http://www.cis-trans.jp/nifs_tanaka/counter/ecount.cgi?2",
  "http://www.cis-trans.jp/nifs_tanaka/counter/ecount.cgi?1"
];

/* ========== ヘッダー生成 ========== */
function buildHeader(data) {
  // 上段用ロゴ
  var topLogos = data.affiliations.map(function(a){
    return '<a href="' + a.logoHref + '" target="_blank" rel="noopener" class="header-logo" title="' + a.logoTitle + '">' +
      '<img src="' + a.logoSrc + '" alt="' + a.logoAlt + '">' +
    '</a>';
  }).join('');

  // 下段用 所属テキストのみ
  var rows = data.affiliations.map(function(a){
    return '<div class="affiliation-row">' +
      '<div class="affiliation-text">' +
        '<p>' + a.lines[0] + '</p>' +
        '<p>' + a.lines[1] + '</p>' +
      '</div>' +
    '</div>';
  }).join('');

  return '<header id="header">' +
    '<div class="header-top">' +
      '<h1>' + data.title + '<span class="subtitle">' + data.subtitle + '</span></h1>' +
      '<div class="header-top-logos">' + topLogos + '</div>' +
      '<nav class="lang-links">' +
        '<a href="' + data.homeHref + '">' + data.homeLabel + '</a>' +
        '<a href="' + data.altLangHref + '">' + data.altLangLabel + '</a>' +
      '</nav>' +
    '</div>' +
    '<div class="header-affiliation">' + rows + '</div>' +
  '</header>';
}

/* ========== ナビゲーション生成 ========== */
function buildNav(currentHref, data) {
  var items = data.nav.map(function(item){
    var isCurrent = (item.href === currentHref);
    var textHtml = item.text.replace(/\n/g, '<br>');
    var cls = isCurrent ? ' aria-current="page" class="active"' : '';
    var imgTag = item.img
      ? '<span class="nav-icon-wrap"><img class="nav-icon" src="' + item.img + '" alt=""></span>'
      : '';
    return '<li><a href="' + item.href + '"' + cls + '>' +
      imgTag + '<span class="nav-text">' + textHtml + '</span></a></li>';
  }).join('');

  return '<input type="checkbox" id="nav-toggle">' +
    '<label for="nav-toggle" class="nav-toggle-label">' + data.menuLabel + '</label>' +
    '<nav id="nav"><ul>' + items + '</ul></nav>';
}

/* ========== フッター生成 ========== */
function buildFooter(data) {
  var counterImgs = SITE_COUNTER.map(function(url){
    return '<img src="' + url + '" alt="">';
  }).join('');

  return '<footer id="footer">' +
    '<div class="footer-kakenhi">' +
      '<a href="https://kaken.nii.ac.jp/" target="_blank" rel="noopener">' +
        '<img src="image/bn_kakenhi.jpg" alt="科学研究費補助金 / KAKENHI">' +
      '</a>' +
    '</div>' +
    '<div class="footer-counter">' +
      '<span class="label">' + data.counterLabel + '</span>' + counterImgs +
    '</div>' +
    '<p class="notice">' + data.notice + '</p>' +
    '<p class="copyright">' + data.copyright + '</p>' +
  '</footer>';
}

/* ========== ページ初期化 ========== */
function initPage(currentHref, lang) {
  lang = lang || 'ja';
  var data = SITE_DATA[lang] || SITE_DATA.ja;

  // <html lang="...">を設定
  document.documentElement.lang = lang;

  // ヘッダー挿入
  var headerEl = document.getElementById('site-header');
  if (headerEl) headerEl.innerHTML = buildHeader(data);

  // ナビ挿入
  var navEl = document.getElementById('site-nav');
  if (navEl) navEl.innerHTML = buildNav(currentHref, data);

  // フッター挿入
  var footerEl = document.getElementById('site-footer');
  if (footerEl) footerEl.innerHTML = buildFooter(data);

  // MathJax (TeX形式の数式を表示。$...$と$$...$$に対応)
  loadMathJax();
}

/* ========== MathJax 読み込み ========== */
function loadMathJax() {
  if (window.MathJax) return; // すでに読み込み済み

  // MathJax設定(スクリプトより先に)
  window.MathJax = {
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      displayMath: [['$$', '$$'], ['\\[', '\\]']],
      processEscapes: true
    },
    svg: { fontCache: 'global' },
    options: {
      skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
    }
  };

  // MathJaxスクリプト読み込み
  var s = document.createElement('script');
  s.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
  s.async = true;
  document.head.appendChild(s);
}
