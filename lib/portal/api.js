const fs = require('fs'),
    { promisify } = require('util'),
    path = require('path'),
    Config = require('../config')

const configPath = process.env.MockConfig
const rootPath = process.cwd()

exports.getConfig = async (ctx, next) => {
    ctx.body = Config
}

/** 
 * @requires request.body ,used to overwrite the mock-server.json
 */
exports.setConfig = async (ctx, next) => {
    let newConfig = ctx.request.body
    // overwrite to RAM
    Object.keys(Config).forEach(s => delete Config[s])
    Object.keys(newConfig).forEach(s => Config[s] = newConfig[s])
    // overwrite to ROM
    await promisify(fs.writeFile)(configPath, JSON.stringify(Config, null, 2))
    ctx.body = { message: 'success' }
}

/**
 * @requires querystring.type
 * @requires querystring.id
 */
exports.getEndpoint = async (ctx, next) => {
    let { type, id } = ctx.query
    let resData = Config[type].endpoints[id]
    resData = Object.assign({}, resData)
    if (resData.filePath) {
        const filePath = path.join(rootPath, resData.filePath),
            fileData = await promisify(fs.readFile)(filePath)
        resData.fileData = fileData.toString()
    }
    ctx.body = resData
}

/**
 * @requires querystring.type
 * @requires querystring.id
 * @requires request.body , to overwrite the config file in configs.
 * @param require.body.fileData , to overwrite the config file in configs.
 */
exports.editEndpoint = async (ctx, next) => {
    let body = ctx.request.body
    let { type, id } = ctx.query
    let endPoint = Config[type].endpoints[id]

    if (endPoint) {
        if (body.mockConfig) {
            Config[type].endpoints[id] = body.mockConfig
            endPoint = body.mockConfig
        }

        if (body.fileData) {
            endPoint.filePath = endPoint.filePath || `./json-${type.replace('serve', '')}${endPoint.endpoint.replace(/\//g, '-')}.hbs`.toLowerCase()
            const filePath = path.join(rootPath, endPoint.filePath)
            await promisify(fs.writeFile)(filePath, body.fileData)
        }
        await promisify(fs.writeFile)(configPath, JSON.stringify(Config, null, 2))
        ctx.body = { message: 'success' }
    } else {
        ctx.body = { message: 'failed' }
    }
}

/**
 * @requires querystring.type
 * @requires querystring.id
 */
exports.deleteEndpoint = async (ctx, next) => {
    let { type, id } = ctx.query
    let endPoint = Config[type].endpoints[id]
    if (endPoint.filePath) {
        //delete config file in configs folder
        try {
            let filePath = path.join(rootPath, endPoint.filePath)
            fs.unlinkSync(filePath)
        } catch(e) {
            console.error('unlink file failed.', e)
        }
    }

    //delete in mock-server.json
    Config[type].endpoints.splice(id, 1)
    await promisify(fs.writeFile)(configPath, JSON.stringify(Config, null, 2))
    ctx.body = { message: 'success' }
}

/**
 * @requires querystring.type ， the type of endpoint you want to add
 * @requires request.body 
 * @param request.body.mockConfig will be added into the mock-server.json
 * @param request.body.fileData will be added into the configs folder as a '.hbs' file.
 */
exports.addEndpoint = async (ctx, next) => {
    let body = ctx.request.body
    let { type } = ctx.query
    let endPoint = body.mockConfig
    //add config file to configs folder
    if (body.fileData) {
        endPoint.filePath = endPoint.filePath || `./json-${type.replace('serve', '')}${endPoint.endpoint.replace(/\//g, '-')}.hbs`.toLowerCase()
        let filePath = path.join(rootPath, endPoint.filePath)
        await promisify(fs.writeFile)(filePath,body.fileData)
    }
    //add to mock-server.json
    Config[type].endpoints.push(endPoint)
    await promisify(fs.writeFile)(configPath, JSON.stringify(Config, null, 2))
    ctx.body = { message: 'success' }
}









