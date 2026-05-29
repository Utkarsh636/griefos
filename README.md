# GriefOS

**Guidance when families need clarity most.**

GriefOS is an AI-powered post-loss recovery platform designed to help families navigate legal, financial, and administrative processes after the loss of a loved one.

Instead of searching through dozens of government portals, banks, insurance websites, and legal resources, users receive a personalized recovery roadmap based on their situation, assets, and jurisdiction.

---

## Problem

When a family loses a loved one, they are often required to:

* Claim bank accounts
* Access provident fund benefits
* Process insurance claims
* Manage property succession
* Find legal support
* Track important deadlines

These processes are fragmented across multiple organizations and are difficult to navigate during an emotionally stressful period.

---

## Solution

GriefOS acts as a digital recovery assistant that helps users:

* Generate personalized recovery roadmaps
* Track important claim deadlines
* Extract information from documents using OCR
* Export recovery plans as PDFs
* Access jurisdiction-specific legal support
* Navigate post-loss administrative workflows

---

## Key Features

### Personalized Recovery Roadmap

Generate step-by-step action plans based on:

* Relationship to the deceased
* State / jurisdiction
* Asset categories
* Recovery requirements

### OCR Document Intelligence

Upload documents and automatically extract important information.

### Deadline Tracking

Identify and prioritize time-sensitive actions.

### Recovery Kit Export

Generate downloadable PDF recovery plans.

### Jurisdiction Assistance (Upcoming)

Locate nearby legal support services, DLSA contacts, district courts, and official resources.

---

## Tech Stack

### Frontend

* Next.js
* TypeScript
* Tailwind CSS
* shadcn/ui

### State Management

* Zustand

### OCR

* Tesseract.js

### PDF Generation

* pdfmake

### AI Layer (Planned)

* Google Gemini API

### Deployment

* Vercel

### Development Environment

* GitHub Codespaces

---

## Project Structure

```bash
app/
components/
data/
lib/
types/
public/
```

---

## Local Development

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

---

## Vision

GriefOS aims to reduce confusion during one of life's most difficult moments by transforming fragmented administrative processes into a guided, understandable recovery journey.

---

## Status

Current MVP includes:

* Onboarding workflow
* Roadmap generation
* Deadline engine
* OCR document extraction
* PDF export

Upcoming:

* Jurisdiction support
* Smart OCR parsing
* AI-assisted personalization
* Workspace persistence
* Multi-state support

```
```
