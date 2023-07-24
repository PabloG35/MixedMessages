const consequences = {
    goodConsequences: [
        "energized", "accomplished", "refreshed", "knowledgeable", "creative", "harmonious",
        "expressive", "joyful", "nourished", "rested", "inspired", "productive", "colorful",
        "communicative", "attentive", "emotional", "adventurous", "satisfied", "focused",
        "innovative", "transformed", "connected", "educated", "curious", "grateful", "elevated"
      ],
    
      badConsequences: [
        "exhausted", "hurt", "drowning", "confused", "frustrated", "out of tune",
        "awkward", "injured", "unfulfilled", "restless", "blocked", "disconnected",
        "disappointed", "misunderstood", "stifled", "overwhelmed", "unbalanced",
        "trapped", "isolated", "uninspired", "stagnant", "disoriented", "unfocused",
        "stressed", "discouraged", "wasted"
      ]
}
const time = () => {
    let time = Math.floor(Math.random() * 3650) + 1;
    if (time < 365) {
        return `${time} days`
    } else if (time >= 730) {
        return `${Math.floor(time/365)} years`;
    } else if (time == 365) {
        return `${time} year`
    }
}
const verb = () => {
    let verbs = [
        "run", "jump", "swim", "read", "write", "sing", "dance", "play",
        "eat", "sleep", "study", "work", "draw", "paint", "talk", "listen",
        "laugh", "cry", "drive", "fly", "cook", "bake", "plant", "explore",
        "travel", "climb", "hike", "solve", "build", "create", "code", "design",
        "surf", "ski", "ride", "meditate", "compose", "act", "photograph", "sculpt",
        "teach", "learn", "pray", "volunteer", "exercise", "exercise", "shop", "imagine"
      ];
    return verbs[Math.floor(Math.random()*50)+1];
}
const destiny = () => {
    let num = Math.floor(Math.random()*2) + 1;
    if (num = 1) {
        return consequences.goodConsequences[Math.floor(Math.random()*25)+1];
    } else if (num = 2) {
        return consequences.badConsequences[Math.floor(Math.random()*25)+1]
    }
}

function yourFuture() {
  const nameInput = getElemenentById('nameInput').value;
  if (nameInput.trim() == '') {
    alert ("Please enter your name");
    return;
  }

  const resultDiv = document.getElementById('resultDiv');
  const future = `${nameInput}, learn your future, you have decided. In the ${time()} period, ${verb()} you will, and ${destiny()} that will be.`;
  resultDiv.textContent = future;
}

yourFuture();