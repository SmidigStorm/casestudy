# SIKT Case Study Project

## Project Overview
This repository contains a case study documenting SIKT's organizational transformation journey. SIKT (Senter for IKT i utdanningen) is the Norwegian IT developer for the Norwegian educational sector.

The case study is being written for Creating Agile Organizations (CAO) by Cesario Ramos, focusing on how SIKT transformed from a traditional organizational structure to an agile, product-oriented organization.

## Technical Stack
- **Documentation Framework**: Docusaurus
- **Hosting**: GitHub Pages (free tier)
- **Comments**: Giscus (GitHub Discussions based)
- **Version Control**: Git/GitHub

## Project Structure
```
casestudy/
├── docs/
│   ├── intro.md                    # Landing page with executive summary
│   ├── timeline.md                 # Chronological transformation journey
│   ├── topics/
│   │   ├── product-groups.md       # From traditional to product groups
│   │   ├── strategic-focus.md      # Evolution of strategic focus
│   │   ├── organizational-design.md # Design changes
│   │   ├── cross-functional-teams.md # Team structure evolution
│   │   ├── shared-services.md      # Centralized vs decentralized
│   │   └── outcomes.md             # Results and lessons learned
│   └── appendices/                 # Supporting documents
├── static/
│   └── img/                        # Diagrams and images
├── docusaurus.config.js           # Site configuration
├── sidebars.js                    # Navigation structure
└── package.json                   # Dependencies
```

## Key Concepts from CAO Framework
1. **Product Groups**: All organizational elements necessary to deliver a good or service
2. **Strategic Focus Types**: Product-centric, Operations-centric, or Customer-centric
3. **Design Guidelines**: 
   - Decouple unit functions
   - Combine authority with responsibility
   - Create conditions for emergent coordination
   - Design shared services for support

## Development Commands
- `npm start` - Start local development server
- `npm run build` - Build static site
- `npm run deploy` - Deploy to GitHub Pages
- `npm run clear` - Clear cache

## Deployment
The site automatically deploys to GitHub Pages when changes are pushed to the main branch.
URL format: `https://[username].github.io/casestudy/`

## Writing Guidelines
- Use Markdown for all content
- Follow CAO framework terminology
- Include specific examples from SIKT's transformation
- Focus on practical lessons for other organizations
- Keep sections concise and actionable

## Review Process
1. Write content in markdown files
2. Preview locally with `npm start`
3. Commit and push to trigger deployment
4. Stakeholders can comment via Giscus on deployed site