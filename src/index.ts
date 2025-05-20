import express, { RequestHandler } from 'express'
import path from 'path'
import fs from 'fs'

const app = express()
const port = parseInt(process.env.PORT || '80', 10)

// Middleware to handle the SSL verification file requests
app.get('/.well-known/pki-validation/:filename', ((req, res) => {
    const filename = req.params.filename
    const filePath = path.join(__dirname, '..', 'verificationFiles', filename)

    // Check if file exists
    if (!fs.existsSync(filePath)) {
        return res.status(404).send('Verification file not found')
    }

    // Read and send file content
    try {
        const content = fs.readFileSync(filePath, 'utf-8')
        res.setHeader('Content-Type', 'text/plain')
        res.send(content)
    } catch (error) {
        console.error('Error reading verification file:', error)
        res.status(500).send('Error reading verification file')
    }
}) as RequestHandler)

// Basic health check endpoint
app.get('/health', ((_req, res) => {
    res.status(200).send('OK')
}) as RequestHandler)

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port ${port}`)
    console.log(`SSL verification files should be placed in: ${path.join(__dirname, '..', 'verificationFiles')}`)
})
