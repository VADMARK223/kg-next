/**
 * @author Markitanov Vadim
 * @since 09.01.2025
 */
import {sql} from '@vercel/postgres'
import { Customer, Revenue } from '@/app/lib/definitions'

export async function fetchRevenues() {
  try {
    const data = await sql<Revenue>`SELECT * FROM revenue`;
    return data.rows;
  } catch (error) {
    console.error(`Database error: ${error}`);
    throw new Error('Failed to fetch revenues.');
  }
}

export async function fetchCustomers() {
  try {
    const data = await sql<Customer>`SELECT * FROM customers`;
    return data.rows;
  } catch (error) {
    console.error(`Database error: ${error}`);
    throw new Error('Failed to fetch revenues.');
  }
}