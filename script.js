'use strict';

// Public-facing summaries only. No private source, customer data, or internal URLs.
const products = [
  {name:'SmartCore ERP',category:['ENTERPRISE SOFTWARE','أنظمة المؤسسات'],description:['A modular platform connecting accounting, inventory, manufacturing, investment, and business operations in an Arabic-first experience.','منصة معيارية تربط المحاسبة والمخزون والتصنيع والاستثمار والعمليات التشغيلية، بتجربة مصممة باللغة العربية.'],tags:['Python','Django','ERP']},
  {name:'DukanPro POS',category:['RETAIL / DESKTOP & MOBILE','التجزئة / ديسكتوب وموبايل'],description:['Offline-first point of sale for retail. Desktop and mobile applications bring sales, inventory, shifts, and local data together.','نظام نقاط بيع يعمل محليًا لمحلات التجزئة. تطبيقات للديسكتوب والموبايل تجمع المبيعات والمخزون والورديات والبيانات المحلية.'],tags:['React','TypeScript','Electron','Capacitor','SQLite']},
  {name:'DealFlow CRM',category:['SALES & WORKFLOW AUTOMATION','المبيعات وأتمتة العمل'],description:['A sales workflow platform for cleaning and distributing leads, syncing Excel follow-ups, and digitizing paper call sheets with AI vision.','منصة لتنظيف العملاء المحتملين وتوزيعهم، ومزامنة المتابعات من إكسيل، وتحويل كشوف المكالمات الورقية إلى بيانات باستخدام الرؤية بالذكاء الاصطناعي.'],tags:['Python','SQLite','Gemini Vision']},
  {name:'BeautyMart',category:['B2B COMMERCE','التجارة بين الشركات'],description:['A wholesale commerce platform with quantity rules, tiered pricing, inventory management, and a dedicated administration experience.','منصة تجارة جملة تدعم قواعد الكميات وأسعار الشرائح وإدارة المخزون، مع تجربة إدارة مخصصة للمنتجات والطلبات.'],tags:['Next.js','React','PostgreSQL','Drizzle']},
  {name:'KafeFlow POS',category:['HOSPITALITY SOFTWARE','أنظمة المطاعم والمقاهي'],description:['An offline desktop POS for cafés and restaurants, covering sales, stock, shifts, reporting, and local backups in an Arabic interface.','نظام نقاط بيع مكتبي للمقاهي والمطاعم يعمل دون إنترنت، ويغطي المبيعات والمخزون والورديات والتقارير والنسخ الاحتياطي بواجهة عربية.'],tags:['Electron','Node.js','SQLite']},
  {name:'MarkazPro',category:['EDUCATION OPERATIONS','إدارة المراكز التعليمية'],description:['A local-first education center system for students, groups, attendance, collections, teacher accounts, and role-based operations.','نظام محلي لإدارة المراكز التعليمية يشمل الطلاب والمجموعات والحضور والتحصيل وحسابات المدرسين وصلاحيات التشغيل.'],tags:['Node.js','Electron','SQLite']},
  {name:'ClinicCare Manager',category:['CLINIC OPERATIONS / MVP','إدارة العيادات / نسخة أولية'],description:['A bilingual desktop MVP for appointments, patient records, billing, stock, and local-network workflows, backed by local SQLite storage.','نسخة أولية لتطبيق مكتبي ثنائي اللغة للمواعيد وملفات المرضى والفوترة والمخزون والعمل على الشبكة المحلية، بقاعدة SQLite محلية.'],tags:['Electron','TypeScript','SQLite']}
];

