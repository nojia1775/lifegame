const ecran = [...document.querySelectorAll(".cellule")];

const auto = document.getElementById("auto");

ecran.forEach(cellule => {
    cellule.addEventListener("click", () => {
        if(cellule.style.background == "black") {
            cellule.style.background = "white";
        } else {
            cellule.style.background = "black";
        }
    })
})

const next = document.getElementById("next");

function gen() {

    for(let i = 0; i < 5000; i++) {

        if(i == 0) { // coin en haut à gauche
            if(ecran[0].style.background == "black") { // disparition cellule

                let nbA = 0;

                if(ecran[1].style.background == "black" || ecran[1].style.background == "red") {
                    nbA++;
                }

                if(ecran[100].style.background == "black" || ecran[100].style.background == "red") {
                    nbA++;
                }

                if(ecran[101].style.background == "black" || ecran[101].style.background == "red") {
                    nbA++;
                }

                if(nbA < 2 || nbA > 3) {
                    ecran[i].style.background = "red";
                }

            } else { // apparition cellule
                let nbB = 0;

                if(ecran[1].style.background == "black" || ecran[1].style.background == "red") {
                    nbB++;
                }

                if(ecran[100].style.background == "black" || ecran[100].style.background == "red") {
                    nbB++;
                }

                if(ecran[101].style.background == "black" || ecran[101].style.background == "red") {
                    nbB++;
                }

                if(nbB == 3) {
                    ecran[i].style.background = "green";
                }
            }
        }

        if(i == 99) { // coin en haut à droite
            if(ecran[99].style.background == "black") { // disparition cellule

                let nbA = 0;

                if(ecran[98].style.background == "black" || ecran[98].style.background == "red") {
                    nbA++;
                    console.log(nbA);
                }

                if(ecran[199].style.background == "black" || ecran[199].style.background == "red") {
                    nbA++;
                    console.log(nbA);
                }

                if(ecran[198].style.background == "black" || ecran[198].style.background == "red") {
                    nbA++;
                    console.log(nbA);
                }

                if(nbA < 2 || nbA > 3) {
                    ecran[i].style.background = "red";
                }

            } else { // apparition cellule
                let nbB = 0;

                if(ecran[98].style.background == "black" || ecran[98].style.background == "red") {
                    nbB++;
                }

                if(ecran[199].style.background == "black" || ecran[199].style.background == "red") {
                    nbB++;
                }

                if(ecran[198].style.background == "black" || ecran[198].style.background == "red") {
                    nbB++;
                }

                if(nbB == 3) {
                    ecran[i].style.background = "green";
                }
            }
        }

        if(i == 4900) { // coin en bas à gauche
            if(ecran[4900].style.background == "black") { // disparition cellule

                let nbA = 0;

                if(ecran[4901].style.background == "black" || ecran[4901].style.background == "red") {
                    nbA++;
                }

                if(ecran[4800].style.background == "black" || ecran[4800].style.background == "red") {
                    nbA++;
                }

                if(ecran[4801].style.background == "black" || ecran[4801].style.background == "red") {
                    nbA++;
                }

                if(nbA < 2 || nbA > 3) {
                    ecran[i].style.background = "red";
                    
                }

            } else { // apparition cellule
                let nbB = 0;

                if(ecran[4901].style.background == "black" || ecran[4901].style.background == "red") {
                    nbB++;
                }

                if(ecran[4800].style.background == "black" || ecran[4800].style.background == "red") {
                    nbB++;
                }

                if(ecran[4801].style.background == "black" || ecran[4801].style.background == "red") {
                    nbB++;
                }

                if(nbB == 3) {
                    ecran[i].style.background = "green";
                    
                }
            }
        }

        if(i == 4999) { // coin en bas à droite
            if(ecran[4999].style.background == "black") { // disparition cellule

                let nbA = 0;

                if(ecran[4998].style.background == "black" || ecran[4998].style.background == "red") {
                    nbA++;
                }

                if(ecran[4899].style.background == "black" || ecran[4899].style.background == "red") {
                    nbA++;
                }

                if(ecran[4898].style.background == "black" || ecran[4898].style.background == "red") {
                    nbA++;
                }

                if(nbA < 2 || nbA > 3) {
                    ecran[i].style.background = "red";
                    
                }

            } else { // apparition cellule
                let nbB = 0;

                if(ecran[4998].style.background == "black" || ecran[4998].style.background == "red") {
                    nbB++;
                }

                if(ecran[4899].style.background == "black" || ecran[4899].style.background == "red") {
                    nbB++;
                }

                if(ecran[4898].style.background == "black" || ecran[4898].style.background == "red") {
                    nbB++;
                }

                if(nbB == 3) {
                    ecran[i].style.background = "green";
                    
                }
            }
        }

        if(i >= 1 && i <= 98) { // bord du haut
            if(ecran[i].style.background == "black") { // disparition cellule 

                let nbA = 0;

                if(ecran[i + 99].style.background == "black" || ecran[i + 99].style.background == "red") {
                    nbA++;
                    
                }

                if(ecran[i - 1].style.background == "black" || ecran[i - 1].style.background == "red") {
                    nbA++;
                    
                }

                if(ecran[i + 100].style.background == "black" || ecran[i + 100].style.background == "red") {
                    nbA++;
                }

                if(ecran[i + 101].style.background == "black" || ecran[i + 101].style.background == "red") {
                    nbA++;
                    
                }

                if(ecran[i + 1].style.background == "black" || ecran[i + 1].style.background == "red") {
                    nbA++;
                    
                }

                if(nbA < 2 || nbA > 3) {
                    ecran[i].style.background = "red";
                }

            } else { // apparition cellule
                
                let nbB = 0;

                if(ecran[i - 1].style.background == "black" || ecran[i - 1].style.background == "red") {
                    nbB++;
                }

                if(ecran[i + 99].style.background == "black" || ecran[i + 99].style.background == "red") {
                    nbB++;
                }

                if(ecran[i + 100].style.background == "black" || ecran[i + 100].style.background == "red") {
                    nbB++;
                }

                if(ecran[i + 101].style.background == "black" || ecran[i + 101].style.background == "red") {
                    nbB++;
                }

                if(ecran[i + 1].style.background == "black" || ecran[i + 1].style.background == "red") {
                    nbB++;
                }

                if(nbB == 3) {
                    ecran[i].style.background = "green";
                    
                }
            }
        }

        if(i >= 4901 && i <= 4998) { // bord du bas
            if(ecran[i].style.background == "black") { // disparition cellule 

                let nbA = 0;

                if(ecran[i - 1].style.background == "black" || ecran[i - 1].style.background == "red") {
                    nbA++;
                    
                }

                if(ecran[i - 99].style.background == "black" || ecran[i - 99].style.background == "red") {
                    nbA++;
                    
                }

                if(ecran[i - 100].style.background == "black" || ecran[i - 100].style.background == "red") {
                    nbA++;
                    
                }

                if(ecran[i - 101].style.background == "black" || ecran[i - 101].style.background == "red") {
                    nbA++;
                    
                }

                if(ecran[i + 1].style.background == "black" || ecran[i + 1].style.background == "red") {
                    nbA++;
                    
                }

                if(nbA < 2 || nbA > 3) {
                    ecran[i].style.background = "red";
                }

            } else { // apparition cellule
                
                let nbB = 0;

                if(ecran[i - 1].style.background == "black" || ecran[i - 1].style.background == "red") {
                    nbB++;
                }

                if(ecran[i - 99].style.background == "black" || ecran[i - 99].style.background == "red") {
                    nbB++;
                }

                if(ecran[i - 100].style.background == "black" || ecran[i - 100].style.background == "red") {
                    nbB++;
                }

                if(ecran[i - 101].style.background == "black" || ecran[i - 101].style.background == "red") {
                    nbB++;
                }

                if(ecran[i + 1].style.background == "black" || ecran[i + 1].style.background == "red") {
                    nbB++;
                }

                if(nbB == 3) {
                    ecran[i].style.background = "green";
                    
                }
            }
        }

        if(i == 100 || i == 200 || i == 300 || i == 400 || i == 500 || i == 600 || i == 700 || i == 800 || i == 900 || i == 1000 || i == 1100 ||
            i == 1200 || i == 1300 || i == 1300 || i == 1400 || i == 1500 || i == 1600 || i == 1700 || i == 1800 || i == 1900
            || i == 2000 || i == 2100 || i == 2200 || i == 2300 || i == 2400 || i == 2500 || i == 2600 || i == 2700 || i == 2800 || i == 2900
            || i == 3000 || i == 3100 || i == 3200 || i == 3300 || i == 3400 || i == 3500 || i == 3600 || i == 3700 || i == 3800 || i == 3900
            || i == 4000 || i == 4100 || i == 4200 || i == 4300 || i == 4400 || i == 4500 || i == 4600 || i == 4700 || i == 4800) { // bord de gauche
            if(ecran[i].style.background == "black") { // disparition cellule 

                let nbA = 0;

                if(ecran[i - 100].style.background == "black" || ecran[i - 100].style.background == "red") {
                    nbA++;
                    
                }

                if(ecran[i - 99].style.background == "black" || ecran[i - 99].style.background == "red") {
                    nbA++;
                    
                }

                if(ecran[i + 1].style.background == "black" || ecran[i + 1].style.background == "red") {
                    nbA++;
                    
                }

                if(ecran[i + 101].style.background == "black" || ecran[i + 101].style.background == "red") {
                    nbA++;
                    
                }

                if(ecran[i + 100].style.background == "black" || ecran[i + 100].style.background == "red") {
                    nbA++;
                    
                }

                if(nbA < 2 || nbA > 3) {
                    ecran[i].style.background = "red";
                }

            } else { // apparition cellule
                
                let nbB = 0;

                if(ecran[i - 100].style.background == "black" || ecran[i - 100].style.background == "red") {
                    nbB++;
                }

                if(ecran[i - 99].style.background == "black" || ecran[i - 99].style.background == "red") {
                    nbB++;
                }

                if(ecran[i + 1].style.background == "black" || ecran[i + 1].style.background == "red") {
                    nbB++;
                }

                if(ecran[i + 101].style.background == "black" || ecran[i + 101].style.background == "red") {
                    nbB++;
                }

                if(ecran[i + 100].style.background == "black" || ecran[i + 100].style.background == "red") {
                    nbB++;
                }

                if(nbB == 3) {
                    ecran[i].style.background = "green";
                    
                }
            }
        }

        if(i == 199 || i == 299 || i == 399 || i == 499 || i == 599 || i == 699 || i == 799 || i == 899 || i == 999 || i == 1099 || i == 1199 ||
            i == 1299 || i == 1399 || i == 1499 || i == 1599 || i == 1699 || i == 1799 || i == 1899 || i == 1999 || i == 2099 || i == 2199
            || i == 2299 || i == 2399 || i == 2499 || i == 2599 || i == 2699 || i == 2799 || i == 2899 || i == 2999 || i == 3099 || i == 3199
            || i == 3299 || i == 3399 || i == 3499 || i == 3599 || i == 3699 || i == 3799 || i == 3899 || i == 3999 || i == 4099 || i == 4199
            || i == 4299 || i == 4399 || i == 4499 || i == 4599 || i == 4699 || i == 4799 || i == 4899) { // bord de droite
            if(ecran[i].style.background == "black") { // disparition cellule 

                let nbA = 0;

                if(ecran[i - 100].style.background == "black" || ecran[i - 100].style.background == "red") {
                    nbA++;
                    
                }

                if(ecran[i - 101].style.background == "black" || ecran[i - 101].style.background == "red") {
                    nbA++;
                    
                }

                if(ecran[i - 1].style.background == "black" || ecran[i - 1].style.background == "red") {
                    nbA++;
                    
                }

                if(ecran[i + 99].style.background == "black" || ecran[i + 99].style.background == "red") {
                    nbA++;
                    
                }

                if(ecran[i + 100].style.background == "black" || ecran[i + 100].style.background == "red") {
                    nbA++;
                    
                }

                if(nbA < 2 || nbA > 3) {
                    ecran[i].style.background = "red";
                }

            } else { // apparition cellule
                
                let nbB = 0;

                if(ecran[i - 100].style.background == "black" || ecran[i - 100].style.background == "red") {
                    nbB++;
                }

                if(ecran[i - 101].style.background == "black" || ecran[i - 101].style.background == "red") {
                    nbB++;
                }

                if(ecran[i - 1].style.background == "black" || ecran[i - 1].style.background == "red") {
                    nbB++;
                }

                if(ecran[i + 99].style.background == "black" || ecran[i + 99].style.background == "red") {
                    nbB++;
                }

                if(ecran[i + 100].style.background == "black" || ecran[i + 100].style.background == "red") {
                    nbB++;
                }

                if(nbB == 3) {
                    ecran[i].style.background = "green";
                    
                }
            }
        }

        if(i >= 101 && i <= 198 || (i >= 201 && i <= 298) || (i >= 301 && i <= 398) || (i >= 401 && i <= 498) || (i >= 501 && i <= 598) ||
        (i >= 601 && i <= 698) || (i >= 701 && i <= 798) || (i >= 801 && i <= 898) || (i >= 901 && i <= 998) || (i >= 1001 && i <= 1098) || 
        (i >= 1101  && i <= 1198) || (i >= 1201 && i <= 1298) || (i >= 1301 && i <= 1398) || (i >= 1401 && i <= 1498) || (i >= 1501 && i <= 1598)
        || (i >= 1601 && i <= 1698) || (i >= 1701 && i <= 1798) || (i >= 1801 && i <= 1898) || (i >= 1901 && i <= 1998) || (i >= 2001 && i <= 2098)
        || (i >= 2101 && i <= 2198) || (i >= 2201 && i <= 2298) || (i >= 2301 && i <= 2398) || (i >= 2401 && i <= 2498) || (i >= 2501 && i <= 2598)
        || (i >= 2601 && i <= 2698) || (i >= 2701 && i <= 2798) || (i >= 2801 && i <= 2898) || (i >= 2901 && i <= 2998) || (i >= 3001 && i <= 3098)
        || (i >= 3101 && i <= 3198) || (i >= 3201 && i <= 3298) || (i >= 3301 && i <= 3398) || (i >= 3401 && i <= 3498) || (i >= 3501 && i <= 3598)
        || (i >= 3601 && i <= 3698) || (i >= 3701 && i <= 3798) || (i >= 3801 && i <= 3898) || (i >= 3901 && i <= 3998) || (i >= 4001 && i <= 4098)
        || (i >= 4101 && i <= 4198) || (i >= 4201 && i <= 4298) || (i >= 4301 && i <= 4398) || (i >= 4401 && i <= 4498) || (i >= 4501 && i <= 4598)
        || (i >= 4601 && i <= 4698) || (i >= 4701 && i <= 4798) || (i >= 4801 && i <= 4898)) { // cellules du milieu
            if(ecran[i].style.background == "black") { // dispairition cellule

                let nbA = 0;

                if(ecran[i - 101].style.background == "black" || ecran[i - 101].style.background == "red") {
                    nbA++;
                }

                if(ecran[i - 100].style.background == "black" || ecran[i - 100].style.background == "red") {
                    nbA++;
                }

                if(ecran[i - 99].style.background == "black" || ecran[i - 99].style.background == "red") {
                    nbA++;
                }

                if(ecran[i + 1].style.background == "black" || ecran[i + 1].style.background == "red") {
                    nbA++;
                }

                if(ecran[i + 101].style.background == "black" || ecran[i + 101].style.background == "red") {
                    nbA++;
                }

                if(ecran[i + 100].style.background == "black" || ecran[i + 100].style.background == "red") {
                    nbA++;
                }

                if(ecran[i + 99].style.background == "black" || ecran[i + 99].style.background == "red") {
                    nbA++;
                }

                if(ecran[i - 1].style.background == "black" || ecran[i - 1].style.background == "red") {
                    nbA++;
                }

                if(nbA < 2 || nbA > 3) {
                    ecran[i].style.background = "red";
                }

            } else { // apparition cellule

                let nbB = 0;

                if(ecran[i - 101].style.background == "black" || ecran[i - 101].style.background == "red") {
                    nbB++;
                }

                if(ecran[i - 100].style.background == "black" || ecran[i - 100].style.background == "red") {
                    nbB++;
                }

                if(ecran[i - 99].style.background == "black" || ecran[i - 99].style.background == "red") {
                    nbB++;
                }

                if(ecran[i + 1].style.background == "black" || ecran[i + 1].style.background == "red") {
                    nbB++;
                }

                if(ecran[i + 101].style.background == "black" || ecran[i + 101].style.background == "red") {
                    nbB++;
                }

                if(ecran[i + 100].style.background == "black" || ecran[i + 100].style.background == "red") {
                    nbB++;
                }

                if(ecran[i + 99].style.background == "black" || ecran[i + 99].style.background == "red") {
                    nbB++;
                }

                if(ecran[i - 1].style.background == "black" || ecran[i - 1].style.background == "red") {
                    nbB++;
                }

                if(nbB == 3) {
                    ecran[i].style.background = "green";
                }
            }
        }
    }

    for(let i = 0; i < 5000; i++) {
        if(ecran[i].style.background == "red") {
            ecran[i].style.background = "white"
        }

        if(ecran[i].style.background == "green") {
            ecran[i].style.background = "black";
        }
    }
}

next.addEventListener("click", gen);

function genAuto() {
    interval = setInterval(gen, 250);
}

auto.addEventListener("click", genAuto);

const stop = document.getElementById("stop");

stop.addEventListener("click", () => {
    clearInterval(interval);
})