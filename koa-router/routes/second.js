const router = require('koa-router')();

router.get('/second-page', async(ctx) => {
    ctx.response.type = 'html';
    ctx.response.body = '<p>This is second Page</p><a href="/">Back Index Page</a>';
})

module.exports = router;