const VIDEO_COUNT = 7;
const VIDEO_SOURCES = Array.from(
  { length: VIDEO_COUNT },
  (_, index) => `./assets/backgrounds/background${index + 1}.mp4`,
);

const GAME2_STORAGE_KEY = "adippsi-web-game2-v1";
const GAME3_STORAGE_KEY = "adippsi-web-game3-v1";
const LANGUAGE_STORAGE_KEY = "adippsi-language-v1";
const SETTINGS_STORAGE_KEY = "adippsi-settings-v1";
const GA_MEASUREMENT_ID = "G-58KPS97SGG";
const SUPPORTED_LANGUAGES = ["fr", "en"];
const REMINDER_DEFAULT_TIME = "09:00";

const GAME2_DEFAULTS_BY_LANGUAGE = {
  fr: {
    instructions: [
      "Faire la vaisselle",
      "Jouer aux dames",
      "Parler aux enfants",
      "Aller dormir dans la chambre",
      "Fermer la porte du salon",
      "Ranger les chaussures",
      "Ouvrir les rideaux",
      "Préparer du thé",
      "Nettoyer la table",
      "Éteindre la lumière",
      "Appeler le voisin",
      "Lire le courrier",
    ],
    objectives: [
      "Trouver la clé rouge",
      "Observer la fenêtre",
      "Repérer le bruit lointain",
      "Retenir la consigne finale",
      "Identifier le mot caché",
      "Surveiller le couloir",
      "Repérer la lampe bleue",
      "Mémoriser la séquence exacte",
    ],
  },
  en: {
    instructions: [
      "Wash the dishes",
      "Play checkers",
      "Talk to the children",
      "Go sleep in the bedroom",
      "Close the living room door",
      "Put the shoes away",
      "Open the curtains",
      "Prepare some tea",
      "Clean the table",
      "Turn off the light",
      "Call the neighbor",
      "Read the mail",
    ],
    objectives: [
      "Find the red key",
      "Watch the window",
      "Notice the distant sound",
      "Remember the final instruction",
      "Identify the hidden word",
      "Watch the hallway",
      "Spot the blue lamp",
      "Memorize the exact sequence",
    ],
  },
};

const GAME3_DAY_ORDER = [
  { id: "monday", label: { fr: "Lun", en: "Mon" }, fullLabel: { fr: "Lundi", en: "Monday" } },
  { id: "tuesday", label: { fr: "Mar", en: "Tue" }, fullLabel: { fr: "Mardi", en: "Tuesday" } },
  { id: "wednesday", label: { fr: "Mer", en: "Wed" }, fullLabel: { fr: "Mercredi", en: "Wednesday" } },
  { id: "thursday", label: { fr: "Jeu", en: "Thu" }, fullLabel: { fr: "Jeudi", en: "Thursday" } },
  { id: "friday", label: { fr: "Ven", en: "Fri" }, fullLabel: { fr: "Vendredi", en: "Friday" } },
  { id: "saturday", label: { fr: "Sam", en: "Sat" }, fullLabel: { fr: "Samedi", en: "Saturday" } },
  { id: "sunday", label: { fr: "Dim", en: "Sun" }, fullLabel: { fr: "Dimanche", en: "Sunday" } },
];

const GAME3_DEFAULT_SCHEDULE_BY_LANGUAGE = {
  fr: {
    monday: ["Réveiller le corps", "Boire un verre d'eau", "Lancer la première mission"],
    tuesday: ["Vérifier les priorités", "Traiter une tâche courte", "Avancer sur la mission principale"],
    wednesday: ["Ranger l'espace de travail", "Faire la tâche la plus pénible", "Clore une mission utile"],
    thursday: ["Respirer 2 minutes", "Lancer un bloc de concentration", "Finir une action importante"],
    friday: ["Nettoyer le bureau", "Envoyer le message en attente", "Terminer la semaine proprement"],
    saturday: ["Faire une mission maison", "Bouger 15 minutes", "Finaliser une petite victoire"],
    sunday: ["Préparer la semaine", "Choisir trois missions claires", "Relancer le flow"],
  },
  en: {
    monday: ["Wake up the body", "Drink a glass of water", "Start the first mission"],
    tuesday: ["Check priorities", "Handle one short task", "Move the main mission forward"],
    wednesday: ["Clear the workspace", "Do the most annoying task", "Close one useful mission"],
    thursday: ["Breathe for 2 minutes", "Start a focus block", "Finish one important action"],
    friday: ["Clean the desk", "Send the waiting message", "End the week cleanly"],
    saturday: ["Do one home mission", "Move for 15 minutes", "Finish a small win"],
    sunday: ["Prepare the week", "Choose three clear missions", "Restart the flow"],
  },
};

const GAME2_MIN_INSTRUCTION_COUNT = 10;
const GAME2_MIN_OBJECTIVE_COUNT = 5;
const GAME2_START_WPM = 230;
const GAME2_MAX_WPM = 430;
const GAME2_WORD_VISIBLE_RATIO = 0.72;
const GAME2_INTER_PHRASE_PAUSE_MS = 180;
const GAME2_END_PHRASE_HOLD_MS = 120;
const HOLD_DURATION_MS = 3000;
const MAX_TIMEOUT_MS = 2147483647;

