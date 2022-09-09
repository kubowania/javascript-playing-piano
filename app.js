const pianoKeys = document.querySelectorAll('.key')

function playSound(newUrl) {
    console.log(newUrl)
    new Audio(newUrl).play()
}


pianoKeys.forEach((pianoKey, i) => {
    const number = i < 9 ? '0' + (i + 1) : (i + 1)
    const newUrl = '24-piano-keys/key' + number + '.mp3'
    pianoKey.addEventListener('click', () => playSound(newUrl))
})

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 9:
            playSound('24-piano-keys/key01.mp3');  
            break; 
        case 49:
            playSound('24-piano-keys/key02.mp3');  
            break; 
        case 81:
            playSound('24-piano-keys/key03.mp3');  
            break; 
        case 50:
            playSound('24-piano-keys/key04.mp3');  
            break; 
        case 87:
            playSound('24-piano-keys/key05.mp3');  
            break; 
        case 51:
            playSound('24-piano-keys/key06.mp3');  
            break; 
        case 69:
            playSound('24-piano-keys/key07.mp3');  
            break; 
        case 82:
            playSound('24-piano-keys/key08.mp3');  
            break; 
        case 53:
            playSound('24-piano-keys/key09.mp3');  
            break; 
        case 84:
            playSound('24-piano-keys/key10.mp3');  
            break; 
        case 54:
            playSound('24-piano-keys/key11.mp3');  
            break; 
        case 89:
            playSound('24-piano-keys/key12.mp3');  
            break; 
        case 85:
            playSound('24-piano-keys/key13.mp3');  
            break; 
        case 56:
            playSound('24-piano-keys/key14.mp3');  
            break; 
        case 73:
            playSound('24-piano-keys/key15.mp3');  
            break; 
        case 57:
            playSound('24-piano-keys/key16.mp3');  
            break; 
        case 79:
            playSound('24-piano-keys/key17.mp3');  
            break; 
        case 48:
            playSound('24-piano-keys/key18.mp3');  
            break; 
        case 80:
            playSound('24-piano-keys/key19.mp3');  
            break; 
        case 219:
            playSound('24-piano-keys/key20.mp3');  
            break; 
        case 187:
            playSound('24-piano-keys/key21.mp3');  
            break; 
        case 221:
            playSound('24-piano-keys/key22.mp3');  
            break; 
        case 8:
            playSound('24-piano-keys/key23.mp3');  
            break; 
        case 13:
            playSound('24-piano-keys/key24.mp3');  
            break; 
    }
};