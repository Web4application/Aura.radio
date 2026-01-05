function toggleSelection(item, selected) {
    selected
        ? AuraState.selection.add(item)
        : AuraState.selection.delete(item);
}

function clearSelection() {
    AuraState.selection.clear();
    document
        .querySelectorAll("input[type=checkbox]")
        .forEach(cb => (cb.checked = false));
}
