# 🎯 Niches Hunter API

API backend pour Niches Hunter - Newsletter quotidienne sur les opportunités App Store pour indie devs.

## 🚀 Features

- **Sign-up Webhook** - Gère les inscriptions à la newsletter
- **Welcome Email** - Envoi automatique d'un email de bienvenue
- **Newsletter Delivery** - Envoi de la dernière newsletter aux nouveaux inscrits
- **Telegram Notifications** - Notifications en temps réel

## 📦 Installation

```bash
# Cloner le repo
git clone https://github.com/your-username/niches-hunter-api.git
cd niches-hunter-api

# Installer les dépendances
npm install

# Configurer l'environnement
cp .env.example .env
# Éditer .env avec vos clés API
```

## 🔧 Configuration

Copier `.env.example` vers `.env` et remplir :

| Variable | Description |
|----------|-------------|
| `SUPABASE_URL` | URL de votre projet Supabase |
| `SUPABASE_SERVICE_KEY` | Clé service role Supabase |
| `RESEND_API_KEY` | Clé API Resend |
| `TELEGRAM_BOT_TOKEN` | Token du bot Telegram |
| `TELEGRAM_CHAT_ID` | ID du chat pour les notifications |
| `OPENAI_API_KEY` | Clé API OpenAI (pour newsletter generator) |

## 🏃 Lancer en développement

```bash
npm run dev
```

Le serveur démarre sur `http://localhost:3000`

## 📡 Endpoints

### Health Check
```
GET /health
```

### Webhook Subscribe
```
POST /webhook/subscribe
Content-Type: application/json

{
  "email": "user@example.com"
}
```

## 🚂 Déploiement Railway

Le projet est configuré pour Railway avec `railway.toml`.

```bash
# Login Railway
railway login

# Déployer
railway up
```

## 📁 Structure

```
src/
├── index.ts              # Point d'entrée Express
├── routes/
│   └── webhook.ts        # Routes webhook
├── services/
│   ├── email.ts          # Service Resend
│   ├── supabase.ts       # Client Supabase
│   └── telegram.ts       # Notifications Telegram
├── templates/
│   └── welcome.ts        # Template email bienvenue
├── jobs/
│   └── newsletter-generator.ts  # (Coming soon)
└── types/
    └── index.ts          # Types TypeScript
```

## 📄 License

MIT

