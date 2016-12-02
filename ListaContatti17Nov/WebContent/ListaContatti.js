function Contatto(nome,cognome,numero,mail) 
{
	alert("CONTATTO()");
	this.nome=nome;
	this.cognome=cognome;
	this.numero=numero;
	this.mail=mail;
}

var listaContatti= new Array();

function aggiungi(contatto)
{
	alert("AGGIUNGOLISTA()");
	listaContatti.push(contatto);
	aggiungiHtml(contatto);
}

function aggiungiHtml(contatto)
{
	alert("AGGIUNGOHTML()");
	var tBody=document.getElementById("tbody");
	var ultimaRiga = document.getElementById("ultimaRiga");
	
	var tr = document.createElement("tr");
	
	var tdNome=document.createElement("td");
	tdNome.textContent = contatto.nome;
	var tdCognome=document.createElement("td");
	tdCognome.textContent = contatto.cognome;
	var tdNumero=document.createElement("td");
	tdNumero.textContent = contatto.numero;
	var tdMail=document.createElement("td");
	tdMail.textContent = contatto.mail;
	
	
	tr.appendChild(tdNome);
	tr.appendChild(tdCognome);
	tr.appendChild(tdNumero);
	tr.appendChild(tdMail);
	tBody.insertBefore(tr,ultimaRiga);
	
	
}

function creaContatto()
{
	var nome=document.getElementById("Nome").value;

	var cognome=document.getElementById("Cognome").value;
	var numero=document.getElementById("Numero").value;
	var mail=document.getElementById("Mail").value;
	
	alert("CREOCONTATTO()");
	return new Contatto(nome,cognome,numero,mail);
}

function init()
{
	alert("init()");
	var bottoneAggiungi = document.getElementById("aggiungiBottone");
	bottoneAggiungi.addEventListener('click',aggiungi(creaContatto()));
}

function remove(nome,cognome,numero,mail)
{
	
}

function search(nome,cognome,numero,mail)
{

}