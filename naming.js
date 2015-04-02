var words = ['Horse',
'Pig',
'Dog',
'Cat',
'Parrot',
'Iguana'
];
function randomWord(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

for(var x=0; x<20; x++)
    console.log(randomWord(words));
