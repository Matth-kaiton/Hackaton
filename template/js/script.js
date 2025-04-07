const questions = [
    {
      question: "Que fais-tu avec les sacs plastiques dans ta ville ?",
      options: [
        { text: "🛍️ Interdiction totale (Écologie +20, Bonheur -5, Budget -10)", impact: { env: 20, happy: -5, money: -10 } },
        { text: "💰 Faire payer les sacs (Écologie +10, Bonheur -2, Budget +5)", impact: { env: 10, happy: -2, money: 5 } },
        { text: "❌ Ne rien faire (Écologie -5)", impact: { env: -5, happy: 0, money: 0 } },
        { text: "♻️ Offrir des sacs réutilisables gratuitement (Écologie +15, Bonheur +5, Budget -5)", impact: { env: 15, happy: 5, money: -5 } }
      ]
    },
    {
      question: "Une entreprise veut installer des distributeurs de bouteilles plastique.",
      options: [
        { text: "🚰 Refuser et installer des fontaines à eau (Écologie +15, Bonheur -3, Budget -5)", impact: { env: 15, happy: -3, money: -5 } },
        { text: "📃 Accepter avec conditions (Bonheur +5, Budget +10)", impact: { env: 0, happy: 5, money: 10 } },
        { text: "✅ Tout accepter (Écologie -10, Bonheur +10, Budget +15)", impact: { env: -10, happy: 10, money: 15 } },
        { text: "🚰 Installer des fontaines gratuites et interdire les bouteilles plastiques (Écologie +20, Bonheur +3, Budget -10)", impact: { env: 20, happy: 3, money: -10 } }
      ]
    },
    {
      question: "Tu veux sensibiliser les jeunes à la réduction du plastique...",
      options: [
        { text: "🏫 Créer un programme scolaire (Écologie +10, Bonheur +5, Budget -5)", impact: { env: 10, happy: 5, money: -5 } },
        { text: "📱 Lancer une appli mobile (Écologie +5, Bonheur +3, Budget -2)", impact: { env: 5, happy: 3, money: -2 } },
        { text: "🙅‍♂️ Rien faire (pas d'impact)", impact: { env: 0, happy: 0, money: 0 } },
        { text: "🏫 Créer une campagne interactive avec des ateliers (Écologie +15, Bonheur +6, Budget -7)", impact: { env: 15, happy: 6, money: -7 } }
      ]
    },
    {
      question: "Tu veux réduire les déchets des marchés locaux :",
      options: [
        { text: "♻️ Distribuer des sacs réutilisables (Écologie +10, Bonheur +2, Budget -5)", impact: { env: 10, happy: 2, money: -5 } },
        { text: "🛒 Laisser faire les commerçants (Écologie -5)", impact: { env: -5, happy: 0, money: 0 } },
        { text: "💼 Taxer les emballages plastiques (Écologie +15, Bonheur -4, Budget +5)", impact: { env: 15, happy: -4, money: 5 } },
        { text: "🛒 Offrir des récipients réutilisables et taxer les plastiques (Écologie +20, Bonheur +3, Budget -8)", impact: { env: 20, happy: 3, money: -8 } }
      ]
    },
    {
      question: "Tu peux signer un partenariat avec une entreprise d'emballages compostables :",
      options: [
        { text: "🧾 Oui, même si ça coûte un peu (Écologie +20, Bonheur +3, Budget -10)", impact: { env: 20, happy: 3, money: -10 } },
        { text: "🤝 Négocier pour payer moins (Écologie +10, Bonheur +2, Budget -3)", impact: { env: 10, happy: 2, money: -3 } },
        { text: "💸 Refuser pour garder le budget (Écologie -5, Budget +5)", impact: { env: -5, happy: 0, money: 5 } },
        { text: "🧾 Signer un partenariat à 100% avec un super prix (Écologie +30, Bonheur +5, Budget -15)", impact: { env: 30, happy: 5, money: -15 } }
      ]
    }
  ];
  
  let score = { env: 0, happy: 0, money: 0 };
  let current = 0;
  
  function updateStats() {
    document.getElementById("stats").innerHTML = `🌿 Écologie : ${score.env} | 😊 Habitants : ${score.happy} | 💰 Budget : ${score.money}`;
  }
  
  function showQuestion() {
    if (current >= questions.length) {
      endGame();
      return;
    }
  
    const q = questions[current];
    let html = `<div class="question">${q.question}</div><div class="options">`;
    q.options.forEach((opt, i) => {
      html += `<button onclick="chooseOption(${i})">${opt.text}</button>`;
    });
    html += `</div>`;
    document.getElementById("game").innerHTML = html;
    updateStats();
  }
  
  function chooseOption(i) {
    const impact = questions[current].options[i].impact;
    score.env += impact.env;
    score.happy += impact.happy;
    score.money += impact.money;
    current++;
    showQuestion();
  }
  
  function endGame() {
    const message = `🌿 Écologie : ${score.env}<br>😊 Satisfaction : ${score.happy}<br>💰 Budget : ${score.money}`;
    let conclusion = "";
  
    // Rendre les critères de victoire plus accessibles
    if (score.env >= 50 && score.happy >= 5 && score.money >= -20) {
      conclusion = "🎉 Ta ville fait d'énormes progrès dans la réduction du plastique et la gestion des déchets !";
    } else if (score.env >= 30 && score.happy >= 3 && score.money >= -30) {
      conclusion = "💪 Bonnes avancées, mais il y a encore du travail à faire pour atteindre l'objectif !";
    } else {
      conclusion = "🟡 Résultat mitigé : des efforts ont été faits, mais la ville doit encore progresser.";
    }
  
    document.getElementById("game").innerHTML = `
      <div class="result">
        ${message}<br><br>
        ${conclusion}
        <br><br>
        <button class="replay-btn" onclick="restart()">Réessayer</button>
      </div>`;
  }
  
  function restart() {
    score = { env: 0, happy: 0, money: 0 };
    current = 0;
    showQuestion();
  }
  
  showQuestion();

  const music = document.getElementById('background-music');
  const musicButton = document.getElementById('start-music');
  
  // Écouteur d'événement pour démarrer la musique
  musicButton.addEventListener('click', () => {
    music.play(); // Démarre la musique
    music.loop = true; // La musique sera en boucle
    musicButton.style.display = 'none'; // Masque le bouton après avoir cliqué dessus
  });
  
  // Pour ajouter une possibilité de couper ou de relancer la musique (optionnel)
  const toggleButton = document.createElement('button');
  toggleButton.textContent = 'Couper la musique';
  toggleButton.id = 'toggle-music';
  document.body.appendChild(toggleButton);
  
  toggleButton.addEventListener('click', () => {
    if (music.paused) {
      music.play(); // Relancer la musique si elle est en pause
      toggleButton.textContent = 'Couper la musique'; // Changer le texte du bouton
    } else {
      music.pause(); // Mettre en pause la musique
      toggleButton.textContent = 'Relancer la musique'; // Changer le texte du bouton
    }
  });