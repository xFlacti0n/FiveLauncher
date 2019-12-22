var contacts = [];
var messages = [{numberFrom:"123",numberTo:"1234",message:"Test", date:"12:11"},{numberFrom:"1235",numberTo:"123",message:"Test2", date:"12:11"}];
var curNumber="";
var curName="";
var myNumber = "";
var localMessages = [];
var smsList = []
var lastSms = "";
var callerNumber = "";
$(document).ready(function () {
	startTime();
});

function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	m = checkTime(m);
	document.getElementById('time').innerHTML =
	h + ":" + m;
	var t = setTimeout(startTime, 500);
}

function checkTime(i) {
	if (i < 10) {
		i = "0" + i
	};
	return i;
}

function startTime2() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	m = checkTime(m);
	document.getElementById('timeb').innerHTML = h + ":" + m;
	var t = setTimeout(startTime, 500);
	setTimeout(function () {
		startTime2()
	}, 1000);
}

function checkTime(i) {
	if (i < 10) {
		i = "0" + i
	};
	return i;
}


function openHandy(){
	var element = document.getElementsByClassName("smartphone")[0];
	document.getElementsByClassName("smartphone")[0].style.transition = "all 1s";
	element.classList.add("down");
}
function closeHandy(smshow){
	var element = document.getElementsByClassName("smartphone")[0];
	element.classList.remove("down");
}

var lastClass = "startClass";

var lastItemName = "";
var lastItemSrc = "";

$(".btn").on('click', function(){
	$(".contact ,.overlay").removeClass("hidden");
})

function sendDispatch(fraction){
	mp.trigger("client:Handy:sendDispatch", fraction);
}

function checkSite(site) {
	if (site === "startClass") {
		document.getElementsByClassName('headerb')[0].style.display = "none";
		document.getElementsByClassName('header')[0].style.display = "block";
		document.getElementsByClassName('smartphone')[0].style.transform = "rotate(90deg)";
		document.getElementsByClassName('smartphone')[0].style.top = "unset";
		document.getElementsByClassName('smartphone')[0].style.left = "16.5vw";
	} else {
		document.getElementsByClassName('header')[0].style.display = "none";
		document.getElementsByClassName('headerb')[0].style.display = "block";
		startTime2();
	}
	if (site == "smsClass") {
		/*var message = document.getElementsByClassName('message')[0].innerHTML;
		var message = (message.slice(0, 37)) + '...'
		document.getElementsByClassName('message')[0].innerHTML = message;

		var message = document.getElementsByClassName('message')[1].innerHTML;
		var message = (message.slice(0, 37)) + '...'
	document.getElementsByClassName('message')[1].innerHTML = message;*/
	}
	if (site == "webClass") {
		document.getElementsByClassName('smartphone')[0].style.transform = "rotate(0deg) scale(2.5)";
		document.getElementsByClassName('smartphone')[0].style.top = "34vw";
		document.getElementsByClassName('smartphone')[0].style.left = "37.5vw";
	}
	if (site === "contact") {
		document.getElementsByClassName('smartphone')[0].style.transform = "rotate(90deg)";
		document.getElementsByClassName('smartphone')[0].style.top = "unset";
		document.getElementsByClassName('smartphone')[0].style.left = "16.5vw";		
	}
	if (site === "sosClass") {
		document.getElementsByClassName('headerb')[0].style.display = "none";
		document.getElementsByClassName('header')[0].style.display = "block";
		document.getElementsByClassName('smartphone')[0].style.transform = "rotate(90deg)";
		document.getElementsByClassName('smartphone')[0].style.top = "unset";
		document.getElementsByClassName('smartphone')[0].style.left = "16.5vw";
  }
}

function switchSite(site) {
	checkSite(site);
	if (site !== lastClass) {
		var givenClass = document.getElementsByName(site)[0];
		givenClass.classList.remove("hidden");
		document.getElementsByName(lastClass)[0].classList.toggle("hidden");
		lastClass = site;
	}
}

