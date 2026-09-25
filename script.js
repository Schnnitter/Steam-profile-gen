const textInput = document.querySelector('#text-input');
const characterCount = document.querySelector('#character-count');
const fontResults = document.querySelector('#font-results');
const dividerGrid = document.querySelector('#divider-grid');
const bioGrid = document.querySelector('#bio-grid');
const toast = document.querySelector('#toast');
const usernameInput = document.querySelector('#username-input');
const previewUsername = document.querySelector('#preview-username');
const previewText = document.querySelector('#preview-text');
const vipFontGrid = document.querySelector('#vip-font-grid');
const vipDividerGrid = document.querySelector('#vip-divider-grid');
const copyBlankButton = document.querySelector('#copy-blank');
const bbcodeOutput = document.querySelector('#bbcode-output');
const profileUrlInput = document.querySelector('#profile-url');
const loadProfileButton = document.querySelector('#load-profile');
const importMessage = document.querySelector('#import-message');
const previewAvatar = document.querySelector('#preview-avatar');
const avatarFallback = document.querySelector('#avatar-fallback');
const heroAvatar = document.querySelector('#hero-avatar');
const fontEditorModal = document.querySelector('#font-editor-modal');
const fontEditorInput = document.querySelector('#font-editor-input');
const fontEditorResults = document.querySelector('#font-editor-results');
const selectedFontName = document.querySelector('#selected-font-name');
const selectedFontPreview = document.querySelector('#selected-font-preview');
const copySelectedFont = document.querySelector('#copy-selected-font');
const showMoreFonts = document.querySelector('#show-more-fonts');
const fullProfileModal = document.querySelector('#full-profile-modal');
const fullProfileName = document.querySelector('#full-profile-name');
const fullProfileRealname = document.querySelector('#full-profile-realname');
const fullLevelText = document.querySelector('#full-level-text');
const editProfileBtn = document.querySelector('#edit-profile-btn');
const railStatusLabel = document.querySelector('#rail-status-label');
const railStatusSub = document.querySelector('#rail-status-sub');
const railBadgesCount = document.querySelector('#rail-badges-count');
const badgeRow = document.querySelector('#badge-row');
const railGamesCount = document.querySelector('#rail-games-count');
const railLinks = document.querySelector('#rail-links');
const editRealnameInput = document.querySelector('#edit-realname');
const fullProfileCountry = document.querySelector('#full-profile-country');
const fullProfileLevel = document.querySelector('#full-profile-level');
const fullProfileSummary = document.querySelector('#full-profile-summary');
const fullProfileAvatar = document.querySelector('#full-profile-avatar');
const fullAvatarFallback = document.querySelector('#full-avatar-fallback');
const commentInput = document.querySelector('#comment-input');
const addCommentButton = document.querySelector('#add-comment');
const fullComments = document.querySelector('#full-comments');
const gameGrid = document.querySelector('#game-grid');
const gamesCount = document.querySelector('#games-count');
const showcaseGrid = document.querySelector('#showcase-grid');
const showcaseCount = document.querySelector('#showcase-count');
const showcaseAdd = document.querySelector('#showcase-add');
const showcaseNameInput = document.querySelector('#showcase-name');
const showcaseHoursInput = document.querySelector('#showcase-hours');
const showcaseLogoInput = document.querySelector('#showcase-logo');
const commentsCount = document.querySelector('#comments-count');
const fullProfileStatus = document.querySelector('#full-profile-status');
const fullProfileStatusText = document.querySelector('#full-profile-status-text');
const fullProfileMemberSince = document.querySelector('#full-profile-member-since');
const fullProfileLocation = document.querySelector('#full-profile-location');
const fullProfileBackground = document.querySelector('#full-profile-background');
const fullAvatarFrame = document.querySelector('#full-avatar-frame');
const toggleProfileEdit = document.querySelector('#toggle-profile-edit');
const profileEditor = document.querySelector('#profile-editor');
const resetProfileButton = document.querySelector('#reset-profile');
const addFriendButton = document.querySelector('#add-friend-btn');
const messageButton = document.querySelector('#message-btn');
const editNameInput = document.querySelector('#edit-name');
const editLevelInput = document.querySelector('#edit-level');
const editStatusSelect = document.querySelector('#edit-status');
const editLocationInput = document.querySelector('#edit-location');
const editSinceInput = document.querySelector('#edit-since');
const editAvatarInput = document.querySelector('#edit-avatar');
const editFrameInput = document.querySelector('#edit-frame');
const editBgImageInput = document.querySelector('#edit-bg-image');
const editBgVideoInput = document.querySelector('#edit-bg-video');
const statFonts = document.querySelector('#stat-fonts');
const statLines = document.querySelector('#stat-lines');
const statBios = document.querySelector('#stat-bios');
const linesCount = document.querySelector('#lines-count');
const typeLines = [...document.querySelectorAll('.type-line')];
const blankSpace = '⠀';
const previewFamilies = ['bebas', 'serif', 'fira', 'plex', 'josefin', 'orbitron', 'oswald', 'marker', 'pixel', 'space', 'unbounded', 'terminal'];
let renderFrame = 0;
let showAllEditorFonts = false;
let selectedFont = null;

const translations = {
  en: {
    fontTitle: 'Font generator', fontSubtitle: 'Type something. See it come alive.', openEditor: 'Open Font Editor', fullView: 'Full Profile View',
    linesTitle: 'ASCII Lines', linesSubtitle: 'Pick a divider for your profile.', bioTitle: 'Bio templates', bioSubtitle: 'Ready-made ideas for your About section.',
    donateBtn: 'Support the author ★', donateNote: 'Support the author with Telegram stars'
  },
  uk: {
    fontTitle: 'Генератор шрифтів', fontSubtitle: 'Введи текст і побач його у різних стилях.', openEditor: 'Відкрити редактор шрифтів', fullView: 'Повний профіль',
    linesTitle: 'ASCII-лінії', linesSubtitle: 'Обери розділювач для профілю.', bioTitle: 'Шаблони біо', bioSubtitle: 'Готові ідеї для розділу «Про себе».',
    donateBtn: 'Підтримати автора ★', donateNote: 'Підтримай автора зірками в Telegram'
  },
  ru: {
    fontTitle: 'Генератор шрифтов', fontSubtitle: 'Введи текст и посмотри разные стили.', openEditor: 'Открыть редактор шрифтов', fullView: 'Полный профиль',
    linesTitle: 'ASCII-линии', linesSubtitle: 'Выбери разделитель для профиля.', bioTitle: 'Шаблоны био', bioSubtitle: 'Готовые идеи для раздела «О себе».',
    donateBtn: 'Поддержать автора ★', donateNote: 'Поддержи автора звёздами в Telegram'
  },
  de: {
    fontTitle: 'Schrift-Generator', fontSubtitle: 'Tippe etwas und sieh es in neuen Stilen.', openEditor: 'Schrift-Editor öffnen', fullView: 'Vollständiges Profil',
    linesTitle: 'ASCII-Linien', linesSubtitle: 'Wähle eine Trennlinie für dein Profil.', bioTitle: 'Bio-Vorlagen', bioSubtitle: 'Fertige Ideen für den „Über mich“-Bereich.',
    donateBtn: 'Autor unterstützen ★', donateNote: 'Unterstütze den Autor mit Telegram-Sternen'
  },
  fr: {
    fontTitle: 'Générateur de polices', fontSubtitle: 'Écrivez du texte et voyez-le se transformer.', openEditor: 'Ouvrir l’éditeur de polices', fullView: 'Profil complet',
    linesTitle: 'Lignes ASCII', linesSubtitle: 'Choisissez un séparateur pour votre profil.', bioTitle: 'Modèles de bio', bioSubtitle: 'Idées prêtes pour votre section « À propos ».',
    donateBtn: 'Soutenir l’auteur ★', donateNote: 'Soutenez l’auteur avec des étoiles Telegram'
  },
  es: {
    fontTitle: 'Generador de fuentes', fontSubtitle: 'Escribe algo y vélo cobrar vida.', openEditor: 'Abrir editor de fuentes', fullView: 'Perfil completo',
    linesTitle: 'Líneas ASCII', linesSubtitle: 'Elige un separador para tu perfil.', bioTitle: 'Plantillas de bio', bioSubtitle: 'Ideas listas para tu sección «Sobre mí».',
    donateBtn: 'Apoyar al autor ★', donateNote: 'Apoya al autor con estrellas de Telegram'
  },
  pl: {
    fontTitle: 'Generator czcionek', fontSubtitle: 'Wpisz tekst i zobacz go w nowych stylach.', openEditor: 'Otwórz edytor czcionek', fullView: 'Pełny profil',
    linesTitle: 'Linie ASCII', linesSubtitle: 'Wybierz separator do profilu.', bioTitle: 'Szablony bio', bioSubtitle: 'Gotowe pomysły na sekcję „O mnie”.',
    donateBtn: 'Wesprzyj autora ★', donateNote: 'Wesprzyj autora gwiazdkami Telegrama'
  }
};

