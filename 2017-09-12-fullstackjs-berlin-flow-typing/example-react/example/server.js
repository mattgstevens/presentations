const express = require('express')

import type { $Request, $Response } from 'express'
import type { ApiGreeter$Request } from 'my-types'

const app = express()

app.get('/api/v0/greeter', (req: $Request, res: $Response) => {
  const name = req.body.name
  res.send(`Hello ${name}`)
})

app.get('api/v1/greeter', (req: ApiGreeter$Request, res: $Response) => {
  const name = req.body.name
  res.send(`Hello ${name}`)
})

app.listen(5050)
