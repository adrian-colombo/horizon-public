// Constantes
const valoresTipoCombate = {
    tpc_selvagem: 1,
    tpc_npc: 1.5,
    tpc_npc_especial: 1.8,
};

const valoresRank = {
    0: 1, 	// Rank D
    1: 1.3, // Rank C
    2: 1.6, // Rank B
    3: 2, 	// Rank A
    4: 2.5, // Rank S
};


// Base Experiência dos Pokémons Derrotados
var poke_exp = [0, 64, 142, 236, 62, 142, 240, 63, 142, 239, 39, 72, 178, 39, 72, 139, 50, 122, 216, 51, 145, 52, 155, 58, 157, 112, 218, 60, 158, 55, 128, 227, 55, 128, 227, 113, 217, 60, 177, 95, 196, 49, 159, 64, 138, 221, 57, 142, 61, 158, 53, 149, 58, 154, 64, 175, 61, 159, 70, 194, 60, 135, 230, 62, 140, 225, 61, 142, 227, 60, 137, 221, 67, 180, 60, 137, 223, 82, 175, 63, 172, 65, 163, 132, 62, 165, 65, 166, 65, 175, 61, 184, 62, 142, 225, 77, 66, 169, 65, 166, 66, 172, 65, 186, 64, 149, 159, 159, 77, 68, 172, 69, 170, 395, 87, 172, 59, 154, 64, 158, 68, 182, 161, 100, 159, 172, 173, 175, 172, 40, 189, 187, 101, 65, 184, 184, 184, 79, 71, 173, 71, 173, 180, 189, 261, 261, 261, 60, 147, 270, 306, 270, 64, 142, 236, 62, 142, 240, 63, 142, 239, 43, 145, 52, 158, 53, 137, 50, 140, 241, 66, 161, 41, 44, 42, 49, 142, 64, 165, 56, 128, 230, 221, 88, 189, 144, 225, 50, 119, 207, 72, 36, 149, 78, 42, 151, 184, 184, 81, 172, 87, 118, 142, 159, 58, 163, 145, 86, 179, 60, 158, 88, 175, 177, 175, 86, 66, 175, 50, 151, 50, 158, 144, 60, 168, 116, 170, 163, 66, 175, 243, 66, 175, 180, 163, 88, 42, 159, 61, 72, 73, 172, 608, 261, 261, 261, 60, 144, 270, 306, 306, 270, 62, 142, 239, 62, 142, 239, 62, 142, 241, 56, 147, 56, 147, 56, 72, 178, 72, 173, 44, 119, 216, 44, 119, 216, 54, 159, 54, 154, 40, 97, 233, 54, 159, 59, 161, 56, 154, 252, 53, 160, 83, 48, 126, 221, 47, 166, 38, 75, 52, 140, 133, 133, 66, 151, 239, 56, 144, 59, 166, 142, 142, 151, 151, 140, 60, 163, 61, 161, 80, 175, 61, 161, 165, 66, 165, 126, 58, 119, 234, 67, 166, 62, 172, 160, 160, 161, 161, 58, 164, 62, 164, 60, 175, 71, 173, 71, 173, 40, 189, 147, 154, 59, 159, 59, 159, 161, 159, 163, 52, 60, 168, 58, 144, 239, 69, 170, 170, 170, 116, 60, 147, 270, 60, 147, 270, 261, 261, 261, 270, 270, 302, 302, 306, 270, 270, 64, 142, 236, 62, 142, 240, 63, 142, 239, 49, 119, 218, 50, 144, 39, 134, 53, 127, 235, 56, 232, 70, 173, 70, 173, 45, 148, 148, 49, 166, 142, 66, 173, 55, 158, 65, 166, 169, 70, 174, 70, 168, 173, 177, 62, 158, 57, 66, 168, 60, 175, 58, 62, 110, 144, 170, 60, 144, 270, 78, 57, 184, 66, 184, 66, 175, 60, 172, 159, 66, 161, 69, 67, 173, 179, 241, 180, 241, 187, 243, 243, 245, 180, 184, 184, 179, 239, 241, 233, 184, 236, 168, 154, 261, 261, 261, 306, 306, 270, 302, 306, 270, 216, 270, 270, 270, 324, 270, 62, 145, 238, 62, 146, 238, 62, 145, 238, 51, 147, 55, 130, 225, 56, 156, 63, 174, 63, 174, 63, 174, 58, 170, 53, 125, 220, 59, 174, 56, 137, 232, 65, 149, 66, 178, 390, 61, 142, 227, 59, 134, 229, 163, 163, 62, 133, 225, 52, 126, 218, 56, 168, 56, 168, 161, 58, 123, 234, 63, 168, 161, 65, 170, 70, 171, 172, 61, 169, 71, 173, 71, 177, 66, 166, 66, 179, 60, 165, 58, 137, 221, 58, 130, 221, 61, 166, 61, 138, 241, 67, 166, 150, 63, 173, 59, 162, 67, 168, 165, 64, 165, 61, 171, 60, 154, 234, 55, 142, 232, 67, 170, 55, 130, 234, 64, 144, 243, 61, 177, 180, 61, 173, 165, 70, 179, 170, 61, 169, 68, 172, 172, 70, 179, 74, 179, 169, 169, 60, 147, 270, 72, 248, 261, 261, 261, 261, 261, 306, 306, 270, 297, 261, 270, 270, 63, 142, 239, 61, 143, 240, 63, 142, 239, 47, 148, 56, 134, 175, 40, 75, 185, 74, 177, 61, 130, 248, 70, 186, 70, 173, 165, 71, 163, 65, 157, 234, 68, 162, 68, 168, 58, 169, 61, 175, 64, 173, 66, 100, 58, 168, 72, 182, 72, 104, 184, 175, 151, 100, 60, 158, 270, 165, 62, 166, 67, 173, 61, 180, 49, 187, 306, 306, 270, 270, 270, 270, 64, 147, 239, 64, 147, 239, 64, 147, 239, 53, 124, 218, 51, 146, 60, 140, 225, 68, 167, 167, 61, 162, 56, 170, 61, 61, 173, 77, 175, 54, 159, 50, 168, 57, 142, 64, 168, 68, 175, 42, 102, 230, 170, 172, 172, 46, 186, 64, 168, 144, 107, 257, 154, 168, 170, 152, 167, 166, 170, 181, 60, 147, 270, 257, 257, 257, 257, 40, 140, 306, 306, 257, 257, 257, 257, 257, 257, 257, 270, 270, 270, 189, 243, 257, 257, 270, 135, 270, 62, 147, 265, 62, 147, 265, 62, 147, 265, 55, 161, 49, 128, 248, 36, 117, 253, 49, 159, 50, 161, 122, 172, 57, 170, 54, 172, 48, 144, 255, 52, 170, 170, 63, 179, 166, 56, 172, 48, 176, 61, 184, 62, 168, 62, 178, 53, 130, 255, 53, 130, 255, 260, 154, 179, 177, 182, 169, 54, 173, 165, 152, 37, 166, 165, 165, 166, 153, 66, 175, 177, 177, 177, 177, 187, 54, 144, 300, 335, 335, 345, 77, 275, 300, 290, 290, 290, 290, 250, 0, 0, 0, 0, 0, 0, 0, 62, 144, 265, 62, 144, 265, 62, 144, 265, 51, 171, 42, 141, 42, 158, 48, 123, 245, 61, 165, 62, 167, 52, 124, 255, 146, 56, 124, 250, 51, 263, 263, 54, 173, 56, 172, 68, 177, 58, 170, 55, 168, 67, 180, 158, 61, 170, 54, 165, 51, 168, 59, 133, 253, 49, 149, 243, 63, 160, 60, 175, 175, 240, 70, 184, 58, 171, 175, 67, 182, 167, 265, 166, 268, 151, 260, 182, 275, 285, 285, 285, 285, 285, 285, 285, 285, 285, 285, 285, 285, 64, 148, 300, 60, 275, 285, 285, 285, 285, 295, 295, 335, 335];

