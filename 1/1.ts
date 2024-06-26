function assessment1(): void {
    // 上部ヘッダー行を作成
    const header: string[] = ["X", ...Array.from({ length: 12 }, (_, i) => (i + 1).toString())];
    console.log(`${header[0].padStart(2, ' ')} ${header.slice(1).map(i => i.padStart(3, ' ')).join(' ')}`);

    // かけ算表の各行を作成
    for (let row: number = 1; row <= 12; row++) {
        // 行ヘッダーを開始
        let rowString: string = row.toString().padStart(2, ' ');
        for (let col: number = 1; col <= 12; col++) {
            // 各列を適切なスペースで表示
            rowString += ` ${String(row * col).padStart(3, ' ')}`;
        }
        console.log(rowString);
    }
}

// 関数を呼び出してかけ算表を表示
assessment1();