const arabic = {
 skip:'انتقل إلى المحتوى',mainNav:'التنقل الرئيسي',mobileNav:'قائمة الموبايل',openMenu:'افتح القائمة',work:'الأعمال',expertise:'الخبرات',about:'عني',contact:'تواصل',letsTalk:'خلّينا نتكلم',portraitCaption:'مطور. مهندس. صانع أدوات.',
 heroRole:'مطور برمجيات وصانع أدوات الذكاء الاصطناعي',heroOne:'أبني أدوات',heroTwo:'تصنع فرقًا',heroThree:'حقيقيًا.',heroDescription:'أنا أحمد عادل سراج. أبني برمجيات مفيدة؛ من ذاكرة لوكلاء الذكاء الاصطناعي، إلى الأنظمة التي تدير العمل اليومي للشركات.',explore:'اكتشف أعمالي',location:'من مصر، أبني لما هو أبعد.',portraitAlt:'أحمد عادل سراج مرتديًا سترة رمادية فاتحة',name:'أحمد عادل سراج',
 focusAreas:'مجالات التخصص',focusAi:'بنية الذكاء الاصطناعي',focusTools:'أدوات المطورين',focusBusiness:'أنظمة الأعمال',focusOps:'DevOps والأتمتة',
 selectedLabel:'01 / أعمال مختارة',workTitle:'أفكار أصبحت',workEm:'واقعًا.',workIntro:'مجموعة من الأدوات مفتوحة المصدر والمنتجات الخاصة، مبنية لحل مشكلات تستحق الاهتمام.',flagship:'المشروع الرئيسي / أدوات الذكاء الاصطناعي',openSource:'مفتوح المصدر',mindgateLead:'يتغير وكيلك الذكي.\nويبقى سياق عملك.',mindgateDescription:'بوابة ذاكرة محلية تحافظ على القرارات والإصلاحات وملخصات العمل بين وكلاء البرمجة. مبنية على SQLite وبروتوكول MCP.',visitProject:'شاهد المشروع',sourceCode:'الكود المصدري',memoryDiagram:'يتشارك Cursor وClaude وCodex السياق من خلال MindGate MCP وذاكرة SQLite محلية',sharedContext:'سياق واحد، مشترك',memoryGateway:'بوابة الذاكرة والسياق',localStorage:'تخزين محلي',diagramFootnote:'أدواتك متصلة. وذاكرتك على جهازك.',insideProject:'داخل المشروع',theProblem:'المشكلة',theApproach:'طريقة الحل',theResult:'النتيجة',mindgateProblem:'الانتقال بين أدوات البرمجة أو بدء جلسة جديدة يعني غالبًا إعادة شرح القرارات والسياق من البداية.',mindgateApproach:'حفظ الذاكرة المشتركة محليًا، واسترجاعها بالبحث النصي، وتحويل القرارات المحفوظة إلى قواعد لمساحة العمل.',mindgateResult:'طبقة سياق قابلة لإعادة الاستخدام، مع ملخصات لتسليم العمل وإخفاء الأسرار ولوحة محلية لإدارة الذاكرة.',watchDemo:'شاهد عرض المشروع',infrastructure:'البنية التحتية',developerTools:'أدوات المطورين',proxyDescription:'نقطة اتصال واحدة متوافقة مع OpenAI، مع إعادة المحاولة والتحويل التلقائي من Gemini إلى DeepSeek لتحسين مرونة سير عمل الذكاء الاصطناعي.',reproDescription:'تحويل بيانات المستودع المحلي إلى تقارير أعطال واضحة وقابلة للتحرير، مع إبقاء الكود والمفاتيح خارج التقرير.',exploreRepo:'استكشف المستودع',beta:'نسخة تجريبية مبكرة',
 privateLabel:'02 / منتجات خاصة',productsTitle:'برمجيات للعمل',productsEm:'كل يوم.',productsIntro:'أنظمة للتجزئة والتشغيل والتعليم والتجارة. ملخصات مختارة للمنتجات مع الاحتفاظ بخصوصية مستودعاتها.',moreProjects:'اعرض منتجات إضافية',lessProjects:'اعرض أقل',privateProject:'مشروع خاص',discussProject:'ناقش معي المشروع',
 expertiseLabel:'03 / كيف أقدر أساعدك',expertiseTitle:'من الفكرة',expertiseEm:'إلى النظام.',aiTitle:'بنية الذكاء الاصطناعي والوكلاء',aiText:'أدوات MCP وذاكرة مستمرة وبوابات نماذج وتكاملات تجعل الذكاء الاصطناعي جزءًا من العمل الفعلي.',businessTitle:'تطوير المنتجات وأنظمة الأعمال',businessText:'تطبيقات عملية للديسكتوب والموبايل والويب تخدم المبيعات والتشغيل والأشخاص المسؤولين عنهما.',opsTitle:'DevOps وأتمتة العمل',opsText:'خدمات بالحاويات ومسارات تكامل مستمر ومعالجة بيانات تربط أجزاء النظام وتقلل العمل المتكرر.',
 aboutLabel:'04 / وراء هذه الأعمال',aboutTitle:'فضولي بطبيعتي.',aboutEm:'مهندس بالممارسة.',aboutText:'أنا أحمد عادل سراج، معروف أيضًا باسم «دولا»، مطور برمجيات ومهندس DevOps من مصر. أعمل على أدوات الذكاء الاصطناعي وتطبيقات الأعمال وأتمتة البيانات.',aboutTextTwo:'أستمتع بتحويل إجراءات العمل المعقدة إلى برمجيات يسهل استخدامها. التصميم المحلي والمعمارية الواضحة والاهتمام بالتفاصيل أفكار تتكرر في ما أبنيه.',moreAbout:'اعرف المزيد عني على LinkedIn',
 contactLabel:'عندك فكرة في بالك؟',contactTitle:'خلّينا نبني حاجة',contactEm:'تستحق الاستخدام.',contactText:'لمشروع جديد أو تعاون تقني أو نقاش عن الفكرة الجاية.',connectLinkedin:'تواصل على LinkedIn',contactLinkedin:'تواصل مع أحمد على LinkedIn',backTop:'إلى أعلى الصفحة',footerName:'أحمد عادل سراج'
};

const translatable = [...document.querySelectorAll('[data-i18n]')];
const english = new Map(translatable.map(element => [element, element.innerHTML]));
const attributeTranslations = ['aria', 'alt'].flatMap(type => [...document.querySelectorAll(`[data-i18n-${type}]`)].map(element => ({element,type,original:element.getAttribute(type === 'aria' ? 'aria-label' : 'alt')})));
const languageButton = document.getElementById('language');
const moreButton = document.getElementById('more-projects');
const additionalProjects = document.getElementById('additional-projects');
const menuButton = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
let currentLanguage = 'en';