var exp_up = [
    0, 5, 17, 38, 68, 107, 154, 209, 274, 347,
    428, 518, 617, 725, 841, 966, 1099, 1241, 1392, 1552,
    1720, 1896, 2081, 2275, 2478, 2689, 2909, 3137, 3374, 3620,
    3875, 4138, 4409, 4690, 4979, 5276, 5582, 5897, 6221, 6553,
    6894, 7243, 7601, 7968, 8344, 8728, 9120, 9521, 9931, 10350,
    10777, 11213, 11657, 12110, 12572, 13043, 13522, 14009, 14506, 15011,
    15524, 16046, 16577, 17117, 17665, 18222, 18787, 19361, 19944, 20536,
    21136, 21744, 22361, 22987, 23622, 24265, 24917, 25577, 26246, 26924,
    27611, 28306, 29009, 29722, 30443, 31172, 31910, 32657, 33413, 34177,
    34950, 35731, 36521, 37320, 38128, 38944, 39768, 40601, 41443, 42294
];

// Variáveis
var v_nivel_lvlup;
var lv_nivel_lvlup2;
var v_group_exp;
var v_group_exp2;
var v_group_exp3;
var v_lvlloser_check1;
var v_resultado;
var v_resultado_1;
var v_base_exp;

var v_nivel_lvlup;
var v_exp_antiga;
var v_new_expvar;
var v_new_lvlvar;