function rangeMap(source, baseCode, exceptions = {}) {
  return Object.fromEntries([...source].map((character, index) => [character, exceptions[character] || String.fromCodePoint(baseCode + index)]));
}

const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER = 'abcdefghijklmnopqrstuvwxyz';
const DIGITS = '0123456789';

const boldMap = makeMap(UPPER + LOWER + DIGITS, '𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟟𝟠𝟡');
const gothicMap = makeMap(UPPER + LOWER, '𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷');
const cursiveMap = makeMap(UPPER + LOWER, '𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏');
const smallCapsMap = makeMap(LOWER, 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ');
const fullwidthMap = makeMap(UPPER + LOWER + DIGITS, 'ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ０１２３４５６７８９');
const gothicHeavyMap = makeMap(UPPER + LOWER, '𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟');
const sansMap = { ...rangeMap(UPPER, 0x1d5a0), ...rangeMap(LOWER, 0x1d5ba) };
const sansItalicMap = { ...rangeMap(UPPER, 0x1d608), ...rangeMap(LOWER, 0x1d622) };
const sansBoldItalicMap = { ...rangeMap(UPPER, 0x1d63c), ...rangeMap(LOWER, 0x1d656) };
const monoMap = { ...rangeMap(UPPER, 0x1d670), ...rangeMap(LOWER, 0x1d68a), ...rangeMap(DIGITS, 0x1d7f6) };
const doubleStruckMap = {
  ...rangeMap(UPPER, 0x1d538, { C: '\u2102', H: '\u210d', N: '\u2115', P: '\u2119', Q: '\u211a', R: '\u211d', Z: '\u2124' }),
  ...rangeMap(LOWER, 0x1d552),
  ...rangeMap(DIGITS, 0x1d7d8)
};
const circledCapsMap = rangeMap(UPPER, 0x24b6);
const circledLowerMap = rangeMap(LOWER, 0x24d0);
const regionalMap = { ...rangeMap(UPPER, 0x1f1e6), ...rangeMap(LOWER, 0x1f1e6) };
const squaredMap = rangeMap(UPPER, 0x1f130);
const upsideDownMap = {
  a: 'ɐ', b: 'q', c: 'ɔ', d: 'p', e: 'ǝ', f: 'ɟ', g: 'ƃ', h: 'ɥ', i: 'ᴉ', j: 'ɾ', k: 'ʞ', l: 'l', m: 'ɯ', n: 'u',
  o: 'o', p: 'd', q: 'b', r: 'ɹ', s: 's', t: 'ʇ', u: 'n', v: 'ʌ', w: 'ʍ', x: 'x', y: 'ʎ', z: 'z',
  A: '∀', C: 'Ɔ', E: 'Ǝ', H: 'H', I: 'I', M: 'W', N: 'N', O: 'O', S: 'S', T: 'T', X: 'X', Y: '⅄',
  '0': '0', '1': 'Ɩ', '2': 'ᄅ', '3': 'Ɛ', '4': 'ㄣ', '6': '9', '7': 'ㄥ', '9': '6',
  '.': '˙', ',': "'", '!': '¡', '?': '¿', '(': ')', ')': '('
};

const fonts = [
  { name: 'Bold', transform: text => mapText(text, boldMap) },
  { name: 'Sans Italic', transform: text => mapText(text, sansItalicMap) },
  { name: 'Sans Bold Italic', transform: text => mapText(text, sansBoldItalicMap) },
  { name: 'Clean Sans', transform: text => mapText(text, sansMap) },
  { name: 'Monospace', transform: text => mapText(text, monoMap) },
  { name: 'Double Struck', transform: text => mapText(text, doubleStruckMap) },
  { name: 'Gothic', transform: text => mapText(text, gothicMap) },
  { name: 'Gothic Heavy', transform: text => mapText(text, gothicHeavyMap) },
  { name: 'Cursive', transform: text => mapText(text, cursiveMap) },
  { name: 'Small caps', transform: text => mapText(text, smallCapsMap) },
  { name: 'Circle', transform: text => circleText(text) },
  { name: 'Fullwidth', transform: text => mapText(text, fullwidthMap) },
  { name: 'Upside Down', transform: text => mapText(text, upsideDownMap) },
  { name: 'Flag Letters', transform: text => mapText(text, regionalMap) },
  { name: 'Squared', transform: text => mapText(text, squaredMap) },
  { name: 'Underline', transform: text => markText(text, '\u0332') },
  { name: 'Strikethrough', transform: text => markText(text, '\u0336') },
  { name: 'Overline', transform: text => markText(text, '\u0305') },
  { name: 'Dotted', transform: text => markText(text, '\u0307') },
  { name: 'Spaced', transform: text => spacedText(text, 1) },
  { name: 'Extra Spaced', transform: text => spacedText(text, 2) },
  { name: 'Alternating', transform: text => [...text].map((character, index) => (index % 2 ? character.toUpperCase() : character.toLowerCase())).join('') },
  { name: 'Glitch / Zalgo', transform: text => zalgoText(text) }
];

const effectMarks = ['\u0332', '\u0336', '\u0305', '\u0307', '\u0308', '\u030a', '\u0303', '\u0323', '\u0324', '\u0325', '\u0328', '\u034e', '\u0353', '\u0359', '\u035a', '\u035b', '\u0362', '\u20f0', '\u0489', '\u0334'];
const effectWrappers = [
  ['「 ', ' 」'], ['『 ', ' 』'], ['【 ', ' 】'], ['〖 ', ' 〗'], ['《 ', ' 》'], ['〈 ', ' 〉'],
  ['〔 ', ' 〕'], ['〘 ', ' 〙'], ['〚 ', ' 〛'], ['⟦ ', ' ⟧'], ['⟨ ', ' ⟩'], ['⟪ ', ' ⟫'],
  ['╭─ ', ' ─╮'], ['╰─ ', ' ─╯'], ['╔═ ', ' ═╗'], ['╚═ ', ' ═╝'], ['┌─ ', ' ─┐'],
  ['└─ ', ' ─┘'], ['┏━ ', ' ━┓'], ['┗━ ', ' ━┛'], ['✦ ', ' ✦'], ['✧ ', ' ✧'], ['★ ', ' ★'],
  ['☆ ', ' ☆'], ['◆ ', ' ◆'], ['◇ ', ' ◇'], ['❖ ', ' ❖'], ['✪ ', ' ✪'], ['☾ ', ' ☽'],
  ['☼ ', ' ☼'], ['☁ ', ' ☁'], ['⚡ ', ' ⚡'], ['☠ ', ' ☠'], ['♠ ', ' ♠'], ['♣ ', ' ♣'],
  ['♥ ', ' ♥'], ['♦ ', ' ♦'], ['➤ ', ' ◀'], ['➜ ', ' ◀'], ['➳ ', ' ◀'], ['» ', ' «'],
  ['› ', ' ‹'], ['// ', ' //'], ['>> ', ' <<'], [':: ', ' ::'], ['++ ', ' ++'], ['## ', ' ##'],
  ['[ ', ' ]'], ['( ', ' )'], ['{ ', ' }'], ['< ', ' >'], ['= ', ' ='], ['░▒▓ ', ' ▓▒░'],
  ['▓▒░ ', ' ░▒▓'], ['█ ', ' █'], ['▌ ', ' ▐'], ['• ', ' •'], ['⟡ ', ' ⟡'], ['⊹ ', ' ⊹'],
  ['⌁ ', ' ⌁'], ['※ ', ' ※']
];

function markText(text, mark, double = false) { return [...text].map(character => /\s/.test(character) ? character : `${character}${mark}${double ? mark : ''}`).join(''); }
function spacedText(text, amount) { return [...text].join(' '.repeat(amount)); }
function reverseText(text) { return [...text].reverse().join(''); }
function makeEffect(base, index) {
  return text => {
    const transformed = base.transform(text);
    const mark = effectMarks[index % effectMarks.length];
    const mode = index % 10;
    let output = transformed;
    if (mode === 0) output = markText(transformed, mark);
    if (mode === 1) output = markText(transformed, mark, true);
    if (mode === 2) output = spacedText(transformed, 1);
    if (mode === 3) output = spacedText(transformed, 2);
    if (mode === 4) output = reverseText(transformed);
    if (mode === 5) output = `${transformed.toUpperCase()} ${mark}`;
    if (mode === 6) output = `${mark} ${transformed.toLowerCase()} ${mark}`;
    if (mode === 7) output = `·${[...transformed].join('·')}·`;
    if (mode === 8) output = `[${transformed}]`;
    if (mode === 9) output = `${transformed} ${effectWrappers[index][0].trim()}`;
    const [prefix, suffix] = effectWrappers[index];
    return `${prefix}${output}${suffix}`;
  };
}
const effectBases = fonts.slice(0, 5);
effectWrappers.slice(0, 59).forEach((wrapper, index) => {
  effectBases.forEach(base => {
    fonts.push({ name: `${base.name} Effect ${String(index + 1).padStart(2, '0')}`, transform: makeEffect(base, index) });
  });
});
selectedFont = fonts[0];
const quickFonts = fonts.slice(0, 10);

const specialFonts = [
  { name: 'Glitch / Zalgo', transform: text => zalgoText(text) },
  { name: 'Small Caps', transform: text => mapText(text, smallCapsMap) },
  { name: 'Vaporwave', transform: text => mapText(text, fullwidthMap) },
  { name: 'Gothic Heavy', transform: text => mapText(text, gothicHeavyMap) },
  { name: 'Neon Glitch', transform: text => `░▒▓ ${zalgoText(mapText(text, fullwidthMap))} ▓▒░` },
  { name: 'Royal Gothic', transform: text => `♛ ${mapText(text, gothicHeavyMap)} ♛` },
  { name: 'Cyber Mono', transform: text => `>_ ${spacedText(mapText(text, boldMap), 1)} <` },
  { name: 'Arcade Pixel', transform: text => `【${spacedText(text.toUpperCase(), 1)}】` },
  { name: 'Diamond Aura', transform: text => `◇ ◆ ${mapText(text, cursiveMap)} ◆ ◇` },
  { name: 'Void Mirror', transform: text => `☾ ${reverseText(mapText(text, gothicMap))} ☽` },
  { name: 'Double Strike', transform: text => markText(mapText(text, boldMap), '\u0336', true) },
  { name: 'Crystal Dots', transform: text => markText(mapText(text, cursiveMap), '\u0308') },
  { name: 'Inferno', transform: text => `༺ ${text.toUpperCase()} ༻` },
  { name: 'Hologram', transform: text => `⟦ ${mapText(text, fullwidthMap)} ⟧` },
  { name: 'Astral', transform: text => `✦ ${markText(text, '\u030a')} ✦` },
  { name: 'Dark Matter', transform: text => `█ ${markText(mapText(text, gothicHeavyMap), '\u034e')} █` },
  { name: 'Royal Script', transform: text => `♚ ${mapText(text, cursiveMap)} ♚` },
  { name: 'Glacier', transform: text => `❄ ${spacedText(mapText(text, boldMap), 2)} ❄` },
  { name: 'Toxic Green', transform: text => `☣ ${markText(text, '\u0334')} ☣` },
  { name: 'Boss Title', transform: text => `╔═ ${text.toUpperCase()} ═╗` },
  { name: 'Ethereal', transform: text => `༄ ${mapText(text, cursiveMap)} ༄` },
  { name: 'War Banner', transform: text => `⚔ ${mapText(text, gothicHeavyMap)} ⚔` },
  { name: 'Starfall', transform: text => `⋆｡°✩ ${markText(text, '\u0307')} ✩°｡⋆` },
  { name: 'Legendary', transform: text => `★彡 ${mapText(text, boldMap)} 彡★` }
];

function makeMap(source, target) {
  return Object.fromEntries([...source].map((character, index) => [character, [...target][index] || character]));
}
function mapText(text, map) { return [...text].map(character => map[character] || character).join(''); }
function circleText(text) {
  return [...text].map(character => {
    const code = character.charCodeAt(0);
    if (code >= 65 && code <= 90) return String.fromCodePoint(0x24b6 + code - 65);
    if (code >= 97 && code <= 122) return String.fromCodePoint(0x24d0 + code - 97);
    if (code >= 49 && code <= 57) return String.fromCodePoint(0x2460 + code - 49);
    if (character === '0') return '⓪';
    return character === ' ' ? '  ' : character;
  }).join('');
}
function zalgoText(text) { const marks = ['\u0336', '\u0337', '\u0338', '\u035f', '\u035f']; return [...text].map((character, index) => `${character}${marks[index % marks.length]}`).join(''); }

const dividerSymbols = ['━', '─', '═', '╌', '┄', '┈'];
const dividerCenters = ['◦ ❖ ◦', '⋆⋅☆⋅⋆', '✧ ･ﾟ✧', '★ PROFILE ★', '૦ ✦ ૦', ':: PLAYER ::', '❖ STATUS ❖', '◇ ONLINE ◇', '✦ LEVEL UP ✦', '• • •'];
const dividers = dividerCenters.flatMap(center => dividerSymbols.map(symbol => `${symbol.repeat(5)} ${center} ${symbol.repeat(5)}`));
const vipDividers = ['╔══════════ ✦ PROFILE ✦ ══════════╗\n║  PLAYER // ONLINE // LEVEL 12  ║\n╚═════════════════════════════════╝', '╭━━━━━━━ ⋆｡°✩°｡⋆ ━━━━━━━╮\n      WELCOME TO MY PROFILE\n╰━━━━━━━ ⋆｡°✩°｡⋆ ━━━━━━━╯', '░▒▓█ SYSTEM PROFILE █▓▒░\n[ STATUS: ONLINE ] [ MOOD: GAMING ]\n░▒▓█ CONNECTION STABLE █▓▒░', '┏━━━━━━━━━━━━━━━━━━━━━━━━━━┓\n┃  ✦ 𝙎𝙏𝙀𝘼𝙈 𝙋𝙇𝘼𝙔𝙀𝙍  ✦  ┃\n┗━━━━━━━━━━━━━━━━━━━━━━━━━━┛', '⟦ ◇ ────── PROFILE ────── ◇ ⟧\n       [ ENTER THE VOID ]\n⟦ ◇ ───────────────────── ◇ ⟧'];

const bios = [
  { title: 'Minimal', type: 'clean / quiet', text: '╭ 𝙬𝙚𝙡𝙘𝙤𝙢𝙚\n│ less noise, more games\n│ collecting moments\n╰──────────────\n\n✦ currently playing: [ game ]' },
  { title: 'Gamer', type: 'level up / repeat', text: '╔═══ PLAYER PROFILE ═══╗\n  🎮 grinding since 2012\n  🏆 achievements > sleep\n  ⚡ here for the good games\n╚═══════════════════════╝\n\nGG WP' },
  { title: 'Cyberpunk', type: 'neon / glitch', text: '>> SYSTEM ONLINE\n>> USER: [ UNKNOWN ]\n>> LOCATION: NIGHT CITY\n\n// reality is just another server\n// stay curious. stay dangerous.\n\n[ CONNECTION: STABLE ]' },
  { title: 'Anime', type: 'kawaii / player', text: '✦ こんにちは, player! ✦\n\n♡ anime, games & ramen\n☆ main character energy\n♡ always chasing the next quest\n\nまたね!' },
  { title: 'Retro', type: 'arcade / 8-bit', text: '╔══ INSERT COIN ══╗\n  PLAYER 1 READY\n  HIGH SCORE: ???\n╚════════════════╝\n\nPRESS START TO PLAY' },
  { title: 'RPG', type: 'quest / adventure', text: '╭─── CHARACTER SHEET ───╮\n│ CLASS: wanderer\n│ LEVEL: still learning\n│ QUEST: make good memories\n╰────────────────────────╯\n\nparty up?' },
  { title: 'Cozy', type: 'offline / cozy', text: '⋆｡°✩\nquiet player, loud thoughts\ncoffee • rain • story games\n\ncurrently somewhere peaceful\n⋆｡°✩' },
  { title: 'PvP', type: 'ranked / focused', text: '[ RANKED QUEUE ]\n\nno excuses. just practice.\nlearn from every loss.\nrespect the opponent.\n\nGGs only.' },
  { title: 'Music', type: 'beats / headphones', text: '♫ now playing: life\n\nheadphones on\nworld out\n\n🎧 games sound better at midnight' },
  { title: 'Explorer', type: 'open world / curious', text: '╭─ MAP STATUS ─╮\n│ 37% explored\n│ 12 secrets found\n│ countless roads left\n╰───────────────╯\n\nkeep wandering.' },
  { title: 'Team Player', type: 'co-op / friends', text: '╔══ PARTY ══╗\n  good vibes\n  bad aim\n  great stories\n╚═══════════╝\n\ninvite sent.' },
  { title: 'Speedrunner', type: 'fast / precise', text: '>> START\n>> OPTIMAL ROUTE\n>> NO RESET\n\nframes matter.\nseconds matter.\nfun matters more.' },
  { title: 'Vintage', type: 'classic / timeless', text: '✦ EST. 2012 ✦\n\nold games, new memories\nclassic taste\nmodern hardware\n\npress play.' },
  { title: 'Hardcore', type: 'souls / challenge', text: 'YOU DIED.\n\ntry again.\nlearn the pattern.\nkeep the flame.\n\nno easy mode required.' },
  { title: 'Memes', type: 'chaos / funny', text: '╭ brain off ╮\n│ inventory full\n│ sleep schedule missing\n│ one more game\n╰─────────────╯\n\nthis is fine.' },
  { title: 'Sci-Fi', type: 'future / signal', text: '[ SIGNAL RECEIVED ]\n\nhello from the other side\nof the loading screen.\n\nexplore beyond the stars.\n[ END TRANSMISSION ]' },
  { title: 'Speed', type: 'racing / boost', text: '╱╲╱╲╱╲╱╲╱╲\n  FULL THROTTLE\n  NO BRAKES\n╲╱╲╱╲╱╲╱╲╱\n\nsee you at the finish line.' },
  { title: 'Fantasy', type: 'magic / lore', text: '✧ THE QUEST BEGINS ✧\n\nseeker of hidden worlds\nkeeper of old stories\nfriend of unlikely heroes\n\nroll for initiative.' },
  { title: 'Ghost', type: 'stealth / nocturne', text: '... connection quiet\n... footsteps unheard\n... profile found\n\nmove in silence.\nleave only good memories.' },
  { title: 'Pixel', type: 'indie / creative', text: '╭── PIXEL WORLD ──╮\n│ tiny team\n│ huge imagination\n│ every frame matters\n╰──────────────────╯\n\nmade with care.' }
];

const CUSTOM_PROFILE_KEY = 'steamCustomProfile';
const defaultCustomProfile = { name: '', realName: '', level: '', status: '', location: '', memberSince: '', avatar: '', frame: '', bgImage: '', bgVideo: '', showcase: [], comments: [] };
const coverPalette = [
  'linear-gradient(135deg, #66c0f4, #1b4b6e)',
  'linear-gradient(135deg, #b08351, #3c2a1c)',
  'linear-gradient(135deg, #8f5fb0, #2d1f42)',
  'linear-gradient(135deg, #7fcf9a, #1f4232)',
  'linear-gradient(135deg, #cf6a78, #421f26)',
  'linear-gradient(135deg, #cbb69b, #4a4030)'
];

function loadCustomProfile() {
  try {
    const stored = JSON.parse(localStorage.getItem(CUSTOM_PROFILE_KEY) || '{}');
    const merged = { ...defaultCustomProfile, ...stored };
    if (!Array.isArray(merged.showcase)) merged.showcase = [];
    if (!Array.isArray(merged.comments)) merged.comments = [];
    return merged;
  } catch {
    return { ...defaultCustomProfile, showcase: [], comments: [] };
  }
}
function saveCustomProfile() { localStorage.setItem(CUSTOM_PROFILE_KEY, JSON.stringify(customProfile)); }

let customProfile = loadCustomProfile();
if (!localStorage.getItem(CUSTOM_PROFILE_KEY)) {
  customProfile.showcase = [
    { name: 'Counter-Strike 2', hours: '412', logo: '' },
    { name: 'Dota 2', hours: '980', logo: '' },
    { name: 'Hollow Knight', hours: '67', logo: '' }
  ];
  customProfile.comments = [
    { author: 'NightOwl', text: 'Clean profile! That showcase looks great 🔥', time: '2 days ago' },
    { author: 'PixelHunter', text: 'Added you, lets queue later!', time: '5 hours ago' }
  ];
  saveCustomProfile();
}

let loadedProfile = { steamName: '', realName: '', flagCode: '', avatarUrl: '', avatarFrameUrl: '', backgroundImage: '', backgroundVideo: '', onlineState: 'offline', stateMessage: 'Offline', memberSince: '', location: '', summary: '', level: '', levelClass: '', games: [], badges: [], itemLinks: [], awards: 0, recentHours: '', pageUrl: '' };

function flagEmojiFromCode(code) {
  const cc = String(code || '').trim().toUpperCase();
  if (!/^[A-Z]{2}$/.test(cc)) return '';
  return String.fromCodePoint(...[...cc].map(c => 0x1F1E6 + c.charCodeAt(0) - 65));
}

function initialsFor(name) {
  const parts = String(name || '').trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return 'NO';
  return parts.map(part => part[0]).join('').slice(0, 2).toUpperCase();
}
function coverClassFor(name) {
  const lower = String(name).toLowerCase();
  if (/counter|csgo|cs:?2|cs:go/.test(lower)) return 'cs-cover';
  if (/dota/.test(lower)) return 'dota-cover';
  if (/dead by daylight|dbd/.test(lower)) return 'dbd-cover';
  return 'cover-steam';
}

function renderFonts() {
  const value = textInput.value;
  characterCount.textContent = `${value.length} / 500`;
  const displayValue = value || 'Type your summary';
  previewText.textContent = displayValue;
  const summaryText = value || (loadedProfile.steamName ? 'No profile summary provided.' : 'Load a public Steam profile to view its real summary.');
  if (document.activeElement !== fullProfileSummary) fullProfileSummary.textContent = summaryText;
  fontResults.innerHTML = quickFonts.map((font, index) => `<article class="font-result preview-font-${previewFamilies[index % previewFamilies.length]}"><div><div class="font-result-meta">${escapeHtml(font.name)}</div><div class="font-result-text">${escapeHtml(font.transform(displayValue))}</div></div><button type="button" data-copy="${escapeAttribute(font.transform(displayValue))}">Copy</button></article>`).join('');
  vipFontGrid.innerHTML = specialFonts.map(font => `<article class="font-result"><div><div class="font-result-meta">SPECIAL · ${escapeHtml(font.name)}</div><div class="font-result-text">${escapeHtml(font.transform(displayValue))}</div></div><button type="button" data-copy="${escapeAttribute(font.transform(displayValue))}">Copy</button></article>`).join('');
  if (!fontEditorModal.hidden) renderFontEditor();
}
function renderDividers() {
  dividerGrid.innerHTML = dividers.map(line => `<article class="divider-card"><span class="divider-text">${escapeHtml(line)}</span><button class="copy-button" type="button" data-copy="${escapeAttribute(line)}">Copy</button></article>`).join('');
  vipDividerGrid.innerHTML = vipDividers.map(line => `<article class="divider-card"><span class="divider-text">${escapeHtml(line)}</span><button class="copy-button" type="button" data-copy="${escapeAttribute(line)}">Copy</button></article>`).join('');
}
function renderBios() {
  bioGrid.innerHTML = bios.map(bio => `<article class="bio-card"><h3>${escapeHtml(bio.title)}</h3><span class="bio-type">${escapeHtml(bio.type)}</span><pre>${escapeHtml(bio.text)}</pre><button class="copy-button" type="button" data-copy="${escapeAttribute(bio.text)}">Copy bio</button></article>`).join('');
}
function renderFontEditor() {
  if (!fontEditorResults) return;
  const value = fontEditorInput.value || textInput.value || 'Type your summary';
  const visibleFonts = showAllEditorFonts ? fonts : quickFonts;
  fontEditorResults.innerHTML = visibleFonts.map(font => {
    const fontIndex = fonts.indexOf(font);
    const selectedClass = selectedFont && selectedFont.name === font.name ? ' is-selected' : '';
    return `<article class="font-result preview-font-${previewFamilies[fontIndex % previewFamilies.length]}${selectedClass}" data-font-index="${fontIndex}"><div><div class="font-result-meta">${escapeHtml(font.name)}</div><div class="font-result-text">${escapeHtml(font.transform(value))}</div></div><button type="button" data-copy="${escapeAttribute(font.transform(value))}">Copy</button></article>`;
  }).join('');
  const activeFont = selectedFont || fonts[0];
  selectedFontName.textContent = activeFont.name;
  selectedFontPreview.textContent = activeFont.transform(value);
  showMoreFonts.textContent = showAllEditorFonts ? 'Show fewer fonts' : `Show more fonts (${fonts.length})`;
}
function updatePreviewUsername() {
  const name = usernameInput.value.trim() || customProfile.name.trim() || 'Profile not loaded';
  previewUsername.textContent = name;
  const fallbackText = name === 'Profile not loaded' ? 'NO AVATAR' : initialsFor(name);
  avatarFallback.textContent = fallbackText;
  fullAvatarFallback.textContent = fallbackText;
}
function setHeroAvatar(url) {
  heroAvatar.parentElement.classList.remove('has-avatar');
  if (!url) { heroAvatar.removeAttribute('src'); return; }
  heroAvatar.onload = () => heroAvatar.parentElement.classList.add('has-avatar');
  heroAvatar.onerror = () => { heroAvatar.removeAttribute('src'); heroAvatar.parentElement.classList.remove('has-avatar'); };
  heroAvatar.src = url;
}
function assignAvatar(imageNode, fallbackNode, url) {
  imageNode.hidden = true;
  imageNode.removeAttribute('src');
  fallbackNode.hidden = false;
  if (!url) return;
  imageNode.onload = () => { imageNode.hidden = false; fallbackNode.hidden = true; };
  imageNode.onerror = () => { imageNode.hidden = true; fallbackNode.hidden = false; };
  imageNode.src = url;
}
function setProfileAvatar(url) {
  assignAvatar(fullProfileAvatar, fullAvatarFallback, url);
  assignAvatar(previewAvatar, avatarFallback, url);
  setHeroAvatar(url);
}
function escapeHtml(value) { return String(value).replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character])); }
function escapeAttribute(value) { return String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#039;').replace(/\n/g, '&#10;'); }
function setLanguage(language) {
  const selectedLang = translations[language] ? language : 'en';
  const dictionary = translations[selectedLang];
  document.documentElement.lang = selectedLang;
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const value = dictionary[element.dataset.i18n] || translations.en[element.dataset.i18n];
    if (value) element.textContent = value;
  });
  localStorage.setItem('steamLanguage', selectedLang);
}
function statusLabel(onlineState, stateMessage) {
  const state = `${onlineState} ${stateMessage}`.toLowerCase();
  if (state.includes('in-game') || state.includes('ingame') || state.includes('playing')) return 'In-Game';
  if (state.includes('online')) return 'Online';
  return 'Offline';
}