const COPY = {
  fr: {
    chooseGame: "Choisis un jeu",
    menuIntro:
      "Trois expériences pensées pour l'attention, la mémoire et l'exécution. Chaque jeu active une forme différente d'engagement mental plutôt qu'une simple consultation passive.",
    game1Copy:
      "Une immersion visuelle d'une minute pour changer de mood entre deux tâches et laisser l'esprit décrocher.",
    game2Copy:
      "Un flux de mots accéléré phrase après phrase, puis un test sur ce qui a vraiment été retenu sous pression.",
    game3Copy:
      "Une route de missions récurrentes: une seule action visible, un lancement clair, puis une validation physique.",
    startGame: "Lancer",
    menuNote:
      "Choisis ton point d'entrée: immersion visuelle, mémoire sous vitesse, ou exécution de missions. Les jeux 2 et 3 gardent leurs listes et tâches sur cet appareil.",
    language: "Langue",
    backgroundDone: "Vidéo terminée",
    backgroundDoneHint:
      "La séquence visuelle est terminée. Tu peux relancer une autre vidéo ou passer au jeu suivant.",
    anotherVideo: "Autre vidéo",
    touchToPlay: "Toucher pour lire",
    autoplayHint:
      "Si le navigateur bloque la lecture automatique locale, touche le bouton ci-dessous pour lancer la vidéo.",
    playVideo: "Lire la vidéo",
    backToMenu: "Menu",
    changeVideo: "Changer la vidéo",
    game2Intro:
      "Un seul mot visible à la fois. Les listes restent éditables et sauvegardées localement. Le mode final est choisi aléatoirement entre mémoriser les instructions absentes ou reconnaître l'objectif apparu.",
    instructions: "Instructions",
    objectives: "Objectifs",
    instructionsList: "Liste d'instructions",
    objectivesList: "Liste d'objectifs",
    edit: "Modifier",
    phrases: "phrases",
    minimum: "minimum",
    runRules: "Règles du run",
    mode1: "Mode 1",
    mode1Copy: "Trouver les 2 instructions qui n'ont jamais été montrées.",
    mode2: "Mode 2",
    mode2Copy: "Repérer l'unique objectif qui a réellement été montré.",
    playback: "Lecture",
    playbackCopy: "Flux mot par mot, plus sec et plus rapide, entre ~230 et ~430 WPM.",
    finishOpenGame3: "Terminer et ouvrir Game 03",
    verify: "Vérifier",
    backToConfig: "Configuration",
    done: "Terminé",
    addToList: "Ajouter",
    exportList: "Exporter",
    resetDefaults: "Réinitialiser",
    removeAll: "Tout supprimer",
    remove: "Supprimer",
    noPhrase: "Aucune phrase pour cette liste.",
    editorHelp:
      "Tu peux ajouter une phrase par ligne ou coller plusieurs phrases avec le format:",
    phrasePlaceholder: 'Une phrase par ligne ou "phrase une","phrase deux"',
    focus: "Focus",
    ready: "Prêt",
    review: "Révision",
    chooseMissingInstructions: "Choisis les 2 instructions non apparues",
    missingInstructionsHint: "Sélectionne exactement deux phrases, puis vérifie.",
    chooseSeenObjective: "Choisis l'objectif apparu",
    seenObjectiveHint:
      "Un seul objectif ci-dessous a vraiment été montré pendant le flux.",
    noPhraseYet: "Aucune phrase",
    more: "de plus",
    game3Intro:
      "Une mission à la fois. Le tableau reste visuel et vivant, pour aider ton cerveau à exécuter au lieu de négocier.",
    focusMission: "Mission focus",
    focusCopyIdle:
      "Fais le premier mouvement. Une fois le corps lancé, le reste de la mission devient plus facile à terminer.",
    focusCopyStarted:
      "Reste avec cette seule action. Maintiens le noyau jusqu'à ce que l'anneau de charge soit complet.",
    idealWindow: "Fenêtre idéale",
    mode: "Mode",
    singleMission: "Mission unique",
    startMission: "Lancer la mission",
    keepPressing: "Maintiens jusqu'à verrouiller la mission.",
    laterToday: "Plus tard",
    releaseToday: "Libérer aujourd'hui",
    back: "Retour",
    missionSecured: "Mission validée",
    routeScan: "Scan de route",
    secured: "validées",
    dayCampaign: "Campagne du jour",
    nodesLeft: "noeuds restants",
    routeComplete: "Route terminée",
    nextMission: "Prochaine mission",
    noRouteLoaded: "Aucune route chargée",
    routeCompleted: "Route terminée",
    flowWindow: "Fenêtre flow",
    released: "Libérées",
    launchNextMission: "Lancer la mission",
    buildTodayRoute: "Créer la route du jour",
    editToday: "Modifier aujourd'hui",
    loadDemoRoute: "Charger une démo",
    todayRoute: "Route du jour",
    noMissionsYet: "Aucune mission",
    mission: "mission",
    missions: "missions",
    missionDockEmpty: "Le dock de missions est vide",
    missionDockEmptyCopy:
      "Ajoute des missions récurrentes pour {day} et ce tableau commencera à scanner la route pour toi.",
    loadDemo: "Charger une démo",
    weeklyMap: "Carte hebdo",
    recurringSchedule: "Planning récurrent",
    moreMissions: "missions en plus",
    noMissionsPlanned: "Aucune mission planifiée pour ce jour.",
    editThisDay: "Modifier ce jour",
    editWeeklyPlan: "Modifier la semaine",
    missionEditorHelp:
      "Une ligne = une mission. Tu peux aussi coller plusieurs missions avec:",
    missionPlaceholder: 'Une mission par ligne ou "mission une","mission deux"',
    addMissions: "Ajouter",
    exportDay: "Exporter",
    resetDay: "Réinitialiser",
    clearDay: "Vider",
    noMissionsForDay: "Aucune mission pour ce jour.",
    export: "Export",
    exportReady: "Format prêt à copier:",
    copyText: "Copier",
    close: "Fermer",
    buildRouteHeadline: "Créer la route du jour",
    daySecuredHeadline: "Journée validée",
    firstMissionReady: "Première mission prête",
    keepFlowAlive: "Garde le flow vivant",
    noMissionRoutePrompt:
      "Aucune route de mission n'est chargée. Crée-en une et le tableau devient un lanceur d'action.",
    routeClearPrompt:
      "La route est claire pour aujourd'hui. Savoure la victoire ou ajuste demain tant que l'élan est là.",
    noLiveMissionPrompt:
      "Aucune mission active n'est en file. Ajuste la route pour en remettre une au centre.",
    oneMissionPrompt:
      "Une seule mission reste visible. Lance-la, fais le premier mouvement, puis valide-la avec un maintien physique.",
    securedStatus: "Validée",
    liveNowStatus: "En cours",
    releasedStatus: "Libérée aujourd'hui",
    queuedStatus: "En attente",
    routeSlot: "Emplacement",
    progressTitle: "Progression",
    progressSubtitle: "Ton élan réel, sans drama.",
    completedToday: "Validées aujourd'hui",
    activeStreak: "Streak actif",
    totalSecured: "Missions validées",
    completionRate: "Taux de complétion",
    level: "Niveau",
    xp: "XP",
    nextLevel: "prochain niveau",
    badges: "Badges",
    badgeStarter: "Premier lancement",
    badgeTen: "10 missions",
    badgeStreak: "3 jours actifs",
    badgeClean: "Route propre",
    badgeBuilder: "Architecte hebdo",
    noBadges: "Les badges arrivent dès les premières validations.",
    moodBridge: "Mood bridge",
    nowMood: "Maintenant",
    nextMood: "Après",
    moodTired: "fatigué",
    moodScattered: "dispersé",
    moodStuck: "bloqué",
    moodFocus: "focus",
    moodMemory: "mémoriser",
    moodAct: "agir",
    recommended: "Recommandé",
    openRecommended: "Ouvrir",
    recommendationGame1: "Video flow pour couper la boucle mentale.",
    recommendationGame2: "Word stream pour réancrer les objectifs.",
    recommendationGame3: "Mission flow pour passer en action.",
    onboardingTitle: "Premier setup",
    onboardingCopy: "Crée une route du jour, active un rappel, puis valide une mission.",
    buildFirstRoute: "Créer ma route",
    skip: "Plus tard",
    reminders: "Rappels",
    reminderCopy: "Notification locale pour la prochaine mission du jour.",
    reminderTime: "Heure",
    enableReminder: "Activer",
    disableReminder: "Désactiver",
    notificationReady: "Rappel actif",
    notificationBlocked: "Notifications bloquées par le navigateur.",
    notificationUnsupported: "Notifications non disponibles ici.",
    reminderScheduled: "Prochain rappel: {time}",
    reminderOff: "Rappel désactivé",
    reminderTitle: "Adippsi",
    reminderBody: "Prochaine mission: {mission}",
    testReminder: "Tester",
    visualSafety: "Confort visuel",
    calmMotion: "Mode doux",
    normalMotion: "Mode intense",
    safetyHint: "Réduit contraste, saturation et vitesse de Video flow.",
    rewardXp: "+25 XP",
    resetListConfirm: "Réinitialiser cette liste ?",
    clearListConfirm: "Supprimer toutes les phrases de cette liste ?",
    removePhraseConfirm: "Supprimer cette phrase ?",
    resetDayConfirm: "Réinitialiser {day} avec ses missions par défaut ?",
    clearDayConfirm: "Supprimer toutes les missions de {day} ?",
  },
  en: {
    chooseGame: "Choose a game",
    menuIntro:
      "Three experiences built for attention, memory, and execution. Each game activates a different kind of mental engagement instead of passive checking.",
    game1Copy:
      "A one-minute visual immersion to shift your mood between tasks and let the mind reset.",
    game2Copy:
      "A fast phrase-by-phrase word stream, followed by a test of what actually stuck under speed.",
    game3Copy:
      "A recurring mission route: one visible action, a clear launch, then a physical validation.",
    startGame: "Start",
    menuNote:
      "Choose your entry point: visual immersion, high-speed memory, or mission execution. Games 2 and 3 keep their lists and tasks on this device.",
    language: "Language",
    backgroundDone: "Video complete",
    backgroundDoneHint:
      "The visual sequence is complete. You can launch another video or move to the next game.",
    anotherVideo: "Another video",
    touchToPlay: "Touch to play",
    autoplayHint:
      "If the browser blocks local autoplay, tap the button below to start the video.",
    playVideo: "Play video",
    backToMenu: "Menu",
    changeVideo: "Change video",
    game2Intro:
      "Only one word is visible at a time. Lists stay editable and saved locally. The final mode is randomly chosen between spotting missing instructions or recognizing the objective that appeared.",
    instructions: "Instructions",
    objectives: "Objectives",
    instructionsList: "Instructions list",
    objectivesList: "Objectives list",
    edit: "Edit",
    phrases: "phrases",
    minimum: "minimum",
    runRules: "Run rules",
    mode1: "Mode 1",
    mode1Copy: "Find the 2 instructions that were never shown.",
    mode2: "Mode 2",
    mode2Copy: "Spot the single objective that was actually shown.",
    playback: "Playback",
    playbackCopy: "Word-by-word flow, sharper and faster, between ~230 and ~430 WPM.",
    finishOpenGame3: "Finish and open Game 03",
    verify: "Verify",
    backToConfig: "Config",
    done: "Done",
    addToList: "Add to list",
    exportList: "Export list",
    resetDefaults: "Reset defaults",
    removeAll: "Remove all",
    remove: "Remove",
    noPhrase: "No phrase yet for this list.",
    editorHelp:
      "You can add one phrase per line or paste multiple phrases with this format:",
    phrasePlaceholder: 'One phrase per line or "phrase one","phrase two"',
    focus: "Focus",
    ready: "Ready",
    review: "Review",
    chooseMissingInstructions: "Choose the 2 missing instructions",
    missingInstructionsHint: "Select exactly two phrases, then verify.",
    chooseSeenObjective: "Choose the objective that appeared",
    seenObjectiveHint:
      "Only one objective below was actually shown during the stream.",
    noPhraseYet: "No phrase yet",
    more: "more",
    game3Intro:
      "One mission at a time. The board stays visual and alive, so your brain can execute instead of negotiating.",
    focusMission: "Focus mission",
    focusCopyIdle:
      "Make the first move. Once your body is in motion, the rest of the mission becomes much easier to finish.",
    focusCopyStarted:
      "Stay with this one action only. Hold the core until the charge ring is complete.",
    idealWindow: "Ideal window",
    mode: "Mode",
    singleMission: "Single mission",
    startMission: "Start mission",
    keepPressing: "Keep pressing until the mission core seals.",
    laterToday: "Later today",
    releaseToday: "Release for today",
    back: "Back",
    missionSecured: "Mission secured",
    routeScan: "Route scan",
    secured: "secured",
    dayCampaign: "Day campaign",
    nodesLeft: "nodes left",
    routeComplete: "Route complete",
    nextMission: "Next mission",
    noRouteLoaded: "No route loaded yet",
    routeCompleted: "Route completed",
    flowWindow: "Flow window",
    released: "Released",
    launchNextMission: "Launch next mission",
    buildTodayRoute: "Build today route",
    editToday: "Edit today",
    loadDemoRoute: "Load demo route",
    todayRoute: "Today route",
    noMissionsYet: "No missions yet",
    mission: "mission",
    missions: "missions",
    missionDockEmpty: "Mission dock is empty",
    missionDockEmptyCopy:
      "Add recurring missions for {day} and this board will start scanning the route for you.",
    loadDemo: "Load demo",
    weeklyMap: "Weekly map",
    recurringSchedule: "Recurring schedule",
    moreMissions: "more missions",
    noMissionsPlanned: "No missions planned yet for this day.",
    editThisDay: "Edit this day",
    editWeeklyPlan: "Edit weekly plan",
    missionEditorHelp:
      "One line = one mission. You can also paste multiple missions with:",
    missionPlaceholder: 'One mission per line or "mission one","mission two"',
    addMissions: "Add missions",
    exportDay: "Export day",
    resetDay: "Reset day",
    clearDay: "Clear day",
    noMissionsForDay: "No missions yet for this day.",
    export: "Export",
    exportReady: "Ready-to-copy format:",
    copyText: "Copy text",
    close: "Close",
    buildRouteHeadline: "Build today route",
    daySecuredHeadline: "Day secured",
    firstMissionReady: "First mission ready",
    keepFlowAlive: "Keep the flow alive",
    noMissionRoutePrompt:
      "No mission route is loaded yet. Build one and the board turns into an action launcher.",
    routeClearPrompt:
      "The route is clear for today. Enjoy the win or tune tomorrow's path while the momentum is high.",
    noLiveMissionPrompt:
      "No live mission is queued right now. Adjust the route and bring one back into focus.",
    oneMissionPrompt:
      "Only one mission stays visible. Launch it, make the first move, then secure it with a physical hold.",
    securedStatus: "Secured",
    liveNowStatus: "Live now",
    releasedStatus: "Released for today",
    queuedStatus: "Queued",
    routeSlot: "Route slot",
    progressTitle: "Progress",
    progressSubtitle: "Your real momentum, without the drama.",
    completedToday: "Completed today",
    activeStreak: "Active streak",
    totalSecured: "Missions secured",
    completionRate: "Completion rate",
    level: "Level",
    xp: "XP",
    nextLevel: "next level",
    badges: "Badges",
    badgeStarter: "First launch",
    badgeTen: "10 missions",
    badgeStreak: "3 active days",
    badgeClean: "Clean route",
    badgeBuilder: "Weekly architect",
    noBadges: "Badges appear after your first secured missions.",
    moodBridge: "Mood bridge",
    nowMood: "Now",
    nextMood: "Next",
    moodTired: "tired",
    moodScattered: "scattered",
    moodStuck: "stuck",
    moodFocus: "focus",
    moodMemory: "remember",
    moodAct: "act",
    recommended: "Recommended",
    openRecommended: "Open",
    recommendationGame1: "Video flow to interrupt the mental loop.",
    recommendationGame2: "Word stream to anchor goals again.",
    recommendationGame3: "Mission flow to move into action.",
    onboardingTitle: "First setup",
    onboardingCopy: "Create today's route, enable a reminder, then secure one mission.",
    buildFirstRoute: "Build my route",
    skip: "Later",
    reminders: "Reminders",
    reminderCopy: "Local notification for the next mission of the day.",
    reminderTime: "Time",
    enableReminder: "Enable",
    disableReminder: "Disable",
    notificationReady: "Reminder active",
    notificationBlocked: "Notifications are blocked by the browser.",
    notificationUnsupported: "Notifications are not available here.",
    reminderScheduled: "Next reminder: {time}",
    reminderOff: "Reminder off",
    reminderTitle: "Adippsi",
    reminderBody: "Next mission: {mission}",
    testReminder: "Test",
    visualSafety: "Visual comfort",
    calmMotion: "Calm mode",
    normalMotion: "Intense mode",
    safetyHint: "Reduces Video flow contrast, saturation, and speed.",
    rewardXp: "+25 XP",
    resetListConfirm: "Reset this list to the defaults?",
    clearListConfirm: "Remove every phrase from this list?",
    removePhraseConfirm: "Remove this phrase?",
    resetDayConfirm: "Reset {day} to its default missions?",
    clearDayConfirm: "Remove every mission from {day}?",
  },
};

const app = document.getElementById("app");
let activeLanguage = loadLanguage();

const state = {
  language: activeLanguage,
  screen: "menu",
  exportDialog: null,
  app: {
    ...loadAppSettings(),
    moodFrom: "tired",
    moodTo: "act",
    notice: "",
  },
  game1: {
    videoIndex: 0,
    ended: false,
    autoplayFailed: false,
    lastVideoIndex: -1,
  },
  game2: {
    ...loadGame2State(),
    stage: "config",
    editorTarget: null,
    editorDraft: "",
    lastMode: null,
    playbackCaption: t("ready"),
    visibleWord: "",
    round: null,
    selectedPhrases: [],
    verified: false,
    playbackRunId: 0,
  },
  game3: {
    ...loadGame3State(),
    stage: "board",
    selectedDay: getTodayDayId(),
    editorDay: getTodayDayId(),
    editorDraft: "",
    focusMissionId: null,
    hasStartedMission: false,
    holdProgress: 0,
    rewardMissionText: "",
    rewardTimeoutId: null,
  },
};

let holdIntervalId = null;
let reminderTimeoutId = null;
let lastAnalyticsScreenKey = "";

document.addEventListener("click", handleClick);
document.addEventListener("input", handleInput);
window.addEventListener("appinstalled", () => {
  trackEvent("pwa_installed", { install_source: "browser_prompt" });
});
window.addEventListener("beforeinstallprompt", () => {
  trackEvent("pwa_install_prompt_available");
});
document.documentElement.lang = state.language;
registerServiceWorker();
render();

function readStorage(key) {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.warn(`[STORAGE] Failed to read ${key}`, error);
    return null;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.warn(`[STORAGE] Failed to write ${key}`, error);
    return false;
  }
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./service-worker.js")
      .catch((error) => console.warn("[PWA] Service worker registration failed", error));
  });
}

function trackEvent(eventName, params = {}) {
  if (typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, {
    send_to: GA_MEASUREMENT_ID,
    app_name: "adippsi",
    language: state.language,
    ...sanitizeAnalyticsParams(params),
  });
}

function trackScreenView() {
  const stage =
    state.screen === "game2"
      ? state.game2.stage
      : state.screen === "game3"
        ? state.game3.stage
        : "default";
  const screenKey = `${state.screen}:${stage}`;

  if (screenKey === lastAnalyticsScreenKey) {
    return;
  }

  lastAnalyticsScreenKey = screenKey;
  trackEvent("screen_view", {
    screen_name: state.screen,
    screen_stage: stage,
  });
}

function sanitizeAnalyticsParams(params) {
  return Object.fromEntries(
    Object.entries(params).flatMap(([key, value]) => {
      if (value === null || value === undefined) {
        return [];
      }

      if (typeof value === "number" || typeof value === "boolean") {
        return [[key, value]];
      }

      return [[key, String(value).replace(/\s+/g, "_").slice(0, 64)]];
    }),
  );
}

function getAnalyticsSource(source) {
  return source || "direct";
}

