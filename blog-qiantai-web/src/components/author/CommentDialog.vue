<template>
    <v-card >
        <v-card-text>
            <v-text-field
                    name="input-7-2"
                    round
                    textarea
                    rows="2"
                    value="添加你的评论"
                    class="input-group--focused"
                    multi-line
            ></v-text-field>
                <v-toolbar flat  color="white" >
                    <v-spacer></v-spacer>
                    <v-btn flat>取消</v-btn>
                    <v-btn round>确定</v-btn>
                </v-toolbar>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "CommentDialog",
        data: () => ({}),
        methods: {
            /**
             * 提交评论
             */
            commitComment() {
                console.log(this.inputComment);
            },
            cancel() {
                console.log(this.inputComment);
            },
        }
    }
</script>