function renderGames(games) {
  const recent = loadedProfile.recentHours ? ` · ${loadedProfile.recentHours.toUpperCase()}` : '';
  gamesCount.textContent = `${games.length} ${games.length === 1 ? 'GAME' : 'GAMES'}${recent}`;
  if (!games.length) {
    gameGrid.innerHTML = '<p class="empty-profile-state">No recent activity / Private info</p>';
    return;
  }
  gameGrid.innerHTML = games.map(game => {
    const capsule = game.logo
      ? `<img class="activity-capsule" src="${escapeAttribute(game.logo)}" alt="${escapeAttribute(game.name)}" loading="lazy">`
      : `<div class="activity-capsule activity-capsule-fallback ${coverClassFor(game.name)}">${escapeHtml((game.name[0] || '?').toUpperCase())}</div>`;
    const ach = game.achUnlocked && game.achTotal
      ? `<div class="ach-progress"><div class="ach-bar"><div class="ach-fill" style="width:${Math.min(100, Math.round((Number(game.achUnlocked) / Math.max(1, Number(game.achTotal))) * 100))}%"></div></div><small>Achievements ${escapeHtml(game.achUnlocked)} of ${escapeHtml(game.achTotal)}</small></div>`
      : '';
    return `<article class="activity-game">${capsule}<div class="activity-info"><strong>${escapeHtml(game.name)}</strong><small>${game.lastPlayed ? `Last played ${escapeHtml(game.lastPlayed)}` : 'No recent playtime'}</small></div><div class="activity-meta"><span>${escapeHtml(game.hours)} hrs total</span>${ach}</div></article>`;
  }).join('');
}
function renderShowcase() {
  showcaseCount.textContent = `${customProfile.showcase.length} ${customProfile.showcase.length === 1 ? 'SLOT' : 'SLOTS'}`;
  if (!customProfile.showcase.length) {
    showcaseGrid.innerHTML = '<p class="empty-profile-state">No showcase items yet — press Edit Profile to add some.</p>';
    return;
  }
  showcaseGrid.innerHTML = customProfile.showcase.map((item, index) => `<article class="showcase-card">
    <button class="showcase-remove" type="button" data-remove-showcase="${index}" aria-label="Remove item">×</button>
    <div class="showcase-cover" style="background:${coverPalette[index % coverPalette.length]}">${item.logo ? `<img src="${escapeAttribute(item.logo)}" alt="" loading="lazy">` : `<span>${escapeHtml(String(item.name || '?')[0].toUpperCase())}</span>`}</div>
    <strong>${escapeHtml(item.name)}</strong>
    <small>${escapeHtml(item.hours || '0')} hrs on record</small>
  </article>`).join('');
}
function renderComments() {
  commentsCount.textContent = String(customProfile.comments.length);
  if (!customProfile.comments.length) {
    fullComments.innerHTML = '<p class="empty-profile-state">No comments added.</p>';
    return;
  }
  fullComments.innerHTML = customProfile.comments.map((comment, index) => `<article class="comment-item">
    <div class="comment-avatar">${escapeHtml(initialsFor(comment.author))}</div>
    <p><b>${escapeHtml(comment.author)}</b><br>${escapeHtml(comment.text)}<small>${escapeHtml(comment.time)}</small>
    <button class="comment-remove" type="button" data-remove-comment="${index}" aria-label="Delete comment">×</button></p>
  </article>`).join('');
}

