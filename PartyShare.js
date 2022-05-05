//var shareBtns= document.querySelectorAll('.share');
var shareBtns= document.querySelectorAll('.social-action-bar__share')

function t(min, max){
	min*=1000;
	max*=1000;
	return Math.floor(Math.random() * (max-min)) + min;
}

function posh(n){
	n.click(); 
	document.querySelectorAll('a[data-pa-name="share_poshmark_poshparty"]')[0].click();
}

var tim = 0;
var c = 0;

for (let step = 0; step < 50; step++) {
shareBtns.forEach((btn, i) => {
	setTimeout(() => {
		btn.click();
		},tim);
	tim+=t(1,5);
	setTimeout(() => {
		document.querySelectorAll('a[data-et-name="share_poshmark_poshparty"]')[0].click();
		c+=1;
		console.log(c);
		},tim)
		tim+=t(1,30);
});
}


