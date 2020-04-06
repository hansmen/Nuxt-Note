<template lang="pug">
  main#main.w-full.flex.justify-center
    div.container.h-screen.m-0.flex.justify-center.content-center.text-center.flex-col
      div.flex.justify-center.flex-col.w-full
        h1.title.text-green-700.text-6xl.text-bold Note
      div.flex.justify-between.shadow.rounded.bg-gray-300.p-2.mb-3  
        nuxt-link(tag="a" :to="localePath('new')").ml-3.text-gray-500.w-8.h-8
          svg.logo__icon.w-8.h-8
              use(xlink:href="#icon-add")  
      section#todo.my-16.px-2
        ul.tasks.flex.flex-wrap
          Task(v-for="task in list" :key="task.id" :taskData="task")

</template>

<script>
const components = {
  Task: () => import('@/components/common/Task'),
};

export default {
  name: 'Index',
  components,
  async asyncData({ app }) {
    const list = [];
    await app.$fireStore
      .collection('todos')
      .get()
      .then(response => {
        response.docs.forEach(doc => {
          let newDoc = {};
          newDoc = doc.data();
          newDoc.id = doc.id;
          list.push(newDoc);
        });
      })
      .catch(error => {
        console.info(error);
      });
    return {
      list,
    };
  },
  data() {
    return {};
  },
  methods: {},
  head() {
    return {
      title: 'Nuxt Note',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'description',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'keywords',
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
