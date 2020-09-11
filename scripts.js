function activePosition(button){
    document.getElementsByClassName("active")[0].classList.remove("active");
    button.classList.add("active");

    parent = document.getElementsByClassName("job_box")[0];
    position_array = parent.getElementsByTagName("li");
    desc_array = parent.getElementsByClassName("job_desc");
    

    current_position = -1;

    for(i = 0; i < position_array.length; i++){
        if(position_array[i].classList.contains("active")) index = i;
    }

    document.getElementsByClassName("visible")[0].classList.remove("visible");
    desc_array[index].classList.add("visible");
    
}

function skillsMouseIn(list){
    if(list.id == "python")list.textContent = "Advanced";
    
    else if(list.id == "java") list.textContent = "Advanced";
    else if(list.id == "tensorflow") list.textContent = "Intermediate";
    else if(list.id == "c#") list.textContent = "Intermediate";
    else if(list.id == "html") list.textContent = "Advanced";
    else if(list.id == "css") list.textContent = "Advanced";
    else if(list.id == "javascript")list.textContent = "Intermediate"; 
    else if(list.id == "react")list.textContent = "Beginner"; 

    if(list.textContent == "Advanced") list.style.color = "red";
    else if(list.textContent == "Intermediate") list.style.color = "yellow";
    else list.style.color = "green";
}
function skillsMouseOut(list){
    if(list.id == "python") list.textContent = "Python";
    else if(list.id == "java") list.textContent = "Java";
    else if(list.id == "tensorflow") list.textContent = "Tensorflow";
    else if(list.id == "c#") list.textContent = "C#";
    else if(list.id == "html") list.textContent = "HTML";
    else if(list.id == "css") list.textContent = "CSS";
    else if(list.id == "javascript") list.textContent = "JavaScript"; 
    else if(list.id == "react")list.textContent = "React.js"; 
    list.style.color = "white";
}

