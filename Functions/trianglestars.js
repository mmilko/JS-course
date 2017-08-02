function printTriangle(count) {
    for (let i = 1; i <= count; i++)
        printStars(i);
    for (let i = count - 1; i >= 1; i--)
        printStars(i);
    
    function printStars(n) {
        console.log('*'.repeat(n));
    }
}
