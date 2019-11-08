const USERS_URL = 'https://api.github.com/search/users';
const USER_URL = 'https://api.github.com/users/';

$(function () {
    const USER_INFO_TEMPLATE = $('#userInfoTemplate').html();
    const $userContainer = $('#userContainer');

    $searchInput = $('#searchInput').autocomplete({
        source: (request, response) => {
            $.get(USERS_URL, { q: request.term }, (data) => {
                response(data.items.map(user => user.login))
            });
        },
        minLength: 2,
        select: (event, ui) => { selectUser(ui.item.value); }
    });

    function selectUser(login) {
        fetchUserData(login)
            .done((resp) => {
                console.log(resp);
                renderUserData(resp);
                // showUserBlock()
            })
    }

    function fetchUserData(login) {
        return $.get(USER_URL + login);
    }

    function renderUserData(user){
        $userContainer.html(USER_INFO_TEMPLATE
                                .replace('{{name}}', user.name)
                                .replace('{{login}}', user.login)
                                .replace('{{html_url}}', user.html_url)
                                .replace('{{avatar_url}}', user.avatar_url)
                                .replace('{{public_repos}}', user.public_repos)
                                .replace('{{followers}}', user.followers)
                                .replace('{{registration}}', formatDate(user.created_at))
                                )
    }

    function formatDate(created_at){
        const d = new Date(created_at);

        return `${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`;
    };
})