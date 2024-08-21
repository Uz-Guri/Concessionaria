const db = [];

let nextId = 1;

const model = (body, id = nextId++) => {
    if(body.tipo != undefined && 
        body.tipo != "") {
            return {
            id,
            tipo: body.tipo,
        };
    }
};

const store = body => {
    const novo = model(body)

    if(novo) {
        db.push(novo)

        return 201;
    } else {
        return 418;
    }
};

const index = () => db;

const show = (id) => db.find((el) => el.id == id);

const update = (id, body) => {
    const index = db.findIndex((el) => el.id == id);
    const novo = model(body, parseInt(id));
    if (index != -1 && novo) {
        db[index] = novo;
        return 200;
    } else {
        return 418;
    }
};

const destroy = (id) => {
    const index = db.findIndex((el) => el.id == id);

    if (index != -1) {
        db.splice(index, 1);
        return 200;
    } else {
        return 404;
    }
};

module.exports = {
    store,
    index,
    show,
    update,
    destroy
}