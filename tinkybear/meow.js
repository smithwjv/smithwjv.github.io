var player = new Tone.Player("./tinkybear-meow-1.m4a").toMaster();

function meow() {
  player.start();
}