function syncEditorFields(resolved) {
  const fields = [
    [editNameInput, resolved.name], [editRealnameInput, resolved.realName], [editLevelInput, resolved.level], [editLocationInput, resolved.location],
    [editSinceInput, resolved.memberSince], [editAvatarInput, resolved.avatarUrl], [editFrameInput, resolved.frameUrl],
    [editBgImageInput, resolved.bgImage], [editBgVideoInput, resolved.bgVideo]
  ];
  fields.forEach(([input, value]) => {
    if (document.activeElement !== input && input.value !== value) input.value = value;
  });
  if (document.activeElement !== editStatusSelect) editStatusSelect.value = customProfile.status;
}
function renderProfileData(profile) {
  loadedProfile = profile;
  const custom = customProfile;
  const resolved = {
    name: custom.name || profile.steamName || '',
    realName: custom.realName || profile.realName || '',
    status: custom.status || statusLabel(profile.onlineState, profile.stateMessage),
    location: custom.location || profile.location || '',
    memberSince: custom.memberSince || profile.memberSince || '',
    level: custom.level || profile.level || '',
    avatarUrl: custom.avatar || profile.avatarUrl || '',
    frameUrl: custom.frame || profile.avatarFrameUrl || '',
    bgImage: custom.bgImage || profile.backgroundImage || '',
    bgVideo: custom.bgVideo || profile.backgroundVideo || ''
  };
  const flag = flagEmojiFromCode(profile.flagCode);
  const realLine = [resolved.realName, flag, resolved.location].filter(Boolean).join(' ');
  fullProfileRealname.textContent = realLine || 'No real name provided';
  fullProfileName.textContent = resolved.name || 'Profile not loaded';
  const stateExtra = profile.stateMessage && profile.stateMessage !== resolved.status ? ` · ${profile.stateMessage}` : '';
  fullProfileCountry.textContent = `${resolved.status}${stateExtra}`;
  fullProfileLevel.textContent = resolved.level || '—';
  fullLevelText.textContent = resolved.level ? `Level ${resolved.level}` : 'Level —';
  fullProfileStatus.classList.remove('status-in-game', 'status-online', 'status-offline');
  fullProfileStatus.classList.add(`status-${resolved.status === 'In-Game' ? 'in-game' : resolved.status.toLowerCase()}`);
  fullProfileLevel.parentElement.className = `level-badge friendPlayerLevel ${profile.levelClass || ''}`.trim();
  setProfileAvatar(resolved.avatarUrl);
  if (resolved.frameUrl) {
    fullAvatarFrame.hidden = false;
    fullAvatarFrame.querySelector('img').src = resolved.frameUrl;
  } else fullAvatarFrame.hidden = true;
  if (resolved.bgVideo) {
    fullProfileBackground.classList.add('has-real-background');
    fullProfileBackground.style.backgroundImage = resolved.bgImage ? `url("${escapeAttribute(resolved.bgImage)}")` : '';
    fullProfileBackground.innerHTML = `<video autoplay muted loop playsinline><source src="${escapeAttribute(resolved.bgVideo)}" type="video/mp4"></video>`;
  } else if (resolved.bgImage) {
    fullProfileBackground.classList.add('has-real-background');
    fullProfileBackground.style.backgroundImage = `url("${escapeAttribute(resolved.bgImage)}")`;
    fullProfileBackground.innerHTML = '';
  } else {
    fullProfileBackground.classList.remove('has-real-background');
    fullProfileBackground.style.backgroundImage = '';
    fullProfileBackground.innerHTML = '';
  }
  renderGames(profile.games);
  renderRail(profile, resolved);
  if (resolved.name) {
    usernameInput.value = resolved.name.slice(0, 24);
  }
  updatePreviewUsername();
  syncEditorFields(resolved);
}

