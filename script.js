const translations = {
  en: {
    skip: "Skip to content",
    navAbout: "About",
    navEducation: "Education",
    navResearch: "Research",
    navPublications: "Publications",
    position: "Postdoctoral Researcher",
    location: "Madrid, Spain",
    aboutTitle: "About Me",
    aboutWelcome: "Welcome to my page!",
    aboutOne:
      "My research focuses on the theoretical study of mesoscopic physics and its mathematical foundations. I am especially interested in rapidly advancing platforms, including solid-state devices for quantum computation, topological insulators, and other emerging quantum systems.",
    aboutTwo:
      "Recent experimental progress has made it possible to test increasingly sophisticated theoretical frameworks. This development aligns closely with my interests in full counting statistics, noise, and nonequilibrium many-body systems—areas that also open rich directions in mathematical physics.",
    aboutThree:
      "I am currently a postdoctoral researcher in the group led by José Carlos Abadillo-Uriel, a passionate and insightful theorist, at ICMM-CSIC. Previously, I completed my Ph.D. under the supervision of Dimitrie Culcer at UNSW Sydney; his intellectual guidance and thoughtful supervision have had a lasting influence on my research. I am deeply grateful to both mentors for their support and encouragement throughout my academic journey.",
    educationTitle: "Education",
    phdTitle: "Ph.D. in Theoretical Condensed Matter Physics",
    bscTitle: "B.Sc. (Class A Honours)",
    educationInstitution: "University of New South Wales",
    researchTitle: "Research Interests",
    researchOneTitle: "Solid-State Quantum Information",
    researchOneText:
      "Spin qubits, electrical control, coherence, noise, readout, and quantum sensing in semiconductor devices.",
    researchTwoTitle: "Quantum Transport",
    researchTwoText:
      "Quantum kinetic theory, spin and orbital transport, topological edge states, and disorder.",
    publicationsTitle: "Publications",
    categoryQuantumInformation: "Solid-State Quantum Information",
    categoryQuantumSensing: "Quantum Sensing",
    categoryQuantumTransport: "Quantum Transport & Topological Materials",
    scholarLink: "Google Scholar profile ↗",
    footer: "Academic website · Last updated August 2026",
  },
  zh: {
    skip: "跳转到正文",
    navAbout: "简介",
    navEducation: "教育",
    navResearch: "研究",
    navPublications: "论文",
    position: "博士后研究员",
    location: "西班牙，马德里",
    aboutTitle: "个人简介",
    aboutWelcome: "",
    aboutOne:
      "这B学术做不了一点. 没有老师抬着早JB完蛋了, 操.",
    aboutTwo:
      "",
    aboutThree:
      "",
    educationTitle: "教育经历",
    phdTitle: "理论凝聚态物理博士",
    bscTitle: "理学学士（A 类荣誉）",
    educationInstitution: "新南威尔士大学",
    researchTitle: "研究方向",
    researchOneTitle: "固态量子信息",
    researchOneText: "研究半导体器件中的自旋量子比特、电学操控、相干性、噪声、读出与量子传感。",
    researchTwoTitle: "量子输运",
    researchTwoText: "研究量子动理学、自旋与轨道输运、拓扑边缘态及无序效应。",
    publicationsTitle: "学术论文",
    categoryQuantumInformation: "固态量子信息",
    categoryQuantumSensing: "量子传感",
    categoryQuantumTransport: "量子输运与拓扑材料",
    scholarLink: "谷歌学术主页 ↗",
    footer: "个人学术主页 · 2026 年 8 月更新",
  },
};

const languageButton = document.querySelector("#language-toggle");
const translationNodes = document.querySelectorAll("[data-i18n]");

function setLanguage(language) {
  const dictionary = translations[language];
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";

  translationNodes.forEach((node) => {
    const translated = dictionary[node.dataset.i18n];
    if (typeof translated === "string") {
      node.textContent = translated;
      node.hidden = translated.length === 0;
    }
  });

  const chinese = language === "zh";
  languageButton.textContent = chinese ? "English" : "中文";
  languageButton.setAttribute("aria-label", chinese ? "Switch to English" : "切换至中文");
  localStorage.setItem("preferred-language", language);
}

const savedLanguage = localStorage.getItem("preferred-language");
const initialLanguage = savedLanguage || (navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en");
setLanguage(initialLanguage);

languageButton.addEventListener("click", () => {
  setLanguage(document.documentElement.lang.startsWith("zh") ? "en" : "zh");
});

document.querySelector("#year").textContent = new Date().getFullYear();
