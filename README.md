# DUSTLINE — Baja Desert Racing

A 3D desert racing game for the browser: Trophy Trucks and Pre-Runners on a 5.3 km Baja-style loop, with
third-person (close chase, far chase, hood, bumper) and first-person cockpit cameras.

## Run it

```bash
cd ~/desert-racer
npm install          # first time only
npm run dev          # http://localhost:5188
npm run build        # static build in dist/ (serve with any static server)
```

## Controls

| Key | Action |
|---|---|
| W / S (↑ / ↓) | Throttle / brake, hold S when stopped to reverse |
| A / D (← / →) | Steer |
| Space | Handbrake |
| C | Cycle camera: chase → far chase → **cinematic side** → hood → bumper → **cockpit (1st person)** |
| L | Light covers on / off (KC covers or Baja rock guards). They come off by themselves on the night map |
| X | Cinematic side / suspension cam (press again to flip to the other side of the truck) |
| Z | Suspension cutaway on/off (slices the body away on the camera side so links, shocks and spares show) |
| B (hold) | Look back |
| T | Traction control + stability assist on/off |
| R | Reset to the course (flip recovery) |
| Esc / P | Pause · M mute · F fullscreen · H hide HUD · V FPS/stat readout |

Gamepad: left stick steer, RT/LT throttle/brake, A handbrake, Y or RB camera, X reset, Start pause.

## What's in it

- **Vehicles** — procedural Trophy Truck (RWD, 26"/33" travel, ~1,100 hp race V8) and Pre-Runner (4WD). Clear-coat PBR paint, livery
  decals, tread-mapped tyres, animated A-arms / shocks / CV axles, roll cages, working steering wheel and live digital
  gauge cluster in the cockpit.
- **Bodies** — 28 pickups, each built from researched dimensions and photos: Toyota Tacoma (4 gens) and Tundra (3), Ford Ranger (6 incl. Ranger Raptor) and F-150 Raptor (3),
  Chevrolet Silverado (1999 "bubble eye", the **2003–2007 Classic cateye**, GMT900, K2XX, T1XX, 2022+) and GMC Sierra (6 gens). Each has its own silhouette (nose-to-cowl, roof, belt and hood heights,
  rounded or square plan corners, hood dome), a wrap-around front end drawn with real relief (grilles recessed, lenses bulging, bumpers that wrap the corners, projector bowls, C-clamp / L-shaped DRLs,
  fog pockets, tow hooks), a tailgate with embossed lettering and its own tail lamps, mirrors and door handles. Fronts live in `src/frontdefs.js`, rears in `src/reardefs.js`,
  measured proportions in `PROFILES` in `src/catalog.js`.
