export type LanguagePage = {
  locale: "en" | "ar" | "tr" | "ku";
  languageName: string;
  nativeName: string;
  direction: "ltr" | "rtl";
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  title: string;
  intro: string;
  aboutTitle: string;
  aboutText: string;
  servicesTitle: string;
  servicesIntro: string;
  services: { title: string; text: string }[];
  valuesTitle: string;
  values: string[];
  ctaTitle: string;
  ctaText: string;
  contactLabel: string;
};

export const languagePages: Record<LanguagePage["locale"], LanguagePage> = {
  en: {
    locale: "en", languageName: "Englisch", nativeName: "English", direction: "ltr",
    seoTitle: "IT Services in English",
    seoDescription: "Websites, mobile apps, custom software, Microsoft 365 and IT services in English from Sun & Moon IT Services in Seelze, Germany.",
    eyebrow: "IT services in English",
    title: "Digital solutions that move your business forward.",
    intro: "We build websites, mobile apps and custom software, connect existing systems and support companies with Microsoft 365, automation and IT administration.",
    aboutTitle: "Technology explained clearly and delivered reliably.",
    aboutText: "Sun & Moon IT Services supports small and medium-sized businesses from the first idea to ongoing operation. We listen, understand your processes and develop a solution that fits your actual needs.",
    servicesTitle: "How we can support you",
    servicesIntro: "One technical partner for your digital project and its operation.",
    services: [
      { title: "Web development", text: "Fast, responsive company websites and modern web applications." },
      { title: "Mobile apps", text: "iOS and Android apps, store publishing, backends and API connections." },
      { title: "Custom software", text: "Maintainable applications tailored to your workflows and requirements." },
      { title: "Microsoft 365", text: "SharePoint, Power Apps, Power Automate, Power BI and secure administration." },
      { title: "Automation & AI", text: "Practical workflows and controlled integration of external AI services." },
      { title: "IT operations", text: "Servers, identities, permissions, troubleshooting and technical support." },
    ],
    valuesTitle: "What you can expect",
    values: ["A personal point of contact", "Clear scope and transparent steps", "Solutions for desktop and mobile", "Support after launch"],
    ctaTitle: "Let’s talk about your project.",
    ctaText: "A short message is enough for an initial, non-binding assessment.",
    contactLabel: "Contact us",
  },
  ar: {
    locale: "ar", languageName: "Arabisch", nativeName: "العربية", direction: "rtl",
    seoTitle: "خدمات تقنية المعلومات باللغة العربية",
    seoDescription: "تطوير مواقع وتطبيقات وبرمجيات مخصصة وخدمات Microsoft 365 ودعم تقني باللغة العربية في ألمانيا.",
    eyebrow: "خدمات تقنية باللغة العربية",
    title: "حلول رقمية تساعد أعمالكم على التقدم.",
    intro: "نطوّر المواقع وتطبيقات الهاتف والبرمجيات المخصصة، ونربط الأنظمة القائمة، ونساعد الشركات في Microsoft 365 والأتمتة وإدارة تقنية المعلومات.",
    aboutTitle: "تقنية واضحة وتنفيذ يمكن الاعتماد عليه.",
    aboutText: "ترافق Sun & Moon IT Services الشركات الصغيرة والمتوسطة من الفكرة الأولى حتى التشغيل والدعم المستمر. نفهم احتياجاتكم وإجراءات العمل لديكم ثم نطوّر الحل المناسب فعلاً.",
    servicesTitle: "كيف يمكننا مساعدتكم",
    servicesIntro: "شريك تقني واحد للمشروع الرقمي والتشغيل المستمر.",
    services: [
      { title: "تطوير المواقع", text: "مواقع سريعة ومتجاوبة وتطبيقات ويب حديثة للشركات." },
      { title: "تطبيقات الهاتف", text: "تطبيقات iOS وAndroid والنشر في المتاجر وربط الخوادم والواجهات البرمجية." },
      { title: "برمجيات مخصصة", text: "تطبيقات قابلة للتطوير ومصممة وفق إجراءات ومتطلبات عملكم." },
      { title: "Microsoft 365", text: "SharePoint وPower Apps وPower Automate وPower BI وإدارة آمنة." },
      { title: "الأتمتة والذكاء الاصطناعي", text: "أتمتة عملية وربط مدروس لخدمات الذكاء الاصطناعي الخارجية." },
      { title: "تشغيل ودعم تقنية المعلومات", text: "خوادم وهويات وصلاحيات وحل المشكلات ودعم تقني." },
    ],
    valuesTitle: "ما الذي يمكنكم توقعه",
    values: ["جهة اتصال شخصية", "نطاق واضح وخطوات شفافة", "حلول لسطح المكتب والهاتف", "دعم بعد إطلاق المشروع"],
    ctaTitle: "لنتحدث عن مشروعكم.",
    ctaText: "تكفي رسالة قصيرة للحصول على تقييم أولي غير ملزم.",
    contactLabel: "تواصلوا معنا",
  },
  tr: {
    locale: "tr", languageName: "Türkisch", nativeName: "Türkçe", direction: "ltr",
    seoTitle: "Türkçe IT Hizmetleri",
    seoDescription: "Almanya'da Türkçe web sitesi, mobil uygulama, özel yazılım, Microsoft 365 ve IT destek hizmetleri.",
    eyebrow: "Türkçe IT hizmetleri",
    title: "İşletmenizi ileri taşıyan dijital çözümler.",
    intro: "Web siteleri, mobil uygulamalar ve özel yazılımlar geliştiriyor; mevcut sistemleri birbirine bağlıyor ve Microsoft 365, otomasyon ve IT yönetimi alanlarında destek veriyoruz.",
    aboutTitle: "Anlaşılır teknoloji, güvenilir uygulama.",
    aboutText: "Sun & Moon IT Services, küçük ve orta ölçekli işletmeleri ilk fikirden sürekli işletime kadar destekler. Süreçlerinizi dinler, ihtiyaçlarınızı anlar ve gerçekten uygun çözümü geliştiririz.",
    servicesTitle: "Size nasıl destek olabiliriz?",
    servicesIntro: "Dijital projeniz ve devam eden işletimi için tek teknik çözüm ortağı.",
    services: [
      { title: "Web geliştirme", text: "Hızlı, mobil uyumlu şirket web siteleri ve modern web uygulamaları." },
      { title: "Mobil uygulamalar", text: "iOS ve Android uygulamaları, mağaza yayınlama, sunucu ve API bağlantıları." },
      { title: "Özel yazılım", text: "İş akışlarınıza ve gereksinimlerinize uygun sürdürülebilir uygulamalar." },
      { title: "Microsoft 365", text: "SharePoint, Power Apps, Power Automate, Power BI ve güvenli yönetim." },
      { title: "Otomasyon ve yapay zekâ", text: "Pratik iş akışları ve harici yapay zekâ servislerinin kontrollü entegrasyonu." },
      { title: "IT işletimi", text: "Sunucular, kimlikler, yetkiler, sorun giderme ve teknik destek." },
    ],
    valuesTitle: "Bizden ne bekleyebilirsiniz?",
    values: ["Kişisel iletişim noktası", "Net kapsam ve şeffaf adımlar", "Masaüstü ve mobil çözümler", "Yayın sonrası destek"],
    ctaTitle: "Projenizi konuşalım.",
    ctaText: "İlk ücretsiz değerlendirme için kısa bir mesaj yeterlidir.",
    contactLabel: "Bize ulaşın",
  },
  ku: {
    locale: "ku", languageName: "Kurdisch", nativeName: "Kurdî", direction: "ltr",
    seoTitle: "Xizmetên IT bi Kurdî",
    seoDescription: "Malper, sepanên mobîl, nermalava taybet, Microsoft 365 û piştgiriya IT bi zimanê Kurdî li Almanyayê.",
    eyebrow: "Xizmetên IT bi Kurdî",
    title: "Çareseriyên dîjîtal ku karsaziya we pêş dixin.",
    intro: "Em malper, sepanên mobîl û nermalava taybet pêş dixin, pergalên heyî bi hev ve girêdidin û di Microsoft 365, otomasyon û rêveberiya IT de piştgiriyê didin.",
    aboutTitle: "Teknolojiya zelal, pêkanîna pêbawer.",
    aboutText: "Sun & Moon IT Services ji ramana yekem heta xebitandin û piştgiriya domdar li gel karsaziyên biçûk û navîn dixebite. Em pêvajoyên we fam dikin û çareseriya ku bi rastî li we tê pêş dixin.",
    servicesTitle: "Em dikarin çawa alîkariya we bikin?",
    servicesIntro: "Ji bo projeya dîjîtal û xebitandina wê yek hevkarê teknîkî.",
    services: [
      { title: "Pêşxistina malperan", text: "Malperên bilez, li ser mobîlê guncaw û sepanên webê yên nûjen." },
      { title: "Sepanên mobîl", text: "Sepanên iOS û Android, weşandina store, server û girêdanên API." },
      { title: "Nermalava taybet", text: "Sepanên domdar ku li gorî pêvajo û hewcedariyên we tên çêkirin." },
      { title: "Microsoft 365", text: "SharePoint, Power Apps, Power Automate, Power BI û rêveberiya ewle." },
      { title: "Otomasyon û AI", text: "Pêvajoyên pratîk û entegrasyona kontrolkirî ya xizmetên AI." },
      { title: "Xebitandin û piştgiriya IT", text: "Server, nasname, destûr, çareserkirina pirsgirêkan û piştgiriya teknîkî." },
    ],
    valuesTitle: "Hûn dikarin çi hêvî bikin?",
    values: ["Kesekî rasterast ji bo têkiliyê", "Qada kar a zelal û gavên vekirî", "Çareserî ji bo komputer û mobîlê", "Piştgirî piştî weşandinê"],
    ctaTitle: "Werin em li ser projeya we biaxivin.",
    ctaText: "Ji bo nirxandina yekem a bêligel peyameke kurt bes e.",
    contactLabel: "Têkilî daynin",
  },
};

export const supportedLocales = Object.keys(languagePages) as LanguagePage["locale"][];
