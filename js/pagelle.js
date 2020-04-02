var getEloRun = false;
var stampaRun = false;

var giocatori = [];

//giocatori['']={"pagella":[{"data":"/04/2020", "italiano":, "storia":, "geografica":, "scienze":, "filosofia":, "matematica":, "fisica": , "latino":, "religione":, "votoFinale":0}]};
//giocatori['']={"pagella":[{"data":"02/04/2020", "italiano":, "storia":, "geografica":, "scienze":, "filosofia":, "matematica":, "fisica": , "latino":, "religione":, "votoFinale":0}]};


giocatori['88arf']={"pagella":[{"data":"22/03/2020", "votoFinale":0, "italiano":6.5, "storia":8, "geografica":6.5, "scienze":6.5, "filosofia":7.5, "matematica":6.5, "fisica":7 , "latino":8 , "religione":8.5}]};
giocatori['abatichs']={"pagella":[{"data":"29/03/2020", "italiano":6.5, "storia":7.5, "geografica":5.5, "scienze":6.5, "filosofia":6, "matematica":3.5, "fisica":5 , "latino":3.5, "religione":8, "votoFinale":0}]};
giocatori['alberto_vincenti']={"pagella":[{"data":"31/03/2020", "italiano":6.5, "storia":8, "geografica":5.5, "scienze":6, "filosofia":7.5, "matematica":6, "fisica":7.5 , "latino":7.5, "religione":8, "votoFinale":0}]};
giocatori['alfonsomelagioco']={"pagella":[{"data":"28/03/2020", "votoFinale":0, "italiano":5.5, "storia":7, "geografica":5.5, "scienze":5, "filosofia":4, "matematica":1.5, "fisica":3.5 , "latino":2, "religione":7.5}]};
giocatori['andrea71ra']={"pagella":[{"data":"29/03/2020", "italiano":7, "storia":7.5, "geografica":6, "scienze":7.5, "filosofia":7.5, "matematica":6, "fisica":6.5 , "latino":7, "religione":8.5, "votoFinale":0}]};
giocatori['babilonia']={"pagella":[{"data":"28/03/2020", "votoFinale":0, "italiano":7, "storia":7.5, "geografica":5.5, "scienze":7.5, "filosofia":7, "matematica":5, "fisica":6.5 , "latino":4, "religione":8 }]};
giocatori['bravale']={"pagella":[{"data":"23/03/2020", "votoFinale":0, "italiano":3.5, "storia":6, "geografica":2.5, "scienze":4, "filosofia":3.5, "matematica":1, "fisica":2, "latino":2 , "religione":7.5}]};
giocatori['capfracassa']={"pagella":[{"data":"23/03/2020", "votoFinale":0, "italiano":7, "storia":8, "geografica":6, "scienze":6, "filosofia":6, "matematica":5, "fisica":7, "latino":7 , "religione":8}]};
giocatori['carbon']={"pagella":[{"data":"27/03/2020", "italiano":7.5, "storia":8.5, "geografica":7, "scienze":8, "filosofia":8.5, "matematica":8.5, "fisica":9 , "latino":8.5 , "religione":9, "votoFinale":0}]};
giocatori['cavaliereyedi']={"pagella":[{"data":"23/03/2020", "votoFinale":0, "italiano":5.5, "storia":7.5, "geografica":5.5, "scienze":5.5, "filosofia":6, "matematica":4.5, "fisica":6.5 , "latino":6 , "religione":8}
//,{"data":"22/03/2020", "votoFinale":0, "italiano":6, "storia":7.5, "geografica":5.5, "scienze":6.5, "filosofia":6, "matematica":4.5, "fisica":5.5 , "latino":4 , "religione":8}
]};
giocatori['cherokee751']={"pagella":[{"data":"25/03/2020", "italiano":7, "storia":8.5, "geografica":7, "scienze":7.5, "filosofia":8, "matematica":7, "fisica":7.5 , "latino":7 , "religione":8.5, "votoFinale":0}]};
giocatori['compolino']={"pagella":[{"data":"30/03/2020", "italiano":6, "storia":8, "geografica":6, "scienze":5.5, "filosofia":6, "matematica":4.5, "fisica":6 , "latino":5.5, "religione":8, "votoFinale":0}]};
giocatori['crucco']={"pagella":[{"data":"24/03/2020", "italiano":6.5, "storia":7.5, "geografica":5.5, "scienze":6.5, "filosofia":7, "matematica":6, "fisica":6.5 , "latino":4.5 , "religione":8, "votoFinale":0}]};
giocatori['dag_stinner']={"pagella":[{"data":"29/03/2020", "italiano":6.5, "storia":8, "geografica":6.5, "scienze":7.5, "filosofia":8, "matematica":6, "fisica":8 , "latino":8, "religione":8.5, "votoFinale":0}]};
giocatori['dairola']={"pagella":[{"data":"30/03/2020", "italiano":6.5, "storia":8, "geografica":6, "scienze":6.5, "filosofia":7, "matematica":5.5, "fisica":7.5 , "latino":7, "religione":8, "votoFinale":0}]};
giocatori['dida70']={"pagella":[{"data":"30/03/2020", "italiano":6, "storia":8, "geografica":6.5, "scienze":6, "filosofia":6, "matematica":3.5, "fisica":5 , "latino":6, "religione":8, "votoFinale":0}]};
giocatori['dirkflasche']={"pagella":[{"data":"26/03/2020", "italiano":8, "storia":8.5, "geografica":6.5, "scienze":7.5, "filosofia":8.5, "matematica":7.5, "fisica":8.5 , "latino":8.5 , "religione":8.5, "votoFinale":0}]};
giocatori['elmarba']={"pagella":[{"data":"27/03/2020", "italiano":6.5, "storia":7.5, "geografica":6.5, "scienze":7, "filosofia":7.5, "matematica":6, "fisica":8 , "latino":7.5 , "religione":8.5, "votoFinale":0}]};
giocatori['enithith']={"pagella":[{"data":"28/03/2020", "italiano":7, "storia":8, "geografica":5.5, "scienze":7, "filosofia":7, "matematica":6.5, "fisica":8 , "latino":8, "religione":8.5, "votoFinale":0}]};
giocatori['fedegiu']={"pagella":[{"data":"31/03/2020", "italiano":6.5, "storia":8, "geografica":6, "scienze":7.5, "filosofia":7.5, "matematica":6, "fisica":7.5 , "latino":7, "religione":8.5, "votoFinale":0}]};
giocatori['fessura92']={"pagella":[{"data":"22/03/2020", "votoFinale":0, "italiano":7, "storia":8, "geografica":6, "scienze":7, "filosofia":7, "matematica":5, "fisica":6.5 , "latino":6.5 , "religione":8}]};
giocatori['fulljoker']={"pagella":[{"data":"28/03/2020", "italiano":6, "storia":7.5, "geografica":5, "scienze":6, "filosofia":7, "matematica":5, "fisica":7 , "latino":6, "religione":8, "votoFinale":0}]};
giocatori['giammi99']={"pagella":[{"data":"24/03/2020", "italiano":5, "storia":7.5, "geografica":5.5, "scienze":5, "filosofia":7, "matematica":6, "fisica":8 , "latino":7.5 , "religione":8, "votoFinale":0}]};
giocatori['giampiero111']={"pagella":[{"data":"22/03/2020", "votoFinale":0, "italiano":5, "storia":7.5, "geografica":5, "scienze":5, "filosofia":6.5, "matematica":5.5, "fisica": 7.5, "latino":7 , "religione": 8}]};
giocatori['giosibo']={"pagella":[{"data":"01/04/2020", "italiano":6.5, "storia":7.5, "geografica":5.5, "scienze":7, "filosofia":8, "matematica":7, "fisica":8 , "latino":6.5, "religione":8.5, "votoFinale":0}]};
giocatori['kmoreteam']={"pagella":[{"data":"25/03/2020", "italiano":5, "storia":7.5, "geografica":5, "scienze":4.5, "filosofia":6, "matematica":5, "fisica":6 , "latino":3 , "religione":8, "votoFinale":0}]};
giocatori['iaiobros']={"pagella":[{"data":"01/04/2020", "italiano":7.5, "storia":8.5, "geografica":7, "scienze":7, "filosofia":7.5, "matematica":6.5, "fisica":8 , "latino":7, "religione":8.5, "votoFinale":0}]};
giocatori['leffelover']={"pagella":[{"data":"24/03/2020", "votoFinale":0, "italiano":5, "storia":7.5, "geografica":5.5, "scienze":4.5, "filosofia":5.5, "matematica":4, "fisica":5.5 , "latino":5.5 , "religione":8}]};
giocatori['lixiansky']={"pagella":[{"data":"22/03/2020", "votoFinale":0, "italiano":6.5, "storia":8, "geografica":6.5, "scienze":6.5, "filosofia":7, "matematica":6, "fisica":7 , "latino":6.5 , "religione":8.5}]};
giocatori['lupodellasila']={"pagella":[{"data":"27/03/2020", "italiano":6.5, "storia":8, "geografica":7, "scienze":7.5, "filosofia":10, "matematica":9, "fisica":9 , "latino":9 , "religione":9, "votoFinale":0}]};
giocatori['marcus64']={"pagella":[{"data":"01/04/2020", "italiano":10, "storia":9.5, "geografica":8.5, "scienze":10, "filosofia":10, "matematica":9, "fisica":9.5 , "latino":9, "religione":9, "votoFinale":0}]};
giocatori['marpur']={"pagella":[{"data":"02/04/2020", "italiano":6, "storia":8, "geografica":6, "scienze":6, "filosofia":6, "matematica":5.5, "fisica":7.5 , "latino":4.5, "religione":8, "votoFinale":0}]};
giocatori['napoli67']={"pagella":[{"data":"24/03/2020", "votoFinale":0, "italiano":6, "storia":7.5, "geografica":5, "scienze":5.5, "filosofia":7, "matematica":7, "fisica":8.5 , "latino":8 , "religione":8.5}]};
giocatori['nonnogio1951']={"pagella":[{"data":"01/04/2020", "italiano":6, "storia":7.5, "geografica":5.5, "scienze":7, "filosofia":7, "matematica":5, "fisica":6.5 , "latino":6, "religione":8.5, "votoFinale":0}]};
giocatori['paccarozzo']={"pagella":[{"data":"26/03/2020", "italiano":6.5, "storia":8, "geografica":6, "scienze":7, "filosofia":8.5, "matematica":7.5, "fisica":9 , "latino":7.5 , "religione":8.5, "votoFinale":0}]};
giocatori['peloritano']={"pagella":[{"data":"01/04/2020", "italiano":7.5, "storia":8.5, "geografica":6.5, "scienze":7.5, "filosofia":7, "matematica":6, "fisica":7.5 , "latino":6.5, "religione":8.5, "votoFinale":0}]};
giocatori['pantheon-67']={"pagella":[{"data":"24/03/2020", "italiano":6, "storia":7.5, "geografica":6, "scienze":6.5, "filosofia":7, "matematica":5, "fisica":6.5 , "latino":6.5 , "religione":8, "votoFinale":0}]};
giocatori['paolobarolo']={"pagella":[{"data":"24/03/2020", "italiano":6.5, "storia":8.5, "geografica":7, "scienze":8, "filosofia":8.5, "matematica":7, "fisica":8.5 , "latino":7.5 , "religione":8.5, "votoFinale":0}]};
giocatori['pieropare']={"pagella":[{"data":"30/03/2020", "italiano":6.5, "storia":7.5, "geografica":5.5, "scienze":6.5, "filosofia":8, "matematica":6.5, "fisica":8 , "latino":8, "religione":8.5, "votoFinale":0}]};
giocatori['rapace']={"pagella":[{"data":"25/03/2020", "italiano":7, "storia":8, "geografica":6, "scienze":9, "filosofia":9.5, "matematica":8, "fisica":9 , "latino":8.5 , "religione":9, "votoFinale":0}]};
giocatori['reflex56']={"pagella":[{"data":"27/03/2020", "italiano":5.5, "storia":8, "geografica":6.5, "scienze":5.5, "filosofia":7.5, "matematica":7, "fisica":8 , "latino":8 , "religione":8.5, "votoFinale":0}]};
giocatori['riccardocioli']={"pagella":[{"data":"30/03/2020", "italiano":9.5, "storia":9.5, "geografica":8.5, "scienze":9.5, "filosofia":9, "matematica":7.5, "fisica":9 , "latino":8, "religione":9, "votoFinale":0}]};
giocatori['sandokann']={"pagella":[{"data":"29/03/2020", "italiano":7, "storia":8, "geografica":5.5, "scienze":8, "filosofia":7.5, "matematica":6.5, "fisica":9.5 , "latino":8.5, "religione":8.5, "votoFinale":0}]};
giocatori['sandro2116']={"pagella":[{"data":"22/03/2020", "votoFinale":0, "italiano":7, "storia":8.5, "geografica":6.5, "scienze":7.5, "filosofia":8, "matematica":6.5, "fisica":8 , "latino":6 , "religione":8.5}]};
giocatori['savi-xa']={"pagella":[{"data":"30/03/2020", "italiano":7, "storia":8.5, "geografica":7, "scienze":7, "filosofia":8, "matematica":6, "fisica":7 , "latino":7, "religione":8.5, "votoFinale":0}]};
giocatori['saurosol']={"pagella":[{"data":"25/03/2020", "italiano":7, "storia":8, "geografica":6, "scienze":8.5, "filosofia":9, "matematica":8, "fisica":8.5 , "latino":8.5 , "religione":9, "votoFinale":0}
//,{"data":"22/03/2020", "votoFinale":0, "italiano":7, "storia":8.5, "geografica":7, "scienze":7.5, "filosofia":8, "matematica":6.5, "fisica":8 , "latino":8 , "religione":8.5}
]};
giocatori['sbimone']={"pagella":[{"data":"26/03/2020", "italiano":5.5, "storia":7, "geografica":5, "scienze":6, "filosofia":6.5, "matematica":4.5, "fisica":5 , "latino":1.5 , "religione":8.5, "votoFinale":0}]};
giocatori['schiappone']={"pagella":[{"data":"30/03/2020", "italiano":6.5, "storia":8, "geografica":6.5, "scienze":6.5, "filosofia":8.5, "matematica":6.5, "fisica":8 , "latino":7, "religione":8.5, "votoFinale":0}]};
giocatori['silverblack']={"pagella":[{"data":"26/03/2020", "italiano":7.5, "storia":8, "geografica":6, "scienze":6.5, "filosofia":6.5, "matematica":5.5, "fisica":6.5 , "latino":6 , "religione":8, "votoFinale":0}]};
giocatori['southitaly']={"pagella":[{"data":"28/03/2020", "votoFinale":0, "italiano":5, "storia":7, "geografica":5, "scienze":4, "filosofia":5.5, "matematica":4.5, "fisica":7 , "latino":6, "religione":8}]};
giocatori['sundancek']={"pagella":[{"data":"01/04/2020", "italiano":4.5, "storia":6.5, "geografica":3.5, "scienze":3.5, "filosofia":4, "matematica":1, "fisica":4 , "latino":4, "religione":7, "votoFinale":0}]};
giocatori['tempiese75']={"pagella":[{"data":"02/04/2020", "italiano":5.5, "storia":7.5, "geografica":5.5, "scienze":5, "filosofia":6, "matematica":4, "fisica":5.5 , "latino":6.5, "religione":7.5, "votoFinale":0}]};
giocatori['tesctassa']={"pagella":[{"data":"23/03/2020", "votoFinale":0, "italiano":7.5, "storia":8, "geografica":6, "scienze":7.5, "filosofia":8.5, "matematica":8, "fisica":9, "latino":8.5, "religione":9}]};
giocatori['thejoker2000']={"pagella":[{"data":"01/04/2020", "italiano":6, "storia":8, "geografica":5.5, "scienze":6, "filosofia":6, "matematica":4.5, "fisica":7 , "latino":2.5, "religione":8, "votoFinale":0}]};
giocatori['tizianoparriani']={"pagella":[{"data":"02/04/2020", "italiano":7.5, "storia":8, "geografica":6, "scienze":7.5, "filosofia":6, "matematica":4, "fisica":6.5 , "latino":4, "religione":8.5, "votoFinale":0}]};
giocatori['themoonlightknight']={"pagella":[{"data":"25/03/2020", "italiano":6, "storia":8, "geografica":5.5, "scienze":6, "filosofia":6, "matematica":3.5, "fisica":5 , "latino":4.5 , "religione":8, "votoFinale":0}]};
giocatori['tulpicanistan']={"pagella":[{"data":"29/03/2020", "italiano":7, "storia":7.5, "geografica":5.5, "scienze":6, "filosofia":7, "matematica":5.5, "fisica":6.5 , "latino":7.5, "religione":8.5, "votoFinale":0}]};
giocatori['valeriobc']={"pagella":[{"data":"26/03/2020", "italiano":8, "storia":8.5, "geografica":7.5, "scienze":7.5, "filosofia":8, "matematica":6, "fisica":6.5 , "latino":6 , "religione":8.5, "votoFinale":0}]};
giocatori['xdms']={"pagella":[{"data":"02/04/2020", "italiano":5.5, "storia":7.5, "geografica":5.5, "scienze":5, "filosofia":6, "matematica":4.5, "fisica":6.5 , "latino":6, "religione":8, "votoFinale":0}]};
giocatori['yoggsaron99']={"pagella":[{"data":"22/03/2020", "votoFinale":0, "italiano":8.5, "storia":9, "geografica":8, "scienze":9, "filosofia":9, "matematica":8, "fisica":9 , "latino":8 , "religione":9}]};
giocatori['ytoong']={"pagella":[{"data":"26/03/2020", "italiano":6, "storia":7.5, "geografica":5, "scienze":6, "filosofia":6.5, "matematica":6, "fisica":6 , "latino":6.5 , "religione":8, "votoFinale":0}
//,{"data":"22/03/2020", "votoFinale":0, "italiano":7, "storia":7.5, "geografica":5.5, "scienze":7.5, "filosofia":7, "matematica":6.5, "fisica":6.5 , "latino":6.5 , "religione":8.5}
]};
giocatori['ziopolvere']={"pagella":[{"data":"23/03/2020", "votoFinale":0, "italiano":7, "storia":8, "geografica":6.5, "scienze":7.5, "filosofia":8.5, "matematica":7.5, "fisica":8.5 , "latino":6 , "religione":9}]};



