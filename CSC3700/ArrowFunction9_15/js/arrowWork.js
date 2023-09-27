function doArrows() {
    alert("yoooo")
    let x = 12;
    let sq = square(x);
    console.log(`SQ:${square(x)}`)
    const sq2 = (n) => {
        return n * n;
    }
    const sq3 = (n, n2) => {
        return n * n2;
    }
    const sq4 = (n, n2) => n * n2;

    let s2 = sq2(33);
    console.log(`SQ2:${s2}`)
    console.log(`SQ3:${sq3(7, 8)}`)
    console.log(`SQ4:${sq4(5, 6)}`)
}

function square(n) {
    return n * n;
}

function doArrows2() {
    // alert("click2")

    setTimeout( () => {
        alert("Stranger things are happening")
    }, 2000 );
    alert("This has happened")
    alert("This has happened")
    alert("This has happened")
}