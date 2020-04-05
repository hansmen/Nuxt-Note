<template lang="pug">
  main#main.w-full.flex.justify-center
    div.container.h-screen.m-0.flex.justify-center.content-center.text-center.flex-col
      div.z-10.flex.justify-center.items-center.popup.p-4(class="md:p-0")
        div.w-full.mt-16
          form.bg-white.shadow-md.rounded.px-8.pt-6.pb-8.mb-4
            nuxt-link(tag="a" :to="localePath('/')").flex.justify-end
              svg.logo__icon.w-4.h-4
                use(xlink:href="#icon-close")
            div.mb-4
              label.block.text-gray-700.font-bold.mb-2.text-md Viewed post
              span(class="focus:outline-none focus:bg-white").appearance-none.block.w-full.text-gray-700.border.rounded.py-3.px-4.mb-3.leading-tight {{ task.name }}
            div.mb-4
              span(
                class="focus:outline-none focus:bg-white"
                ).appearance-none.block.w-full.text-gray-700.border.rounded.py-3.px-4.mb-3.leading-tight.h-16 {{ task.content }}
          form(@submit.prevent="save").bg-white.shadow-md.rounded.px-8.pt-6.pb-8.mb-4
            div.mb-4
              label(for="username").block.text-gray-700.text-md.font-bold.mb-2 Write your comment
              label(for="username").block.text-gray-700.text-sm.font-bold.mb-2.mt-4 Author
              input(placeholder="author" class="focus:outline-none focus:bg-white" v-model="form.author" required).appearance-none.bloc.w-full.bg-gray-200.text-gray-700.border.rounded.py-3.px-4.mb-3.leading-tight
            div.mb-4
              label(for="content").block.text-gray-700.text-sm.font-bold.mb-2 Content
              input(placeholder="content" class="focus:outline-none focus:bg-white" v-model="form.content" required).appearance-none.block.w-full.bg-gray-200.text-gray-700.border.rounded.py-3.px-4.mb-3.leading-tight.h-24
            div
              button(type="submit" value="add" class="hover:bg-gray-800 focus:outline-none focus:shadow-outline").bg-gray-900.text-white.font-bold.py-2.px-4.rounded.w-full.uppercase.tracking-wider Add
          section#todo.my-16.px-2
            ul.tasks.flex.flex-wrap
              Comment(v-for="comment in comments" :key="comment.id" :commentData="comment")
</template>

<script>
const components = {
  Comment: () => import('@/components/common/Comment'),
};
export default {
  name: 'New',
  components,
  async asyncData({ app, route }) {
    const task = await app.$fireStore
      .collection('todos')
      .doc(route.params.task)
      .get()
      .then(response => {
        let newDoc = {};
        newDoc = response.data();
        newDoc.id = response.id;
        return newDoc;
      });
    const comments = [];
    await app.$fireStore
      .collection('comments')
      .where('task_id', '==', route.params.task)
      // .where('checked', '==', true)
      .get()
      .then(response => {
        response.docs.forEach(doc => {
          let newDoc = {};
          newDoc = doc.data();
          newDoc.id = doc.id;
          comments.push(newDoc);
        });
      });
    return {
      task,
      comments,
    };
  },
  data() {
    return {
      form: {
        author: '',
        content: '',
        created_at: new Date(),
      },
    };
  },
  methods: {
    async save() {
      try {
        this.form.task_id = this.$route.params.task;
        await this.$fireStore
          .collection('comments')
          .doc()
          .set(this.form)
          .then(response => {
            console.info(response);
          });
      } catch (error) {
        console.info(error);
      }
    },
    checkForm() {},
  },
};
</script>

<style lang="scss" scoped>
</style>
