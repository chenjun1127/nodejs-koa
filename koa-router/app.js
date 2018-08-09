const path = require('path');
const views = require('koa-views');
const serve = require('koa-static');
const Koa = require('koa');
const logger = require('koa-logger');
const router = require('koa-router')();
 
const koaBody = require('koa-body');
const app = new Koa();
const port = 3000;

var index = require('./routes/index');
var second = require('./routes/second');
var third = require('./routes/third');

app.use(views(path.join(__dirname, '/views/pages'), { extension: 'pug' }));
app.use(logger());
app.use(koaBody());
app.use(serve(path.join(__dirname, '/public')));

app.context.author = 'Jone-chen';
app.use(async(ctx, next) => {
    ctx.state = Object.assign({}, {
        menu: [{
            text: 'IndexPage',
            link: '/'
        }, {
            text: 'SecondPage',
            link: '/second-page'
        }, {
            text: 'ThirdPage',
            link: '/third-page'
        }]
    });
    await next();
});

app.use(index.routes());
app.use(second.routes());
app.use(third.routes());

app.listen(port, () => {
    console.log('app running on port: ' + port);
});