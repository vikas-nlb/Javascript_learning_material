function obj(name) {
    this.name = name;
};
obj.prototype.getName = function () {
    return this.name;
}
obj.prototype.setName = function (name) {
    this.name = name;
}
let obj1 = new obj("Vikas");
