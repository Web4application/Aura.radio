function renderResults() {
    DOM.resultsList.innerHTML = "";

    AuraState.results.forEach(item => {
        const row = document.createElement("div");
        row.className = "list-item";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", () =>
            toggleSelection(item, checkbox.checked)
        );

        row.append(checkbox, document.createTextNode(item.title || item.name));
        DOM.resultsList.appendChild(row);
    });
}
