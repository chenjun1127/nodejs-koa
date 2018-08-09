const router = require('koa-router')();

router.get('/third-page', async(ctx) => {
    await ctx.render('third', {
        obj: {
            text: 'Third-page',
        },
        menu: ctx.state.menu,
    })
})

module.exports = router;