/**
 * Generate random posts
 *
 * @param posts Number of posts to generate
 * @returns List of posts
 */
export default async function (posts: number): Promise<Post[]> {
  // list of usernames for auto generated posts
  const usernames = ref([
    { name: "Kesh", username: "kesh" },
    { name: "Cat Lover", username: "catlover100" },
    { name: "Test In Production", username: "testinproduction" },
    { name: "Kesh Fan", username: "keshfanxoxo" },
    { name: "I Love Cats", username: "ilovecats" },
    { name: "Kidnapping ur cat", username: "catnapper1" },
  ]);

  // random quotes for captions
  const quotesEndpoint = `https://api.quotable.io/quotes/random?limit=${posts}&maxLength=100`;
  const quotes = await $fetch<[{ content: string }]>(quotesEndpoint);

  const newPosts = [];

  for (let i = 0; i < posts; i++) {
    const randomUser =
      usernames.value[Math.floor(Math.random() * usernames.value.length)];

    // 25% chance of having multiple photos
    const photos =
      Math.random() < 0.25
        ? [
            `https://cataas.com/cat?width=500&height=500&${i}`,
            `https://cataas.com/cat?width=500&height=500&${i + 1}`,
            `https://cataas.com/cat?width=500&height=500&${i + 2}`,
          ]
        : [`https://cataas.com/cat?width=500&height=500&${i}`];

    // dates get older as we go down the list
    const date = new Date();
    date.setDate(date.getDate() - Math.floor(Math.random() * 3) - 1 - i * 5);

    const currentDate = Date.now();

    newPosts.push({
      id: `${currentDate}-${i}`,
      photos,
      caption: quotes[i].content,
      user: {
        ...randomUser,
        avatar: `https://cataas.com/cat?width=100&${i}`,
      },
      posted_at: date.toISOString(),
    });
  }

  return newPosts;
}
