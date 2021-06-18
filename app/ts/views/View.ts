abstract class View<T> {

    private _elemento: JQuery;

    constructor(seletor: string) {

        this._elemento = $(seletor);
    }

    update(model: T) {
        this._elemento.html(this.template(model));
    }

    /*template(model: T): string {
        throw new Error('Você deve implementar o método template');
    }*/

    abstract template(model: T): string;
}