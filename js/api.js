const url = "http://localhost:8080/reviews";

axios.get(url).then(function (response) {
    if (Array.isArray(response.data)) {
        let content = ""; 

        response.data.forEach(function (item) {
            content += 
            `
            <article class='feedback c-carousel__slide'>
                <a href="${item.link}" target="_blank" class="feedback-title"><h3>${item.title}</h3></a>
                <p class='comment'>${item.comment}</p>
            </article>
            `;
        });

        document.getElementById("result").innerHTML = content;

        const $simpleCarousel = document.querySelector(".js-carousel--simple");

        if ($simpleCarousel) {
            new Glider($simpleCarousel, {
                slidesToShow: 1,
                draggable: true,
                dots: ".js-carousel--simple-dots",
                arrows: {
                    prev: "#glider-prev",
                    next: "#glider-next",
                },
            });
        } else {
            console.error("Elemento .js-carousel--simple não encontrado.");
        }
    } else {
        console.log("Is not array")
    }
}).catch(function (error) {
    console.error("Erro:", error)
});