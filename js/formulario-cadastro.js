function valida(){
	var mensagemErro = ''
	var msgCpf = ''
	var nome = document.formularioCadastro.nome
	var cpf = document.formularioCadastro.cpf
	var cargo = document.formularioCadastro.cargo
	var entrada = document.formularioCadastro.entrada
	var saida = document.formularioCadastro.saida
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
		document.formularioCadastro.submit();
	}
} 