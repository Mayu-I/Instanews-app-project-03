$(function () {
    const category = $('.header__sectionWrapper').val();
    $.ajax({
        type: 'GET',
        url: 'https://api.nytimes.com/svc/topstories/v2/science.json?api-key=91MnfWevTdr6zkWbGOsM5wjGin9Hej9K',
        dataType: 'JSON',
        data: {
            'api-key': '91MnfWevTdr6zkWbGOsM5wjGin9Hej9K'
        },
        success: function (data) {
            console.log(data)
        }
        // error: function (err) {
        //     console
        // });
    });
});