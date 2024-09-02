const worksDataUrl = "works.json";

const finishedWorks = () => {

  const targetContainer = document.querySelector("[data-js-finished-works]");
  if(!targetContainer) return;

  fetch(worksDataUrl)
    .then(response => response.json())
    .then(data => {
      const sortedData = data.sort((a, b) => {
        return a.order - b.order;
      });
      const html = sortedData.map(work => {

        const date = new Date(work.date);
        const options = { year: 'numeric', month: 'long' };
        const formattedDate = date.toLocaleDateString('en-US', options);
        const formattedDateInGerman = date.toLocaleDateString('de-DE', options);
        return `
          <div class="work">
            <h3>${work.title}</h3>
            <p>${work.author}, ${formattedDateInGerman}</p>
            <a href="${work.url}" target="_blank" rel="noopener noreferrer">View</a>
          </div>
        `;
      });
      targetContainer.innerHTML = html;
    });

  console.log(targetContainer)
};

export { finishedWorks };