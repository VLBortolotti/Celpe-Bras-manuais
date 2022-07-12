// Pegando os manuais por seu id 
const aplicador = document.getElementById("aplicador");
const candidato = document.getElementById("candidato");
const examinado = document.getElementById("examinado");
const guias = document.getElementById("guias");
const cartilha = document.getElementById("cartilha");
const documento = document.getElementById("documento");
const caderno = document.getElementById("caderno");

const manuaisLista = [aplicador, candidato, examinado, guias, cartilha, documento, caderno];

// Pegando os resultados por seu id
const resultadoAplicador = document.getElementById("resultado-aplicador");

const resultadoCandidato = document.getElementById("resultado-candidato");

const resultadoExaminado = document.getElementById("resultado-examinado");

const resultadoGuias = document.getElementById("resultado-guias");

const resultadoCartilha = document.getElementById
("resultado-cartilha");

const resultadoDocumento = document.getElementById("resultado-documento");

const resultadoCaderno = document.getElementById("resultado-caderno");

const resultadosLista = [resultadoAplicador, resultadoCandidato, resultadoExaminado, resultadoGuias, resultadoCartilha, resultadoDocumento, resultadoCaderno];

// funcao para tornar todos os outros manuais inativos
function manuaisInactive() {
    for (manual in manuaisLista) {
        manuaisLista[manual].classList.remove('manual-active');
    }
}

function resultadoActive() {
    for (resultado in resultadosLista) {
        resultadosLista[resultado].classList.add('resultado-inactive');
    }
}

// Exibindo o resultado de acordo com manual clicado
function exibirResultado(manual) {
    manuaisInactive()
    manual.classList.add('manual-active');

    // pegando o resultado pelo id
    let resultadoId = document.getElementById(`resultado-${manual.getAttribute('id')}`);

    resultadoActive();

    // e retirando a classe inactive
    resultadoId.classList.remove('resultado-inactive');
}

exibirResultado(aplicador);