function handynumber(number) {
	document.getElementsByName('callingnumber')[0].value = document.getElementsByName('callingnumber')[0].value + '' + number;
	if (document.getElementsByName('callingnumber')[0].value.length > 0) {
		document.getElementsByClassName('telkofav')[0].style.display = "none";
		document.getElementsByClassName('outputnumbers')[0].style.display = "block";
		document.getElementsByClassName('callsettings')[0].style.display = "none";
		document.getElementsByClassName('callback')[0].style.display = "block";
	}
}


function clearonenumber() {
	document.getElementsByName('callingnumber')[0].value = null;
	document.getElementsByName('callingnumber')[0].value = null;
	if (document.getElementsByName('callingnumber')[0].value.length === 0) {
		document.getElementsByClassName('telkofav')[0].style.display = "block";
		document.getElementsByClassName('outputnumbers')[0].style.display = "none";
		document.getElementsByClassName('callsettings')[0].style.display = "block";
		document.getElementsByClassName('callback')[0].style.display = "none";
	}
}

function searchFilter() {
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("searchInput");
	filter = input.value.toUpperCase();
	table = document.getElementById("searchTable");
	tr = table.getElementsByTagName("tr");
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[0];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}

function showContactAdd() {
	document.getElementsByClassName('contact')[0].style.transition = "all 1s";
	document.getElementsByClassName('contact')[0].style.left = "-16vw";
}

function back1() {
	document.getElementsByClassName('contact')[0].style.transition = "all 1s";
	document.getElementsByClassName('contact')[0].style.left = "0vw";
	document.getElementById('ac-name').value = "";
	document.getElementById('ac-number').value = "";
}

function back2() {
	document.getElementsByClassName('contact')[0].style.transition = "all 1s";
	document.getElementsByClassName('contact')[0].style.left = "0vw";
	let name =document.getElementById('ac-name').value;
	let number= document.getElementById('ac-number').value;
	var check = true;
	for (let i =0;i<contacts.length;i++){ 
		if (contacts[i].name == name || contacts[i].number == number){
			check=false;
			break;
		}
	};
	mp.trigger("cHandy-AddContact",  name, number,check);
	if ((name != "") &&(number != "") && check) {
		let obj={
			name: name,
			number: number
		};
		contacts.push(obj);
		loadContacts();
	};
	document.getElementById('ac-name').value = "";
	document.getElementById('ac-number').value = "";
	loadMessages();
}

function back3() {
	document.getElementsByClassName('contact')[0].style.transition = "all 1s";
	document.getElementsByClassName('contact')[0].style.left = "0vw";
	document.getElementsByClassName('sc-name')[0].value = "";
	document.getElementsByClassName('sc-number')[0].value = "";

	document.getElementsByClassName('headerb')[0].style.display = "block";
	document.getElementsByClassName('header')[0].style.display = "none";
}


function back4() {
	document.getElementsByClassName('contact')[0].style.transition = "all 1s";
	document.getElementsByClassName('contact')[0].style.left = "0vw";
	var check = true;
	for (let i =0;i<contacts.length;i++){ 
		if ((contacts[i].name == document.getElementsByClassName('ac-name')[1].value) || (contacts[i].number == document.getElementsByClassName('ac-number')[1].value)){
			check=false;
			break;
		}
	};
	mp.trigger("cHandy-editContact",curName,curNumber, document.getElementsByClassName('ac-name')[1].value, document.getElementsByClassName('ac-number')[1].value,check);
	if ((document.getElementsByClassName('ac-name')[1].value != "") &&(document.getElementsByClassName('ac-number')[1].value != "") && check) {
		let obj={
			name: document.getElementById('ac-name').value,
			number: document.getElementById('ac-number').value
		};
		for (let i =0;i<contacts.length;i++){ 
			if ((contacts[i].name == curName) && (contacts[i].number == curNumber)){
				let obj={
					name: document.getElementsByClassName('ac-name')[1].value,
					number: document.getElementsByClassName('ac-number')[1].value
				};
				contacts[i]= obj;
				loadContacts();
				break;
			}
		};
		loadContacts();
	};
	document.getElementById('ac-name').value = "";
	document.getElementById('ac-number').value = "";
}


