/**
 * Adam Kumar — Professional CV Client Logic
 * Clean, lightweight, bilingual English/Japanese support.
 */

// Global state
let currentLang = 'en';

const I18N = {
  en: {
    // Document Meta
    'doc.title': 'Adam Kumar — Curriculum Vitae',
    'doc.desc': 'Academic Curriculum Vitae of Adam Kumar, Graduate Student in Information Science and Engineering at Ritsumeikan University (Osaka Ibaraki Campus).',

    // Navigation & Header
    'nav.education': 'Education',
    'nav.awards': 'Awards',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills & Languages',
    'nav.print': 'Print / PDF',
    'nav.print_title': 'Print CV or Save as PDF',
    'nav.toggle_label': '日本語',
    'nav.toggle_title': 'Switch to Japanese / 日本語に切替',
    'nav.toggle_aria': 'Switch to Japanese',

    // Hero Section
    'hero.name': 'Adam Kumar',
    'hero.affiliation': 'Graduate Student · Graduate School of Information Science and Engineering',
    'hero.uni': 'Ritsumeikan University, Osaka Ibaraki Campus (OIC)',
    'hero.location': 'Osaka, Japan',
    'hero.summary': 'Graduate researcher focused on creating and cleaning datasets, designing machine learning and multi-view deep learning models, and building efficient automation systems and scripts.',

    // Education
    'edu.title': 'Education & Qualifications',
    'edu.group_higher': 'Higher Education',
    'edu.master_title': 'Master of Engineering',
    'edu.master_period': 'April 2026 – Present (Expected March 2028)',
    'edu.master_uni': 'Ritsumeikan University',
    'edu.master_loc': '· Osaka, Japan',
    'edu.master_major': 'Graduate School of Information Science and Engineering',
    'edu.master_desc': 'Graduate research at the Visual Information Engineering Laboratory focused on visual computing and applied machine learning. Research centers on constructing novel datasets and predictive models to analyze driver speed perception and develop overspeeding mitigation methods integrating deep learning with Augmented Reality (AR) interfaces.',

    'edu.bachelor_title': 'Bachelor of Engineering',
    'edu.bachelor_period': 'April 2022 – March 2026',
    'edu.bachelor_uni': 'Ritsumeikan University',
    'edu.bachelor_loc': '· Osaka, Japan',
    'edu.bachelor_major': 'Major in Information Systems Science and Engineering',
    'edu.bachelor_desc': 'Engineering curriculum with foundational training in mathematics (statistics, linear and boolean algebra, calculus) and software development in Python, C/C++, Java, and SQL. Undergraduate thesis developed automated chicken freshness estimation using multi-view deep learning and feature fusion across dual-view imagery for real-time quality control.',

    'edu.group_secondary': 'Secondary Education & International Qualifications',
    'edu.school_title': 'Prince of Wales Island International School',
    'edu.school_period': 'September 2014 – July 2021',
    'edu.school_loc': 'Penang, Malaysia',
    'edu.school_desc': 'Completed secondary education following the British National Curriculum, successfully graduating through the International General Certificate of Secondary Education (IGCSE) and Advanced Level (A Levels) programmes with a rigorous foundation in mathematics, advanced sciences, and analytical problem-solving.',
    'edu.cert1': '<strong>2021 Pearson Edexcel</strong>, International A levels',
    'edu.cert2': '<strong>2021 Oxford International AQA</strong>, General Certificate of Education',
    'edu.cert3': '<strong>2021 Cambridge Assessment International Education</strong>, General Certificate of Education',

    // Awards
    'awards.title': 'Awards',
    'awards.subtitle': 'Academic merit grants, foundation scholarships, and competition honors.',
    'awards.sgh_title': 'SGH Scholarship',
    'awards.sgh_org': 'SGH International Scholarship Foundation (公益財団法人SGH財団留学生奨学)',
    'awards.seiseki_title': 'Ritsumeikan SEISEKI-YUSHUSHA I Scholarship',
    'awards.seiseki_org': 'Conferred for top academic ranking and excellence (成績優秀者賞)',
    'awards.nitori_title': 'NITORI Scholarship',
    'awards.nitori_org': 'Nitori International Scholarship Foundation (公益財団法人 似鳥国際奨学財団)',
    'awards.cog_title': 'First Place Award: DareFightingICE Sound Design',
    'awards.cog_org': 'IEEE Conference on Games (IEEE CoG)',
    'awards.tuition_title': '100% Tuition Reduction Scholarship',
    'awards.tuition_org': 'Ritsumeikan University',
    'awards.jasso_title': 'JASSO Scholarship',
    'awards.jasso_org': 'Japan Student Services Organization (日本学生支援機構奨学金)',

    // Projects
    'projects.title': 'Projects',
    'projects.subtitle': 'Research architectures and automated tools.',
    'projects.chicken_title': 'Chicken Age Estimation — Multi-View Deep Learning',
    'projects.chicken_desc': 'Deep learning system for estimating chicken drumette age (1–7 days post-slaughter) from dual-view images using multi-view fusion strategies. Incorporates automated dataset cleaning, synchronous multi-angle feature extraction, and regression modeling.',
    'projects.yt_title': 'YouTube Music Playlist Auto-Liker',
    'projects.yt_desc': 'A client-side userscript that automatically likes every song in a YouTube Music playlist. This tool enables users to bulk-transfer songs from any playlist into their personal "Liked Music" collection while preserving track order and preventing accidental unliking.',

    // Experience
    'exp.title': 'Experience',
    'exp.ptw_title': 'Game Development and Problem Solving Intern',
    'exp.ptw_period': '2026',
    'exp.ptw_org': 'PoletoWin (PTW)',
    'exp.ptw_desc': '1-day intensive internship focused on software engineering problem solving, runtime debugging, and game development analysis.',
    'exp.isa_title': 'English Teaching',
    'exp.isa_period': '2022 – 2026',
    'exp.isa_org': 'ISA Japan',
    'exp.isa_desc': 'Instructed English language and communication skills to Japanese students, utilizing native bilingual fluency to facilitate clear instruction and cross-cultural understanding.',
    'exp.leo_title': 'English Teaching Volunteer',
    'exp.leo_period': '2018 – 2019',
    'exp.leo_org': 'LEO Club International Malaysia',
    'exp.leo_desc': 'Volunteered in community education, teaching English literacy.',

    // Skills
    'skills.title': 'Skills & Languages',
    'skills.tech_title': 'Technical Skills',
    'skills.sub_prog': 'Programming Languages',
    'skills.sub_ml': 'Machine Learning & Computer Vision',
    'skills.sub_db': 'Databases & Data Management',
    'skills.lang_title': 'Languages',
    'skills.lang_en': 'English',
    'skills.lang_ja': 'Japanese (日本語)',
    'skills.lang_ms': 'Malay (Bahasa Melayu)',
    'skills.lang_zh': 'Mandarin (中文)',
    'skills.level_native': 'Native',
    'skills.level_conv': 'Conversational',
    'skills.level_beg': 'Beginner',
    'skills.sub_tools': 'Tools & Environments',

    // Message Form
    'msg.title': 'Send a Message',
    'msg.subtitle': 'Have an academic inquiry, collaboration idea, or opportunity? Leave a note below.',
    'msg.label_name': 'Name',
    'msg.placeholder_name': 'Your Name',
    'msg.label_email': 'Email',
    'msg.placeholder_email': 'your.email@example.com',
    'msg.label_message': 'Message',
    'msg.placeholder_message': 'Write your message here...',
    'msg.btn_send': 'Send Message',

    // Footer
    'footer.rights': '© 2026 Adam Kumar',
    'footer.loc': 'Ritsumeikan University · Osaka, Japan',

    // Toasts & Messages
    'toast.copied': 'Copied to clipboard',
    'toast.copy_item': 'Copied {label} to clipboard',
    'toast.copy_fail': 'Copy failed',
    'toast.email_opening': 'Opening email client...'
  },

  ja: {
    // Document Meta
    'doc.title': 'アダム・クマール (Adam Kumar) — 履歴書・研究業績 (CV)',
    'doc.desc': '立命館大学大学院 情報理工学研究科 アダム・クマール（Adam Kumar）の研究・学歴・技術経歴書（Curriculum Vitae）。',

    // Navigation & Header
    'nav.education': '学歴・資格',
    'nav.awards': '受賞・奨学金',
    'nav.projects': '研究・開発',
    'nav.experience': '職歴・活動',
    'nav.skills': 'スキル・言語',
    'nav.print': '印刷 / PDF保存',
    'nav.print_title': '履歴書を印刷またはPDFとして保存',
    'nav.toggle_label': 'English',
    'nav.toggle_title': 'Switch to English / 英語に切替',
    'nav.toggle_aria': 'Switch to English',

    // Hero Section
    'hero.name': 'アダム・クマール',
    'hero.affiliation': '大学院生 · 大学院情報理工学研究科',
    'hero.uni': '立命館大学 大阪いばらきキャンパス (OIC)',
    'hero.location': '日本・大阪',
    'hero.summary': 'データセットの構築・クリーニング、機械学習およびマルチビュー深層学習モデルの設計、高効率な自動化システムやスクリプト開発に注力する大学院研究者。',

    // Education
    'edu.title': '学歴・資格',
    'edu.group_higher': '高等教育（大学・大学院）',
    'edu.master_title': '修士（工学）',
    'edu.master_period': '2026年4月 – 在学中（2028年3月修了見込み）',
    'edu.master_uni': '立命館大学',
    'edu.master_loc': '· 日本・大阪',
    'edu.master_major': '大学院情報理工学研究科',
    'edu.master_desc': '視覚情報工学研究室に所属し、ビジュアルコンピューティングおよび応用機械学習を専攻。運転者の速度知覚分析のための新規データセット構築と予測モデル開発、ならびに深層学習と拡張現実（AR）インターフェースを統合した速度超過抑制手法の研究に従事。',

    'edu.bachelor_title': '学士（工学）',
    'edu.bachelor_period': '2022年4月 – 2026年3月',
    'edu.bachelor_uni': '立命館大学',
    'edu.bachelor_loc': '· 日本・大阪',
    'edu.bachelor_major': '情報理工学部 情報システム学科',
    'edu.bachelor_desc': '数学（統計学、線形代数、ブール代数、解析学）の基礎理論と、Python、C/C++、Java、SQLを用いたソフトウェア開発の工学教育を修得。卒業研究では、リアルタイム品質管理に向けたデュアルビュー画像とマルチビュー深層学習・特徴量融合による鶏肉の鮮度自動推定システムを開発。',

    'edu.group_secondary': '中等教育・国際資格',
    'edu.school_title': 'Prince of Wales Island International School',
    'edu.school_period': '2014年9月 – 2021年7月',
    'edu.school_loc': 'ペナン、マレーシア',
    'edu.school_desc': '英国ナショナル・カリキュラムに準拠した中等教育を修了。国際中等教育一般資格（IGCSE）および英国大学入学資格（A-Levels）を取得し、高度な数学、科学、論理的思考力の基盤を確立。',
    'edu.cert1': '<strong>2021年 ピアソン・エクセル（Pearson Edexcel）</strong>、国際Aレベル資格',
    'edu.cert2': '<strong>2021年 オックスフォード国際AQA（Oxford International AQA）</strong>、一般教育証書',
    'edu.cert3': '<strong>2021年 ケンブリッジ国際教育機構（Cambridge Assessment）</strong>、一般教育証書',

    // Awards
    'awards.title': '受賞・奨学金',
    'awards.subtitle': '学業成績優秀者給付、各種財団奨学金、および国際コンペティション受賞歴。',
    'awards.sgh_title': 'SGH財団 留学生奨学金',
    'awards.sgh_org': '公益財団法人SGH財団留学生奨学',
    'awards.seiseki_title': '立命館大学 成績優秀者賞（SEISEKI-YUSHUSHA I）',
    'awards.seiseki_org': '学業成績最優秀者として授与（成績優秀者賞）',
    'awards.nitori_title': '似鳥国際奨学財団 奨学生',
    'awards.nitori_org': '公益財団法人 似鳥国際奨学財団',
    'awards.cog_title': '第1位受賞: DareFightingICE 音響デザイン部門',
    'awards.cog_org': 'IEEE Conference on Games (IEEE CoG 国際学会)',
    'awards.tuition_title': '授業料全額免除（100%減免）奨学金',
    'awards.tuition_org': '立命館大学',
    'awards.jasso_title': '日本学生支援機構（JASSO）学習奨励費',
    'awards.jasso_org': '独立行政法人 日本学生支援機構（JASSO）',

    // Projects
    'projects.title': '研究・プロジェクト',
    'projects.subtitle': '研究開発アーキテクチャおよび自動化ツール。',
    'projects.chicken_title': '鶏肉鮮度推定 — マルチビュー深層学習システム',
    'projects.chicken_desc': 'デュアルアングル画像とマルチビュー特徴量融合技術を用い、食肉処理後（1〜7日）の鶏肉鮮度を自動推定する深層学習システム。自動データセットクリーニング、複数視点からの同期特徴抽出、高精度な回帰モデリングを実装。',
    'projects.yt_title': 'YouTube Music プレイリスト自動高評価スクリプト',
    'projects.yt_desc': 'YouTube Musicのプレイリスト内全楽曲を一括自動評価（高評価）するクライアントサイド・ユーザースクリプト。再生順序を維持し誤解除を防ぎながら、外部プレイリストから個人の「高く評価した曲」ライブラリへの移行を自動化。',

    // Experience
    'exp.title': '職歴・活動実績',
    'exp.ptw_title': 'ゲーム開発・課題解決エンジニアリング インターン',
    'exp.ptw_period': '2026年',
    'exp.ptw_org': 'ポールトゥウィン株式会社 (PTW)',
    'exp.ptw_desc': 'ソフトウェアエンジニアリングにおける実践的課題解決、ランタイムデバッグ、およびゲーム開発構造分析に特化した短期集中型インターンシップ。',
    'exp.isa_title': '英語教育・語学インストラクター',
    'exp.isa_period': '2022年 – 2026年',
    'exp.isa_org': '株式会社アイエスエイ (ISA Japan)',
    'exp.isa_desc': '日本人学生を対象に英語および実践的コミュニケーション指導を実施。日米英語ネイティブのバイリンガル能力を活かし、分かりやすい指導と異文化理解を促進。',
    'exp.leo_title': '英語教育ボランティア',
    'exp.leo_period': '2018年 – 2019年',
    'exp.leo_org': 'レオクラブ（LEO Club International Malaysia）',
    'exp.leo_desc': '地域社会への教育奉仕活動として、青少年の英語リテラシー向上を支援。',

    // Skills
    'skills.title': 'スキル・語学',
    'skills.tech_title': '技術スキル',
    'skills.sub_prog': 'プログラミング言語',
    'skills.sub_ml': '機械学習・コンピュータビジョン',
    'skills.sub_db': 'データベース・データ管理',
    'skills.lang_title': '語学力',
    'skills.lang_en': '英語',
    'skills.lang_ja': '日本語 (Japanese)',
    'skills.lang_ms': 'マレー語 (Bahasa Melayu)',
    'skills.lang_zh': '中国語 (中文)',
    'skills.level_native': 'ネイティブ (母国語)',
    'skills.level_conv': '日常会話レベル',
    'skills.level_beg': '初級',
    'skills.sub_tools': '開発ツール・環境',

    // Message Form
    'msg.title': 'メッセージを送信',
    'msg.subtitle': '学術的なお問い合わせ、共同研究のご提案、その他ご連絡がございましたら以下よりメッセージをお送りください。',
    'msg.label_name': 'お名前',
    'msg.placeholder_name': 'お名前をご入力ください',
    'msg.label_email': 'メールアドレス',
    'msg.placeholder_email': 'example@domain.com',
    'msg.label_message': 'メッセージ本文',
    'msg.placeholder_message': 'メッセージをご記入ください...',
    'msg.btn_send': 'メッセージを送信する',

    // Footer
    'footer.rights': '© 2026 アダム・クマール (Adam Kumar)',
    'footer.loc': '立命館大学 · 日本・大阪',

    // Toasts & Messages
    'toast.copied': 'クリップボードにコピーしました',
    'toast.copy_item': '{label}をクリップボードにコピーしました',
    'toast.copy_fail': 'コピーに失敗しました',
    'toast.email_opening': 'メールソフトを起動しています...'
  }
};

