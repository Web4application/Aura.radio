function addToQueue(prepend = false) {
    const items = Array.from(AuraState.selection);

    AuraState.queue = prepend
        ? [...items, ...AuraState.queue]
        : [...AuraState.queue, ...items];

    renderQueue();
}