function showContact(name, number) {
	document.getElementsByClassName('contact')[0].style.transition = "all 1s";
	document.getElementsByClassName('contact')[0].style.left = "15.75vw";
	document.getElementsByClassName('sc-name')[0].innerHTML = name;
	document.getElementsByClassName('sc-number')[0].innerHTML = number;

	document.getElementsByClassName('headerb')[0].style.display = "none";
	document.getElementsByClassName('header')[0].style.display = "block";

	startTime2();
	switchSite('contactClass');
	checkSite('contact');	
}

function call() {
	document.getElementsByClassName('call')[0].style.transition = "all 1s";
	document.getElementsByClassName('call')[0].style.left = "-17vw";
	document.getElementsByClassName('headerb')[0].style.display = "none";
	document.getElementsByClassName('header')[0].style.display = "block";

	var number = $("input[name=callingnumber]").val();
	//document.getElementsByClassName('c-number')[0].innerHTML = number;

	clearonenumber(1);

	startWatch();
	startPhoneCall(number);
}

function call2(number) {
	document.getElementsByClassName('call')[0].style.transition = "all 1s";
	document.getElementsByClassName('call')[0].style.left = "-17vw";
	document.getElementsByClassName('headerb')[0].style.display = "none";
	document.getElementsByClassName('header')[0].style.display = "block";

	//document.getElementsByClassName('c-number')[0].innerHTML = number;

	startWatch();
	switchSite('callClass');
	startPhoneCall(number);
}

function call3() {
	document.getElementsByClassName('call')[0].style.transition = "all 1s";
	document.getElementsByClassName('call')[0].style.left = "-17vw";
	document.getElementsByClassName('headerb')[0].style.display = "none";
	document.getElementsByClassName('header')[0].style.display = "block";

	var number = document.getElementsByClassName('sc-number')[0].innerHTML;
	//document.getElementsByClassName('c-number')[0].innerHTML = number;

	switchSite('callClass')
	startWatch();
	startPhoneCall(number);
}

function call4() {
	document.getElementsByClassName('call')[0].style.transition = "all 1s";
	document.getElementsByClassName('call')[0].style.left = "-17vw";
	document.getElementsByClassName('headerb')[0].style.display = "none";
	document.getElementsByClassName('header')[0].style.display = "block";

	var number = document.getElementsByClassName('sm-name')[0].innerHTML;
	//document.getElementsByClassName('c-number')[0].innerHTML = number;

	switchSite('callClass')
	startWatch();
	startPhoneCall(number);
}

function callBack() {
	document.getElementsByClassName('call')[0].style.transition = "all 1s";
	document.getElementsByClassName('call')[0].style.left = "0vw";
	document.getElementsByClassName('headerb')[0].style.display = "block";
	document.getElementsByClassName('header')[0].style.display = "none";

	document.getElementsByClassName('c-number')[0].innerHTML = "";

	resetWatch();
	mp.trigger("cHandy-callEnded",callerNumber);
	callerNumber = "";

}
function callBackExt() {
	document.getElementsByClassName('call')[0].style.transition = "all 1s";
	document.getElementsByClassName('call')[0].style.left = "0vw";
	document.getElementsByClassName('headerb')[0].style.display = "block";
	document.getElementsByClassName('header')[0].style.display = "none";

	resetWatch();
	callerNumber = "";

}


var timer = null;
var min_txt = document.getElementById("minutes");
var min = Number(min_txt.innerHTML);
var sec_txt = document.getElementById("seconds");
var sec = Number(sec_txt.innerHTML);

function stopTimeMilliseconds(timer) {
	if (timer) {
		clearInterval(timer);
		return timer;
	} else return timer;
}

function startTimeMilliseconds() {
	var currDate = new Date();
	return currDate.getTime();
}

function getElapsedTimeMilliseconds(startMilliseconds) {
	if (startMilliseconds > 0) {
		var currDate = new Date();
		elapsedMilliseconds = (currDate.getTime() - startMilliseconds);
		return elapsedMilliseconds;
	} else {
		return elapsedMilliseconds = 0;
	}
}

