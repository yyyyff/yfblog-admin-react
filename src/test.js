const jwt_decode = require('jwt-decode')

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImF1dGhMZXZlbCI6OTksImlhdCI6MTU3MjIzMTkyNCwiZXhwIjoxNTcyMjM1NTI0fQ.BCqjTUEfWzRul5j4wcL0R6UXaoHqZeSj_uM19qdtXJk'
const decoded = jwt_decode(token)
console.log(decoded)