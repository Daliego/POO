/* 1) Não podemos instanciar classes abstratas, pois elas são criadas somente para serem estendidas por um classe filha, e são utilizadas para que as classes filhas sejam obrigados a serem herdados por classes filhas, elas são as classes que nunca vão ser usadas diretamente. */

//2) Para que a compilação da ClasseConcreta ocorra sem problemas, só é necessário que se chame o método abstrato da classe mãe, porque os métodos da classe mão são obrigatoriamente implementados pela classe filha.
abstract class ClasseAbstrata {
    abstract imprimaAlgo(): void;
}

class ClasseConcreta extends ClasseAbstrata {
    imprimaAlgo(): void {}
}

//3)O editor de texto não permitirá a compilação, e avisará que falta a implementação do métodos abstrato da classe mãe.

//4)Figuras geométricas com classe abstrata.

/* abstract class FiguraGeometrica {
    base: number;
    altura: number;
    abstract area(): number;
    abstract perimetro(): number;
}

public: interface Calculos {
    base: number;
    altura: number;
    area(): number;
    perimetro(): number;
}

class Quadrado extends FiguraGeometrica {
    area(): number {
        return this.base * this.altura;
    }
    perimetro(): number {
        return this.base*2 + this.altura*2;
    }
}

class Retangulo extends FiguraGeometrica {
    area(): number {
        return this.base * this.altura;
    }
    perimetro(): number {
        return this.base*2 + this.altura*2;
    }
}

class Triangulo extends 
FiguraGeometrica {
    lado01: number;
    lado02: number;
    lado03: number;
    area(): number {
        return (this.base* this.altura)/2;
    }
    perimetro(): number {
        return this.lado01 + this.lado02 +  this.lado03;
    }
}

class Paralelogramo extends FiguraGeometrica {
    area(): number {
        return this.base * this.altura;
    }
    perimetro(): number {
        return this.base*2 + this.altura*2;
    }
} */

/* 5) Podemos porque uma classe abstrata apesar de não poder ser implementada pode dar origens a classes filhas, e por consequência, pode ser utilizada para tipar uma array de figuras geométricas, e no caso somente haverá no array classes filhas de FiguraGeométrica. */