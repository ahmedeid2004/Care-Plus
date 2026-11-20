export const NURSING_SERVICES = [
  {
    id: 1,
    name: { ar: "إعطاء حقن (عضل / وريد)", en: "IM / IV Injections" },
    description: {
      ar: "إعطاء الحقن العضلية والوريدية بأمان تام وتعقيم كامل على يد ممرض مرخص.",
      en: "Safe administration of intramuscular or intravenous injections with strict sterilization."
    },
    price: 150,
    duration: { ar: "30 دقيقة", en: "30 mins" },
    specialty: { ar: "تمريض عام", en: "General Nursing" },
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: { ar: "تركيب كانيولا ومحاليل", en: "IV Cannula & Fluids" },
    description: {
      ar: "تركيب الكانيولا الوريدية بدون ألم ومتابعة المحاليل الطبية الموصوفة بدقة.",
      en: "Professional IV catheter insertion and continuous monitoring of prescribed intravenous fluids."
    },
    price: 250,
    duration: { ar: "60 دقيقة", en: "60 mins" },
    specialty: { ar: "طوارئ وعناية", en: "Emergency & ER" },
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: { ar: "غيار على جروح ما بعد العمليات", en: "Post-Op Wound Dressing" },
    description: {
      ar: "تطهير الجروح الجراحية وتغيير الضمادات المعقمة ومتابعة التئام الجرح.",
      en: "Sterile surgical wound cleaning, dressing replacement, and infection assessment."
    },
    price: 300,
    duration: { ar: "45 دقيقة", en: "45 mins" },
    specialty: { ar: "رعاية جراحية", en: "Surgical Care" },
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: { ar: "قياس العلامات الحيوية والسكر", en: "Comprehensive Vital Signs" },
    description: {
      ar: "قياس ضغط الدم، السكر، نسبة الأكسجين، والنبض مع تسجيل تقرير رقمي للمتابعة.",
      en: "Blood pressure, blood glucose, SpO2, heart rate, and temperature monitoring with digital report."
    },
    price: 120,
    duration: { ar: "25 دقيقة", en: "25 mins" },
    specialty: { ar: "تمريض عام", en: "General Nursing" },
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: { ar: "رعاية كبار السن بالمنزل (شفت 8 ساعات)", en: "Elderly Home Care (8hr Shift)" },
    description: {
      ar: "مرافقة تمريضية متكاملة لكبار السن وتنظيم مواعيد الأدوية والمساعدة في الحركة.",
      en: "Dedicated 8-hour bedside nursing care, medication management, and mobility assistance."
    },
    price: 750,
    duration: { ar: "8 ساعات", en: "8 hours" },
    specialty: { ar: "رعاية مسنين", en: "Geriatric Care" },
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: { ar: "رعاية تمريضية للأطفال", en: "Pediatric Nursing Care" },
    description: {
      ar: "جلسات استنشاق (نيبولايزر)، خفض الحرارة، ورعاية لطيفة للأطفال والرضع.",
      en: "Specialized gentle care, nebulizer sessions, and fever management for infants and children."
    },
    price: 280,
    duration: { ar: "45 دقيقة", en: "45 mins" },
    specialty: { ar: "تمريض أطفال", en: "Pediatrics" },
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80"
  }
];

export const HOSPITALS = [
  {
    id: 1,
    name: { ar: "مستشفى دار الفؤاد الدولي", en: "Dar Al Fouad International Hospital" },
    type: { ar: "مستشفى متكامل", en: "Hospital" },
    address: { ar: "محور 26 يوليو، الشيخ زايد", en: "26th of July Corridor, Sheikh Zayed" },
    distance: "1.8 km",
    driveTime: { ar: "6 دقائق", en: "6 mins" },
    phone: "16370",
    lat: 30.0561,
    lng: 31.2394,
    capabilities: ["24/7 ER", "ICU", "NICU/Incubators", "Blood Bank"],
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: { ar: "مستشفى السلام الدولي", en: "As-Salam International Hospital" },
    type: { ar: "مستشفى متكامل", en: "Hospital" },
    address: { ar: "كورنيش النيل، المعادي", en: "Corniche El Nil, Maadi" },
    distance: "3.2 km",
    driveTime: { ar: "11 دقيقة", en: "11 mins" },
    phone: "19885",
    lat: 30.0444,
    lng: 31.2357,
    capabilities: ["24/7 ER", "ICU", "Blood Bank"],
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: { ar: "مركز النخبة للأطفال والحضانات", en: "Elite Pediatric & NICU Center" },
    type: { ar: "مركز متخصص", en: "Specialized Clinic" },
    address: { ar: "شارع التحرير، الدقي", en: "El Tahrir St, Dokki" },
    distance: "4.5 km",
    driveTime: { ar: "14 دقيقة", en: "14 mins" },
    phone: "01009988776",
    lat: 30.0385,
    lng: 31.2118,
    capabilities: ["24/7 ER", "NICU/Incubators"],
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: { ar: "مستشفى كليوباترا التخصصي", en: "Cleopatra Specialized Hospital" },
    type: { ar: "مستشفى متكامل", en: "Hospital" },
    address: { ar: "39 شارع كليوباترا، مصر الجديدة", en: "39 Cleopatra St, Heliopolis" },
    distance: "6.1 km",
    driveTime: { ar: "18 دقيقة", en: "18 mins" },
    phone: "19662",
    lat: 30.0912,
    lng: 31.3292,
    capabilities: ["24/7 ER", "ICU", "NICU/Incubators", "Blood Bank"],
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80"
  }
];

