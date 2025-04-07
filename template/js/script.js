// Nouveau jeu - Questions plastiques

const initialState = {
    ecologie: 30,
    habitants: 50,
    argent: 50,
  };
  
  let score = {
    env: initialState.ecologie,
    happy: initialState.habitants,
    money: initialState.argent
  };
  
  const questions = [
    {
      id: 1,
      question: "🧩 Fontaines à eau dans les lieux publics",
      description: "Plusieurs associations locales réclament l’installation de fontaines à eau dans les parcs, gares et places principales...",
      options: [
        { text: "💧 Tout installer d’un coup", effets: { argent: -10, ecologie: +15, habitants: +5 } },
        { text: "🚰 Commencer par 3 quartiers tests", effets: { argent: -5, ecologie: +7, habitants: +2 } },
        { text: "❌ Abandonner le projet", effets: { argent: +2, ecologie: -5, habitants: -3 } },
      ],
      funFact: "🧠 Fun fact : Une seule bouteille plastique met jusqu’à 1 000 ans à disparaître complètement."
    },
    {
      id: 2,
      question: "🧩 Distribution de gourdes dans les écoles",
      description: "Le service jeunesse propose de distribuer des gourdes aux élèves...",
      options: [
        { text: "🎒 Distribution à tous les élèves", effets: { argent: -8, ecologie: +12, habitants: +4 } },
        { text: "🧃 Distribution seulement aux familles modestes", effets: { argent: -3, ecologie: +6, habitants: +2 } },
        { text: "🤷‍♂️ Refus : charge aux familles", effets: { argent: +1, ecologie: -4, habitants: -4 } },
      ],
      funFact: "🧠 Fun fact : On retrouve désormais des microplastiques dans le sang humain."
    },
    {
      id: 3,
      question: "🧩 Régulation des sacs plastiques",
      description: "L’usage des sacs plastiques explose dans les commerces...",
      options: [
        { text: "🔒 Interdiction totale", effets: { argent: -10, ecologie: +20, habitants: -5 } },
        { text: "💰 Taxe sur les sacs plastiques", effets: { argent: +5, ecologie: +10, habitants: -2 } },
        { text: "❌ Ne rien faire", effets: { argent: 0, ecologie: -5, habitants: 0 } },
        { text: "♻️ Distribution gratuite de sacs réutilisables", effets: { argent: -5, ecologie: +15, habitants: +5 } },
      ],
      funFact: "🧠 Fun fact : Un dauphin peut mourir en avalant un seul sac plastique..."
    },
    {
      id: 4,
      question: "🧩 Organisation d'une Semaine sans plastique",
      description: "Une proposition citoyenne suggère une semaine d’animations...",
      options: [
        { text: "🎪 Organisation complète", effets: { argent: -7, ecologie: +8, habitants: +7 } },
        { text: "🎤 Événement plus discret", effets: { argent: -3, ecologie: +4, habitants: +3 } },
        { text: "❌ Rien n’est organisé cette année", effets: { argent: +1, ecologie: 0, habitants: -2 } },
      ],
      funFact: "🧠 Fun fact : En Indonésie, certains supermarchés utilisent des feuilles de bananier..."
    },
    {
      id: 5,
      question: "🧩 Taxation des entreprises polluantes",
      description: "Une étude révèle que certains distributeurs locaux...",
      options: [
        { text: "🧾 Application immédiate d’une taxe", effets: { argent: +8, ecologie: +10, habitants: -5 } },
        { text: "🕒 Taxe prévue l’année prochaine", effets: { argent: +5, ecologie: +6, habitants: -2 } },
        { text: "✋ Pas de taxe", effets: { argent: 0, ecologie: -5, habitants: +1 } },
      ],
      funFact: "🧠 Fun fact : Moins de 10 % du plastique mondial est recyclé."
    },
    {
      id: 6,
      question: "🧩 Suppression des bouteilles plastiques dans les bâtiments publics",
      description: "Les écoles, mairies et centres médicaux pourraient supprimer l’achat de bouteilles...",
      options: [
        { text: "💦 Changement immédiat", effets: { argent: -4, ecologie: +12, habitants: -2 } },
        { text: "🧪 Test dans quelques établissements", effets: { argent: -2, ecologie: +6, habitants: +1 } },
        { text: "🚫 Aucun changement", effets: { argent: +1, ecologie: -3, habitants: -1 } },
      ],
      funFact: "🧠 Fun fact : Une mairie peut économiser 50 000 bouteilles par an."
    },
    {
      id: 7,
      question: "🧩 Aides aux commerces zéro plastique",
      description: "Un plan de soutien est proposé pour aider les commerçants à passer au vrac.",
      options: [
        { text: "🏪 Subvention de 10 000€", effets: { argent: -12, ecologie: +15, habitants: +5 } },
        { text: "💼 Aide plus modeste", effets: { argent: -5, ecologie: +8, habitants: +3 } },
        { text: "❌ Aucune aide", effets: { argent: 0, ecologie: -4, habitants: -1 } },
      ],
      funFact: "🧠 Fun fact : Les commerces en vrac produisent jusqu’à 5 fois moins de déchets plastiques."
    },
    {
      id: 8,
      question: "🧩 Création d’un marché hebdomadaire sans plastique",
      description: "Un collectif propose la création d’un marché local sans emballage plastique.",
      options: [
        { text: "🛒 Obligation pour tous", effets: { argent: -3, ecologie: +10, habitants: -2 } },
        { text: "🧺 Participation volontaire", effets: { argent: -1, ecologie: +5, habitants: +3 } },
        { text: "🙅‍♀️ Rejet du projet", effets: { argent: 0, ecologie: 0, habitants: -1 } },
      ],
      funFact: "🧠 Fun fact : Un marché sans plastique réduit jusqu’à 80 % des déchets des visiteurs."
    },
    {
      id: 9,
      question: "🧩 Mise en place d’un système de recyclage récompensé",
      description: "Un système est proposé : recyclage contre bons ou cadeaux.",
      options: [
        { text: "🎁 Lancement du système", effets: { argent: -6, ecologie: +10, habitants: +6 } },
        { text: "📣 Campagne d'affichage simple", effets: { argent: -2, ecologie: +4, habitants: +1 } },
        { text: "🗑️ Pas de campagne", effets: { argent: 0, ecologie: -3, habitants: -2 } },
      ],
      funFact: "🧠 Fun fact : À Pékin, des machines donnent des tickets de métro contre des bouteilles."
    },
    {
      id: 10,
      question: "🧩 Création d’un “Conseil des jeunes pour la planète”",
      description: "Un groupe de collégiens propose un mini-conseil pour des idées écologiques.",
      options: [
        { text: "🧑‍🏫 Local et petit budget", effets: { argent: -4, ecologie: +5, habitants: +6 } },
        { text: "👂 Simple écoute", effets: { argent: -1, ecologie: +2, habitants: +2 } },
        { text: "❌ Proposition rejetée", effets: { argent: 0, ecologie: -2, habitants: -4 } },
      ],
      funFact: "🧠 Fun fact : Des décisions majeures sont parfois nées de jeunes conseils en Scandinavie."
    }
  ];
  
  let current = 0;
  
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
    
    // Ajout du Fun Fact pour chaque question (ici uniquement dans la fonction showQuestion)
    html += `<div class="fun-fact">${q.funFact}</div>`;
    
    document.getElementById("game").innerHTML = html;
    updateStats();
  }
  
  function chooseOption(i) {
    const impact = questions[current].options[i].effets;
    score.env += impact.ecologie;
    score.happy += impact.habitants;
    score.money += impact.argent;
    current++;
  
    updateProgressBars();
  
    // Appel de showQuestion pour afficher la prochaine question (avec son Fun Fact)
    showQuestion();
  }
  
  
  function chooseOption(i) {
    const impact = questions[current].options[i].effets;
    score.env += impact.ecologie;
    score.happy += impact.habitants;
    score.money += impact.argent;
    current++;
  
    updateProgressBars();
  
    showQuestion();
  }
  
  
  function chooseOption(i) {
    const effets = questions[current].options[i].effets;
    score.env += effets.ecologie;
    score.happy += effets.habitants;
    score.money += effets.argent;
    current++;
  
    updateProgressBars();
    showQuestion();
  }
  
  function updateStats() {
    document.getElementById("stats").innerHTML = `🌿 Écologie : ${score.env} | 😊 Habitants : ${score.happy} | 💰 Budget : ${score.money}`;
  
    document.getElementById("negative-env").style.display = 'none';
    document.getElementById("negative-happy").style.display = 'none';
    document.getElementById("negative-money").style.display = 'none';
  
    if (score.env < 30) document.getElementById("negative-env").style.display = 'block';
    if (score.happy < 30) document.getElementById("negative-happy").style.display = 'block';
    if (score.money < 15) document.getElementById("negative-money").style.display = 'block';
  }
  
  function updateProgressBars() {
    const envPercent = Math.min((score.env / 80) * 100, 100);
    const happyPercent = Math.min((score.happy / 50) * 100, 100);
    const moneyPercent = Math.min((score.money / 30) * 100, 100);
  
    document.getElementById("env-bar-inner").style.height = `${envPercent}%`;
    document.getElementById("happy-bar-inner").style.height = `${happyPercent}%`;
    document.getElementById("money-bar-inner").style.height = `${moneyPercent}%`;
  }
  
  function endGame() {
    const message = `🌿 Écologie : ${score.env}<br>😊 Satisfaction : ${score.happy}<br>💰 Budget : ${score.money}`;
    let conclusion = "";
  
    if (score.env >= 80 && score.happy >= 50 && score.money >= 30) {
      conclusion = "🎉 Bravo ! Ta ville est un modèle de transition écologique équilibrée et soutenue !";
    } else if (score.env >= 60 && score.happy >= 20 && score.money >= 10) {
      conclusion = "💪 Bon travail ! La ville est sur la bonne voie, même s’il reste des efforts à fournir.";
    } else if (score.env >= 20 && score.happy >= 10 && score.money >= 5) {
      conclusion = "🟡 Résultat mitigé : certaines décisions ont aidé, d'autres ont freiné le progrès.";
    } else {
      conclusion = "⚠️ Oups… La population doute et l’environnement souffre. Il faudra mieux équilibrer tes choix.";
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
    score = {
      env: initialState.ecologie,
      happy: initialState.habitants,
      money: initialState.argent
    };
    current = 0;
  
    document.getElementById("env-bar-inner").style.height = "0%";
    document.getElementById("happy-bar-inner").style.height = "0%";
    document.getElementById("money-bar-inner").style.height = "0%";
  
    showQuestion();
  }
  
  // Musique de fond
  const music = document.getElementById('background-music');
  const musicButton = document.getElementById('start-music');
  
  musicButton.addEventListener('click', () => {
    music.play();
    music.loop = true;
    musicButton.style.display = 'none';
  });
  
  const toggleButton = document.createElement('button');
  toggleButton.textContent = 'Couper la musique';
  toggleButton.id = 'toggle-music';
  document.body.appendChild(toggleButton);
  
  toggleButton.addEventListener('click', () => {
    if (music.paused) {
      music.play();
      toggleButton.textContent = 'Couper la musique';
    } else {
      music.pause();
      toggleButton.textContent = 'Relancer la musique';
    }
  });
  
  showQuestion();
  