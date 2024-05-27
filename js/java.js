function AfficheContenu(divId) 
    {
        let divToHide = document.getElementsByClassName("contenu");
        for (let i = 0; i < divToHide.length; i++) {
            divToHide[i].style.display = "none";
        }

        var divToShow;
        divToShow = document.getElementById(divId) ;
        divToShow.style.display = "block" ;
                    
    }
