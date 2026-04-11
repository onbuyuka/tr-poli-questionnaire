import { Question, Party, AppContent, Language } from './types';

// ============================================
// QUESTIONS
// ============================================
// Scale: User answers from -2 (Strongly Disagree) to +2 (Strongly Agree)
// Questions are phrased neutrally - agreeing with a statement doesn't necessarily
// mean left or right, it depends on the topic.

export const QUESTIONS: Question[] = [
  // ECONOMY
  {
    id: 'eco_1',
    category: 'economy',
    text: {
      tr: 'Devlet, ekonomide daha aktif bir rol üstlenmeli ve stratejik sektörleri kontrol etmelidir.',
      en: 'The state should play a more active role in the economy and control strategic sectors.',
    },
  },
  {
    id: 'eco_2',
    category: 'economy',
    text: {
      tr: 'Asgari ücret önemli ölçüde artırılmalı, bu durum işverenlere ek yük getirse bile.',
      en: 'The minimum wage should be significantly increased, even if it creates additional burden on employers.',
    },
  },
  {
    id: 'eco_3',
    category: 'economy',
    text: {
      tr: 'Vergiler, yüksek gelirli bireyler ve büyük şirketler için artırılmalıdır.',
      en: 'Taxes should be increased for high-income individuals and large corporations.',
    },
  },

  // SECULARISM
  {
    id: 'sec_1',
    category: 'secularism',
    text: {
      tr: 'Din, devlet politikalarının oluşturulmasında hiçbir rol oynamamalıdır.',
      en: 'Religion should play no role in the formation of state policies.',
    },
  },
  {
    id: 'sec_2',
    category: 'secularism',
    text: {
      tr: 'Zorunlu din kültürü dersleri kaldırılmalı veya tüm inançları kapsar hale getirilmelidir.',
      en: 'Mandatory religious education classes should be removed or made to cover all beliefs.',
    },
  },
  {
    id: 'sec_3',
    category: 'secularism',
    text: {
      tr: 'Diyanet İşleri Başkanlığı, devlet bütçesinden bağımsız olmalıdır.',
      en: 'The Directorate of Religious Affairs should be independent from the state budget.',
    },
  },

  // DEMOCRACY & GOVERNANCE
  {
    id: 'dem_1',
    category: 'democracy',
    text: {
      tr: 'Yargı, yürütme organından tamamen bağımsız olmalıdır.',
      en: 'The judiciary should be completely independent from the executive branch.',
    },
  },
  {
    id: 'dem_2',
    category: 'democracy',
    text: {
      tr: 'Basın özgürlüğü kısıtlamaları kaldırılmalı ve tutuklu gazeteciler serbest bırakılmalıdır.',
      en: 'Press freedom restrictions should be lifted and imprisoned journalists should be released.',
    },
  },
  {
    id: 'dem_3',
    category: 'democracy',
    text: {
      tr: 'Cumhurbaşkanlığı sistemi yerine güçlendirilmiş parlamenter sisteme geçilmelidir.',
      en: 'The presidential system should be replaced with a strengthened parliamentary system.',
    },
  },

  // FOREIGN POLICY
  {
    id: 'for_1',
    category: 'foreign_policy',
    text: {
      tr: 'Türkiye, AB üyelik sürecini aktif olarak sürdürmelidir.',
      en: 'Turkey should actively pursue EU membership.',
    },
  },
  {
    id: 'for_2',
    category: 'foreign_policy',
    text: {
      tr: 'Türkiye, NATO içindeki konumunu güçlendirmeli ve Batı ittifakına bağlı kalmalıdır.',
      en: 'Turkey should strengthen its position within NATO and remain committed to the Western alliance.',
    },
  },
  {
    id: 'for_3',
    category: 'foreign_policy',
    text: {
      tr: 'Suriyeli mülteciler gönüllü ve güvenli koşullar sağlanarak ülkelerine dönmelidir.',
      en: 'Syrian refugees should return to their country with voluntary and safe conditions ensured.',
    },
  },

  // SOCIAL ISSUES
  {
    id: 'soc_1',
    category: 'social',
    text: {
      tr: 'Kadın hakları konusunda İstanbul Sözleşmesi\'ne yeniden katılınmalıdır.',
      en: 'Turkey should rejoin the Istanbul Convention on women\'s rights.',
    },
  },
  {
    id: 'soc_2',
    category: 'social',
    text: {
      tr: 'LGBTİ+ bireylerin hakları yasal güvence altına alınmalıdır.',
      en: 'The rights of LGBTI+ individuals should be legally protected.',
    },
  },
  {
    id: 'soc_3',
    category: 'social',
    text: {
      tr: 'Azınlık kültürlerinin ve dillerinin korunması devlet tarafından desteklenmelidir.',
      en: 'The preservation of minority cultures and languages should be supported by the state.',
    },
  },

  // ENVIRONMENT
  {
    id: 'env_1',
    category: 'environment',
    text: {
      tr: 'Yenilenebilir enerjiye geçiş hızlandırılmalı, fosil yakıtlardan vazgeçilmelidir.',
      en: 'The transition to renewable energy should be accelerated, moving away from fossil fuels.',
    },
  },
  {
    id: 'env_2',
    category: 'environment',
    text: {
      tr: 'Çevre koruma, ekonomik kalkınmadan önce gelmelidir.',
      en: 'Environmental protection should take priority over economic development.',
    },
  },

  // KURDISH ISSUE
  {
    id: 'kur_1',
    category: 'kurdish_issue',
    text: {
      tr: 'Kürt sorunu demokratik ve barışçıl yollarla, diyalog yoluyla çözülmelidir.',
      en: 'The Kurdish issue should be resolved through democratic and peaceful means, through dialogue.',
    },
  },
  {
    id: 'kur_2',
    category: 'kurdish_issue',
    text: {
      tr: 'Kürtçe, eğitimde ve kamu hizmetlerinde resmi olarak kullanılabilmelidir.',
      en: 'Kurdish should be officially usable in education and public services.',
    },
  },
];

