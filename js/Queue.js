function renderQueue() {
    DOM.queueList.innerHTML = "";

    AuraState.queue.forEach((track, index) => {
        const row = document.createElement("div");
        row.textContent = `${index + 1}. ${track.title}`;
        DOM.queueList.appendChild(row);
    });
}