function confirmAction(message) {
  try {
    if (typeof window.confirm === "function") {
      return window.confirm(message);
    }
  } catch (error) {
    console.warn("[UI] confirm() failed, falling back to auto-accept", error);
  }

  return true;
}

function loadLanguage() {
  const saved = readStorage(LANGUAGE_STORAGE_KEY);
  if (SUPPORTED_LANGUAGES.includes(saved)) {
    return saved;
  }

  const browserLanguage = navigator.language?.slice(0, 2).toLowerCase();
  return SUPPORTED_LANGUAGES.includes(browserLanguage) ? browserLanguage : "fr";
}

function loadAppSettings() {
  try {
    const parsed = JSON.parse(readStorage(SETTINGS_STORAGE_KEY) || "{}");
    return {
      reminderEnabled: Boolean(parsed.reminderEnabled),
      reminderTime:
        typeof parsed.reminderTime === "string" && /^\d{2}:\d{2}$/.test(parsed.reminderTime)
          ? parsed.reminderTime
          : REMINDER_DEFAULT_TIME,
      reducedMotion: Boolean(parsed.reducedMotion),
      onboardingDismissed: Boolean(parsed.onboardingDismissed),
    };
  } catch (_error) {
    return {
      reminderEnabled: false,
      reminderTime: REMINDER_DEFAULT_TIME,
      reducedMotion: false,
      onboardingDismissed: false,
    };
  }
}

function saveAppSettings() {
  const payload = {
    reminderEnabled: state.app.reminderEnabled,
    reminderTime: state.app.reminderTime,
    reducedMotion: state.app.reducedMotion,
    onboardingDismissed: state.app.onboardingDismissed,
  };
  writeStorage(SETTINGS_STORAGE_KEY, JSON.stringify(payload));
}

function setLanguage(language) {
  if (!SUPPORTED_LANGUAGES.includes(language) || state.language === language) {
    return;
  }

  state.language = language;
  activeLanguage = language;
  writeStorage(LANGUAGE_STORAGE_KEY, language);
  document.documentElement.lang = language;
  trackEvent("language_changed", { selected_language: language });
  render();
}

function t(key, replacements = {}) {
  const value = COPY[activeLanguage]?.[key] ?? COPY.fr[key] ?? key;
  return Object.entries(replacements).reduce(
    (text, [name, replacement]) => text.replaceAll(`{${name}}`, replacement),
    value,
  );
}

function getGame2Defaults() {
  return GAME2_DEFAULTS_BY_LANGUAGE[activeLanguage] ?? GAME2_DEFAULTS_BY_LANGUAGE.fr;
}

function getGame3DefaultSchedule() {
  return GAME3_DEFAULT_SCHEDULE_BY_LANGUAGE[activeLanguage] ?? GAME3_DEFAULT_SCHEDULE_BY_LANGUAGE.fr;
}

function pluralMission(count) {
  return count > 1 ? t("missions") : t("mission");
}

function getDraftValue(role, fallback = "") {
  const element = document.querySelector(`[data-role="${role}"]`);
  if (element && "value" in element) {
    return element.value;
  }

  return fallback;
}

function formatExportList(items) {
  return items
    .map((item) => normalizePhrase(String(item ?? "")).replace(/"/g, "'"))
    .filter(Boolean)
    .map((item) => `"${item}"`)
    .join(",");
}

function openExportDialog(title, items) {
  state.exportDialog = {
    title,
    text: formatExportList(items),
  };
  render();
}

async function copyExportText() {
  if (!state.exportDialog?.text) {
    return;
  }

  const text = state.exportDialog.text;

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }
  } catch (error) {
    console.warn("[EXPORT] Clipboard API failed", error);
  }

  const textarea = document.querySelector('[data-role="export-text"]');
  if (textarea && "select" in textarea) {
    textarea.focus();
    textarea.select();
    textarea.setSelectionRange?.(0, text.length);
    try {
      document.execCommand("copy");
    } catch (error) {
      console.warn("[EXPORT] execCommand copy failed", error);
    }
  }
}

function loadGame2State() {
  try {
    const raw = readStorage(GAME2_STORAGE_KEY);
    if (!raw) {
      return cloneGame2Defaults();
    }

    const parsed = JSON.parse(raw);
    return {
      instructions: normalizeStringArray(
        parsed.instructions,
        getGame2Defaults().instructions,
      ),
      objectives: normalizeStringArray(
        parsed.objectives,
        getGame2Defaults().objectives,
      ),
    };
  } catch (_error) {
    return cloneGame2Defaults();
  }
}

function loadGame3State() {
  try {
    const raw = readStorage(GAME3_STORAGE_KEY);
    if (!raw) {
      return {
        schedule: cloneGame3Defaults(),
        progressByDate: {},
      };
    }

    const parsed = JSON.parse(raw);
    const schedule = normalizeSchedule(parsed.schedule);
    const progressByDate = normalizeProgress(parsed.progressByDate);

    return {
      schedule,
      progressByDate,
    };
  } catch (_error) {
    return {
      schedule: cloneGame3Defaults(),
      progressByDate: {},
    };
  }
}

function cloneGame2Defaults() {
  return {
    instructions: [...getGame2Defaults().instructions],
    objectives: [...getGame2Defaults().objectives],
  };
}

function cloneGame3Defaults() {
  const next = {};
  GAME3_DAY_ORDER.forEach((day) => {
    next[day.id] = [...getGame3DefaultSchedule()[day.id]];
  });
  return next;
}

function saveGame2State() {
  const payload = {
    instructions: state.game2.instructions,
    objectives: state.game2.objectives,
  };
  writeStorage(GAME2_STORAGE_KEY, JSON.stringify(payload));
}

function saveGame3State() {
  const payload = {
    schedule: state.game3.schedule,
    progressByDate: state.game3.progressByDate,
  };
  writeStorage(GAME3_STORAGE_KEY, JSON.stringify(payload));
}

function normalizeStringArray(value, fallback) {
  if (!Array.isArray(value)) {
    return [...fallback];
  }

  const next = value
    .map((item) => normalizePhrase(String(item ?? "")))
    .filter(Boolean);

  return next.length > 0 ? dedupePhrases(next) : [...fallback];
}

function normalizeSchedule(schedule) {
  const next = {};

  GAME3_DAY_ORDER.forEach((day) => {
    next[day.id] = normalizeStringArray(
      schedule?.[day.id],
      getGame3DefaultSchedule()[day.id],
    );
  });

  return next;
}

function normalizeProgress(progressByDate) {
  if (!progressByDate || typeof progressByDate !== "object") {
    return {};
  }

  const next = {};

  Object.entries(progressByDate).forEach(([dateKey, entry]) => {
    if (!entry || typeof entry !== "object") {
      return;
    }

    const dayId = GAME3_DAY_ORDER.some((day) => day.id === entry.dayId)
      ? entry.dayId
      : getTodayDayId();

    const tasks = Array.isArray(entry.tasks)
      ? entry.tasks
          .map((task, index) => normalizeTask(task, index))
          .filter(Boolean)
      : [];

    next[dateKey] = { dayId, tasks };
  });

  return next;
}

function normalizeTask(task, index) {
  if (!task || typeof task !== "object") {
    return null;
  }

  const text = normalizePhrase(String(task.text ?? ""));
  if (!text) {
    return null;
  }

  const status = ["pending", "later", "done", "released"].includes(task.status)
    ? task.status
    : "pending";

  return {
    id: String(task.id ?? `task-${index}`),
    text,
    status,
  };
}

function render() {
  syncOrientationPreference();
  app.innerHTML = renderScreen() + renderExportDialog();
  hydrateScreen();
  trackScreenView();
}

function syncOrientationPreference() {
  const lock = window.screen?.orientation?.lock;

  if (typeof lock === "function") {
    window.screen.orientation.lock("portrait").catch(() => {});
  }
}

function renderScreen() {
  switch (state.screen) {
    case "game1":
      return renderGame1();
    case "game2":
      return renderGame2();
    case "game3":
      return renderGame3();
    default:
      return renderMenu();
  }
}

function renderMenu() {
  return `
    <main class="app-shell screen">
      <section class="stack">
        ${renderLanguageSwitch()}
        <header class="hero">
          <div class="eyebrow">ADIPPSI</div>
          <h1 class="title">${t("chooseGame")}</h1>
          <p class="subtitle">${t("menuIntro")}</p>
        </header>

        ${renderOnboardingPanel()}
        ${renderProgressPanel()}
        ${renderMoodBridge()}

        <section class="menu-grid">
          <article class="card stack">
            <div class="eyebrow">Game 01</div>
            <h2>Video flow</h2>
            <p class="copy">${t("game1Copy")}</p>
            <button class="button" data-action="open-game1">${t("startGame")}</button>
          </article>

          <article class="card stack">
            <div class="eyebrow">Game 02</div>
            <h2>Word stream recall</h2>
            <p class="copy">${t("game2Copy")}</p>
            <button class="button" data-action="open-game2">${t("startGame")}</button>
          </article>

          <article class="card stack">
            <div class="eyebrow">Game 03</div>
            <h2>Mission flow</h2>
            <p class="copy">${t("game3Copy")}</p>
            <button class="button" data-action="open-game3">${t("startGame")}</button>
          </article>
        </section>

        <div class="note">${t("menuNote")}</div>
      </section>
    </main>
  `;
}

function renderLanguageSwitch() {
  return `
    <div class="language-switch" aria-label="${t("language")}">
      <span>${t("language")}</span>
      <button class="${state.language === "fr" ? "active" : ""}" data-action="set-language" data-language="fr">FR</button>
      <button class="${state.language === "en" ? "active" : ""}" data-action="set-language" data-language="en">EN</button>
    </div>
  `;
}

function renderOnboardingPanel() {
  if (state.app.onboardingDismissed) {
    return "";
  }

  return `
    <section class="panel onboarding-panel">
      <div>
        <div class="eyebrow">${t("onboardingTitle")}</div>
        <p class="copy">${t("onboardingCopy")}</p>
      </div>
      <div class="row">
        <button class="button" data-action="onboarding-build-route">${t("buildFirstRoute")}</button>
        <button class="button-ghost" data-action="dismiss-onboarding">${t("skip")}</button>
      </div>
    </section>
  `;
}

function renderProgressPanel() {
  const stats = getProgressStats();
  const badges = getProgressBadges(stats);

  return `
    <section class="panel stack progress-panel">
      <div class="row between">
        <div>
          <div class="eyebrow">${t("progressTitle")}</div>
          <h2 class="panel-title">${t("level")} ${stats.level}</h2>
        </div>
        <div class="xp-pill">${stats.xp} ${t("xp")}</div>
      </div>

      <div class="progress-bar">
        <div class="progress-fill" style="width:${stats.levelProgress}%;"></div>
      </div>
      <div class="muted">${stats.xpToNext} ${t("xp")} ${t("nextLevel")}</div>

      <div class="stat-grid">
        <div class="metric-tile">
          <strong>${stats.completedToday}</strong>
          <span>${t("completedToday")}</span>
        </div>
        <div class="metric-tile">
          <strong>${stats.streak}</strong>
          <span>${t("activeStreak")}</span>
        </div>
        <div class="metric-tile">
          <strong>${stats.totalDone}</strong>
          <span>${t("totalSecured")}</span>
        </div>
        <div class="metric-tile">
          <strong>${stats.completionRate}%</strong>
          <span>${t("completionRate")}</span>
        </div>
      </div>

      <div>
        <div class="eyebrow">${t("badges")}</div>
        <div class="badge-row">
          ${
            badges.length
              ? badges.map((badge) => `<span class="badge-chip">${badge}</span>`).join("")
              : `<span class="muted">${t("noBadges")}</span>`
          }
        </div>
      </div>
    </section>
  `;
}

function renderMoodBridge() {
  const recommendation = getMoodRecommendation();
  const fromMoods = [
    { id: "tired", label: t("moodTired") },
    { id: "scattered", label: t("moodScattered") },
    { id: "stuck", label: t("moodStuck") },
  ];
  const toMoods = [
    { id: "focus", label: t("moodFocus") },
    { id: "memory", label: t("moodMemory") },
    { id: "act", label: t("moodAct") },
  ];

  return `
    <section class="panel stack mood-panel">
      <div class="row between">
        <div>
          <div class="eyebrow">${t("moodBridge")}</div>
          <h2 class="panel-title">${recommendation.title}</h2>
        </div>
        <button class="button" data-action="${recommendation.action}" data-source="mood_bridge">${t("openRecommended")}</button>
      </div>

      <div class="mood-grid">
        <div>
          <div class="muted">${t("nowMood")}</div>
          <div class="segmented-row">
            ${fromMoods.map((mood) => renderMoodButton("moodFrom", mood)).join("")}
          </div>
        </div>
        <div>
          <div class="muted">${t("nextMood")}</div>
          <div class="segmented-row">
            ${toMoods.map((mood) => renderMoodButton("moodTo", mood)).join("")}
          </div>
        </div>
      </div>

      <div class="recommendation-line">
        <span>${t("recommended")}</span>
        <strong>${recommendation.copy}</strong>
      </div>
    </section>
  `;
}

