const circle = {

    radius: 1,

    area: 2,
    get areaGetter() {
        return Math.PI * this.radius * this.radius;
    }
};

circle.radius = 6;
console.log(circle.areaGetter);