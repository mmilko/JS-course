function fruitOrVeggie(word) {
    switch (word) {
        case 'banana':
        case 'kiwi':
        case 'apple':
        case 'cherry':
        case 'lemon':
        case 'grapes':
        case 'peach':
            console.log('fruit');
            break;
        case 'tomato':
        case 'pepper':
        case 'cucumber':
        case 'garlic':
        case 'onion':
        case 'parsley':
            console.log('vegetable');
            break;
        default:
            console.log('unknown');
    }
}