function init() {
  initLanguageToggle();
  initClipboardCopy();
  initContactForm();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

/**
 * Language Switcher Implementation
 */
let isLanguageToggling = false;

function toggleLanguage() {
  if (isLanguageToggling) return;
  isLanguageToggling = true;

  const nextLang = currentLang === 'en' ? 'ja' : 'en';
  applyLanguage(nextLang);

  setTimeout(() => {
    isLanguageToggling = false;
  }, 250);
}
window.toggleLanguage = toggleLanguage;

function initLanguageToggle() {
  const toggleBtn = document.getElementById('lang-toggle-btn');

  // Retrieve saved preference or default to English
  let savedLang = null;
  try {
    savedLang = localStorage.getItem('cv_preferred_lang');
  } catch (e) {
    // Storage access may be restricted
  }

  if (savedLang === 'ja' || savedLang === 'en') {
    applyLanguage(savedLang);
  } else {
    applyLanguage('en');
  }

  if (toggleBtn) {
    toggleBtn.onclick = (e) => {
      if (e) e.preventDefault();
      toggleLanguage();
    };
  }
}

function applyLanguage(lang) {
  if (!I18N[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;

  // Persist preference
  try {
    localStorage.setItem('cv_preferred_lang', lang);
  } catch (e) {
    // Storage access may be restricted in sandboxes
  }

  // Update Page Title and Meta Description
  if (I18N[lang]['doc.title']) {
    document.title = I18N[lang]['doc.title'];
  }
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && I18N[lang]['doc.desc']) {
    metaDesc.setAttribute('content', I18N[lang]['doc.desc']);
  }

  // Update Text Nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = I18N[lang][key];
    if (translation !== undefined) {
      if (translation.includes('<')) {
        el.innerHTML = translation;
      } else {
        el.textContent = translation;
      }
    }
  });

  // Update Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const translation = I18N[lang][key];
    if (translation !== undefined) {
      el.placeholder = translation;
    }
  });

  // Update Title Attributes
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    const translation = I18N[lang][key];
    if (translation !== undefined) {
      el.title = translation;
    }
  });

  // Update Toggle Button State
  const toggleBtn = document.getElementById('lang-toggle-btn');
  const toggleLabel = document.getElementById('lang-label');
  if (toggleLabel && I18N[lang]['nav.toggle_label']) {
    toggleLabel.textContent = I18N[lang]['nav.toggle_label'];
  }
  if (toggleBtn) {
    if (I18N[lang]['nav.toggle_title']) {
      toggleBtn.title = I18N[lang]['nav.toggle_title'];
    }
    if (I18N[lang]['nav.toggle_aria']) {
      toggleBtn.setAttribute('aria-label', I18N[lang]['nav.toggle_aria']);
    }
  }
}

