function valida(){
	var mensagemErro = ''
	var msgCpf = ''
	var nome = document.formulario-cadastro.nome
	var cpf = document.formulario-cadastro.cpf
	var cargo = document.formulario-cadastro.cargo
	var entrada = document.formulario-cadastro.entrada
	var saida = document.fformulario-cadastro.saida
	if(nome.value==''){
		mensagemErro +='Por favor, preencha o campo NOME\n'
		nome.focus()
	}
	if(cpf.value==''){
		mensagemErro += 'Por favor, preencha o campo CPF\n'
		nome.focus()
	}
	
	if(cargo.value==''){
		mensagemErro += 'Por favor, preencha o campo CARGO\n'
		nome.focus()
	}
	if(entrada.value==''){
		mensagemErro += 'Por favor, preencha o campo ENTRADA\n'
		nome.focus()
	}
	if(saida.value==''){
		mensagemErro += 'Por favor, preencha o campo SAÍDA\n'
		nome.focus()
	}
	
	if(mensagemErro!=''){
		alert(mensagemErro);
	} else {
		alert(enviando)
		document.formulario.submit();
	}
}