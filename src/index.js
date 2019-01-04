const calc = (item, index) => {
    if (item === "1") {
        return Math.pow(base, index);
    }
    return 0;
}

const onlyZeroOrOne = item === "0" || item === "1";

const toDecimal = (param) => {
    if (!param) {
        return 0;
    }
    const separate = param.split("b");
    const toEval = separate[0];
    const base = separate[1];
    const nuevoOrden = toEval.split("").reverse();
    if (nuevoOrden.filter(onlyZeroOrOne).lenght === nuevoOrden.lenght) {
        const valores = nuevoOrden.map(calc)
            .reduce((acc, item) => acc + item, 0);
        return valores;
    }
    return 0;
}

export {
    toDecimal
}
