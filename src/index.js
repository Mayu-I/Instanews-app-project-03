$(function () {
    const getArticles = () => {
        const category = $('.header__sectionWrapper').val();
        $.ajax({
            type: 'GET',
            url: `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=91MnfWevTdr6zkWbGOsM5wjGin9Hej9K`,
        })
            .then(
                data => {
                    // if ($(".articles").is(':empty')) {
                    //     $(`<p class="articles__empty">Oops! No articles in ${category}...</p>`)
                    //         .appendTo("content");
                    // } else {
                    for (let i = 0; i < 12; i++) {
                        const link = data.results[i].url;
                        const img = data.results[i].multimedia[4].url;
                        const desc = data.results[i].abstract;
                        $(`<a href="${link}" class="articles__item" style="background-image:url('${img}');" target="_blank">
                <article>
                    <p class="articles__desc hide">${desc}</p>
                </article>
            </a>`)
                            .appendTo(".articles");
                    }
                    // }
                },
                error => alert('Failed to load')
            )
    }

    getArticles();
    $('.header__sectionWrapper').change(function () {
        $(".articles").empty();

        getArticles();

    });

    $()
});



