# 📝 Roadmap - Sign-Up Workflow

> Migration N8N → Railway pour le flux d'inscription newsletter Niches Hunter

---

## 🎯 Objectif

Permettre aux visiteurs de s'inscrire à la newsletter Niches Hunter via un formulaire sur la landing page. À l'inscription, ils reçoivent un email de bienvenue + la dernière newsletter.

---

## 📊 Workflow Actuel (N8N)

```
┌─────────────────────────────────────────────────────────────────┐
│                     FLUX SIGN-UP ACTUEL                          │
│                                                                  │
│  1. WEBHOOK (POST)                                               │
│     └── Reçoit: { email: "user@example.com" }                    │
│     └── Déclenché par: Supabase trigger sur insert               │
│                                                                  │
│  2. SEND WELCOME EMAIL (SMTP)                                    │
│     └── From: support@arianeconcept.fr                           │
│     └── Subject: "Welcome to Niches Hunter 🎯"                   │
│     └── Template HTML complet avec dark mode                     │
│                                                                  │
│  3. WAIT (18 secondes/minutes?)                                  │
│     └── Pause avant d'envoyer la newsletter                      │
│                                                                  │
│  4. GET LATEST NEWSLETTER (Supabase)                             │
│     └── Table: newsletters                                       │
│     └── Tri par created_at DESC, limit 1                         │
│                                                                  │
│  5. SEND NEWSLETTER (SMTP)                                       │
│     └── Contenu: newsletter.content (HTML)                       │
│                                                                  │
│  6. UPDATE SUBSCRIBER (Supabase)                                 │
│     └── Table: newsletter_subscribers                            │
│     └── Set: email_sent_at = NOW()                               │
│                                                                  │
│  7. NOTIFY TELEGRAM                                              │
│     └── Chat ID: 1791080209                                      │
│     └── Message: "New subscriber added ! ✅"                     │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🔧 Ce qui est déjà en place

| Élément | Status | Détails |
|---------|--------|---------|
| Landing Page | ✅ Existant | Formulaire d'inscription |
| Table `newsletter_subscribers` | ✅ Existant | Supabase |
| Table `newsletters` | ✅ Existant | Supabase |
| Trigger Supabase → Webhook | ✅ Existant | Appelle N8N actuellement |
| Template Welcome Email | ✅ Existant | HTML complet avec dark mode |
| SMTP (Ariane Concept) | ✅ Existant | support@arianeconcept.fr |
| Bot Telegram | ✅ Existant | Notifications |

---

## 🚀 Migration à faire

### Phase 1 : Setup Projet ✅
- [x] Initialiser projet Node.js + TypeScript
- [x] Installer dépendances (express, resend, @supabase/supabase-js, etc.)
- [x] Configurer variables d'environnement (.env.example)
- [x] Structure de dossiers

### Phase 2 : Services ✅
- [x] Client Supabase (connexion + queries)
- [x] Client Email (Resend)
- [x] Client Telegram (notifications)

### Phase 3 : Endpoint Webhook ✅
- [x] Route `POST /webhook/subscribe`
- [x] Validation du body (email requis)
- [x] Réponse immédiate 200 OK

### Phase 4 : Logique Sign-up ✅
- [x] Fonction `sendWelcomeEmail(email)`
- [x] Migrer template HTML welcome
- [x] Fonction `getLatestNewsletter()`
- [x] Fonction `sendNewsletter(email, content)`
- [x] Fonction `updateSubscriberEmailSentAt(email)`
- [x] Fonction `notifyTelegram(message)`

### Phase 5 : Gestion du délai ✅
- [x] Implémenter délai (setTimeout configurable via env)
- [x] Par défaut: 18 secondes (WELCOME_EMAIL_DELAY_SECONDS)

### Phase 6 : Déploiement 🔴
- [ ] Créer fichier .env avec les vraies clés
- [ ] Tester en local (`npm run dev`)
- [ ] Créer projet Railway
- [ ] Configurer variables d'environnement sur Railway
- [ ] Déployer
- [ ] Mettre à jour le trigger Supabase (nouvelle URL webhook)
- [ ] Tester end-to-end

---

## 📋 Variables d'Environnement Requises

```env
# Supabase
SUPABASE_URL=
SUPABASE_SERVICE_KEY=

# Email (Resend ou SMTP)
RESEND_API_KEY=
# OU
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=

# Telegram
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=1791080209

# App
PORT=3000
NODE_ENV=production
```

---

## 📧 Template Welcome Email

Le template HTML est déjà prêt (copié depuis N8N) avec :
- ✅ Support dark mode
- ✅ Design responsive
- ✅ Branding Niches Hunter (couleur #00CC6A)
- ✅ Liste des bénéfices
- ✅ CTA "First brief arriving"

---

## ⚠️ Points d'Attention

1. **Délai de 18 unités** - Clarifier si c'est secondes ou minutes
2. **Gestion des erreurs** - Que faire si l'email fail ?
3. **CORS** - Configurer si appel depuis le frontend
4. **Rate limiting** - Éviter les abus
5. **Mise à jour trigger Supabase** - Ne pas oublier de pointer vers la nouvelle URL

---

## 📈 Avancement

| Phase | Status | Notes |
|-------|--------|-------|
| Phase 1 - Setup | ✅ Terminé | package.json, tsconfig, structure |
| Phase 2 - Services | ✅ Terminé | Supabase, Email, Telegram clients |
| Phase 3 - Webhook | ✅ Terminé | POST /webhook/subscribe |
| Phase 4 - Logique | ✅ Terminé | Welcome + Newsletter + Update |
| Phase 5 - Délai | ✅ Terminé | setTimeout configurable |
| Phase 6 - Deploy | 🔴 À faire | Attente des clés API |

---

## 🔗 Liens Utiles

- [Resend Documentation](https://resend.com/docs)
- [Supabase JS Client](https://supabase.com/docs/reference/javascript)
- [Railway Deployment](https://docs.railway.app)
- [Telegram Bot API](https://core.telegram.org/bots/api)

---

*Dernière mise à jour: 12 décembre 2024*

