var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var Zippy = (function () {
    function Zippy() {
        this.visible = false;
    }
    Zippy.prototype.toggle = function () {
        this.visible = !this.visible;
    };
    Zippy = __decorate([
        angular2_1.Component({
            selector: 'zippy',
            template: "\n\t\t<div class=\"zippy\">\n\t\t\t<div class=\"zippy_title\" (click)=\"toggle()\">\n\t\t\t\t{{ visible ? '&blacktriangledown;' : '&blacktriangleright;'}} {{title}}\n\t\t\t</div>\n\t\t\t<div class=\"zippy_content\" [hidden]=\"!visible\">\n\t\t\t\t<br/>\n\t\t\t\t<p>This is hard coded content BEFORE transcluded content.</p>\n\t\t\t\t<ng-content></ng-content>\n\t\t\t\t<p>This is hard coded content AFTER transcluded content.</p>\n\t\t\t</div>\n\t",
            styles: ["\n\t\t.zippy {\n  \t\t\t//background: red;\n\t\t}\n\t\t\n\t\t.zippy_title {\n\t\t\tbackground: blue; \t\n\t\t}\n\t\t\n\t\t.zippy_content {\n\t\t\tbackground: green\n\t\t}\n\t\t\n\t"
            ],
            properties: ['title']
        }), 
        __metadata('design:paramtypes', [])
    ], Zippy);
    return Zippy;
})();
exports.Zippy = Zippy;
