//Samples
/*
samples({
  'BrightLead': [
    'BrightLead/file1.mp3',
    // ... all 25
    'BrightLead/file25.mp3',
  ],
}, 'https://cdn.jsdelivr.net/gh/publicsamples/Roland-JD-800/mp3/')

sound("BrightLead:11 BrightLead:12 BrightLead:13 BrightLead:14")
*/

//Chords
/*
var chords = cat(
  note("F#").scale("F#:minor"),
  note("F#").scale("F#:minor"),
  note("A"),
  note("E")
).sound("jd800:iceman")
*/

//Bar 20 - 24 
var intro_kick = sound("<[[bd - sd -] [bd - sd -]] [[bd - sd -] [bd - sd -]] [[bd - sd -] [bd - sd -]] [[bd - sd -] [- - sd -]]>").bank("RolandTR909")
var intro_snare = sound("[hh*8]").bank("RolandTR909")
var intro = stack(intro_kick, intro_snare)

//Bar 24 - 28
var build_kick = sound("<[[bd - sd -] [- - sd -]] [[bd - sd bd] [- - sd -]] [[bd - sd -] [- - sd -]] [[bd - sd -] [- bd sd -]]>")
var build_snare = sound("[hh*8]")
var build = stack(build_kick, build_snare).bank("RolandTR909")

//Bar 28 - 

var main_drum = sound("<[[bd -, hh*2] [sd - -, hh [hh*2]] [[- -] bd, [hh*2] hh] [sd -, hh*2]]>").bank("RolandTR909")
var main_drum_vari = sound("<[[bd*2, hh*2] [sd [-*2], hh [hh*2]] [[-*2] bd, [hh*2] hh] [sd [-*2], hh [hh*2]]]>").bank("RolandTR909")

arrange(
  [4, intro],
  [4, build],
  [3, main_drum],
  [1, main_drum_vari],
  [3, main_drum],
  [1, main_drum_vari],
  [3, main_drum],
  [1, main_drum_vari]
).cpm(180/4)
