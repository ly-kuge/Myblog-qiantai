<template>
  <v-card>
    <v-toolbar class="elevation-0">
      <v-spacer/>
      <v-flex xs3>
        状态：
        <v-btn-toggle mandatory v-model="search.saleable">
          <v-btn flat>
            全部
          </v-btn>
          <v-btn flat :value="true">
            下架
          </v-btn>
          <v-btn flat :value="false">
            下架
          </v-btn>
        </v-btn-toggle>
      </v-flex>
      <v-flex xs3>
        <v-text-field
          append-icon="search"
          label="搜索"
          single-line
          hide-details
          v-model="search.key"
        />
      </v-flex>
    </v-toolbar>
    <v-divider/>
    <v-data-table
      :headers="headers"
      :items="items"
      :pagination.sync="pagination"
      :total-items="totalItems"
      :loading="loading"
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-center">{{ props.item.id }}</td>
        <td class="text-xs-center">{{ props.item.title }}</td>
        <td class="text-xs-center">{{ props.item.categoryName}}</td>
        <td class="text-xs-center">{{ props.item.brandName }}</td>
        <td class="justify-center layout px-0">
          <v-btn icon small @click="deleteItem(props.item.id)">
            <i class="el-icon-delete"/>
          </v-btn>
          <v-btn icon small>
            预览
          </v-btn>
          <v-btn icon small v-if="props.item.saleable">下架</v-btn>
          <v-btn icon v-else>上架</v-btn>
        </td>
      </template>
      <template slot="no-data">
        <v-alert :value="true" color="error" icon="warning">
          对不起，没有查询到任何数据 :(
        </v-alert>
      </template>
      <template slot="pageText" slot-scope="props">
        共{{props.itemsLength}}条,当前:{{ props.pageStart }} - {{ props.pageStop }}
      </template>
    </v-data-table>

  </v-card>
</template>

<script>
  import {goodsData} from "../../mockDB";

  export default {
    name: "item",
    components: {
    },
    data() {
      return {
        search: {
          key: '',
          saleable: true,
        },// 过滤字段
        totalItems: 0,// 总条数
        items: [],// 表格数据
        loading: true,
        pagination: {},// 分页信息
        headers: [// 表头
          {text: 'id', align: 'center', value: 'id'},
          {text: '标题', align: 'center', sortable: false, value: 'name'},
          {text: '商品分类', align: 'center', sortable: false, value: 'image'},
          {text: '发布时间', align: 'center', value: 'letter', sortable: true,},
          {text: '操作', align: 'center', value: 'id', sortable: false}
        ],
        show: false,// 是否弹出窗口
        selectedGoods: null, // 选中的商品信息
        isEdit: false, // 判断是编辑还是新增
        step: 1// 表单中的导航条
      }
    },
    watch: {
      pagination: {
        handler() {
          this.getDataFromApi();
        },
        deep: true
      },
      search: {
        handler() {
          this.getDataFromApi();
        },
        deep: true
      }
    },
    mounted() {
      this.getDataFromApi();
    },
    methods: {
      closeForm() {
        this.isEdit = false;
        this.show = false;
        this.step = 1;
        this.selectedGoods = null;
        this.getDataFromApi();
      },
      lastStep() {
        if (this.step === 1) {
          return;
        }
        this.step--;
      },
      nextStep() {
        if (this.step === 4) {
          return;
        }
        if (this.$refs.goodsForm.$refs.basic.validate()) {
          this.step++;
        }
      },
      addItem() {
        this.selectedGoods = null;
        this.isEdit = false;
        this.show = true;
      },
      editItem(item) {
        this.selectedGoods = item;
        const names = item.categoryName.split("/");
        this.selectedGoods.categories = [
          {id: item.cid1, name: names[0]},
          {id: item.cid2, name: names[1]},
          {id: item.cid3, name: names[2]}
        ];
        // 查询商品详情
        this.$http.get("/item/goods/spu/detail/" + item.id)
          .then(resp => {
            this.selectedGoods.spuDetail = resp.data;
            this.selectedGoods.spuDetail.specTemplate = JSON.parse(resp.data.specTemplate);
            this.selectedGoods.spuDetail.specifications = JSON.parse(resp.data.specifications);
          })
        this.isEdit = true;
        this.show = true;
      },
      deleteItem(id) {
        this.$message.confirm('此操作将永久删除该商品, 是否继续?')
          .then(() => {
            // 发起删除请求
            this.$http.delete("/item/goods?id=" + id)
              .then(() => {
                // 删除成功，重新加载数据
                this.getDataFromApi();
                this.$message.info('删除成功!');
              })
          })
          .catch(() => {
            this.$message.info('已取消删除');
          });

      },
      getDataFromApi() {
        this.loading = true;
        setTimeout(() => {
          // 返回假数据
          this.items = goodsData.slice(0, 4);
          this.totalItems = 25;
          this.loading = false;
        }, 300)
      }
    }
  }
</script>

<style scoped>
  label {
    font-size: 14px;
  }
</style>
