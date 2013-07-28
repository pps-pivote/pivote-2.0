function browserSupportsWebWorkers() {
    return typeof window.Worker === "function";
}
