/*
 * common.js - 田中謙治研究室HP 共通パーツ
 * ヘッダー・ナビゲーション・フッターを一元管理
 * 各HTMLページでこのファイルを読み込んで initPage("ファイル名") を呼ぶだけ
 */

var SITE = {
  title: "田中謙治研究室",
  subtitle: "Kenji TANAKA Lab.",
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
    { href: "about.html",           text: "研究室の概要",               img: "image/nav1.gif" },
    { href: "member.html",          text: "メンバー",                   img: "image/nav2.gif" },
    { href: "nuclear_fusion.html",  text: "核融合とは",                 img: "image/nav3.gif" },
    { href: "lhd.html",            text: "大型ヘリカル装置",           img: "image/nav5.gif" },
    { href: "plasma.html",         text: "プラズマ実験",               img: "image/nav4.gif" },
    { href: "collective.html",     text: "干渉計測と\nトムソン散乱計測", img: "image/nav6.gif" },
    { href: "research.html",       text: "研究紹介",                   img: "image/nav7.gif" },
    { href: "education.html",      text: "大学院教育",                 img: "image/nav8.gif" },
    { href: "doctor.html",         text: "博士研究員",                 img: "image/nav9.gif" },
    { href: "lecture.html",        text: "講義・講演資料",             img: "image/nav91.gif" },
    { href: "photo.html",          text: "活動状況",                   img: "image/nav92.gif" },
    { href: "activities.html",     text: "フォトギャラリー",           img: "image/nav93.gif" },
    { href: "faq.html",            text: "田中先生に\n聞いてみよう",   img: "image/nav95.gif" },
    { href: "access.html",         text: "交通アクセス",               img: "image/nav94.gif" }
  ],
  counter: [
    "http://www.cis-trans.jp/nifs_tanaka/counter/ecount.cgi?6",
    "http://www.cis-trans.jp/nifs_tanaka/counter/ecount.cgi?5",
    "http://www.cis-trans.jp/nifs_tanaka/counter/ecount.cgi?4",
    "http://www.cis-trans.jp/nifs_tanaka/counter/ecount.cgi?3",
    "http://www.cis-trans.jp/nifs_tanaka/counter/ecount.cgi?2",
    "http://www.cis-trans.jp/nifs_tanaka/counter/ecount.cgi?1"
  ]
};

/* ========== ヘッダー生成 ========== */
function buildHeader() {
  // 上段用ロゴ
  var topLogos = SITE.affiliations.map(function(a){
    return '<a href="' + a.logoHref + '" target="_blank" rel="noopener" class="header-logo" title="' + a.logoTitle + '">' +
      '<img src="' + a.logoSrc + '" alt="' + a.logoAlt + '">' +
    '</a>';
  }).join('');

  // 下段用 所属テキストのみ
  var rows = SITE.affiliations.map(function(a){
    return '<div class="affiliation-row">' +
      '<div class="affiliation-text">' +
        '<p>' + a.lines[0] + '</p>' +
        '<p>' + a.lines[1] + '</p>' +
      '</div>' +
    '</div>';
  }).join('');

  return '<header id="header">' +
    '<div class="header-top">' +
      '<h1>' + SITE.title + '<span class="subtitle">' + SITE.subtitle + '</span></h1>' +
      '<div class="header-top-logos">' + topLogos + '</div>' +
      '<nav class="lang-links">' +
        '<a href="index.html">Home</a>' +
        '<a href="index-e.html">English</a>' +
      '</nav>' +
    '</div>' +
    '<div class="header-affiliation">' + rows + '</div>' +
  '</header>';
}

/* ========== ナビゲーション生成 ========== */
function buildNav(currentHref) {
  var items = SITE.nav.map(function(item){
    var isCurrent = (item.href === currentHref);
    var textHtml = item.text.replace(/\n/g, '<br>');
    var cls = isCurrent ? ' aria-current="page" class="active"' : '';
    var imgTag = item.img ? '<img class="nav-icon" src="' + item.img + '" alt="">' : '';
    return '<li><a href="' + item.href + '"' + cls + '>' +
      imgTag + '<span class="nav-text">' + textHtml + '</span></a></li>';
  }).join('');

  return '<input type="checkbox" id="nav-toggle">' +
    '<label for="nav-toggle" class="nav-toggle-label">メニュー</label>' +
    '<nav id="nav"><ul>' + items + '</ul></nav>';
}

/* ========== フッター生成 ========== */
function buildFooter() {
  var counterImgs = SITE.counter.map(function(url){
    return '<img src="' + url + '" alt="">';
  }).join('');

  return '<footer id="footer">' +
    '<div class="footer-kakenhi">' +
      '<a href="https://kaken.nii.ac.jp/" target="_blank" rel="noopener">' +
        '<img src="image/bn_kakenhi.jpg" alt="科学研究費補助金">' +
      '</a>' +
    '</div>' +
    '<div class="footer-counter">' +
      '<span class="label">来訪者数:</span>' + counterImgs +
    '</div>' +
    '<p class="notice">無断転載を禁ず</p>' +
    '<p class="copyright">Copyright &copy; Kenji TANAKA Lab., All rights reserved.</p>' +
  '</footer>';
}

/* ========== ページ初期化 ========== */
function initPage(currentHref) {
  // ヘッダー挿入
  var headerEl = document.getElementById('site-header');
  if (headerEl) headerEl.innerHTML = buildHeader();

  // ナビ挿入
  var navEl = document.getElementById('site-nav');
  if (navEl) navEl.innerHTML = buildNav(currentHref);

  // フッター挿入
  var footerEl = document.getElementById('site-footer');
  if (footerEl) footerEl.innerHTML = buildFooter();
}
