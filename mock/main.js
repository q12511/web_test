const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// 背景を塗りつぶす関数
function drawBackground() {
    ctx.fillStyle = '#add8e6'; // ライトブルー
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#000';
    ctx.strokeRect(0, 0, 50, 50);
}

// 初期背景を描画
drawBackground();

// クリックイベントを追加
canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    console.log(`Clicked at (${x}, ${y})`);

    // 特定の範囲を判定 (例: 中央に四角形の範囲を設定)
    if (x > 500 && x < 780 && y > 300 && y < 420) {
        // 書き換える処理
        ctx.clearRect(0, 0, canvas.width, canvas.height); // 画面をクリア
        ctx.fillStyle = '#ffa07a'; // ライトコーラル
        ctx.fillRect(0, 0, canvas.width, canvas.height); // 新しい背景
        ctx.font = '48px Arial';
        ctx.fillStyle = '#000';
        ctx.fillText('Screen Updated!', canvas.width / 2 - 150, canvas.height / 2); // 中央にメッセージ
    } else if (x > 0 && x < 50 && y > 0 && y < 50) {
        // 初期背景を描画
        drawBackground();
    } else {
        // 他の場所をクリックした場合、小さい円を描画
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fillStyle = '#ff0000';
        ctx.fill();
        ctx.closePath();
    }
});