function elabora() {
    //Cerco avatar
    for (var username in giocatori) {
        getAvatarUrl('https://api.chess.com/pub/player/' + username);

    }
}

function getAvatarUrl(url)
{
    //Eseguo funzione per ricercare un avatar
    $.getJSON(url,function(dataAvatar){
        if (dataAvatar.avatar) {
            giocatori[dataAvatar.username].avatar = dataAvatar.avatar;
        } else {
            giocatori[dataAvatar.username].avatar = "https://betacssjs.chesscomfiles.com/bundles/web/images/user-image.152ee336.svg";
        }
        giocatori[dataAvatar.username].url = dataAvatar.url;
        giocatori[dataAvatar.username].displayName = dataAvatar.url.substr(29, dataAvatar.url.length-29);

        //Se non ho caricato tuti gli avatar esengo ancora la funzione
        for (var username in giocatori) {
            if (! giocatori[username].avatar) {
                return;
            }
        }
  
        //   Controllo se è già partita la fase di scrittura
        //      se arrivano contemporaneamente più caricamenti potrebbe succedere
        if (! getEloRun)
        {
            getEloRun = true;
            //Leggo elo 
            getElo();
        }
    }).error(function(jqXhr, textStatus, error) {
        //è andato in errore ricarico i dati
        getAvatarUrl(this.url);    
        //Per evitare problemi se il giocatore è non esiste,
        //  se va in errore carico l'avatar di default
        //Tolto se il giocatore va in errore bisogna correggere anche stat
        //var username = this.url.substr(33, this.url.length - 32);
        //giocatori[username.toLowerCase()].avatar = "https://betacssjs.chesscomfiles.com/bundles/web/images/user-image.152ee336.svg";

    });

}