function renderRail(profile, resolved) {
  const statusKey = resolved.status === 'In-Game' ? 'ingame' : resolved.status.toLowerCase();
  railStatusLabel.textContent = resolved.status === 'Offline' ? 'Offline' : `Currently ${resolved.status}`;
  railStatusLabel.className = `rail-${statusKey}`;
  const gameName = resolved.status === 'In-Game' && profile.stateMessage && profile.stateMessage !== resolved.status
    ? profile.stateMessage
    : '';
  railStatusSub.textContent = gameName || resolved.location || 'No additional info';

  const badges = profile.badges || [];
  const badgeLink = (profile.itemLinks || []).find(l => /badge/i.test(l.label));
  const badgeTotal = (badgeLink && badgeLink.count) || badges.length;
  railBadgesCount.textContent = String(badgeTotal || 0);
  badgeRow.innerHTML = badges.length
    ? badges.map(b => b.img
      ? `<img class="badge-icon" src="${escapeAttribute(b.img)}" alt="${escapeAttribute(b.name)}" title="${escapeHtml(b.name)}" loading="lazy">`
      : `<span class="badge-icon badge-text" title="${escapeHtml(b.name)}">${escapeHtml(initialsFor(b.name))}</span>`).join('')
    : '<p class="empty-profile-state">No badges found</p>';

  const gamesLink = (profile.itemLinks || []).find(l => /game/i.test(l.label));
  const gamesTotal = (gamesLink && gamesLink.count) || (profile.games || []).length;
  railGamesCount.textContent = String(gamesTotal || 0);

  const links = (profile.itemLinks || []).filter(l => l.href);
  if (!links.length && profile.pageUrl) {
    const base = profile.pageUrl.endsWith('/') ? profile.pageUrl : `${profile.pageUrl}/`;
    links.push(
      { label: 'Games', count: String((profile.games || []).length || ''), href: `${base}games/` },
      { label: 'Inventory', count: '', href: `${base}inventory/` },
      { label: 'Screenshots', count: '', href: `${base}screenshots/` },
      { label: 'Videos', count: '', href: `${base}videos/` },
      { label: 'Workshop Items', count: '', href: `${base}myworkshopfiles/` }
    );
  }
  railLinks.innerHTML = links.length
    ? links.map(l => `<a class="rail-link" href="${escapeAttribute(l.href)}" target="_blank" rel="noopener"><span>${escapeHtml(l.label)}</span>${l.count ? `<b>${escapeHtml(l.count)}</b>` : ''}</a>`).join('')
    : '<p class="empty-profile-state">Load a profile to see links</p>';
  if (profile.awards) {
    const awardsNote = document.querySelector('#rail-awards-note');
    if (awardsNote) awardsNote.textContent = `Profile Awards ${profile.awards}`;
  }
}

