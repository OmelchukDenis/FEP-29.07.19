    let todoListItems = [
        {
            title: 'Hello',
            isDone: true
        },
        {
            title: 'Hello',
            isDone: true
        },
        {
            title: 'Hello',
            isDone: true
        },
        {
            title: 'Hello',
            isDone: true
        },
        {
            title: 'Hello',
            isDone: true
        },
        {
            title: 'Hello',
            isDone: true
        },
        {
            title: 'Hello',
            isDone: true
        },
        {
            title: 'Hello',
            isDone: true
        },
        {
            title: 'Another',
            isDone: false
        },
        {
            title: 'Third',
            isDone: false
        },
    ].map(el => el.title);

    const titles = new Set(todoListItems)

    // todoListItems.forEach(item => {
    //     titles.add(item.title);
    // })

    console.log(todoListItems, titles.values())