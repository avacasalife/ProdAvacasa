import { Client } from 'pg'
 
const client = new Client({
  connectionString: "postgres://neondb_owner:npg_C3hDc4fEAbty@ep-black-unit-a1p67zt2-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require" 
})

export default client