function projectCard(project, isArabic) {
 const article = document.createElement('article');
 article.className = 'private-project';
 const head = document.createElement('div');
 head.className = 'private-project-head';
 const category = document.createElement('span');
 category.className = 'project-category';
 category.textContent = project.category[isArabic ? 1 : 0];
 const badge = document.createElement('span');
 badge.className = 'private-label';
 badge.innerHTML = '<svg class="lock-icon" viewBox="0 0 16 16" aria-hidden="true"><rect x="3" y="7" width="10" height="7" rx="1"/><path d="M5 7V4a3 3 0 0 1 6 0v3"/></svg>';
 badge.append(document.createTextNode(isArabic ? arabic.privateProject : 'Private project'));
 head.append(category,badge);
 const title = document.createElement('h3');
 title.textContent = project.name;
 title.dir = 'ltr';
 const description = document.createElement('p');
 description.textContent = project.description[isArabic ? 1 : 0];
 const tags = document.createElement('ul');
 tags.className = 'tags';
 tags.setAttribute('aria-label', isArabic ? 'التقنيات المستخدمة' : 'Technologies');
 for(const tag of project.tags) { const item = document.createElement('li'); item.textContent=tag; tags.append(item); }
 const link = document.createElement('a');
 link.href = '#contact';
 link.textContent = (isArabic ? arabic.discussProject : 'Discuss this project') + ' ↗';
 link.setAttribute('aria-label', (isArabic ? arabic.discussProject : 'Discuss this project') + ': ' + project.name);
 article.append(head,title,description,tags,link);
 return article;
}

function renderProducts(isArabic) {
 const primary = document.getElementById('private-projects');
 primary.replaceChildren(...products.slice(0,4).map(project => projectCard(project,isArabic)));
 additionalProjects.replaceChildren(...products.slice(4).map(project => projectCard(project,isArabic)));
 updateMoreLabel();
}

function updateMoreLabel() {
 const isExpanded = moreButton.getAttribute('aria-expanded') === 'true';
 moreButton.querySelector('[data-i18n]').textContent = currentLanguage === 'ar' ? arabic[isExpanded ? 'lessProjects' : 'moreProjects'] : isExpanded ? 'Show fewer products' : 'Show more products';
 moreButton.querySelector('.more-sign').textContent = isExpanded ? '−' : '+';
}

function closeMenu() { mobileNav.hidden = true; menuButton.setAttribute('aria-expanded','false'); }

function setLanguage(language, persist = false) {
 currentLanguage = language === 'ar' ? 'ar' : 'en';
 const isArabic = currentLanguage === 'ar';
 document.documentElement.lang = currentLanguage;
 document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
 for(const element of translatable) {
  if(isArabic && arabic[element.dataset.i18n] !== undefined) element.textContent = arabic[element.dataset.i18n];
  else element.innerHTML = english.get(element);
 }
 for(const {element,type,original} of attributeTranslations) {
  const key=element.getAttribute(`data-i18n-${type}`);
  element.setAttribute(type === 'aria' ? 'aria-label' : 'alt', isArabic ? arabic[key] || original : original);
 }
 languageButton.textContent = isArabic ? 'English' : 'عربي';
 languageButton.setAttribute('aria-label',isArabic ? 'Switch to English' : 'Switch to Arabic');
 document.title = isArabic ? 'أحمد عادل سراج — مطور برمجيات وصانع أدوات الذكاء الاصطناعي' : 'Ahmed Adel Serag — Software Engineer & AI Tooling Builder';
 renderProducts(isArabic);
 closeMenu();
 if(persist) { try { localStorage.setItem('serag-language',currentLanguage); } catch { /* Storage is optional. */ } }
}

languageButton.addEventListener('click',() => setLanguage(currentLanguage === 'en' ? 'ar' : 'en',true));
moreButton.addEventListener('click',() => { const expand=moreButton.getAttribute('aria-expanded') !== 'true'; additionalProjects.hidden = !expand; moreButton.setAttribute('aria-expanded',String(expand)); updateMoreLabel(); });
menuButton.addEventListener('click',() => { const expand=menuButton.getAttribute('aria-expanded') !== 'true'; mobileNav.hidden=!expand; menuButton.setAttribute('aria-expanded',String(expand)); });
mobileNav.addEventListener('click',event => { if(event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown',event => { if(event.key === 'Escape' && !mobileNav.hidden) { closeMenu(); menuButton.focus(); } });
window.matchMedia('(min-width: 761px)').addEventListener('change',event => { if(event.matches) closeMenu(); });
document.getElementById('year').textContent = String(new Date().getFullYear());
let savedLanguage='en';
try { savedLanguage=localStorage.getItem('serag-language') || 'en'; } catch { /* Default remains usable without storage. */ }
setLanguage(savedLanguage);