function openModal(modal) { modal.hidden = false; document.body.classList.add('modal-open'); }
function closeModal(modal) { modal.hidden = true; if (fontEditorModal.hidden && fullProfileModal.hidden) document.body.classList.remove('modal-open'); }
function setImportMessage(message, isError = false) { importMessage.textContent = message; importMessage.classList.toggle('is-error', isError); }
function normalizeSteamTarget(input) {
  const value = input.trim();
  if (!value) throw new Error('Enter a Steam profile URL or nickname.');
  const looksLikeUrl = /^https?:\/\//i.test(value) || /^steamcommunity\.com\//i.test(value);
  const target = looksLikeUrl ? new URL(/^https?:\/\//i.test(value) ? value : `https://${value}`) : new URL(`https://steamcommunity.com/id/${encodeURIComponent(value)}/`);
  const validHost = ['steamcommunity.com', 'www.steamcommunity.com'].includes(target.hostname.toLowerCase());
  const validPath = /^\/(id|profiles)\/[^/]+\/?$/i.test(target.pathname);
  if (target.protocol !== 'https:' || !validHost || !validPath) throw new Error('Use a Steam /id/... or /profiles/... URL, or enter a nickname.');
  target.search = '';
  target.hash = '';
  return target.toString();
}
function cleanSummary(value) {
  const withoutCdata = value.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1').replace(/<br\s*\/?>(\s*)/gi, '\n$1');
  const htmlDocument = new DOMParser().parseFromString(`<body>${withoutCdata}</body>`, 'text/html');
  return (htmlDocument.body.textContent || '').replace(/\r/g, '').trim();
}
function absoluteResource(value, baseUrl) {
  try { return value ? new URL(value, baseUrl).href : ''; } catch { return ''; }
}
function resourceFromElement(element, baseUrl) {
  if (!element) return '';
  const source = element.getAttribute('src') || element.getAttribute('data-src') || element.getAttribute('data-original') || element.getAttribute('srcset')?.split(',')[0]?.trim().split(' ')[0] || element.getAttribute('style')?.match(/url\(["']?([^"')]+)["']?\)/i)?.[1] || '';
  return absoluteResource(source, baseUrl);
}
function parseSteamHtml(htmlString, profileUrl) {
  const page = new DOMParser().parseFromString(htmlString, 'text/html');
  const text = selector => page.querySelector(selector)?.textContent.trim() || '';
  const firstText = selectors => selectors.map(selector => text(selector)).find(Boolean) || '';
  const avatarCandidates = [...page.querySelectorAll('.playerAvatar img, .playerAvatarIcon img')];
  const avatarElement = avatarCandidates.find(image => !/community_assets\/images\/items|avatar_frame/i.test(resourceFromElement(image, profileUrl))) || avatarCandidates[0];
  const avatarFrameContainer = page.querySelector('.avatar_frame, .playerAvatarIcon .avatar_frame');
  const avatarFrame = avatarFrameContainer?.querySelector('img, [src]') || avatarFrameContainer;
  const backgroundSource = page.querySelector('.profile_background_holder video source');
  const backgroundImageElement = page.querySelector('.profile_background_image');
  const profileHeader = page.querySelector('.actual_persona_name');
  const statusClass = profileHeader?.className || '';
  const levelElement = page.querySelector('.friendPlayerLevel');
  const headerRealNameEl = page.querySelector('.header_real_name');
  let realName = '';
  let flagCode = '';
  let headerLocation = '';
  if (headerRealNameEl) {
    const flagImg = headerRealNameEl.querySelector('img');
    if (flagImg) {
      const flagMatch = (flagImg.getAttribute('src') || '').match(/countryflags\/([a-z]{2})\.gif/i);
      if (flagMatch) flagCode = flagMatch[1].toLowerCase();
    }
    const textParts = [...headerRealNameEl.childNodes]
      .filter(node => node.nodeType === 3)
      .map(node => (node.textContent || '').replace(/\s+/g, ' ').trim())
      .filter(Boolean);
    realName = textParts[0] || '';
    headerLocation = textParts.slice(1).join(' ') || '';
  }
  const parseAchievements = (block) => {
    const achEl = block.querySelector('.achievement_progress, .game_info_achievements');
    const achText = ((achEl?.textContent || '') + ' ' + (block.textContent || '')).replace(/\s+/g, ' ');
    const achMatch = achText.match(/(\d+)\s*(?:of|\/)\s*(\d+)(?:\s+\w+){0,3}\s*achiev/i);
    return achMatch ? { unlocked: achMatch[1], total: achMatch[2] } : { unlocked: '', total: '' };
  };
  const recentGames = [...page.querySelectorAll('.recent_game')].map(block => {
    const name = block.querySelector('.game_name a, .game_name, .game_info_cap a, .recent_game_content a')?.textContent.trim() || '';
    const logo = resourceFromElement(block.querySelector('.game_capsule, .recent_game_content img, img'), profileUrl);
    const details = block.querySelector('.game_info_details')?.textContent.replace(/\s+/g, ' ').trim() || '';
    const hoursMatch = details.match(/([\d][\d.,]*)\s*(?:hrs|hours?|год|час)/i);
    const lastMatch = details.match(/last played on (.+?)(?:\s*[·|]\s*|$)/i);
    const ach = parseAchievements(block);
    return { name, logo, hours: hoursMatch ? hoursMatch[1] : '0', lastPlayed: lastMatch ? lastMatch[1].trim() : '', achUnlocked: ach.unlocked, achTotal: ach.total };
  }).filter(game => game.name);
  const rowGames = [...page.querySelectorAll('.game_row')].map(row => ({
    name: row.querySelector('.game_name, .game_name a')?.textContent.trim() || '',
    logo: resourceFromElement(row.querySelector('.gameLogo img, .gameLogo, img'), profileUrl),
    hours: (() => { const d = row.querySelector('.game_info_details, .hours_played, .hoursOnRecord, .hoursPlayed')?.textContent.trim().replace(/\s+/g, ' ') || '0'; const m = d.match(/([\d][\d.,]*)/); return m ? m[1] : '0'; })(),
    lastPlayed: '',
    achUnlocked: '',
    achTotal: ''
  })).filter(game => game.name);
  const games = recentGames.length ? recentGames : rowGames;
  const backgroundStyle = backgroundImageElement?.getAttribute('style') || '';
  const backgroundImage = backgroundStyle.match(/background-image\s*:\s*url\(["']?([^"')]+)["']?\)/i)?.[1] || '';
  const status = statusClass.includes('in-game') ? 'In-Game' : statusClass.includes('online') ? 'Online' : 'Offline';
  const pageText = page.body?.textContent.replace(/\s+/g, ' ').trim() || '';
  const memberSinceMatch = pageText.match(/Member since\s+(.{3,80}?)(?=\s+(?:Location|Currently|View|$))/i);
  const summaryElement = page.querySelector('.profile_summary');
  const badges = [...page.querySelectorAll('.profile_badges .badge_row')].map(row => ({
    name: row.querySelector('.badge_title')?.textContent.replace(/\s+/g, ' ').trim() || 'Badge',
    img: resourceFromElement(row.querySelector('img'), profileUrl)
  })).slice(0, 8);
  const itemLinks = [...page.querySelectorAll('.profile_item_links a')].map(a => {
    const full = (a.textContent || '').replace(/\s+/g, ' ').trim();
    const countMatch = full.match(/([\d,]+)\s*$/);
    const count = countMatch ? countMatch[1] : '';
    const label = countMatch ? full.slice(0, countMatch.index).trim() : full;
    return { label, count, href: absoluteResource(a.getAttribute('href'), profileUrl) };
  }).filter(l => l.label && l.href).slice(0, 8);
  const awards = page.querySelectorAll('.profile_awards img, img.profile_award_icon').length;
  const recentHoursMatch = pageText.match(/([\d.,]+\s*(?:hrs|hours?|hours on record)[^.]*?past 2 weeks)/i);
  const profile = { steamName: text('.actual_persona_name'), realName, flagCode, avatarUrl: resourceFromElement(avatarElement, profileUrl), avatarFrameUrl: resourceFromElement(avatarFrame, profileUrl), backgroundVideo: resourceFromElement(backgroundSource, profileUrl), backgroundImage: absoluteResource(backgroundImage, profileUrl), onlineState: status.toLowerCase(), stateMessage: status, memberSince: memberSinceMatch?.[1]?.trim() || firstText(['.memberSince', '#memberSince', '.profile_in_game_name']), location: headerLocation || firstText(['.header_real_name_title', '.profile_location']), summary: cleanSummary(summaryElement?.innerHTML || ''), level: text('.friendPlayerLevelNum'), levelClass: levelElement?.className || '', games, badges, itemLinks, awards, recentHours: recentHoursMatch ? recentHoursMatch[1].trim() : '', pageUrl: profileUrl };
  if (!profile.steamName && !profile.avatarUrl && !profile.summary && !profile.games.length) throw new Error('Steam HTML profile data is unavailable');
  return profile;
}
function parseSteamXml(xmlString) {
  const documentXml = new DOMParser().parseFromString(xmlString, 'text/xml');
  if (documentXml.querySelector('parsererror')) throw new Error('Invalid XML response');
  const read = tag => documentXml.querySelector(tag)?.textContent.trim() || '';
  const profile = { steamName: read('steamID'), realName: '', flagCode: '', avatarUrl: read('avatarFull'), onlineState: read('onlineState'), stateMessage: read('stateMessage'), memberSince: read('memberSince'), location: read('location'), summary: cleanSummary(read('summary')), badges: [], itemLinks: [], awards: 0, recentHours: '', pageUrl: '', games: [...documentXml.querySelectorAll('mostPlayedGames > game')].map(game => ({ name: game.querySelector('gameName')?.textContent.trim() || '', logo: game.querySelector('gameLogo')?.textContent.trim() || '', hours: game.querySelector('hoursOnRecord')?.textContent.trim() || game.querySelector('hoursPlayed')?.textContent.trim() || '0', lastPlayed: '', achUnlocked: '', achTotal: '' })).filter(game => game.name) };
  if (!profile.steamName && !profile.avatarUrl && !profile.summary && !profile.games.length) throw new Error('Profile data is unavailable or private');
  return profile;
}
function fetchWithTimeout(url, options = {}, timeout = 5000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);
  return fetch(url, { ...options, signal: controller.signal }).finally(() => clearTimeout(timer));
}
async function fetchSteamHtmlThroughProxy(proxy, targetUrl) {
  const proxyUrl = proxy.build(targetUrl);
  const response = await fetchWithTimeout(proxyUrl, { headers: { Accept: 'application/json, text/html, text/plain' } });
  if (!response.ok) throw new Error(`${proxy.name} returned ${response.status}`);
  const htmlString = proxy.format === 'json' ? (await response.json()).contents : await response.text();
  if (typeof htmlString !== 'string' || !htmlString.trim()) throw new Error(`${proxy.name} returned empty data`);
  return parseSteamHtml(htmlString, targetUrl);
}
async function fetchSteamXmlThroughProxy(proxy, targetUrl) {
  const xmlUrl = new URL(targetUrl);
  xmlUrl.search = '?xml=1';
  const proxyUrl = proxy.build(xmlUrl.toString());
  const response = await fetchWithTimeout(proxyUrl, { headers: { Accept: 'application/json, application/xml, text/xml, text/plain' } });
  if (!response.ok) throw new Error(`${proxy.name} XML returned ${response.status}`);
  const xmlString = proxy.format === 'json' ? (await response.json()).contents : await response.text();
  if (typeof xmlString !== 'string' || !xmlString.trim()) throw new Error(`${proxy.name} XML returned empty data`);
  return parseSteamXml(xmlString);
}
const steamProxies = [
  { name: 'Steam Direct', format: 'raw', build: target => target },
  { name: 'AllOrigins', format: 'json', build: target => `https://api.allorigins.win/get?url=${encodeURIComponent(target)}` },
  { name: 'CorsProxy', format: 'raw', build: target => `https://corsproxy.io/?${encodeURIComponent(target)}` },
  { name: 'CodeTabs', format: 'raw', build: target => `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(target)}` }
];
async function loadSteamProfile() {
  let targetUrl;
  try { targetUrl = normalizeSteamTarget(profileUrlInput.value); }
  catch (error) { setImportMessage(error.message, true); return; }
  loadProfileButton.disabled = true;
  localStorage.setItem('steamProfileUrl', targetUrl);
  loadProfileButton.textContent = 'Loading...';
  setImportMessage('Trying Steam profile sources...');
  try {
    let profile;
    for (const proxy of steamProxies) {
      try { profile = await fetchSteamHtmlThroughProxy(proxy, targetUrl); break; }
      catch (error) { console.warn(`${proxy.name} failed`, error); }
    }
    if (!profile) {
      setImportMessage('HTML access is restricted. Trying Steam profile data fallback...');
      for (const proxy of steamProxies) {
        try { profile = await fetchSteamXmlThroughProxy(proxy, targetUrl); break; }
        catch (error) { console.warn(`${proxy.name} XML fallback failed`, error); }
      }
    }
    if (profile && (!profile.avatarUrl || (!profile.summary && !profile.games.length))) {
      for (const proxy of steamProxies) {
        try {
          const xmlProfile = await fetchSteamXmlThroughProxy(proxy, targetUrl);
          profile = { ...profile, avatarUrl: profile.avatarUrl || xmlProfile.avatarUrl, summary: profile.summary || xmlProfile.summary, games: profile.games.length ? profile.games : xmlProfile.games, memberSince: profile.memberSince || xmlProfile.memberSince, location: profile.location || xmlProfile.location, onlineState: profile.onlineState || xmlProfile.onlineState, stateMessage: profile.stateMessage || xmlProfile.stateMessage, level: profile.level || xmlProfile.level };
          break;
        } catch (error) { console.warn(`${proxy.name} XML supplement failed`, error); }
      }
    }
    if (!profile) throw new Error('Steam profile could not be loaded');
    profile.pageUrl = targetUrl;
    if (profile.steamName && !customProfile.name) { usernameInput.value = profile.steamName.slice(0, 24); updatePreviewUsername(); }
    textInput.value = profile.summary.slice(0, 500);
    fontEditorInput.value = textInput.value;
    renderFonts();
    renderProfileData(profile);
    localStorage.setItem('steamProfileCache', JSON.stringify({ url: targetUrl, profile, savedAt: Date.now() }));
    setImportMessage(`Loaded ${profile.steamName || 'Steam profile'} successfully.`);
  } catch (error) {
    const cached = localStorage.getItem('steamProfileCache');
    if (cached) {
      try {
        const cachedData = JSON.parse(cached);
        renderProfileData(cachedData.profile);
        if (cachedData.profile.steamName && !customProfile.name) { usernameInput.value = cachedData.profile.steamName.slice(0, 24); updatePreviewUsername(); }
        textInput.value = cachedData.profile.summary || '';
        fontEditorInput.value = textInput.value;
        renderFonts();
        setImportMessage(`Steam is unavailable. Showing the last loaded profile: ${cachedData.profile.steamName || 'profile'}.`, true);
      } catch { setImportMessage("Steam profile couldn't be loaded automatically. Feel free to type your nickname and bio manually below!", true); }
    } else setImportMessage("Steam profile couldn't be loaded automatically. Feel free to type your nickname and bio manually below!", true);
  } finally {
    loadProfileButton.disabled = false;
    loadProfileButton.textContent = 'Load Profile';
  }
}
function showToast(message) { toast.textContent = message; toast.classList.add('visible'); clearTimeout(showToast.timeout); showToast.timeout = setTimeout(() => toast.classList.remove('visible'), 1700); }
function wait(milliseconds) { return new Promise(resolve => setTimeout(resolve, milliseconds)); }
async function runTypewriter() {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) {
    typeLines.forEach(line => { line.textContent = line.dataset.text; });
    return;
  }
  while (true) {
    if (document.hidden) { await wait(1000); continue; }
    for (const line of typeLines) {
      const text = line.dataset.text;
      for (let index = 0; index <= text.length; index += 1) {
        line.textContent = text.slice(0, index);
        await wait(index === text.length ? 100 : 62);
      }
    }
    await wait(1450);
    for (const line of [...typeLines].reverse()) {
      const text = line.dataset.text;
      for (let index = text.length; index >= 0; index -= 1) {
        line.textContent = text.slice(0, index);
        await wait(index === 0 ? 180 : 38);
      }
    }
    await wait(260);
  }
}
async function copyText(text, message = 'COPIED TO CLIPBOARD') {
  try { await navigator.clipboard.writeText(text); }
  catch { const area = document.createElement('textarea'); area.value = text; document.body.appendChild(area); area.select(); document.execCommand('copy'); area.remove(); }
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(copyText.timeout);
  copyText.timeout = setTimeout(() => toast.classList.remove('visible'), 1700);
}