/**
 * Toast Notification Helper
 */
function showToast(message) {
  const toast = document.getElementById('toast-msg');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');

  clearTimeout(toast.timeoutId);
  toast.timeoutId = setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
}

/**
 * Bottom Message Box Form Handler
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const message = document.getElementById('form-message').value.trim();

    if (!name || !email || !message) return;

    const subject = encodeURIComponent(
      currentLang === 'ja'
        ? `お問い合わせ: ${name} 様 (CVサイトより)`
        : `Message from ${name} via CV Website`
    );
    const body = encodeURIComponent(
      currentLang === 'ja'
        ? `差出人: ${name} (${email})\n\nメッセージ:\n${message}`
        : `From: ${name} (${email})\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:xadamok@gmail.com?subject=${subject}&body=${body}`;

    const toastText = I18N[currentLang]['toast.email_opening'] || 'Opening email client...';
    showToast(toastText);
    form.reset();
  });
}

/**
 * 1-Click Clipboard Copy with Feedback Toast
 */
function initClipboardCopy() {
  const copyButtons = document.querySelectorAll('[data-copy]');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      const label = btn.getAttribute('data-label') || 'Text';

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          triggerCopyToast(label);
        }).catch(() => {
          fallbackCopy(textToCopy, label);
        });
      } else {
        fallbackCopy(textToCopy, label);
      }
    });
  });

  function triggerCopyToast(label) {
    const template = I18N[currentLang]['toast.copy_item'];
    const msg = template ? template.replace('{label}', label) : `Copied ${label} to clipboard`;
    showToast(msg);
  }

  function fallbackCopy(text, label) {
    const tempInput = document.createElement('textarea');
    tempInput.value = text;
    tempInput.setAttribute('readonly', '');
    tempInput.style.position = 'absolute';
    tempInput.style.left = '-9999px';
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      document.execCommand('copy');
      triggerCopyToast(label);
    } catch (err) {
      showToast(I18N[currentLang]['toast.copy_fail'] || 'Copy failed');
    }
    document.body.removeChild(tempInput);
  }
}
