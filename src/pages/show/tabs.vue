<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <v-card >
      <v-tabs v-model="list" v-model:active="active">
      </v-tabs>
       <v-text>
        {{ active }} 从前，有一个小村庄位于山脚下，村庄的名字叫做阳光村。阳光村是一个和睦、温暖的地方，村民们互相关爱，彼此帮助。
        在阳光村里住着一位名叫小明的小男孩。小明非常喜欢冒险和探索。他总是穿着一身鲜艳的蓝色服装，头戴一顶绿色的帽子。他的笑容和快乐总是能够感染周围的人。
        有一天，小明听说村子外面有一座神秘的迷宫，据说里面藏有珍贵的宝藏。小明立刻决定要去探险，寻找那个宝藏。
        小明带着勇气和好奇心，踏上了迷宫的旅程。迷宫里弯弯曲曲、密密麻麻，小明面对一个又一个的岔路和谜题，但他从不气馁。
        在迷宫中，小明遇到了一只受伤的小鸟。小鸟告诉他，它迷路了，找不到回家的路。小明心生同情，决定帮助小鸟。他细心地指引小鸟回到了它的巢穴，并用细细的树叶为它包扎伤口。
        小鸟感激地对小明说：“谢谢你，你不仅是一个勇敢的冒险者，更是一个善良的人。”小明微笑着说：“我相信每个人都有一颗善良的心，只需要给予机会去展现。”
        最终，小明终于找到了迷宫中的宝藏。宝藏是一颗发光的宝石，它代表着友情、勇气和善良。小明明白，真正的宝藏不仅仅是金银财宝，更重要的是内心的美德和与他人的真诚相待。
        小明带着宝石回到阳光村，与村民们分享了自己的冒险故事。大家被他的勇气和善良所感动，从那天起，阳光村的人们更加珍惜友情，共同创造了一个更加美好的村庄。
       </v-text>
    </v-card>
    <v-card  :margin="[16, 16]">
      <v-tabs v-model="list1" v-model:active="active1" iconActiveColor="#fecc11" lineColor="#fecc11" activeColor="#fecc11">
      </v-tabs>
    </v-card>
  </v-root>
</template>

<script>
export default {
  data () {
    return {
      active:'',
      active1:'',
      list: [
        {
          name: 'title1',
          title: '标题'
        },
        {
          name: 'title2',
          title: '周末要锻炼身体'
        },
        {
          name: 'title3',
          title: '体育中心'
        },
        {
          name: 'title4',
          title: '2002年的第一场雪'
        },
        {
          name: 'title5',
          title: '汽车'
        },
      ],
      list1: [
        {
          name: 'title1',
          title: '标题',
          icon: 'icon-baseball-outline'
        },
        {
          name: 'title2',
          title: '周末要锻炼身体',
          icon: 'icon-barbell'

        },
        {
          name: 'title3',
          title: '体育中心',
          icon: 'icon-body'

        },
        {
          name: 'title4',
          title: '2002年的第一场雪',
          icon: 'icon-cloudy'

        },
        {
          name: 'title5',
          title: '汽车',
          icon: 'icon-cart-outline'

        },
      ]
    }
  }
}
</script>

<style></style>