textInput.addEventListener('input', () => {
  fontEditorInput.value = textInput.value;
  cancelAnimationFrame(renderFrame);
  renderFrame = requestAnimationFrame(renderFonts);
});
usernameInput.addEventListener('input', updatePreviewUsername);
fontEditorInput.addEventListener('input', () => {
  textInput.value = fontEditorInput.value;
  cancelAnimationFrame(renderFrame);
  renderFrame = requestAnimationFrame(renderFonts);
});
document.querySelector('#open-font-editor').addEventListener('click', () => {
  fontEditorInput.value = textInput.value;
  renderFontEditor();
  openModal(fontEditorModal);
});
document.querySelector('#open-full-profile').addEventListener('click', () => openModal(fullProfileModal));
showMoreFonts.addEventListener('click', () => { showAllEditorFonts = !showAllEditorFonts; renderFontEditor(); });
fontEditorResults.addEventListener('click', event => {
  if (event.target.closest('[data-copy]')) return;
  const card = event.target.closest('[data-font-index]');
  if (!card) return;
  selectedFont = fonts[Number(card.dataset.fontIndex)];
  renderFontEditor();
});
copySelectedFont.addEventListener('click', () => copyText(selectedFontPreview.textContent, 'SELECTED STYLE COPIED'));
document.querySelectorAll('[data-close-modal]').forEach(button => button.addEventListener('click', () => closeModal(document.querySelector(`#${button.dataset.closeModal}`))));
loadProfileButton.addEventListener('click', loadSteamProfile);
profileUrlInput.addEventListener('keydown', event => { if (event.key === 'Enter') loadSteamProfile(); });
copyBlankButton.addEventListener('click', () => copyText(blankSpace, 'BLANK SPACE COPIED'));
document.querySelector('#copy-bbcode').addEventListener('click', () => copyText(bbcodeOutput.value, 'BBCODE COPIED'));
document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  if (!fontEditorModal.hidden) closeModal(fontEditorModal);
  if (!fullProfileModal.hidden) closeModal(fullProfileModal);
});
document.querySelectorAll('.modal-backdrop').forEach(backdrop => backdrop.addEventListener('click', event => { if (event.target === backdrop) closeModal(backdrop); }));
document.querySelectorAll('[data-bbcode]').forEach(button => button.addEventListener('click', () => {
  const tag = button.dataset.bbcode;
  bbcodeOutput.value = `[${tag}]${textInput.value || 'Type your summary'}[/${tag}]`;
}));
document.addEventListener('click', event => {
  const button = event.target.closest('[data-copy]');
  if (button) copyText(button.dataset.copy);
});

