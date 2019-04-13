const places = document.querySelectorAll('.game div');

let play = '<p>X</p>';

const checkVictory = function () {
    const p0 = places[0].innerHTML;
    const p1 = places[1].innerHTML;
    const p2 = places[2].innerHTML;
    const p3 = places[3].innerHTML;
    const p4 = places[4].innerHTML;
    const p5 = places[5].innerHTML;
    const p6 = places[6].innerHTML;
    const p7 = places[7].innerHTML;
    const p8 = places[8].innerHTML;

    if (p0 === p1 && p1 === p2 && p2 !== '' ||
        p3 === p4 && p4 === p5 && p5 !== '' ||
        p6 === p7 && p7 === p8 && p8 !== '' ||
        p0 === p3 && p3 === p6 && p6 !== '' ||
        p1 === p4 && p4 === p7 && p7 !== '' ||
        p2 === p5 && p5 === p8 && p8 !== '' ||
        p0 === p4 && p4 === p8 && p8 !== '' ||
        p2 === p4 && p4 === p6 && p6 !== '') {        
            if (play === '<p>X</p>') {
                alert('Parabéns, o Jogador 1 venceu!');
            }
            else {
                alert('Parabéns, o Jogador 2 venceu!');
            }

            for (const place of places) {
                place.onclick = null;
            }            
    }
    else {
        if (
            p0 !== '' && p1 !== '' && p2 !== '' &&
            p3 !== '' && p4 !== '' && p5 !== '' &&
            p6 !== '' && p7 !== '' && p8 !== '') {
                alert('Deu velha!');
            }

        // let deuVelha = true;

        // for (const place of places) {
        //     if (place === '') {
        //         deuVelha = false;
        //     }
        // }

        // if (deuVelha) {
        //     alert('Deu velha');
        // }
    }
}

const makePlay = function(e) {
    const place = e.target;

    // if (place.innerHTML !== '') {
    //     return;
    // }

    place.innerHTML = play;

    checkVictory();

    if (play === '<p>X</p>') {
        play = '<p>O</p>';
    }
    else {
        play = '<p>X</p>';
    }

    place.onclick = null;
}

for (const place of places) {
    place.onclick = makePlay;
}