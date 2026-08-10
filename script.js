const translations = {
  en: {
    skip: "Skip to content",
    navAbout: "About",
    navResearch: "Research",
    navPublications: "Publications",
    position: "Senior Postdoctoral Researcher",
    location: "Madrid, Spain",
    aboutTitle: "About Me",
    aboutOne:
      "I am a theoretical physicist working at the intersection of condensed matter, quantum information, and mesoscopic transport. I am currently a senior postdoctoral researcher in the Quantum Materials for Quantum Technologies (Q4Q) group at ICMM-CSIC, working with José Carlos Abadillo-Uriel.",
    aboutTwo:
      "My research focuses on hole-spin qubits and their integration with mesoscopic devices, including electrical control, decoherence, noise, and readout. I also study quantum sensing of axion-like particles and mathematical aspects of nonequilibrium quantum systems.",
    aboutThree:
      "Before joining ICMM-CSIC, I completed my bachelor's and PhD training at UNSW Sydney under the supervision of Dimitrie Culcer, where I worked on quantum spin Hall transport and hole-spin qubit coherence.",
    researchTitle: "Research Interests",
    researchOneTitle: "Hole-spin qubits",
    researchOneText:
      "Electrical control, coherence, spin-orbit coupling, noise, and readout in Ge and Si quantum dots.",
    researchTwoTitle: "Quantum transport",
    researchTwoText:
      "Quantum kinetic theory, spin and orbital transport, topological edge states, and disorder.",
    researchThreeTitle: "Quantum sensing",
    researchThreeText:
      "Spin-qubit sensors for axion-like particles, spectral engineering, error correction, and 1/f noise.",
    publicationsTitle: "Publications",
    scholarLink: "Google Scholar profile ↗",
    footer: "Academic website · Last updated August 2026",
  },
  zh: {
    skip: "跳转到正文",
    navAbout: "简介",
    navResearch: "研究",
    navPublications: "论文",
    position: "高级博士后研究员",
    location: "西班牙，马德里",
    aboutTitle: "个人简介",
    aboutOne:
      "我是一名理论物理学家，研究方向位于凝聚态物理、量子信息与介观输运的交叉领域。现为 ICMM-CSIC 量子技术量子材料组（Q4Q）高级博士后研究员，与 José Carlos Abadillo-Uriel 合作。",
    aboutTwo:
      "我的研究聚焦于空穴自旋量子比特及其与介观器件的集成，包括电学操控、退相干、噪声与读出。我也研究利用半导体自旋量子比特探测类轴子粒子，以及非平衡量子系统中的数学物理问题。",
    aboutThree:
      "加入 ICMM-CSIC 之前，我在新南威尔士大学完成本科和博士训练，师从 Dimitrie Culcer 教授，研究量子自旋霍尔输运与空穴自旋量子比特相干性。",
    researchTitle: "研究方向",
    researchOneTitle: "空穴自旋量子比特",
    researchOneText: "研究 Ge 和 Si 量子点中的电学操控、相干性、自旋轨道耦合、噪声与读出。",
    researchTwoTitle: "量子输运",
    researchTwoText: "研究量子动理学、自旋与轨道输运、拓扑边缘态及无序效应。",
    researchThreeTitle: "量子传感",
    researchThreeText: "研究面向类轴子粒子的自旋量子比特传感、频谱工程、量子纠错与 1/f 噪声。",
    publicationsTitle: "学术论文",
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
    if (translated) node.textContent = translated;
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
