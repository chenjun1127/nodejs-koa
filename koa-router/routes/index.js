const router = require('koa-router')();

router.get('/', async(ctx) => {
    // console.log(ctx.author,ctx.state);
    await ctx.render('index', {
        indexObj: {
            name: {
                first: ctx.author,
                last: 'Holowaychuk'
            },
            species: 'boy',
            age: 30,
            title: '首页',
        },
        menu: ctx.state.menu,
    })
})

module.exports = router;