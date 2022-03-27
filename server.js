const Koa = require("koa");
const Router = require("@koa/router");
const helmet = require("koa-helmet");
const koaBody = require('koa-body')({multipart:true})
const cors = require("@koa/cors");

const app = new Koa();
const router = new Router();

app.use(cors());
app.use(helmet());


router.get("/", (ctx) => {
	ctx.response.body =
		"As we all stand on the shoulders of giants, tomorrow I hope to be the same for you.";
});

router.post("/", koaBody, (ctx) => {
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

router.get("/csv", (ctx) => {
	ctx.response.body = 'blep.'
});

router.post("/csv", (ctx) => {
	ctx.response.body = JSON.stringify(ctx.request.files)
});

router.post("/formData", (ctx) => {
	ctx.response.body = JSON.stringify(ctx.request.body)
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
