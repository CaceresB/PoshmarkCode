         //var shareBtns= document.querySelectorAll('.share');

var flwBtns= document.querySelectorAll('.btn--primary')

function t(min, max){
	min*=1000;
	max*=1000;
	return Math.floor(Math.random() * (max-min)) + min;
}


var tim = 0;
var c=0;


flwBtns.forEach((btn, i) => {
	setTimeout(() => {
		btn.click();
		c+=1;
		console.log(c);
		},tim)
	tim+=t(5, 30);
});

