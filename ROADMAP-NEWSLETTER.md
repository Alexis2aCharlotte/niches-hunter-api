# 📰 Roadmap - Newsletter Generator

> Migration N8N → Railway pour la génération et l'envoi quotidien de la newsletter Niches Hunter

---

## 🎯 Objectif

Générer automatiquement chaque jour une newsletter analysant les tendances App Store, les niches à explorer, et les opportunités pour indie devs. Envoi à tous les abonnés actifs.

---

## 📊 Workflow Actuel (N8N)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                   FLUX NEWSLETTER GENERATOR ACTUEL                       │
│                                                                          │
│  1. GET APP OPPORTUNITIES (Supabase)                                     │
│     └── Table: app_opportunities_ranked                                  │
│     └── Toutes les opportunités détectées                                │
│                                                                          │
│  2. FILTRE IA #1 (OpenAI GPT-4o)                                         │
│     └── Prompt: "Garde 3 apps d'indie devs/petits studios"               │
│     └── Retire: banques, retailers, géants tech, apps gouvernementales   │
│     └── Output: 3 apps filtrées en JSON                                  │
│                                                                          │
│  3. FORMAT TEXT (JavaScript)                                             │
│     └── Transforme les apps en texte lisible pour l'IA                   │
│     └── Format: "• App Name (dev: X) - Pays: Y, Rang: Z..."              │
│                                                                          │
│  4. ANALYSE IA #2 (OpenAI GPT-4/5.1)                                     │
│     └── Génère JSON structuré:                                           │
│         • title: "Catchy title with emoji"                               │
│         • date: "December 12, 2024"                                      │
│         • summary: 2 lignes punchy                                       │
│         • insights: [3 insights]                                         │
│         • apps: [max 5 apps avec potentiel %]                            │
│         • niches: [exactement 2 niches à explorer]                       │
│         • action: recommandation actionnable                             │
│                                                                          │
│  5. GENERATE HTML (JavaScript ~200 lignes)                               │
│     └── Template complet avec:                                           │
│         • Dark mode support (@media prefers-color-scheme)                │
│         • Progress bars colorées (▮▮▮▮▮▮▮▮▯▯)                           │
│         • Couleurs par catégorie d'app                                   │
│         • Sections: Insights, Apps, Niches, Action                       │
│         • Footer avec unsubscribe link                                   │
│                                                                          │
│  6. SAVE TO SUPABASE                                                     │
│     └── Table: newsletters                                               │
│     └── Champs: content (HTML), run_date, title                          │
│                                                                          │
│  7. GET SUBSCRIBERS (Supabase)                                           │
│     └── Table: newsletter_subscribers                                    │
│     └── Filter: status = 'subscribed'                                    │
│                                                                          │
│  8. SEND TO ALL (SMTP loop)                                              │
│     └── From: support@arianeconcept.fr                                   │
│     └── Subject: "Niches Hunter - {date}"                                │
│     └── HTML: contenu de la newsletter                                   │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 🔧 Ce qui est déjà en place

| Élément | Status | Détails |
|---------|--------|---------|
| Table `app_opportunities_ranked` | ✅ Existant | Source des données apps |
| Table `newsletters` | ✅ Existant | Stockage des newsletters générées |
| Table `newsletter_subscribers` | ✅ Existant | Liste des abonnés |
| Clé API OpenAI | ✅ Existant | Pour les 2 appels IA |
| SMTP (Ariane Concept) | ✅ Existant | support@arianeconcept.fr |
| Template HTML Generator | ✅ Existant | Code JS de ~200 lignes |
| Prompt IA filtre | ✅ Existant | À migrer |
| Prompt IA analyse | ✅ Existant | À migrer |

---

## 🎨 Structure du Contenu Newsletter

```typescript
interface NewsletterData {
  title: string;           // "🚀 AI Photo Editors Are Exploding"
  date: string;            // "December 12, 2024"
  summary: string;         // 2 lignes de résumé punchy
  
  insights: string[];      // 3 insights clés
  
  apps: {
    name: string;          // "PhotoAI Pro"
    category: string;      // "Photo & Video"
    rank: number;          // 20
    market: string;        // "US"
    flag: string;          // "🇺🇸"
    opportunity: string;   // Description de l'opportunité
    potential: number;     // 80 (pourcentage)
  }[];
  
  niches: {
    title: string;         // "🎨 AI Art Generation"
    competition: string;   // "Low" | "Medium" | "High"
    competitionScore: number;  // 30
    potential: string;     // "High"
    potentialScore: number;    // 90
    description: string;   // 3-4 phrases
  }[];
  
  action: string;          // Recommandation actionnable
}
```

---

## 🚀 Migration à faire

### Phase 1 : Setup (partagé avec Sign-up)
- [ ] Projet Node.js + TypeScript déjà initialisé
- [ ] Dépendances additionnelles: `openai`, `node-cron`

