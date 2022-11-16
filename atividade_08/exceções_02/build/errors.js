"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WrongAccount = exports.InputError = exports.PoupancaInvalidaError = exports.ContaJaExistente = exports.ValorInvalidoError = exports.SaldoInsuficienteError = exports.ContaInexistenteError = exports.AplicacaoError = void 0;
class AplicacaoError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.AplicacaoError = AplicacaoError;
class ContaInexistenteError extends AplicacaoError {
    constructor(message) {
        super(message);
    }
}
exports.ContaInexistenteError = ContaInexistenteError;
class SaldoInsuficienteError extends AplicacaoError {
    constructor(message) {
        super(message);
    }
}
exports.SaldoInsuficienteError = SaldoInsuficienteError;
class ValorInvalidoError extends AplicacaoError {
    constructor(message) {
        super(message);
    }
}
exports.ValorInvalidoError = ValorInvalidoError;
class ContaJaExistente extends AplicacaoError {
    constructor(message) {
        super(message);
    }
}
exports.ContaJaExistente = ContaJaExistente;
class PoupancaInvalidaError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.PoupancaInvalidaError = PoupancaInvalidaError;
class InputError extends AplicacaoError {
    constructor(message) {
        super(message);
    }
}
exports.InputError = InputError;
class WrongAccount extends AplicacaoError {
    constructor(message) {
        super(message);
    }
}
exports.WrongAccount = WrongAccount;
