const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// 初期状態を定義
let state = 'initial';

// 状態ごとのクリック範囲を定義
const clickRegions = {
    initial: { x1: 200, y1: 150, x2: 400, y2: 300 },
    updated: { x1: 600, y1: 400, x2: 800, y2: 550 },
};

// 背景を描画する関数
function drawBackground() {
    if (state === 'initial') {
        ctx.fillStyle = '#add8e6'; // ライトブルー
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // メッセージ描画
        ctx.font = '36px Arial';
        ctx.fillStyle = '#000';
        ctx.fillText('Click the blue area', 450, 100);

        // 特定範囲を視覚化
        ctx.fillStyle = '#0000ff';
        ctx.fillRect(clickRegions.initial.x1, clickRegions.initial.y1, clickRegions.initial.x2 - clickRegions.initial.x1, clickRegions.initial.y2 - clickRegions.initial.y1);
    } else if (state === 'updated') {
        ctx.fillStyle = '#ffa07a'; // ライトコーラル
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // メッセージ描画
        ctx.font = '36px Arial';
        ctx.fillStyle = '#000';
        ctx.fillText('Click the orange area', 450, 100);

        // 特定範囲を視覚化
        ctx.fillStyle = '#ff4500';
        ctx.fillRect(clickRegions.updated.x1, clickRegions.updated.y1, clickRegions.updated.x2 - clickRegions.updated.x1, clickRegions.updated.y2 - clickRegions.updated.y1);
    }
}

// 初期背景を描画
drawBackground();

// クリックイベントの処理
canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    console.log(`Clicked at (${x}, ${y})`);

    // 現在の状態のクリック範囲を取得
    const region = clickRegions[state];

    // 特定範囲内をクリックした場合、状態を変更
    if (x > region.x1 && x < region.x2 && y > region.y1 && y < region.y2) {
        if (state === 'initial') {
            state = 'updated'; // 状態を変更
        } else if (state === 'updated') {
            state = 'initial'; // 状態を元に戻す
        }

        // 背景を再描画
        drawBackground();
    } else {
        // 範囲外をクリックした場合は小さい円を描画
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fillStyle = '#ff0000';
        ctx.fill();
        ctx.closePath();
    }
});