function renderMoodButton(role, mood) {
  const active = state.app[role] === mood.id;
  return `
    <button
      class="mood-chip ${active ? "active" : ""}"
      data-action="select-mood"
      data-role="${role}"
      data-mood="${mood.id}"
    >
      ${mood.label}
    </button>
  `;
}

function getMoodRecommendation() {
  if (state.app.moodTo === "memory") {
    return {
      title: "Word stream recall",
      action: "open-game2",
      copy: t("recommendationGame2"),
    };
  }

  if (state.app.moodTo === "focus" || state.app.moodFrom === "scattered") {
    return {
      title: "Video flow",
      action: "open-game1",
      copy: t("recommendationGame1"),
    };
  }

  return {
    title: "Mission flow",
    action: "open-game3",
    copy: t("recommendationGame3"),
  };
}
function renderGame1() {
  const src = VIDEO_SOURCES[state.game1.videoIndex];
  const overlay = state.game1.ended
    ? `
      <div class="video-center glass">
        <div class="eyebrow">Game 01</div>
        <h2 class="panel-title">${t("backgroundDone")}</h2>
        <p class="video-hint">${t("backgroundDoneHint")}</p>
        <div class="row" style="justify-content:center; margin-top:18px;">
          <button class="button" data-action="game1-next-video">${t("anotherVideo")}</button>
          <button class="button-ghost" data-action="open-game2">Game 02</button>
        </div>
      </div>
    `
    : state.game1.autoplayFailed
      ? `
      <div class="video-center glass">
        <div class="eyebrow">Game 01</div>
        <h2 class="panel-title">${t("touchToPlay")}</h2>
        <p class="video-hint">${t("autoplayHint")}</p>
        <div class="row" style="justify-content:center; margin-top:18px;">
          <button class="button" data-action="game1-play">${t("playVideo")}</button>
        </div>
      </div>
    `
      : "";

  return `
    <main class="video-screen ${state.app.reducedMotion ? "safe-motion" : ""}">
      <video
        id="game1-video"
        src="${src}"
        muted
        playsinline
        preload="auto"
        ${state.game1.autoplayFailed || state.game1.ended ? "" : "autoplay"}
      ></video>

      <section class="video-overlay">
        <div class="video-topbar">
          <button class="button-ghost glass stealth-button" data-action="go-menu">${t("backToMenu")}</button>
          <button class="button-soft glass" data-action="toggle-reduced-motion">
            ${state.app.reducedMotion ? t("normalMotion") : t("calmMotion")}
          </button>
        </div>

        ${overlay}

        <div class="video-bottombar">
          <div></div>
          <button class="button-soft glass stealth-button" data-action="game1-next-video">${t("changeVideo")}</button>
        </div>
      </section>
    </main>
  `;
}

function renderGame2() {
  if (state.game2.stage === "playback") {
    return `
      <main class="app-shell screen word-stage">
        <section class="word-stage-card">
          <p class="word-caption">${escapeHtml(state.game2.playbackCaption)}</p>
          <div class="word-display">${escapeHtml(state.game2.visibleWord || " ")}</div>
        </section>
      </main>
    `;
  }

  if (state.game2.stage === "review" && state.game2.round) {
    return `
      <main class="app-shell screen">
        <section class="stack">
          <header class="hero">
            <div class="eyebrow">Game 02</div>
            <h1 class="title" style="font-size: clamp(1.9rem, 7vw, 2.8rem);">
              ${escapeHtml(state.game2.round.reviewTitle)}
            </h1>
            <p class="subtitle">${escapeHtml(state.game2.round.reviewHint)}</p>
          </header>

          <section class="panel review-list">
            ${state.game2.round.challengeOptions
              .map((phrase) => renderReviewOption(phrase))
              .join("")}
          </section>

          <div class="row">
            ${
              state.game2.verified
                ? `<button class="button" data-action="game2-finish">${t("finishOpenGame3")}</button>`
                : `<button
                    class="button"
                    data-action="game2-verify"
                    ${state.game2.selectedPhrases.length !== state.game2.round.requiredSelections ? "disabled" : ""}
                  >
                    ${t("verify")}
                  </button>`
            }
            <button class="button-ghost" data-action="game2-reset-config">${t("backToConfig")}</button>
            <button class="button-soft" data-action="go-menu">${t("backToMenu")}</button>
          </div>
        </section>
      </main>
    `;
  }

  return `
    <main class="app-shell screen">
      <section class="stack">
        <header class="hero">
          ${renderLanguageSwitch()}
          <div class="eyebrow">Game 02</div>
          <h1 class="title" style="font-size: clamp(2rem, 7vw, 3rem);">Word stream recall</h1>
          <p class="subtitle">${t("game2Intro")}</p>
        </header>

        <section class="grid two">
          <article class="panel stack">
            <div class="row between">
              <div>
                <div class="eyebrow">${t("instructions")}</div>
                <h2 class="panel-title">${t("instructionsList")}</h2>
              </div>
              <button class="small-button" data-action="game2-open-editor" data-target="instructions">${t("edit")}</button>
            </div>
            <div class="row">
              <span class="stat-pill">${state.game2.instructions.length} ${t("phrases")}</span>
              <span class="stat-pill">${GAME2_MIN_INSTRUCTION_COUNT} ${t("minimum")}</span>
            </div>
            <p class="list-preview">${escapeHtml(getGame2ListPreview(state.game2.instructions))}</p>
          </article>

          <article class="panel stack">
            <div class="row between">
              <div>
                <div class="eyebrow">${t("objectives")}</div>
                <h2 class="panel-title">${t("objectivesList")}</h2>
              </div>
              <button class="small-button" data-action="game2-open-editor" data-target="objectives">${t("edit")}</button>
            </div>
            <div class="row">
              <span class="stat-pill">${state.game2.objectives.length} ${t("phrases")}</span>
              <span class="stat-pill">${GAME2_MIN_OBJECTIVE_COUNT} ${t("minimum")}</span>
            </div>
            <p class="list-preview">${escapeHtml(getGame2ListPreview(state.game2.objectives))}</p>
          </article>
        </section>

        <section class="panel stack">
          <div class="eyebrow">${t("runRules")}</div>
          <div class="grid auto">
            <div class="soft panel">
              <h3 class="panel-title-sm">${t("mode1")}</h3>
              <p class="copy">${t("mode1Copy")}</p>
            </div>
            <div class="soft panel">
              <h3 class="panel-title-sm">${t("mode2")}</h3>
              <p class="copy">${t("mode2Copy")}</p>
            </div>
            <div class="soft panel">
              <h3 class="panel-title-sm">${t("playback")}</h3>
              <p class="copy">${t("playbackCopy")}</p>
            </div>
          </div>
        </section>

        <div class="row">
          <button class="button" data-action="game2-start" ${canStartGame2() ? "" : "disabled"}>
            ${t("startGame")}
          </button>
          <button class="button-ghost" data-action="go-menu">${t("backToMenu")}</button>
        </div>
      </section>

      ${renderGame2EditorModal()}
    </main>
  `;
}

function renderReviewOption(phrase) {
  const status = getGame2PhraseStatus(phrase);
  const classes = ["review-option"];

  if (status === "selected") classes.push("selected");
  if (status === "correct") classes.push("correct");
  if (status === "wrong") classes.push("wrong");

  return `
    <button
      class="${classes.join(" ")}"
      data-action="game2-toggle-phrase"
      data-phrase="${escapeAttribute(phrase)}"
      ${state.game2.verified ? "disabled" : ""}
    >
      ${escapeHtml(phrase)}
    </button>
  `;
}

