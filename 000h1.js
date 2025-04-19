// Constantes
const valoresAtividade = {
    //                          19.04.2025 -- ALT001:Alterado para +1 em todas sub.
    atvd_vs_selvagem: 3,
    atvd_vs_npc: 4,
    // atvd_midiatico: 4,       19.04.2025 -- ALT001:Não existe mais
    atvd_cotidiano: 6,
    atvd_emprego: 4,
    atvd_craft: 4,
    atvd_treinamento: 5
};

// const valoresSubAtividade = {
//     satvd_nenhum: 0,
//     satvd_cuidados: 1,
//     satvd_item: 1,
//     satvd_interacoes: 2,
//     satvd_colheita: 1
// };

const requisitosExp = [200, 400, 700, 1200, 'ထ'];

// Variáveis
var v_multiplicador;
var v_atividade;
var v_resultado;

var v_rank_int;
var v_rank;
var v_nova_exp;
var v_exp_max;
var v_check_novo_nivel = 0;

function calc_atividade() {
    // Procura valor da atividade
    let lv_atividadeSelecionada = document.querySelector('input[name="atividade"]:checked').id;
    let lv_valorAtividade = valoresAtividade[lv_atividadeSelecionada];

    // Procura valor da sub-atividade
    // let lv_subAtividadeSelecionada = document.querySelector('input[name="subatividade"]:checked').id;
    // let lv_valorSubAtividade = valoresSubAtividade[lv_subAtividadeSelecionada];

    v_atividade = lv_valorAtividade;
}

function calc_multiplicadores() {
    let lv_check_civil = document.getElementById("p_civil").checked;
    let lv_check_pericia = document.getElementById("p_pericia").checked;
    let lv_check_outro = document.getElementById("p_outro").checked;

    // Caso o campo esteja selecionado, adiciona no multiplicador
    if (lv_check_civil === true) {
        // v_multiplicador = v_multiplicador * 2;       19.04.2025 -- ALT001:Reduzido para 1.4
        v_multiplicador = v_multiplicador * 1.4;
    }

    if (lv_check_pericia === true) {
        v_multiplicador = v_multiplicador * 1.3;
    }

    if (lv_check_outro === true) {
        v_multiplicador = v_multiplicador * document.getElementById("p_outro_valor").value;
    }
}

function calc_valor_final() {
    let lv_check_personalizado = document.getElementById("p_personalizado").checked;
    if (lv_check_personalizado === true) {
        v_resultado = document.getElementById("p_personalizado_valor").value;
        v_resultado = Number(v_resultado);

    } else {
        v_resultado = v_multiplicador * v_atividade;
    }

    // Arredonda resultado final
    v_resultado = Math.round(v_resultado);

    // Recupera rank atual
    let lv_rankSelect = document.getElementById('ps_rank');
    let lv_rank = parseInt(lv_rankSelect.value);

    // Recupera experiência atual
    let lv_expAtual = parseInt(document.getElementById('p_exp_atual').value);


    // Calcula experiência restante
    let lv_expNecessaria = requisitosExp[lv_rank];
    let lv_expRestante = lv_expNecessaria - (lv_expAtual + v_resultado);

    // Calcula novo rank, se valor positivo [ 100, 300, 600, 1500, 0 ]
    if (lv_expRestante <= 0) {
        v_check_novo_nivel = 1;

        while ((lv_expRestante <= 0) && (lv_rank < 4)) {
            v_nova_exp = lv_expRestante * -1;

            lv_rank = lv_rank + 1;
            v_exp_max = requisitosExp[lv_rank];
            lv_expRestante = v_exp_max - v_nova_exp;
        }


        switch (lv_rank) {
            case 0:
                v_rank = 'Rank D';
                break;
            case 1:
                v_rank = 'Rank C';
                break;
            case 2:
                v_rank = 'Rank B';
                break;
            case 3:
                v_rank = 'Rank A';
                break;
            case 4:
                v_rank = 'Rank S';
                break;
        }
    } else {
        v_nova_exp = lv_expAtual + v_resultado;
        v_exp_max = lv_expNecessaria;
        switch (lv_rank) {
            case 0:
                v_rank = 'Rank D';
                break;
            case 1:
                v_rank = 'Rank C';
                break;
            case 2:
                v_rank = 'Rank B';
                break;
            case 3:
                v_rank = 'Rank A';
                break;
            case 4:
                v_rank = 'Rank S';
                break;
        }
    }
}


function limpa_variaveis() {
    v_check_novo_nivel = 0;
    v_multiplicador = 1;
    v_atividade = 0;
}

function calculaNivel() {
    document.getElementById('export').style.display = 'block';
    limpa_variaveis();
    calc_atividade();
    calc_multiplicadores();
    calc_valor_final();

    document.getElementById("exp_expganho").innerHTML = "Recebeu " + v_resultado + " de exp.";
    if (v_check_novo_nivel === 1) {
        document.getElementById("exp_nivelatual").innerHTML = "Subiu para o " + v_rank + " (" + v_nova_exp + "/" + v_exp_max + ")";
    } else {
        document.getElementById("exp_nivelatual").innerHTML = "Mantém-se  no " + v_rank + " (" + v_nova_exp + "/" + v_exp_max + ")";
    }
}
