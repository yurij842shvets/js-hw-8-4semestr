let time = 0

const interval = setInterval(() => {
    console.log('hello')
    time++
    
    if(time === 5) {
        clearInterval(interval)
    }
}, 1000)