var v_check_personalizado;

var v_multiplicador;
var v_multiplicador2;
var v_multiplicador3;
var v_resultado_poke1;
var v_resultado_poke2;
var v_resultado_poke3;

function exp_group(v_nivel_lvlup) {
    return exp_up[v_nivel_lvlup - 1];
}


function lvl_checking() {
    if (v_nivel_lvlup >= v_lvlloser_check1) {
        v_resultado_1 = Number(v_resultado_1) / 2;
        v_resultado_1 = Number(v_resultado_1);
    }
}


function limpa_variaveis() {
    v_multiplicador = 1;
    v_multiplicador2 = 1;
    v_multiplicador3 = 1;
}


function calc_multiplicadores_personagem() {
    let lv_check_pericia1 = document.getElementById("p_pericia1").checked;
    // let lv_check_pericia2 = document.getElementById("p_pericia2").checked;
    let lv_check_outro = document.getElementById("p_outro").checked;

    if (lv_check_pericia1 === true) {
        v_multiplicador = v_multiplicador * 1.2;
    }

    // if (lv_check_pericia2 === true) {
    //     lv_check_pericia2 = v_multiplicador * 1.5;
    // }

    if (lv_check_outro === true) {
        v_multiplicador = v_multiplicador * document.getElementById("p_outro_valor").value;
    }
}


function calc_multiplicadores_poke() {
    let lv_check_especialista = document.getElementById("p_especialista").checked;
    let lv_check_lucky_egg = document.getElementById("p_lucky_egg").checked;
    let lv_check_especialista_2 = document.getElementById("p_especialista2").checked;
    let lv_check_lucky_egg_2 = document.getElementById("p_lucky_egg2").checked;
    let lv_check_especialista_3 = document.getElementById("p_especialista3").checked;
    let lv_check_lucky_egg_3 = document.getElementById("p_lucky_egg3").checked;

    if (lv_check_especialista === true) {
        v_multiplicador = v_multiplicador * 1.5;
    }

    if (lv_check_lucky_egg === true) {
        v_multiplicador = v_multiplicador * 1.5;
    }

    if (lv_check_especialista_2 === true) {
        v_multiplicador2 = v_multiplicador2 * 1.5;
    }

    if (lv_check_lucky_egg_2 === true) {
        v_multiplicador2 = v_multiplicador2 * 1.5;
    }

    if (lv_check_especialista_3 === true) {
        v_multiplicador3 = v_multiplicador3 * 1.5;
    }

    if (lv_check_lucky_egg_3 === true) {
        v_multiplicador3 = v_multiplicador3 * 1.5;
    }

}


