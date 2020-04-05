<template lang="pug">
  main#main.w-full.flex.justify-center
    div.container.h-screen.m-0.flex.justify-center.content-center.text-center.flex-col
      div.z-10.absolute.inset-0.flex.justify-center.items-center.popup.p-4.hidden(class="md:p-0")
        div.w-full.max-w-md
          form.bg-white.shadow-md.rounded.px-8.pt-6.pb-8.mb-4
            div.mb-4
              label(for="username").block.text-gray-700.text-sm.font-bold.mb-2 Author
              input(placeholder="name" class="focus:outline-none focus:bg-white").appearance-none.bloc.w-full.bg-gray-200.text-gray-700.border.rounded.py-3.px-4.mb-3.leading-tight
            div.mb-4
              label(for="content").block.text-gray-700.text-sm.font-bold.mb-2 Content
              input(placeholder="content" class="focus:outline-none focus:bg-white").appearance-none.block.w-full.bg-gray-200.text-gray-700.border.rounded.py-3.px-4.mb-3.leading-tight.h-32
            div
              button(type="submit" value="add" class="hover:bg-gray-800 focus:outline-none focus:shadow-outline").bg-gray-900.text-white.font-bold.py-2.px-4.rounded.w-full.uppercase.tracking-wider Add
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
  methods: {
    // onAddNew: function() {
    //   this.editWindow = { title: "", text: "", done: false, show: true };
    //     },
  },
  head() {
    return {
      title: 'Nuxt SPA Note',
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