// ============================================
// POLITICAL PARTIES
// ============================================
// Positions: -2 (strongly disagree) to +2 (strongly agree)
// These are approximations based on party programs and public stances

export const PARTIES: Party[] = [
  {
    id: 'chp',
    name: { tr: 'Cumhuriyet Halk Partisi', en: 'Republican People\'s Party' },
    shortName: 'CHP',
    color: '#D32F2F',
    foundedYear: 1923,
    ideology: { tr: 'Sosyal demokrasi, Kemalizm', en: 'Social democracy, Kemalism' },
    description: {
      tr: 'Türkiye\'nin en eski partisi. Laik, sosyal demokrat değerleri savunur.',
      en: 'Turkey\'s oldest party. Advocates for secular, social democratic values.',
    },
    positions: {
      eco_1: 1, eco_2: 2, eco_3: 1,
      sec_1: 2, sec_2: 2, sec_3: 1,
      dem_1: 2, dem_2: 2, dem_3: 2,
      for_1: 2, for_2: 1, for_3: 1,
      soc_1: 2, soc_2: 1, soc_3: 2,
      env_1: 2, env_2: 1,
      kur_1: 1, kur_2: 1,
    },
  },
  {
    id: 'akp',
    name: { tr: 'Adalet ve Kalkınma Partisi', en: 'Justice and Development Party' },
    shortName: 'AKP',
    color: '#FF9800',
    foundedYear: 2001,
    ideology: { tr: 'Muhafazakâr demokrasi', en: 'Conservative democracy' },
    description: {
      tr: 'İktidar partisi. Muhafazakâr demokrat çizgide politikalar izler.',
      en: 'The ruling party. Pursues conservative democratic policies.',
    },
    positions: {
      eco_1: 0, eco_2: 0, eco_3: -1,
      sec_1: -2, sec_2: -2, sec_3: -2,
      dem_1: -1, dem_2: -1, dem_3: -2,
      for_1: -1, for_2: 0, for_3: 1,
      soc_1: -2, soc_2: -2, soc_3: 0,
      env_1: 0, env_2: -1,
      kur_1: 0, kur_2: -1,
    },
  },
  {
    id: 'iyi',
    name: { tr: 'İYİ Parti', en: 'Good Party' },
    shortName: 'İYİ',
    color: '#00BCD4',
    foundedYear: 2017,
    ideology: { tr: 'Türk milliyetçiliği, Merkez sağ', en: 'Turkish nationalism, Center-right' },
    description: {
      tr: 'Milliyetçi ve merkez sağ bir parti. Güçlü devlet anlayışını savunur.',
      en: 'A nationalist and center-right party. Advocates for a strong state.',
    },
    positions: {
      eco_1: 0, eco_2: 1, eco_3: 0,
      sec_1: 1, sec_2: 1, sec_3: 0,
      dem_1: 2, dem_2: 2, dem_3: 2,
      for_1: 1, for_2: 2, for_3: 2,
      soc_1: 1, soc_2: -1, soc_3: 0,
      env_1: 1, env_2: 0,
      kur_1: 0, kur_2: -1,
    },
  },
  {
    id: 'mhp',
    name: { tr: 'Milliyetçi Hareket Partisi', en: 'Nationalist Movement Party' },
    shortName: 'MHP',
    color: '#B71C1C',
    foundedYear: 1969,
    ideology: { tr: 'Türk milliyetçiliği, Ülkücülük', en: 'Turkish nationalism, Idealism' },
    description: {
      tr: 'Ülkücü hareketin siyasi temsilcisi. Güçlü milliyetçi söyleme sahip.',
      en: 'Political representative of the Idealist movement. Strong nationalist discourse.',
    },
    positions: {
      eco_1: 0, eco_2: 0, eco_3: -1,
      sec_1: -1, sec_2: -1, sec_3: -1,
      dem_1: -1, dem_2: -1, dem_3: -2,
      for_1: -2, for_2: 1, for_3: 2,
      soc_1: -2, soc_2: -2, soc_3: -2,
      env_1: 0, env_2: -1,
      kur_1: -2, kur_2: -2,
    },
  },
  {
    id: 'dem',
    name: { tr: 'Halkların Eşitlik ve Demokrasi Partisi', en: 'Peoples\' Equality and Democracy Party' },
    shortName: 'DEM',
    color: '#9C27B0',
    foundedYear: 2024,
    ideology: { tr: 'Demokratik sosyalizm, Kürt siyaseti', en: 'Democratic socialism, Kurdish politics' },
    description: {
      tr: 'Kürt siyasi hareketinin temsilcisi. Sol ve demokratik değerleri savunur.',
      en: 'Representative of the Kurdish political movement. Advocates left and democratic values.',
    },
    positions: {
      eco_1: 2, eco_2: 2, eco_3: 2,
      sec_1: 2, sec_2: 2, sec_3: 2,
      dem_1: 2, dem_2: 2, dem_3: 2,
      for_1: 1, for_2: 0, for_3: 0,
      soc_1: 2, soc_2: 2, soc_3: 2,
      env_1: 2, env_2: 2,
      kur_1: 2, kur_2: 2,
    },
  },
  {
    id: 'tip',
    name: { tr: 'Türkiye İşçi Partisi', en: 'Workers\' Party of Turkey' },
    shortName: 'TİP',
    color: '#F44336',
    foundedYear: 2017,
    ideology: { tr: 'Sosyalizm', en: 'Socialism' },
    description: {
      tr: 'Sol, sosyalist bir parti. İşçi hakları ve eşitlik vurgular.',
      en: 'A left-wing, socialist party. Emphasizes workers\' rights and equality.',
    },
    positions: {
      eco_1: 2, eco_2: 2, eco_3: 2,
      sec_1: 2, sec_2: 2, sec_3: 2,
      dem_1: 2, dem_2: 2, dem_3: 2,
      for_1: 0, for_2: -1, for_3: 0,
      soc_1: 2, soc_2: 2, soc_3: 2,
      env_1: 2, env_2: 2,
      kur_1: 2, kur_2: 2,
    },
  },
  {
    id: 'zafer',
    name: { tr: 'Zafer Partisi', en: 'Victory Party' },
    shortName: 'ZP',
    color: '#1565C0',
    foundedYear: 2021,
    ideology: { tr: 'Türk milliyetçiliği, Göç karşıtlığı', en: 'Turkish nationalism, Anti-immigration' },
    description: {
      tr: 'Göç karşıtı politikalarıyla öne çıkan milliyetçi parti.',
      en: 'A nationalist party prominent for its anti-immigration policies.',
    },
    positions: {
      eco_1: 0, eco_2: 0, eco_3: 0,
      sec_1: 1, sec_2: 1, sec_3: 1,
      dem_1: 1, dem_2: 1, dem_3: 1,
      for_1: -1, for_2: 1, for_3: 2,
      soc_1: -1, soc_2: -2, soc_3: -1,
      env_1: 0, env_2: 0,
      kur_1: -1, kur_2: -1,
    },
  },
  {
    id: 'deva',
    name: { tr: 'Demokrasi ve Atılım Partisi', en: 'Democracy and Progress Party' },
    shortName: 'DEVA',
    color: '#0277BD',
    foundedYear: 2020,
    ideology: { tr: 'Liberal muhafazakârlık', en: 'Liberal conservatism' },
    description: {
      tr: 'Liberal ekonomi ve güçlendirilmiş demokrasiyi savunur.',
      en: 'Advocates for liberal economy and strengthened democracy.',
    },
    positions: {
      eco_1: -1, eco_2: 1, eco_3: 0,
      sec_1: 0, sec_2: 0, sec_3: 0,
      dem_1: 2, dem_2: 2, dem_3: 2,
      for_1: 2, for_2: 2, for_3: 1,
      soc_1: 1, soc_2: 0, soc_3: 1,
      env_1: 1, env_2: 0,
      kur_1: 1, kur_2: 0,
    },
  },
  {
    id: 'gelecek',
    name: { tr: 'Gelecek Partisi', en: 'Future Party' },
    shortName: 'GP',
    color: '#43A047',
    foundedYear: 2019,
    ideology: { tr: 'Muhafazakâr demokrasi', en: 'Conservative democracy' },
    description: {
      tr: 'Demokratik reformları ve hukuk devletini savunan merkez sağ parti.',
      en: 'A center-right party advocating democratic reforms and rule of law.',
    },
    positions: {
      eco_1: 0, eco_2: 1, eco_3: 0,
      sec_1: -1, sec_2: 0, sec_3: -1,
      dem_1: 2, dem_2: 2, dem_3: 2,
      for_1: 1, for_2: 1, for_3: 1,
      soc_1: 0, soc_2: -1, soc_3: 1,
      env_1: 1, env_2: 0,
      kur_1: 1, kur_2: 0,
    },
  },
];

