require "open-uri"

ApplicationRecord.transaction do
    puts "Destroying tables..."
    User.destroy_all
    Recipe.destroy_all

    puts "Resetting primary keys..."
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('recipes')


    puts "Creating users..."
    User.create!(
      email: 'demouser@email.com',
      password: 'demopassword'
    )
    User.create!(
      email: 'julia@email.com',
      password: 'password'
    )
    User.create!(
      email: 'boolia@email.com',
      password: 'password'
    )

    puts "Creating recipes..."
    Recipe.create!(
      name: 'Cinnamon Babka',
      author: 'Claire Saffitz',
      blurb: 'This dairy-free babka, enriched with olive oil and flavored with a ribbon of almond flour, brown sugar and cinnamon,
        starts with a classic challah bread dough. In the oven, the oil and sugar mingle to create a chewy,
        caramelized coating. You can omit the almond flour to make this nut-free, but the cinnamon ribbon will not be as
        pronounced. Be sure to let the babkas proof fully before baking, which will ensure a light, supple texture.',
      yield: '2 babkas',
      ingredients: ['1 recipe Challah Bread dough, prepared as directed below',
        '4 tablespoons olive oil, plus more for the pans',
        '1 cup grams light brown sugar',
        '1 cup almond flour',
        "1 tablespoon ground cinnamon",
        "½ teaspoon finely grated orange zest",
        "½ teaspoon Diamond Crystal kosher salt or ¼ teaspoon Morton coarse kosher salt",
        "All-purpose flour, for rolling",
        '1 large egg'],
      cook_time: '1 hour 30 minutes, plus proofing and cooling',
      preparation: ['Prepare the dough: Prepare the Challah Bread through Step 5. Let it sit in a warm spot until it’s doubled in size, 1 to 2 hours.',
        'Meanwhile, prepare the pans and make the cinnamon mixture: Brush the bottoms and sides of 2 loaf pans with a thin layer of olive oil, then line the bottom
        and 2 longer sides with pieces of parchment paper, leaving an overhang on the sides. Brush the parchment with more oil, then set the pans aside. In a medium bowl,
        toss together the brown sugar, almond flour, cinnamon, orange zest and a generous pinch of salt until evenly combined, breaking up any lumps of brown sugar
        with your fingertips. Measure out ¼ cup of the mixture and set aside for sprinkling over the tops of the babkas, then set the remaining mixture aside.',
        'Roll out and fill the dough: Scrape the dough out of the bowl and onto a lightly floured surface. Flatten it with the heel of your hand to expel the gas,
        then cut the dough in half (each piece will weigh about 570 grams). Place one half on a small rimmed baking sheet, cover and refrigerate while you roll out
        the other. Press and tug the piece of dough on the work surface into a flat, narrow rectangular shape. Then, roll the dough into a long, thin rectangle measuring
        about 24 inches long and 8 inches wide, dusting the top and underneath with just a bit of flour as needed to keep the dough gliding across the surface (don’t use
        too much flour, as you want some friction between the surface and the dough). Brush off any excess flour, then drizzle the dough with 2 tablespoons of olive oil
        and brush the oil in an even layer all the way to the edges, leaving a clean ½-inch border on one of the longer sides. Sprinkle half of the cinnamon mixture,
        about 1 cup, (not including the ¼ cup you set aside for the top) evenly across the surface and pat it gently into the dough.',
        'Form and chill the babkas: Starting at the longer side opposite the clean border, roll the dough into a tight, spiraled log. Pinch the dough together at the
        seam so it closes, then squeeze the log to lengthen and thin it out until it measures about 28 inches long. Use a knife to trim off just the
        irregular ends, then cut the log in half crosswise. Place one half over the other, crossing them in the middle, then twist the halves together.
        Transfer the twist to one of the prepared pans and flatten it gently so it fills out the bottom of the pan. Cover the pan with plastic wrap and
        transfer it to the refrigerator, then remove the second piece of dough from the refrigerator and repeat the rolling and forming process, using the
        remaining 2 tablespoons of olive oil and the remaining cinnamon mixture. Cover the second pan and refrigerate. Chill the babkas for at least 4 and up to 12 hours.',
        'Proof the babkas: Remove the babkas from the refrigerator and let them sit at room temperature until they’re nearly triple their original size and they come up to
        about ¾ of the pan, 3 to 4 hours.',
        'Heat the oven: Arrange an oven rack in the center position and heat the oven to 350 degrees.',
        'Brush with egg and bake: Beat the egg in a small bowl until it’s streak-free. Uncover the pans and brush the egg across the surfaces of the dough.
        Sprinkle the babkas with the reserved ¼ cup of cinnamon mixture, dividing evenly. Bake the babkas side by side (but not touching) until they’re deep
        golden brown, 40 to 45 minutes. Let them cool in the pans for 10 minutes, then run a paring knife down along the shorter sides of the pans to loosen them.
        Use the parchment paper to lift the babkas out of the pans and place on a wire rack. Let them cool completely.'],
      tags: ['dessert']
    )

    Recipe.create!(
      name: 'Perfect Boiled Eggs',
      author: 'J. Kenji López-Alt',
      blurb: 'If your goal is perfectly smooth, blemish-free boiled eggs that jump out of their shells every single time, I’ve got bad news: No technique in the world can promise that level of perfection.
        But armed with data from scientific tests done with more than 90 testers and more than 700 boiled eggs, this technique for boiled eggs — technically steamed, as they cook in just an inch of water —
        will maximize your odds. Fresher eggs will take slightly longer to peel, but they should peel just as cleanly as older eggs. The eggs in this recipe should be cooked straight from the refrigerator;
        reduce cooking times by 1 minute if using room-temperature eggs.',
      yield: '12 eggs',
      ingredients: ['Up to 12 eggs'],
      cook_time: 'Around 10 minutes',
      preparation: ['Find a lidded saucepan large enough to allow your eggs to comfortably fit on the bottom in a single layer. Add 1 inch of water, cover and bring to a boil.',
        'Gently lower eggs into the saucepan using a slotted spoon or a steamer basket. (It’s O.K. if the eggs are partly submerged on the bottom of the pot, or elevated on a steamer rack and not
        submerged at all.) Cover pan and cook eggs, adjusting the burner to maintain a vigorous boil, 6 minutes for a warm liquid yolk and firm whites, 8½ minutes for a translucent, fudgy yolk or 11 minutes
        for a yolk that is just barely firm all the way through.',
        'Drain eggs, then peel and eat immediately, or transfer them to a plate and allow them to cool naturally before storing in the refrigerator for up to a week directly in their shell. (A small dot made
        with a permanent marker on the top of each cooked egg will ensure you don’t mix them up with the raw eggs.) Do not shock them in an ice bath after cooking; this makes them more difficult to peel.'],
      tags: ['breakfast']
    )

    Recipe.create!(
      name: 'Classic Potato Latkes',
      author: 'Melissa Clark',
      blurb: 'This recipe is for a classic, unadorned latke; no kohlrabi or cumin here. Serve them hot and make more than you think you need. They go fast.',
      yield: 'About 3 dozen',
      ingredients: ['2 large Russet potatoes (about 1 pound), scrubbed and cut lengthwise into quarters', '1 large onion (8 ounces), peeled and cut into quarters', '2 large eggs', '1/2 cup all-purpose flour',
        '2 teaspoons course kosher salt, plus more for sprinkling', '1 teaspoon baking powder', '1/2 teaspoon freshly ground black pepper', 'Safflour or other oil, for frying'],
      cook_time: '45 minutes',
      preparation: ['Using a food processor with a coarse grating disc, grate the potatoes and onion. Transfer the mixture to a clean dishtowel and squeeze and wring out as much of the liquid as possible.
        Working quickly, transfer the mixture to a large bowl. Add the eggs, flour, salt, baking powder and pepper, and mix until the flour is absorbed.',
        'In a medium heavy-bottomed pan over medium-high heat, pour in about ¼ inch of the oil. Once the oil is hot (a drop of batter placed in the pan should sizzle), use a heaping tablespoon to drop the batter
        into the hot pan, cooking in batches. Use a spatula to flatten and shape the drops into discs. When the edges of the latkes are brown and crispy, about 5 minutes, flip. Cook until the second side is deeply
        browned, about another 5 minutes. Transfer the latkes to a paper towel-lined plate to drain and sprinkle with salt while still warm. Repeat with the remaining batter.'],
      tags: ['sides']
    )

    Recipe.create!(
      name: 'Shakshuka With Feta',
      author: 'Melissa Clark',
      blurb: 'Shakshuka may be at the apex of eggs-for-dinner recipes, though in Israel it is breakfast food, a bright, spicy start to the day with a pile of pita or challah served on the side. (It also makes excellent brunch or lunch food.) It’s a one-skillet recipe of eggs baked in a tomato-red pepper sauce spiced with cumin, paprika and cayenne. First you make that sauce, which comes together fairly quickly on top of the stove, then you gently crack each of the eggs into the pan, nestling them into the sauce. The pan is moved into the oven to finish. Shakshuka originated in North Africa, and like many great dishes there are as many versions as there are cooks who have embraced it. This one strays from more traditional renditions by adding crumbled feta cheese, which softens into creamy nuggets in the oven’s heat.',
      ingredients: ['3 tablespoons extra-virgin olive oil',
        '1 large onion, halved and thinly sliced',
        '1 large red bell pepper, seeded and thinly sliced',
        '3 garlic cloves, thinly sliced',
        "1 teaspoon ground cumin",
        "1 teaspoon sweet paprika",
        "1/8 teaspoon ground cayenne, or to taste",
        "1 (28-ounce) can whole plum tomatoes with their juices, coarsely chopped",
        '3/4 teaspoon kosher salt, plus more as needed',
        "1/4 teaspoon black pepper, plus more as needed",
        "5 ounces feta, crumbled (about 1¼ cups)",
        "6 large eggs",
        "Chopped cilantro, for serving",
        "Hot sauce, for serving"],
      yield: '4 to 6 servings',
      cook_time: '50 minutes',
      preparation: ['Heat oven to 375 degrees. Heat oil in a large skillet over medium-low. Add onion and bell pepper. Cook gently until very soft, about 20 minutes. Add garlic and cook until tender, 1 to 2 minutes; stir in cumin, paprika and cayenne, and cook 1 minute. Pour in tomatoes and season with ¾ teaspoon salt and ¼ teaspoon pepper; simmer until tomatoes have thickened, about 10 minutes. Taste and add more salt and pepper if needed. Stir in crumbled feta.',
       'Gently crack eggs into skillet over tomatoes. Season eggs with salt and pepper. Transfer skillet to oven and bake until eggs are just set, 7 to 10 minutes. Sprinkle with cilantro and serve with hot sauce.'],
      tags: ['breakfast']
    )

    Recipe.create!(
      name: 'Crispy Potato Kugel',
      author: 'Melissa Clark',
      blurb: 'At its core, kugel is a casserole. It comes in both savory and sweet varieties, often made with egg noodles and vaguely sweetened. This version, made with potatoes,
        is decidedly salty and savory, with onions in the mixture and chives to finish. It can best be described as something between a Spanish tortilla and a giant latke; the potatoes
        are shredded, not sliced, there are eggs but no flour, and it’s got crispy edges and a creamy interior. Sounds dreamy, doesn’t it? The most annoying parts of this kugel
        are also the most important: grating the potatoes (I use a box grater, but you can use a food processor with the shredding blade) and wringing out their moisture. For that,
        I use my hands and a colander or strainer to save a kitchen towel or a cheesecloth, but you can use those, if you like. Traditionally made in a casserole-style baking dish,
        this kugel starts off in a cast-iron skillet, but a stainless-steel skillet would do the job, and honestly so would a baking dish, just know you may be sacrificing that crunchy underside.',
      yield: '8 to 10 servings',
      ingredients: ['4 pounds russet potatoes (about 5 to 7 potatoes), peeled',
        '1 large yellow onion',
        '6 large eggs',
        '10 tablespoons chicken fat, melted or use vegetable oil',
        'Kosher salt and freshly ground black pepper',
        '⅓ cup finely chopped chives, for serving',
        'Flaky sea salt, for serving'],
      cook_time: '1 hour 20 minutes',
      preparation: ['Heat oven to 425 degrees. Using a box grater or the shredding attachment on the food processor, grate the potatoes and onion into a colander fitted inside a large bowl
        (or in the sink).',
        'Using your hands and working with a bit at a time, squeeze as much water from the potatoes and onions as humanly possible and transfer the dry potatoes to a large bowl (you can use that same bowl,
        just make sure it’s drained and dry). For added insurance, you can also do this with cheesecloth or a porous kitchen towel, if you like.',
        'Add eggs and 6 tablespoons chicken fat to the potatoes, and season with salt and plenty of pepper, mixing well. Heat another 2 tablespoons fat in a 9- or 10-inch cast-iron skillet over medium-high.
        (This recipe will work in a 9- or 10-inch skillet, but the kugel will be slightly taller in a 9-inch.) Delicately place the potato mixture into the skillet, taking care not to pack it in tightly.
        (You want to keep the kugel light and airy.)',
        'Cook the potatoes, rotating the skillet occasionally to promote even browning, until it’s golden brown on the edges and up the sides, 10 to 12 minutes.',
        'Drizzle the top of the potatoes with the remaining 2 tablespoons fat and place in the oven. Bake until the top of the kugel is deeply golden brown, the edges are wispy and crispy, and the potatoes
        are completely and totally tender and cooked through, 45 to 50 minutes.',
        'Remove from oven and top with more pepper, chives and flaky sea salt. Slice and serve warm.'],
      tags: ['sides']
    )

    Recipe.create!(
      name: 'Classic Matzo Brei',
      author: 'Melissa Clark',
      blurb: 'In this matzo brei (rhymes with fry) recipe, the matzo sheets are browned in butter until crisp before being lightly scrambled with eggs. You make this either sweet or savory
        as you prefer. Add black pepper, plenty of salt and chives for a savory version, or Demerara sugar and maple syrup or honey if you would like something sweeter. It’s a fine breakfast
        or brunch any time of the year, and especially during Passover.',
      yield: '2 servings',
      ingredients: ['2 sheets matzo',
        '2 to 3 tablespoons unsalted butter',
        '4 large eggs, beaten with 1 tablespoon water',
        'Large pinch fine sea salt, more to taste'],
      cook_time: "15 minutes",
      preparation: ['Under cool running water, rinse matzo sheets until they are quite wet. Set it aside and let sit to soften while you prepare the pan.',
        'Place a large, preferably nonstick skillet over medium-high heat and add butter. Once it melts and the foam subsides, break matzo sheets into bite-size pieces and add to pan.
        Sauté matzo in butter until it browns all over, about 2 minutes.',
        'Add eggs, salt and pepper (if you’re making the dish savory) to pan and scramble the mixture until it is just set but still light and fluffy, about 1 minute. Sprinkle with sugar
        (if you’re making it sweet) and toss well.',
        'Serve matzo brei sprinkled with salt and topped with chives (savory).'],
      tags: ['breakfast']
    )


    puts "Done!"
  end

  puts "Attaching images to recipes..."
  Recipe.all.each_with_index do |recipe, index|
    recipe.photo.attach(
      io: URI.open("https://nytnoshing-seeds.s3.us-west-1.amazonaws.com/nytnoshing-#{index}.jpg"),
      filename: "nytnoshing-#{index}.jpg"
    )
  end
