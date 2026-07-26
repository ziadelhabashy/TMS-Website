/* TMS bilingual dictionary + language engine.
   Language is persisted in localStorage; Arabic is the default. */
(function () {
  "use strict";

  var DICT = {
    ar: {
      "nav.home": "الرئيسية",
      "nav.about": "من نحن",
      "nav.contact": "تواصل معنا",
      "brand.name": "TMS",
      "brand.sub": "الخدمات الفنية والصيانة",

      "meta.homeTitle": "TMS | خدمات التكييف في مصر",
      "meta.aboutTitle": "TMS | من نحن",
      "meta.contactTitle": "TMS | تواصل معنا",

      "home.heroTitle": "خدمات التكييف المتكاملة في مصر",
      "home.heroSub": "بيع، تركيب، وصيانة جميع أنواع التكييفات بأعلى جودة وأفضل الأسعار",
      "home.heroCta": "تواصل معنا",
      "home.heroCta2": "خدماتنا",

      "stat.since": "تأسست",
      "stat.centers": "مركز خدمة بمحافظات مصر",
      "stat.brands": "علامة تجارية موثوقة",

      "home.servicesEyebrow": "خدماتنا",
      "home.servicesTitle": "أربعة أقسام لخدمة متكاملة",
      "home.servicesSubtitle": "فريق عمل متكامل ومتخصص في كل مرحلة من مراحل خدمة التكييف، من أول اتصال حتى إتمام الصيانة",

      "service.maintenance.title": "الصيانة",
      "service.maintenance.desc": "إصلاح الأعطال بجميع أنواعها، مع ورش متخصصة للوحدات، والدوائر الإلكترونية، وكروت التحكم",
      "service.installation.title": "التركيبات",
      "service.installation.desc": "فك ونقل وتركيب جميع الماركات والقدرات (سبليت ومركزي)، بالإضافة إلى تجهيز مواسير التكييف",
      "service.transportation.title": "الحملة",
      "service.transportation.desc": "أسطول نقل مخصص لنقل الوحدات والمعدات والسلالم إلى موقع العمل مهما كان",
      "service.callcenter.title": "خدمة العملاء",
      "service.callcenter.desc": "فريق متكامل يستقبل الاتصالات ويوجهها للقسم المختص، من 8 صباحًا حتى 5 مساءً",

      "home.brandsEyebrow": "علامات تجارية موثوقة",
      "home.brandsTitle": "نتعامل مع أفضل الماركات العالمية والمحلية",
      "home.brandsSubtitle": "وكيل معتمد ومركز خدمة معتمد لأكثر من 15 علامة تجارية في مجال التكييف والتبريد",

      "home.trustEyebrow": "منذ عام 2011",
      "home.trustTitle": "مركز الخدمة الوحيد المعتمد لمجموعة طيبة المنزلاوي",
      "home.trustText": "TMS هي مركز خدمة ما بعد البيع الوحيد المعتمد لمجموعة طيبة المنزلاوي (Gree، Hyundai، Beko) منذ عام 2011، وقد نالت ثقة عدد من أكبر المؤسسات والشركات في مصر على مدار أكثر من عقد من العمل.",
      "home.trustList.telecom": "المصرية للاتصالات",
      "home.trustList.telecomDesc": "توريد وتركيب وحدات Gree على مستوى الجمهورية",
      "home.trustList.kazyon": "أسواق كازيون",
      "home.trustList.kazyonDesc": "أكثر من 1000 فرع من القاهرة إلى أسوان",
      "home.trustList.ainshams": "مستشفيات جامعة عين شمس",
      "home.trustList.ainshamsDesc": "خدمات صيانة وتركيب لعدة مستشفيات تابعة للجامعة",
      "home.trustList.capital": "العاصمة الإدارية الجديدة",
      "home.trustList.capitalDesc": "خدمات تكييف لمجتمع الجالية الصينية",
      "home.trustList.media": "الهيئة الوطنية للإعلام",
      "home.trustList.mediaDesc": "توريد وحدات Gree على مستوى الجمهورية",

      "home.closingTitle": "محتاج خدمة تكييف؟ إحنا في خدمتك",
      "home.closingSub": "فريقنا جاهز يستقبل اتصالك ويوجهك للقسم المناسب في نفس اليوم",
      "home.closingCta": "اتصل بنا الآن",

      "footer.desc": "شركة رائدة في مجال بيع وتركيب وصيانة أجهزة التكييف والتبريد بجميع محافظات مصر منذ عام 2011.",
      "footer.quicklinks": "روابط سريعة",
      "footer.contactTitle": "بيانات التواصل",
      "footer.follow": "تابعنا على فيسبوك",
      "footer.followInstagram": "تابعنا على انستغرام",
      "footer.rightsText": "TMS للخدمات الفنية والصيانة. جميع الحقوق محفوظة.",
      "whatsapp.label": "تواصل معنا عبر واتساب",

      "about.heroTitle": "من نحن",
      "about.heroSub": "TMS للخدمات الهندسية والصيانة، الشركة الرائدة في مجال التكييف والتبريد بجميع محافظات مصر",

      "about.introEyebrow": "تعرف علينا",
      "about.introTitle": "شركة رائدة في مجال التكييف والتبريد على مستوى الجمهورية",
      "about.introText": "TMS للخدمات الهندسية والصيانة هي شركة رائدة في مجال بيع وتركيب وصيانة أجهزة التكييف والتبريد، تعمل في جميع محافظات مصر منذ عام 2011. نقدم خدماتنا للشركات، والجهات الحكومية، والقطاع الخاص، والكيانات المؤسسية، وكذلك للأفراد، بجميع الموديلات والقدرات، سبليت حائطي، مخفي، أو دولاب (فري ستاند).",
      "about.introNote": "فريقنا الفني مُدرَّب على أعلى معايير الكفاءة والجودة، ويمتلك خبرة واسعة في حل جميع أعطال ومشاكل أجهزة التكييف على اختلاف أنواعها.",

      "about.servicesEyebrow": "ماذا نقدم",
      "about.servicesTitle": "خدماتنا الأساسية",
      "about.service1": "بيع جميع موديلات أجهزة التكييف والتبريد",
      "about.service2": "تجهيز وتغطية مواسير التكييف",
      "about.service3": "تركيب المعدات والأجهزة",
      "about.service4": "أعمال الصاج والجريلات",
      "about.service5": "صيانة وإصلاح جميع موديلات التكييف",
      "about.service6": "استشارات هندسية لتحديد أماكن التكييف على المخططات الهندسية لجميع القدرات",

      "about.deptEyebrow": "أقسام الشركة",
      "about.deptTitle": "أربعة أقسام متخصصة تعمل بتناغم",
      "about.deptSubtitle": "كل قسم له فريقه ومعداته الخاصة لضمان تقديم خدمة سريعة ودقيقة",
      "dept.maintenance.title": "قسم الصيانة",
      "dept.maintenance.desc": "فريق متخصص في تشخيص الأعطال، مزود بورشة إصلاح متكاملة، بالإضافة إلى ورشة منفصلة للدوائر الإلكترونية وكروت التحكم",
      "dept.installation.title": "قسم التركيبات",
      "dept.installation.desc": "فك ونقل وتركيب جميع الماركات والقدرات (سبليت ومركزي)، وتجهيز مواسير التكييف طبقًا للمواصفات الفنية",
      "dept.transportation.title": "قسم الحملة (النقل)",
      "dept.transportation.desc": "أسطول نقل مخصص لنقل الوحدات والمعدات، بما في ذلك السقالات والسلالم، إلى موقع العمل",
      "dept.callcenter.title": "قسم خدمة العملاء",
      "dept.callcenter.desc": "فريق متكامل يستقبل الاتصالات ويوجهها للقسم المختص، من 8 صباحًا حتى 5 مساءً أيام العمل الرسمية",

      "about.laborEyebrow": "القوى العاملة",
      "about.laborTitle": "فريق عمل منتشر بجميع محافظات مصر",
      "labor.cairo.title": "الصيانة والتركيبات – القاهرة الكبرى",
      "labor.cairo.desc": "14 فريق عمل (فني رئيسي + مساعد فني)، كل فريق مزود بسيارة خاصة من المركز الرئيسي للخدمة",
      "labor.governorates.title": "الصيانة والتركيبات – المحافظات",
      "labor.governorates.desc": "47 مركز خدمة تابع يغطي باقي محافظات جمهورية مصر العربية",
      "labor.managerial.title": "القسم الإداري",
      "labor.managerial.desc": "ينسق العمل بين الشركات الشريكة والفنيين لضمان سير العمل بسلاسة",
      "labor.accounting.title": "قسم الحسابات",
      "labor.accounting.desc": "يتولى جميع العمليات المالية بين الأقسام المختلفة بالشركة",
      "labor.storage.title": "قسم المخازن",
      "labor.storage.desc": "توفير وطلب قطع الغيار من مختلف الشركات الموردة",
      "labor.callcenter.title": "قسم خدمة العملاء",
      "labor.callcenter.desc": "فريق متكامل لاستقبال وتوجيه المكالمات، من 8 صباحًا حتى 5 مساءً",

      "about.partnerEyebrow": "شراكاتنا",
      "about.partnerTitle": "شريك معتمد لكبرى العلامات التجارية",
      "partner.distributorTitle": "موزع معتمد لـ",
      "partner.serviceCenterTitle": "مركز خدمة معتمد لـ",
      "partner.tiba": "مجموعة طيبة المنزلاوي (Gree، Hyundai، Beko) – المركز الوحيد لخدمة ما بعد البيع",

      "about.trackEyebrow": "سجل الإنجازات",
      "about.trackTitle": "ثقة كبرى المؤسسات والشركات في مصر",
      "about.trackSubtitle": "نماذج من عملائنا وأعمالنا على مستوى الجمهورية",
      "track.col.client": "العميل",
      "track.col.scope": "نطاق العمل",
      "track.telecom.name": "المصرية للاتصالات",
      "track.telecom.desc": "توريد وتركيب وحدات Gree على مستوى الجمهورية",
      "track.media.name": "الهيئة الوطنية للإعلام",
      "track.media.desc": "توريد وحدات Gree على مستوى الجمهورية",
      "track.traffic.name": "الإدارة العامة للمرور",
      "track.traffic.desc": "توريد وحدات Gree على مستوى الجمهورية",
      "track.kazyon.name": "شركة توفير للأغذية (أسواق كازيون)",
      "track.kazyon.desc": "أكثر من 1000 فرع، من القاهرة إلى أسوان",
      "track.ainshams.name": "جامعة عين شمس",
      "track.ainshams.desc": "عدة مستشفيات تابعة للجامعة",
      "track.capital.name": "العاصمة الإدارية الجديدة",
      "track.capital.desc": "مجتمع الجالية الصينية",
      "track.negma.name": "مجموعة نجمة هليوبوليس (سوبر ماركت)",
      "track.negma.desc": "توريد وتركيب وصيانة",
      "track.gila.name": "الجيلة للوكالات التجارية",
      "track.gila.desc": "مجموعة فروع",

      "about.clientsTitle": "عملاؤنا وشركاؤنا",

      "contact.heroTitle": "تواصل معنا",
      "contact.heroSub": "فريقنا جاهز للرد على استفساراتك وتحديد موعد الزيارة",
      "contact.hoursLabel": "مواعيد خدمة العملاء",
      "contact.hoursValue": "من 8 صباحًا حتى 5 مساءً، أيام العمل الرسمية",

      "contact.mobileLabel": "الموبايل",
      "contact.landlineLabel": "الخط الأرضي",
      "contact.addressLabel": "العنوان",
      "contact.addressValue": "المنطقة الصناعية، العباسية، بجوار توشيبا العربي، خلف تاكي أحمد سعيد",
      "contact.facebookLabel": "فيسبوك",
      "contact.facebookValue": "TMS للخدمات الفنية والصيانة",
      "contact.instagramLabel": "انستغرام",
      "contact.instagramValue": "tms_services_eg",

      "contact.mapTitle": "موقعنا على الخريطة",
      "contact.mapNote": "سيتم إضافة خريطة تفاعلية قريبًا",

      "contact.formTitle": "أرسل لنا رسالة",
      "contact.formSub": "املأ البيانات التالية وسنتواصل معك في أقرب وقت ممكن",
      "form.name": "الاسم",
      "form.namePh": "اسمك بالكامل",
      "form.phone": "رقم الهاتف",
      "form.phonePh": "01xxxxxxxxx",
      "form.message": "الرسالة",
      "form.messagePh": "اكتب تفاصيل طلبك أو استفسارك هنا...",
      "form.submit": "إرسال الرسالة",
      "form.success": "شكرًا لتواصلك معنا! سيقوم فريقنا بالرد عليك في أقرب وقت ممكن.",
      "form.error": "حدث خطأ أثناء الإرسال، يرجى المحاولة مرة أخرى أو التواصل عبر واتساب.",
      "form.note": "سنتواصل معك خلال ساعات العمل الرسمية"
    },

    en: {
      "nav.home": "Home",
      "nav.about": "About Us",
      "nav.contact": "Contact Us",
      "brand.name": "TMS",
      "brand.sub": "Technical & Maintenance Service",

      "meta.homeTitle": "TMS | AC Services Egypt",
      "meta.aboutTitle": "TMS | About Us",
      "meta.contactTitle": "TMS | Contact Us",

      "home.heroTitle": "Integrated AC Services in Egypt",
      "home.heroSub": "Sales, installation & maintenance of all AC types at the highest quality and best prices",
      "home.heroCta": "Contact Us",
      "home.heroCta2": "Our Services",

      "stat.since": "Established",
      "stat.centers": "Service centers across Egypt",
      "stat.brands": "Trusted brands",

      "home.servicesEyebrow": "Our Services",
      "home.servicesTitle": "Four Departments, One Integrated Service",
      "home.servicesSubtitle": "A fully coordinated team for every stage of AC service, from the first phone call to the final repair",

      "service.maintenance.title": "Maintenance",
      "service.maintenance.desc": "Repairs & malfunctions of every kind, with dedicated workshops for units, electronics, and control cards",
      "service.installation.title": "Installation",
      "service.installation.desc": "Dismantling, moving & installing all brands and capacities (split/central), plus complete piping setup",
      "service.transportation.title": "Transportation",
      "service.transportation.desc": "A dedicated fleet moving units, equipment, scaffolds & ladders to every job site",
      "service.callcenter.title": "Call Center",
      "service.callcenter.desc": "An integrated team routing calls to the right department, 8 AM – 5 PM",

      "home.brandsEyebrow": "Authorized Brands",
      "home.brandsTitle": "We work with the world's leading brands",
      "home.brandsSubtitle": "Authorized distributor and service center for 15+ AC & refrigeration brands",

      "home.trustEyebrow": "Since 2011",
      "home.trustTitle": "Sole Authorized Service Center for Tiba Manzalawi Group",
      "home.trustText": "TMS has been the sole after-sales service center for Tiba Manzalawi Group (Gree, Hyundai, Beko) since 2011, and has earned the trust of some of Egypt's largest institutions and corporations over more than a decade of work.",
      "home.trustList.telecom": "Telecom Egypt",
      "home.trustList.telecomDesc": "Supply & installation of Gree units nationwide",
      "home.trustList.kazyon": "Kazyon Markets",
      "home.trustList.kazyonDesc": "1,000+ branches, from Cairo to Aswan",
      "home.trustList.ainshams": "Ain Shams University Hospitals",
      "home.trustList.ainshamsDesc": "Maintenance & installation across several university hospitals",
      "home.trustList.capital": "New Administrative Capital",
      "home.trustList.capitalDesc": "AC services for the Chinese community",
      "home.trustList.media": "National Media Authority",
      "home.trustList.mediaDesc": "Supply of Gree units nationwide",

      "home.closingTitle": "Need AC Service? We're Here For You",
      "home.closingSub": "Our team is ready to take your call and route you to the right department the same day",
      "home.closingCta": "Call Us Now",

      "footer.desc": "A leading company in the sale, installation and maintenance of AC & refrigeration equipment across all governorates of Egypt since 2011.",
      "footer.quicklinks": "Quick Links",
      "footer.contactTitle": "Contact Info",
      "footer.follow": "Follow us on Facebook",
      "footer.followInstagram": "Follow us on Instagram",
      "footer.rightsText": "TMS Technical & Maintenance Service. All rights reserved.",
      "whatsapp.label": "Chat with us on WhatsApp",

      "about.heroTitle": "About Us",
      "about.heroSub": "TMS for Engineering Services & Maintenance, a leading company in air-conditioning and refrigeration across all governorates of Egypt",

      "about.introEyebrow": "Get to know us",
      "about.introTitle": "A Leading AC & Refrigeration Company Nationwide",
      "about.introText": "TMS for Engineering Services & Maintenance is a leading company in air-conditioning and refrigeration, operating across all governorates of Egypt since 2011. We serve companies, government sectors, private firms, corporate entities, and individuals, across all AC models and capacities: wall-mounted split, concealed, or free-standing.",
      "about.introNote": "Our technicians are trained to the highest standards of efficiency and quality, with extensive experience resolving every AC issue across all types and brands.",

      "about.servicesEyebrow": "What We Offer",
      "about.servicesTitle": "Our Core Services",
      "about.service1": "Sales of all AC & refrigeration models",
      "about.service2": "Preparation & concealment of piping",
      "about.service3": "Equipment installation",
      "about.service4": "Sheet-metal & grille works",
      "about.service5": "Maintenance & repair of all AC models",
      "about.service6": "Engineering consultancy for positioning AC units on engineering drawings, across all capacities",

      "about.deptEyebrow": "Company Departments",
      "about.deptTitle": "Four Specialized Departments Working in Sync",
      "about.deptSubtitle": "Each department has its own team and equipment to guarantee fast, accurate service",
      "dept.maintenance.title": "Maintenance Department",
      "dept.maintenance.desc": "A specialized team for diagnosing faults, backed by a fully equipped repair workshop plus a separate workshop for electronics and control cards",
      "dept.installation.title": "Installation Department",
      "dept.installation.desc": "Dismantling, moving & installing all brands and capacities (split/central), with piping setup to spec",
      "dept.transportation.title": "Transportation Department",
      "dept.transportation.desc": "A dedicated fleet transporting units and equipment, including scaffolds and ladders, to every job site",
      "dept.callcenter.title": "Call Center Department",
      "dept.callcenter.desc": "An integrated team receiving and routing calls, 8 AM – 5 PM on official working days",

      "about.laborEyebrow": "Labor Force",
      "about.laborTitle": "A Team Spread Across Every Governorate",
      "labor.cairo.title": "Maintenance & Installation – Greater Cairo",
      "labor.cairo.desc": "14 crews (chief technician + technical assistant), each with a private sedan from the main service center",
      "labor.governorates.title": "Maintenance & Installation – Governorates",
      "labor.governorates.desc": "47 affiliated service centers covering the rest of Egypt",
      "labor.managerial.title": "Managerial Department",
      "labor.managerial.desc": "Coordinates between partner companies and technicians to keep work running smoothly",
      "labor.accounting.title": "Accounting Department",
      "labor.accounting.desc": "Handles all financial operations between the company's departments",
      "labor.storage.title": "Storage Department",
      "labor.storage.desc": "Sources & orders spare parts from various supplier companies",
      "labor.callcenter.title": "Call Center Department",
      "labor.callcenter.desc": "A full team receiving and routing calls, 8 AM – 5 PM",

      "about.partnerEyebrow": "Our Partnerships",
      "about.partnerTitle": "Authorized Partner for Leading Brands",
      "partner.distributorTitle": "Authorized Distributor for",
      "partner.serviceCenterTitle": "Authorized Service Center for",
      "partner.tiba": "Tiba Manzalawi Group (Gree, Hyundai, Beko) – sole after-sales center",

      "about.trackEyebrow": "Track Record",
      "about.trackTitle": "Trusted by Egypt's Leading Institutions",
      "about.trackSubtitle": "A sample of our clients and completed work nationwide",
      "track.col.client": "Client",
      "track.col.scope": "Scope of Work",
      "track.telecom.name": "Telecom Egypt",
      "track.telecom.desc": "Gree units supplied & installed nationwide",
      "track.media.name": "National Media Authority",
      "track.media.desc": "Gree units supplied nationwide",
      "track.traffic.name": "General Authority for Traffic",
      "track.traffic.desc": "Gree units supplied nationwide",
      "track.kazyon.name": "Tawfeer Food Co. (Kazyon Markets)",
      "track.kazyon.desc": "1,000+ branches, Cairo to Aswan",
      "track.ainshams.name": "Ain Shams University",
      "track.ainshams.desc": "Several hospitals affiliated with the university",
      "track.capital.name": "New Administrative Capital",
      "track.capital.desc": "Chinese community",
      "track.negma.name": "Negma Heliopolis Supermarket Group",
      "track.negma.desc": "Supply, install & maintenance",
      "track.gila.name": "Gila Commercial Agencies",
      "track.gila.desc": "Group of branches",

      "about.clientsTitle": "Our Clients & Partners",

      "contact.heroTitle": "Contact Us",
      "contact.heroSub": "Our team is ready to answer your questions and schedule a visit",
      "contact.hoursLabel": "Call Center Hours",
      "contact.hoursValue": "8:00 AM – 5:00 PM, official working days",

      "contact.mobileLabel": "Mobile",
      "contact.landlineLabel": "Landline",
      "contact.addressLabel": "Address",
      "contact.addressValue": "Industrial Zone, Al-Abbasia, beside Toshiba El-Araby, behind Takky, Ahmed Saeed",
      "contact.facebookLabel": "Facebook",
      "contact.facebookValue": "TMS Technical & Maintenance Service",
      "contact.instagramLabel": "Instagram",
      "contact.instagramValue": "tms_services_eg",

      "contact.mapTitle": "Our Location on the Map",
      "contact.mapNote": "An interactive map will be added soon",

      "contact.formTitle": "Send Us a Message",
      "contact.formSub": "Fill in the details below and we'll get back to you as soon as possible",
      "form.name": "Name",
      "form.namePh": "Your full name",
      "form.phone": "Phone Number",
      "form.phonePh": "01xxxxxxxxx",
      "form.message": "Message",
      "form.messagePh": "Tell us about your request or question...",
      "form.submit": "Send Message",
      "form.success": "Thank you for reaching out! Our team will get back to you shortly.",
      "form.error": "Something went wrong while sending. Please try again or contact us on WhatsApp.",
      "form.note": "We'll respond during official working hours"
    }
  };

  var STORAGE_KEY = "tms-lang";
  var DEFAULT_LANG = "ar";

  function getLang() {
    try {
      return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    } catch (e) {
      return DEFAULT_LANG;
    }
  }

  function setLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    applyLang(lang);
  }

  function applyLang(lang) {
    var dict = DICT[lang] || DICT[DEFAULT_LANG];
    var dir = lang === "ar" ? "rtl" : "ltr";

    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", dir);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (dict[key] !== undefined) el.setAttribute("aria-label", dict[key]);
    });

    var titleEl = document.querySelector("[data-i18n-title]");
    if (titleEl) {
      var titleKey = titleEl.getAttribute("data-i18n-title");
      if (dict[titleKey] !== undefined) document.title = dict[titleKey];
    }

    document.querySelectorAll(".lang-toggle").forEach(function (toggleBtn) {
      toggleBtn.textContent = lang === "ar" ? "English" : "العربية";
      toggleBtn.setAttribute("aria-label", lang === "ar" ? "Switch to English" : "التبديل إلى العربية");
    });

    document.querySelectorAll("[data-logo-en]").forEach(function (img) {
      var src = lang === "ar" ? img.getAttribute("data-logo-ar") : img.getAttribute("data-logo-en");
      if (src) img.setAttribute("src", src);
    });
  }

  function initLang() {
    var lang = getLang();
    applyLang(lang);

    document.querySelectorAll(".lang-toggle").forEach(function (toggleBtn) {
      toggleBtn.addEventListener("click", function () {
        var current = getLang();
        setLang(current === "ar" ? "en" : "ar");
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLang);
  } else {
    initLang();
  }

  window.TMS_I18N = { getLang: getLang, setLang: setLang, DICT: DICT };
})();
