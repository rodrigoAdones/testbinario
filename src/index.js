const base = 2;

const toDecimal = (param) => {
    if (!param) {
        return 0;
    }
    const nuevoOrden = param.split("").reverse();
    const valores = nuevoOrden.map((item, index) => {
        if (item === "1") {
            return Math.pow(base, index);
        }
        return 0;
    }).reduce((acc, item) => acc + item, 0);

    return valores;
}

export {
    toDecimal
}