export const JOBS = [
  {
    id: 101,
    title: { ar: "ممرض/ة عناية مركزة (خبرة)", en: "ICU Senior Registered Nurse" },
    facility: { ar: "مستشفى دار الفؤاد", en: "Dar Al Fouad Hospital" },
    facilityType: "Hospital",
    type: "Full-Time",
    isUrgent: false,
    location: { ar: "6 أكتوبر", en: "6th of October" },
    salary: "14,000 - 17,500 EGP/mo",
    experience: { ar: "3+ سنوات", en: "3+ Years" },
    specialty: "ICU & Critical Care",
    postedAt: { ar: "منذ ساعتين", en: "2 hours ago" }
  },
  {
    id: 102,
    title: { ar: "عاجل: تغطية شفت طوارئ ليلي (الليلة 8 م)", en: "URGENT: Night Shift ER Nurse (Tonight 8 PM)" },
    facility: { ar: "مستشفى السلام الدولي", en: "As-Salam International Hospital" },
    facilityType: "Hospital",
    type: "Urgent Shift",
    isUrgent: true,
    location: { ar: "المعادي، القاهرة", en: "Maadi, Cairo" },
    salary: "1,100 EGP / Shift",
    experience: { ar: "سنتين خبرة", en: "2+ Years" },
    specialty: "Emergency & ER",
    postedAt: { ar: "منذ 15 دقيقة", en: "15 mins ago" }
  },
  {
    id: 103,
    title: { ar: "ممرضة لعيادة جلدية وليزر", en: "Dermatology & Laser Clinic Nurse" },
    facility: { ar: "عيادات جلو التخصصية", en: "Glow Medical Aesthetics Clinic" },
    facilityType: "Clinic",
    type: "Part-Time",
    isUrgent: false,
    location: { ar: "مدينة نصر", en: "Nasr City" },
    salary: "7,500 EGP/mo",
    experience: { ar: "سنة خبرة", en: "1+ Year" },
    specialty: "Outpatient Clinic",
    postedAt: { ar: "منذ يوم", en: "1 day ago" }
  },
  {
    id: 104,
    title: { ar: "عاجل: ممرض/ة حضانات أطفال (NICU)", en: "URGENT: NICU Incubator Nurse Cover" },
    facility: { ar: "مركز النخبة للأطفال", en: "Elite Pediatric Center" },
    facilityType: "Hospital",
    type: "Urgent Shift",
    isUrgent: true,
    location: { ar: "الدقي، الجيزة", en: "Dokki, Giza" },
    salary: "1,250 EGP / Shift",
    experience: { ar: "سنتين خبرة", en: "2+ Years" },
    specialty: "Pediatrics & NICU",
    postedAt: { ar: "منذ 32 دقيقة", en: "32 mins ago" }
  }
];

export const VITALS_HISTORY = [
  { date: "10 Nov", systolic: 135, diastolic: 88, sugar: 142, temp: 37.2 },
  { date: "12 Nov", systolic: 130, diastolic: 85, sugar: 130, temp: 37.0 },
  { date: "15 Nov", systolic: 125, diastolic: 82, sugar: 118, temp: 36.8 },
  { date: "18 Nov", systolic: 120, diastolic: 80, sugar: 110, temp: 36.7 },
  { date: "20 Nov", systolic: 118, diastolic: 78, sugar: 105, temp: 36.6 }
];

export const VERIFICATION_QUEUE = [
  {
    id: "NUR-882",
    name: "سارة محمود (RN)",
    specialty: "عناية مركزة وطوارئ",
    experience: "4 سنوات",
    licenseNo: "EG-RN-994821",
    submittedAt: "اليوم، 10:30 ص",
    status: "Pending",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "NUR-883",
    name: "عمر خالد (BSN)",
    specialty: "طوارئ وإصابات",
    experience: "3 سنوات",
    licenseNo: "EG-RN-773120",
    submittedAt: "أمس",
    status: "Pending",
    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80"
  }
];

export const ATS_APPLICANTS = [
  { id: 1, name: "منى السيد", specialty: "عناية مركزة", exp: "5 سنوات", rating: 4.9, stage: "Under Review" },
  { id: 2, name: "كريم حسن", specialty: "طوارئ", exp: "3 سنوات", rating: 4.7, stage: "Interview" },
  { id: 3, name: "نورهان طارق", specialty: "أطفال وحضانات", exp: "4 سنوات", rating: 4.8, stage: "Accepted" },
  { id: 4, name: "يوسف عادل", specialty: "تمريض عام", exp: "سنة واحدة", rating: 4.3, stage: "Rejected" }
];
