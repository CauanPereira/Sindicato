document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion__options");

  accordionItems.forEach((item, index) => {
    // Criar o elemento de conteúdo para cada accordion
    const content = document.createElement("div");
    content.className = "accordion__answer";
    content.style.maxHeight = "0";
    content.style.overflow = "hidden";
    content.style.transition = "max-height 0.3s ease-out";
    content.style.color = "var(--alertTone)";
    content.style.textAlign = "left";
    content.style.maxWidth = "700px";
    content.style.fontSize = "20px";
    content.style.marginTop = "10px"; // Usar margin ao invés de padding para evitar o problema
    content.style.marginBottom = "15px"; // Espaçamento inferior

    item.after(content);

    // Adicionar o conteúdo das respostas para o Sindicato
    const answers = [
      `A nossa missão é representar e defender os interesses dos trabalhadores do comércio e dos serviços. Atuamos em uma base territorial intermunicipal, lutando pelos direitos coletivos e individuais da categoria. Estamos comprometidos com a valorização profissional, com a melhoria das condições de trabalho e com o fortalecimento social e econômico da nossa região.`,

      `No Sindicato, enxergamos um futuro brilhante para quem faz o comércio e os serviços acontecerem. Acreditamos no potencial dos trabalhadores e no papel fundamental que desempenham no desenvolvimento da nossa região. Trabalhamos para ampliar conquistas, garantir dignidade, incentivar a qualificação e valorizar cada profissional. Queremos ser protagonistas na construção de um futuro mais justo, próspero e humano para todos.`,

      `Os princípios que norteiam o Sindicato são a transparência, a ética e o comprometimento. Pautamos todas as nossas ações nesses valores, garantindo uma atuação responsável, íntegra e firme na defesa dos trabalhadores. Buscamos constantemente aprimorar nossos serviços e ser referência na luta pelos direitos e pela valorização da nossa categoria.`,

      `A bandeira do Sindicato é a valorização do trabalho e a promoção da dignidade profissional. Defendemos o direito de cada trabalhador a exercer sua função com respeito, segurança e reconhecimento. Lutamos por um ambiente justo, com oportunidades reais, menos desigualdade e mais condições para crescer. Estamos comprometidos em eliminar barreiras e impulsionar o desenvolvimento humano e social da nossa categoria.`,

      `Contribuir com o Sindicato é fortalecer a luta pelos direitos dos trabalhadores do comércio e dos serviços. Como associado, você tem acesso a uma série de benefícios, como atendimento jurídico, representatividade em negociações coletivas, ações de formação e qualificação, além de apoio nas demandas do dia a dia. Sua contribuição é essencial para que possamos continuar defendendo seus interesses e promovendo melhores condições de trabalho para todos.`,
    ];
    content.textContent = answers[index];

    // Função para alternar o estado do accordion
    function toggleAccordion(item) {
      const icon = item.querySelector(".accordion__icon");
      const answer = item.nextElementSibling;
      const isOpen = answer.style.maxHeight !== "0px";

      // Alternar o estado do accordion atual
      if (isOpen) {
        answer.style.maxHeight = "0";
        icon.style.transform = "rotate(0deg)";
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        icon.style.transform = "rotate(90deg)";
      }
    }

    // Adicionar evento de clique no accordion inteiro
    item.addEventListener("click", function (e) {
      toggleAccordion(this);
    });

    const icon = item.querySelector(".accordion__icon");
    if (icon) {
      icon.addEventListener("click", function (e) {
        e.stopPropagation(); // Previne que o evento dispare duas vezes
        toggleAccordion(item);
      });
    }
  });
});
