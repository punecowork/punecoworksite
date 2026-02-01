import { NextRequest, NextResponse } from 'next/server';
import { WhatsAppChatbot } from '@/lib/whatsapp';

const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN;

// Webhook verification (GET)
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const mode = searchParams.get('hub.mode');
  const token = searchParams.get('hub.verify_token');
  const challenge = searchParams.get('hub.challenge');

  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    console.log('Webhook verified');
    return new NextResponse(challenge, { status: 200 });
  }

  return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
}

// Webhook message handling (POST)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Check if it's a WhatsApp message
    if (body.object !== 'whatsapp_business_account') {
      return NextResponse.json({ error: 'Not a WhatsApp message' }, { status: 400 });
    }

    // Process each entry
    for (const entry of body.entry) {
      for (const change of entry.changes) {
        const value = change.value;

        // Handle status updates (message sent, delivered, read)
        if (value.statuses) {
          console.log('Message status update:', value.statuses);
          continue;
        }

        // Handle incoming messages
        if (value.messages) {
          for (const message of value.messages) {
            const from = message.from;
            const messageId = message.id;
            const timestamp = message.timestamp;

            // Handle text messages
            if (message.type === 'text') {
              const text = message.text.body;
              console.log(`Received message from ${from}: ${text}`);

              const chatbot = new WhatsAppChatbot();
              await chatbot.handleMessage(from, text, 'text');
            }

            // Handle button replies
            if (message.type === 'interactive') {
              const buttonId = message.interactive.button_reply?.id;
              if (buttonId) {
                console.log(`Received button reply from ${from}: ${buttonId}`);

                const chatbot = new WhatsAppChatbot();
                await chatbot.handleButtonReply(from, buttonId);
              }
            }

            // Handle other message types (image, document, etc.)
            if (['image', 'document', 'audio', 'video'].includes(message.type)) {
              console.log(`Received ${message.type} from ${from}`);
              
              const chatbot = new WhatsAppChatbot();
              await chatbot.handleMessage(
                from,
                `Received your ${message.type}. Our team will review and respond shortly.`,
                message.type
              );
            }
          }
        }
      }
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('WhatsApp webhook error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