function startWatch() {
	// START TIMER
	timer = stopTimeMilliseconds(timer);
	var startMilliseconds = startTimeMilliseconds();
	timer = setInterval(function () {
		var elapsedMilliseconds = getElapsedTimeMilliseconds(startMilliseconds);
		if (sec < 10) {
			sec_txt.innerHTML = "0" + sec;
		} else {
			sec_txt.innerHTML = sec;
		}
		min_txt.innerHTML = "0" + min;
		msec = elapsedMilliseconds;
		if (min >= 59 && sec >= 59 && msec > 900) {
			timer = stopTimeMilliseconds(timer);
			return true;
		}
		if (sec > 59) {
			sec = 0;
			min++;
		}
		if (msec > 999) {
			msec = 0;
			sec++;
			startWatch();
		}
	}, 10);
}

function stopWatch() {
	// STOP TIMER
	timer = stopTimeMilliseconds(timer);
	return true;
}

function resetWatch() {
	// REZERO TIMER
	timer = stopTimeMilliseconds(timer);
	sec_txt.innerHTML = "00";
	sec = 0;
	min_txt.innerHTML = "00";
	min = 0;
	return true;
	}

function cancelCall() {
	document.getElementsByClassName('getCalled')[0].style.display = "none";
	document.getElementsByClassName('smartphone')[0].style.animation = ""
	document.getElementsByClassName('smartphone')[0].classList.remove('yougetcalled');
	mp.trigger("cHandy-callCancelled",callerNumber);
	callerNumber = "";
}

function acceptCall() {
	document.getElementsByClassName('smartphone')[0].style.animation = ""
	document.getElementsByClassName('getCalled')[0].style.display = "none";
	document.getElementsByClassName('call')[0].style.transition = "all 1s";
	document.getElementsByClassName('call')[0].style.left = "-17vw";
	document.getElementsByClassName('headerb')[0].style.display = "none";
	document.getElementsByClassName('header')[0].style.display = "block";
	document.getElementsByClassName('smartphone')[0].classList.remove('yougetcalled');

	var name = document.getElementsByClassName('gc-name')[0].innerHTML;
	document.getElementsByClassName('c-number')[0].innerHTML = name;

	clearonenumber(1);

	startWatch();

	switchSite('callClass');
	mp.trigger("cHandy-callAccepted",callerNumber);
}

function getCalled(number) {
	callerNumber = number;
	let name = ""+number;
	for (let j =0;j<contacts.length;j++){ 
		if (contacts[j].number == number){
			name = contacts[j].name;
			break;
		}
	}
	document.getElementsByClassName('getCalled')[0].style.display = "block";
	document.getElementsByClassName('gc-name')[0].innerHTML = name;
	setTimeout(function () {
		document.getElementsByClassName('smartphone')[0].classList.add('yougetcalled');
	}, 500);
}

function smsSearch() {
	var input, filter, ul, li, a, i, txtValue;
	input = document.getElementById("smssearch");
	filter = input.value.toUpperCase();
	ul = document.getElementById("smslist");
	li = ul.getElementsByTagName("li");
	for (i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName("a")[0];
		txtValue = a.textContent || a.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = "";
		} else {
			li[i].style.display = "none";
		}
	}
}

function showSmsMessages(name, number, list) {
	document.getElementsByClassName('sms')[0].style.transition = "all 0.5s";
	document.getElementsByClassName('sms')[0].style.left = "-15.7vw";
	document.getElementsByClassName('sm-name')[0].innerHTML = name;
	document.getElementsByClassName('sm-number')[0].innerHTML = number;
	for (let i = 0;i<smsList.length;i++){
		document.getElementsByClassName(smsList[i])[0].style.display = "none";
	}
	var list = "sms-" + list;
	document.getElementsByClassName(list)[0].style.display = "block";
	gotoBottom(list);
	lastSms = list;
}

