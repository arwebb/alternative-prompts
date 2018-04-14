/* Color-changing background auto-enabled */
var backgroundEnabled = true;

/* Headline and footer fade in on page load */
$(document).ready(function(){
  $("#last-night").hide().fadeIn(800);
  $("footer").hide().fadeIn(800);
});

/* Grabs and prints random word and phrase combo */
function dreamGet(){
  $("#dream").fadeOut(350);
  /* Get random word and random phrase */
    wordNum = Math.floor(Math.random() * (words.length));
    firstDream = words[wordNum];
    phraseNum = Math.floor(Math.random() * (phrases.length));
    console.log(phraseNum);
    secondDream = phrases[phraseNum];
  /* Print dream */
    setTimeout(function(){$("#first-dream").text(firstDream + " and ")}, 351);
    setTimeout(function(){$("#second-dream").text(secondDream + ".")}, 351);
    setTimeout(function(){$("#dream").fadeIn(350)}, 352)
    randBackground();
}

/* Background color randomizer */
function randBackground(){
  if (backgroundEnabled) {
    randColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    /* Check for accessible background contrast */
    var colorTest = tinycolor(randColor);
    if (colorTest.isLight()){
      $("body").css("background-color", randColor);
    }
    else if (colorTest.isDark()){
      randBackground();
    }
  }
  else {
  $("body").css("background-color", "white");
  }
}

/* Enable/disable background color toggle */
function backgroundToggle(){
  if( $("#disable").text() === "Enable background color"){
    backgroundEnabled = true;
    randBackground();
    $("#disable").delay(450).text("Disable background color").fadeIn(800);
  }
  else if ( $("#disable").text() === "Disable background color"){
    backgroundEnabled = false;
    $("body").css("background-color", "white");
    $("#disable").delay(450).text("Enable background color").fadeIn(800);
  }
}

/* Footer links */
/* To show/hide name */
function who(){
  $("#disable").fadeOut(400);
  if ($("#name").is(":hidden")){
    $("#name").delay(400).fadeIn(800);
  }
  else if ($("#name").is(":visible")){
    $("#name").fadeOut(800);
  }
}
/* To show/hide options */
function options(){
  $("#name").fadeOut(400);
  if ($("#disable").is(":hidden")){
    $("#disable").delay(400).fadeIn(800);
  }
  else if ($("#disable").is(":visible")){
    $("#disable").fadeOut(800);
  }
}

/* Word banks */

var words = ["quiet forests", "deep still water", "narcolepsy", "extraterrestrial contact", "undersea caverns", "heatstroke", "my childhood home", "New York City",
"sharp corners", "childproof pill bottles", "tired rodeo clowns", "a starving fish", "hotel paintings", "a dripping eye", "a terrible weight", "veils", 
"bags under my eyes", "selfishness", "running away", "housefires", "loneliness", "inescapable delight", "gunshots", "nameless desire", "starvation", 
"bone-deep anger", "driving slowly", "the smell of gasoline", "burnt coffee", "peeping Toms", "Marilyn Manson", "sliced lemon", "immense popularity", 
"a pricked finger", "dried lavender", "Anna Wintour", "unexpected Morse code", "line dancing", "anxious smalltown officials", "strong jaws", "sleeper agents", 
"a virus", "public transit", "trusted maids", "hand signals", "novice archers", "very strong magnets", "stone castles", "a mistake in the order", "charcoal sketches", 
"bulletproof glass", "feeding birds by hand", "fierce heat", "an overstuffed backpack", "surprise parties", "candybar wrappers", "old newspapers", "trust", 
"deserted supermarkets", "bruised elbows", "a broken wrist", "the New York Times crossword", "split seams"];

var phrases = ["library books left shelves overnight", "two sequins stuck to wet skin", "being left alone", "mosquitos stuck in amber", 
"the faint smell of mold in the empty ballroom", "palm trees falling in a howling storm", "what happens on the second stories of tall buildings", 
"the inside of the attic at twilight", "learning two hundred languages", "walking on water, firm and gelatinous", "a riptide in the hotel pool", 
"a message on the radio", "a town small enough that you can walk it end to end", "renaming household objects", "something in the basement", "an extravagant party", 
"a familiar threat", "waking in a field, covered with dew", "a meditative trance", "the innacuracies of the Stanford Prison Experiment", "naming a dog", 
"carrying what you can", "stealing from magpies", "saying good morning to an empty room", "riding the bus past your stop", "paintings knocked crooked", 
"leaving the hospital against medical advice", "a watchful blackbird", "enormous waves", "a violent dislike of citrus fruits", "holding a swan for warmth", 
"ice water sweating through the glass", "a jacket that no longer fits", "a clear pool hidden among the rocks", "an arm moving the wrong way", 
"an acquaintance you had intentionally forgotten", "a ray gun that doesn't work", "neon signs in the darkness", "spending three hours in a diner", 
"choosing a new star sign", "a full basket of peaches", "a tornado above Disney World", "mistaking a stranger for a friend", "stormclouds stacking like layer cake", 
"voices dropping when you walk into a room", "furniture covered by sheets", "a pearl stuck between the floorboards", "starting a fight with a friend", 
"saltwater drying on skin", "hitting the sidewalk"];