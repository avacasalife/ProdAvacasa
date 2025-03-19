import { NextRequest, NextResponse } from "next/server";
import { Client } from "pg";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "";
const DATABASE_URL = process.env.DATABASE_URL || "";
async function createUsersTable() {
  const client = new Client({
    connectionString: DATABASE_URL,
  });
  await client.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        mobile VARCHAR(15) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
  } catch (error) {
    console.error("Error creating users table:", error);
  } finally {
    await client.end();
  }
}

createUsersTable();

export async function POST(req: NextRequest) {
  const client = new Client({
    connectionString: DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
      },
  });
  await client.connect();

  try {
    const { name, email, mobile, password } = await req.json();

    if (!name || !email || !mobile || !password) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const query = `INSERT INTO users (name, email, mobile, password) VALUES ($1, $2, $3, $4) RETURNING *`;
    const values = [name, email, mobile, hashedPassword];
    const result = await client.query(query, values);

    const user = result.rows[0];
    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY , { expiresIn: "1h" });

    return NextResponse.json({ message: "User created successfully", user, token }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  } finally {
    await client.end(); 
  }
}