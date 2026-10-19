# 📡 BeaconMe — Island Wide Communication System

> **Research Project R26-IT-137**  
> Faculty of Computing, Sri Lanka Institute of Information Technology (SLIIT)

[![Live Website](https://img.shields.io/badge/Live%20Website-Vercel-black?style=for-the-badge&logo=vercel)](https://beaconme-rosy.vercel.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-teal.svg?style=for-the-badge)](LICENSE)
[![Status: Completed](https://img.shields.io/badge/Status-Completed-7DF9C0.svg?style=for-the-badge&labelColor=101319)](https://beaconme-rosy.vercel.app/)
[![Tech Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-orange?style=for-the-badge)](https://github.com/DasunKumarage/beaconme-website)

---

## 📖 Overview

During severe natural disasters—such as flash floods, monsoons, and landslides—conventional telecommunication networks, internet connectivity, and national power grids frequently collapse. This infrastructure blackout leaves trapped civilians unable to call for help and first responders operating blind.

**BeaconMe** is an autonomous, off-grid disaster emergency communication ecosystem designed to keep communities connected when all traditional infrastructure fails. The system merges long-range **LoRa RF mesh networking**, an **offline-first civilian mobile application**, **solar-backed regional relay stations**, and an **XGBoost machine learning pipeline** to validate distress signals against real-time flood telemetry—guaranteeing rapid, prioritized rescue response without relying on cellular towers or the internet.

---

## 👥 Research & Development Team

| Member | Student ID | Individual Research Component | Contact |
| :--- | :---: | :--- | :--- |
| **G.R.Visal Harshana Kumara** | `IT22193636` | **Portable Emergency Device & Mobile Application**<br>Hardware prototyping (ESP32 + LoRa radio), power optimization, SOS physical trigger, offline-first mobile app with local SoftAP pairing. | [Email](mailto:visalkumara66@gmail.com) • [GitHub](https://github.com/HarshanaVK) |
| **Satharasinghe K. S.** | `IT22149480` | **Network Infrastructure & Central Server**<br>Multi-hop LoRa mesh protocol, distributed relay station hardware, central disaster command server logic, and failover network architecture. | [Email](mailto:kulminsanjula@gmail.com) • [GitHub](https://github.com/SatharasingheKS) |
| **Kumarage D. D.** | `IT22138972` | **AI Data Filtering & Flood Monitoring**<br>Machine learning pipeline (XGBoost) for classifying genuine vs. false distress calls, ultrasonic sensor telemetry correlation, and duplicate suppression. | [Email](mailto:ddkumarage@gmail.com) • [GitHub](https://github.com/DasunKumarage) |

### 🎓 Academic Supervisory Board
- **Supervisor:** **Mr. Dhammika De Silva** (Senior Lecturer, Department of Computer Systems Engineering, SLIIT)
- **Co-Supervisor:** **Ms. Anjalie Gamage** (Lecturer, Curtin Colombo / SLIIT)

---

## 🏗️ System Architecture

```text
 ┌─────────────────────────────────────────────────────────────┐
 │                     Civilian / Survivor                     │
 │  • Portable LoRa Emergency Node                             │
 │  • Offline Mobile App (GPS, Battery & Structured Distress)  │
 └──────────────────────────────┬──────────────────────────────┘
                                │ Long-Range 868/915 MHz RF
                                ▼
 ┌─────────────────────────────────────────────────────────────┐
 │                Autonomous LoRa Mesh Relays                  │
 │  • Solar-backed Relay Towers / Tree-mounted Repeaters       │
 │  • Dynamic Ad-Hoc Multi-hop Packet Forwarding               │
 └──────────────────────────────┬──────────────────────────────┘
                                │ Mesh Forwarding
                                ▼
 ┌─────────────────────────────────────────────────────────────┐
 │             Central Command Server & Gateway                │
 │  • Packet De-duplication & Local Coordinate Mapping         │
 │  • Telemetry Correlation (Ultrasonic Flood Sensors)         │
 └──────────────────────────────┬──────────────────────────────┘
                                │
                                ▼
 ┌─────────────────────────────────────────────────────────────┐
 │           AI Decision Pipeline (XGBoost Engine)             │
 │  • Noise & False-Alarm Suppression                          │
 │  • Multi-factor Verification & Priority Scoring             │
 └──────────────────────────────┬──────────────────────────────┘
                                │
                                ▼
 ┌─────────────────────────────────────────────────────────────┐
 │                Disaster Response Dispatch                   │
 │  • Live Triage Map with Verified GPS Coordinates            │
 │  • Immediate First-Responder Resource Allocation            │
 └─────────────────────────────────────────────────────────────┘
```

---

## 🌟 Key Features

- **📶 100% Off-Grid Operation:** No cellular SIM, mobile data, or public internet required.
- **⚡ Ultra-Low Power Consumption:** LoRa RF nodes designed to run on rechargeable Li-ion cells with solar harvesting.
- **🤖 AI-Powered Distress Triage:** Uses XGBoost classification to filter out spam, test pings, and duplicates by cross-referencing real-time environmental sensors.
- **📱 One-Tap Emergency Transmission:** Minimalist survivor UI with instant GPS geolocation coordinate broadcast.
- **🌐 Fast & Responsive Web Portal:** Pure Vanilla HTML/CSS/JS frontend (< 600 KB total size) with dark mode, fluid dock navigation, and 60fps animations.

---

## 🗂️ Project Repository Structure

```text
beaconme-website/
├── index.html                 # Hero, project vision & R&D team highlight
├── domain.html                # Literature survey, research gap & methodology
├── milestones.html            # Assessment timelines, mark-sheets & progress tracker
├── documents.html             # Project Charter, TAF, Proposals & Log Book
├── slides.html                # Official assessment slide decks (Proposal, PP1, PP2, Final)
├── about.html                 # Team members, supervisor board & contact links
├── contact.html               # Web mail compose interface for inquiries
├── assets/
│   ├── css/
│   │   └── style.css          # Design system, glassmorphism, responsive styles (<23 KB)
│   ├── js/
│   │   └── main.js            # Throttled scroll observer, clock & modal lightbox (<4 KB)
│   └── images/                # Highly optimized WebP assets (<400 KB total)
│       ├── BeaconME logo.webp
│       ├── team member profile photos...
│       └── research hardware & dashboard diagrams...
├── .gitignore                 # Standard clean repository exclusions
├── LICENSE                    # MIT Open-Source License
└── README.md                  # Comprehensive project documentation
```

---

## 🚀 Local Setup & Quick Start

Because this website is built with zero-dependency Vanilla HTML, CSS, and JavaScript, no build process or `npm install` is required!

### Option 1: Direct Browser
Simply clone the repository and double-click `index.html`:
```bash
git clone https://github.com/DasunKumarage/beaconme-website.git
cd beaconme-website
# Open index.html in your default web browser
```

### Option 2: Local HTTP Server (Python)
```bash
python -m http.server 3000
# Visit http://localhost:3000 in your browser
```

### Option 3: VS Code Live Server
Right-click on `index.html` inside VS Code and select **"Open with Live Server"**.

---

## 📄 Official Documents & Research Deliverables

| Deliverable | Description | Access |
| :--- | :--- | :---: |
| **Topic Assessment Form (TAF)** | Official project scope approval document | [View Document](https://mysliit-my.sharepoint.com/:b:/g/personal/it22138972_my_sliit_lk/IQBZeOCqUpFMR4_fL2w9DVpVAXCWPgea0QvmQC8J23mB1n8?e=53CO9M) |
| **Research Proposals** | Individual component proposals for all 3 members | [View in Portal](https://beaconme-rosy.vercel.app/documents.html) |
| **Project Charter** | Scope, deliverables, and milestone commitments | [View Document](https://mysliit-my.sharepoint.com/:f:/g/personal/it22138972_my_sliit_lk/IgCGLxPtXYXhSYJI0H8f4gm9ASwLSMlokvQs9WUa5OOZGkw?e=LXGAPG) |
| **Weekly Log Book** | Official SLIIT research progress logs | [View Log Book](https://mysliit-my.sharepoint.com/:f:/g/personal/it22138972_my_sliit_lk/IgCn-7mH_gneRJlBeiBs3cybAdimi8H9NsHXhChjGtZTRNw?e=QDjyk2) |
| **Project Demo Video** | End-to-end hardware & software demonstration | [Watch Video](https://mysliit-my.sharepoint.com/:v:/g/personal/it22138972_my_sliit_lk/IQDQqWbIT4ENQoYl6rH7RmaaAeXqczxnil1qsLXK1r7zzwM?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=3SEkO0) |

---

## ⚖️ License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for more information.

---

## 🙏 Acknowledgments

- **Sri Lanka Institute of Information Technology (SLIIT)** — Faculty of Computing
- **Disaster Management Centre (DMC) Sri Lanka** — Contextual insights on regional flood emergency management
- **LoRa Alliance & ESP32 Open-Source Community** — Foundational mesh protocol libraries and hardware documentation
