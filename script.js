const translations = {
  en: {
    skip: "Skip to content",
    navAbout: "About",
    navResearch: "Research",
    navPublications: "Publications",
    navLinks: "Links",
    heroEyebrow: "QUANTUM PHYSICS · MADRID",
    heroRole: "Senior Postdoctoral Researcher at ICMM-CSIC",
    heroLede:
      "Exploring quantum transport, hole-spin qubits, and the physics that connects mesoscopic devices to new quantum technologies.",
    viewScholar: "Google Scholar",
    viewPublications: "View publications",
    location: "Madrid, Spain",
    aboutTitle: "About",
    aboutLead:
      "I am a theoretical physicist working at the intersection of condensed matter, quantum information, and mesoscopic transport.",
    aboutBody1:
      "I am a senior postdoctoral researcher in the Quantum Materials for Quantum Technologies (Q4Q) group at ICMM-CSIC, working with José Carlos Abadillo-Uriel. My research focuses on hole-spin qubits and their integration with mesoscopic devices, including electrical control, decoherence, noise, and readout.",
    aboutBody2:
      "I also study quantum sensing of axion-like particles and mathematical aspects of nonequilibrium quantum systems, including full counting statistics and the operator theory of 1/f noise. Before joining ICMM-CSIC, I completed my bachelor's and PhD training at UNSW under Dimitrie Culcer, where I worked on quantum spin Hall transport and hole-spin qubit coherence.",
    positionLabel: "Position",
    positionValue: "Senior Postdoctoral Researcher",
    groupLabel: "Research group",
    trainingLabel: "Doctoral training",
    researchTitle: "Research",
    researchIntro:
      "My work connects fundamental theory with questions motivated by real quantum devices.",
    researchOneTitle: "Hole-spin qubits",
    researchOneBody:
      "Electrical operation, coherence sweet spots, spin-orbit coupling, noise, and Pauli-spin-blockade readout in group-IV semiconductor quantum dots.",
    researchTwoTitle: "Quantum transport & topology",
    researchTwoBody:
      "Quantum kinetic theory, spin and orbital transport, quantum spin Hall edges, and disorder-driven phenomena in multiband systems.",
    researchThreeTitle: "Quantum sensing & noise",
    researchThreeBody:
      "Semiconductor spin-qubit sensors for axion-like particles, spectral engineering, error correction, full counting statistics, and 1/f noise.",
    publicationsTitle: "Publications",
    publicationsIntro: "Journal articles and preprints listed on my Google Scholar profile.",
    completeProfile: "Complete Scholar profile ↗",
    linksTitle: "Academic links",
    footerNote: "Publication data checked against Google Scholar · August 2026",
  },
  zh: {
    skip: "跳转到正文",
    navAbout: "简介",
    navResearch: "研究",
    navPublications: "论文",
    navLinks: "学术链接",
    heroEyebrow: "量子物理 · 马德里",
    heroRole: "ICMM-CSIC 高级博士后研究员",
    heroLede: "探索量子输运、空穴自旋量子比特，以及介观器件与新型量子技术之间的物理联系。",
    viewScholar: "谷歌学术",
    viewPublications: "查看论文",
    location: "西班牙，马德里",
    aboutTitle: "个人简介",
    aboutLead: "我是一名理论物理学家，研究方向位于凝聚态物理、量子信息与介观输运的交叉领域。",
    aboutBody1:
      "我现为 ICMM-CSIC 量子技术量子材料组（Q4Q）高级博士后研究员，与 José Carlos Abadillo-Uriel 合作。我的研究聚焦于空穴自旋量子比特及其与介观器件的集成，包括电学操控、退相干、噪声与读出。",
    aboutBody2:
      "我也研究利用半导体自旋量子比特探测类轴子粒子，以及非平衡量子系统中的数学物理问题，包括全计数统计与 1/f 噪声的算符理论。加入 ICMM-CSIC 之前，我在新南威尔士大学完成本科和博士训练，师从 Dimitrie Culcer 教授，研究量子自旋霍尔输运与空穴自旋量子比特相干性。",
    positionLabel: "现任职位",
    positionValue: "高级博士后研究员",
    groupLabel: "研究团队",
    trainingLabel: "博士训练",
    researchTitle: "研究方向",
    researchIntro: "我的工作将基础理论与实际量子器件所提出的问题联系起来。",
    researchOneTitle: "空穴自旋量子比特",
    researchOneBody:
      "研究 IV 族半导体量子点中的电学操控、相干性最优点、自旋轨道耦合、噪声及泡利自旋阻塞读出。",
    researchTwoTitle: "量子输运与拓扑",
    researchTwoBody:
      "研究量子动理学、自旋与轨道输运、量子自旋霍尔边缘态，以及多能带体系中由无序驱动的物理现象。",
    researchThreeTitle: "量子传感与噪声",
    researchThreeBody:
      "研究面向类轴子粒子的半导体自旋量子比特传感器、频谱工程、量子纠错、全计数统计与 1/f 噪声。",
    publicationsTitle: "学术论文",
    publicationsIntro: "以下为谷歌学术个人主页收录的期刊论文与预印本。",
    completeProfile: "查看完整谷歌学术主页 ↗",
    linksTitle: "学术链接",
    footerNote: "论文数据已与谷歌学术核对 · 2026 年 8 月",
  },
};

const languageButton = document.querySelector("#language-toggle");
const translationNodes = document.querySelectorAll("[data-i18n]");

function setLanguage(language) {
  const dictionary = translations[language];
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  translationNodes.forEach((node) => {
    const value = dictionary[node.dataset.i18n];
    if (value) node.textContent = value;
  });

  const isChinese = language === "zh";
  languageButton.textContent = isChinese ? "English" : "中文";
  languageButton.setAttribute("aria-label", isChinese ? "Switch to English" : "切换至中文");
  localStorage.setItem("preferred-language", language);
}

const savedLanguage = localStorage.getItem("preferred-language");
const initialLanguage = savedLanguage || (navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en");
setLanguage(initialLanguage);

languageButton.addEventListener("click", () => {
  setLanguage(document.documentElement.lang.startsWith("zh") ? "en" : "zh");
});

document.querySelector("#year").textContent = new Date().getFullYear();

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8%", threshold: 0.08 },
  );
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
}
