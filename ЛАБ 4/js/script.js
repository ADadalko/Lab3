let counter = 0;

function f(){
    if(document.getElementById("textarea1").value != !/^[a-zA-Z0-9]+$/ && document.getElementById("textarea2").value != ""){
        for(let j = 1; j < 3; j++){
            let newp = document.createElement('p');
            newp.setAttribute('id', `p`+counter)
            document.getElementById("article").appendChild(newp);
            let newp1 = document.createElement('p');
            document.getElementById("fieldset").appendChild(newp1);
                let list = document.getElementById('list');
                let selectedOption = list.options[list.selectedIndex];
                let smth = document.getElementById(`textarea`+j).value;
                let color = document.getElementsByName('color');
                newp.insertAdjacentText("beforeend", smth);
                newp1.insertAdjacentText("beforeend", selectedOption.text + " ");
                for (let i=0;i<color.length; i++) {
                    if (color[i].checked) {
                        if(i == 0){
                            document.getElementById(`p`+counter).style.color = "red";
                            newp1.insertAdjacentText("beforeend", "RED");
                            if(selectedOption.text == "LARGE"){
                                document.getElementById(`p`+counter).style.fontSize = "3vw";
                            }else if(selectedOption.text == "MEDIUM"){
                                document.getElementById(`p`+counter).style.fontSize = "2vw";
                            }else if(selectedOption.text == "SMALL"){
                                document.getElementById(`p`+counter).style.fontSize = "1vw";
                            }
                        }else if(i == 1){
                            document.getElementById(`p`+counter).style.color = "green";
                            newp1.insertAdjacentText("beforeend", "GREEN");
                            if(selectedOption.text == "LARGE"){
                                document.getElementById(`p`+counter).style.fontSize = "3vw";
                            }else if(selectedOption.text == "MEDIUM"){
                                document.getElementById(`p`+counter).style.fontSize = "2vw";
                            }else if(selectedOption.text == "SMALL"){
                                document.getElementById(`p`+counter).style.fontSize = "1vw";
                            }
                        }else if(i == 2){
                            document.getElementById(`p`+counter).style.color = "blue";
                            newp1.insertAdjacentText("beforeend", "BLUE");
                            if(selectedOption.text == "LARGE"){
                                document.getElementById(`p`+counter).style.fontSize = "3vw";
                            }else if(selectedOption.text == "MEDIUM"){
                                document.getElementById(`p`+counter).style.fontSize = "2vw";
                            }else if(selectedOption.text == "SMALL"){
                                document.getElementById(`p`+counter).style.fontSize = "1vw";
                            }
                        }
                    }
                }
                counter++;
            }
        for(let i = 1; i<3; i++){
        document.getElementById(`textarea`+i).value ="";
        }
    }
}




function f1(){
    let color = document.getElementsByName('color');
    let list = document.getElementById('list');
    let selectedOption = list.options[list.selectedIndex];
    for(let j = 1; j < 3; j++){
    for (let i=0;i<color.length; i++) {
        if (color[i].checked) {
            if(i == 0){
                document.getElementById(`textarea`+j).style.color = "red";
                if(selectedOption.text == "LARGE"){
                    document.getElementById(`textarea`+ j).style.fontSize = "3vw";
                }else if(selectedOption.text == "MEDIUM"){
                    document.getElementById(`textarea`+ j).style.fontSize = "2vw";
                }else if(selectedOption.text == "SMALL"){
                    document.getElementById(`textarea`+ j).style.fontSize = "1vw";
                }
            }else if(i == 1){  
                document.getElementById(`textarea`+j).style.color = "green";
                if(selectedOption.text == "LARGE"){
                    document.getElementById(`textarea`+ j).style.fontSize = "3vw";
                }else if(selectedOption.text == "MEDIUM"){
                    document.getElementById(`textarea`+ j).style.fontSize = "2vw";
                }else if(selectedOption.text == "SMALL"){
                    document.getElementById(`textarea`+ j).style.fontSize = "1vw";
                }            
            }else if(i == 2){
                document.getElementById(`textarea`+j).style.color = "blue";
                if(selectedOption.text == "LARGE"){
                    document.getElementById(`textarea`+ j).style.fontSize = "3vw";
                }else if(selectedOption.text == "MEDIUM"){
                    document.getElementById(`textarea`+ j).style.fontSize = "2vw";
                }else if(selectedOption.text == "SMALL"){
                    document.getElementById(`textarea`+ j).style.fontSize = "1vw";
                }
            }
        }
    }
}
}