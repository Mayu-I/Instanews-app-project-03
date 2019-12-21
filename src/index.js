$(function () {
    const getArticles = () => {
        const category = $('.header__sectionWrapper').val();
        $.ajax ({
            type: 'GET',
            url: `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=91MnfWevTdr6zkWbGOsM5wjGin9Hej9K`,
            beforeSend: function () {
                $('.loader').removeClass('hide');
            },
            success: function () {
                $('.loader').addClass('hide');
            }
        })
            .then(
                data => {
                    if (data.results.length >= 12) {
                        for (let i = 0; i < 12; i++) {
                            if (data.results[i].multimedia.length >= 5) {
                                const link = data.results[i].url;
                                const img = data.results[i].multimedia[4].url;
                                const desc = data.results[i].abstract;
                                $(`<a href='${link}' class='articles__item' style='background-image:url(${img});' target='_blank'>
                            <article>
                            <p class='articles__desc hideDesc'>${desc}</p>
                            </article>
                            </a>`).appendTo('.articles');
                            }
                        }
                    } 
                    else {
                        for (let i = 0; i < data.results.length; i++) {
                            if (data.results[i].multimedia.length >= 5) {
                                const link = data.results[i].url;
                                const img = data.results[i].multimedia[4].url;
                                const desc = data.results[i].abstract;
                                $(`<a href='${link}' class='articles__item' style='background-image:url(${img});' target='_blank'>
                            <article>
                            <p class='articles__desc hideDesc'>${desc}</p>
                            </article>
                            </a>`).appendTo('.articles');
                            }
                        }
                    }
                }
            )
            .fail(function() {
                $('.articles').append('<p class="failed">Could not generate content. Please try again later. If the issue persists, contact the website administrator.</p>')
                $('.loader').hide()
            })
    }

    getArticles();

    $('.header__sectionWrapper').change(function () {
        $('.articles').empty();
        getArticles();
    });

    //abstract
    $('.articles').mouseover(
        function (event) {
            $($(event.target).find('.articles__desc')[0])
                .removeClass('hideDesc')
                .addClass('show')
        })

    $('.articles').mouseout(
        function (event) {
            $($(event.target).find('.articles__desc')[0])
                .addClass('hideDesc')
                .removeClass('show')
        }
    )

    //header
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
            $('.header').addClass('clicked');
        } else {
            $('.header').removeClass('clicked');
        }
    }
});



