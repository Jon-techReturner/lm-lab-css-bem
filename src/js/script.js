const darkside = [
    {
        "name": "DARTH VADER",
        "class_name": "vader",
        "photo": "./images/darth-vader.png"
    },
    {
        "name": "DARTH SIDIOUS",
        "class_name": "sidious",
        "photo": "./images/Darth-Sidious-darkside.png"
    },
    {
        "name": "ASAJJ VENTRESS",
        "class_name": "asajj",
        "photo": "./images/Asajj-Ventress-darkside.png"
    },
    {
        "name": "KYLO REN",
        "class_name": "kylo",
        "photo": "./images/Kylo-ren-darkside.png"
    },
    {
        "name": "SAVAGE OPRESS",
        "class_name": "savage",
        "photo": "./images/Savage-Opress-darkside.png"
    }
];

const theForce = [
    {
        "name": "YODA",
        "class_name": "yoda",
        "photo": "./images/yoda-theForce.png"
    },
    {
        "name": "OBI WAN KINOBI",
        "class_name": "obiwan",
        "photo": "./images/Obi-Wan-kenobi-theForce.png"
    },
    {
        "name": "ANAKIN SKYWALKER",
        "class_name": "anakin",
        "photo": "./images/Anakin-skywalker-theForce.png"
    },
    {
        "name": "CHEWBACCA aka 'CHEWIE'",
        "class_name": "chewie",
        "photo": "./images/chewbacca-theForce.png"
    },
    {
        "name": "AHSOKA TANO",
        "class_name": "ahsoka",
        "photo": "./images/ahsoka-tano-theForce.png"
    }
];

const container__darkside = document.getElementById('card__darkside');
darkside.forEach((result, index) => {
    const card = document.createElement('div');
    card.classList = 'card__body';
    const content = `
    <div class="card__container card__container--DarthVader darkside-${index}">
        <div class="card__body card__body--DarthVader">
            <div class="card__name card__name--DarthVader">
                <h4>${result.name}</h4>
            </div>
            <div class="card__image">
                <img src="${result.photo}" alt="a photo of master yoda, looks like meditating" class="img__darkside-${index}">
            </div>
            <div class="card__button">
                <button class="button button__${result.class_name}">Dark</button>
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
            <div class="card__name card__name--Yoda">
                <h4>${result.name}</h4>
            </div>
            <div class="card__image">
                <img src="${result.photo}" alt="a photo of master yoda, looks like meditating" class="img__theForce-${index}">
            </div>
            <div class="card__button">
                <button class="button button__${result.class_name}">Force</button>
            </div>
        </div>
    </div>
    `;
    container__theForce.innerHTML += content;
});

