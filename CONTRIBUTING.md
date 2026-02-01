# Contributing to Pune Cowork

Thank you for considering contributing to Pune Cowork! This document provides guidelines for contributing to the project.

## Repository

GitHub: https://github.com/punecowork/punecoworksite

## How to Contribute

### 1. Fork the Repository

1. Go to https://github.com/punecowork/punecoworksite
2. Click the "Fork" button in the top right
3. Clone your fork locally:
```bash
git clone https://github.com/YOUR_USERNAME/punecoworksite.git
cd punecoworksite
```

### 2. Set Up Development Environment

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local

# Run development server
npm run dev
```

### 3. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

### 4. Make Your Changes

- Follow the existing code style
- Write meaningful commit messages
- Test your changes locally
- Update documentation if needed

### 5. Commit Your Changes

```bash
git add .
git commit -m "feat: add new feature"
# or
git commit -m "fix: resolve issue with contact form"
```

**Commit Message Format:**
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Build process or auxiliary tool changes

### 6. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 7. Create a Pull Request

1. Go to your fork on GitHub
2. Click "Compare & pull request"
3. Provide a clear description of your changes
4. Submit the pull request

## Code Style Guidelines

### TypeScript/React
- Use functional components with TypeScript
- Follow existing naming conventions
- Use Tailwind CSS for styling
- Keep components small and focused

### File Structure
```
components/     - Reusable UI components
app/           - Next.js App Router pages
lib/           - Utility functions and helpers
public/        - Static assets
```

### Naming Conventions
- Components: PascalCase (e.g., `ContactForm.tsx`)
- Utilities: camelCase (e.g., `analytics.ts`)
- CSS classes: Tailwind utility classes

## Testing

Before submitting a PR:

```bash
# Build the project
npm run build

# Check for TypeScript errors
npx tsc --noEmit

# Test locally
npm run dev
```

## Areas to Contribute

### High Priority
- Additional service pages (GST registration, business address, mail handling)
- Blog content and templates
- Location-specific pages
- Image optimization and assets
- Performance improvements

### Medium Priority
- Additional PWA features
- Enhanced WhatsApp chatbot flows
- Google Sheets integration improvements
- Additional SEO optimizations

### Low Priority
- UI/UX enhancements
- Animation improvements
- Accessibility improvements
- Documentation updates

## Reporting Issues

Found a bug? Have a suggestion?

1. Check if the issue already exists
2. Create a new issue with:
   - Clear title
   - Detailed description
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Screenshots (if applicable)

## Questions?

For questions or discussions:
- Open a GitHub Discussion
- Check existing documentation (README.md, DEPLOYMENT.md, etc.)
- Review closed issues for similar questions

## License

By contributing, you agree that your contributions will be licensed under the same license as the project (MIT License).

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what's best for the project and community
- Help others learn and grow

---

Thank you for contributing to Pune Cowork! 🚀
