//your JS code here. If required.
function neeraj(){
	for(let i=1; i<=20; i++){
		if(i%3==0){
		if(i%5==0){
				alert("FizzBuzz");
			}else{
			alert("Fizz");
			}
			
		}else if(i%5==0){
			alert("Buzz")
		}else{
			alert(i);
		}
	}
}
neeraj();