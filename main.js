students=[];
function submit(){
    var a1=document.getElementById("s1").value;
    var a2=document.getElementById("s2").value;
    var a3=document.getElementById("s3").value;
    var a4=document.getElementById("s4").value;
    students.push(a1);
    students.push(a2);
    students.push(a3);
    students.push(a4);
    console.log(students);
    document.getElementById("ans").innerHTML=students;
    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";
}
function sorting(){
    students.sort();
    console.log(students);
    document.getElementById("ans").innerHTML=students;
}
