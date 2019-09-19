<template>
        <v-layout row wrap>
            <v-flex xs12>
                <v-spacer></v-spacer>
                <v-btn round outline>
                    发布文章
                </v-btn>
            </v-flex>
            <v-flex xs12>
                <div id="editorMenu" class="editorMenu"></div>
                <div id="editor" class="editor"></div>
            </v-flex>
        </v-layout>
</template>


<script>
    import E from "wangeditor";
    export default {
        name: "wangeditor",
        methods: {
            getContent: function() {
                console.log(this.editorContent);
            }
        },
        mounted() {
            var editor = new E('#editorMenu', '#editor');
            editor.customConfig.onchange = html => {
                this.editorContent = html;
            };
            editor.create();
        }
    };
</script>

<style scoped>
    .editorMenu {
        border: 1px solid #ccc;
    }
    .editor {
        margin-top: -1px;
        border: 1px solid #ccc;
        min-height: 750px;
        height:auto;
    }
</style>