// ============================================
// UI CONTENT (i18n)
// ============================================

export const CONTENT: Record<Language, AppContent> = {
  tr: {
    welcome: {
      title: 'Seçim Pusulası',
      subtitle: 'Hangi partiye en yakınsınız?',
      description: 'Bu anket, önemli konulardaki görüşlerinizi alarak sizin için en uygun siyasi partiyi belirlemenize yardımcı olur. Sorular politika odaklıdır, kişilik ya da parti sempatisi değil.',
      startButton: 'Ankete Başla',
      disclaimer: 'Bu uygulama bağımsızdır ve hiçbir siyasi partiyle bağlantısı yoktur.',
    },
    questions: {
      progress: 'Soru',
      skipButton: 'Atla',
      prevButton: 'Önceki',
      nextButton: 'Sonraki',
      finishButton: 'Sonuçları Gör',
      categories: {
        economy: 'Ekonomi',
        secularism: 'Laiklik',
        democracy: 'Demokrasi',
        foreign_policy: 'Dış Politika',
        social: 'Toplumsal Konular',
        environment: 'Çevre',
        kurdish_issue: 'Kürt Sorunu',
      },
    },
    answers: {
      stronglyDisagree: 'Kesinlikle Katılmıyorum',
      disagree: 'Katılmıyorum',
      neutral: 'Kararsızım',
      agree: 'Katılıyorum',
      stronglyAgree: 'Kesinlikle Katılıyorum',
    },
    results: {
      title: 'Sonuçlarınız',
      subtitle: 'Siyasi görüşlerinize göre parti uyumunuz',
      matchLabel: 'Uyum',
      agreementLabel: 'Ortak görüş',
      disagreementLabel: 'Farklı görüş',
      restartButton: 'Yeniden Başla',
      shareButton: 'Sonuçları Paylaş',
      copiedMessage: 'Link kopyalandı!',
      noAnswersWarning: 'Sonuç hesaplamak için en az bir soruyu yanıtlamanız gerekiyor.',
      disclaimer: 'Bu sonuçlar yaklaşık bir değerlendirmedir. Parti pozisyonları kamuoyuna açıklanan programlara dayanmaktadır ve kesin olmayabilir.',
    },
    footer: {
      disclaimer: 'Bu uygulama sadece bilgilendirme amaçlıdır. Seçim kararınızı vermeden önce parti programlarını detaylı incelemenizi öneririz.',
    },
    language: {
      toggle: 'EN',
    },
  },
  en: {
    welcome: {
      title: 'Election Compass',
      subtitle: 'Which party is closest to you?',
      description: 'This questionnaire helps you identify which political party aligns with your views based on important policy topics. Questions are policy-focused, not about personalities or party sympathy.',
      startButton: 'Start Questionnaire',
      disclaimer: 'This application is independent and has no affiliation with any political party.',
    },
    questions: {
      progress: 'Question',
      skipButton: 'Skip',
      prevButton: 'Previous',
      nextButton: 'Next',
      finishButton: 'See Results',
      categories: {
        economy: 'Economy',
        secularism: 'Secularism',
        democracy: 'Democracy',
        foreign_policy: 'Foreign Policy',
        social: 'Social Issues',
        environment: 'Environment',
        kurdish_issue: 'Kurdish Issue',
      },
    },
    answers: {
      stronglyDisagree: 'Strongly Disagree',
      disagree: 'Disagree',
      neutral: 'Neutral',
      agree: 'Agree',
      stronglyAgree: 'Strongly Agree',
    },
    results: {
      title: 'Your Results',
      subtitle: 'Party alignment based on your political views',
      matchLabel: 'Match',
      agreementLabel: 'Agreements',
      disagreementLabel: 'Disagreements',
      restartButton: 'Start Over',
      shareButton: 'Share Results',
      copiedMessage: 'Link copied!',
      noAnswersWarning: 'You need to answer at least one question to calculate results.',
      disclaimer: 'These results are approximate assessments. Party positions are based on publicly stated programs and may not be exact.',
    },
    footer: {
      disclaimer: 'This application is for informational purposes only. We recommend reviewing party programs in detail before making your voting decision.',
    },
    language: {
      toggle: 'TR',
    },
  },
};
