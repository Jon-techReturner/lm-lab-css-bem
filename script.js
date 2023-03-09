const darkside = [
    {
        "title": "THE DARK SIDE",
        "name": "DARTH VADER",
        "photo": "./images/darth-vader.png"
    },
    {
        "title": "THE DARK SIDE",
        "name": "ASAJJ VENTRESS",
        "photo": "./images/Asajj-Ventress-darkside.png"
    },
    {
        "title": "THE DARK SIDE",
        "name": "KYLO REN",
        "photo": "./images/Kylo-ren-darkside.png"
    },
    {
        "title": "THE DARK SIDE",
        "name": "SAVAGE OPRESS",
        "photo": "./images/Savage-Opress-darkside.png"
    }
];

const theForce = [
    {
        "title": "THE FORCE",
        "name": "YODA",
        "photo": "./images/yoda-theForce.png"
    },
    {
        "title": "THE FORCE",
        "name": "OBI WAN KINOBI",
        "photo": "./images/Obi-Wan-kenobi-theForce.png"
    },
    {
        "title": "THE FORCE",
        "name": "ANAKIN SKYWALKER",
        "photo": "./images/Anakin-skywalker-theForce.png"
    },
    {
        "title": "THE FORCE",
        "name": "CHEWBACCA aka 'CHEWIE'",
        "photo": "./images/chewbacca-theForce.png"
    }
];

const container__darkside = document.getElementById('card__darkside');
darkside.forEach((result, index) => {
    const card = document.createElement('div');
    card.classList = 'card__body';
    const content = `
    <div class="card__container card__container--DarthVader darkside-${index}">
        <div class="card__body card__body--DarthVader">
            <div class="card__title card__title--DarthVader">
                <h2>${result.title}</h2>
            </div>
            <div class="card__image">
                <img src="${result.photo}" alt="a photo of master yoda, looks like meditating" class="img__darkside-${index}">
            </div>
            <div class="card__content">
                <div class="card__name card__name-DarthVader">
                    <h4>${result.name}</h4>
                </div>
                <p class="card__text card__text--Yoda">LOVE</p>
                <p class="card__text card__text--Yoda">BEAUTY</p>
                <p class="card__text card__text--Yoda">CSS THAT SCALES!</p>
                <p class="card__text card__text--Yoda">GREAT WARRIOR. WARS NOT MAKE ONE GREAT!</p>
            </div>
            <div class="card__button">
                <button class="button buttonDanger">Dark</button>
            </div>
        </div>
    </div>
    `;
    container__darkside.innerHTML += content;
});

const container__theForce = document.getElementById('card__theForce');
theForce.forEach((result, index) => {
    const card = document.createElement('div');
    card.classList = 'card__body';
    const content = `
    <div class="card__container card__container--Yoda theForce-${index}">
        <div class="card__body card__body--Yoda">
            <div class="card__title card__title--Yoda">
                <h2>${result.title}</h2>
            </div>
            <div class="card__image">
                <img src="${result.photo}" alt="a photo of master yoda, looks like meditating" class="img__theForce-${index}">
            </div>
            <div class="card__content">
                <div class="card__name card__name-Yoda">
                    <h4>${result.name}</h4>
                </div>
                <p class="card__text card__text--Yoda">LOVE</p>
                <p class="card__text card__text--Yoda">BEAUTY</p>
                <p class="card__text card__text--Yoda">CSS THAT SCALES!</p>
                <p class="card__text card__text--Yoda">GREAT WARRIOR. WARS NOT MAKE ONE GREAT!</p>
            </div>
            <div class="card__button">
                <button class="button buttonWarning">Force</button>
            </div>
        </div>
    </div>
    `;
    container__theForce.innerHTML += content;
});

