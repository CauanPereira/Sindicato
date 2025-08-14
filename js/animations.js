// Animação para mostrar o botão de scroll to top
const showAnim = {
  duration: "200ms",
  fill: "both",
  iterations: "1",
  direction: "alternate",
  animations: [
    {
      selector: "#scrollToTopButton",
      keyframes: [{ opacity: "1", visibility: "visible" }],
    },
  ],
};

// Animação para esconder o botão de scroll to top
const hideAnim = {
  duration: "200ms",
  fill: "both",
  iterations: "1",
  direction: "alternate",
  animations: [
    {
      selector: "#scrollToTopButton",
      keyframes: [{ opacity: "0", visibility: "hidden" }],
    },
  ],
};

// Exportar as animações para uso no HTML
if (typeof module !== "undefined" && module.exports) {
  module.exports = { showAnim, hideAnim };
}
