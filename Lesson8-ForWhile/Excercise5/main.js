// DRAW TRIANGLES
let i, j;

document.write("<br/>");
for (i = 1; i <= 5; i++) {
    for (j = 1; j <= i; j++)  {
        document.write("*");
    }
    document.write("<br/>");
}

document.write("<br/>");
for (i = 5; i >= 1; i--) {
    for (j = 1; j <= i; j++)  {
        document.write("*");
    }
    document.write("<br/>");
}

document.write("<br/>");
for (i = 1; i <= 5; i++) {
    for (j = 1; j <= 5; j++)  {
        if (j<=(5-i)) {
            document.write('&nbsp'+'&nbsp');
        } else (document.write("*"));
    }
    document.write("<br/>");
}

document.write("<br/>");
for (i = 5; i >= 1; i--) {
    for (j = 1; j <= 5; j++)  {
        if (j>(5-i)) {
            document.write("*");
        } else (document.write('&nbsp'+'&nbsp'));
    }
    document.write("<br/>");
}


