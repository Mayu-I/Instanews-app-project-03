$(function () {
    const category = $('.header__sectionWrapper').val();
    $.ajax({
        type: 'GET',
        url: `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=91MnfWevTdr6zkWbGOsM5wjGin9Hej9K`,
    })
        .then(
            data => {
                console.log(data);
                // for (let i = 0; i < 6; i++) {

                // }
            },
            error => alert('Failed to load')
        )
});