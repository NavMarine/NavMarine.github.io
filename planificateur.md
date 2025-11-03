---
layout: single
title: "Planificateur de route"
---

# 🧭 Planificateur de route

Renseignez votre port de départ et d’arrivée :

<form id="routeForm">
  <label>Port de départ :</label>
  <input type="text" id="depart" required>
  <label>Port d’arrivée :</label>
  <input type="text" id="arrivee" required>
  <button type="submit">Calculer</button>
</form>

<div id="resultat"></div>

<script src="/assets/js/planificateur.js"></script>
