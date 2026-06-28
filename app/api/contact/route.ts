import { NextRequest, NextResponse } from 'next/server';

type ContactType = 'show' | 'collab' | 'press' | 'fan';

interface ContactBody {
  name: string;
  email: string;
  type: ContactType;
  message: string;
}

const VALID_TYPES: ContactType[] = ['show', 'collab', 'press', 'fan'];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  let body: ContactBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: 'Corpo da requisição inválido.' },
      { status: 400 }
    );
  }

  const { name, email, type, message } = body;

  if (!name || typeof name !== 'string' || name.trim() === '') {
    return NextResponse.json(
      { error: 'Nome é obrigatório.' },
      { status: 400 }
    );
  }

  if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { error: 'Email inválido.' },
      { status: 400 }
    );
  }

  if (!type || !VALID_TYPES.includes(type)) {
    return NextResponse.json(
      { error: 'Tipo de contato inválido.' },
      { status: 400 }
    );
  }

  if (!message || typeof message !== 'string' || message.trim() === '') {
    return NextResponse.json(
      { error: 'Mensagem é obrigatória.' },
      { status: 400 }
    );
  }

  console.log('[Contact]', {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    type,
    message: message.trim(),
    timestamp: new Date().toISOString(),
  });

  return NextResponse.json({ success: true });
}

export async function GET() {
  return NextResponse.json(
    { error: 'Método não permitido.' },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    { error: 'Método não permitido.' },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { error: 'Método não permitido.' },
    { status: 405 }
  );
}

export async function PATCH() {
  return NextResponse.json(
    { error: 'Método não permitido.' },
    { status: 405 }
  );
}