function exp_base() {
    var e = document.getElementById('ps_especie_pokemon');
    var pokeid = e.value;
    v_base_exp = poke_exp[pokeid];
}


function calc_exp_recebida() {
    v_check_personalizado = document.getElementById("p_personalizado").checked;
    if (v_check_personalizado === true) {
        v_resultado = document.getElementById("p_personalizado_valor").value;
        v_resultado = Number(v_resultado);
    } else {
        // Recupera rank atual
        let lv_rankSelect = document.getElementById('ps_rank');

        let lv_qtdSelect = document.getElementById('ps_qtd_pokemon');
        let lv_qtdPokes = parseInt(lv_qtdSelect.value);

        let lv_TCSelecionada = document.querySelector('input[name="tp_combate"]:checked').id;
        let lv_valorTipoCombate = valoresTipoCombate[lv_TCSelecionada];
        let lv_nivel_pokemon = document.getElementById("p_nivel_derrotado").value;


        v_resultado = (v_base_exp * lv_nivel_pokemon / 5) * lv_valorTipoCombate * v_multiplicador;
        v_resultado = v_resultado / lv_qtdPokes;

    }
}


function calculaNivel() {
    document.getElementById('export').style.display = 'block';
    // document.getElementById('export_button').style.display = 'block';
    limpa_variaveis();
    calc_multiplicadores_personagem();
    exp_base()
    calc_exp_recebida();

    v_resultado_1 = Math.round(Number(v_resultado));

    console.log(v_check_personalizado);

    if (!v_base_exp && v_check_personalizado === false) {
        document.getElementById("exp_recebida").innerHTML = "Selecione um pokémon ou insira a exp. personalizada!";
    } else {
        document.getElementById("exp_recebida").innerHTML = v_resultado_1 + " de EXP.";
    }

}


function calc_exp_pokemon() {
    v_resultado_poke1 = v_resultado * v_multiplicador;
    v_resultado_poke2 = v_resultado * v_multiplicador2;
    v_resultado_poke3 = v_resultado * v_multiplicador3;
}


