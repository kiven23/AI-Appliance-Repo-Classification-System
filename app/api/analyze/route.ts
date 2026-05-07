import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
  // This route proxies to the local FastAPI during dev.
  const form = await req.formData();
  const file = form.get('file') as File;
  const buffer = Buffer.from(await file.arrayBuffer());

  const fd = new FormData();
  fd.append('file', buffer, file.name);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/analyze';
  const response = await axios.post(apiUrl, fd, {
    headers: fd.getHeaders(),
  });

  return NextResponse.json(response.data);
}