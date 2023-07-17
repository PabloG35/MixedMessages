//const character = promt('The name of whom you desire to know the future of, give to me');
const consecuences = {
    goodConsecuences: [
        'succeed', 'celebrate', 'grow', 'achieve', 'learn', 'win', 'thrive', 'advance', 'flourish',
        'prosper', 'inspire', 'empower', 'create', 'satisfy', 'progress', 'fulfill', 'rejoice', 'blossom',
        'contribute', 'excel', 'surpass', 'triumph', 'enrich', 'uplift', 'transform'
      ],
    badConsecuences: [
        'fail', 'lose', 'crash', 'fall', 'break', 'miss', 'regret', 'disappoint', 'delay',
        'forget', 'hurt', 'waste', 'struggle', 'ruin', 'betray', 'suffer', 'stumble', 'reject',
        'panic', 'falter', 'stall', 'lament', 'fumble', 'procrastinate', 'flounder', 'misplace'
      ]
}
const time = () => {
    let time = Math.floor(Math.random() * 3650) + 1;
    if (time < 365) {
        return time
    } else if (time >= 365) {
        return Math.floor(time/365);
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
    
}


