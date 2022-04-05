let pronoun = ["the", "we", "He", "she", "i", "you", "it"]; // 7 elementos
let adj = ["great", "big", "short", "clean", "happy", "sad", "dry", "great", "fat", "hot"]; // 10 elementos
let noun = ["rabbit", "dog", "person", "cat", "bird", "hacker", "boy", "girl"]; // 8 elementos
let ext = [".com", ".cl", ".net", ".us", ".io", ".org"] // 6 elementos

let domain = new Array();
let counter = 0

for (let i = 0; i < pronoun.length; i++) {
    domain[0] = pronoun[i];
    for (let j = 0; j < adj.length; j++) {
        domain[1] = adj[j];
        for (let k = 0; k < noun.length; k++) {
            domain[2] = noun[k];
            for (let l = 0; l < ext.length; l++) {
                domain[3] = ext[l];
                console.log(domain[0] + domain[1] + domain[2] + domain[3]);
                counter = counter + 1
            }
        }
    }
}

console.log("Total de dominios generados: " + counter + " dominios");