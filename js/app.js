    for (day in data.days){
        chart = document.querySelector("dl#"+day);
        var e = "",n="",guyHtml="";
        
        for (guy in data.days[day].guys){
            e =  Handlebars.templates["event"](data.days[day].guys[guy]);
            n = Handlebars.templates["guy"]({"name":guy});
            guyHtml +="<dt class=\"guy-"+guy+"\">" + n + "</dt><dd class=\"guy-"+guy+"\">"+e+"</dd>";
            chart.innerHTML = guyHtml;
        }

    }
    
    