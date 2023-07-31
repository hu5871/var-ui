<template>
  <v-root ref="root" bgColor="rgb(245, 245, 245)" :padding="[16, 20]">
    <v-html :content="content" :tag-style="tagStyle"></v-html>
  </v-root>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      tagStyle:{
        table: 'box-sizing: border-box; border-top: 1px solid #dfe2e5; border-left: 1px solid #dfe2e5;',
					th: 'border-right: 1px solid #dfe2e5; border-bottom: 1px solid #dfe2e5;',
					td: 'border-right: 1px solid #dfe2e5; border-bottom: 1px solid #dfe2e5;',
      },
      content: `<section style="margin-top: 1.5em;">
    <table width="100%" cellspacing="0" cellpadding="5">
      <thead>
        <tr>
          <th align="center">标题 1</th>
          <th align="center">标题 2</th>
          <th align="center">标题 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td align="center" colspan="2">内容 1</td>
          <td align="center" rowspan="2">内容 2</td>
        </tr>
        <tr>
          <td align="center" rowspan="2">内容 3</td>
          <td align="center">内容 4</td>
        </tr>
        <tr>
          <td align="center" colspan="2">内容 5</td>
        </tr>
        <tr>
          <td align="center">内容 6</td>
          <td align="center">内容 7</td>
          <td align="center"><a>链接</a></td>
        </tr>
      </tbody>
    </table>
    <div style="font-size: 12px; color: gray; text-align: center; margin-top: 5px;">含有合并单元格的表格</div>
  </section>`
    }
  },
  watch: {

  },
  methods: {

  }
}
</script>

<style></style>