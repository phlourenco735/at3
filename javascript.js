function onClick(){
    let item = ["elemento", "peso", "volume", "latitude", "longitude", "id"];
    item[0] = document.getElementById('elemento').value;
    item[1] = document.getElementById('peso').value;
    item[2] = document.getElementById('volume').value;
    item[3] = document.getElementById('latitude').value;
    item[4] = document.getElementById('longitude').value;
    item[5] = document.getElementById('id').value;

    label.innerHTML = "Obrigado por suas respostas, clique em lista para avançar!"

    console.log(item);
}