function showSmsMessages2() {
	document.getElementsByClassName('sms')[0].style.transition = "all 0.5s";
	document.getElementsByClassName('sms')[0].style.left = "-15.7vw";

	var name = document.getElementsByClassName('sc-name')[0].innerHTML;
	var number = document.getElementsByClassName('sc-number')[0].innerHTML;
	if (document.getElementsByClassName(`sms-${number}`).length == 0){
		let ul = document.createElement("ul");
		ul.classList.add(`sms-${number}`);
		ul.classList.add("sms-1");
		ul.style.display= "none";
		document.getElementById("allMessages").appendChild(ul);
		smsList.push(`sms-${number}`);
	}
	switchSite('smsClass');
	showSmsMessages(name,number,number);
}

function hideSmsMessages() {
	document.getElementsByClassName('sms')[0].style.transition = "all 0.5s";
	document.getElementsByClassName('sms')[0].style.left = "0vw";
	lastSms = "";
	setTimeout(function () {
		document.getElementsByClassName('sm-number')[0].innerHTML = "";
	}, 500)
}

function editContact() {
	var name = document.getElementsByClassName('sc-name')[0].innerHTML;
	var number = document.getElementsByClassName('sc-number')[0].innerHTML;
	number = number.replace(/\s/g, '');

	curNumber=number;
	curName=name;
	document.getElementsByClassName('contact')[0].style.left = "31.3vw";
	document.getElementsByClassName('ac-name')[1].value = name;
	document.getElementsByClassName('ac-number')[1].value = number;
	loadMessages();
}

$(".btn").on('click', function(){
	$(".contact ,.overlay").removeClass("hidden");
})

function buttonSaveClicked(){
	var name = document.getElementById("name").value;
	var number = document.getElementById("nummer").value;
	mp.trigger("client:Handy:addContact", name, number);	
	back2();
}

function removeContact() {
	document.getElementsByClassName('contact')[0].style.transition = "all 1s";
	document.getElementsByClassName('contact')[0].style.left = "0vw";
	var name = document.getElementsByClassName('sc-name')[0].innerHTML;
	var number = document.getElementsByClassName('sc-number')[0].innerHTML;
	number = number.replace(/\s/g, '');
	mp.trigger("cHandy-deleteContact",name,number);
	for (let i =0;i<contacts.length;i++){ 
		if ((contacts[i].name == name) && (contacts[i].number == number)){
			contacts.splice(i,1);
			break;
		}
	};
	loadContacts();
	document.getElementById('ac-name').value = "";
	document.getElementById('ac-number').value = "";
	loadMessages();
}

function loadContacts(){
	var table = document.getElementById("searchTable");
	for (let i = (table.rows.length-1);i>2;i--){
		table.deleteRow(i); 
	}
	for (let i =0;i<contacts.length;i++){ 
	var row = table.insertRow(table.rows.length);
	var cell = row.insertCell(0);
	var img = document.createElement("img");
	img.src= "img/contacticon.png";
	img.classList.add('conPic');
	cell.appendChild(img);	
	var div = document.createElement("div");
	div.classList.add('conttext');
	div.innerHTML=`${contacts[i].name}`;
	cell.appendChild(img);
	cell.appendChild(div);
	cell.classList.add('contacttt');
	cell.onclick = function() { showContact(`${contacts[i].name}`,`${contacts[i].number}`);};
	};
};
function setupContacs(number,con){
	myNumber = number;
	contacts= JSON.parse(con);
	loadContacts();
}  

