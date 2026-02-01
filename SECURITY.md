# Security Policy

## Supported Versions

Currently supported versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.x     | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability in Pune Cowork, please report it by:

1. **Email**: Send details to security@punecowork.com
2. **GitHub**: Create a private security advisory at https://github.com/punecowork/punecoworksite/security/advisories

### What to Include

- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

### Response Time

- We aim to respond within 48 hours
- We'll provide updates every 3-5 days
- Security patches will be released as soon as possible

## Security Best Practices

### Environment Variables

Never commit sensitive data:
- API keys
- Access tokens
- Database credentials
- Private keys

Use `.env.local` for local development and Vercel environment variables for production.

### API Routes

All API routes should:
- Validate input data
- Use environment variables for secrets
- Implement rate limiting (if needed)
- Return appropriate HTTP status codes

### Dependencies

Keep dependencies updated:
```bash
npm audit
npm update
```

## Known Security Considerations

### WhatsApp Integration
- Webhook must verify tokens before processing
- Store access tokens securely in environment variables
- Implement message validation

### Contact Form
- Input validation on both client and server
- Email validation using regex
- Phone number format validation

### Google Sheets Integration
- Use service account authentication
- Limit API access to specific spreadsheets
- Implement error handling

## Security Updates

We regularly update dependencies and monitor for security advisories. Check the [releases](https://github.com/punecowork/punecoworksite/releases) page for security updates.

## Contact

For general security questions: security@punecowork.com
