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

function loadSkills(){
  
            skills = ['HTML', 'CSS', 'JavaScript', 'Java', 'Python','C++', "C#", 'ROS', 'Tensorflow']
            points = ['100', '80', '80', '70', '70', '50', '70','50','50']
            // Bar chart
            new Chart(document.getElementById("bar-chart"), {
                type: 'horizontalBar',
                data: {
                    labels: skills,
                    datasets: [
                        {
                        backgroundColor: 'rgba(91, 155, 213, 0.6)',
                        data: points
                        }
                    ]
                },
                options: {
                    legend: { display: false },
                    title: {
                        display: false,
                    
                    },
                    scales: {
                        xAxes: [{
                                    gridLines: {
                                        display: false,
                                    },
                                    ticks: {
                                        suggestedMin: 0,
                                        suggestedMax: 100,
                                    
                                        }
                                }],
                        yAxes: [{
                            gridLines: {
                                display: false,
                            },
                            ticks: {
                                fontSize: 15,
                                fontStyle: 'bold'
                            }
                            
                        }]
                    }
                }
            });
    
}