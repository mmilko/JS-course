function aggregate(arr) {
    function aggregate(elements, initial, func) {
        for (let e of elements) {
            initial = func(initial, e);
        }
        return initial;
    }

    console.log(aggregate(arr, 0, (a, b) => a + b));
    console.log(aggregate(arr, 0, (a, b) => a + 1 / b));
    console.log(aggregate(arr, '', (a, b) => a + b));
}
