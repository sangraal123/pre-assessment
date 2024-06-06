var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function assessment1() {
    // 上部ヘッダー行を作成
    var header = __spreadArray(["X"], __read(Array.from({ length: 12 }, function (_, i) { return (i + 1).toString(); })), false);
    console.log("".concat(header[0].padStart(2, ' '), " ").concat(header.slice(1).map(function (i) { return i.toString().padStart(3, ' '); }).join(' ')));
    // かけ算表の各行を作成
    for (var row = 1; row <= 12; row++) {
        // 行ヘッダーを開始
        var rowString = row.toString().padStart(2, ' ');
        for (var col = 1; col <= 12; col++) {
            // 各列を適切なスペースで表示
            rowString += " ".concat(String(row * col).padStart(3, ' '));
        }
        console.log(rowString);
    }
}
// 関数を呼び出してかけ算表を表示
assessment1();
