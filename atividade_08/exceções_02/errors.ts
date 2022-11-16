export class AplicacaoError extends Error {
    constructor (message: string) {
        super(message);
    }
}

export class ContaInexistenteError extends AplicacaoError {
    constructor (message: string) {
        super(message);
    }
}

export class SaldoInsuficienteError extends AplicacaoError {
    constructor (message: string) {
        super(message);
    }
}

export class ValorInvalidoError extends AplicacaoError {
    constructor (message: string) {
        super(message);
    }
}

export class ContaJaExistente extends AplicacaoError {
    constructor (message: string) {
        super(message);
    }
}

export class PoupancaInvalidaError extends Error {
    constructor (message: string) {
        super(message);
    }
}

export class InputError extends AplicacaoError {
    constructor (message: string) {
        super(message);
    }
}

export class WrongAccount extends AplicacaoError {
    constructor (message: string) {
        super(message);
    }
}