function renderGame2EditorModal() {
  if (!state.game2.editorTarget) {
    return "";
  }

  const isInstructions = state.game2.editorTarget === "instructions";
  const title = isInstructions ? t("instructionsList") : t("objectivesList");
  const list = isInstructions
    ? state.game2.instructions
    : state.game2.objectives;

  return `
    <div class="modal-backdrop" data-action="modal-backdrop">
      <section class="modal">
        <div class="stack">
          <div class="row between">
            <div>
              <div class="eyebrow">${t("edit")}</div>
              <h2 class="panel-title">${title}</h2>
            </div>
            <button class="button-ghost" data-action="game2-close-editor">${t("done")}</button>
          </div>

          <p class="copy">
            ${t("editorHelp")}
            <strong>"${escapeHtml(getGame2Defaults().instructions[0])}","${escapeHtml(getGame2Defaults().instructions[1])}"</strong>
          </p>

          <textarea
            class="textarea"
            data-role="game2-editor-draft"
            placeholder='${t("phrasePlaceholder")}'
          >${escapeHtml(state.game2.editorDraft)}</textarea>

          <div class="row">
            <button class="button" data-action="game2-add-phrases">${t("addToList")}</button>
            <button class="button-soft" data-action="game2-export-list">${t("exportList")}</button>
            <button class="button-soft" data-action="game2-reset-list">${t("resetDefaults")}</button>
            <button class="button-ghost button-danger" data-action="game2-clear-list">${t("removeAll")}</button>
          </div>

          <div class="phrase-list">
            ${
              list.length
                ? list
                    .map(
                      (phrase, index) => `
                      <article class="phrase-item">
                        <div class="index-badge">${index + 1}</div>
                        <div class="phrase-item-copy">${escapeHtml(phrase)}</div>
                        <button
                          class="small-button button-danger"
                          data-action="game2-remove-phrase"
                          data-phrase="${escapeAttribute(phrase)}"
                        >
                          ${t("remove")}
                        </button>
                      </article>
                    `,
                    )
                    .join("")
                : `<div class="empty-state">${t("noPhrase")}</div>`
            }
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderGame3() {
  const now = new Date();
  const todayDayId = getTodayDayId();
  const todaySnapshot = getCurrentDaySnapshot();
  const selectedDayTasks = state.game3.schedule[state.game3.selectedDay] || [];
  const selectedDayPreview = selectedDayTasks.slice(0, 3);
  const nextMission = getNextMission(todaySnapshot.tasks);
  const completedCount = todaySnapshot.tasks.filter(
    (task) => task.status === "done",
  ).length;
  const totalCount = todaySnapshot.tasks.length;
  const releasedCount = todaySnapshot.tasks.filter(
    (task) => task.status === "released",
  ).length;
  const pendingCount = Math.max(0, totalCount - completedCount - releasedCount);
  const flowWindow = formatGame3FlowWindow(now, Math.max(1, pendingCount));
  const routeHeadline = getGame3RouteHeadline(
    totalCount,
    completedCount,
    pendingCount,
  );
  const missionPrompt = getGame3MissionPrompt(
    nextMission,
    totalCount,
    pendingCount,
  );
  const todayTrack = todaySnapshot.tasks.map((task) => ({
    task,
    state: getGame3TaskVisualState(task, nextMission?.id ?? null),
  }));

  if (state.game3.stage === "focus" && state.game3.focusMissionId) {
    const mission = todaySnapshot.tasks.find(
      (task) => task.id === state.game3.focusMissionId,
    );
    if (!mission) {
      state.game3.stage = "board";
      state.game3.focusMissionId = null;
      state.game3.hasStartedMission = false;
      state.game3.holdProgress = 0;
      return renderGame3();
    }

    return `
      <main class="app-shell screen game3-screen">
        <div class="background-orb orb-top"></div>
        <div class="background-orb orb-bottom"></div>
        <section class="focus-shell">
          <div class="eyebrow">${t("focusMission")}</div>
          <div class="focus-day-label">${getDayLabel(todayDayId)}</div>

          <div class="panel focus-mission-card stack">
            <h1 class="focus-title">
              ${escapeHtml(mission.text)}
            </h1>
            <p class="focus-subtitle">
              ${
                state.game3.hasStartedMission
                  ? t("focusCopyStarted")
                  : t("focusCopyIdle")
              }
            </p>

            <div class="focus-info-row">
              <div class="window-card">
                <div class="window-label">${t("idealWindow")}</div>
                <div class="window-value">${flowWindow}</div>
              </div>
              <div class="window-card">
                <div class="window-label">${t("mode")}</div>
                <div class="window-value">${t("singleMission")}</div>
              </div>
            </div>
          </div>

          ${
            !state.game3.hasStartedMission
              ? `
                <button class="focus-launch-button" data-action="game3-begin-mission">
                  ${t("startMission")}
                </button>
              `
              : `
                <div class="hold-zone">
                  <div class="hold-core" style="--hold-progress:${state.game3.holdProgress}">
                    <div class="hold-ring"></div>
                    <div class="hold-halo"></div>
                    <button class="hold-button" id="hold-button" data-mission-id="${escapeAttribute(mission.id)}">
                      <span>HOLD</span>
                      <strong>3 SEC</strong>
                    </button>
                  </div>
                  <div class="progress-bar" style="width:min(92vw, 360px);">
                    <div class="progress-fill" style="width:${Math.round(state.game3.holdProgress * 100)}%;"></div>
                  </div>
                  <p class="copy" style="text-align:center; max-width:420px;">
                    ${t("keepPressing")}
                  </p>
                </div>
              `
          }

          <div class="focus-footer">
            <button class="focus-secondary-button" data-action="game3-later">${t("laterToday")}</button>
            <button class="focus-secondary-button" data-action="game3-release">${t("releaseToday")}</button>
            <button class="focus-ghost-button" data-action="game3-back-board">${t("back")}</button>
          </div>
        </section>
      </main>
    `;
  }

  if (state.game3.stage === "reward") {
    return `
      <main class="app-shell screen reward game3-screen">
        <section class="reward-burst">
          <div class="reward-shard reward-shard-top"></div>
          <div class="reward-shard reward-shard-left"></div>
          <div class="reward-shard reward-shard-right"></div>
          <div class="reward-gem"></div>
          <div class="eyebrow">${t("missionSecured")}</div>
          <h1 class="title" style="font-size: clamp(2rem, 8vw, 3rem);">${t("rewardXp")}</h1>
          <p class="subtitle">${escapeHtml(state.game3.rewardMissionText)}</p>
        </section>
      </main>
    `;
  }

  return `
    <main class="app-shell screen game3-screen">
      <div class="background-orb orb-top"></div>
      <div class="background-orb orb-bottom"></div>
      <section class="stack game3-board">
        <header class="hero hero-block">
          ${renderLanguageSwitch()}
          <div class="eyebrow">Game 03</div>
          <h1 class="title">Mission flow</h1>
          <p class="subtitle">${t("game3Intro")}</p>
        </header>

        <section class="panel route-scan-card stack">
          <div class="route-scan-header">
            <div>
              <div class="eyebrow">${t("routeScan")}</div>
              <h2 class="route-scan-title">${completedCount} / ${Math.max(totalCount, 1)} ${t("secured")}</h2>
            </div>
            <div class="route-scan-hint">${routeHeadline}</div>
          </div>

          <div class="segment-bar game3-segment-bar">
            ${(todayTrack.length
              ? todayTrack
              : Array.from({ length: 4 }).map(() => ({ state: "queued" }))
            )
              .map((item) => renderGame3Segment(item.state))
              .join("")}
          </div>

          <div class="gem-row">
            ${Array.from({ length: Math.max(4, totalCount || 3) })
              .map((_, index) => renderGame3Gem(index < completedCount))
              .join("")}
          </div>
        </section>

        <section class="panel campaign-card stack">
          <div class="row between">
            <h2 class="panel-title">${t("dayCampaign")}</h2>
            <div class="muted">${pendingCount > 0 ? `${pendingCount} ${t("nodesLeft")}` : t("routeComplete")}</div>
          </div>

          <div class="campaign-track">
            ${(todayTrack.length
              ? todayTrack
              : Array.from({ length: 5 }).map((_, index) => ({
                  task: { text: t("routeSlot"), id: `slot-${index}` },
                  state: "queued",
                }))
            )
              .map((item, index, list) =>
                renderGame3CampaignNode(item, index, list.length),
              )
              .join("")}
          </div>
        </section>

        <section class="panel primary-card stack">
          <div class="primary-card-top">
            <div class="primary-card-copy">
              <div class="eyebrow">${t("nextMission")}</div>
              <h2 class="primary-card-title">
                ${
                  nextMission
                    ? escapeHtml(nextMission.text)
                    : totalCount === 0
                      ? t("noRouteLoaded")
                      : t("routeCompleted")
                }
              </h2>
            </div>
            <div class="count-badge">${pendingCount}</div>
          </div>

          <p class="copy">${missionPrompt}</p>

          <div class="primary-stat-row">
            <div class="primary-stat-pill">
              <div class="window-label">${t("flowWindow")}</div>
              <div class="window-value">${flowWindow}</div>
            </div>
            <div class="primary-stat-pill">
              <div class="window-label">${t("released")}</div>
              <div class="window-value">${releasedCount}</div>
            </div>
          </div>

          <div class="row">
            <button class="button" data-action="game3-launch">
              ${nextMission ? t("launchNextMission") : t("buildTodayRoute")}
            </button>
            <button class="button-soft" data-action="game3-open-today-editor">${t("editToday")}</button>
            ${
              totalCount === 0
                ? `<button class="button-ghost" data-action="game3-load-demo">${t("loadDemoRoute")}</button>`
                : ""
            }
          </div>
        </section>

        ${renderReminderPanel(nextMission)}

        <section class="panel stack">
          <div class="row between">
            <h2 class="panel-title">${t("todayRoute")}</h2>
            <div class="muted">
              ${totalCount === 0 ? t("noMissionsYet") : `${totalCount} ${pluralMission(totalCount)}`}
            </div>
          </div>

          ${
            todayTrack.length === 0
              ? `
                <div class="empty-dock">
                  <div class="empty-radar-stack">
                    <div class="empty-radar-ring"></div>
                    <div class="empty-radar-ring-static"></div>
                    <div class="empty-radar-core"></div>
                  </div>
                  <h3 class="empty-dock-title">${t("missionDockEmpty")}</h3>
                  <p class="copy empty-dock-text">
                    ${t("missionDockEmptyCopy", { day: getDayLabel(todayDayId) })}
                  </p>
                  <div class="row" style="justify-content:center;">
                    <button class="button" data-action="game3-open-today-editor">${t("buildTodayRoute")}</button>
                    <button class="button-soft" data-action="game3-load-demo">${t("loadDemo")}</button>
                  </div>
                </div>
              `
              : `
                <div class="today-route-list">
                  ${todayTrack
                    .map((item, index, list) =>
                      renderGame3RouteRow(item, index, list.length),
                    )
                    .join("")}
                </div>
              `
          }
        </section>

        <section class="panel stack">
          <div class="row between">
            <h2 class="panel-title">${t("weeklyMap")}</h2>
            <div class="muted">${t("recurringSchedule")}</div>
          </div>

          <div class="week-grid">
            ${GAME3_DAY_ORDER.map((day) => renderGame3WeekTile(day, todayDayId)).join("")}
          </div>

          <div class="preview-panel">
            <div class="row between">
              <h3 class="panel-title-sm">${getDayLabel(state.game3.selectedDay)}</h3>
              <div class="muted">
                ${selectedDayTasks.length} ${pluralMission(selectedDayTasks.length)}
              </div>
            </div>

            ${
              selectedDayPreview.length
                ? `
                <div class="preview-list">
                  ${selectedDayPreview
                    .map(
                      (title) => `
                        <div class="preview-list-item">${escapeHtml(title)}</div>
                      `,
                    )
                    .join("")}
                  ${
                    selectedDayTasks.length > selectedDayPreview.length
                      ? `<div class="preview-list-more">+${selectedDayTasks.length - selectedDayPreview.length} ${t("moreMissions")}</div>`
                      : ""
                  }
                </div>
              `
                : `<div class="copy">${t("noMissionsPlanned")}</div>`
            }

            <button class="button-soft" data-action="game3-open-editor">${t("editThisDay")}</button>
          </div>
        </section>

        <div class="board-footer">
          <button class="button-ghost" data-action="go-menu">${t("backToMenu")}</button>
        </div>
      </section>

      ${renderGame3EditorModal()}
    </main>
  `;
}

function renderGame3Segment(stateLabel) {
  const classes = ["game3-segment"];
  if (stateLabel === "done") classes.push("done");
  if (stateLabel === "active") classes.push("active");
  if (stateLabel === "released") classes.push("released");
  return `<div class="${classes.join(" ")}"></div>`;
}

function renderReminderPanel(nextMission) {
  const status = state.app.reminderEnabled
    ? t("reminderScheduled", { time: state.app.reminderTime })
    : t("reminderOff");

  return `
    <section class="panel reminder-panel">
      <div>
        <div class="eyebrow">${t("reminders")}</div>
        <h2 class="panel-title-sm">${status}</h2>
        <p class="copy">${t("reminderCopy")}</p>
        ${state.app.notice ? `<p class="notice-text">${escapeHtml(state.app.notice)}</p>` : ""}
      </div>
      <div class="reminder-controls">
        <label class="time-field">
          <span>${t("reminderTime")}</span>
          <input class="input" type="time" data-role="reminder-time" value="${escapeAttribute(state.app.reminderTime)}" />
        </label>
        <button class="button" data-action="${state.app.reminderEnabled ? "disable-reminder" : "enable-reminder"}">
          ${state.app.reminderEnabled ? t("disableReminder") : t("enableReminder")}
        </button>
        <button class="button-soft" data-action="test-reminder" ${nextMission ? "" : "disabled"}>
          ${t("testReminder")}
        </button>
      </div>
    </section>
  `;
}

function renderGame3Gem(active) {
  return `
    <div class="gem-slot ${active ? "active" : ""}">
      <div class="gem-diamond ${active ? "active" : ""}"></div>
    </div>
  `;
}

function renderGame3CampaignNode(item, index, totalLength) {
  const classes = ["campaign-node"];
  if (item.state === "done") classes.push("done");
  if (item.state === "active") classes.push("active");
  if (item.state === "released") classes.push("released");

  return `
    <div class="campaign-node-wrap ${index % 2 === 1 ? "offset" : ""}">
      ${index > 0 ? `<div class="campaign-connector ${item.state === "done" ? "done" : ""}"></div>` : ""}
      <div class="${classes.join(" ")}">
        ${item.state === "done" ? `<div class="campaign-node-gem"></div>` : `<span>${index + 1}</span>`}
        ${item.state === "active" ? `<div class="campaign-node-pulse"></div>` : ""}
      </div>
      <div class="campaign-node-state">${getGame3TaskStatusLabel(item.state)}</div>
      <div class="campaign-node-title">${escapeHtml(item.task.text)}</div>
    </div>
  `;
}

function renderGame3RouteRow(item, index, totalLength) {
  const markerClasses = ["route-marker"];
  const cardClasses = ["route-card"];

  if (item.state === "done") {
    markerClasses.push("done");
    cardClasses.push("done");
  }

  if (item.state === "active") {
    markerClasses.push("active");
    cardClasses.push("active");
  }

  if (item.state === "released") {
    markerClasses.push("released");
    cardClasses.push("released");
  }

  return `
    <div class="route-row">
      <div class="route-rail">
        ${index < totalLength - 1 ? `<div class="route-rail-line ${item.state === "done" ? "done" : ""}"></div>` : ""}
        <div class="${markerClasses.join(" ")}">
          ${item.state === "done" ? `<div class="route-gem"></div>` : `<span>${index + 1}</span>`}
          ${item.state === "active" ? `<div class="route-pulse"></div>` : ""}
        </div>
      </div>
      <div class="${cardClasses.join(" ")}">
        <div class="route-title">${escapeHtml(item.task.text)}</div>
        <div class="route-state-text">${getGame3TaskStatusLabel(item.state)}</div>
      </div>
    </div>
  `;
}

function renderGame3WeekTile(day, todayDayId) {
  const classes = ["week-tile"];
  if (day.id === state.game3.selectedDay) classes.push("active");
  if (day.id === todayDayId) classes.push("today");

  return `
    <button class="${classes.join(" ")}" data-action="game3-select-day" data-day="${day.id}">
      <div class="week-tile-day">${day.label[state.language]}</div>
      <div class="week-tile-count">${state.game3.schedule[day.id].length}</div>
    </button>
  `;
}

function renderGame3EditorModal() {
  if (state.game3.stage !== "editor") {
    return "";
  }

  const editorTasks = state.game3.schedule[state.game3.editorDay];

  return `
    <div class="modal-backdrop" data-action="modal-backdrop">
      <section class="modal">
        <div class="stack">
          <div class="row between">
            <div>
              <div class="eyebrow">${t("editWeeklyPlan")}</div>
              <h2 class="panel-title">${getDayLabel(state.game3.editorDay)}</h2>
            </div>
            <button class="button-ghost" data-action="game3-close-editor">${t("done")}</button>
          </div>

          <div class="day-strip">
            ${GAME3_DAY_ORDER.map((day) => {
              const classes = ["day-chip"];
              if (day.id === state.game3.editorDay) {
                classes.push("active");
              }

              return `
                <button class="${classes.join(" ")}" data-action="game3-editor-day" data-day="${day.id}">
                  ${day.fullLabel[state.language]}
                  <span class="count">${state.game3.schedule[day.id].length}</span>
                </button>
              `;
            }).join("")}
          </div>

          <p class="copy">
            ${t("missionEditorHelp")}
            <strong>"${escapeHtml(getGame3DefaultSchedule()[state.game3.editorDay][0] || "Mission 1")}","${escapeHtml(getGame3DefaultSchedule()[state.game3.editorDay][1] || "Mission 2")}"</strong>
          </p>

          <textarea
            class="textarea"
            data-role="game3-editor-draft"
            placeholder='${t("missionPlaceholder")}'
          >${escapeHtml(state.game3.editorDraft)}</textarea>

          <div class="row">
            <button class="button" data-action="game3-add-missions">${t("addMissions")}</button>
            <button class="button-soft" data-action="game3-export-day">${t("exportDay")}</button>
            <button class="button-soft" data-action="game3-reset-day">${t("resetDay")}</button>
            <button class="button-ghost button-danger" data-action="game3-clear-day">${t("clearDay")}</button>
          </div>

          <div class="task-list">
            ${
              editorTasks.length
                ? editorTasks
                    .map(
                      (task, index) => `
                      <article class="task-item">
                        <div class="index-badge">${index + 1}</div>
                        <div class="task-copy">${escapeHtml(task)}</div>
                        <button
                          class="small-button button-danger"
                          data-action="game3-remove-mission"
                          data-index="${index}"
                        >
                          ${t("remove")}
                        </button>
                      </article>
                    `,
                    )
                    .join("")
                : `<div class="empty-state">${t("noMissionsForDay")}</div>`
            }
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderExportDialog() {
  if (!state.exportDialog) {
    return "";
  }

  return `
    <div class="modal-backdrop" data-action="close-export-dialog">
      <section class="modal export-modal">
        <div class="stack">
          <div class="row between">
            <div>
              <div class="eyebrow">${t("export")}</div>
              <h2 class="panel-title">${escapeHtml(state.exportDialog.title)}</h2>
            </div>
            <button class="button-ghost" data-action="close-export-dialog">${t("done")}</button>
          </div>

          <p class="copy">
            ${t("exportReady")}
            <strong>"phrase1","phrase2","phrase3"</strong>
          </p>

          <textarea class="textarea export-textarea" data-role="export-text" readonly>${escapeHtml(
            state.exportDialog.text,
          )}</textarea>

          <div class="row">
            <button class="button" data-action="copy-export-text">${t("copyText")}</button>
            <button class="button-ghost" data-action="close-export-dialog">${t("close")}</button>
          </div>
        </div>
      </section>
    </div>
  `;
}

function hydrateScreen() {
  scheduleMissionReminder();

  if (state.screen === "game1") {
    hydrateGame1();
  }

  if (
    state.screen === "game3" &&
    state.game3.stage === "focus" &&
    state.game3.hasStartedMission
  ) {
    hydrateGame3HoldButton();
  } else {
    clearHoldTimer();
  }
}

function hydrateGame1() {
  const video = document.getElementById("game1-video");

  if (!video) {
    return;
  }

  video.playbackRate = state.app.reducedMotion ? 0.65 : 1;

  video.onended = () => {
    video.pause();
    state.game1.ended = true;
    render();
  };

  if (!state.game1.autoplayFailed && !state.game1.ended) {
    const playPromise = video.play();

    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        state.game1.autoplayFailed = true;
        render();
      });
    }
  }
}

