function validaOrdem(){
	if (document.frmordem.txtnome.value==""){
		alert("Preencha o campo Nome!");
		document.frmordem.txtnome.focus();
		return false;
	}else if (document.frmordem.selcla.value==""){
		 alert("Preencha o campo Classe!");
		 document.frmordem.selcla.focus();
		 return false;
	}else if (document.frmordem.txtfone.value==""){
		 alert("Preencha o campo Telefone!");
		 document.frmordem.txtfone.focus();
		 return false;
	}else if (document.frmordem.txtexp.value==""){
		 alert("Preencha o campo Experiencia!");
		 document.frmordem.txtexp.focus();
		 return false;
	}return true;
}