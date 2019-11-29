export default class Ajax {
    $(function() {
        const category = $('.header__sectionWrapper').val();
        $.ajax({
            type: 'GET',
            url: 'https://api.nytimes.com/svc/topstories/v2/science.json?api-key=91MnfWevTdr6zkWbGOsM5wjGin9Hej9K',
        })
            .then(
                data => console.log(data),
                error => alert('Failed to load')
            )
    });
}