### Phase 2 : Services IA
- [ ] Client OpenAI configuré
- [ ] Fonction `filterAppsWithAI(apps)` - Premier filtre
- [ ] Fonction `analyzeWithAI(text)` - Génération JSON structuré
- [ ] Gestion des erreurs JSON parsing

### Phase 3 : Générateur de Contenu
- [ ] Fonction `formatOpportunitiesText(apps)` - Formatter pour l'IA
- [ ] Migrer le code de génération HTML (~200 lignes)
- [ ] Fonctions helpers: `progressBar()`, `getCategoryColor()`, etc.

### Phase 4 : Job Newsletter
- [ ] Fonction principale `generateAndSendNewsletter()`
- [ ] Récupération données Supabase
- [ ] Appels IA (filtre + analyse)
- [ ] Génération HTML
- [ ] Sauvegarde newsletter
- [ ] Récupération subscribers actifs
- [ ] Envoi en batch (avec rate limiting)

### Phase 5 : CRON
- [ ] Configurer `node-cron` pour exécution quotidienne
- [ ] OU utiliser Railway CRON dans `railway.toml`
- [ ] Décider de l'heure d'envoi (8h? 9h?)

### Phase 6 : Déploiement
- [ ] Tester en local
- [ ] Déployer sur Railway
- [ ] Configurer CRON Railway
- [ ] Vérifier les logs
- [ ] Test d'envoi réel

---

## 📋 Variables d'Environnement Additionnelles

```env
# OpenAI
OPENAI_API_KEY=sk-proj-xxx

# CRON
NEWSLETTER_CRON_SCHEDULE="0 8 * * *"  # 8h tous les jours
```

---

## 🎨 Couleurs par Catégorie (À migrer)

```javascript
const categoryColors = {
  'Entertainment': '#9B59B6',
  'Photo & Video': '#E91E63', 
  'Social Networking': '#3498DB',
  'Productivity': '#27AE60',
  'Finance': '#F39C12',
  'Health & Fitness': '#1ABC9C',
  'Games': '#E74C3C',
  'Lifestyle': '#FF6B6B',
  'Education': '#5DADE2',
  'Shopping': '#FF9F43',
  'default': '#00CC6A'
};
```

---

## 📝 Prompts IA à Migrer

### Prompt 1 - Filtre Apps
```
Tu filtres des apps. Retourne UNIQUEMENT un JSON array valide.
PAS de backticks, PAS de markdown, JUSTE le JSON brut.

Garde seulement 3 apps d'indie devs/petits studios, qui font partie de niches pour repliquer.
RETIRE: banques, retailers énormes, géants tech, apps gouvernementales.

Apps: {data}

JSON filtré:
```

### Prompt 2 - Analyse et Génération
```
Analyze this App Store data and return ONLY valid JSON (no text before/after):

{opportunities_text}

IMPORTANT RULES:
- Write EVERYTHING in ENGLISH
- Maximum 5 apps
- EXACTLY 2 niches (no more, no less)

Exact format:
{
  "title": "Catchy title with emoji",
  "date": "{current_date}",
  "summary": "2 lines summary of the key trends...",
  "insights": [...],
  "apps": [...],
  "niches": [...],
  "action": "2 sentences with actionable recommendation"
}
```

---

## ⚠️ Points d'Attention

1. **Rate Limiting OpenAI** - Gérer les quotas API
2. **Parsing JSON** - L'IA peut retourner du JSON mal formaté, prévoir fallback
3. **Batch Sending** - Ne pas envoyer tous les emails d'un coup (spam filters)
4. **Retry Logic** - Retenter si un email fail
5. **Monitoring** - Logger les envois pour debug
6. **Coûts OpenAI** - Surveiller la consommation (2 appels/jour)

---

## 📈 Avancement

| Phase | Status | Notes |
|-------|--------|-------|
| Phase 1 - Setup | 🔴 À faire | Partagé avec Sign-up |
| Phase 2 - Services IA | 🔴 À faire | |
| Phase 3 - Générateur HTML | 🔴 À faire | ~200 lignes à migrer |
| Phase 4 - Job Newsletter | 🔴 À faire | |
| Phase 5 - CRON | 🔴 À faire | |
| Phase 6 - Deploy | 🔴 À faire | |

---

## 📊 Métriques à Suivre (Future)

- Nombre d'emails envoyés
- Taux de succès d'envoi
- Coût OpenAI par newsletter
- Temps de génération

---

## 🔗 Liens Utiles

- [OpenAI API Reference](https://platform.openai.com/docs/api-reference)
- [Railway CRON Jobs](https://docs.railway.app/reference/cron-jobs)
- [Resend Batch Sending](https://resend.com/docs/api-reference/emails/send-batch-emails)

---

*Dernière mise à jour: 12 décembre 2024*