function calculaExp() {

    if (!v_base_exp) {
        document.getElementById("exp_nivelatual").innerHTML = "Calcule a experiência ganha primeiro!";
    } else {
        limpa_variaveis();
        calc_multiplicadores_poke();
        calc_exp_pokemon();

        v_nivel_lvlup = document.getElementById("p_nivel").value;
        v_exp_antiga = document.getElementById("p_exp_atual").value;

        v_group_exp = exp_group(v_nivel_lvlup);

        v_new_expvar = Number(v_exp_antiga);

        v_resultado_1 = Number(v_resultado_poke1);
        v_resultado_1 = Math.round(v_resultado_1);
        v_new_expvar = v_new_expvar + v_resultado_1;


        if (v_new_expvar >= v_group_exp) {
            while (v_new_expvar >= v_group_exp) {
                v_new_expvar = v_new_expvar - v_group_exp;
                v_new_lvlvar = Number(v_nivel_lvlup) + 1;
                v_nivel_lvlup = Number(v_nivel_lvlup) + 1;
                v_group_exp = exp_group(v_nivel_lvlup);

                document.getElementById("exp_nivelatual").innerHTML = "Recebeu " + v_resultado_1 + " de EXP.";
                document.getElementById("exp_expganho").innerHTML = "Subiu para o nível " + v_nivel_lvlup + " (" + v_new_expvar + "/" + v_group_exp + ")";
            }
        } else {
            v_new_expvar = v_new_expvar;
            v_new_lvlvar = v_nivel_lvlup;
            document.getElementById("exp_nivelatual").innerHTML = "Recebeu " + v_resultado_1 + " de EXP.";
            document.getElementById("exp_expganho").innerHTML = "Mantém-se no nível " + v_nivel_lvlup + " (" + v_new_expvar + "/" + v_group_exp + ")";
        }


        // Versão com sufixo 2
        let lv_nivel_lvlup2 = document.getElementById("p_nivel2").value;
        let lv_exp_antiga2 = document.getElementById("p_exp_atual2").value;

        v_group_exp2 = exp_group(lv_nivel_lvlup2);
        let lv_new_expvar2 = Number(lv_exp_antiga2);

        let lv_resultado_2 = Number(v_resultado_poke2);
        lv_resultado_2 = Math.round(lv_resultado_2);
        lv_new_expvar2 = lv_new_expvar2 + lv_resultado_2;

        if (lv_new_expvar2 >= v_group_exp2) {
            while (lv_new_expvar2 >= v_group_exp2) {
                lv_new_expvar2 = lv_new_expvar2 - v_group_exp2;
                let v_new_lvlvar2 = Number(lv_nivel_lvlup2) + 1;
                lv_nivel_lvlup2 = Number(lv_nivel_lvlup2) + 1;
                v_group_exp2 = exp_group(lv_nivel_lvlup2);

                document.getElementById("exp_nivelatual2").innerHTML = "Recebeu " + lv_resultado_2 + " de EXP.";
                document.getElementById("exp_expganho2").innerHTML = "Subiu para o nível " + lv_nivel_lvlup2 + " (" + lv_new_expvar2 + "/" + v_group_exp2 + ")";
            }
        } else {
            let v_new_lvlvar2 = lv_nivel_lvlup2;
            document.getElementById("exp_nivelatual2").innerHTML = "Recebeu " + lv_resultado_2 + " de EXP.";
            document.getElementById("exp_expganho2").innerHTML = "Mantém-se no nível " + lv_nivel_lvlup2 + " (" + lv_new_expvar2 + "/" + v_group_exp2 + ")";
        }


        // Versão com sufixo 3
        let v_nivel_lvlup3 = document.getElementById("p_nivel3").value;
        let v_exp_antiga3 = document.getElementById("p_exp_atual3").value;

        v_group_exp3 = exp_group(v_nivel_lvlup3);
        let v_new_expvar3 = Number(v_exp_antiga3);

        let v_resultado_3 = Number(v_resultado_poke3);
        v_resultado_3 = Math.round(v_resultado_3);
        v_new_expvar3 = v_new_expvar3 + v_resultado_3;

        if (v_new_expvar3 >= v_group_exp3) {
            while (v_new_expvar3 >= v_group_exp3) {
                v_new_expvar3 = v_new_expvar3 - v_group_exp3;
                let v_new_lvlvar3 = Number(v_nivel_lvlup3) + 1;
                v_nivel_lvlup3 = Number(v_nivel_lvlup3) + 1;

                v_group_exp3 = exp_group(v_nivel_lvlup3);

                document.getElementById("exp_nivelatual3").innerHTML = "Recebeu " + v_resultado_3 + " de EXP.";
                document.getElementById("exp_expganho3").innerHTML = "Subiu para o nível " + v_nivel_lvlup3 + " (" + v_new_expvar3 + "/" + v_group_exp3 + ")";
            }
        } else {
            let v_new_lvlvar3 = v_nivel_lvlup3;
            document.getElementById("exp_nivelatual3").innerHTML = "Recebeu " + v_resultado_3 + " de EXP.";
            document.getElementById("exp_expganho3").innerHTML = "Mantém-se no nível " + v_nivel_lvlup3 + " (" + v_new_expvar3 + "/" + v_group_exp3 + ")";
        }

    }
}