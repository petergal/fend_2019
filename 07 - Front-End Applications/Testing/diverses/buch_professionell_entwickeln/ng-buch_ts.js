var Foo = /** @class */ (function () {
    function Foo() {
        this._bar = false;
    }
    Object.defineProperty(Foo.prototype, "bar", {
        get: function () {
            return this._bar;
        },
        set: function (baz) {
            this.bar = baz;
        },
        enumerable: true,
        configurable: true
    });
    return Foo;
}());
var foo = new Foo();
console.log(foo.bar);
foo.bar = true;
console.log(foo.bar);
//# sourceMappingURL=example1.js.map
