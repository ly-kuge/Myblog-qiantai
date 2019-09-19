<template>
    <v-card>
        <v-card-title>
            <v-spacer/>
            <v-flex xs3>
                状态：
                <v-btn-toggle mandatory v-model="saleable">
                    <v-btn flat>
                        全部
                    </v-btn>
                    <v-btn flat :value="true">
                        正常
                    </v-btn>
                    <v-btn flat :value="false">
                        冻结
                    </v-btn>
                </v-btn-toggle>
            </v-flex>
            <v-text-field
                    append-icon="search"
                    label="搜索"
                    single-line
                    hide-details
                    v-model="search"
            />
        </v-card-title>
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
                <td class="text-xs-center">{{ props.item.name }}</td>
                <td class="text-xs-center">{{ props.item.letter }}</td>
                <td class="justify-center layout px-0">
                    <v-flex xs3>
                        <v-switch
                                :label="frozen ? '正常' : '冻结'"
                                v-model="frozen"
                                color="dark"
                                hide-details
                        />
                    </v-flex>
                </td>
            </template>
            <template slot="expand" slot-scope="props">
                <v-card flat>
                    <v-card-text>Peek-a-boo!</v-card-text>
                </v-card>
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
    import {brandData} from '../../mockDB'

    export default {
        name: "brand",
        components: {},
        data() {
            return {
                search: '',// 过滤字段
                totalItems: 0,// 总条数
                items: [],// 表格数据
                loading: true,
                pagination: {},// 分页信息
                headers: [// 表头
                    {text: 'id', align: 'center', value: 'id'},
                    {text: '昵称', align: 'center', sortable: false, value: 'name'},
                    {text: '状态', align: 'center', sortable: false, value: 'image'},
                    {text: '操作', align: 'center',value: 'id', sortable: false}
                ],
                isEdit: false, // 判断是编辑还是新增
                frozen: false,//判断是否为冻结状态
                saleable:true,//搜索
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
                }
            },
            show(val, oldVal) {
                // 表单关闭后重新加载数据
                if (oldVal) {
                    this.getDataFromApi();
                }
            }
        },
        mounted() {
            this.getDataFromApi();
        },
        methods: {
            addBrand() {
                this.brand = {};
                this.isEdit = false;
                this.show = true;
            },
            editBrand(item) {
                this.brand = item;
                this.isEdit = true;
                this.show = true;
                // 查询商品分类信息，进行回显
                this.$http.get("/item/category/bid/" + item.id)
                    .then(resp => {
                        this.brand.categories = resp.data;
                    })

            },
            deleteBrand(item) {
                this.$message.confirm('此操作将永久删除该品牌, 是否继续?').then(() => {
                    // 发起删除请求
                    this.$http.delete("/item/brand?id=" + item.id,)
                        .then(() => {
                            // 删除成功，重新加载数据
                            this.$message.success("删除成功！");
                            this.getDataFromApi();
                        })
                }).catch(() => {
                    this.$message.info("删除已取消！");
                });

            },
            getDataFromApi() {
                this.loading = true;
                // 200ms后返回假数据
                window.setTimeout(() => {
                    this.items = brandData.slice(0, 4);
                    this.totalItems = 100
                    this.loading = false;
                }, 200)
            }
        }
    }
</script>

<style scoped>

</style>
