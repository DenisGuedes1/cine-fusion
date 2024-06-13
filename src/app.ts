import express, { Application, RequestHandler } from "express";
import "express-async-errors";
import { handlreErrors } from "./error/handleError";
import cors from "cors";
import userRouter from "./router/router.user";
import NotAdminRouter from "./router/routerUserNotAdmin.router";
import movieRouter from "./router/private/movie.router";
import { createProxyMiddleware } from "http-proxy-middleware";
import http from 'http';
import { veriFyTokenIsValid } from "./middleware/verifyTokenIsvalid.middleware";
import tokenValidationRouter from "./router/validateToken";

const app: Application = express();
app.use(express.json());

app.use(
    cors({
        origin: true,
    })
);
app.use(
    cors({
        origin: "http://localhost:5173",
    })
);
const proxyOptions= {
    target: 'https://reidoscanais.app',
    changeOrigin: true,
    pathRewrite: {
        '^/videos': ''
    },
    onProxyReq: (proxyReq: http.ClientRequest, req: express.Request, res: express.Response) => {
        console.log(`Proxying request to: ${proxyReq.getHeader('host')}${proxyReq.path}`);
    }
};

const proxyOptionsMovie = {
    target: 'https://embedder.net',
    changeOrigin: true,
    pathRewrite: (path: string, req: express.Request) => {
        // Extrair o IMDb ID da URL original e construir a nova URL
        const imdbId = path.split('/').pop(); // Extrai o IMDb ID da URL original
        return `/e/${imdbId}`;
    },
    onProxyReq: (proxyReq: http.ClientRequest, req: express.Request, res: express.Response) => {
        console.log(`Proxying request to: ${proxyReq.getHeader('host')}${proxyReq.path}`);
    }
};
const proxyOptionsFlixTwo = {
    target: 'https://superflixapi.top',
    changeOrigin: true,
    pathRewrite: (path: string, req: express.Request) => {
        // Extrair o IMDb ID da URL original e construir a nova URL
        const imdbId = path.split('/').pop(); // Extrai o IMDb ID da URL original
        return `/filme/${imdbId}`;
    },
    onProxyReq: (proxyReq: http.ClientRequest, req: express.Request, res: express.Response) => {
        console.log(`Proxying request to: ${proxyReq.getHeader('host')}${proxyReq.path}`);
    }
};

app.use('/embed/servertwo', createProxyMiddleware(proxyOptionsFlixTwo));
app.use('/embed/movie', createProxyMiddleware(proxyOptionsMovie));
app.use('/api/validation', veriFyTokenIsValid, tokenValidationRouter);
app.use('/videos',createProxyMiddleware(proxyOptions));
app.use("/user", userRouter);
app.use("/cinefusion", NotAdminRouter);
app.use("/priv",movieRouter)
app.use(handlreErrors);
export default app;
