const AuraState = {
    serverUrl: "",
    collection: "tracks",
    results: [],
    queue: [],
    selection: new Set(),
    nowPlayingIndex: -1,

    mode: "queue",          // "queue" | "live"
    liveStreamUrl: null,
    liveMetadataTimer: null
};