- **Cateye Silverado** is traced from a straight-on photo of a 2003–06 Silverado (pinhole-corrected): wedge headlamps under a drooping hood brow, the full-width chrome crossbar with the gold
  bowtie, the two-bulb amber park/turn lens, diamond-mesh grilles in the red shell, and the matte-black bumper cap with its two slots over the pewter blade (chrome edge) and the dark valance with
  square pockets. Picking the **Dirt King bumper** removes the factory bumper area of every truck (the nose panel stops under the grille, a radiator support shows behind it) and the Dirt King bar
  and skid hang right under the grille, exactly as on the trophy trucks, whose noses now have proper rounded corners and wear the same photo-traced fronts at full size (the artwork slides to the trophy's hood height instead of being squeezed; pick the stock bumper on a trophy and it gets the factory cap, blade and valance too).
- **Branded hardware** (all drawn in code from product photos / references, so they are close approximations, not scans) —
  light brand option for every slot: **KC HiLiTES** (6" Daylighter pods with the yellow KC cover, classic round-pod bars) or
  **Baja Designs** (Squadron Pro pods, OnX6+ Arc bars with a row of round optics, amber Squadron chase lights);
  **KMC XD** wheels; **King** shocks (clear-anodised silver bodies, teal anodised caps and rod ends, blue braided hose, the
  blue "KING OFF-ROAD RACING SHOCKS" badge on bodies and reservoirs, red adjuster tag + 3/4-tube bypass with light-blue
  adjusters on the bypass models) and **Fox** shocks (glossy black body with a bolt-dimpled collar, a swept head carrying a black piggyback reservoir with the vertical orange FOX lettering, fox-tail mark, valving band and FACTORY, orange accents, as on the Fox Factory internal-bypass shock; the external-bypass Fox shows the same black body, graphite bypass tubes on orange zone blocks and adjusters, and the FOX piggyback).
  **Fender and bedside kits** are a bolt-on fiberglass bulge around the wheel openings: the truck's own body (hood, grille panel, bumper, tailgate, tail lights) keeps its width, and the flare melts into it with no gap, ending exactly at the nose, the hood edge, the bed rail and the tailgate. Shock diameter, detail and
  body length follow the catalog size and the travel (a 2.0 is slim with no reservoir, a 3.5 is big with a 4-tube bypass);
  the chrome shaft slides in and out of a fixed-length body, and front shocks and reservoirs stay under the hood.
  Also: a **Dirt King pre-runner bumper** (straight DOM-tube bar touching the nose: its top meets the lower edge of the grille panel and its back meets the panel's face, with two pairs of mounting struts tying it into the nose; the radiator support sits further back so the skid stays in view, with a brushed-aluminium trapezoid skid, etched
  DIRTKING FABRICATION, that runs back under the truck, narrowing and rising toward the rear, in a black tube frame with mounting posts and feet; A-pillar light pods now stand on a post on the real hood surface of every body, so they never sink into it; coilover springs are slim round-wire coils with closed end turns) a race rear (two upright spares standing on a carrier tray behind the bed, wheel faces to the rear, strapped to the bed rail; in the open bed two fire extinguishers leaning on the cab, a fuel cell and a spare fuel can) and
  a flat-spares bed cage. Baja Designs pods come in clear or amber lenses.
- **Maps** — *Mojave Desert* (the 5.3 km buttes-and-washes course) and *Dune Sea* (6.6 km through massive transverse sand dunes with steep lee faces and
  no scripted ramps: the crests are the jumps), plus:
  - *Whoop Valley* (5.4 km): long whoop sections with different spacings, tabletops and rollers.
  - *Jump Canyon* (5.6 km): badlands packed with tabletops, kickers and doubles.
  - *Dry Lake* (7.2 km): a flat-out run on a cracked, fast playa with big tables and fast whoops.
  - *Big Air* (5.4 km): the grid sits on a 185 m mountaintop. A straight downhill takes you to a giant dune whose lee face is a
    ski-jump landing hill, good for 3–4 s of air at 120+ mph. Then a long climb with jumps leads back to the top.

  Pick a course in the menu; the page reloads into the new world. Every course is a row of data in `MAPS` (world.js): base
  terrain, loop shape, an optional elevation profile, and features (`jump`, `dip`, `whoops`, `table`, `kicker`). Long flights get
  a little arcade help: in the air the truck weathervanes onto its flight path, and a big landing soaks up most of the impact
  and rebound.
- **Night race** — *Night* in the Time of day row: starry sky, moonlight, bloom. Every light you have fitted works: the headlights, A-pillar pods, roof bar and bumper bar
  throw real beams (KC yellow, Baja clear or amber) and the face lenses glow.
- **Rock lights**: eight LED pods under the fenders (two per wheel, bolted to the underside of the wheel-well tubs). At night they light the tyres, arms, shocks and the dirt round each wheel with four real point lights on your truck. Colours: white, amber, ice blue, red, green, or an RGB colour cycle (Garage → Lights). AI trucks' pods glow too.
- **Light covers** — KC's yellow Daylighter covers and Baja Designs' Squadron rock guards (a glossy black squircle with the white hexagon bd logo and "baja designs" wordmark, plus amber and clear) are real, removable parts: they come off on the
  night map, and the **L** key or the garage's *Light covers* buttons put them back on or take them off. The bare KC lens shows a reflector and bulb; at night, a KC cover or a black Baja guard blocks its lights completely (no beam, no glow); amber / clear Baja guards pass most of the light.
- **Lobby** — drag the truck to spin it (and up/down to change height, scroll to zoom); it resumes its slow turn a couple of seconds after you let go.
- **Whip flag** — pick a flag in the garage's Bed tab (checkered, USA, Mexico, team colours, DUSTLINE): a flexible whip on a spring base on the bed rail that bends with acceleration
  and wind, with a flag that droops when slow and streams at speed (LED-lit at night).
- **Physics** — custom rigid body with raycast long-travel suspension (bump stops, anti-roll), slip-based tyre model
  with surface grip (hard-pack, sand, rock, gravel), engine torque curve + automatic gearbox, traction control,
  air control, belly/roof collisions, boulders and cacti, truck-to-truck contact. Runs at a fixed 120 Hz.
- **World** — infinite procedural terrain (quadtree LOD, skirts, streaming) with dunes, buttes with strata, washes and a
  distant mountain ring; a graded race line with jumps, whoops and dips; instanced saguaro / Joshua tree / ocotillo /
  creosote / boulders; start gantry, checkpoint arches, chevron signs, tyre walls, spectator camp.
- **Racing** — 3-2-1 grid start, 5 AI drivers (pure-pursuit line + curvature speed profile, recovery, light rubber-banding),
  laps, positions, minimap, wrong-way / off-course warnings, results screen. Free-roam mode too.
- **Look** — custom sky with clouds and four times of day (Morning / Noon / Golden Hour / Sunset), image-based
  lighting, sun shadows, exponential fog matched to the horizon, HDR bloom, speed blur, tone mapping, billowing dust,
  roost, sparks. Quality presets Low → Ultra plus automatic resolution scaling.
- **Engines** — every truck generation has its real factory engine line-up (hp, lb-ft, redline, weight, aspiration), plus engine swaps:
  any other factory engine, Chevrolet/Ford/Mopar crate engines, a Cummins 4BT, and Trophy Truck race engines (incl. the SCORE spec LS3).
  Torque curve shape follows the aspiration (NA, turbo, twin-turbo, supercharged, hybrid, diesel).
  Trophy Trucks only offer race engines (unlimited big-inch V8s, SCORE TT Spec sealed LS3 / EcoBoost). Every engine is modelled
  in the bay (src/engine3d.js: block, heads, valve covers, belt drive, manifolds or headers, turbos / superchargers, diesel / hybrid / dry-sump parts);
  the garage Engine tab opens the hood (cut from the shell on its seam, hinged at the cowl, or at the nose on flip fronts) and swings the camera in.
- **Sound** — fully synthesised engine that follows the fitted engine (cylinder count, supercharger whine, turbo whistle + blow-off, diesel clatter), wind, gravel, suspension thumps, crashes, throttle-lift pops, spatial AI engines.

## Code map

`src/world.js` terrain/track/obstacles · `src/vehicle.js` physics · `src/ai.js` drivers · `src/terrain.js` LOD mesh +
ground shader · `src/veg.js` flora · `src/models.js` + `src/gfx.js` truck models · `src/environment.js` sky/sun ·
`src/post.js` post FX · `src/particles.js` · `src/audio.js` · `src/camera.js` · `src/game.js` loop, race logic, HUD.

Headless physics tests: `node sim/headless.mjs trophy 1` (AI lap), `node sim/race.mjs` (6-truck race), `node sim/accel.mjs`,
`node sim/landing.mjs` (drop / bottom-out rebound check), `node sim/impacts.mjs` (how hard normal laps hit things).
Debug in the browser console: `dustline` is the game object (`dustline.autopilot = true`, `dustline.fastForward(60)`).