function hydrateGame3HoldButton() {
  const holdButton = document.getElementById("hold-button");

  if (!holdButton) {
    return;
  }

  const startHold = (event) => {
    event.preventDefault();
    if (holdIntervalId) {
      return;
    }

    const missionId = holdButton.dataset.missionId;
    if (!missionId) {
      return;
    }

    const startedAt = Date.now();
    holdIntervalId = window.setInterval(() => {
      const progress = Math.min(1, (Date.now() - startedAt) / HOLD_DURATION_MS);
      state.game3.holdProgress = progress;
      updateHoldVisual(progress);

      if (progress >= 1) {
        clearHoldTimer();
        completeFocusedMission(missionId);
      }
    }, 24);
  };

  const stopHold = () => {
    if (!holdIntervalId) {
      return;
    }

    clearHoldTimer();
    state.game3.holdProgress = 0;
    updateHoldVisual(0);
  };

  holdButton.addEventListener("selectstart", (event) => {
    event.preventDefault();
  });
  holdButton.addEventListener("dragstart", (event) => {
    event.preventDefault();
  });
  holdButton.addEventListener("pointerdown", startHold);
  holdButton.addEventListener("pointerup", stopHold);
  holdButton.addEventListener("pointerleave", stopHold);
  holdButton.addEventListener("pointercancel", stopHold);
}

function updateHoldVisual(progress) {
  const holdButton = document.getElementById("hold-button");
  const holdCore = holdButton?.closest(".hold-core");
  const fill = document.querySelector(".progress-fill");

  if (holdCore) {
    holdCore.style.setProperty("--hold-progress", String(progress));
  }

  if (fill) {
    fill.style.width = `${Math.round(progress * 100)}%`;
  }
}

function clearHoldTimer() {
  if (holdIntervalId) {
    window.clearInterval(holdIntervalId);
    holdIntervalId = null;
  }
}

async function enableMissionReminder() {
  state.app.notice = "";

  if (!("Notification" in window)) {
    state.app.notice = t("notificationUnsupported");
    trackEvent("reminder_enable_failed", { reason: "unsupported" });
    render();
    return;
  }

  const permission =
    Notification.permission === "default"
      ? await Notification.requestPermission()
      : Notification.permission;

  if (permission !== "granted") {
    state.app.reminderEnabled = false;
    state.app.notice = t("notificationBlocked");
    saveAppSettings();
    trackEvent("reminder_enable_failed", { reason: permission });
    render();
    return;
  }

  state.app.reminderEnabled = true;
  state.app.notice = t("notificationReady");
  saveAppSettings();
  scheduleMissionReminder();
  trackEvent("reminder_enabled", { reminder_time: state.app.reminderTime });
  render();
}

function scheduleMissionReminder() {
  if (reminderTimeoutId) {
    window.clearTimeout(reminderTimeoutId);
    reminderTimeoutId = null;
  }

  if (!state.app.reminderEnabled) {
    return;
  }

  const delay = getReminderDelayMs(state.app.reminderTime);
  reminderTimeoutId = window.setTimeout(() => {
    void sendMissionReminder(false);
    scheduleMissionReminder();
  }, Math.min(delay, MAX_TIMEOUT_MS));
}

function getReminderDelayMs(timeValue) {
  const [hour = 9, minute = 0] = String(timeValue || REMINDER_DEFAULT_TIME)
    .split(":")
    .map((part) => Number(part));
  const now = new Date();
  const next = new Date(now);
  next.setHours(Number.isFinite(hour) ? hour : 9, Number.isFinite(minute) ? minute : 0, 0, 0);

  if (next <= now) {
    next.setDate(next.getDate() + 1);
  }

  return next.getTime() - now.getTime();
}

async function sendMissionReminder(isTest) {
  const snapshot = getCurrentDaySnapshot();
  const mission = getNextMission(snapshot.tasks);
  if (!mission || !("Notification" in window) || Notification.permission !== "granted") {
    return;
  }

  trackEvent(isTest ? "reminder_test_sent" : "reminder_sent", {
    pending_count: snapshot.tasks.filter((task) => task.status !== "done").length,
  });

  const title = t("reminderTitle");
  const body = t("reminderBody", { mission: mission.text });
  const options = {
    body,
    icon: "./assets/icons/adippsi-192.png",
    badge: "./assets/icons/adippsi-192.png",
    tag: isTest ? "adippsi-test-reminder" : "adippsi-mission-reminder",
  };

  try {
    const registration = await navigator.serviceWorker?.ready;
    if (registration?.showNotification) {
      await registration.showNotification(title, options);
      return;
    }
  } catch (error) {
    console.warn("[PWA] Service worker notification failed", error);
  }

  new Notification(title, options);
}

function handleClick(event) {
  const target = event.target.closest("[data-action]");

  if (!target) {
    return;
  }

  const action = target.dataset.action;

  if (
    (action === "modal-backdrop" || action === "close-export-dialog") &&
    event.target !== target
  ) {
    return;
  }

  switch (action) {
    case "set-language":
      setLanguage(target.dataset.language);
      break;
    case "select-mood":
      if (["moodFrom", "moodTo"].includes(target.dataset.role)) {
        state.app[target.dataset.role] = target.dataset.mood;
        trackEvent("mood_bridge_changed", {
          mood_from: state.app.moodFrom,
          mood_to: state.app.moodTo,
          recommended_game: getMoodRecommendation().title,
        });
        render();
      }
      break;
    case "dismiss-onboarding":
      state.app.onboardingDismissed = true;
      saveAppSettings();
      trackEvent("onboarding_dismissed");
      render();
      break;
    case "onboarding-build-route":
      state.app.onboardingDismissed = true;
      saveAppSettings();
      trackEvent("onboarding_route_started");
      openGame3("onboarding");
      state.game3.stage = "editor";
      state.game3.editorDay = getTodayDayId();
      state.game3.selectedDay = getTodayDayId();
      state.game3.editorDraft = "";
      render();
      break;
    case "toggle-reduced-motion":
      state.app.reducedMotion = !state.app.reducedMotion;
      saveAppSettings();
      trackEvent("visual_comfort_changed", {
        reduced_motion: state.app.reducedMotion,
      });
      render();
      break;
    case "enable-reminder":
      void enableMissionReminder();
      break;
    case "disable-reminder":
      state.app.reminderEnabled = false;
      state.app.notice = "";
      saveAppSettings();
      scheduleMissionReminder();
      trackEvent("reminder_disabled");
      render();
      break;
    case "test-reminder":
      void sendMissionReminder(true);
      break;

    case "go-menu":
      resetGame2Playback();
      clearRewardTimeout();
      state.exportDialog = null;
      state.screen = "menu";
      state.game3.stage = "board";
      state.game3.focusMissionId = null;
      state.game3.hasStartedMission = false;
      render();
      break;

    case "open-game1":
      startGame1(false, target.dataset.source);
      break;
    case "open-game2":
      openGame2(target.dataset.source);
      break;
    case "open-game3":
      openGame3(target.dataset.source);
      break;
    case "game1-next-video":
      startGame1(true);
      break;
    case "game1-play":
      playCurrentGame1Video();
      break;

    case "game2-open-editor":
      state.game2.editorTarget = target.dataset.target;
      state.game2.editorDraft = "";
      render();
      break;
    case "game2-close-editor":
      state.game2.editorTarget = null;
      state.game2.editorDraft = "";
      render();
      break;
    case "game2-add-phrases":
      addGame2DraftToList();
      break;
    case "game2-export-list":
      openExportDialog(
        state.game2.editorTarget === "instructions"
          ? `${t("instructionsList")} ${t("export").toLowerCase()}`
          : `${t("objectivesList")} ${t("export").toLowerCase()}`,
        state.game2.editorTarget === "instructions"
          ? state.game2.instructions
          : state.game2.objectives,
      );
      break;
    case "game2-reset-list":
      resetGame2List();
      break;
    case "game2-clear-list":
      clearGame2List();
      break;
    case "game2-remove-phrase":
      removeGame2Phrase(target.dataset.phrase);
      break;
    case "game2-start":
      startGame2Round();
      break;
    case "game2-toggle-phrase":
      toggleGame2Phrase(target.dataset.phrase);
      break;
    case "game2-verify":
      trackGame2ReviewVerification();
      state.game2.verified = true;
      render();
      break;
    case "game2-finish":
      openGame3("word_stream_finish");
      break;
    case "game2-reset-config":
      resetGame2Playback();
      render();
      break;

    case "game3-select-day":
      state.game3.selectedDay = target.dataset.day;
      render();
      break;
    case "game3-open-editor":
      state.game3.stage = "editor";
      state.game3.editorDay = state.game3.selectedDay;
      state.game3.editorDraft = "";
      render();
      break;
    case "game3-open-today-editor":
      state.game3.stage = "editor";
      state.game3.editorDay = getTodayDayId();
      state.game3.selectedDay = getTodayDayId();
      state.game3.editorDraft = "";
      render();
      break;
    case "game3-close-editor":
      state.game3.stage = "board";
      state.game3.editorDraft = "";
      render();
      break;
    case "game3-editor-day":
      state.game3.editorDay = target.dataset.day;
      state.game3.editorDraft = "";
      render();
      break;
    case "game3-add-missions":
      addGame3Missions();
      break;
    case "game3-export-day":
      openExportDialog(
        `${getDayLabel(state.game3.editorDay)} ${t("mission")} ${t("export").toLowerCase()}`,
        state.game3.schedule[state.game3.editorDay],
      );
      break;
    case "game3-reset-day":
      resetGame3Day();
      break;
    case "game3-clear-day":
      clearGame3Day();
      break;
    case "game3-remove-mission":
      removeGame3Mission(Number(target.dataset.index));
      break;
    case "game3-launch":
      launchGame3Mission();
      break;
    case "game3-begin-mission":
      state.game3.hasStartedMission = true;
      state.game3.holdProgress = 0;
      render();
      break;
    case "game3-back-board":
      clearHoldTimer();
      state.game3.holdProgress = 0;
      state.game3.stage = "board";
      state.game3.focusMissionId = null;
      state.game3.hasStartedMission = false;
      render();
      break;
    case "game3-later":
      moveFocusedMissionToLater();
      break;
    case "game3-release":
      releaseFocusedMission();
      break;
    case "game3-load-demo":
      loadGame3DemoForToday();
      break;
    case "modal-backdrop":
      if (state.screen === "game2") {
        state.game2.editorTarget = null;
        state.game2.editorDraft = "";
      }
      if (state.screen === "game3" && state.game3.stage === "editor") {
        state.game3.stage = "board";
        state.game3.editorDraft = "";
      }
      render();
      break;
    case "close-export-dialog":
      state.exportDialog = null;
      render();
      break;
    case "copy-export-text":
      void copyExportText();
      break;
    default:
      break;
  }
}

