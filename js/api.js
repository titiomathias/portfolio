const url = "https://99reviews.discloud.app/reviews";

axios.get(url, {
    headers: {
        Host: "matheusdealencar.com"
    },
    withCredentials: false
}).then(function (response) {
    if (Array.isArray(response.data)) {
        let content = ""; 

        response.data.forEach(function (item) {
            content += 
            `
            <article class='feedback c-carousel__slide'>
                <a href="${item.link}" target="_blank" class="feedback-title"><h3>${item.title}</h3></a>
                <div class="comment-container">
                    <p class='comment'>${item.comment}</p>
                </div>
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
                rewind: true,
                duration: 0.2,
                ease: "ease-in-out",
                scrollLock: true,
                scrollLockDelay: 0,
            });
        } else {
            console.error("Elemento .js-carousel--simple não encontrado.");
        }
    } else {
        console.log("Is not array")
    }
}).catch(function (error) {
    console.error("Erro:", error)
    if (error.response){
        console.error("Status:", error.response.status);
        console.error("Headers:", error.response.headers);
    }
});