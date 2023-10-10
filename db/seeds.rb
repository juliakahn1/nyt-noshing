# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do
    puts "Destroying tables..."
    User.destroy_all
    Recipe.destroy_all

    puts "Resetting primary keys..."
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('recipes')


    puts "Creating users..."
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
      name: 'Perfect Boiled Eggs',
      author: 'J. Kenji López-Alt',
      blurb: 'If your goal is perfectly smooth, blemish-free boiled eggs that jump out of their shells every single time, I’ve got bad news: No technique in the world can promise that level of perfection.
        But armed with data from scientific tests done with more than 90 testers and more than 700 boiled eggs, this technique for boiled eggs — technically steamed, as they cook in just an inch of water —
        will maximize your odds. Fresher eggs will take slightly longer to peel, but they should peel just as cleanly as older eggs. The eggs in this recipe should be cooked straight from the refrigerator;
        reduce cooking times by 1 minute if using room-temperature eggs.',
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
      cook_time: '50 minutes',
      preparation: ['Heat oven to 375 degrees. Heat oil in a large skillet over medium-low. Add onion and bell pepper. Cook gently until very soft, about 20 minutes. Add garlic and cook until tender, 1 to 2 minutes; stir in cumin, paprika and cayenne, and cook 1 minute. Pour in tomatoes and season with ¾ teaspoon salt and ¼ teaspoon pepper; simmer until tomatoes have thickened, about 10 minutes. Taste and add more salt and pepper if needed. Stir in crumbled feta.',
       'Gently crack eggs into skillet over tomatoes. Season eggs with salt and pepper. Transfer skillet to oven and bake until eggs are just set, 7 to 10 minutes. Sprinkle with cilantro and serve with hot sauce.'],
      tags: ['breakfast']
    )

    puts "Done!"
  end