function loadMessages(){
	let added = [];
	localMessages = JSON.parse(JSON.stringify(messages));
	localMessages.reverse();
	let converations = document.getElementById("allMessages");
	let conChilds = converations.children;
	for(let i = conChilds.length-1;i>=0;i--) {
		if (conChilds[i].className.search("sms-1")!=-1){
			converations.removeChild(converations.childNodes[i]);
		};
	}

	let table = document.getElementById("smslist");
	for(let i = table.childNodes.length-1;i>=0;i--) {
		table.removeChild(table.childNodes[i]);
	}
	for (let i =0;i<localMessages.length;i++){ 
		let number = "";
		if (localMessages[i].numberTo == myNumber) {
			number = localMessages[i].numberFrom;
		}else{
			number = localMessages[i].numberTo;
		}
		if (added.includes(number)) {
			continue;
		}
		let name = ""+number;
		for (let j =0;j<contacts.length;j++){ 
			if (contacts[j].number == number){
				name = contacts[j].name;
				break;
			}
		}
		let li = document.createElement("li");
		let img = document.createElement("img");
		img.src= "img/contacticon.png";
		img.classList.add('sms-pb');
		img.onclick = function() {showContact(`${name}`,`${number}`);};
		li.appendChild(img);	

		let a = document.createElement("a");
		a.onclick = function() { showSmsMessages(`${name}`,`${number}`, `${number}`);};
		a.href = "#";

		let div = document.createElement("div");
		div.classList.add('name');
		div.innerHTML = `${name}`;
		a.appendChild(div);		

		let div2 = document.createElement("div");
		div2.classList.add('message');
		div2.innerHTML = `${localMessages[i].message}`;
		a.appendChild(div2);
		li.appendChild(a);
		table.appendChild(li);
		added.push(number);
	};
	for (let i =0;i<messages.length;i++){ 
		setupConversation(i);
	};
};

function setupConversation(i){
	let number = "";
	if (messages[i].numberTo == myNumber) {
		number = messages[i].numberFrom;
	}else{
		number = messages[i].numberTo;
	}
	if (document.getElementsByClassName(`sms-${number}`).length == 0){
		let ul = document.createElement("ul");
		ul.classList.add(`sms-${number}`);
		ul.classList.add("sms-1");
		ul.style.display= "none";
		document.getElementById("allMessages").appendChild(ul);
		smsList.push(`sms-${number}`);
	}
	let table = document.getElementsByClassName(`sms-${number}`);
	let li = document.createElement("li");
	let img = document.createElement("img");
	if (myNumber != messages[i].numberTo){
		li.classList.add('m2');
		img.classList.add('pb2');
	}else{
		li.classList.add('m1');
		img.classList.add('pb1');
	}
	img.src= "img/contacticon.png";
	li.appendChild(img);	

	let div = document.createElement("div");
	div.classList.add('mess');
	div.innerHTML = `${messages[i].message}`;
	li.appendChild(div);		

	let div2 = document.createElement("div");
	div2.classList.add('stime');
	div2.innerHTML = `${messages[i].date}`;
	li.appendChild(div2);
	table[0].appendChild(li);
};
function setupMessages(con){
	messages= JSON.parse(con);
	loadMessages();
}

function sendMessage(){
	let message = document.getElementById("sm-message").value;
	if (message =="") return;
	let number = document.getElementsByClassName('sm-number')[0].innerHTML;
	let name = document.getElementsByClassName('sm-name')[0].innerHTML;
	let d = new Date();
	let date = `${d.getDate()}.${d.getMonth()} ${d.getHours()}:${d.getMinutes()}`;
	messages.push({numberFrom:myNumber,numberTo:number,message:message,date:date});
	document.getElementById("sm-message").value="";
	mp.trigger("client:Handy:sendSMS",myNumber,number,message,date);
	loadMessages();
	showSmsMessages(name,number,number);
}
function addMessage(message){
	message = JSON.parse(message);
	messages.push(message);
	loadMessages();
	if(lastSms != ""){
		let number = document.getElementsByClassName('sm-number')[0].innerHTML;
		let name = document.getElementsByClassName('sm-name')[0].innerHTML;
		showSmsMessages(name,number,number);
	}
}
function gotoBottom(list){
	var element = document.getElementsByClassName(list)[0];
	element.scrollTop = element.scrollHeight - element.clientHeight;
}
function startPhoneCall(number){
	mp.trigger("cHandy-startPhoneCall",myNumber,number);
	callerNumber= number;
	let name = ""+number;
	for (let j =0;j<contacts.length;j++){ 
		if (contacts[j].number == number){
			name = contacts[j].name;
			break;
		}
	}
	document.getElementsByClassName('c-number')[0].innerHTML = name;
}
//loadContacts();
//loadMessages();
//openHandy();