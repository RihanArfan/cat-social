<script setup lang="ts">
import { vIntersectionObserver } from "@vueuse/components";

const posts = useState<Post[]>("posts", () => []);

async function generatePosts() {
  const newPosts = await useGeneratePosts(10); // generates 10 random posts
  posts.value.push(...newPosts);
}

generatePosts();

// useInfiniteScroll needs a container with a fixed height
const onScroll: IntersectionObserverCallback = async ([{ isIntersecting }]) => {
  if (!isIntersecting) return; // don't trigger again when data loads
  generatePosts();
};

const { hue } = useScrollColour();
</script>

<template>
  <Head>
    <Title>cAT Social</Title>
    <Link rel="icon" type="image/png" href="/kesh.png" />
  </Head>

  <Body
    class="overscroll-x-none font-cursive"
    :style="`background: hsl(${hue} 100% 85%);`"
  />

  <UContainer
    :ui="{ constrained: 'max-w-lg' }"
    class="flex flex-col gap-3 items-center py-2"
  >
    <h1 class="font-extrabold text-2xl">cAT Social</h1>

    <SkeletonPost v-if="!posts.length" v-for="i in 10" :key="i" />
    <Post v-for="post in posts" :key="post.id" v-bind="post" />

    <SkeletonPost v-intersection-observer="onScroll" />
  </UContainer>
</template>
