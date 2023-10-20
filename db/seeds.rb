require "open-uri"

ApplicationRecord.transaction do
    puts "Destroying tables..."
    User.destroy_all
    Recipe.destroy_all
    Note.destroy_all
    SavedRecipe.destroy_all

    puts "Resetting primary keys..."
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('recipes')
    ApplicationRecord.connection.reset_pk_sequence!('notes')
    ApplicationRecord.connection.reset_pk_sequence!('saved_recipes')

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

    User.create!(
      email: 'jerry@email.com',
      password: 'password'
    )

    User.create!(
      email: 'elaine@email.com',
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
      tags: ['breakfast', 'sides']
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
      tags: ['sides', 'dinner', 'lunch']
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
      tags: ['sides', 'dinner', 'lunch']
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

    Recipe.create!(
      name: 'Matzo Ball Soup',
      author: 'Joan Nathan',
      blurb: 'For children (and arguably most adults), the most welcome Passover dish is chicken soup with matzo balls. My matzo balls, neither heavy as lead nor light as a feather,
      are al dente, infused with fresh ginger and nutmeg. I like to freeze them, and the soup, in advance.',
      yield: 'About 15 matzo balls',
      ingredients: ['4 large eggs',
        '¼ cup schmaltz (rendered chicken fat), coconut oil or vegetable oil (kosher for Passover)',
        '¼ cup chicken stock or vegetable stock',
        '1 cup matzo meal',
        '¼ teaspoon ground nutmeg',
        '1 to 2 tablespoons freshly grated ginger',
        '2 tablespoons finely chopped parsley, dill or cilantro',
        '1 teaspoon salt, more for cooking',
        'Black peper'],
      cook_time: "1 hour 15 minutes, plus 3 hours or overnight refrigeration",
      preparation: ['In a large bowl, combine the eggs, schmaltz, stock, matzo meal, nutmeg, ginger and parsley. Season with 1 teaspoon salt and a few grinds of pepper. Gently mix with a whisk or
        spoon. Cover and refrigerate until chilled, about 3 hours or overnight.',
        'To shape and cook the matzo balls, fill a wide, deep pan with lightly salted water and bring to a boil. With wet hands, take some of the mix and mold it into the size and shape of a
        Ping-Pong ball. Gently drop it into the boiling water, repeating until all the mix is used.',
        'Cover the pan, reduce heat to a lively simmer and cook matzo balls about 30 to 40 minutes for al dente, longer for light. If desired, the cooked matzo balls can be transferred to
        chicken or vegetable soup and served immediately. Alternatively, they may be placed on a baking sheet and frozen, then transferred to a freezer bag and kept frozen until a few hours
        before serving; reheat in chicken or vegetable soup or broth.'],
      tags: ['soup', 'dinner', 'lunch']
    )

    Recipe.create!(
      name: 'Horseradish Brisket',
      author: 'Melissa Clark',
      blurb: 'This tender, deeply flavored brisket gets its character from two distinct sources. Searing the meat until dark brown gives the sauce a caramelized, intensely brawny taste, while a
        bracing garnish of fresh horseradish gremolata spiked with parsley and lemon zest adds brightness and a sinus-clearing bite. Make the meat a few days ahead, it only gets better as it rests.
        But to get the most out of the gremolata, don’t grate the horseradish until an hour or two before serving. If you can’t find fresh horseradish, use 4 cloves minced garlic instead.',
      yield: '8-12 servings',
      ingredients: ['1 (4- to 5-pound) brisket, preferably second cut',
        '1 tablespoon kosher salt',
        '1½ teaspoons black pepper',
        '4 garlic cloves, chopped',
        '6 sprigs fresh thyme',
        '2 tablespoons extra-virgin olive oil',
        '2 large onions, thinly sliced',
        '2 large carrots, sliced into thin rounds',
        '2 large celery stalks, diced',
        '1½ cups dry red wine',
        '2 whole bay leaves',
        '1½ cups parsley, coarsely chopped',
        'Grated zest of 1 small lemon',
        '3 tablespoons fresh, coarsely grated horseradish',
        'Flaky sea salt, for serving'],
      cook_time: "4 hours, plus marinating",
      preparation: ['Season brisket all over with salt and pepper. Place brisket in a large container and spread garlic and thyme sprigs all over top and bottom of meat. Cover and refrigerate overnight
        or for at least 4 hours. Let meat stand at room temperature for 30 minutes before cooking. Wipe off the garlic and thyme. Heat oven to 325 degrees.',
        'Heat a very large Dutch oven over high heat. Add oil and let heat. Add brisket and sear, without moving, until golden brown, about 4 to 5 minutes per side. (Cut meat into 2 chunks and sear in batches
        if it doesn’t fit in the pot in a single layer.) Transfer to a plate.',
        'Add onions, carrots and celery to pot and reduce heat to medium-high. Cook vegetables, tossing occasionally, until onions are golden brown around the edges and very tender, about 15 minutes. Pour in
        wine and scrape up any browned bits from the bottom of the pot. Stir in bay leaves and bring liquid to a simmer; let simmer for 5 minutes to reduce slightly.',
        'Place meat in pot, then cover pot and transfer to oven. Cook, turning every 30 minutes, until meat is completely fork tender, 3 to 4 hours. After 2½ hours, uncover pot so some of the liquid can evaporate
        and the sauce can thicken. If the brisket starts to get too brown and the sauce too reduced before the meat is tender, cover pot again.',
        'Spoon fat from the top before serving. (If you have time, let brisket cool completely first, then refrigerate overnight in the pot; this makes it easier to remove the white fat from the top. Reheat the meat,
        covered, in a 350-degree oven for 30 to 45 minutes.) If sauce seems thin, remove meat from pot and bring liquid to a simmer. Let cook until reduced to taste.',
        'In a bowl, toss together parsley, lemon zest and horseradish to make gremolata. Slice meat against the grain and serve with the sauce, garnished with horseradish gremolata and sea salt.'],
      tags: ['dinner', 'main course']
    )

    Recipe.create!(
      name: 'Tsimmes',
      author: 'Joan Nathan',
      blurb: 'I substitute the yellow yams or sweet potatoes with the white Japanese sweet potatoes that I love. I use flanken, a cut of short ribs found at kosher butchers, but any cut of short ribs will do, as will
        beef stew meat. I keep the bones in for flavor — and add a bay leaf for the same reason — and, rather than skimming the fat as it cooks, I simply put the stew pot in the refrigerator overnight so I can easily
         remove the hardened fat the next day. (A generation or two before me, cooks would have saved that fat for cooking and baking.) Instead of adding a little matzo meal to thicken the broth, I find no need for
          that, especially if I reduce the sauce a little before serving. I add pitted prunes, which are sweet enough to eliminate the need for brown sugar or honey and, at the end, I add parsley for color.',
      yield: '6 to 8 servings',
      ingredients: ['3 bone-in flanken, also known as flanken-style ribs, or English-cut short ribs (about 3 pounds)',
        '1 tablespoon kosher salt, plus more to taste',
        '1½ teaspoons freshly ground black pepper, plus more to taste',
        '1 fresh (or dried) bay leaf',
        '3 pounds sweet potatoes, preferably Japanese white sweet potatoes (3 to 4 large sweet potatoes), peeled and cut into 2-inch chunks',
        '2 medium white or yellow onions, halved and sliced',
        '5 to 6 medium carrots, peeled and cut into 2-inch segments',
        '8 ounces prunes, pitted and left whole',
        'Chopped fresh parsley, for serving'],
      cook_time: "About 3 hours, plus overnight chilling",
      preparation: ['A day before serving, heat the oven to 350 degrees.',
        'Season the meat with 1 tablespoon salt and 1½ teaspoons pepper.',
        'Put the meat and the bay leaf in a Dutch oven or other large, heavy pot, and add enough water to cover (about 8 cups). Bake, covered, for about an hour, then remove from heat, let cool and refrigerate overnight.',
        'The next day, the fat will have congealed on top; using a slotted spoon, remove and discard the layer of fat.',
        'Add the sweet potatoes, onions, carrots and prunes to the meat, and stir to combine. Bake, covered, for another hour, then remove the lid and cook until the potatoes are cooked, the meat is tender and the water
        is reduced, another 30 minutes to 1 hour. Season to taste. If there is more broth than you’d like, ladle some out and save for another use. Sprinkle with parsley just before serving.'],
      tags: ['dinner', 'main course', 'meat', 'stew', 'soup']
    )

    Recipe.create!(
      name: 'Carrot Ring',
      author: 'Dana Green, Melissa Clark',
      blurb: 'A cross between a carrot cake and a carrot pudding, this velvety, warm, gently sweet side dish is a classic holiday offering. This version is adapted from Dana Green of Benicia, Calif., who got it
        from her grandmother. "Everyone who encounters it is wary of the name, carrot ring, but they end up loving it, they have seconds," Ms. Green said. You can make this ahead by allowing the ring to cool in the pan,
        then wrapping the whole thing in plastic wrap, pan and all, and freezing it for up to one month. Let thaw in the refrigerator overnight. Unwrap and reheat in a 300-degree oven for about 30 minutes or so before serving.',
      yield: '12 servings',
      ingredients: ['1 cup shortening or unsalted butter, plus more for the pan',
        '4 medium carrots, peeled and sliced',
        '½ teaspoon baking soda',
        '¼ to ½ cup dark brown sugar, to taste',
        '1 large egg',
        '1 teaspoon fresh lemon juice',
        'Pinch of salt',
        '1¼ cups all-purpose flour',
        '1 teaspoon baking powder'],
      cook_time: "1¼ hours",
      preparation: ['Heat oven to 350 degrees. Grease a 4-cup tube pan or small Bundt pan.',
        'Put carrots in a small pot and cover with water by at least an inch. Bring to a boil and cook until carrots are tender, 20 to 30 minutes (the thinner the slices the more quickly they cook). Add more water if needed
        to keep carrots mostly submerged.',
        'Drain and mash the carrots with a potato masher or fork, then measure out 1 cup of the mash. (Reserve any remaining carrots to eat with a little butter and salt if you like.) Let carrots cool.',
        'Put baking soda and 1 tablespoon warm water in the bowl of an electric mixer and mix to dissolve. Add shortening or butter and sugar and beat until fluffy. Beat in egg, lemon juice and salt until smooth, then beat
        in carrots. Finally, beat in flour and baking powder.',
        'Pour batter into pan and smooth the top with a spatula. Bake until the top springs back when lightly pressed, 30 to 40 minutes. Serve warm.'],
      tags: ['dessert']
    )

    Recipe.create!(
      name: 'Matzo Crack',
      author: 'Marcy Goldman, Melissa Clark',
      blurb: 'Matzo toffee is the Passover-friendly take on saltine toffee. A layered confection of matzo crackers, brown sugar caramel and melted chocolate, you can top it with practically anything you like, from the most
        elegantly minimal sprinkle of sea salt to a surfeit of nuts, dried fruit, potato chips, or a combination. This recipe, adapted from Marcy Goldman’s cookbook “A Treasury of Jewish Holiday Baking,” keeps well when
        stored airtight at room temperature — up to one week, if you haven’t finished it by then.',
      yield: 'About 2 dozen pieces',
      ingredients: ['4 to 6 sheets matzo, preferably salted',
        '1 cup/225 grams unsalted butter (2 sticks)',
        '1½ packed cups/315 grams light brown sugar',
        '2 teaspoons vanilla extract',
        'Large pinch of fine sea salt',
        '7 ounces chopped bittersweet, milk or white chocolate, or a combination (about 1 cup)',
        'Toppings, as desired'],
      cook_time: "50 minutes, plus chilling",
      preparation: ['Heat oven to 350 degrees. Line a 13-by-18-inch rimmed baking sheet with aluminum foil, allowing it to go up and over the edges of the pan. Line the bottom of the pan with a piece of parchment.
        Arrange matzo over parchment in an even layer, breaking pieces to fit as necessary.',
        'In a medium pot over medium-high heat, bring butter and sugar to a boil, whisking, until thickened and smooth, about 3 minutes. The mixture may separate, and that is O.K. Stir in vanilla and salt. Quickly
        pour mixture over matzos. Transfer baking sheet to oven and bake until bubbly, about 15 minutes.',
        'Remove from oven. Sprinkle chocolate evenly over caramel and let stand until softened, about 5 minutes. Use an offset spatula to spread chocolate smoothly over surface of toffee. If you’ve used different
        kinds of chocolate, you can swirl them together decoratively.',
        'Immediately sprinkle melted chocolate with desired topping. Transfer baking sheet to refrigerator and chill toffee 1 hour to set chocolate. Break matzo toffee into large pieces for storing and serving.'],
      tags: ['dessert', 'snack']
    )

    Recipe.create!(
      name: 'Garlic Butter Carrots',
      author: 'Alison Roman',
      blurb: 'This is one of the few occasions when overcrowding the skillet is a good thing. These carrots are cooked in fat (schmaltz, olive oil, butter), with a pinch of something spicy (red-pepper flakes, cayenne,
      even hot paprika), sort of half-steaming on top of each other until just tender (no mushy carrots here, please). At the end, they are seasoned with a bit of finely grated or chopped garlic off the heat, which
      quiets the garlicky punchiness without extinguishing it entirely. Like a sandwich cut into triangles, the fact that the carrots are sliced into rounds makes them taste above-average delicious.',
      yield: 'About 2 dozen pieces',
      ingredients: ['¼ cup chicken fat, olive oil or unsalted butter',
        '¼ cup olive oil',
        'Pinch of red-pepper flakes (optional)',
        '2 bunches carrots, topped removed (about 1 pound), thinly sliced into rounds',
        'Kosher salt and freshly ground black pepper',
        '1 garlic clove, finely chopped or grated'],
      cook_time: "15 minutes",
      preparation: ['Melt chicken fat in a large skillet over medium-high heat. (If using butter, melt until lightly foamy and starting to brown, 2 to 3 minutes.) Add olive oil and red-pepper flakes, if using,
        swirling to bloom a bit in the butter. Add carrots and season with salt and pepper. Cook, tossing occasionally, until carrots are just cooked through, 3 to 4 minutes. (They should be simply softened,
          like al dente pasta, not soft or mushy.)',
        'Remove pan from heat, and add garlic, tossing to coat, and transfer to serving bowl.'],
      tags: ['dinner', 'lunch' 'side']
    )

    Recipe.create!(
      name: 'Russian Honey Cake',
      author: 'Michelle Polzine, Samin Nosrat',
      blurb: 'The key to making this exquisite, gravity-defying cake, which comes from Michelle Polzine of 20th Century Cafe in San Francisco, is patience. This cake takes a lot of time! Set some aside to do
        it right. There are just two components — airy, lightly spiced cake layers and glossy whipped-cream frosting, both tinged with burned honey — but both require precision. Clear your schedule, and your
        countertop, to make the time and space to get it right. Then invite a dozen or two of your favorite people over the next day to delight in the impressive results of your hard work. You can buy dulce
        de leche at most Mexican markets or upscale groceries (look for brands made in Argentina), or make it a day ahead using this recipe.',
      yield: 'Makes 1 9-inch cake',
      ingredients: ['1½ cups (18 ounces) wildflower honey, divided',
        '¼ cup (2 ounces) water',
        '1 cup plus 2 tablespoons (8 ounces) sugar',
        '14 tablespoons (7 ounces) butter, cut into ½-inch pieces',
        '6 large eggs',
        '2½ teaspoons baking soda',
        '2½ teaspoons Diamond Crystal Kosher Salt or 1¼ teaspoons fine sea salt, divided',
        '1 teaspoon ground cinnamon',
        '3¾ cups (16 ounces) all-purpose flour,',
        '1¼ cups (1 13.4-ounce can) dulce de leche',
        '4¾ cups heavy cream, chilled and divided'],
      cook_time: "4 hours, plus overnight chilling",
      preparation: ['Preheat oven to 375. Trace circles around a 9-inch pie or cake pan onto 12 baking-sheet-size pieces of parchment paper. Set aside.',
        'Make a water bath: Fill a small saucepan with 1 inch of water, and set over medium heat.',
        'Place ¾ cup of honey in a 2-quart saucepan, and set over high heat. Bring to a simmer, then reduce the heat to medium. After about 3 minutes, the honey will begin to foam intensely. Stirring occasionally
        with a wooden spoon, keep a close eye on the honey. Cook until it begins to smoke, then turn off the heat and carefully add water. Allow the honey to sputter until it stops bubbling. Whisk to combine, and pour
        into a heatproof measuring cup with a spout, then place in prepared water bath to keep honey liquid.',
        'Fill a medium saucepan with 2 inches of water, and bring to a simmer. Combine ¼ cup burned honey, ¾ cup honey, sugar and butter in a large metal mixing bowl, and place over the pot of water.',
        'Crack eggs into a small bowl, and set aside. Stir together baking soda, 1½ teaspoons kosher salt or ¾ teaspoon sea salt and cinnamon in a separate small bowl.',
        'When the butter has melted, whisk the honey mixture to combine. Use your finger to test the temperature of the mixture. When it’s warm, add the eggs while whisking. When the mixture returns to the same
        temperature, add the cinnamon mixture, and continue whisking for another 30 seconds. The batter will begin to foam and emit a curious odor. Remove the bowl from the heat, and allow it to cool until it’s warm.',
        'Place the flour in a fine-mesh sieve, and sift over the batter in three batches, whisking to incorporate the flour completely with each addition. The batter should be completely smooth. The batter will spread
        more easily when it’s warm, so pour half into a small bowl, and cover with plastic wrap. Place in a warm spot, such as atop the preheating oven.',
        'Place a piece of parchment tracing-side-down on a baking sheet, and spoon in a heaping ⅓ cup of batter. Use an offset spatula to evenly spread the batter to the edges. It will seem like just barely
        enough batter; do your best to get the layer even and perfectly circular. Repeat with remaining layers until you’re out of pans, and then continue with remaining batter and parchment sheets, laying batter
        circles out on a flat surface. You’ll end up with 11 or 12.',
        'Bake as many layers at a time as possible, for 6 to 7 minutes, until the cake turns a deep caramel color and springs back at the touch. For the first round, set the timer for 4 minutes to rotate pans if needed
        to ensure even cooking. Check the cakes again at 6 minutes. Do not overbake!',
        'When each layer is done, slide the parchment off the pan to prevent overbaking. If reusing baking sheets while they are still hot, reduce cooking time to 5 to 6 minutes.',
        'When the cake layers are cool enough to handle, examine them. If any spread outside the traced circles as they baked, use a sharp knife or pair of scissors to trim them. Before the cakes cool entirely, pull each
        one carefully from the parchment, then place back on the parchment on a flat surface, and allow to cool completely.',
        'When all the layers are baked, reduce the oven temperature to 250, and allow the cake to cool for 30 minutes. Return the least attractive layer (or 2, if you got 12) to a baking sheet, and place in the oven to
        toast until deep reddish brown and dry, about 15 minutes. Allow it to cool, then use a food processor to grind into fine crumbs. Cover and set aside.',
        'Place ½ cup burned honey, dulce de leche and 1 teaspoon Diamond Crystal Kosher Salt or ½ teaspoon fine sea salt into a medium bowl. Whisk by hand until combined, then slowly pour in ¾ cup cream and mix until
        homogeneous. Chill until completely cooled, about 30 minutes.',
        'Pour 4 cups heavy cream into the bowl of a stand mixer, and affix whisk attachment. Whip at medium speed to soft peaks, about 6 minutes, then add honey mixture and whip frosting to medium stiff peaks.
        If your mixer holds less than 5 quarts, make frosting in 2 batches and then combine in a large bowl, or use a large bowl and a hand mixer.',
        'Assemble the cake on a 10-inch cardboard circle or flat serving plate. Place a cake layer in the center of the cardboard, then spoon a heaping cup of frosting onto the center. Use an offset spatula to spread
        the frosting evenly, leaving a ¼-inch ring unfrosted around the edge. Place the next layer atop the frosting, center it and continue as above. Don’t be afraid to manhandle the cake to align the layers as you c
        ontinue stacking. If necessary, make up for any doming in the center by spreading more frosting to the outer half of each layer than the inner half. After you place the 10th layer, spread another scant cup of frosting
        over the top. Use any leftover frosting to smooth out the sides of the cake, but don’t fret if the edges of some cake layers poke through the frosting. Sprinkle the top and sides with cake crumbs.',
        'Chill overnight. Serve chilled. Cake can be made up to two days in advance. Refrigerate leftovers for up to 3 days.'],
      tags: ['dessert']
    )

    Recipe.create!(
      name: 'Potato Kugel',
      author: 'Itta Werdiger Roth, Francis Lam',
      blurb: 'Take a healthy hashbrown, plump it up with more potatoes and a few eggs, and slowly bake it for a couple hours and you’ll get this potato kugel. Its crunchy top gives way to a super-soft,
        almost mashed-potato center, and the soft aroma of onion will fill your kitchen.',
      yield: 'Serves 6 to 8',
      ingredients: ['3 pounds russet potatoes',
        '3 eggs',
        '1 tablespoon kosher salt',
        '¼ teaspoon black pepper',
        '1 medium onion',
        '6 tablespoons vegetable oil, plus more for greasing pan',
        '⅓ cup flour',
        '¼ teaspoon baking powder'],
      cook_time: "2½ hours",
      preparation: ['Heat the oven to 350, with a heavy 9-by-9-inch baking pan or 10-inch cast-iron skillet inside.',
        'Peel the potatoes, and place them in a bowl of water. In a large mixing bowl, beat the eggs with the salt and pepper until well combined.',
        'Using a food processor fitted with the grating plate, grate the onion. Drain the potatoes, then grate them. Quickly add the potatoes and onions to the eggs, and add the oil, flour and
          baking powder. Mix well. (You can also grate by hand; if you do so, grate the potatoes directly into the eggs and oil, and stir them frequently to coat. This helps slow their browning
            while you keep grating.)',
        'Remove the pan from the oven, and slick it with oil. Carefully but quickly add the potato mixture, smoothing it out so that it is as even as possible. Bake for 2 hours, or until the kugel
        is creamy in the center and the whole top is a rich, crunchy brown.'],
      tags: ['side', 'dinner', 'lunch']
    )

    Recipe.create!(
      name: 'Peanut Butter Sandies',
      author: 'Julia Moskin',
      blurb: 'This modern classic is reverse-engineered from a cult cookie at City Bakery in Manhattan. They are saltier, richer and tangier than the usual crisscross rounds, thanks to
        updated ingredients like sea salt, cultured butter and brown sugar. And like any good “sandy” cookie, they have a soft, crumbly texture that melts away on first bite.',
      yield: '3 to 4 dozen',
      ingredients: ['1 cup/228 grams/2 sticks unsalted butter, preferably cultured, softened at room temperature',
        '¾ cup/150 grams granulated sugar',
        '¾ cup (packed)/170 grams light brown sugar',
        '1 heaping teaspoon/6 grams kosher salt',
        '2 cups/510 grams unsweetened peanut butter, creamy or chunky',
        '2 eggs, at room temperature',
        '2 cups/250 grams all-purpose flour',
        'Flaky sea salt and coarse sugar for sprinkling (or use kosher salt and granulated sugar)'],
      cook_time: "1 hour",
      preparation: ['Heat oven to 350 degrees and line 2 baking sheets with parchment paper or nonstick liners. In a mixer fitted with a paddle attachment, cream the butter
        and sugars until smooth and fluffy, at least 3 minutes. Add the peanut butter and eggs, and mix. Add the flour and salt and mix just until well combined, with no white \
        flour showing.',
        'Using a small cookie scoop (about 2 teaspoons capacity), scoop dough onto prepared pans. The tops will be rounded but craggy. The cookies will not spread much or change
        shape when they bake, so they can be placed quite close together, but leave room for air circulation so they can brown.',
        'In a small bowl, mix 2 tablespoons sugar with 1 tablespoon salt. Sprinkle each cookie lightly with sugar-salt mixture, getting it into the crags and crannies. Bake 12 to 15
        minutes, until cookies are set and golden-brown. Carefully lift or slide off baking sheets and cool on racks. Store in layers separated by parchment paper, in airtight containers.'],
      tags: ['dessert']
    )

    Recipe.create!(
      name: 'My Favorite Challah',
      author: 'Joan Nathan',
      blurb: 'Throughout the years, I have picked up tips from challah bakers throughout this country and in Europe and Israel. For example: Several risings make a better loaf, and if
        you want an especially brioche-like texture, let the dough rise slowly in the refrigerator for one of the three risings. The secret to a glossy loaf is to brush with an egg
        wash twice, once just after braiding and then again just before baking.',
      yield: '2 challahs',
      ingredients: ['1½ packages active dry yeast (about 3½ teaspoons)',
        '1 tablespoon plus ½ cup sugar',
        '½ cup vegetable oil, more for greasing bowl',
        '5 large eggs',
        '1 tablespoon salt',
        '8 to 8½ cups all-purpose flour',
        '2 cups/250 grams all-purpose flour',
        'Poppy or sesame seeds for sprinkling'],
      cook_time: "1 hour",
      preparation: ['In a large bowl, dissolve yeast and 1 tablespoon sugar in 1¾ cups lukewarm water.',
        'Whisk oil into yeast, then beat in 4 eggs, one at a time, with remaining sugar and salt. Gradually add flour. When dough holds together, it is ready for kneading. (You can
          also use a mixer with a dough hook for both mixing and kneading.)',
        'Turn dough onto a floured surface and knead until smooth. Clean out bowl and grease it, then return dough to bowl. Cover with plastic wrap, and let rise in a warm place for
          1 hour, until almost doubled in size. Dough may also rise in an oven that has been warmed to 150 degrees then turned off. Punch down dough, cover and let rise again in a
          warm place for another half-hour.',
        'To make a 6-braid challah, either straight or circular, take half the dough and form it into 6 balls. With your hands, roll each ball into a strand about 12 inches long and 1½
          inches wide. Place the 6 in a row, parallel to one another. Pinch the tops of the strands together. Move the outside right strand over 2 strands. Then take the second
          strand from the left and move it to the far right. Take the outside left strand and move it over 2. Move second strand from the right over to the far left. Start over with the
          outside right strand. Continue this until all strands are braided. For a straight loaf, tuck ends underneath. For a circular loaf, twist into a circle, pinching ends together.
          Make a second loaf the same way. Place braided loaves on a greased cookie sheet with at least 2 inches in between.',
        'Beat remaining egg and brush it on loaves. Either freeze breads or let rise another hour.',
        'If baking immediately, preheat oven to 375 degrees and brush loaves again. If freezing, remove from freezer 5 hours before baking. Then dip your index finger in the egg wash,
          then into poppy or sesame seeds and then onto a mound of bread. Continue until bread is decorated with seeds.',
        'Bake in middle of oven for 35 to 40 minutes, or until golden. Cool loaves on a rack.'],
      tags: ['side', 'bread']
    )

    Recipe.create!(
      name: 'Basque Cheesecake',
      author: 'Marti Buckley',
      blurb: 'Generously burnished and with a velvety, custardy interior, this rustic, crustless cheesecake from the Basque region of northern Spain is the platonic ideal of a low-effort,
        high-reward dessert. The caramelized exterior evokes a toasty marshmallow, but the cake itself is not too sweet. Marti Buckley adapted this recipe from La Viña, a small bar in
        San Sebastián, for her cookbook, “Basque Country” (Artisan, 2018). This statement cake is achieved using only five primary ingredients. It’s baked at a higher temperature than a
        classic New York cheesecake and in the hot oven, the cheesecake dramatically inflates into a soufflé-like puff before sinking into itself, creating a cradle for fresh fruit,
        should you wish to serve it with some. But Basque cheesecake is perfect on its own, at its arguable prime the day after it’s made, enjoyed at room temperature.',
      yield: '12 servings',
      ingredients: ['Unsalted butter or nonstick spray, for greasing the pan',
        '1¾ cups/350 grams granulated sugar',
        '2¼ pounds/36 ounces cream cheese, at room temperature',
        '¼ teaspoon kosher salt (such as Diamond Crystal)',
        '5 large eggs',
        '2 cups/480 milliliters heavy cream',
        '¼ cup/30 grams all-purpose flour'],
      cook_time: "1 hour 40 minutes, plus cooling",
      preparation: ['Place a rack in the center of the oven and heat the oven to 400 degrees. Grease a 10-inch springform pan and line with parchment paper, leaving 2 to 3 inches
        overhanging the top of the pan. (You can trace and cut a circle to fit the base and then cut a band of paper to fit neatly around the sides, but the more rustic and simple
        method is to press an entire sheet into the pan, pleating the paper where it begins to crease. If you use multiple sheets of parchment, grease in between the layers so that
        they stick and lay flat.)',
        'In a large bowl using a handheld mixer or in the bowl of a stand mixer fitted with the paddle attachment, cream the sugar and cream cheese until smooth. (This can be done by
        hand as well; beat with a wooden spoon for about 5 minutes.)',
        'Add the salt and mix. Add the eggs one by one and beat until fully incorporated. Beat in the cream. Sift in the flour, then mix it in on low.',
        'Pour the batter into the prepared pan and bake until browned and almost burnt on top, 50 to 60 minutes. The center will still be quite jiggly. Remove the cake from the oven
        and cool completely on a rack. It will have risen significantly, nearly past the top of the pan, but it will sink in the center as it cools.',
        'Before serving, remove the rim of the springform and gently tug away the parchment paper. Serve at room temperature.'],
      tags: ['dessert']
    )

    Recipe.create!(
      name: 'Tortilla Española',
      author: 'Manolo Intriago',
      blurb: 'Perhaps the most Spanish of all tapas, this potato omelet makes a satisfying meal on its own; you can also serve it as a part of a spread with jamón, serrano, chorizo,
      cheese, olives and piquillo peppers. Poaching the potatoes and onions in olive oil makes them almost creamy. (Keep the infused oil in the fridge; it’s great for dipping bread or
      other uses.)',
      yield: '8 - 12 servings',
      ingredients: ['1¼ pounds onions, diced',
        '1 large green bell pepper, seeded and chopped',
        '4 cloves garlic, minced',
        '2½ pounds russet potatoes',
        'Kosher salt, to taste',
        '4 cups extra-virgin olive oil',
        '10 large eggs'],
      cook_time: "1 hour",
      preparation: ['Place the onions, pepper and garlic in a large bowl. Peel the potatoes, quarter them lengthwise, and slice those crosswise into 1/8th inch tiles. (A mandoline
        is great for this.) Add them to the onion mixture and season with 2 teaspoons kosher salt.',
        'Heat the oil over high heat in a 12-inch, deep-sided skillet (preferably nonstick or well-seasoned cast iron). Drop 1 potato tile into the oil as it heats; when it floats and
        then begins to fry vigorously, carefully add all the potato-onion mixture and stir gently.',
        'Cook the potatoes at a vigorous simmer, stirring occasionally so they don’t brown too much on the bottom, until they are very soft but not quite losing their shape, 20 to 25
        minutes. Drain the potatoes through a colander and let them cool until warm.',
        'Beat the eggs in a large bowl. Taste the potatoes for salt and season the eggs with salt accordingly. Stir the potatoes into the eggs.',
        'Place the skillet over medium high heat. When it is very hot, pour in the potato mixture, spread evenly and turn heat to medium. Using a spatula, gently pull the edges of the
        tortilla towards the center to release them from the pan and let any liquid egg run out the sides.',
        'After 4 minutes, cover the pan with the bottom of an oiled baking sheet. Using towels or oven mitts, carefully flip the pan onto the sheet, place the pan back over the heat,
        then slide the inverted tortilla back into the pan. Cook, without stirring, for 3 minutes. Both sides of the tortilla should be golden brown.',
        'Insert a long skewer into the side of the tortilla to see how wet it is inside. Some prefer the inside a little moist, some fully cooked. You can continue to cook it, flipping
        the tortilla as described once a minute, until it’s done to your liking. Serve warm or at room temperature.'],
      tags: ['side', 'appetizer']
    )

    Recipe.create!(
      name: 'Pan Con Tomate',
      author: 'David Tanis',
      blurb: "Some version of tomatoes on toast — a juicy American B.L.T. or Italian tomato-topped bruschetta — is always a good idea, but that's especially true during high summer,
      when tomatoes are at their peak. One superior combination comes from Barcelona, where a slice of toast is rubbed with garlic and juicy ripe tomatoes, then anointed with olive oil.
      Most Catalan cooks simply cut the tomato crosswise and vigorously massage the toasted bread with the cut side. Others grate the tomato flesh and spoon it over the bread. This
      version adds tomato slices and a scattering of cherry tomatoes for a substantial first course.",
      yield: '4 to 6 servings',
      ingredients: ['3 or 4 very ripe medium tomatoes (about 1½ pounds)',
        '1 pint cherry tomatoes (about 12 ounces)',
        '4 to 6 large slices sturdy sourdough bread, about ½-inch thick',
        '4 to 6 garlic cloves, peeled',
        'Salt and pepper',
        'Extra-virgin olive oil',
        'Basil leaves, for garnish (optional)'],
      cook_time: "30 minutes",
      preparation: ['Cut 2 tomatoes in half crosswise. Place a box grater in a shallow bowl and grate the tomato flesh from the cut sides, pushing through the large holes.
        You should have 1 cup or so of coarse tomato purée. Set purée aside, and discard tomato skins.',
        'Cut remaining large tomatoes into ¼-inch slices. Cut cherry tomatoes in half. Set aside.',
        'Toast the bread until nicely browned and crisp. (Toasting over a charcoal grill yields a rich, smoky flavor, but a toaster, toaster oven or broiler works just as well.)',
        'With your fingers, rub the top of each toast with a garlic clove. You will see the cloves get smaller as the garlic is dispersed, pushed into the bread. (For a less garlicky
        toast, press lightly when rubbing.)',
        'Place toasts on a platter or individual plates. Spoon and spread a heaping tablespoon of tomato purée over each toast. Then arrange tomato slices and cherry tomatoes randomly on top.',
        'Sprinkle generously with salt, pepper and a tablespoon of extra-virgin olive oil per toast. Garnish with whole or torn basil leaves, if using.'],
      tags: ['side', 'appetizer']
    )

    Recipe.create!(
      name: 'Horchata',
      author: 'Kiera Wright-Ruiz',
      blurb: "Horchata is a Latin American beverage that’s made by soaking nuts and grains in water then seasoning the mixture with sugar and spices. The drink originated in Spain
      over 1,000 years ago, but many countries have their own regional variations. This is an adaptation of a Mexican version, also known as agua de horchata, that’s made with rice,
      sugar, cinnamon and almonds, which provide rich flavor and texture, but leave them out if you like. Serve horchata over ice alongside a plate of spicy food — or try this dirty
      horchata recipe for a caffeine kick.",
      yield: '8 servings',
      ingredients: ['2 cups uncooked long-grain white rice',
        '1 cup whole raw, unsalted almonds (optional)',
        '1 cup granulated sugar',
        '1 tablespoon ground cinnamon, plus more to taste'],
      cook_time: "15 minutes, plus overnight soaking",
      preparation: ['Put the rice, almonds (if using) and 8 cups water into a large pitcher or bowl. Cover container and let soak overnight (at least 8 hours) at room temperature.',
        'Remove 4 cups liquid from the rice and almonds; reserve. Transfer the remaining liquid, rice and almonds to a blender, and blend, in batches if necessary, until solids are
        finely ground, 2 to 3 minutes.',
        'Place a fine-mesh strainer over a large bowl and pour the ground rice and almond mixture into the strainer. Use a spoon to press the solids to extract as much liquid as
        possible. (You could also strain the liquid through a cheesecloth if you want your horchata to be extra smooth.) Discard the solids. Transfer the strained liquid to a large
        pitcher (or keep it in the bowl) and mix in the reserved 4 cups liquid from Step 2.',
        'Add sugar and cinnamon, and stir well. Serve over ice and dust with ground cinnamon, if desired.'],
      tags: ['drinks']
    )

    Recipe.create!(
      name: 'Orange-Almond Mandelbrot',
      author: 'Joan Nathan',
      blurb: "Mandelbrot (or mandel bread) is an Eastern European Jewish cookie, a variation on biscotti. The dough is baked twice: first in a log, and then again after it's been
      sliced into cookies. This recipe includes the smart trick of freezing the dough after baking it the first time, then cutting it into slices when still frozen before baking again.
      This makes for a thinner slice, fewer crumbs when cutting and a crispier texture. You can make it with matzo cake meal during Passover — a delicious variation.",
      yield: 'About 30 cookies',
      ingredients: ['2 cups plus 1 tablespoon/264 grams all-purpose flour or 1½ cups/204 grams matzo cake meal',
        '½ cup/85 grams potato starch',
        '½ cup/55 grams almond flour',
        '1½ teaspoons cinnamon',
        '½ teaspoon sea salt',
        '1¼ cups/250 grams granulated sugar',
        '12 tablespoons/169 grams/1½ sticks unsalted butter or coconut oil, at room temperature',
        '3 large eggs',
        '1 cup/126 grams slivered almonds',
        '½ teaspoon vanilla',
        'Zest of 2 oranges'],
      cook_time: "1¼ hours, plus chilling",
      preparation: ['In a large bowl, mix flour or matzo cake meal, potato starch, almond flour, ½ teaspoon cinnamon and the salt.',
        'In the bowl of a stand mixer fitted with the paddle attachment, cream 1 cup/200 grams sugar and the butter or coconut oil. Add eggs, one at a time, mixing well after each
        addition. Stir in flour or matzo mixture, almonds, vanilla and orange zest.',
        'Place half the dough on a piece of parchment paper about 20 inches long. Use parchment paper to help mold the dough into a log about 10 inches long and 2 inches in diameter.
        (The dough is very soft and may be hard to worth with.) Gently press down along the top of the log to flatten it slightly. Twist ends of the parchment paper to seal. Repeat with
        the remaining dough. Refrigerate both logs for at least 1 hour.',
        "Heat oven to 350 degrees and line a baking sheet with parchment paper. Unwrap dough logs and put on the prepared baking sheet, side by side. Bake logs for 35 to 45 minutes, until
        just beginning to brown. The dough should not be too cracked on the top. It is better to underbake than overbake.",
        'Let logs cool, wrap in plastic and freeze until you are ready to finish them, or for at least 1 hour.',
        'Heat oven to 350 degrees and line 2 baking sheets with parchment paper. Mix remaining 1 teaspoon cinnamon and ¼ cup/50 grams sugar in a small bowl and set aside.',
        'Remove logs from freezer. With a sharp, serrated knife, cut the logs into roughly ½-inch-thick slices, discarding the end slices if they fall apart. (If the logs have been in
        the freezer for several hours, let them sit at room temperature for a few minutes before slicing.)',
        'Dip both sides of each slice in the cinnamon-sugar mixture and place them flat on prepared baking sheets. Bake for 10 to 15 minutes, carefully turn slices over, then bake another
        10 minutes, or until golden brown and starting to crisp.'],
      tags: ['dessert']
    )

    puts "Reviewing recipes..."
    Note.create!(
      body: "A great flavor of mandelbread! I think mine is the best, of course, and of course my recipes comes from the back of an old notecard that my grandmother gave me.",
      name: "Mandel",
      user_id: 2,
      recipe_id: 21
    )

    Note.create!(
      body: "Corn starch or tapioca starch should work but the amount will probably need to be increased by about 1/3.",
      name: "Brot",
      user_id: 4,
      recipe_id: 21
    )

    Note.create!(
      body: "I liked the addition of the almonds and double-strained the mixture. But, rather than discarding the solids, I fed it to my chickens, who also give rave reviews!",
      name: "Horace",
      user_id: 2,
      recipe_id: 20
    )

    Note.create!(
      body: "Horchata is delicious in coffee-- Try equal parts horchata and cold-brew coffee on ice.",
      name: "Chatty",
      user_id: 3,
      recipe_id: 20
    )

    Note.create!(
      body: "Horchata good, with about half the sugar called for, and just a sprinkling of cinnamon. And, rather than throw away the ground rice and almonds, I thought I'd try making
      appams (Indian rice pancakes) with it. It worked! Although the almonds made the appams more fragile, they are delicious.",
      name: "Sugar",
      user_id: 3,
      recipe_id: 20
    )

    Note.create!(
      body: "Absolute perfection.",
      name: "Julia",
      user_id: 2,
      recipe_id: 19
    )

    Note.create!(
      body: "This is the quintessential Spanish breakfast, and it simply cannot be improved upon. It's simple, satisfying, savory. With a cafe con leche, perfecto.",
      name: "Pan",
      user_id: 2,
      recipe_id: 19
    )

    Note.create!(
      body: "If it's in Barcelona, it's pa amb tomàquet in Catalan.",
      name: "Cat",
      user_id: 3,
      recipe_id: 19
    )

    Note.create!(
      body: "We live in Barcelona and, while this recipe photo is beautiful, it's definitely not what Catalan tomato bread (pa amb tomàquet) ever looks like. Tomatoes
      here are always halved and rubbed directly onto the bread, and the result is light and delicious. Also, I've never seen basil used here with tomato bread.
      That seems much more like Italian bruschetta.",
      name: "Barthelona",
      user_id: 4,
      recipe_id: 19
    )

    Note.create!(
      body: "I learned to make tortilla espanola from a woman in NW Spain and use about 4-6 Tablespoon oil for this size recipe..cooking the potatoes and onions (no bell pepper) slowly
      over medium to medium low heat until soft and not browned. Then continuing with the eggs. There is no need to drain oil.",
      name: "Span Ish",
      user_id: 3,
      recipe_id: 18
    )

    Note.create!(
      body: "Everyone is a critique! I appreciated the recipe and was glad to cook it. It helps to have an open mind. I am sure that everyone's tias and mamas made it differently, but
      they probably also made it a little differently every time. Thank you very much for the recipe! I had as much fun making it as I did eating it.",
      name: "Espie",
      user_id: 3,
      recipe_id: 18
    )

    Note.create!(
      body: "I love the recipes on this site, but this one is really really bad. You don't put peppers or garlic in a Tortilla Española.",
      name: "Torry",
      user_id: 2,
      recipe_id: 18
    )

    Note.create!(
      body: "Garlic? Peppers? Please. No! One pan. Cook potatoes and Onion gently in gererous olive oil but no draining. Salt. No pepper. Eggs. Flip. Done.",
      name: "Olive",
      user_id: 2,
      recipe_id: 18
    )

    Note.create!(
      body: "I have the original recipe from La Vina restaurant in San Sebastian that was used as the inspiration for this recipe. No idea where I got it from but it uses a 6 inch
        pan (I use a Fat Daddio) and it's amazing. It's also super quick to make. It fits in our toaster oven.",
      name: "Joseph",
      user_id: 4,
      recipe_id: 17
    )

    Note.create!(
      body: "Another trick to make parchment paper pliable is to wrinkle it up into a tight ball so that it has lots of creases. It's equivalent to wetting and wringing it out,
      without having to dry it off.",
      name: "Che Iescake",
      user_id: 4,
      recipe_id: 17
    )

    Note.create!(
      body: "Your illustration shows light bands of crust between the golden dark patches of crust. This comes from the rising in the oven revealing surfaces that had no egg wash.
        If you want that uniform brown crust, remove the loaf after 15 Minutes in the oven and reapply eggwash to the light areas that have appeared.",
      name: "Holla",
      user_id: 4,
      recipe_id: 16
    )

    Note.create!(
      body: "Here's my trick for making what looks like a 6-braid challah, only much easier. Use 2/3 of the dough to make a large 3-braid loaf, and the remaining 1/3 to make a smaller
      one. Brush them both with your egg wash and then place the smaller one atop the larger.",
      name: "Breadward",
      user_id: 4,
      recipe_id: 16
    )

    Note.create!(
      body: "I agree that Honey makes for a better Challah, and since you offered this for the High Holy Days, adding some 1/2 C plump golden raisins is both delicious and a nod to the 'sweetness' for the new year.",
      name: "Dough",
      user_id: 4,
      recipe_id: 16
    )

    Note.create!(
      body: "This peanut butter cookie recipe is a must-try for any cookie lover. The cookies turn out soft and chewy with a rich peanut butter flavor that's simply irresistible.
        The ingredients are simple, and the instructions are easy to follow, making it a great choice for both novice and experienced bakers. With the perfect balance of sweetness and
        nuttiness, these cookies are a delightful treat for any occasion. They're sure to disappear quickly, so be ready to bake another batch!",
      name: "Pea",
      user_id: 4,
      recipe_id: 15
    )

    Note.create!(
      body: "These peanut butter cookies are the real peanut deal! They're so good, they could turn a peanut skeptic into a fan. With each bite, you'll be dancing like a nutcracker in
        peanutty ecstasy. Just don't blame me when you find yourself hiding the batch from cookie-loving spies!",
      name: "Nut",
      user_id: 5,
      recipe_id: 15
    )

    Note.create!(
      body: "Chocolate babka or bust! I didn't eat that cookie for nothing!",
      name: "Jerry",
      user_id: 4,
      recipe_id: 1
    )

    Note.create!(
      body: "Even George doesn't like cinnamon, who does?",
      name: "Elaine",
      user_id: 5,
      recipe_id: 1
    )

    Note.create!(
      body: "I recently embarked on a culinary expedition of epic proportions: the quest for the perfect
        hard-boiled egg. Armed with nothing but a pot of water, some eggs, and a slightly overinflated sense
        of confidence, I dove headfirst into this daring culinary adventure. With this recipe, in the end,
        my quest for the perfect hard-boiled egg was a success, and it left me with a newfound appreciation
        for these humble kitchen heroes. So, if you're ever in need of a little adventure in your cooking
        life, try your hand at hard-boiling eggs. Who knows, you might just find yourself on an egg-citing
        journey that's egg-sactly what you needed. Egg-cellent!",
      name: "Shelly",
      user_id: 3,
      recipe_id: 2
    )

    Note.create!(
      body: "This hard-boiled egg recipe is a game-changer! It's simple, reliable, and delivers fantastic
        results. Fresh eggs, a quick boil, and an ice bath give you perfect yolks every time. The process
        is easy to follow, making it ideal for beginners. However, peeling the eggs can be a tad tricky, so
        a dash of vinegar in the boiling water might help. The eggs come out tender and delicious, great for
        snacking or adding to salads. A quick fix for your protein needs, this recipe is a kitchen essential,
        although a bit of trial and error may be required for flawless peeling.",
      name: "Yolko",
      user_id: 2,
      recipe_id: 2
    )

    Note.create!(
      body: "I recently tried this latke recipe, and it's nothing short of perfection! These latkes are a delightful
        blend of crispy and tender, just like the ones grandma used to make. The recipe's step-by-step instructions
        are easy to follow, making it accessible for cooks of all skill levels.",
      name: "Spud",
      user_id: 2,
      recipe_id: 3
    )

    Note.create!(
      body: "This latke recipe is a crispy delight! The golden-brown potato pancakes are perfectly seasoned, and the
        texture is wonderfully crunchy on the outside and tender on the inside. Easy to make and utterly delicious – a favorite for sure!",
      name: "Tater",
      user_id: 2,
      recipe_id: 3
    )

    Note.create!(
      body: "Pomme, maybe it was user error...",
      name: "Poe",
      user_id: 2,
      recipe_id: 3
    )

    Note.create!(
      body: "I can't even begin to describe the disaster that is this latke recipe! It's a culinary catastrophe. The latkes were a greasy,
        burnt mess, and the taste was nothing short of cardboard. The instructions were vague, and I ended up with a kitchen filled with smoke.
        I'd rather eat a shoe than attempt this recipe again. Save yourself the frustration and look elsewhere for a decent latke recipe.",
      name: "Pomme de terre",
      user_id: 2,
      recipe_id: 3
    )

    Note.create!(
      body: "Not only is this Shakshuka recipe a joy to eat, but it's also a wonderful dish to serve when you have guests
        over. It's a conversation starter, and the aroma alone will have your kitchen smelling divine.",
      name: "Tom Ato",
      user_id: 4,
      recipe_id: 4
    )

    Note.create!(
      body: "This shakshuka recipe is an absolute winner! The combination of tomatoes, spices, and perfectly poached eggs creates a
        delightful symphony of flavors. It's a breeze to make, and the aroma while cooking is pure bliss. The sauce has just the right
        balance of heat and tanginess, making every bite a culinary adventure. The addition of crusty bread for dipping is a stroke of genius.
        This dish is not only delicious but also visually appealing. It's a crowd-pleaser and has become a staple in my breakfast repertoire. Highly recommended!",
      name: "Fet Acheess",
      user_id: 4,
      recipe_id: 4
    )

    Note.create!(
      body: "I regret attempting this shakshuka recipe. The end result was far from what I expected. The tomato sauce turned out overly watery, and the spices were
        overpowering, making it practically inedible. The recipe instructions lacked clarity, and I struggled with the poaching process, leaving me with messy,
        overcooked eggs. This shakshuka was a disappointment and didn't live up to its reputation. I won't be making it again and would advise anyone looking for a
        delicious shakshuka experience to explore alternative recipes.",
      name: "Ick",
      user_id: 4,
      recipe_id: 4
    )

    Note.create!(
      body: "This kugel recipe is a true comfort food classic. With its simple yet satisfying blend of egg noodles, creamy
        custard, and a touch of cinnamon and sugar, it's the ultimate dish for those seeking a cozy, nostalgia-infused meal.
        The sweet and creamy notes of this kugel evoke memories of family gatherings and holiday celebrations. Easy to prepare
         and endlessly delicious, this kugel recipe is a warm embrace on a plate, perfect for any occasion.",
      name: "N. Oodle",
      user_id: 5,
      recipe_id: 5
    )

    Note.create!(
      body: "This potato kugel recipe is a delightful culinary experience. Crispy edges, tender inside, and a perfect blend of savory flavors.
        It's a comforting dish that will leave you craving more. A must-try for any potato lover!",
      name: "Cassie",
      user_id: 5,
      recipe_id: 5
    )
    Note.create!(
      body: "This kugel recipe is a true comfort food classic. With its simple yet satisfying blend of egg noodles, creamy
        custard, and a touch of cinnamon and sugar, it's the ultimate dish for those seeking a cozy, nostalgia-infused meal.
        The sweet and creamy notes of this kugel evoke memories of family gatherings and holiday celebrations. Easy to prepare
         and endlessly delicious, this kugel recipe is a warm embrace on a plate, perfect for any occasion.",
      name: "N. Oodle",
      user_id: 5,
      recipe_id: 5
    )

    Note.create!(
      body: "Combining the traditional elements of matzah and eggs, it offers a canvas for culinary creativity. Whether you
        prefer it savory with onions and herbs or sweet with a sprinkle of cinnamon and maple syrup, the texture strikes
        the perfect balance between crispy and tender.",
      name: "Motti",
      user_id: 5,
      recipe_id: 6
    )

    Note.create!(
      body: "Back when I was a kid, we just dunked matzah into eggs and threw them on a skillet. This generation and their
        silly recipes for things that we just knew how to make back in my day! Also, sweet brei? Only in this century.",
      name: "Grandma Tza",
      user_id: 5,
      recipe_id: 6
    )

    Note.create!(
      body: "Awww this reminds me of what my dad would make for us every morning when we had leftover matzah! Thanks or sharing!",
      name: "Breille",
      user_id: 4,
      recipe_id: 6
    )

    Note.create!(
      body: "Team dense matzah balls over here!",
      name: "Matt Ztebol",
      user_id: 5,
      recipe_id: 7
    )

    Note.create!(
      body: "This matzo ball soup recipe is pure comfort in a bowl. The fluffy matzo balls are perfectly seasoned and absorb the
        rich, flavorful broth. It's a classic, heartwarming dish that never disappoints. Whether you're feeling under the weather or
        simply craving a taste of home, this recipe is a winner.",
      name: "Anonymous",
      user_id: 5,
      recipe_id: 7
    )

    Note.create!(
      body: "This matzo ball soup recipe is a culinary hug in a bowl. The matzo balls are light and fluffy, while the broth
        is rich and soothing. The blend of herbs and tender chicken adds depth to each comforting spoonful. Perfect for both
        chilly evenings and soul-soothing moments. A timeless classic!",
      name: "Atza",
      user_id: 5,
      recipe_id: 7
    )

    Note.create!(
      body: "Horseraddish on brisket? Not sure about this one, Melissa.",
      name: "Bree Skit",
      user_id: 3,
      recipe_id: 8
    )

    Note.create!(
      body: "No, MY mom makes the best brisket!",
      name: "Anyonymous",
      user_id: 3,
      recipe_id: 8
    )

    Note.create!(
      body: "No way, MY MOM does!",
      name: "Meital",
      user_id: 4,
      recipe_id: 8
    )

    Note.create!(
      body: "Melissa Clark, I love you, but there is no way that this is the beat-all brisket recipe, because MY mom makes the best brisket!
        And it doesn't even require all these nonsense ingredients! Just cocktail sauce and French onion soup mix!",
      name: "Julia",
      user_id: 2,
      recipe_id: 8
    )

    Note.create!(
      body: "This tsimmes recipe is a sweet and savory masterpiece. The harmonious blend of potatoes, carrots, prunes, and tender meat is a culinary delight.",
      name: "Timmy",
      user_id: 2,
      recipe_id: 9
    )

    Note.create!(
      body: "The correct pronunciation for tsimmess begins with ts sound as in tse-the fly. Thanks for bringing back a great idea!",
      name: "Gram",
      user_id: 2,
      recipe_id: 9
    )

    Note.create!(
      body: "Tsimmes, a magic trick: It turns vegetables into sweet-tooth superheroes! This recipe, however, makes it a culinary caper, where prunes
        are the sidekicks. A sweet and savory adventure that'll have your taste buds exclaiming, 'Man, that's good!'",
      name: "Stewart",
      user_id: 2,
      recipe_id: 9
    )

    Note.create!(
      body: "Almost the recipe my mother and I have used for years. Can't stress enough the importance to the flavor beef bones impart and a variety of dried fruits.
        I use dried apricots as well as prunes. When I stopped eating bovine I switched to using chicken with great results. Then I tried it using fresh fish. The more
        delicate white flesh fish disintegrated but the larger, darker sturdier fish were delicious! Now I use smoked fish for a new twist on the flavor.",
      name: "Beryl",
      user_id: 2,
      recipe_id: 9
    )

    Note.create!(
      body: "This is literally the only way that I can get my toddler to each vegetables, in cake form. It's still nutritionally a vegetable, though...right?",
      name: "Carrie",
      user_id: 2,
      recipe_id: 10
    )

    Note.create!(
      body: "This carrot ring cake recipe is a true revelation for dessert enthusiasts. The cake boasts a moist, tender crumb infused with the natural sweetness of
        grated carrots, complemented by warm spices. The charming ring shape adds a touch of elegance, making it ideal for special occasions or
        everyday indulgence. I recommend cream cheese frosting drizzled over the top that strikes a perfect balance of tangy and sweet, enhancing the cake's allure. It's a delightful
        symphony of flavors and textures, and the visual appeal is simply stunning. Whether you're a fan of carrot-based sweets or new to them, this recipe is a must-try delight!",
      name: "Aro",
      user_id: 2,
      recipe_id: 10
    )

    Note.create!(
      body: "I cannot even keep this in my house, because when I make it, it strangely disappears within 24 hours and all that's left is an empty container.",
      name: "Kramer",
      user_id: 2,
      recipe_id: 11
    )

    Note.create!(
      body: "Highly recommend adding an assortment of nuts as toppings! Sometimes my family also drizzles melted peanut butter on top and it's a huge hit.",
      name: "Matt",
      user_id: 2,
      recipe_id: 11
    )

    Note.create!(
      body: "Why no one actually makes this year round is a mystery to me, because this is one of the best desserts out there. It even beats the non-matzah version!",
      name: "Pa Sofer",
      user_id: 2,
      recipe_id: 11
    )

    Note.create!(
      body: "I don't usually love cooked carrots, but this recipe is simple and a winner. Alison does it again!",
      name: "Carl",
      user_id: 2,
      recipe_id: 12
    )

    Note.create!(
      body: "Who knew that cooked carrots could be the stars of the culinary show? This recipe turned those orange veggies into divas of deliciousness. They were so good;
      I'm thinking of starting a 'Carrot Cooking Competition.' Move over, MasterChef – it's all about CarrotConnoisseurs now!",
      name: "Carrot lover",
      user_id: 2,
      recipe_id: 12
    )

    Note.create!(
      body: 'I just have to try any recipe that warns, "The batter will begin to foam and emit a curious odor."',
      name: "Fyodor",
      user_id: 2,
      recipe_id: 13
    )

    Note.create!(
      body: 'While you are busy cooking this, have your family read equally laborious Russian novels to keep themselves busy!',
      name: "Anna",
      user_id: 2,
      recipe_id: 13
    )

    Note.create!(
      body: 'My mother-in-law Olga Ivanoff, baked the ultimate American version of this cake. No honey, but layers of pancakes made from a
        pancake mix with something like Cool-whip in the layers and grated chocolate on top and in the layers. Yay for the processed food industry!!',
      name: "Alyosha",
      user_id: 2,
      recipe_id: 13
    )

    Note.create!(
      body: "This recipe is really good for people who don't like traditional noodle kugel — ESPECIALLY for those who prefer something savory over the more common sweet dish!",
      name: "Po",
      user_id: 2,
      recipe_id: 14
    )

    Note.create!(
      body: "I made this kugel this past weekend and it was wonderful. The recipe is very similar to making latkes, except that there's no need to squeeze excess water out of the
        potatoes. Although it looks really runny when filling your dish for baking, it comes out creamy in the center and crispy on top. I did alternate grating potatoes and onions
        in the cuisinart, the onions help prevent discoloration of the potatoes.",
      name: "Tate",
      user_id: 2,
      recipe_id: 14
    )

    puts "Saving recipes to Recipe Boxes..."
    SavedRecipe.create!(
      user_id: 1,
      recipe_id: 1
    )

    SavedRecipe.create!(
      user_id: 1,
      recipe_id: 2
    )

    SavedRecipe.create!(
      user_id: 1,
      recipe_id: 3
    )

    SavedRecipe.create!(
      user_id: 1,
      recipe_id: 4
    )

    SavedRecipe.create!(
      user_id: 1,
      recipe_id: 5
    )

    SavedRecipe.create!(
      user_id: 1,
      recipe_id: 7
    )

    SavedRecipe.create!(
      user_id: 1,
      recipe_id: 9
    )

    puts "Rating recipes..."
    Rating.create!(
      user_id: 1,
      recipe_id: 1,
      score: 2
    )

    Rating.create!(
      user_id: 2,
      recipe_id: 1,
      score: 4
    )

    Rating.create!(
      user_id: 3,
      recipe_id: 1,
      score: 4
    )

    Rating.create!(
      user_id: 4,
      recipe_id: 1,
      score: 5
    )

    Rating.create!(
      user_id: 5,
      recipe_id: 1,
      score: 2
    )

    Rating.create!(
      user_id: 2,
      recipe_id: 2,
      score: 3
    )
    Rating.create!(
      user_id: 2,
      recipe_id: 2,
      score: 3
    )
    Rating.create!(
      user_id: 2,
      recipe_id: 2,
      score: 4
    )

    Rating.create!(
      user_id: 2,
      recipe_id: 3,
      score: 4
    )

    Rating.create!(
      user_id: 2,
      recipe_id: 3,
      score: 4
    )

    Rating.create!(
      user_id: 2,
      recipe_id: 3,
      score: 3
    )

    Rating.create!(
      user_id: 2,
      recipe_id: 3,
      score: 5
    )

    Rating.create!(
      user_id: 2,
      recipe_id: 3,
      score: 3
    )

    Rating.create!(
      user_id: 2,
      recipe_id: 4,
      score: 5
    )

    Rating.create!(
      user_id: 2,
      recipe_id: 4,
      score: 4
    )

    Rating.create!(
      user_id: 2,
      recipe_id: 4,
      score: 4
    )

    Rating.create!(
      user_id: 2,
      recipe_id: 5,
      score: 3
    )

    Rating.create!(
      user_id: 2,
      recipe_id: 5,
      score: 5
    )

    Rating.create!(
      user_id: 2,
      recipe_id: 6,
      score: 3
    )

    Rating.create!(
      user_id: 2,
      recipe_id: 6,
      score: 1
    )

    Rating.create!(
      user_id: 2,
      recipe_id: 6,
      score: 5
    )

    Rating.create!(
      user_id: 3,
      recipe_id: 6,
      score: 3
    )

    Rating.create!(
      user_id: 3,
      recipe_id: 6,
      score: 4
    )

    Rating.create!(
      user_id: 2,
      recipe_id: 7,
      score: 2
    )

    Rating.create!(
      user_id: 3,
      recipe_id: 8,
      score: 5
    )

    Rating.create!(
      user_id: 4,
      recipe_id: 8,
      score: 4
    )

    Rating.create!(
      user_id: 5,
      recipe_id: 9,
      score: 4
    )

    Rating.create!(
      user_id: 4,
      recipe_id: 9,
      score: 3
    )

    Rating.create!(
      user_id: 2,
      recipe_id: 9,
      score: 4
    )

    Rating.create!(
      user_id: 3,
      recipe_id: 9,
      score: 5
    )

    Rating.create!(
      user_id: 4,
      recipe_id: 10,
      score:
       3
    )
    Rating.create!(
      user_id: 5,
      recipe_id: 10,
      score: 5
    )

    Rating.create!(
      user_id: 2,
      recipe_id: 11,
      score: 4
    )

    Rating.create!(
      user_id: 3,
      recipe_id: 11,
      score: 2
    )

    Rating.create!(
      user_id: 2,
      recipe_id: 11,
      score: 5
    )

    Rating.create!(
      user_id: 3,
      recipe_id: 11,
      score: 5
    )

    Rating.create!(
      user_id: 2,
      recipe_id: 11,
      score: 4
    )

    Rating.create!(
      user_id: 3,
      recipe_id: 11,
      score: 5
    )

    Rating.create!(
      user_id: 4,
      recipe_id: 12,
      score: 5
    )

    Rating.create!(
      user_id: 4,
      recipe_id: 12,
      score: 3
    )

    Rating.create!(
      user_id: 5,
      recipe_id: 13,
      score: 3
    )

    Rating.create!(
      user_id: 4,
      recipe_id: 13,
      score: 1
    )

    Rating.create!(
      user_id: 3,
      recipe_id: 14,
      score: 4
    )

    Rating.create!(
      user_id: 2,
      recipe_id: 14,
      score: 5
    )

    Rating.create!(
      user_id: 2,
      recipe_id: 14,
      score: 3
    )

    Rating.create!(
      user_id: 2,
      recipe_id: 15,
      score: 5
    )

    Rating.create!(
      user_id: 3,
      recipe_id: 15,
      score: 4
    )

    Rating.create!(
      user_id: 4,
      recipe_id: 15,
      score: 4
    )

    Rating.create!(
      user_id: 5,
      recipe_id: 15,
      score: 5
    )

    Rating.create!(
      user_id: 3,
      recipe_id: 16,
      score: 4
    )

    Rating.create!(
      user_id: 2,
      recipe_id: 16,
      score: 4
    )

    Rating.create!(
      user_id: 4,
      recipe_id: 17,
      score: 4
    )

    Rating.create!(
      user_id: 3,
      recipe_id: 17,
      score: 5
    )

    Rating.create!(
      user_id: 5,
      recipe_id: 17,
      score: 3
    )

    Rating.create!(
      user_id: 4,
      recipe_id: 17,
      score: 5
    )

    Rating.create!(
      user_id: 4,
      recipe_id: 18,
      score: 5
    )

    Rating.create!(
      user_id: 2,
      recipe_id: 18,
      score: 4
    )

    Rating.create!(
      user_id: 3,
      recipe_id: 18,
      score: 4
    )

    Rating.create!(
      user_id: 5,
      recipe_id: 19,
      score: 5
    )

    Rating.create!(
      user_id: 4,
      recipe_id: 19,
      score: 5
    )

    Rating.create!(
      user_id: 4,
      recipe_id: 19,
      score: 5
    )

    Rating.create!(
      user_id: 2,
      recipe_id: 19,
      score: 5
    )

    Rating.create!(
      user_id: 1,
      recipe_id: 19,
      score: 5
    )

    Rating.create!(
      user_id: 2,
      recipe_id: 20,
      score: 4
    )

    Rating.create!(
      user_id: 2,
      recipe_id: 21,
      score: 4
    )

    Rating.create!(
      user_id: 3,
      recipe_id: 21,
      score: 5
    )

    Rating.create!(
      user_id: 4,
      recipe_id: 21,
      score: 5
    )
  end

  puts "Attaching images to recipes..."
  Recipe.all.each_with_index do |recipe, index|
    recipe.photo.attach(
      io: URI.open("https://nytnoshing-seeds.s3.us-west-1.amazonaws.com/nytnoshing-#{index}.jpg"),
      filename: "nytnoshing-#{index}.jpg"
    )
  end

  puts "Done!"