function handleInput(event) {
  const target = event.target;
  const role = target.dataset.role;

  if (role === "game2-editor-draft") {
    state.game2.editorDraft = target.value;
  }

  if (role === "game3-editor-draft") {
    state.game3.editorDraft = target.value;
  }

  if (role === "reminder-time") {
    state.app.reminderTime = target.value || REMINDER_DEFAULT_TIME;
    state.app.notice = "";
    saveAppSettings();
    scheduleMissionReminder();
    trackEvent("reminder_time_changed", {
      reminder_time: state.app.reminderTime,
      reminder_enabled: state.app.reminderEnabled,
    });
  }
}

function startGame1(forceNext = false, source = "direct") {
  resetGame2Playback();
  clearRewardTimeout();
  state.screen = "game1";
  state.game1.ended = false;
  state.game1.autoplayFailed = false;
  state.game1.videoIndex = getNextVideoIndex();
  trackEvent(forceNext ? "video_flow_changed" : "game_opened", {
    game_id: "video_flow",
    source: getAnalyticsSource(source),
    reduced_motion: state.app.reducedMotion,
  });

  render();
}

function getNextVideoIndex() {
  if (VIDEO_COUNT === 1) {
    state.game1.lastVideoIndex = 0;
    return 0;
  }

  let next = Math.floor(Math.random() * VIDEO_COUNT);
  while (next === state.game1.lastVideoIndex) {
    next = Math.floor(Math.random() * VIDEO_COUNT);
  }

  state.game1.lastVideoIndex = next;
  return next;
}

function playCurrentGame1Video() {
  const video = document.getElementById("game1-video");
  if (!video) {
    return;
  }

  state.game1.ended = false;
  if (video.ended) {
    video.currentTime = 0;
  }
  const playPromise = video.play();

  if (playPromise && typeof playPromise.then === "function") {
    playPromise
      .then(() => {
        state.game1.autoplayFailed = false;
        const overlay = document.querySelector(".video-center");
        if (overlay) {
          overlay.remove();
        }
      })
      .catch(() => {
        state.game1.autoplayFailed = true;
        render();
      });
  }
}

function openGame2(source = "direct") {
  state.screen = "game2";
  state.game2.stage = "config";
  state.game2.editorTarget = null;
  state.game2.editorDraft = "";
  state.game2.selectedPhrases = [];
  state.game2.verified = false;
  trackEvent("game_opened", {
    game_id: "word_stream_recall",
    source: getAnalyticsSource(source),
  });
  render();
}

function canStartGame2() {
  return (
    state.game2.instructions.length >= GAME2_MIN_INSTRUCTION_COUNT &&
    state.game2.objectives.length >= GAME2_MIN_OBJECTIVE_COUNT
  );
}

function startGame2Round() {
  if (!canStartGame2()) {
    return;
  }

  const round = buildGame2Round(
    state.game2.instructions,
    state.game2.objectives,
    state.game2.lastMode,
  );
  state.game2.round = round;
  state.game2.lastMode = round.mode;
  state.game2.stage = "playback";
  state.game2.playbackCaption = t("focus");
  state.game2.visibleWord = "";
  state.game2.selectedPhrases = [];
  state.game2.verified = false;
  state.game2.playbackRunId += 1;
  trackEvent("word_stream_started", {
    mode: round.mode,
    instructions_count: state.game2.instructions.length,
    objectives_count: state.game2.objectives.length,
    display_count: round.displaySequence.length,
  });
  render();
  runGame2Playback(state.game2.playbackRunId);
}

async function runGame2Playback(runId) {
  const round = state.game2.round;
  if (!round) {
    return;
  }

  for (
    let phraseIndex = 0;
    phraseIndex < round.displaySequence.length;
    phraseIndex += 1
  ) {
    if (state.game2.playbackRunId !== runId) {
      return;
    }

    const phrase = round.displaySequence[phraseIndex];
    const words = phrase.split(/\s+/).filter(Boolean);
    const ratio =
      round.displaySequence.length <= 1
        ? 1
        : phraseIndex / (round.displaySequence.length - 1);
    const wpm = Math.round(
      GAME2_START_WPM + (GAME2_MAX_WPM - GAME2_START_WPM) * ratio,
    );
    const wordDelay = 60000 / wpm;
    const visibleMs = Math.max(60, wordDelay * GAME2_WORD_VISIBLE_RATIO);
    const blankMs = Math.max(35, wordDelay - visibleMs);

    state.game2.playbackCaption = `${wpm} WPM`;
    render();

    for (const word of words) {
      if (state.game2.playbackRunId !== runId) {
        return;
      }

      state.game2.visibleWord = word;
      render();
      await sleep(visibleMs);

      if (state.game2.playbackRunId !== runId) {
        return;
      }

      state.game2.visibleWord = "";
      render();
      if (blankMs > 0) {
        await sleep(blankMs);
      }
    }

    await sleep(GAME2_END_PHRASE_HOLD_MS);
    state.game2.visibleWord = "";
    render();
    await sleep(GAME2_INTER_PHRASE_PAUSE_MS);
  }

  if (state.game2.playbackRunId !== runId) {
    return;
  }

  state.game2.stage = "review";
  state.game2.playbackCaption = t("review");
  state.game2.visibleWord = "";
  render();
}

function resetGame2Playback() {
  state.game2.playbackRunId += 1;
  state.game2.stage = "config";
  state.game2.round = null;
  state.game2.selectedPhrases = [];
  state.game2.verified = false;
  state.game2.visibleWord = "";
  state.game2.playbackCaption = t("ready");
}

function getGame2ListPreview(list) {
  if (!list.length) {
    return t("noPhraseYet");
  }

  const preview = list.slice(0, 3).join(" - ");
  const remaining = list.length - 3;
  return remaining > 0 ? `${preview} - +${remaining} ${t("more")}` : preview;
}

function addGame2DraftToList() {
  if (!state.game2.editorTarget) {
    return;
  }

  state.game2.editorDraft = getDraftValue(
    "game2-editor-draft",
    state.game2.editorDraft,
  );
  const parsed = parsePhraseInput(state.game2.editorDraft);
  if (!parsed.length) {
    return;
  }

  if (state.game2.editorTarget === "instructions") {
    state.game2.instructions = mergeUniquePhrases(
      state.game2.instructions,
      parsed,
    );
  } else {
    state.game2.objectives = mergeUniquePhrases(state.game2.objectives, parsed);
  }

  trackEvent("word_stream_list_updated", {
    list_type: state.game2.editorTarget,
    added_count: parsed.length,
    total_count:
      state.game2.editorTarget === "instructions"
        ? state.game2.instructions.length
        : state.game2.objectives.length,
  });
  state.game2.editorDraft = "";
  saveGame2State();
  render();
}

function resetGame2List() {
  if (!state.game2.editorTarget) {
    return;
  }

  if (!confirmAction(t("resetListConfirm"))) {
    return;
  }

  if (state.game2.editorTarget === "instructions") {
    state.game2.instructions = [...getGame2Defaults().instructions];
  } else {
    state.game2.objectives = [...getGame2Defaults().objectives];
  }

  saveGame2State();
  render();
}

function clearGame2List() {
  if (!state.game2.editorTarget) {
    return;
  }

  if (!confirmAction(t("clearListConfirm"))) {
    return;
  }

  if (state.game2.editorTarget === "instructions") {
    state.game2.instructions = [];
  } else {
    state.game2.objectives = [];
  }

  saveGame2State();
  render();
}

function removeGame2Phrase(phrase) {
  if (!state.game2.editorTarget || !phrase) {
    return;
  }

  if (!confirmAction(`${t("removePhraseConfirm")}\n\n${phrase}`)) {
    return;
  }

  if (state.game2.editorTarget === "instructions") {
    state.game2.instructions = state.game2.instructions.filter(
      (item) => item !== phrase,
    );
  } else {
    state.game2.objectives = state.game2.objectives.filter(
      (item) => item !== phrase,
    );
  }

  saveGame2State();
  render();
}

function toggleGame2Phrase(phrase) {
  if (!state.game2.round || state.game2.verified || !phrase) {
    return;
  }

  const selected = state.game2.selectedPhrases;
  if (selected.includes(phrase)) {
    state.game2.selectedPhrases = selected.filter((item) => item !== phrase);
  } else if (selected.length < state.game2.round.requiredSelections) {
    state.game2.selectedPhrases = [...selected, phrase];
  }

  render();
}

function trackGame2ReviewVerification() {
  if (!state.game2.round) {
    return;
  }

  const correctCount = state.game2.selectedPhrases.filter((phrase) =>
    state.game2.round.correctAnswers.includes(phrase),
  ).length;

  trackEvent("word_stream_review_verified", {
    mode: state.game2.round.mode,
    required_count: state.game2.round.requiredSelections,
    selected_count: state.game2.selectedPhrases.length,
    correct_count: correctCount,
    success:
      correctCount === state.game2.round.requiredSelections &&
      state.game2.selectedPhrases.length === state.game2.round.requiredSelections,
  });
}

function getGame2PhraseStatus(phrase) {
  const selected = state.game2.selectedPhrases.includes(phrase);
  const correct = state.game2.round?.correctAnswers.includes(phrase);

  if (!state.game2.verified) {
    return selected ? "selected" : "idle";
  }

  if (correct) {
    return "correct";
  }

  if (selected) {
    return "wrong";
  }

  return "idle";
}

function buildGame2Round(instructions, objectives, previousMode = null) {
  const availableModes = [];

  if (instructions.length >= GAME2_MIN_INSTRUCTION_COUNT) {
    availableModes.push("missing_instructions");
  }

  if (objectives.length >= GAME2_MIN_OBJECTIVE_COUNT) {
    availableModes.push("seen_objective");
  }

  const eligibleModes =
    availableModes.length > 1 && previousMode
      ? availableModes.filter((mode) => mode !== previousMode)
      : availableModes;

  const mode =
    eligibleModes[Math.floor(Math.random() * eligibleModes.length)];

  if (mode === "missing_instructions") {
    const hiddenInstructions = sample(instructions, 2);
    const shownInstructions = instructions.filter(
      (phrase) => !hiddenInstructions.includes(phrase),
    );
    const displaySequence = shuffle([...shownInstructions, ...objectives]);
    const challengeOptions = shuffle([
      ...hiddenInstructions,
      ...sample(shownInstructions, 8),
    ]);

    return {
      mode,
      displaySequence,
      challengeOptions,
      correctAnswers: hiddenInstructions,
      requiredSelections: 2,
      reviewTitle: t("chooseMissingInstructions"),
      reviewHint: t("missingInstructionsHint"),
    };
  }

  const hiddenObjectives = sample(objectives, 4);
  const shownObjectives = objectives.filter(
    (phrase) => !hiddenObjectives.includes(phrase),
  );
  const visibleObjective = sample(shownObjectives, 1)[0];

  return {
    mode,
    displaySequence: shuffle([...instructions, ...shownObjectives]),
    challengeOptions: shuffle([...hiddenObjectives, visibleObjective]),
    correctAnswers: [visibleObjective],
    requiredSelections: 1,
    reviewTitle: t("chooseSeenObjective"),
    reviewHint: t("seenObjectiveHint"),
  };
}