function getElo()
{
    //Cerco l'avatar per tutti i giocatori
    for (var username in giocatori) {
        //Cerco avatar
        getEloUrl('https://api.chess.com/pub/player/' + username + '/stats');
    }    
}

function getEloUrl(url)
{
    //Eseguo funzione per ricercare l'elo
    $.getJSON(url,function(data){
        var username = ''
        username = this.url.substr(33, this.url.length-39);
        if (data.chess_daily)
            //giocatori[username].elo = data.chess_rapid.last.rating;
            giocatori[username].elo = data.chess_daily.last.rating;
        else
            giocatori[username].elo = 1200;    
            
        //Se non ho caricato tuti gli elo  esengo ancora la funzione
        for (var username in giocatori) {
            if (! giocatori[username].elo) {
                return;
            }
        }

        if (stampaRun)
            return;
        
        stampaRun = true;

        //Stampo medagliere 
        stampaPagella();


    }).error(function(jqXhr, textStatus, error) {
        //è andato in errore ricarico i dati
        getEloUrl(this.url);    
    });

}


function stampaPagella(tipo) {

    //valcolo voto finale
    for (var username in giocatori) {
        for (var i in giocatori[username].pagella) {
            giocatori[username].pagella[i].votoFinale = Math.round((giocatori[username].pagella[i].italiano + giocatori[username].pagella[i].storia + giocatori[username].pagella[i].geografica + giocatori[username].pagella[i].scienze + giocatori[username].pagella[i].filosofia + giocatori[username].pagella[i].matematica + giocatori[username].pagella[i].fisica + giocatori[username].pagella[i].latino ) / 8);
        }    
    }

    //stampo riga    
    for (var username in giocatori) {
        var riga = '<tr class="riga">'  +
        '<td class="col-giocatore">' +
        '    <table><tr>' +
        '        <td>' +
        '        <img class="avatar" src="' + giocatori[username].avatar + '">' +
        '    </td>' +
        '    <td width=7px></td>' +
        '    <td><div>' +
        '            <a class="username" href="' + giocatori[username].url + '" target=”_blank”> ' + giocatori[username].displayName + '</a>' +
        '        </div> <div>  (' + giocatori[username].elo + ') </div>' +
        '        </td>' +    
        '    </tr></table>' +
        '</td>';
        riga += '<td class="col-voto-bold">'
        for (var i in giocatori[username].pagella) {
            if (i >0) riga += '<br>';
            if (giocatori[username].pagella[i].votoFinale < 6)
                riga += '<span style="color: red;">' + giocatori[username].pagella[i].votoFinale +'</span>';
            else
                riga += giocatori[username].pagella[i].votoFinale;
        }
        riga += '</td>"'
        riga += '<td class="col-voto">'
        for (var i in giocatori[username].pagella) {
            if (i >0) riga += '<br>';
            if (giocatori[username].pagella[i].italiano < 6)
                riga += '<span style="color: red;">' + giocatori[username].pagella[i].italiano +'</span>';
            else
                riga += giocatori[username].pagella[i].italiano;
        }
        riga += '</td>"'
        riga += '<td class="col-voto">'
        for (var i in giocatori[username].pagella) {
            if (i >0) riga += '<br>';
            if (giocatori[username].pagella[i].storia < 6)
                riga += '<span style="color: red;">' + giocatori[username].pagella[i].storia +'</span>';
            else
                riga += giocatori[username].pagella[i].storia;
        }
        riga += '</td>"'
        riga += '<td class="col-voto">'
        for (var i in giocatori[username].pagella) {
            if (i >0) riga += '<br>';
            if (giocatori[username].pagella[i].geografica < 6)
                riga += '<span style="color: red;">' + giocatori[username].pagella[i].geografica +'</span>';
            else
                riga += giocatori[username].pagella[i].geografica;
        }
        riga += '</td>"'
        riga += '<td class="col-voto">'
        for (var i in giocatori[username].pagella) {
            if (i >0) riga += '<br>';
            if (giocatori[username].pagella[i].scienze < 6)
                riga += '<span style="color: red;">' + giocatori[username].pagella[i].scienze +'</span>';
            else
                riga += giocatori[username].pagella[i].scienze;
        }
        riga += '</td>"'
        riga += '<td class="col-voto">'
        for (var i in giocatori[username].pagella) {
            if (i >0) riga += '<br>';
            if (giocatori[username].pagella[i].filosofia < 6)
                riga += '<span style="color: red;">' + giocatori[username].pagella[i].filosofia +'</span>';
            else
                riga += giocatori[username].pagella[i].filosofia;
        }
        riga += '</td>"'
        riga += '<td class="col-voto">'
        for (var i in giocatori[username].pagella) {
            if (i >0) riga += '<br>';
            if (giocatori[username].pagella[i].matematica < 6)
                riga += '<span style="color: red;">' + giocatori[username].pagella[i].matematica +'</span>';
            else
                riga += giocatori[username].pagella[i].matematica;
        }
        riga += '</td>"'
        riga += '<td class="col-voto">'
        for (var i in giocatori[username].pagella) {
            if (i >0) riga += '<br>';
            if (giocatori[username].pagella[i].fisica < 6)
                riga += '<span style="color: red;">' + giocatori[username].pagella[i].fisica +'</span>';
            else
                riga += giocatori[username].pagella[i].fisica;
        }
        riga += '</td>"'
        riga += '<td class="col-voto">'
        for (var i in giocatori[username].pagella) {
            if (i >0) riga += '<br>';
            if (giocatori[username].pagella[i].latino < 6)
                riga += '<span style="color: red;">' + giocatori[username].pagella[i].latino +'</span>';
            else
                riga += giocatori[username].pagella[i].latino;
        }
        riga += '</td>"'
        riga += '<td class="col-voto">'
        for (var i in giocatori[username].pagella) {
            if (i >0) riga += '<br>';
            if (giocatori[username].pagella[i].religione < 6)
                riga += '<span style="color: red;">' + giocatori[username].pagella[i].religione +'</span>';
            else
                riga += giocatori[username].pagella[i].religione;
        }
        riga += '<td class="col-voto">'
        for (var i in giocatori[username].pagella) {
            if (i >0) riga += '<br>';
            riga += giocatori[username].pagella[i].data;
        }
        riga += '</td>"'

        //Fine riga
        riga += '</tr>';

        //aggiungo
        $("#pagelle").append(riga)
    }
}


