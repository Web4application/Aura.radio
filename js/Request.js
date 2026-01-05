async function buildAndMakeRequest() {
    AuraState.serverUrl = DOM.serverUrl.value.trim();
    AuraState.collection =
        document.querySelector("input[name=collection]:checked").value;

    const params = new URLSearchParams();
    if (DOM.filters.value) params.append("filter", DOM.filters.value);
    if (DOM.sort.value) params.append("sort", DOM.sort.value);

    const url = `${AuraState.serverUrl}${AuraState.collection}?${params}`;

    try {
        const res = await fetch(url);
        AuraState.results = await res.json();
        renderResults();
    } catch (err) {
        console.error("Request failed", err);
    }
}
