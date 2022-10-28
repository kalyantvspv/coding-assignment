// header(Access-Control-Allow-Origin : *);


const api_url = "http://api.nobelprize.org/v1/prize.json";
async function func(){
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data.prizes);

    const val = data.prizes[0];
    var yea = document.getElementById("input1").value;
    var categor = document.getElementById("input2").value;

    for(var i=0;i<val.length;i++)
    {
        if(val.year == yea  && val.category==categor)
        {
            const members = val[i].laureates;
            for(var j=0;j<members.length;j++)
            {
                const sn = members[j].surname;
                const fn = members[j].firstname;
                const nam = sn+" "+fn;
                 
                const para = document.createElement("p");
                const node = document.createTextNode(nam);
                para.appendChild(node);

                const element = document.getElementById("added");
                element.appendChild(para);
            }
        }
    }

}
func();