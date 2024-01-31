const petsData = [
  {
    Type: "Dog",
    ImageUrl:
      "https://coatsandcolors.com/wp-content/uploads/2023/09/Beagle-coat-colors-_-black-red-white.jpg",
    Name: "Baxter",
    Breed: "Beagle",
    Sex: "Male",
    Color: "Tri-color (Black, Brown, White)",
    SpayedNeutered: "Yes",
    Age: "5",
    AnimalID: "34621",
    MicrochipNumber: "982000364789210",
    Summary:
      "Health checked. Vacciantions up to date. Regularaly dewormed. Microchipped",
    Biography:
      "Meet Baxter, a lovable Beagle with a knack for sniffing out fun! Baxter was rescued from a shelter and has blossomed into a friendly and outgoing boy. He loves long walks and has a keen sense of smell. He's great with kids and other dogs, making him the perfect family pet. His favorite pastime is chasing squirrels in the park and curling up for naps. Baxter is looking for a loving home where he can share his endless affection and playful spirit.",
  },
  {
    Type: "Cat",
    ImageUrl:
      "https://animalcarevets.com/wp-content/uploads/2022/05/The-Maine-Coon.jpg",
    Name: "Luna",
    Breed: "Maine Coon",
    Sex: "Female",
    Color: "Grey with white markings",
    SpayedNeutered: "Yes",
    Age: "3",
    AnimalID: "57281",
    MicrochipNumber: "981120019776432",
    Summary:
      "Health checked. Vacciantions up to date. Regularaly dewormed. Microchipped",
    Biography:
      "Luna is a majestic Maine Coon with a fluffy grey coat and striking white markings. She was found as a stray and has since become a gentle and affectionate companion. Luna enjoys perching on windowsills, watching birds, and being the center of attention. She's a bit shy at first but warms up quickly, especially if you have treats! Luna would thrive in a calm environment where she can relax and be pampered like the queen she is.",
  },
  {
    Type: "Dog",
    ImageUrl:
      "https://www.vidavetcare.com/wp-content/uploads/sites/234/2022/04/golden-retriever-dog-breed-info.jpeg",
    Name: "Sandy",
    Breed: "Golden Retriever",
    Sex: "Female",
    Color: "Golden",
    SpayedNeutered: "Yes",
    Age: "7",
    AnimalID: "41382",
    MicrochipNumber: "985112004567890",
    Summary:
      "Health checked. Vacciantions up to date. Regularaly dewormed. Microchipped",
    Biography:
      "Sandy is a heartwarming Golden Retriever with a golden coat as bright as her personality. Rescued from a neglectful situation, she has shown incredible resilience and love for life. Sandy is great with children and other pets, making her an ideal family dog. She enjoys outdoor adventures, especially swimming and fetching. Sandy is looking for a forever home where she can spread her joy and love.",
  },
  {
    Type: "Cat",
    ImageUrl:
      "https://www.catster.com/wp-content/uploads/2023/11/seal-point-siamese-cat.jpg",
    Name: "Oliver",
    Breed: "Siamese",
    Sex: "Male",
    Color: "Seal Point",
    SpayedNeutered: "Yes",
    Age: "2",
    AnimalID: "62894",
    MicrochipNumber: "981120025678902",
    Summary:
      "Health checked. Vacciantions up to date. Regularaly dewormed. Microchipped",
    Biography:
      "Oliver is a sleek Siamese cat with striking blue eyes and a seal point coat. Found wandering in a neighborhood, he's adapted well to shelter life but is eager for a permanent home. Oliver is vocal, expressing his thoughts freely, and enjoys interactive playtime. He's affectionate and loves to be close to his human companions, often following them around the house. Oliver would do best in a home where he can receive plenty of attention and love.",
  },
  {
    Type: "Dog",
    ImageUrl:
      "https://www.thelabradorsite.com/wp-content/uploads/2023/05/rachael3-1.jpg",
    Name: "Max",
    Breed: "Labrador Retriever",
    Sex: "Male",
    Color: "Chocolate",
    SpayedNeutered: "Yes",
    Age: "4",
    AnimalID: "47920",
    MicrochipNumber: "985120031478902",
    Summary:
      "Health checked. Vacciantions up to date. Regularaly dewormed. Microchipped",
    Biography:
      "Max is a charming Chocolate Labrador with a love for life and a tail that never stops wagging. Rescued from an overcrowded shelter, Max has shown immense gratitude and loyalty to his caregivers. He is full of energy and would thrive in a home with a backyard or regular access to outdoor activities. Max is great with children and other dogs, and he's always up for a game of fetch or a leisurely walk. His ideal home would be with an active family who can match his energy and zest for life.",
  },
  {
    Type: "Cat",
    ImageUrl:
      "https://www.dutch.com/cdn/shop/articles/shutterstock_538333303.jpg?v=1683242960",
    Name: "Daisy",
    Breed: "Persian",
    Sex: "Female",
    Color: "White",
    SpayedNeutered: "Yes",
    Age: "6",
    AnimalID: "58329",
    MicrochipNumber: "981120036712345",
    Summary:
      "Health checked. Vacciantions up to date. Regularaly dewormed. Microchipped",
    Biography:
      "Daisy is a stunning white Persian cat with a luxurious coat and gentle demeanor. She was surrendered by an owner who could no longer care for her. Daisy is a bit of a diva and loves being the center of attention. She enjoys being groomed and will happily sit in your lap for hours. She's not fond of loud noises or fast movements, so a quiet and calm household would be ideal. Daisy is looking for a loving home where she can be pampered and adored.",
  },
  {
    Type: "Dog",
    ImageUrl:
      "https://i.pinimg.com/736x/b0/a9/86/b0a986f7cd095f1e87086bea9645ebf8.jpg",
    Name: "Charlie",
    Breed: "Dachshund",
    Sex: "Male",
    Color: "Dapple (Black and Gray)",
    SpayedNeutered: "Yes",
    Age: "3",
    AnimalID: "49583",
    MicrochipNumber: "982000367829101",
    Summary:
      "Health checked. Vacciantions up to date. Regularaly dewormed. Microchipped",
    Biography:
      "Charlie is a spirited Dapple Dachshund with a playful personality. He was found as a stray and has since shown an incredible zest for life. Charlie loves exploring, whether it's a new trail or the corners of his home. He's a bit mischievous and enjoys hiding his toys. Charlie would do well in a home with an individual or family who enjoys fun and adventure. He's small but has a big heart and a lot of love to give.",
  },
  {
    Type: "Cat",
    ImageUrl:
      "https://cdn.discordapp.com/attachments/940349770436849727/1202297535147020341/chesterfield.jpg?ex=65ccf1d5&is=65ba7cd5&hm=8e909908231cd56879c6be1d3c1a8edc0f1c2bfa5d6ea35470793e8bef441d28&",
    Name: "Chester",
    Breed: "British Shorthair",
    Sex: "Male",
    Color: "Tri-color (White, Black, Brown)",
    SpayedNeutered: "Yes",
    Age: "1",
    AnimalID: "49582",
    MicrochipNumber: "982000347829101",
    Summary:
      "Health checked. Vacciantions up to date. Regularaly dewormed. Microchipped",
    Biography: "A silly lil guy",
  },
  {
    Type: "Cat",
    ImageUrl:
      "https://www.thesprucepets.com/thmb/2HF5pGwbA1_74qlubXRyEM_xxlk=/2121x0/filters:no_upscale():strip_icc()/GettyImages-1319774380-c3da91f9259a47e0966007f8e10690ba.jpg",
    Name: "George",
    Breed: "British Shorthair",
    Sex: "Male",
    Color: "Blue (Gray)",
    SpayedNeutered: "Yes",
    Age: "4",
    AnimalID: "61029",
    MicrochipNumber: "985112007651234",
    Summary:
      "Health checked. Vacciantions up to date. Regularaly dewormed. Microchipped",
    Biography:
      "George is a robust British Shorthair with a striking blue-gray coat and a calm, dignified demeanor. Rescued from a busy city environment, he's adapted well to a quieter life. George enjoys leisurely days, lounging in sunny spots, and watching the world go by. He's not overly demanding for attention but appreciates a good chin scratch and will purr loudly in response. George is a bit reserved at first but becomes a loyal companion once he feels comfortable. He would be perfect for someone seeking a low- maintenance, independent cat.",
  },
  {
    Type: "Dog",
    ImageUrl: "https://a-z-animals.com/media/2021/11/Fawn-boxer.jpg",
    Name: "Bella",
    Breed: "Boxer",
    Sex: "Female",
    Color: "Fawn with white markings",
    SpayedNeutered: "Yes",
    Age: "6",
    AnimalID: "50824",
    MicrochipNumber: "982000360234567",
    Summary:
      "Health checked. Vacciantions up to date. Regularaly dewormed. Microchipped",
    Biography:
      "Bella is a spirited Boxer with a fawn coat and charming white markings. She was rescued from a neglectful situation and has shown immense love and gratitude to her caregivers. Bella is energetic and playful, enjoying activities like running and playing fetch. She's great with older children and would thrive in a home where she can be active and engaged. Bella has a big personality and would be a fantastic companion for someone who loves adventure and fun.",
  },
  {
    Type: "Cat",
    ImageUrl:
      "https://www.catster.com/wp-content/uploads/2023/11/Sealpoint-Ragdoll-on-blue-background_Linn-Currie_Shutterstock-e1689074593206.jpg",
    Name: "Sophie",
    Breed: "Ragdoll",
    Sex: "Female",
    Color: "Seal point with blue eyes",
    SpayedNeutered: "Yes",
    Age: "1",
    AnimalID: "63845",
    MicrochipNumber: "985112008765432",
    Summary:
      "Health checked. Vacciantions up to date. Regularaly dewormed. Microchipped",
    Biography:
      "Sophie is a young Ragdoll cat with a soft seal point coat and mesmerizing blue eyes. She was found as a kitten and raised in a foster home. Sophie is incredibly affectionate, often seeking out laps to curl up in. She's playful and enjoys interactive toys, but she's also content to relax and watch the world go by. Sophie gets along well with other pets and would be an excellent addition to a loving family or individual looking for a gentle and loving companion.",
  },
];
