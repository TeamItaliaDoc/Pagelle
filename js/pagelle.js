var getEloRun = false;
var stampaRun = false;

var giocatori = [];
//giocatori['']={"data":"/03/2020", "italiano":, "storia":, "geografica":, "scienze":, "filosofia":, "matematica":, "fisica": , "latino": , "religione":, "votoFinale":0, "avatar":"", "displayname":"", "url":"", "elo":""  };

giocatori['88arf']={"data":"22/03/2020", "votoFinale":0, "italiano":6.5, "storia":8, "geografica":6.5, "scienze":6.5, "filosofia":7.5, "matematica":6.5, "fisica":7 , "latino":8 , "religione":8.5, "avatar":"", "displayname":"", "url":"", "elo":""  };
giocatori['bravale']={"data":"23/03/2020", "votoFinale":0, "italiano":3.5, "storia":6, "geografica":2.5, "scienze":4, "filosofia":3.5, "matematica":1, "fisica":2, "latino":2 , "religione":7.5, "avatar":"", "displayname":"", "url":"", "elo":""  };
giocatori['capfracassa']={"data":"23/03/2020", "votoFinale":0, "italiano":7, "storia":8, "geografica":6, "scienze":6, "filosofia":6, "matematica":5, "fisica":7, "latino":7 , "religione":8, "avatar":"", "displayname":"", "url":"", "elo":""  };
giocatori['carbon']={"data":"27/03/2020", "italiano":7.5, "storia":8.5, "geografica":7, "scienze":8, "filosofia":8.5, "matematica":8.5, "fisica":9 , "latino":8.5 , "religione":9, "votoFinale":0, "avatar":"", "displayname":"", "url":"", "elo":""  };
giocatori['cavaliereyedi']={"data":"23/03/2020", "votoFinale":0, "italiano":5.5, "storia":7.5, "geografica":5.5, "scienze":5.5, "filosofia":6, "matematica":4.5, "fisica":6.5 , "latino":6 , "religione":8, "avatar":"", "displayname":"", "url":"", "elo":""  };
//giocatori['cavaliereyedi']={"data":"22/03/2020", "votoFinale":0, "italiano":6, "storia":7.5, "geografica":5.5, "scienze":6.5, "filosofia":6, "matematica":4.5, "fisica":5.5 , "latino":4 , "religione":8, "avatar":"", "displayname":"", "url":"", "elo":""  };
giocatori['cherokee751']={"data":"25/03/2020", "italiano":7, "storia":8.5, "geografica":7, "scienze":7.5, "filosofia":8, "matematica":7, "fisica":7.5 , "latino":7 , "religione":8.5, "votoFinale":0, "avatar":"", "displayname":"", "url":"", "elo":""  };
giocatori['crucco']={"data":"24/03/2020", "italiano":6.5, "storia":7.5, "geografica":5.5, "scienze":6.5, "filosofia":7, "matematica":6, "fisica":6.5 , "latino":4.5 , "religione":8, "votoFinale":0, "avatar":"", "displayname":"", "url":"", "elo":""  };
giocatori['dirkflasche']={"data":"26/03/2020", "italiano":8, "storia":8.5, "geografica":6.5, "scienze":7.5, "filosofia":8.5, "matematica":7.5, "fisica":8.5 , "latino":8.5 , "religione":8.5, "votoFinale":0, "avatar":"", "displayname":"", "url":"", "elo":""  };
giocatori['elmarba']={"data":"27/03/2020", "italiano":6.5, "storia":7.5, "geografica":6.5, "scienze":7, "filosofia":7.5, "matematica":6, "fisica":8 , "latino":7.5 , "religione":8.5, "votoFinale":0, "avatar":"", "displayname":"", "url":"", "elo":""  };
giocatori['fessura92']={"data":"22/03/2020", "votoFinale":0, "italiano":7, "storia":8, "geografica":6, "scienze":7, "filosofia":7, "matematica":5, "fisica":6.5 , "latino":6.5 , "religione":8, "avatar":"", "displayname":"", "url":"", "elo":""  };
giocatori['giammi99']={"data":"24/03/2020", "italiano":5, "storia":7.5, "geografica":5.5, "scienze":5, "filosofia":7, "matematica":6, "fisica":8 , "latino":7.5 , "religione":8, "votoFinale":0, "avatar":"", "displayname":"", "url":"", "elo":""  };
giocatori['giampiero111']={"data":"22/03/2020", "votoFinale":0, "italiano":5, "storia":7.5, "geografica":5, "scienze":5, "filosofia":6.5, "matematica":5.5, "fisica": 7.5, "latino":7 , "religione": 8};
giocatori['kmoreteam']={"data":"25/03/2020", "italiano":5, "storia":7.5, "geografica":5, "scienze":4.5, "filosofia":6, "matematica":5, "fisica":6 , "latino":3 , "religione":8, "votoFinale":0, "avatar":"", "displayname":"", "url":"", "elo":""  };
giocatori['leffelover']={"data":"24/03/2020", "votoFinale":0, "italiano":5, "storia":7.5, "geografica":5.5, "scienze":4.5, "filosofia":5.5, "matematica":4, "fisica":5.5 , "latino":5.5 , "religione":8, "avatar":"", "displayname":"", "url":"", "elo":""  };
giocatori['lixiansky']={"data":"22/03/2020", "votoFinale":0, "italiano":6.5, "storia":8, "geografica":6.5, "scienze":6.5, "filosofia":7, "matematica":6, "fisica":7 , "latino":6.5 , "religione":8.5, "avatar":"", "displayname":"", "url":"", "elo":""  };
giocatori['lupodellasila']={"data":"27/03/2020", "italiano":6.5, "storia":8, "geografica":7, "scienze":7.5, "filosofia":10, "matematica":9, "fisica":9 , "latino":9 , "religione":9, "votoFinale":0, "avatar":"", "displayname":"", "url":"", "elo":""  };
giocatori['napoli67']={"data":"24/03/2020", "votoFinale":0, "italiano":6, "storia":7.5, "geografica":5, "scienze":5.5, "filosofia":7, "matematica":7, "fisica":8.5 , "latino":8 , "religione":8.5, "avatar":"", "displayname":"", "url":"", "elo":""  };
giocatori['paccarozzo']={"data":"26/03/2020", "italiano":6.5, "storia":8, "geografica":6, "scienze":7, "filosofia":8.5, "matematica":7.5, "fisica":9 , "latino":7.5 , "religione":8.5, "votoFinale":0, "avatar":"", "displayname":"", "url":"", "elo":""  };
giocatori['pantheon-67']={"data":"24/03/2020", "italiano":6, "storia":7.5, "geografica":6, "scienze":6.5, "filosofia":7, "matematica":5, "fisica":6.5 , "latino":6.5 , "religione":8, "votoFinale":0, "avatar":"", "displayname":"", "url":"", "elo":""  };
giocatori['paolobarolo']={"data":"24/03/2020", "italiano":6.5, "storia":8.5, "geografica":7, "scienze":8, "filosofia":8.5, "matematica":7, "fisica":8.5 , "latino":7.5 , "religione":8.5, "votoFinale":0, "avatar":"", "displayname":"", "url":"", "elo":""  };
giocatori['rapace']={"data":"25/03/2020", "italiano":7, "storia":8, "geografica":6, "scienze":9, "filosofia":9.5, "matematica":8, "fisica":9 , "latino":8.5 , "religione":9, "votoFinale":0, "avatar":"", "displayname":"", "url":"", "elo":""  };
giocatori['reflex56']={"data":"27/03/2020", "italiano":5.5, "storia":8, "geografica":6.5, "scienze":5.5, "filosofia":7.5, "matematica":7, "fisica":8 , "latino":8 , "religione":8.5, "votoFinale":0, "avatar":"", "displayname":"", "url":"", "elo":""  };
giocatori['sandro2116']={"data":"22/03/2020", "votoFinale":0, "italiano":7, "storia":8.5, "geografica":6.5, "scienze":7.5, "filosofia":8, "matematica":6.5, "fisica":8 , "latino":6 , "religione":8.5, "avatar":"", "displayname":"", "url":"", "elo":""  };
giocatori['saurosol']={"data":"25/03/2020", "italiano":7, "storia":8, "geografica":6, "scienze":8.5, "filosofia":9, "matematica":8, "fisica":8.5 , "latino":8.5 , "religione":9, "votoFinale":0, "avatar":"", "displayname":"", "url":"", "elo":""  };
//giocatori['saurosol']={"data":"22/03/2020", "votoFinale":0, "italiano":7, "storia":8.5, "geografica":7, "scienze":7.5, "filosofia":8, "matematica":6.5, "fisica":8 , "latino":8 , "religione":8.5};
giocatori['sbimone']={"data":"26/03/2020", "italiano":5.5, "storia":7, "geografica":5, "scienze":6, "filosofia":6.5, "matematica":4.5, "fisica":5 , "latino":1.5 , "religione":8.5, "votoFinale":0, "avatar":"", "displayname":"", "url":"", "elo":""  };
giocatori['silverblack']={"data":"26/03/2020", "italiano":7.5, "storia":8, "geografica":6, "scienze":6.5, "filosofia":6.5, "matematica":5.5, "fisica":6.5 , "latino":6 , "religione":8, "votoFinale":0, "avatar":"", "displayname":"", "url":"", "elo":""  };
giocatori['tesctassa']={"data":"23/03/2020", "votoFinale":0, "italiano":7.5, "storia":8, "geografica":6, "scienze":7.5, "filosofia":8.5, "matematica":8, "fisica":9, "latino":8.5, "religione":9, "avatar":"", "displayname":"", "url":"", "elo":""  };
giocatori['themoonlightknight']={"data":"25/03/2020", "italiano":6, "storia":8, "geografica":5.5, "scienze":6, "filosofia":6, "matematica":3.5, "fisica":5 , "latino":4.5 , "religione":8, "votoFinale":0, "avatar":"", "displayname":"", "url":"", "elo":""  };
giocatori['valeriobc']={"data":"26/03/2020", "italiano":8, "storia":8.5, "geografica":7.5, "scienze":7.5, "filosofia":8, "matematica":6, "fisica":6.5 , "latino":6 , "religione":8.5, "votoFinale":0, "avatar":"", "displayname":"", "url":"", "elo":""  };
giocatori['yoggsaron99']={"data":"22/03/2020", "votoFinale":0, "italiano":8.5, "storia":9, "geografica":8, "scienze":9, "filosofia":9, "matematica":8, "fisica":9 , "latino":8 , "religione":9, "avatar":"", "displayname":"", "url":"", "elo":""  };
giocatori['ytoong']={"data":"26/03/2020", "italiano":6, "storia":7.5, "geografica":5, "scienze":6, "filosofia":6.5, "matematica":6, "fisica":6 , "latino":6.5 , "religione":8, "votoFinale":0, "avatar":"", "displayname":"", "url":"", "elo":""  };
///giocatori['ytoong']={"data":"22/03/2020", "votoFinale":0, "italiano":7, "storia":7.5, "geografica":5.5, "scienze":7.5, "filosofia":7, "matematica":6.5, "fisica":6.5 , "latino":6.5 , "religione":8.5, "avatar":"", "displayname":"", "url":"", "elo":""  };
giocatori['ziopolvere']={"data":"23/03/2020", "votoFinale":0, "italiano":7, "storia":8, "geografica":6.5, "scienze":7.5, "filosofia":8.5, "matematica":7.5, "fisica":8.5 , "latino":6 , "religione":9, "avatar":"", "displayname":"", "url":"", "elo":""  };



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
        giocatori[username].votoFinale = Math.round((giocatori[username].italiano + giocatori[username].storia + giocatori[username].geografica + giocatori[username].scienze + giocatori[username].filosofia + giocatori[username].matematica + giocatori[username].fisica + giocatori[username].latino ) / 8);
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
        if (giocatori[username].votoFinale < 6)
            riga += '<td class="col-voto-bold" style="color: red;">' + giocatori[username].votoFinale +'</td>';
        else
            riga += '<td class="col-voto-bold">' + giocatori[username].votoFinale +'</td>';
        if (giocatori[username].italiano < 6)
            riga += '<td class="col-voto" style="color: red;">' + giocatori[username].italiano +'</td>';
        else
            riga += '<td class="col-voto">' + giocatori[username].italiano +'</td>';
        if (giocatori[username].storia < 6)
            riga += '<td class="col-voto" style="color: red;">' + giocatori[username].storia +'</td>';
        else
            riga += '<td class="col-voto">' + giocatori[username].storia +'</td>';
        if (giocatori[username].geografica < 6)
            riga += '<td class="col-voto" style="color: red;">' + giocatori[username].geografica +'</td>';
        else
            riga += '<td class="col-voto">' + giocatori[username].geografica +'</td>';
        if (giocatori[username].scienze < 6)
            riga += '<td class="col-voto" style="color: red;">' + giocatori[username].scienze +'</td>';
        else
            riga += '<td class="col-voto">' + giocatori[username].scienze +'</td>';
        if (giocatori[username].filosofia < 6)
            riga += '<td class="col-voto" style="color: red;">' + giocatori[username].filosofia +'</td>';
        else
            riga += '<td class="col-voto">' + giocatori[username].filosofia +'</td>';
        if (giocatori[username].matematica < 6)
            riga += '<td class="col-voto" style="color: red;">' + giocatori[username].matematica +'</td>';
        else
            riga += '<td class="col-voto">' + giocatori[username].matematica +'</td>';
        if (giocatori[username].fisica < 6)
            riga += '<td class="col-voto" style="color: red;">' + giocatori[username].fisica +'</td>';
        else
            riga += '<td class="col-voto">' + giocatori[username].fisica +'</td>';
        if (giocatori[username].latino < 6)
            riga += '<td class="col-voto" style="color: red;">' + giocatori[username].latino +'</td>';
        else
        riga += '<td class="col-voto">' + giocatori[username].latino +'</td>';
        if (giocatori[username].religione < 6)
            riga += '<td class="col-voto" style="color: red;">' + giocatori[username].religione +'</td>';
        else
            riga += '<td class="col-voto">' + giocatori[username].religione +'</td>';
        riga += '<td class="col-voto">' + giocatori[username].data +'</td>';
        riga += '</tr>';

        //aggiungo
        $("#pagelle").append(riga)
    }
}


