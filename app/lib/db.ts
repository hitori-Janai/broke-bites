import { Pool } from 'pg';

const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_jR7efZiD3IMq@ep-polished-poetry-a44p3osy-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require',
});

export async function query(text: string, params?: any[]) {
  try {
    const result = await pool.query(text, params);
    return result;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}

// Helper function to get or create QR code record
export async function getOrCreateQrCode(qrcode_txt: string) {
  // Check if the QR code already exists
  const checkResult = await query(
    'SELECT * FROM public.user_qrcode WHERE qrcode_txt = $1',
    [qrcode_txt]
  );

  // If it exists, return it
  if (checkResult.rows.length > 0) {
    return checkResult.rows[0];
  }

  // Otherwise, create a new record
  const insertResult = await query(
    'INSERT INTO public.user_qrcode (qrcode_txt, score) VALUES ($1, 0) RETURNING *',
    [qrcode_txt]
  );

  return insertResult.rows[0];
}

// Function to increment the score of a QR code
export async function incrementQrCodeScore(id: number) {
  const result = await query(
    'UPDATE public.user_qrcode SET score = score + 1 WHERE id = $1 RETURNING *',
    [id]
  );
  
  return result.rows[0];
} 