import express from 'express'

const PORT = process.env.PORT || 5000

const app = express()

app.get('/', (req, res) => {
	res.send('Hi there from express server! 🚀')
})

app.listen(PORT, () => {
	console.log(`[INFO] == > Listening on port ${PORT}`)
	console.log(`[INFO] == > http://localhost:${PORT}`)
})
