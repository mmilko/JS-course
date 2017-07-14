function getBoard(n) {
    let html = '<div class="chessboard">\n';

    for (let row = 0; row < n; row++) {
        html += '  <div>\n';
        for (let col = 0; col < n; col++) {
            let color = (row + col) % 2 == 0 ? 'black' : 'white';
            html += `    <span class="${color}"></span>\n`;
        }
        html += '  </div>\n';
    }

    html += '</div>';
    return html;
}