toggleProfileEdit.addEventListener('click', () => {
  const editing = fullProfileModal.classList.toggle('profile-editing');
  toggleProfileEdit.setAttribute('aria-pressed', String(editing));
  toggleProfileEdit.textContent = editing ? 'Done' : 'Edit Profile';
  profileEditor.hidden = !editing;
  showcaseAdd.hidden = !editing;
  fullProfileSummary.contentEditable = editing ? 'true' : 'false';
  showToast(editing ? 'EDIT MODE ON — CHANGE ANYTHING' : 'PROFILE SAVED');
});
fullProfileSummary.addEventListener('input', () => {
  if (fullProfileSummary.contentEditable !== 'true') return;
  const value = fullProfileSummary.textContent.slice(0, 500);
  textInput.value = value;
  fontEditorInput.value = value;
  cancelAnimationFrame(renderFrame);
  renderFrame = requestAnimationFrame(renderFonts);
});
const editorBindings = [
  [editNameInput, 'name'], [editRealnameInput, 'realName'], [editLevelInput, 'level'], [editLocationInput, 'location'], [editSinceInput, 'memberSince'],
  [editAvatarInput, 'avatar'], [editFrameInput, 'frame'], [editBgImageInput, 'bgImage'], [editBgVideoInput, 'bgVideo']
];
editorBindings.forEach(([input, key]) => {
  input.addEventListener('input', () => {
    let value = input.value.trim();
    if (key === 'level') { value = value.replace(/\D/g, ''); input.value = value; }
    customProfile[key] = value;
    if (key === 'name') {
      usernameInput.value = value.slice(0, 24);
      updatePreviewUsername();
    }
    saveCustomProfile();
    renderProfileData(loadedProfile);
  });
});
editStatusSelect.addEventListener('change', () => {
  customProfile.status = editStatusSelect.value;
  saveCustomProfile();
  renderProfileData(loadedProfile);
});
resetProfileButton.addEventListener('click', () => {
  customProfile = { ...defaultCustomProfile, showcase: [], comments: [] };
  saveCustomProfile();
  renderProfileData(loadedProfile);
  renderShowcase();
  renderComments();
  showToast('CUSTOM PROFILE RESET');
});
showcaseAdd.addEventListener('submit', event => {
  event.preventDefault();
  const name = showcaseNameInput.value.trim();
  if (!name) { showToast('ENTER AN ITEM NAME'); return; }
  customProfile.showcase.push({ name, hours: showcaseHoursInput.value.trim() || '0', logo: showcaseLogoInput.value.trim() });
  saveCustomProfile();
  renderShowcase();
  showcaseNameInput.value = '';
  showcaseHoursInput.value = '';
  showcaseLogoInput.value = '';
  showToast('SHOWCASE UPDATED');
});
showcaseGrid.addEventListener('click', event => {
  const button = event.target.closest('[data-remove-showcase]');
  if (!button) return;
  customProfile.showcase.splice(Number(button.dataset.removeShowcase), 1);
  saveCustomProfile();
  renderShowcase();
  showToast('ITEM REMOVED');
});
function addComment() {
  const text = commentInput.value.trim();
  if (!text) { showToast('WRITE SOMETHING FIRST'); return; }
  const author = usernameInput.value.trim() || customProfile.name.trim() || 'You';
  customProfile.comments.unshift({ author, text, time: 'Just now' });
  saveCustomProfile();
  commentInput.value = '';
  renderComments();
  showToast('COMMENT POSTED');
}
addCommentButton.addEventListener('click', addComment);
commentInput.addEventListener('keydown', event => {
  if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) addComment();
});
fullComments.addEventListener('click', event => {
  const button = event.target.closest('[data-remove-comment]');
  if (!button) return;
  customProfile.comments.splice(Number(button.dataset.removeComment), 1);
  saveCustomProfile();
  renderComments();
  showToast('COMMENT DELETED');
});
editProfileBtn.addEventListener('click', () => toggleProfileEdit.click());
addFriendButton.addEventListener('click', () => showToast('FRIEND REQUEST SENT (DEMO)'));
messageButton.addEventListener('click', () => {
  commentInput.focus();
  commentInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

statFonts.textContent = String(fonts.length);
statLines.textContent = String(dividers.length);
statBios.textContent = String(bios.length);
linesCount.textContent = String(dividers.length);

renderFonts();
renderDividers();
renderBios();
renderFontEditor();
updatePreviewUsername();
renderShowcase();
renderComments();
renderProfileData(loadedProfile);

const savedProfileUrl = localStorage.getItem('steamProfileUrl');
if (savedProfileUrl) profileUrlInput.value = savedProfileUrl;
const cachedProfile = localStorage.getItem('steamProfileCache');
if (cachedProfile) {
  try { if (/community_assets\/images\/items/i.test(JSON.parse(cachedProfile).profile?.avatarUrl || '')) localStorage.removeItem('steamProfileCache'); } catch { localStorage.removeItem('steamProfileCache'); }
}
const languageSelect = document.querySelector('#language-select');
languageSelect.value = localStorage.getItem('steamLanguage') || 'en';
setLanguage(languageSelect.value);
languageSelect.addEventListener('change', event => setLanguage(event.target.value));
if (profileUrlInput.value.trim()) loadSteamProfile();
runTypewriter();
