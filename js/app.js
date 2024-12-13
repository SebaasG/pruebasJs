function verifyRoute(route){

    definirSeguridad(route);
    claseDominio(route);
 
}


function definirSeguridad(route){

    const Segura = route.substring(0,5)

    if (Segura == "https"){
        console.log("La url es segura")
    }else{
        console.log("No es segura")
    }
    console.log(Segura) 

}

function claseDominio(route){

    const web = ["com", "org", "net", "co"];
    const edu = ["edu"]
    const gob = ["gov", "gob", "gouv"];
    const mil = ["mil", "defense"]

    console.log(route)
    let otherRoute = route.split(".");
    console.log(otherRoute);
    let finalRoute = otherRoute[otherRoute.length -1]
    console.log(finalRoute.includes("com") +" este es el final")


    if (web.some(routes => finalRoute.includes(routes))) {
        console.log("Su dominio es web");
    }else if(edu.some(routes => finalRoute.includes(routes))){
        console.log("Su url hace parte a una url educativa")
    }else if(gob.some(routes => finalRoute.includes(routes))){
        console.log("Su url hace parte es gubernamental")
    }else if(mil.some(routes => finalRoute.includes(routes))) {
        console.log("Su url es militar")
    }


    console.log(web.length)


    

    
}

verifyRoute("http://github.com.govs/trainingLeader/sweetlibrary/blob/main/sweetalert2.mil.gouva")