function parsePhraseInput(input) {
  const trimmed = input.trim();

  if (!trimmed) {
    return [];
  }

  const quoted = [...trimmed.matchAll(/"([^"]+)"/g)]
    .map((match) => normalizePhrase(match[1] || ""))
    .filter(Boolean);

  if (quoted.length) {
    return dedupePhrases(quoted);
  }

  return dedupePhrases(
    trimmed
      .split(/\r?\n|;/)
      .map(normalizePhrase)
      .filter(Boolean),
  );
}

function normalizePhrase(value) {
  return value.replace(/\s+/g, " ").trim();
}

function dedupePhrases(list) {
  const seen = new Set();
  const next = [];

  list.forEach((item) => {
    const key = item.toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      next.push(item);
    }
  });

  return next;
}

function mergeUniquePhrases(currentList, incoming) {
  return dedupePhrases([...currentList, ...incoming]);
}

function shuffle(items) {
  const next = [...items];
  for (let index = next.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [next[index], next[swapIndex]] = [next[swapIndex], next[index]];
  }
  return next;
}

function sample(items, count) {
  return shuffle(items).slice(0, count);
}

function sleep(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function openGame3(source = "direct") {
  clearRewardTimeout();
  syncTodaySnapshot();
  state.screen = "game3";
  state.game3.stage = "board";
  state.game3.focusMissionId = null;
  state.game3.hasStartedMission = false;
  state.game3.holdProgress = 0;
  trackEvent("game_opened", {
    game_id: "mission_flow",
    source: getAnalyticsSource(source),
  });
  render();
}

function getTodayDateKey() {
  return formatDateKey(new Date());
}

function formatDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getTodayDayId() {
  const jsDay = new Date().getDay();
  const map = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  return map[jsDay];
}

function getDayLabel(dayId) {
  return GAME3_DAY_ORDER.find((day) => day.id === dayId)?.fullLabel[state.language] || "Day";
}

function getGame3TaskVisualState(task, nextTaskId) {
  if (task.status === "done") {
    return "done";
  }

  if (task.status === "released") {
    return "released";
  }

  if (task.id === nextTaskId) {
    return "active";
  }

  return "queued";
}

function formatGame3FlowWindow(now, pendingCount) {
  const startHour = 8;
  const endHour = 19;
  const totalAvailableMinutes = Math.max(
    15,
    (endHour - Math.max(startHour, now.getHours())) * 60 - now.getMinutes(),
  );
  const minutesPerMission = Math.max(
    12,
    Math.min(30, Math.round(totalAvailableMinutes / Math.max(1, pendingCount))),
  );
  const end = new Date(now.getTime() + minutesPerMission * 60 * 1000);
  const format = (value) =>
    `${`${value.getHours()}`.padStart(2, "0")}:${`${value.getMinutes()}`.padStart(2, "0")}`;

  return `${format(now)} - ${format(end)}`;
}

function getGame3RouteHeadline(totalCount, completedCount, pendingCount) {
  if (totalCount === 0) {
    return t("buildRouteHeadline");
  }

  if (pendingCount === 0) {
    return t("daySecuredHeadline");
  }

  if (completedCount === 0) {
    return t("firstMissionReady");
  }

  return t("keepFlowAlive");
}

function getGame3MissionPrompt(nextTask, totalCount, pendingCount) {
  if (!nextTask && totalCount === 0) {
    return t("noMissionRoutePrompt");
  }

  if (!nextTask && pendingCount === 0) {
    return t("routeClearPrompt");
  }

  if (!nextTask) {
    return t("noLiveMissionPrompt");
  }

  return t("oneMissionPrompt");
}

function getGame3TaskStatusLabel(stateLabel) {
  switch (stateLabel) {
    case "done":
      return t("securedStatus");
    case "active":
      return t("liveNowStatus");
    case "released":
      return t("releasedStatus");
    default:
      return t("queuedStatus");
  }
}

function getProgressStats() {
  const todaySnapshot = getCurrentDaySnapshot();
  const entries = Object.entries(state.game3.progressByDate).filter(
    ([, entry]) => Array.isArray(entry?.tasks) && entry.tasks.length > 0,
  );
  const totals = entries.reduce(
    (acc, [, entry]) => {
      const done = entry.tasks.filter((task) => task.status === "done").length;
      const released = entry.tasks.filter((task) => task.status === "released").length;
      acc.totalDone += done;
      acc.totalMissions += entry.tasks.length;
      acc.perfectDays += done > 0 && done + released === entry.tasks.length ? 1 : 0;
      return acc;
    },
    { totalDone: 0, totalMissions: 0, perfectDays: 0 },
  );
  const completedToday = todaySnapshot.tasks.filter((task) => task.status === "done").length;
  const streak = getActiveStreak();
  const completionRate = totals.totalMissions
    ? Math.round((totals.totalDone / totals.totalMissions) * 100)
    : 0;
  const xp = totals.totalDone * 25 + streak * 15 + totals.perfectDays * 30;
  const level = Math.floor(xp / 120) + 1;
  const xpIntoLevel = xp % 120;

  return {
    ...totals,
    completedToday,
    streak,
    completionRate,
    xp,
    level,
    levelProgress: Math.round((xpIntoLevel / 120) * 100),
    xpToNext: 120 - xpIntoLevel,
    weeklyMissions: GAME3_DAY_ORDER.reduce(
      (total, day) => total + (state.game3.schedule[day.id]?.length || 0),
      0,
    ),
  };
}

function getActiveStreak() {
  let streak = 0;
  let cursor = new Date();

  while (streak < 365) {
    const dateKey = formatDateKey(cursor);
    const entry = state.game3.progressByDate[dateKey];
    const hasDone = entry?.tasks?.some((task) => task.status === "done");

    if (!hasDone) {
      break;
    }

    streak += 1;
    cursor = new Date(cursor.getFullYear(), cursor.getMonth(), cursor.getDate() - 1);
  }

  return streak;
}

function getProgressBadges(stats) {
  const badges = [];
  if (stats.totalDone >= 1) badges.push(t("badgeStarter"));
  if (stats.totalDone >= 10) badges.push(t("badgeTen"));
  if (stats.streak >= 3) badges.push(t("badgeStreak"));
  if (stats.completionRate >= 80 && stats.totalMissions >= 5) badges.push(t("badgeClean"));
  if (stats.weeklyMissions >= 14) badges.push(t("badgeBuilder"));
  return badges;
}

function syncTodaySnapshot() {
  const dateKey = getTodayDateKey();
  const dayId = getTodayDayId();
  const schedule = state.game3.schedule[dayId] || [];
  const previous = state.game3.progressByDate[dateKey];
  const queues = new Map();

  if (previous?.dayId === dayId && Array.isArray(previous.tasks)) {
    previous.tasks.forEach((task) => {
      const bucket = queues.get(task.text) || [];
      bucket.push(task);
      queues.set(task.text, bucket);
    });
  }

  const tasks = schedule.map((text, index) => {
    const queue = queues.get(text) || [];
    const recycled = queue.shift();
    return recycled
      ? { ...recycled, text }
      : {
          id: `${dateKey}-${index}-${slugify(text)}`,
          text,
          status: "pending",
        };
  });

  state.game3.progressByDate[dateKey] = { dayId, tasks };
  saveGame3State();
  return state.game3.progressByDate[dateKey];
}

function getCurrentDaySnapshot() {
  return syncTodaySnapshot();
}

function getNextMission(tasks) {
  return (
    tasks.find((task) => task.status === "pending") ||
    tasks.find((task) => task.status === "later") ||
    null
  );
}

function launchGame3Mission() {
  const snapshot = getCurrentDaySnapshot();
  const mission = getNextMission(snapshot.tasks);
  if (!mission) {
    if (snapshot.tasks.length === 0) {
      state.game3.stage = "editor";
      state.game3.editorDay = getTodayDayId();
      state.game3.editorDraft = "";
      render();
    }
    return;
  }

  state.game3.focusMissionId = mission.id;
  state.game3.hasStartedMission = false;
  state.game3.holdProgress = 0;
  state.game3.stage = "focus";
  trackEvent("mission_started", {
    pending_count: snapshot.tasks.filter((task) => task.status !== "done").length,
    total_count: snapshot.tasks.length,
  });
  render();
}

function completeFocusedMission(missionId) {
  const snapshot = getCurrentDaySnapshot();
  const mission = snapshot.tasks.find((task) => task.id === missionId);
  if (!mission) {
    state.game3.stage = "board";
    state.game3.focusMissionId = null;
    render();
    return;
  }

  mission.status = "done";
  saveGame3State();
  trackEvent("mission_completed", {
    completed_today: snapshot.tasks.filter((task) => task.status === "done").length,
    total_today: snapshot.tasks.length,
    xp_awarded: 25,
    completion_method: "hold",
  });
  state.game3.focusMissionId = null;
  state.game3.hasStartedMission = false;
  state.game3.holdProgress = 0;
  state.game3.stage = "reward";
  state.game3.rewardMissionText = mission.text;
  render();

  clearRewardTimeout();
  state.game3.rewardTimeoutId = window.setTimeout(() => {
    state.game3.stage = "board";
    state.game3.rewardMissionText = "";
    state.game3.rewardTimeoutId = null;
    render();
  }, 1200);
}

function clearRewardTimeout() {
  if (state.game3.rewardTimeoutId) {
    window.clearTimeout(state.game3.rewardTimeoutId);
    state.game3.rewardTimeoutId = null;
  }
}

function moveFocusedMissionToLater() {
  const snapshot = getCurrentDaySnapshot();
  const mission = snapshot.tasks.find(
    (task) => task.id === state.game3.focusMissionId,
  );
  if (!mission) {
    return;
  }

  mission.status = "later";
  saveGame3State();
  trackEvent("mission_deferred", {
    pending_count: snapshot.tasks.filter((task) => task.status !== "done").length,
  });
  state.game3.focusMissionId = null;
  state.game3.hasStartedMission = false;
  state.game3.holdProgress = 0;
  state.game3.stage = "board";
  render();
}

function releaseFocusedMission() {
  const snapshot = getCurrentDaySnapshot();
  const mission = snapshot.tasks.find(
    (task) => task.id === state.game3.focusMissionId,
  );
  if (!mission) {
    return;
  }

  mission.status = "released";
  saveGame3State();
  trackEvent("mission_released", {
    released_today: snapshot.tasks.filter((task) => task.status === "released").length,
  });
  state.game3.focusMissionId = null;
  state.game3.hasStartedMission = false;
  state.game3.holdProgress = 0;
  state.game3.stage = "board";
  render();
}

function addGame3Missions() {
  state.game3.editorDraft = getDraftValue(
    "game3-editor-draft",
    state.game3.editorDraft,
  );
  const parsed = parsePhraseInput(state.game3.editorDraft);
  if (!parsed.length) {
    return;
  }

  const day = state.game3.editorDay;
  state.game3.schedule[day] = mergeUniquePhrases(
    state.game3.schedule[day],
    parsed,
  );
  trackEvent("weekly_plan_updated", {
    day_id: day,
    added_count: parsed.length,
    total_count: state.game3.schedule[day].length,
  });
  state.game3.editorDraft = "";

  if (day === getTodayDayId()) {
    syncTodaySnapshot();
  }

  saveGame3State();
  render();
}

function resetGame3Day() {
  const day = state.game3.editorDay;
  if (!confirmAction(t("resetDayConfirm", { day: getDayLabel(day) }))) {
    return;
  }

  state.game3.schedule[day] = [...getGame3DefaultSchedule()[day]];
  if (day === getTodayDayId()) {
    syncTodaySnapshot();
  }

  saveGame3State();
  render();
}

function clearGame3Day() {
  const day = state.game3.editorDay;
  if (!confirmAction(t("clearDayConfirm", { day: getDayLabel(day) }))) {
    return;
  }

  state.game3.schedule[day] = [];
  if (day === getTodayDayId()) {
    syncTodaySnapshot();
  }

  saveGame3State();
  render();
}

function removeGame3Mission(index) {
  const day = state.game3.editorDay;
  state.game3.schedule[day] = state.game3.schedule[day].filter(
    (_, itemIndex) => itemIndex !== index,
  );

  if (day === getTodayDayId()) {
    syncTodaySnapshot();
  }

  saveGame3State();
  render();
}

function loadGame3DemoForToday() {
  const todayId = getTodayDayId();
  state.game3.schedule[todayId] =
    state.language === "fr"
      ? ["Boire un verre d'eau", "Nettoyer une surface", "Lancer la prochaine action importante"]
      : ["Drink a glass of water", "Clean one surface", "Start the next important action"];
  syncTodaySnapshot();
  saveGame3State();
  trackEvent("demo_route_loaded", {
    day_id: todayId,
    total_count: state.game3.schedule[todayId].length,
  });
  render();
}

function slugify(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 36);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeAttribute(value) {
  return escapeHtml(value);
}
