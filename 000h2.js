    // Constantes
    const valoresAtividade = {
        atvd_cotidiano: 0.25,
        atvd_emprego: 0.15,
        atvd_craft: 0.20,
        atvd_treinamento: 0.15
    };

    const valoresRank = {
        0: 1, 	// Rank D
        1: 1.3, // Rank C
        2: 1.6, // Rank B
        3: 2, 	// Rank A
        4: 2.5, // Rank S
    };

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
    var v_nivel_lvlup2;
    var v_x1;
    var v_x2;
    var v_x3;
    var v_group_exp;
    var v_group_exp2;
    var v_group_exp3;
    var v_lvlloser_check1;
    var v_resultado;
    var v_resultado_1;
    var v_bugs;
    var v_count;
    var i;

    var v_nivel_lvlup;
    var v_exp_antiga;
    var v_resultadopoke;
    var v_new_expvar;
    var v_new_lvlvar;

    var v_multiplicador;

    function exp_group() {

		v_group_exp = exp_up[v_nivel_lvlup-1];

		// // Cálculo para o próximo nível
        // v_nivel_lvlup2 = Number(v_nivel_lvlup) + 1;
        // v_x1 = (Math.pow(v_nivel_lvlup2, 3) * 6) / 5;
        // v_x2 = Math.pow(v_nivel_lvlup2, 2) * 15;
        // v_x3 = 100 * v_nivel_lvlup2;
        // v_group_exp = v_x1 - v_x2 + v_x3 - 140;

        // // Cálculo para o nível atual
        // v_x1_atual = (Math.pow(v_nivel_lvlup, 3) * 6) / 5;
        // v_x2_atual = Math.pow(v_nivel_lvlup, 2) * 15;
        // v_x3_atual = 100 * v_nivel_lvlup;
        // v_group_exp_atual = v_x1_atual - v_x2_atual + v_x3_atual - 140;
		
        // // Diferença entre os níveis
        // v_group_exp = v_group_exp - v_group_exp_atual;
        // v_group_exp = Math.round(v_group_exp);

        // // Ajuste para níveis específicos (múltiplos de 4 e 9)
        // var v_bugs = [4, 9, 14, 19, 24, 29, 34, 39, 44, 49, 54, 59, 64, 69, 74, 79, 84, 89, 94, 99];
        // var v_count = v_bugs.length;
        // for (var i = 0; i < v_count; i++) {
        //     if (v_nivel_lvlup == v_bugs[i]) {
        //         v_group_exp = v_group_exp + 1;
        //     }
        // }
    }

    function lvl_checking() {
        if (v_nivel_lvlup >= v_lvlloser_check1) {
            v_resultado_1 = Number(v_resultado_1) / 2;
            v_resultado_1 = Number(v_resultado_1);
        }
    }

    function limpa_variaveis() {
        v_multiplicador = 1;
    }

    function calc_multiplicadores() {
        let lv_check_especialista = document.getElementById("p_especialista").checked;
        let lv_check_lucky_egg = document.getElementById("p_lucky_egg").checked;
        let lv_check_outro = document.getElementById("p_outro").checked;

        if (lv_check_especialista === true) {
            v_multiplicador = v_multiplicador * 1.5;
        }

        if (lv_check_lucky_egg === true) {
            v_multiplicador = v_multiplicador * 1.5;
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
            // Recupera rank atual
            let lv_rankSelect = document.getElementById('ps_rank');
            let lv_rank = parseInt(lv_rankSelect.value);
            let lv_valorRank = valoresRank[lv_rank];

            let lv_qtdSelect = document.getElementById('ps_qtd_pokemon');
            let lv_qtdPokes = parseInt(lv_qtdSelect.value);

            let lv_atividadeSelecionada = document.querySelector('input[name="atividade"]:checked').id;
            let lv_valorAtividade = valoresAtividade[lv_atividadeSelecionada];
            let lv_nivel_pokemon = document.getElementById("p_nivel").value;

			console.log(`Multiplicador Rank: ${lv_valorRank}`);
			console.log(`Nível pokémon: ${lv_nivel_pokemon}`);
			console.log(`Multiplicador Atividade: ${lv_valorAtividade}`);
			console.log(`MET: ${v_multiplicador}`);
            v_resultado = ((65 * lv_valorRank) * lv_nivel_pokemon * lv_valorAtividade) * v_multiplicador;
            v_resultado = v_resultado / lv_qtdPokes;
			
        }
    }

    function calculaNivel() {
        document.getElementById('export').style.display = 'block';
        limpa_variaveis();
        calc_multiplicadores();
        calc_valor_final();

        v_resultadopoke = v_resultado;
        v_nivel_lvlup = document.getElementById("p_nivel").value;
        v_exp_antiga = document.getElementById("p_exp_atual").value;

        exp_group();
        v_new_expvar = Number(v_exp_antiga);

        v_resultado_1 = Number(v_resultado);
        v_resultado_1 = Math.round(v_resultado_1);
        v_new_expvar = v_new_expvar + v_resultado_1;

        if (v_new_expvar >= v_group_exp) {
            while (v_new_expvar >= v_group_exp) {
                v_new_expvar = v_new_expvar - v_group_exp;
                v_new_lvlvar = Number(v_nivel_lvlup) + 1;
                v_nivel_lvlup = Number(v_nivel_lvlup) + 1;
                exp_group();

                document.getElementById("exp_nivelatual").innerHTML = "Recebeu " + v_resultado_1 + " de EXP.";
                document.getElementById("exp_expganho").innerHTML = "Subiu para o nível " + v_nivel_lvlup + " (" + v_new_expvar + "/" + v_group_exp + ")";
            }
        } else {
            v_new_expvar = v_new_expvar;
            v_new_lvlvar = v_nivel_lvlup;
            document.getElementById("exp_nivelatual").innerHTML = "Recebeu " + v_resultado_1 + " de EXP.";
            document.getElementById("exp_expganho").innerHTML = "Mantém-se no nível " + v_nivel_lvlup + " (" + v_new_expvar + "/" + v_group_exp + ")";
        }
    }