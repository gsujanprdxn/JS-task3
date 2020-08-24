/* Author: 

*/
class Movies{
    constructor(name,release_date,actor_name,producer_name){
        this.name = name;
        this.release_date = release_date;
        this.actor_name = actor_name;
        this.producer_name = producer_name;
    }
}

var movie1 = new Movies('abc','1/2/2020','srk','asas')
var movie2 = new Movies('axccs','2/2/2020','salman','azczsas')
var movie3 = new Movies('axzczcs','3/2/2020','Amir','asazcs')
var movie4 = new Movies('agggxs','4/2/2020','kishor','ggg')
var movie5 = new Movies('axfgs','5/2/2020','Sunil','asrtas')
var movie6 = new Movies('axhfs','6/2/2020','navazuddin','ardsas')
var movie7 = new Movies('axhfsdsdd','7/2/2020','anand','ardsas')
var movie8 = new Movies('axhfs','8/2/2020','ranbir','ardsas')
var movie9 = new Movies('axhfs','9/2/2020','nikhil','ardsas')
var movie10 = new Movies('axhfs','10/2/2020','sohel','ardsas')

var a = []
var arr =[movie1,movie2,movie3,movie4,movie5,movie6,movie7,movie8,movie9,movie10]

for(i=0;i<arr.length;i++){
    a.push(arr[i])
}
console.log(a)

function mySearchFunction() {
    input = document.getElementById("myInput");
    name1 = input.value.toUpperCase();
    console.log(name1)
    dateinput = document.getElementById("dateInput").value;
    
    var findname = function(mname,name){
        var index = mname.findIndex(function(x){
            return x.name.toLowerCase() === name.toLowerCase()
        })
        return mname[index]
    }
    var printme = findname(a,name1)
    console.log(printme)

    var find_date = function(r_date,date){
        var index = r_date.findIndex(function(x){
            return x.release_date === date
        })
        return r_date[index]
    }
    var printdate = find_date(a,dateinput)
    console.log(printdate)
    if(printme){
    document.write("name:"+printme.name+"<br>")
    document.write("release_date:"+printme.release_date+"<br>")
    document.write("actor_name:"+printme.actor_name+"<br>")
    document.write("producer_name:"+printme.producer_name+"<br>")
    }
    document.write("name:"+printdate.name+"<br>")
    document.write("release_date:"+printdate.release_date+"<br>")
    document.write("actor_name:"+printdate.actor_name+"<br>")
    document.write("producer_name:"+printdate.producer_name+"<br>")

}






















