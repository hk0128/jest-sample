import { today, isZero, hello } from ".";

const mock = new Date(1594374371110)
const spy = jest.spyOn(global, "Date").mockImplementation(() => mock)

test("現在時刻を文字列に変換した結果が返ること", () => {
    const result = today();
    const expected = new Date().toString();

    expect(result).toBe(expected);

    // 初期化
    spy.mockReset()
    spy.mockRestore()
});

test("0を渡したらtrueになること", () => {
    const result = isZero(0);
    expect(result).toBe(true);
});

test("0以外を渡したらfalseになること", () => {
    const result = isZero(1);
    expect(result).toBe(false);
});

test("0以外を渡したらfalseになること", () => {
    const result = isZero(-1);
    expect(result).toBe(false);
});

test("hello, 太郎!が返ること", () => {
    const result = hello("太郎");
    expect(result).toBe("hello, 太郎!");
});

test("空文字の場合はhello!が返ること", () => {
    const result = hello("");
    expect(result).toBe("hello!");
});
