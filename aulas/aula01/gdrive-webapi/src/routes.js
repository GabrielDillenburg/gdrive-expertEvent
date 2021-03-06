import { logger } from "./logger.js"

export default class Routes {
    io
    constructor() {

    }

    setSocketInstance(io) {
        this.io = io
    } 

    async defaultRoute(req, res) {
        res.end('hello world')
    }

    async options(req, res) {
        res.writeHead(204)
        res.end('hello world')
    }

    async post(req, res) {
        logger.info("post")
        res.end()
    }

    async get(req, res) {
        const files = await this.fileHelper.getFilesStatus(this.downloadsFolder)

        response.writeHead(200)
        response.end(JSON.stringify(files))
    }

    handler(req, res) {
        res.setHeader('Access-Control-Allow-Origin', '*')
        const chosen = this[req.method.toLowerCase()] || this.defaultRoute

        return chosen.apply(this, [req, res])

    }
}