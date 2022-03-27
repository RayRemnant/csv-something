const Koa = require("koa");
const Router = require("@koa/router");
const helmet = require("koa-helmet");
const bodyParser = require("koa-bodyparser");
const cors = require("@koa/cors");

const app = new Koa();
const router = new Router();

app.use(cors());
app.use(helmet());
app.use(bodyParser({
    formidable:{uploadDir: './uploads'},
    multipart: true,
    urlencoded: true
 }));


router.get("/", (ctx) => {
	ctx.response.body =
		"As we all stand on the shoulders of giants, tomorrow I hope to be the same for you.";
});

router.post("/", (ctx) => {
	ctx.response.body =
		"As we all stand on the shoulders of giants, tomorrow I hope to be the same for you.";
});

/* const basicAuth = process.env.BASIC_AUTH;

router.use(async (ctx, next) => {
	//console.log(ctx.request.header);
	if (basicAuth && ctx.request.header.authorization !== basicAuth) {
		ctx.throw(401);
	}
	//console.log("Auth OK");
	await next();
}); */

let csv = ''

router.get("/csv", (ctx) => {
    console.log(csv)
	ctx.response.body = JSON.stringify(csv) 
});

router.post("/csv", (ctx) => {
    console.log(ctx.request.body)
    csv = ctx.request, ctx.request.body
	ctx.response.body = JSON.stringify(csv), ctx.request.body, ctx.req.body
});


router.use((ctx) => {
	ctx.response.status = 404;
});

app.use(router.routes());

app.on("error", (e) => {
	console.error(e);
});

// PORT
const port = process.env.PORT || 3003;
app.listen(port, () => {});
console.log("listening on port " + port);
